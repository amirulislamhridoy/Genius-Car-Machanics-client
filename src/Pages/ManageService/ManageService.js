import React from 'react';
import useService from '../hook/useService';

const ManageService = () => {
    const [services, setServices] = useService()
    
    const handleDeleteService = id => {
        console.log(id)
        fetch(`http://localhost:5000/service/${id}` , {
            method: "DELETE",
            body: "application/json"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const remaining = services.filter(s => s._id !== id)
            setServices(remaining)
        })
    }
    return (
        <div className="w-50 mx-auto">
            <h2>Manage Services </h2>
            {services?.map(service => 
            <h4 key={service._id}>
                {service.name} <button onClick={() => handleDeleteService(service._id)}>X</button>
            </h4>
            )}
        </div>
    );
};

export default ManageService;