import React, { Component, useEffect, useState } from 'react';
import axios from 'axios'
// import Loadable from "react-loadable";
import { Link } from 'react-router-dom';
import NavBarComponent from './Navbar'
import Spinner from './spinner';
import { Card, CardImg, CardTitle, CardBody, CardText, ListGroupItemHeading, CardFooter } from 'reactstrap';

let objcount
class News extends Component {

    state = {
        articles: [],
        pagesNumber: 1,
        loading: true,
    }

    constructor() {
        super();
        const obj_api=axios.create({
            baseURL:'https://jiobackend.herokuapp.com/api/objcount/news'
        })
        obj_api.get('/').then(res =>{
            console.log(res.data.objcount)
            this.setState({
                objcount:res.data.objcount
            })
        })

        axios.get('https://jiobackend.herokuapp.com/api/news/all/' + String(this.pagesNumber))
            .then(res => {
                console.log(res)
                this.setState({
                    articles: res.data,
                    loading: false
                    
                })
            })
        this.func = this.func.bind(this);
    }

    handleNextClick = () => {
        console.log("Next");
        this.setState({ loading: true });
        axios.get('https://jiobackend.herokuapp.com/api/news/all/' + String(this.state.pagesNumber + 1)).then(res => {
            console.log(res)
            this.setState({
                pagesNumber: this.state.pagesNumber + 1,
                articles: res.data,
                loading: false
            })
        })
        console.log(this.pagesNumber)
    }

    handlePrevClick = () => {
        console.log("Next")
        this.setState({ loading: true })
        axios.get('https://jiobackend.herokuapp.com/api/news/all/' + String(this.state.pagesNumber - 1)).then(res => {
            console.log(res)
            this.setState({
                pagesNumber: this.state.pagesNumber - 1,
                articles: res.data,
                loading: false
            })
        })
        console.log(this.pagesNumber)
    }
    func = (itemId) => {
        this.setState({ x: itemId });
    }


    render() {
        if (this.state.loading) {
            return <Spinner />;
         }
        return (
            <><NavBarComponent/>
            <div class="container">
                <h1 className="text-center" style={{fontFamily:'Times New Roman'}}> NEWS </h1>
                <div class="row">

                    {
                        this.state.articles.map(item =>
                            <div className="col-sm-4  mr-2 mt-1 mb-2" key={item._id}>
                                <Card style={{ height: '450px' }}>
                                    <CardImg style={{ display: "flex", flexWrap: "wrap" }} src={item.img} alt={item.headline} />
                                    <CardBody>
                                    <CardTitle> 
                                            <Link to="/news_des" state= {{newsItem: item}}>
                                                <h4 >{item.headline.slice(0,50)}</h4>
                                            </Link>
                                        </CardTitle>
                                    </CardBody>
                                    <CardFooter>
                                        <div className="row">
                                            <CardText>{item.timestamp}</CardText>
                                        </div>
                                    </CardFooter>
                                </Card>

                            </div>
                        )
                    }
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.pagesNumber <= 1} type='button' class="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.pagesNumber===Math.ceil(this.state.objcount/10)} type='button' class="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
                </div>
            </div>
            </> 
        );
    }
}

export default News