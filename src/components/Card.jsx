import React, { Component } from "react";
import Card from "./CardUI";
import ps1 from "../assets/ps1.jfif";
import ps2 from "../assets/ps2.jfif";
import ps3 from "../assets/ps3.jfif";
import ps4 from "../assets/ps4.jpg";
import ps5 from "../assets/ps5.jfif";
import ps6 from "../assets/ps6.jfif";


class card  extends Component {
    
    render() { 
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card name1="William" name2="Jack" name3="Loulou" title="President"/> 
                    </div>
                    <div className="col-md-4">
                        <Card name1="Jane" name2="Martha" name3="Maria" title="Vice President"/>
                    </div>
                    <div className="col-md-4">
                        <Card name1="Brenda" name2="Caesar" name3="Peter" title="Secretary General"/>
                    </div>
                    <div className="col-md-4">
                        <Card name1="Noah" name2="Oliver" name3="Elijah" title="Deputy Secretary General"/> 
                    </div>
                    <div className="col-md-4">
                        <Card name1="Emma" name2="Moses" name3="Charlotte" title=" Council Treasurer"/> 
                    </div>
                    <div className="col-md-4">
                        <Card name1="Alexa" name2="Finn" name3="Ava" title="Council Spokesperson"/> 
                    </div>
                </div>
            </div> 
        );
    }
}


 
export default card ;