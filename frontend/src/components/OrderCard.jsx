import { useEffect, useState } from "react";
import Button from "./Button";
import OrderItem from "./OrderItem";
import axios from "axios";

const updateOrder = async (order, setOrderCard) => {
    try {
        order.orderCompleted = new Date();
        order.orderDone = true;

        const token = sessionStorage.getItem("accessToken");
        const response = await axios.post(
            `http://localhost:8080/orders/${order.orderid}`,
            {
                order,
            },
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }
        );

        if (response) {
            console.log(response.data.order);

            setOrderCard(response.data.order);
        }
    } catch (err) {
        console.log(err);
    }
};

const testFunctionTime = (order) => {
    const created = Date.parse(order.orderCreated);
    let timeDiffrence;

    if (!!order.orderCompleted) {
        const completed = Date.parse(order.orderCompleted);
        timeDiffrence = Math.floor(completed - created);
    } else {
        const dateNow = new Date().getTime();
        timeDiffrence = Math.floor(dateNow - created);
    }

    var minutes = Math.floor(timeDiffrence / 60000);
    var seconds = ((timeDiffrence % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

const OrderCard = ({ order }) => {
    const [orderCard, setOrderCard] = useState(order);
    const [time, setTime] = useState(testFunctionTime(order));
    const [classes, setClasses] = useState("");

    useEffect(() => {
        const classNames = orderCard.orderDone
            ? "bg-mint-light col-start-2"
            : "bg-bacon col-start-1";
        setClasses(classNames);
    }, [orderCard]);

    {
        return (
            <article
                className={`${classes} text-coal rounded p-2 flex flex-col justify-between gap-4`}
            >
                <h2 className="text-center text-2xl font-medium">
                    #{orderCard.orderid}
                </h2>
                <section>
                    {orderCard.order.map((item, index) => {
                        return <OrderItem item={item} key={index} />;
                    })}
                    <h3 className="text-right border-solid border-gray-lightest border-t mt-3">
                        {orderCard.totalPrice} sek
                    </h3>
                </section>
                <section>
                    <section className="flex justify-center bg-gray-lightest rounded p-2 mb-4">
                        {orderCard.orderDone ? (
                            <h2 className="text-base font-normal">
                                TILLAGNINGSTID <span> {time} </span>
                            </h2>
                        ) : (
                            <h2 className="text-base font-normal">
                                VÄNTAT I <span>{time}</span>
                            </h2>
                        )}
                    </section>
                    {orderCard.orderDone ? (
                        <Button
                            text={"SERVERAD"}
                            fill={true}
                            color={"mint-dark"}
                        />
                    ) : (
                        <Button
                            text={"REDO ATT SERVERAS"}
                            fill={true}
                            color={"alert"}
                            handleClick={() => {
                                updateOrder(orderCard, setOrderCard, setTime);
                            }}
                        />
                    )}
                </section>
            </article>
        );
    }
};

export default OrderCard;
