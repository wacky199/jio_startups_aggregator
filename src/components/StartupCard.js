import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';  
const headingColor = [
    "#00008B",  //DarkBlue
    "#008080",  //teal
    "#8A2BE2",  //BlueViolet
    "#DC143C",  //crimsonRed
    "#228B22", //ForestGreen
    "#8B008B",  //DarkMagenta
    "#FF8C00",  //DarkOrange
    "#FF1493", //DeepPink     
    "#4B0082", //Indigo
    "#FF4500", //OrangeRed
    "#006400",  //DarkGreen
    "#800080", //Purple
];

export default function StartupCard(props) {
    let length = headingColor.length;
    let index = props.index % length;
    let desc_length = 300;
    return (
        <>
    <div className='startupcards'>
    <div className="startupcard">
    {props.data.img && <img src={props.data.img} />}
    <div className="card-body">
      {props.data.name && <h2 style = {{ fontWeight:"bold" , color:headingColor[index]}} >{props.data.name}</h2>}
      {props.data.legal_name && <h5 >{props.data.legal_name}, {props.data.founding_date}</h5>}
      {props.data.headquarter && <h5 >{props.data.headquarter}</h5>}
      {props.data.core_team && <h4 >{props.data.core_team}</h4>}
     {props.data.desc && <p>{props.data.desc.length>desc_length? props.data.desc.slice(0,desc_length) : props.data.desc }.... 
      <Link to="/startup_description" state= {{data: props.data}} style={{ textDecoration:"none" }}> read more</Link>  
      </p>}
      { props.data.link &&
      <Button href = {props.data.link} variant="primary" target="_blank" >Visit Site</Button> }
      {props.data.business_model && <p class="card-text"><small class="text-muted">{props.data.business_model}</small></p> }
      {props.data.sector && <p class="card-text"><small class="text-muted">{props.data.sector}</small></p> }
    </div>
  </div>
</div>  
      </>  
    );
}
