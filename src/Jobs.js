import React from "react";

export default function Jobs(props){
      return(<div className="job-cards">
        
        <div className="title-company">
           <h2>{props.title}</h2>
           <h3>{props.company}</h3>
        </div>
        <div className="job-details">
        <div className="nature-location">
           <p><strong>{props.nature} | {props.location}</strong></p>
        </div>
        <div className="skillset">
           <p>{props.skills}</p>
        </div>
        <div className="job-about">
          <p>{props.about}</p>
        </div>
        </div>
      </div>)
}