import { useEffect, useState } from "react";
import Button from "./../components/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import NotFound from "../components/NotFound";
import Loading from "../components/Loading";

const getOrder = async (setOrder, setIsPageLoading) => {
    try {
        const token = sessionStorage.getItem("accessToken");
        const id = location.pathname.split("/")[2];
        const response = await axios.get(`http://localhost:8080/orders/${id}`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });

        if (response) {
            setOrder(response.data.order);
            setIsPageLoading(false);
        }
    } catch (err) {
        console.log(err);
        setIsPageLoading(false);
    }
};

function EtaPage() {
    const [order, setOrder] = useState({});
    const [bgColor, setbgColor] = useState("bg-gray");
    const [isPageLoading, setIsPageLoading] = useState(true);

    useEffect(() => {
        getOrder(setOrder, setIsPageLoading);
        const interval = setInterval(() => {
            getOrder(setOrder, setIsPageLoading);
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (order.orderDone) {
            return setbgColor("bg-mint-dark");
        }
    }, [order]);

    return isPageLoading ? (
        <Loading />
    ) : order.hasOwnProperty("userid") ? (
        <main className={`${bgColor} min-h-svh text-white font-fira`}>
            <header className="p-4">
                <img src="../src/assets/logo.svg" alt="YumYum logo" />
            </header>
            <section>
                <img src="../src/assets/boxtop.png" alt="image of a boxtop" />
                {order.orderDone ? (
                    <h1 className="text-3xl px-20 text-center mb-14 font-bold">
                        DINA WONTONS ÄR KLARA!
                    </h1>
                ) : (
                    <>
                        <h1 className="text-3xl px-12 text-center mb-4">
                            DINA WONTONS TILLAGAS!
                        </h1>
                        <h2 className="text-2xl text-center font-medium pb-2">
                            ETA {order.est} MIN
                        </h2>
                    </>
                )}
                <p className="text-center ">#{order.orderid}</p>
            </section>
            <footer className="fixed top-auto bottom-0 p-4 flex flex-col gap-4 w-full">
                <Link to={"/menu"}>
                    <Button text={"BESTÄLL MER"} fill={true} color={"coal"} />
                </Link>
                <Link to={`/receipt/${order.orderid}`}>
                    <Button text={"SE KVITTO"} fill={false} />
                </Link>
            </footer>
        </main>
    ) : (
        <NotFound />
    );
}

export default EtaPage;
