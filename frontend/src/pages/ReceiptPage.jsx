import { useEffect, useState } from "react";
import Button from "../components/Button"
import ReceiptItem from "../components/ReceiptItem"


const handleTotalPrice = (order, setTotalPrice) => {
    let totalPrice = 0

    order.forEach(item => {
        totalPrice += item.price * item.inCart
    });

    setTotalPrice(totalPrice)

}

function ReceiptPage() {

    const [order, setOrder] = useState([{
        "name": "Karlstad",
        "desc": "En god friterad wonton med smaker från de värmländska skogarna.",
        "ingredients": [
            "kantarell",
            "scharlottenlök",
            "morot",
            "bladpersilja"
        ],
        "price": 9,
        "inCart": 3
    },
    {
        "name": "Ho Chi Minh",
        "desc": "En god friterad wonton med smaker från vietnams matkultur.",
        "ingredients": [
            "kål",
            "morot",
            "salladslök",
            "chili",
            "vitlök",
            "ingefära",
            "tofu"
        ],
        "price": 9,
        "inCart": 2
    },
    {
        "name": "Paris",
        "desc": "En god friterad wonton med smaker från det franska köket.",
        "ingredients": [
            "kål",
            "honung",
            "chevré",
            "basilika",
            "valnötspasta"
        ],
        "price": 9,
        "inCart": 2
    },
    {
        "name": "Sweet Chili",
        "desc": "Stark och söt dip från Thailänska höglandet.",
        "price": 19,
        "inCart": 1
    },
    {
        "name": "Guacamole",
        "desc": "Avocado, tomat och kryddor i optimal kombination.",
        "price": 19,
        "inCart": 1
    }])

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        handleTotalPrice(order, setTotalPrice)
    }, [order])

    return (
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
                        order.map((item, index) => {
                            return <ReceiptItem item={item} key={index} />
                        })
                    }


                </section>

                <section className='bg-gray-lightest p-4 flex justify-between rounded w-full '>
                    <div>
                        <h2 className='text-base font-bold text-left'>TOTALT</h2>
                        <p className='font-medium text text-x s'>inkl 20% moms</p>
                    </div>

                    <h3 className='text-2xl font-bold h-fit my-auto'>{totalPrice} SEK</h3>

                </section>

            </section>
            <footer className='fixed top-auto bottom-0 p-4 flex flex-col gap-4 w-full'>
                <Button text={'GÖR EN NY BESTÄLLNING'} fill={true} color={"coal"} />
            </footer>
        </main>
    )
}

export default ReceiptPage