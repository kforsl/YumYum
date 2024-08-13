import { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem.jsx";
import axios from "axios";
import MenuExtras from "../components/MenuExtras.jsx";
import CartButton from "../components/CartButton.jsx";
import { getCartFromStorage } from "../utility/cartFunctions.js";

const fetchData = async (setMenuItems) => {
    try {
        const response = await axios.get("http://localhost:8080/menu");
        setMenuItems(...response.data.menu);
    } catch (err) {
        console.error("error vid hämtning av menyn", err);
    }
};

const getLengthOfCart = (setCartLength) => {
    const cart = getCartFromStorage();

    let cartLength = 0;
    if (cart)
        cart.forEach((item) => {
            cartLength += item.inCart;
        });

    setCartLength(cartLength);
};

function MenuPage() {
    const [menuItems, setMenuItems] = useState({});
    const [cartLength, setCartLength] = useState(0);

    useEffect(() => {
        fetchData(setMenuItems);
        getLengthOfCart(setCartLength);
    }, []);

    return (
        <main
            className="p-4 bg-fixed text-snow bg-mint min-h-svh font-fira"
            style={{
                backgroundImage: `url('../src/assets/leafbg.svg')`,
            }}
        >
            <header className="flex flex-row justify-between mb-8">
                <img src="../src/assets/logo.svg" alt="YumYum logo" />
                <div className="relative">
                    <CartButton path={"/cart"} />
                    <p className="bg-alert w-6 h-6 rounded-full flex mx-auto justify-center absolute left-auto -right-2 -top-2">
                        {cartLength}
                    </p>
                </div>
            </header>
            <section className="bg-gray-dark rounded">
                <h1 className="text-3xl pl-4 py-8 font-bold "> MENY </h1>

                {menuItems.wontons ? (
                    <ul className="divide-y divide-dashed">
                        {menuItems.wontons.map((item, index) => {
                            return (
                                <MenuItem
                                    key={index}
                                    item={item}
                                    getLengthOfCart={() =>
                                        getLengthOfCart(setCartLength)
                                    }
                                />
                            );
                        })}
                    </ul>
                ) : (
                    <h2> Item is loading.....</h2>
                )}
                <article className="p-4">
                    <section className="flex flex-row justify-between mb-2 text-xl font-bold">
                        <h2 className="">DIPSÅS</h2>
                        <h3 className="">19 SEK</h3>
                    </section>
                    {menuItems.dip ? (
                        <section className="flex flex-row gap-4 flex-wrap">
                            {menuItems.dip.map((dip, index) => {
                                return (
                                    <MenuExtras
                                        key={index}
                                        dip={dip}
                                        getLengthOfCart={() =>
                                            getLengthOfCart(setCartLength)
                                        }
                                    />
                                );
                            })}
                        </section>
                    ) : (
                        <h2> Item is loading.....</h2>
                    )}
                </article>
            </section>
        </main>
    );
}

export default MenuPage;
