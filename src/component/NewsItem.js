import React from 'react'
import noimage from "./noimage.png"
const NewsItem=(props)=> {

  
   let {title,description,imageUrl,newsurl,author,date,source}=props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
            display:"flex",
            justifyContent:"flex-end",
            position:"absolute",
            right:"0"
          }}>
        <span className="badge rounded-pill bg-danger" >
    {source}
    </span>
    </div>
  <img src={imageUrl?imageUrl:noimage} className="card-img-top" alt="..." height="190px"/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,60).concat("....")}
  </h5>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className="text-muted">by {!author?"unknown author":author} on {new Date(date).toDateString()}</small></p>
    <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read more</a>
  </div>
</div>
      </div>
    )
}

export default NewsItem
