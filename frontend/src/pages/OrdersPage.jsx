import { useEffect, useState } from "react";
import OrderCard from "./../components/OrderCard";
import axios from "axios";

const getAllOrders = async (setOrders) => {
    try {
        const response = await axios.get(`http://localhost:8080/orders`);

        if (response) {
            setOrders(response.data.orders);
        }
    } catch (err) {
        console.log(err);
    }
};

function OrdersPage() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getAllOrders(setOrders);
    }, []);

    return (
        <main className="bg-coal min-h-svh p-8">
            <header className="flex content-center gap-6 mb-6">
                <img src="../src/assets/logo.svg" alt="" />
                <h1 className="text-white text-[42px] font-bold">
                    KITCHEN VIEW
                </h1>
            </header>
            <section className="grid grid-cols-2 gap-8 grid-flow-row-dense">
                <div className="flex gap-4">
                    <h2 className="text-white text-2xl font-bold"> ONGOING </h2>
                    <div className="w-full bg-gray-light h-px my-auto"></div>
                </div>
                <div className="flex gap-4">
                    <h2 className="text-white text-2xl font-bold"> Done</h2>
                    <div className="w-full bg-gray-light h-px my-auto"></div>
                </div>

                {orders.length > 0 ? (
                    orders.map((order, index) => {
                        return <OrderCard order={order} key={index} />;
                    })
                ) : (
                    <h1> No item </h1>
                )}

                {/* <article className="text-white text-2xl font-bold flex-1 flex flex-col gap-4">
                    <div className="flex gap-4">
                        <h2> Done</h2>
                        <div className="w-full bg-gray-light h-px my-auto"></div>
                    </div>
                    {orders.length > 0 ? (
                        orders.map((order, index) => {
                            if (order.orderDone === true) {
                                return <OrderCard order={order} key={index} />;
                            }
                        })
                    ) : (
                        <h1> No item </h1>
                    )}
                </article> */}
            </section>
        </main>
    );
}

export default OrdersPage;
