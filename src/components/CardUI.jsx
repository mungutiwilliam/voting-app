import React from "react";
import './card-style.css';

const handlechange = event =>{
    const target = event.target
    const name = target.name
    const value = target.value
    alert(`${name} ${value}`)
}



const Card = (props) =>{

    return(
        <div className="bg-dark card text-center">
           <center>
                <div className="list_names">   
                                <input on change ={handlechange}type="radio" id="candidate" name="Chairperson" value ={props.nname1}></input>
                                <label for="jane_doe">{props.nname1}</label><br></br>
                                <input type="radio" id="candidate2" name="Chairperson" value={props.nname2}></input>
                                <label for="john_doe">{props.nname2}</label><br></br>
                                <input type="radio" id="candidate3" name="Chairperson" value={props.nname3}></input>
                                <label for="stephen">{props.nname3}</label><br></br>              
                </div>
            </center>
            <div className="card-body text-white">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-danger">
                    Please Select One Candidate
                </p>
                <button className="btn btn-success">Submit vote</button>      
            </div>
            <div className="card-body text-white">
                <h4 className="card-title">Pick who to vote for</h4>
                <p className="card-text text-secondary">
                </p>
            </div>
        </div>
    );
}

export default Card;
