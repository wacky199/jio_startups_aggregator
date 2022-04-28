import { Component } from "react";
import React from "react";
import { useLocation } from "react-router-dom";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import NavBarComponent from './Navbar'

function InnovationDetails() {
  const innoItem = useLocation().state.innoItem;
  console.log(innoItem);
  return (
    <>
    <NavBarComponent/>
    <div>
      <Card>
        <CardTitle
          style={{
            color: "black",
            fontSize: 40,
            fontWeight: "bold",
            paddingTop: "20px",
            paddingLeft: "300px",
            paddingRight: "100px",
          }}
        >
          {" "}
          {innoItem.headline}
        </CardTitle>
        <div>
          <div className="col-6">
            <CardText
              style={{
                color: "black",
                fontSize: 18,
                paddingTop: "2px",
                paddingLeft: "300px",
              }}
            >
              {innoItem.timestamp}
            </CardText>
          </div>
        </div>
        <CardImg
          style={{
            borderColor: "red",
            paddingLeft: "300px",
            paddingRight: "300px",
            paddingTop: "10px",
          }}
          src={innoItem.img}
          alt=" there is no image"
        />
        <CardBody>
          <CardText
            style={{
              color: "black",
              fontSize: 22,
              paddingTop: "20px",
              paddingLeft: "100px",
              paddingLeft: "100px",
            }}
          >
            {innoItem.desc}
          </CardText>
        </CardBody>
      </Card>
    </div>
    </>);
}

export default InnovationDetails;
