import React from 'react'

const Item = ({objData}) => {
    return (
        <div className="card" style={{"width": "450px"}}>
            <img src={`assets/${objData.Image}`} className="card-img-top" alt="..." style={{"width": "100%"}} />
                <div className="card-body">
                    <h5 className="card-title">{objData.name}</h5>
                    <span>{objData.price}</span>
                    <p className="card-text">{objData.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}

export default Item