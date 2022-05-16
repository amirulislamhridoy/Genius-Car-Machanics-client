import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {_id, name, price, description, img} = props.service
    const navigate = useNavigate()
    const handleServiceDetail = (id) => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => handleServiceDetail(_id)}>Book {name}</button>
        </div>
    );
};

export default Service;