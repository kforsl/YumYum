import { useEffect, useState } from "react";
import OrderCard from "./../components/OrderCard";
import axios from "axios";

const getAllOrders = async (setOrders) => {
    try {
        const token = sessionStorage.getItem("accessToken");
        const id = location.pathname.split("/")[2];
        const response = await axios.get(`http://localhost:8080/orders`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });

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
                <img src="../src/assets/logo.svg" alt="YumYum logo" />
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
            </section>
        </main>
    );
}

export default OrdersPage;
