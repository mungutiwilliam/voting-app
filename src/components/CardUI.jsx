import React from "react";
import './card-style.css';

function countvotes(){
    if(document.getElementById('candidate').checked) {   
        var selectedValue = document.getElementById('candidate').value;  
        alert("You have voted for: " + selectedValue);    
 }  


}



const Card = (props) =>{

    return(
        <div className="card text-center">
           <center>
                <div className="list_names">   
                                <input type="radio" id="candidate" name="Chairperson" value ={props.name1}></input>
                                <label for="jane_doe">{props.name1}</label><br></br>
                                <input type="radio" id="candidate" name="Chairperson" value={props.name2}></input>
                                <label for="john_doe">{props.name2}</label><br></br>
                                <input type="radio" id="candidate" name="Chairperson" value={props.name3}></input>
                                <label for="stephen">{props.name3}</label><br></br>              
                </div>
            </center>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-danger">
                    Please Select One Candidate
                </p>
                <button className="btn btn-success">Submit vote</button>

            <div className="overflow">
                
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Pick who you want to vote for.</h4>
                <p className="card-text text-secondary">
                </p>
            </div>
        </div>
</div>
    );
}

export default Card;
