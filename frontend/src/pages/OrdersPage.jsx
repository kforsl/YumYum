import { useEffect, useState } from 'react';
import OrderCard from './../components/OrderCard';
import axios from 'axios';

const getAllOrders = async (setOrders) => {
    try {
        const id = location.pathname.split("/")[2]
        const response = await axios.get(`http://localhost:8080/orders`)

        if (response) {
            console.log(response.data.orders);
            setOrders(response.data.orders)
        }
    }
    catch (err) {
        console.log(err)
    }
}



function OrdersPage() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        getAllOrders(setOrders)
    }, [])

    return (

        orders.length > 0 ?

            <main className="bg-coal min-h-svh p-8">
                <header className="flex content-center gap-6 mb-6">
                    <img src="../src/assets/logo.svg" alt="" />
                    <h1 className="text-white text-[42px] font-bold"> KITCHEN VIEW </h1>
                </header>
                <section className="flex gap-16">
                    <article className="text-white text-2xl font-bold flex-1 flex flex-col gap-4">
                        <div className="flex gap-8">
                            <h2 > ONGOING </h2>
                            <div className="w-full bg-gray-light h-px my-auto"></div>
                        </div>

                        {


                            orders.map((order, index) => {
                                if (order.orderDone === false) {
                                    return (
                                        <OrderCard order={order} key={index} />
                                    )
                                }
                            })
                        }

                    </article>
                    <article className="text-white text-2xl font-bold flex-1 flex flex-col gap-4">
                        <div className="flex gap-4">
                            <h2 > Done</h2>
                            <div className="w-full bg-gray-light h-px my-auto"></div>
                        </div>
                        {
                            orders.map((order, index) => {
                                if (order.orderDone === true) {
                                    return (
                                        <OrderCard order={order} key={index} />
                                    )
                                }
                            })
                        }
                    </article>
                </section>
            </main>

            :

            <h1> Order page </h1>
    )
}

export default OrdersPage