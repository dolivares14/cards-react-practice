import React from "react"
export default function Cards(props){
    return(
        <div className="card">
            <div className="leftdiv">
                <img className="MainImg" src={props.imageUrl}/>
            </div>
            <div className="rightdiv">
                <span>
                    <span className="location-text"> 
                        <img className="locationIcon" src="https://i.pinimg.com/564x/53/5c/9f/535c9f18e905f9c13ad31ee6ce42aec7.jpg"/> 
                        {props.location.toUpperCase()}
                    </span>
                    <a className="googleLink" href={props.googleMapsUrl}>View on Google Maps</a>
                </span>
                <h1 className="title">{props.title}</h1>
                <h4 className="time">{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}