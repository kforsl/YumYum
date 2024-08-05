import { Link } from "react-router-dom";

function CartButton({ path }) {
    return (
        <Link to={path}>
            <div className="bg-white p-4 rounded">
                <img src="../src/assets/cart.svg" alt="" />
            </div>
        </Link>
    );
}

export default CartButton;
