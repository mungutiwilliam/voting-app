import React, { Component } from "react";
import Card from "./CardUI";



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
                        <Card name1="Noah" name2="Oliver" name3="Jean" title="Deputy Secretary General"/> 
                    </div>
                    <div className="col-md-4">
                        <Card name1="Liamson" name2="Joshua" name3="Tchalla" title=" Council Treasurer"/> 
                    </div>
                    <div className="col-md-4">
                        <Card name1="Alice" name2="Nzisa" name3="Peter" title=" Council Spokesperson"/> 
                    </div>
                </div>
            </div> 
        );
    }
}


 
export default card ;
