import React, { Component } from "react";
import Card from "./CardUI";



class card  extends Component {
    
    render() { 
        return (
            <div id ="main" className=" bg-info container-fluid d-flex justify-content-center">
                <div className="row text-white">
                    <div className="col-md-4">
                        <Card nname1="William" nname2="Jack" nname3="Loulou" title="President"/> 
                    </div>
                    <div className="col-md-4">
                        <Card nname1="Jane" nname2="Martha" nname3="Maria" title="Vice President"/>
                    </div>
                    <div className="col-md-4">
                        <Card nname1="Brenda" nname2="Caesar" nname3="Peter" title="Secretary General"/>
                    </div>
                    <div className="col-md-4">
                        <Card nname1="Noah" nname2="Oliver" nname3="Jean" title="Deputy Secretary General"/> 
                    </div>
                    <div className="col-md-4">
                        <Card nname1="Liamson" nname2="Joshua" nname3="Tchalla" title=" Council Treasurer"/> 
                    </div>
                    <div className="col-md-4">
                        <Card nname1="Alice" nname2="Nzisa" nname3="Peter" title=" Council Spokesperson"/> 
                    </div>
                </div>
            </div> 
        );
    }
}


 
export default card ;