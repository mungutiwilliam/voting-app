import React from "react";
import './card-style.css';


const Card = (props) =>{

    

    return(
        <div className="bg-dark card text-center">
            <form action="/action_page.php">
                <center>
                    <div className="list_names">   
                                    <input type="radio" id="candidate" name ={props.title} value ={props.nname1}></input>
                                    <label for="jane_doe">{props.nname1}</label><br></br>
                                    <input type="radio" id="candidate2" name={props.title} value={props.nname2}></input>
                                    <label for="john_doe">{props.nname2}</label><br></br>
                                    <input type="radio" id="candidate3" name={props.title} value={props.nname3}></input>
                                    <label for="stephen">{props.nname3}</label><br></br>
                                    <hr></hr>
                                    <div>
                                         <button value="submit" type="submit"className="btn btn-success">Submit vote</button>
                                    </div> 
                                                
                    </div>
                </center>

                <div className="card-body text-white">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text text-danger">
                        Please Select One Candidate
                    </p>      
                </div>
            </form>   
        </div>
    );
}

export default Card;
