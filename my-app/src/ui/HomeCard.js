import React from 'react';

const HomerCard = (props) => (

    <div className="col-12 col-sm-4" style={{paddingTop: '7px'}}>
        <div className="card">
            <img src="/img/chart.png" style={{paddingTop: '5px', width: '100px', height: '100px'}} className="card-img-top rounded mx-auto d-block" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <button className="btn btn-primary" onClick={props.action}>{props.title}</button>
                </div>
        </div>
    </div> 
    
);

export default HomerCard;