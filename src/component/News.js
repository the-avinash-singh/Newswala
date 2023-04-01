import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { Spinner } from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import Endmgs from './Endmgs';

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
      totalResults:0,
    }
    document.title=`${this.capital(this.props.category)}-Newswala`;
  }
  async updateNews(pageNo){
    this.props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true});
    this.props.setProgress(30);
    let data= await fetch(url);
    let parseddata=await data.json();
    console.log(parseddata)
    this.props.setProgress(70);
    this.setState({articles: parseddata.articles, totalResults:parseddata.totalResults,loading:false})
this.props.setProgress(100);
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
  fetchMoreData = async() => {
   this.setState({page:this.state.page + 1,});
   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
   let data= await fetch(url);
   let parseddata=await data.json();
   this.setState({articles:this.state.articles.concat(parseddata.articles), totalResults:parseddata.totalResults,loading:false});
  };
  render() {
    return (
      <>
        <h1 className='text-center '>NewsWala - Top for {this.capital(this.props.category)} category </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length<=this.state.totalResults}
          loader={<Spinner/>}
          endMessage={<Endmgs/>}
        >
            <div className='container'>
         <div className="row" >
        {this.state.articles.map((element)=>{
          return<div className="col-md-4" key={element.urlToImage}>
        <NewsItem  title={element.title} descrption={element.description} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
  }
}

export default News
