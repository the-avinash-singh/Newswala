import React, { Component } from 'react'
import noimage from "./component/noimage.png"
export class NewsItem extends Component {

  render() {
   let {title,descrption,imageUrl,newsurl,author,date,source}=this.props;
    return (
      <div className='my-3'>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%" , zIndex:1}}>
    {source}
    </span>
  <img src={imageUrl?imageUrl:noimage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}
  </h5>
    <p className="card-text">{descrption}</p>
    <p className='card-text'><small className="text-muted">by {!author?"unknown author":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
