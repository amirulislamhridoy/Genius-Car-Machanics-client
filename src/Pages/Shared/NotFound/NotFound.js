import React from 'react';
import notFound from '../../../images/not-found.jpg'
import './NotFound.css'

const NotFound = () => {
    
    return (
        <div className="not-found">
            <img  className="not-found-img" src={notFound} alt="" />
        </div>
    );
};

export default NotFound;