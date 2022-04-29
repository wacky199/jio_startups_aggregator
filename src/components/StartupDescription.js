import React from 'react'
import { useLocation } from 'react-router-dom';
import NavBarComponent from './Navbar'
import { useEffect } from "react";
import {Button} from 'react-bootstrap';


export default function StartupDescription(props) {
    const location = useLocation();    
    const data = location.state.data;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    console.log("funding ", data.funding_round);
    const displayData = data.funding_round.slice(0,5).map((fund,index) => {
        return(
            <>
            <p><span style={{fontWeight: "bold"}}>{index+1})</span>
            {fund["funding amount"] && <><span style={{fontWeight: "bold"}}> Fund:</span> {fund["funding amount"]}</> }
            {fund["Series Name"] && <>,<span style={{fontWeight: "bold"}}> Series:</span> {fund["Series Name"]}</>}
            {fund["Date"] && <>,<span style={{fontWeight: "bold"}}> Date:</span> {fund["Date"]}</>}
            {fund["Investors"] && <>,<span style={{fontWeight: "bold"}}> Investors:</span> {fund["Investors"]}</>}
            .</p>
            </>
        );
    });

    return (
        <>
            <NavBarComponent />
            <div className="startupnews">
                <div className="startupcard">
                    <img src={data.img} alt=""/>
                </div>
            </div>
            <div className="startupnews">
                <div className="descriptionCard">
                    <div className="card-body">
                    {data.name && <h2 style={{ fontWeight: "bold" }} >{data.name}</h2>}
                     {data.legal_name && <h5> <span style={{ color:"royalblue"}} > Legal Name: </span>{data.legal_name}</h5>}
                     {data.founding_date &&  <h5><span style={{ color:"royalblue"}} > Founding Date:</span> {data.founding_date}</h5>}
                      {data.headquarter &&  <h5><span style={{ color:"royalblue"}} > HeadQuarter:</span> {data.headquarter}</h5>}
                      {data.core_team &&  <h5><span style={{ color:"royalblue"}} > Core team:</span> {data.core_team}</h5>}
                      {data.desc && <><h5 style={{ color:"royalblue"}} >About:</h5><h5 style = {{fontWeight:450}}>{data.desc}</h5></>}
                      {data.no_of_emp &&  <h5><span style={{ color:"royalblue"}} > No. of employees:</span> {data.no_of_emp}</h5>}
                      {data.sector &&  <h5><span style={{ color:"royalblue"}} > Sector:</span> {data.sector}</h5>}
                      {data.business_model &&  <h5><span style={{ color:"royalblue"}} > Business Model:</span> {data.business_model}</h5>}
                      {data.funding_round.length!==0 &&  <><h5 style={{ color:"royalblue"}}>Recent Funding Round:</h5> {displayData}</>}
                       <Button href = {data.link} variant="primary" target="_blank" >Visit Site</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
