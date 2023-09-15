import React from 'react'
import { useEffect,useState } from 'react';
import NewsItem from './NewsItem'
import Spinner  from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News=(props)=> {
 const [articles,setArticles]=useState([]);
 const [loading,setLoading]=useState(true);
 const [page,setPage]=useState(1);
 const [totalResults,setTotalResults]=useState(0);

    const capital=(string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1)
    }
  
  const updateNews=async()=>{
    props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true);
    props.setProgress(30);
    let data= await fetch(url);
    let parseddata=await data.json();
    props.setProgress(70);
    setArticles(parseddata.articles);
    setTotalResults(parseddata.totalResults);
    setLoading(false);
props.setProgress(100);
  }

  useEffect(()=>{
    document.title=`${capital(props.category)}-Newswala`;
    updateNews();
  },[])

  const fetchMoreData = async() => {
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pagesize}`;
    setPage(page+1);
   let data= await fetch(url);
   let parseddata=await data.json();
   setArticles(articles.concat(parseddata.articles));
   setTotalResults(parseddata.totalResults);
  };
    return (
      <>
        <h1 className='text-center' style={{ marginBottom:"35px",marginTop:"90px"}}>NewsWala - Top for {capital(props.category)} category </h1>
        {loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={articles?.length}
          next={fetchMoreData}
          hasMore={articles?.length!==totalResults}
          loader={<Spinner/>}
        >
            <div className='container'>
         <div className="row" >
        {articles?.map((element)=>{
          return<div className="col-md-4" key={element.url}>
        <NewsItem  title={element.title} descrption={element.description} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
      }
News.defaultProps={
  country:"in",
  pagesize:8,
  category:"general"
  }
News.propTypes={
  country:PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string,
  }
export default News
