import { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem.jsx"
import axios from 'axios';
import MenuExtras from "../components/MenuExtras.jsx";

const fetchData = async (setMenuItems) => {
    try {
        const response = await axios.get('http://localhost:8080/menu')
        setMenuItems(...response.data.menu)
    } catch (err) {
        console.error('error vid hämtning av menyn', err)
    }
}

function MenuPage() {

    const [menuItems, setMenuItems] = useState({})

    useEffect(() => {
        fetchData(setMenuItems)
    }, [])

    return (
        <main className="p-4 bg-fixed text-white">
            <section className="bg-slate-500 rounded">
                <h1 className="text-3xl pl-4 py-8 font-bold "> MENY </h1>

                {
                    menuItems.wontons ?
                        <ul className="">
                            {
                                menuItems.wontons.map((item, index) => {
                                    return (
                                        <MenuItem key={index} item={item} />
                                    )
                                })
                            }
                        </ul> :
                        <h2> Item is loading.....</h2>
                }
                <article className="p-4">
                    <section className="flex flex-row justify-between mb-2 text-xl font-bold">
                        <h2 className="">DIPSÅS</h2>
                        <h3 className="">19 SEK</h3>
                    </section>
                    {
                        menuItems.dip ?
                            <section className="flex flex-row gap-4 flex-wrap">
                                {
                                    menuItems.dip.map((dip, index) => {
                                        return (
                                            <MenuExtras key={index} dip={dip} />
                                        )
                                    })
                                }
                            </section> :
                            <h2> Item is loading.....</h2>
                    }

                </article>


            </section>
        </main>
    )
}

export default MenuPage