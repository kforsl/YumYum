import { useEffect, useLayoutEffect, useState } from "react";
import Button from "./Button"
import OrderItem from "./OrderItem"

const updateOrder = () => {
    console.log("updateOrder");
}

const OrderCard = ({ order }) => {

    {
        return (
            order.isDone ?
                <article className="bg-mint-light text-coal rounded p-2 flex flex-col gap-4">
                    < h2 className="text-center text-2xl font-medium" >
                        #{order.orderid}
                    </h2 >
                    <section>
                        {
                            order.order.map((item, index) => {
                                return (
                                    <OrderItem item={item} key={index} />
                                )
                            })
                        }
                        <h3 className="text-right border-solid border-gray-lightest border-t mt-3"> {order.totalPrice} sek </h3>
                    </section>

                    <section className="flex justify-center bg-gray-lightest rounded p-2">
                        <h2 className="text-base font-normal"> TILLAGNINGSTID <span> 4:21 </span></h2>
                    </section>
                    <Button
                        text={"SERVERAD"}
                        fill={true}
                        color={"mint-dark"}
                        handleClick={updateOrder}
                    />
                </article >
                :
                <article className="bg-bacon text-coal rounded p-2 flex flex-col gap-4">
                    <h2 className="text-center text-2xl font-medium">
                        #{order.orderid}
                    </h2>

                    <section>
                        {
                            order.order.map((item, index) => {
                                return (
                                    <OrderItem item={item} key={index} />
                                )
                            })
                        }
                        <h3 className="text-right border-solid border-gray-lightest border-t mt-3"> {order.totalPrice} sek </h3>
                    </section>


                    <section className="flex justify-center bg-gray-lightest rounded p-2">
                        <h2 className="text-base font-normal"> VÄNTAT I <span> 2:33</span></h2>
                    </section>
                    <Button
                        text={"REDO ATT SERVERAS"}
                        fill={true}
                        color={"alert"}
                        handleClick={updateOrder}
                    />
                </article>
        )
    }

}

export default OrderCard