import StartupCard from "./StartupCard";
import axios from "axios";
import Navbar from './Navbar';
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
let api_url = 'https://jiobackend.herokuapp.com/api/startup/'
let objcount_url = `https://jiobackend.herokuapp.com/api/objcount/startup`

export default function StartupNews(props) {

    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [search,setSearch] = useState('');
    const [pageFound , setPageFound] = useState(true);
    const [IsLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        async function getStartupData() {
            if (search === ''){
                setIsLoading(true);
                axios.get(`${objcount_url}`).then(
                    (objcountRes)=>{
                        setPageCount(Math.ceil(objcountRes.data.objcount/10));
                        setIsLoading(false);
                    } 
                );
                axios.get(`${api_url}all/${pageNumber + 1}`).then(
                    (res)=>{
                        setPageFound(true);
                        setData(res.data);
                        setIsLoading(false);
                    }
                )
            }else{
               setIsLoading(true);
               axios.get(`${api_url}sector/${search}/${pageNumber + 1}`).then(
                (res)=>{
                    if(res.data.error){
                        setPageCount(0);
                        setPageFound(false);
                        setData([]);
                        setIsLoading(false);
                    }else{
                           axios.get(`${objcount_url}/${search}`).then(
                           (objcountRes)=>{
                            setPageCount(Math.ceil(objcountRes.data.objcount/10));
                            setPageFound(true);
                            setData(res.data);
                            setIsLoading(false);
                           }
                       );
                       
                    }
                 }   
               );
            }            
        }
        getStartupData();
    }, [pageNumber,search]);

    const displayData = data.map((page, index) => {
        return (
            <StartupCard index={index} data={page} />
        )
    });
    const changePage = ({ selected }) => {
        setPageNumber(selected);
        console.log("present page :", selected);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setPageNumber(0);
        setSearch(e.target[0].value);    
        e.target.reset();
    }

    return (
        <>
        <Navbar/>
        <div className="container">
            <h1 className="heading" >STARTUPs INFORMATION</h1>
            <div class="flex-container" >       
            <div className = "search">    
            <form  className="d-flex " onSubmit={ handleSubmit}>
                <input className="form-control" type="search"  style = {{border: "solid"}} placeholder="Search..." aria-label="Search" />
                <button className="btn btn-outline-success" type="submit" style = {{border: "solid", marginLeft:2}}>Search</button>
                <button className="btn btn-outline-danger" type="reset"  style = {{border: "solid" ,marginLeft:2}} onClick = {()=>{setSearch("");}}>clear</button>
            </form>   
            {search !== "" && <p>Search Tag : {search}</p>}        
            </div>             
            </div>
            {IsLoading &&
           <h4 style ={{ textAlign:"center"}}>Loading...</h4>
           }      
          { pageFound ?
            <div>
            <div className="startupnews" >
                {displayData}
            </div>
            <ReactPaginate
                previousLabel={"<prev"}
                nextLabel={"next>"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"prevBttn"}
                nextLinkClassName={"prevBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            >
            </ReactPaginate> 
          </div> :
          <h3 style={{textAlign: "center"}}> 
              No results found !!!
          </h3>
      }
        </div>
        </>
    );

}
