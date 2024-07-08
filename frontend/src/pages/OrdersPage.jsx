import { useEffect, useState } from 'react';
import OrderCard from './../components/OrderCard';

function OrdersPage() {

    const [orders, setOrders] = useState([
        [{
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
        }],
        [{
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
            "name": "Guacamole",
            "desc": "Avocado, tomat och kryddor i optimal kombination.",
            "price": 19,
            "inCart": 1
        }],
        [
            {
                "name": "Bangkok",
                "desc": "En god friterad wonton med smaker från Bangkoks gator.",
                "ingredients": [
                    "morot",
                    "salladslök",
                    "chili",
                    "kokos",
                    "lime",
                    "koriander"
                ],
                "price": 9,
                "inCart": 5
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
                "name": "Wonton Standard",
                "desc": "Smaksatt olja med soya, chili, vitlök & ingefära.",
                "price": 19,
                "inCart": 3
            },
            {
                "name": "Chili Mayo",
                "desc": "Egengjord majonäs smaksatt med chili.",
                "price": 19,
                "inCart": 2
            }
        ]
    ])

    return (
        <main className="bg-coal min-h-svh p-8">
            <header className="flex content-center gap-6 mb-6">
                <img src="../src/assets/logo.svg" alt="" />
                <h1 className="text-white text-[42px] font-bold"> KITCHEN VIEW </h1>
            </header>
            <section className="flex gap-16">
                <article className="text-white text-2xl font-bold flex-1 flex flex-col gap-4">
                    <div className="flex gap-8">
                        <h2 > ONGOING </h2>
                        <div className="w-full bg-gray-light h-px my-auto"></div>
                    </div>

                    {
                        orders.map((order, index) => {
                            return (
                                <OrderCard isDone={false} order={order} key={index} />
                            )
                        })
                    }

                </article>
                <article className="text-white text-2xl font-bold flex-1 flex flex-col gap-4">
                    <div className="flex gap-4">
                        <h2 > Done</h2>
                        <div className="w-full bg-gray-light h-px my-auto"></div>
                    </div>
                    {
                        orders.map((order, index) => {
                            return (
                                <OrderCard isDone={true} order={order} key={index} />
                            )
                        })
                    }
                </article>
            </section>
        </main>
    )
}

export default OrdersPage