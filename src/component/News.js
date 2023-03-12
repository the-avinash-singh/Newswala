import React, { Component } from 'react'
import NewsItem from '../NewsItem'
import { Spinner } from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country:"in",
    pagesize:8,
    category:"general"
    }
  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,
    }
    capital=(string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1)
    }
  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:true,
      page:1,
    }
    document.title=`${this.capital(this.props.category)}-Newswala`;
  }
  async updateNews(pageNo){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e14454bc3d34401b9ba6ecb2bbfa20a9&pagesize=${this.props.pagesize}`
    this.setState({loading:true})
    let data= await fetch(url);
    let parseddata=await data.json();
    this.setState({articles: parseddata.articles, totalResults:parseddata.totalResults,loading:false})

  }
  async componentDidMount(){
this.updateNews();
  }
  handlePrev= async()=>{
    this.setState({
      page:this.state.page-1,
    })
    this.updateNews();
  }
  handleNext=async()=>{
    this.setState({
      page:this.state.page + 1,
    })
this.updateNews();
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center '>NewsWala - Top for {this.capital(this.props.category)} category </h1>
        {this.state.loading&&<Spinner/>}
         <div className="row" >
        {!this.state.loading&&this.state.articles.map((element)=>{
          return<div className="col-md-4" key={element.url}>
        <NewsItem  title={element.title} descrption={element.description} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handlePrev}>&larr; previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)}type='button' className='btn btn-dark' onClick={this.handleNext}>next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News


