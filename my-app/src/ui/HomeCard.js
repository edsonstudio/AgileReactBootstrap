import React from 'react';

const HomerCard = (props) => (

    <div className="col-12 col-sm-4">
        <div className="card" style={{width: '18rem'}}>
            <img src="/img/chart.png" style={{paddingTop: '3px', width: '100px', height: '100px'}} className="card-img-top rounded mx-auto d-block" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary" onClick={props.action}>Go somewhere</a>
                </div>
        </div>
    </div> 
    
);

export default HomerCard;