import { useEffect, useState } from "react";
import OrderCard from "./../components/OrderCard";
import axios from "axios";
import NotFound from "./../components/NotFound";
import Loading from "../components/Loading";

const getAllOrders = async (setOrders, setIsAuthorize, setIsPageLoading) => {
    try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.get(`http://localhost:8080/orders`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });

        if (response) {
            setOrders(response.data.orders);
            setIsAuthorize(true);
            setIsPageLoading(false);
        }
    } catch (err) {
        console.log(err);
        setIsAuthorize(false);
        setIsPageLoading(false);
    }
};

function OrdersPage() {
    const [orders, setOrders] = useState([]);
    const [isAuthorize, setIsAuthorize] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(true);

    useEffect(() => {
        getAllOrders(setOrders, setIsAuthorize, setIsPageLoading);

        const interval = setInterval(() => {
            getAllOrders(setOrders, setIsAuthorize, setIsPageLoading);
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    return isPageLoading ? (
        <Loading />
    ) : isAuthorize ? (
        <main className="bg-coal min-h-svh p-8 text-white">
            <header className="flex content-center gap-6 mb-6">
                <img src="../src/assets/logo.svg" alt="YumYum logo" />
                <h1 className=" text-[42px] font-bold">KITCHEN VIEW</h1>
            </header>
            <section className="grid grid-cols-2 gap-8 grid-flow-row-dense">
                <div className="flex gap-4">
                    <h2 className=" text-2xl font-bold"> ONGOING </h2>
                    <div className="w-full bg-gray-light h-px my-auto"></div>
                </div>
                <div className="flex gap-4">
                    <h2 className=" text-2xl font-bold"> Done</h2>
                    <div className="w-full bg-gray-light h-px my-auto"></div>
                </div>

                {orders.length > 0 ? (
                    orders.map((order, index) => {
                        return <OrderCard order={order} key={index} />;
                    })
                ) : (
                    <h1 className="text-4xl text-center font-medium pb-4 animate-pulse">
                        Waiting for orders...
                    </h1>
                )}
            </section>
        </main>
    ) : (
        <NotFound />
    );
}

export default OrdersPage;
