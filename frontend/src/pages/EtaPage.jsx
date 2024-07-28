
import { useEffect, useState } from 'react';
import Button from './../components/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

function EtaPage() {

    const [order, setOrder] = useState({})

    useEffect(() => {
        getOrder(setOrder)
    }, [])

    return (

        order.hasOwnProperty('userid') ?

            order.isDone ?
                <main className="bg-mint-dark min-h-svh text-white font-fira">
                    <header className="p-4">
                        <img src="../src/assets/logo.svg" alt="" />
                    </header>
                    <section>
                        <img src="../src/assets/boxtop.png" alt="" />
                        <h1 className="text-3xl px-20 text-center mb-14 font-bold"> DINA WONTONS ÄR KLARA! </h1>
                        <p className="text-center ">
                            #{order.orderid.toUpperCase()}
                        </p>
                    </section>
                    <footer className='fixed top-auto bottom-0 p-4 flex flex-col gap-4 w-full'>
                        <Button text={'BESTÄLL MER'} fill={true} color={"coal"} />
                        <Button text={'SE KVITTO'} fill={false} />
                    </footer>
                </main>
                :
                <main className="bg-gray min-h-svh text-white font-fira">
                    <header className="p-4">
                        <img src="../src/assets/logo.svg" alt="" />
                    </header>
                    <section>
                        <img src="../src/assets/boxtop.png" alt="" />
                        <h1 className="text-3xl px-12 text-center mb-4"> DINA WONTONS TILLAGAS! </h1>
                        <h2 className="text-2xl text-center font-medium pb-2">
                            ETA 5 MIN
                        </h2>
                        <p className="text-center ">
                            #{order.orderid}
                        </p>
                    </section>
                    <footer className='fixed top-auto bottom-0 p-4 flex flex-col gap-4 w-full'>
                        <Link to={'/'}>
                            <Button text={'BESTÄLL MER'} fill={true} color={"coal"} />
                        </Link>
                        <Link to={`/receipt/${order.orderid}`}>
                            <Button text={'SE KVITTO'} fill={false} />
                        </Link>
                    </footer>
                </main>

            :

            <h1 className="text-2xl text-center font-medium pb-2 mt-16"> 404 not found </h1>
    )
}

export default EtaPage