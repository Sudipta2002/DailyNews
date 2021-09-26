import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
        constructor(){
        super();
        console.log("Hello I am a constructor");
        this.state={
            articles: [],
            loading:false,
            page:1,
        }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=74abaff7c1ec4f808346dfaba60b1f64&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles,totalResults: parsedData.totalResults});
    }
    handlePrevClick= async()=>{
        
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=74abaff7c1ec4f808346dfaba60b1f64&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url); 
        let parsedData= await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles});
        this.setState({
            
            page: this.state.page-1,
    
        })
    }
    handleNextClick= async()=>{
        if(this.state.page+1> Math.ceil(this.state.totalResults/20)){

        }else{

            let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=74abaff7c1ec4f808346dfaba60b1f64&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url); 
            let parsedData= await data.json()
            console.log(parsedData);
            this.setState({articles:parsedData.articles});
            this.setState({
                
                page: this.state.page+1,
    
            })
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2>Daily Dose</h2>
                <div className="row">
                    {this.state.articles.map((e)=>{
                        return <div className="col-md-4" key={e.url}>
                            <NewsItem title={e.title} description={e.description} imageUrl={e.urlToImage} url={e.url}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" class="btn btn-warning" onClick={this.handlePrevClick}> &larr;Previous</button>
                <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/20)}type="button" class="btn btn-warning" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
