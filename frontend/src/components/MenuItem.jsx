import MenuIngredient from "./MenuIngredient";
import { addToCart } from "../utility/cartFunctions";

function MenuItem({ item, getLengthOfCart }) {
    return (
        <li
            className="p-4 ease-in-out duration-100 active:bg-gray"
            onClick={() => {
                addToCart(item);
                getLengthOfCart();
            }}
        >
            <section className="flex flex-row justify-between mb-2 text-xl font-bold">
                <h2 className="">{item.name}</h2>
                <h3 className="">{item.price} SEK</h3>
            </section>
            <section className="flex flex-row gap-1 text-sm font-medium">
                {item.ingredients.map((ingredient, index) => {
                    return (
                        <MenuIngredient key={index} ingredient={ingredient} />
                    );
                })}
            </section>
        </li>
    );
}

export default MenuItem;
