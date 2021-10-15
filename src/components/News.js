import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    



    const newsUpdate = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);

        let parseData = await data.json()
        props.setProgress(70);
        console.log(parseData);
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)

        props.setProgress(100);
    }
    useEffect(() => {
        document.title = `NewsHope - ${capitalize(props.category)}`
        newsUpdate();
        // eslint-disable-next-line
    }, [])
    //this two is for next and previous button
    // const handleNextClick = async () => {
    //     console.log("Next page click")
    //     setPage(page + 1)
    //     newsUpdate();
    // }
    // const handlePreviousClick = async () => {
    //     console.log("Previous page click")
    //     setPage(page - 1)
    //     newsUpdate();
    // }
    const fetchMoreData = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1 }&pageSize=${props.pagesize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
    };



    return (
        <>
            <h1 className="text-center" style={{ marginTop: '68px' }}>NewsHope - Top {capitalize(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}
                                    source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>

        </>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',

}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    headline: PropTypes.string
}

export default News
