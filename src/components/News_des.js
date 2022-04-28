import React from 'react'
import { useLocation } from 'react-router-dom';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavBarComponent from './Navbar'
const News_des = (props) => {

    const location = useLocation();
    const { newsItem } = location.state;

    console.log(location.newsItem)
    return (
        <div>
            <NavBarComponent/>
            <Card  >
                <CardTitle style={{ color: "black", fontSize: 40, fontWeight: "bold", paddingTop: "20px", paddingLeft: "300px", paddingRight: "100px" }}> {newsItem.headline}</CardTitle>
                <div>
                    <div className="col-6">
                        <CardText style={{ color: "black", fontSize: 18, paddingTop: "2px", paddingLeft: "300px" }}>{newsItem.timestamp}</CardText>
                    </div>
                </div>
                <CardImg style={{ borderColor: "red", paddingLeft: "300px", paddingRight: "300px", paddingTop: "10px" }} src={newsItem.img} alt=" there is no image" />
                <CardBody>
                    <CardText style={{ color: "black", fontSize: 22, paddingTop: "20px", paddingLeft: "100px", paddingLeft: "100px" }}>{newsItem.desc}</CardText>

                </CardBody>
            </Card>
        </div>
    )
}

export default News_des