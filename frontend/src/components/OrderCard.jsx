import { useEffect, useLayoutEffect, useState } from "react";
import Button from "./Button";
import OrderItem from "./OrderItem";
import axios from "axios";

const updateOrder = async (id, setOrderCard) => {
    try {
        const response = await axios.post(`http://localhost:8080/orders/${id}`);

        if (response) {
            setOrderCard(response.data.order);
            // location.reload();
        }
    } catch (err) {
        console.log(err);
    }
};

const OrderCard = ({ order, index }) => {
    const [orderCard, setOrderCard] = useState(order);
    {
        return orderCard.orderDone ? (
            <article
                className={`bg-mint-light text-coal rounded p-2 flex flex-col justify-between gap-4 col-start-2`}
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
                        <h2 className="text-base font-normal">
                            TILLAGNINGSTID <span> 4:21 </span>
                        </h2>
                    </section>
                    <Button text={"SERVERAD"} fill={true} color={"mint-dark"} />
                </section>
            </article>
        ) : (
            <article className="bg-bacon text-coal rounded p-2 justify-between flex flex-col gap-4 col-start-1">
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
                        <h2 className="text-base font-normal">
                            VÄNTAT I <span> 2:33</span>
                        </h2>
                    </section>
                    <Button
                        text={"REDO ATT SERVERAS"}
                        fill={true}
                        color={"alert"}
                        handleClick={() =>
                            updateOrder(orderCard.orderid, setOrderCard)
                        }
                    />
                </section>
            </article>
        );
    }
};

export default OrderCard;
