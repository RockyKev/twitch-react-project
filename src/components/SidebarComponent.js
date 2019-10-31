import React from "react";

function Sidebar(props) {
    return (
    <div className="sidebar"> 
        <div className="sidebar-item">
            <h2> {props.title} </h2>
            <img src={props.img} alt={props.title} width="200px"/>
            <p>{props.viewers} viewers </p>
        </div>

        <div className="sidebar-item">
            <h2> {props.title} </h2>
            <img src={props.img} alt={props.title} width="200px"/>
            <p>{props.viewers} viewers </p>
        </div>

        <div className="sidebar-item">
            <h2> {props.title} </h2>
            <img src={props.img} alt={props.title} width="200px"/>
            <p>{props.viewers} viewers </p>
        </div>

        <div className="sidebar-item">
            <h2> {props.title} </h2>
            <img src={props.img} alt={props.title} width="200px"/>
            <p>{props.viewers} viewers </p>
        </div>






    </div>
    );
}

export default Sidebar;

