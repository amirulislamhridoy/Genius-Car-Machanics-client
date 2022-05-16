import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../hook/useServiceDetail";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import axios from "axios";
import { toast } from "react-toastify";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [service, setService] = useServiceDetail(serviceId);
  const [user, loading, error] = useAuthState(auth);
  // const [user, setUser] = useState({
  //     name: "Akbar the greate",
  //     address: 'Tarj Mohol',
  //     phone: '1000384308'
  // })
  // const handleAddress = e => {
  //     const {address, ...rest} = user
  //     const newUser = {address: e.target.value, ...rest}
  //     setUser(newUser)
  // }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const order = {
        email: user.email,
        name: user.displayName,
        service: service.name,
        address: e.target.address.value,
        phone: e.target.phone.value
    }
    axios.post('http://localhost:5000/order', order)
    .then(res => {
        const {data} = res
        if(data.insertedId){
            toast('Your order is booked !!!')
            e.target.reset()
        }
    })
  }
  return (
    <div className="w-50 mx-auto">
      <h1>Please Order: {service.name}</h1>
      <form onSubmit={handleFormSubmit}>
        <input value={user.displayName} type="text" name="name" placeholder="name" required readonly />
        <br />
        <input value={user.email} type="text" name="email" placeholder="email" required disabled />
        <br />
        <input
          type="text"
        //   onChange={(e) => handleAddress(e)}
        //   value={user.address}
        value={service.name}
          name="service"
          placeholder="service"
          required
        />
        <br />
        <input type="text" name="address" placeholder="address" required autocomplete="off" />
        <br />
        <input type="text" name="phone" placeholder="phone" required autocomplete="off" />
        <br />
        <input type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default CheckOut;
