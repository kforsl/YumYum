import { useEffect, useState } from "react";
import Button from "../components/Button"
import ReceiptItem from "../components/ReceiptItem"
import { Link } from "react-router-dom";
import axios from "axios";

const getOrder = async (setOrder) => {
    try {
        const id = location.pathname.split("/")[2]
        const response = await axios.get(`http://localhost:8080/orders/${id}`)

        if (response) {
            setOrder(response.data.order)
        }
    }
    catch (err) {
        console.log(err)
    }
}

function ReceiptPage() {

    const [order, setOrder] = useState({})

    useEffect(() => {
        getOrder(setOrder)
    }, [])

    useEffect(() => {
        console.log(order);
    }, [order])

    return (

        order.hasOwnProperty('userid') ?

            <main className="bg-gray-dark min-h-svh text-white font-fira">
                <header className="mb-16 pt-4 pl-4">
                    <img src="../src/assets/logo.svg" alt="" />
                </header>
                <section className="flex flex-col bg-white text-coal text-center pt-8 rounded mx-4">
                    <img className="max-w-10 mx-auto mb-2.5" src="../src/assets/logo-color.svg" alt="" />
                    <h1 className="text-2xl font-bold">KVITTO</h1>
                    <p className="text-xs font-bold"> #4KJWSDF234K </p>
                    <section className="p-4">
                        {
                            order.order.map((item, index) => {
                                return <ReceiptItem item={item} key={index} />
                            })
                        }


                    </section>

                    <section className='bg-gray-lightest p-4 flex justify-between rounded w-full '>
                        <div>
                            <h2 className='text-base font-bold text-left'>TOTALT</h2>
                            <p className='font-medium text text-x s'>inkl 20% moms</p>
                        </div>

                        <h3 className='text-2xl font-bold h-fit my-auto'>{order.totalPrice} SEK</h3>

                    </section>

                </section>
                <footer className='fixed top-auto bottom-0 p-4 flex flex-col gap-4 w-full'>
                    <Link to={'/'}>
                        <Button text={'GÖR EN NY BESTÄLLNING'} fill={true} color={"coal"} />
                    </Link>
                </footer>
            </main>

            :

            <h1 className="text-2xl text-center font-medium pb-2 mt-16"> 404 not found </h1>
    )
}

export default ReceiptPage