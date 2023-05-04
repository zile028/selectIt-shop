import React, { useEffect, useState } from 'react'
import CartService from '../../services/CartService'
import { useSelector } from 'react-redux'

const MyOrders = () => {

    const [orders, setOrders] = useState()
    const {user} = useSelector(state => state.userStore);

    console.log(user);

    useEffect(() => {
        CartService.getAllOrders(user.email)
        .then(res => setOrders(res.data))
    }, [])

    const renderedOrders = () => {
        return orders?.map((el, index) => {
            return <div key={index}>
                <h3>{el.firstName}</h3>
                <p>Orders:</p>
                <div>
                    {el?.products.map((product, index) => <div key={index}>{product?.title}</div>)}
                </div>
            </div>
        })
    }

  return (
    <div>
        <h2>Orders</h2>
        <div>
        {renderedOrders()}
        </div>
    </div>
  )
}

export default MyOrders