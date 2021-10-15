import React  from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card" >
                <div>
                    <span className="badge rounded-pill bg-danger" style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}>
                        {source}</span>

                </div>
                <img src={imageUrl ? imageUrl : "https://s.france24.com/media/display/b7955a32-2aea-11ec-8a5e-005056a90284/w:1280/p:16x9/2021-10-06T142749Z_1734694171_RC2E4Q9159JM_RTRMADP_3_HEALTH-CORONAVIRUS-FRANCE.JPG"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
