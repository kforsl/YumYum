import axios from "axios";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import {
    getCartFromStorage,
    handleCartInStorage,
} from "../utility/cartFunctions";
import CartButton from "./../components/CartButton";
import { useEffect, useState } from "react";

const handleTotalPrice = () => {
    let totalPrice = 0;
    const data = getCartFromStorage();

    if (data) {
        data.forEach((item) => {
            totalPrice += item.price * item.inCart;
        });
    }

    return totalPrice;
};

const createOrder = async () => {
    const cart = getCartFromStorage();

    if (cart) {
        try {
            const token = sessionStorage.getItem("accessToken");
            const response = await axios.post(
                "http://localhost:8080/orders",
                {
                    cart,
                },
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 201) {
                const id = response.data.order.orderid;
                handleCartInStorage([]);
                window.location.pathname = `/eta/${id}`;
            }
        } catch (err) {
            console.error("error vid skapande av order", err);
        }
    }
};

function CartPage() {
    const handleCartState = () => {
        const data = getCartFromStorage();
        if (data !== 0) {
            setCart(data);
        }
    };

    const [cart, setCart] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        handleCartState(setCart);
    }, []);

    useEffect(() => {
        setTotalPrice(handleTotalPrice());
    }, [cart]);

    return (
        <main className="bg-white min-h-svh font-fira text-coal font-bold">
            <header className="bg-white sticky top-0 left-0 p-4 flex justify-end w-full">
                <CartButton path={"/menu"} />
            </header>

            <section className="divide-y divide-dashed px-4 pb-52">
                {cart ? (
                    cart.map((item, index) => {
                        return (
                            <CartItem
                                key={index}
                                item={item}
                                handleCartState={handleCartState}
                            />
                        );
                    })
                ) : (
                    <h2 className="text-center text-2xl mt-8">
                        {" "}
                        No item in cart{" "}
                    </h2>
                )}
            </section>

            <footer className=" bg-white fixed block bottom-0 left-0 p-4 w-full ">
                <section className="bg-gray-lightest p-4 flex justify-between rounded mb-4 w-full ">
                    <div>
                        <h2 className="text-2xl font-bold">TOTAL</h2>
                        <p className="font-medium text text-sm">
                            inkl 20% moms
                        </p>
                    </div>

                    <h3 className="text-3xl font-bold h-fit my-auto">
                        {totalPrice} SEK
                    </h3>
                </section>
                <Button
                    text={"TAKE MY MONEY!"}
                    fill={true}
                    color={"coal"}
                    handleClick={createOrder}
                />
            </footer>
        </main>
    );
}

export default CartPage;
