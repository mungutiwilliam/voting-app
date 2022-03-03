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
                        <Card imgsrc={ps1} title="President"/> 
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={ps2} title="Vice President"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={ps3} title="Secretary General"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={ps4} title="Deputy Secretary General"/> 
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={ps5} title=" Council Treasurer"/> 
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={ps6} title=" Council Spokesperson"/> 
                    </div>
                </div>
            </div> 
        );
    }
}


 
export default card ;