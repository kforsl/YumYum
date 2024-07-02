import Button from '../components/Button';
import CartItem from '../components/CartItem';
import CartButton from './../components/CartButton';
import { useEffect, useState } from 'react';

const handleTotalPrice = (cart, setTotalPrice) => {
    let totalPrice = 0

    cart.forEach(item => {
        totalPrice += item.price * item.inCart
    });

    setTotalPrice(totalPrice)

}

function CartPage() {

    const [cart, setCart] = useState([{
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
    },
    ])

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        handleTotalPrice(cart, setTotalPrice)
    }, [cart])

    return (
        <main className='bg-white min-h-svh font-fira text-coal font-bold'>
            <header className='bg-white sticky top-0 left-0 p-4 flex justify-end w-full'>
                <CartButton />
            </header>

            <section className='divide-y divide-dashed px-4 pb-52'>
                {
                    cart.map((item, index) => {
                        return <CartItem key={index} item={item} />
                    })
                }

            </section>

            <footer className=' bg-white fixed block bottom-0 left-0 p-4 w-full '>
                <section className='bg-gray-lightest p-4 flex justify-between rounded mb-4 w-full '>
                    <div>
                        <h2 className='text-2xl font-bold'>TOTAL</h2>
                        <p className='font-medium text text-sm'>inkl 20% moms</p>
                    </div>

                    <h3 className='text-3xl font-bold h-fit my-auto'>{totalPrice} SEK</h3>

                </section>
                <Button text={'TAKE MY MONEY!'} fill={true} />
            </footer>
        </main>
    )
}

export default CartPage