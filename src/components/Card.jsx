import React, { Component } from "react";
import Card from "./CardUI";


class card  extends Component {
    
    render() { 
        return (
            
            <div className="container-fluid d-flex justify-content-center">
                
                <form action="/action_page.php">
                <div className="row">
                
                    <div className="col-md-4">
                        <h2>Chairperson</h2>
                        <center>
                            <div>
                                <input type="radio" id="jane_doe" name="Chairperson" value="jane_doe"></input>
                                <label for="jane_doe">Jane Doe</label><br></br>
                                <input type="radio" id="john_doe" name="Chairperson" value="john_doe"></input>
                                <label for="john_doe">John Doe</label><br></br>
                                <input type="radio" id="stephen" name="Chairperson" value="Stephen"></input>
                                <label for="stephen">Stephen</label><br></br>
                                
                            </div>
                        </center>
                        <Card/>
                    </div>
                    <div className="col-md-4">
                        <h2>Vice Chairperson</h2>
                            <center>
                                <div>
                                <input type="radio" id="1" name="Vice Chairperson" value="2"></input>
                                <label for="1">Jane Doe</label><br></br>
                                <input type="radio" id="3" name="Vice Chairperson" value="4"></input>
                                <label for="3">John Doe</label><br></br>
                                <input type="radio" id="5" name="Vice Chairperson" value="5"></input>
                                <label for="5">Stephen</label><br></br>
                                </div>
                            </center>
                            <Card/>
                    </div>
                    
                    <div className="col-md-4">
                        <h2>Secretary General</h2>
                        <center>
                            <div>
                            <input type="radio" id="6" name="Secretary General" value="6"></input>
                                <label for="7">Jane Doe</label><br></br>
                                <input type="radio" id="8" name="Secretary General" value="8"></input>
                                <label for="8">John Doe</label><br></br>
                                <input type="radio" id="9" name="Secretary General" value="9"></input>
                                <label for="9">Stephen</label><br></br>
                            </div>
                        </center>
                        <Card/>
                    </div>
                    <div className="col-md-4">
                        <h2>Deputy S.General</h2>
                        <center>
                            <div>
                                <input type="radio" id="jane_doe" name="Deputy Secretary General" value="jane_doe"></input>
                                <label for="html">Jane Doe</label><br></br>
                                <input type="radio" id="jane_doe" name="Deputy Secretary General" value="john_doe"></input>
                                <label for="css">John Doe</label><br></br>
                                <input type="radio" id="stephen" name="Deputy Secretary General" value="Stephen"></input>
                                <label for="javascript">Stephen</label><br></br>
                            </div>
                        </center>
                        <Card/>
                    </div>
                    <br></br>
                    <div className="col-md-4">
                        <h2>Treasurer</h2>
                        <center>
                            <div>
                                <input type="radio" id="jane_doe" name="Treasurer" value="jane_doe"></input>
                                <label for="html">Jane Doe</label><br></br>
                                <input type="radio" id="jane_doe" name="Treasurer" value="john_doe"></input>
                                <label for="css">John Doe</label><br></br>
                                <input type="radio" id="stephen" name="Treasurer" value="Stephen"></input>
                                <label for="javascript">Stephen</label><br></br>
                            </div>
                        </center>
                        <Card/>
                    </div>
                    <div className="col-md-4">
                        <h2>Spokesperson</h2>
                        <center>
                            <div>
                                <input type="radio" id="jane_doe" name="Spokesperson" value="jane_doe"></input>
                                <label for="html">Jane Doe</label><br></br>
                                <input type="radio" id="jane_doe" name="Spokesperson" value="john_doe"></input>
                                <label for="css">John Doe</label><br></br>
                                <input type="radio" id="stephen" name="Spokesperson" value="Stephen"></input>
                                <label for="javascript">Stephen</label><br></br>
                            </div>
                        </center>
                        <Card/>
                    </div>
                </div>
                <hr></hr>
                <center><input type="submit" value="Submit"></input></center>
                </form>    
            </div> 
        );
    }
}


 
export default card ;
