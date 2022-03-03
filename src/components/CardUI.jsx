import React from "react";
import ps4 from '../assets/ps4.jpg'

const Card = (props) =>{

    return(
        <div className="card text-center">
            <div className="overflow">
                <img className="card-img-top" src={ps4} alt="image 1"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text text-secondary">
                    This will contain content to talk about the image on the card
                </p>
                <a href="#" className="btn btn-outline-secondary">Submit vote</a>
            </div>
        </div>

    );
}

export default Card