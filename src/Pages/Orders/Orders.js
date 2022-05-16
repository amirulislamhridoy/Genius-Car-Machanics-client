import axios from 'axios';
import axiosPrivate from '../../api/axiosPrivate'
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
// console.log(orders)
    useEffect( () => {
        const email = user.email
        const getOrder = async () => {
            try{
            //     const {data} = await axios.get(`http://localhost:5000/order?email=${email}`, {
            //     headers: {
            //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
            //     }
            // })
            const {data} = await axiosPrivate.get(`http://localhost:5000/order?email=${email}`)
            setOrders(data)
            }
            catch(error){
                if(error.response.status === 401 || error.response.status === 403){
                    toast('Your access token is expires.')
                    navigate('/login')
                    signOut(auth)
                }
            }
        }
        getOrder()
    }, [])
    return (
        <div>
            <h2>Orders {orders?.length}</h2>
            {orders.map(order => <li key={order._id}>{order.service}</li>)}
        </div>
    );
};

export default Orders;