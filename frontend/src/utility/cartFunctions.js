export const addToCart = (clickedItem) => {

    const data = getCartFromStorage()
    let cart = [];

    if (data !== null) {
        data.forEach(dataItem => {
            if (dataItem.name === clickedItem.name) {
                dataItem.inCart++;
            }
            cart.push(dataItem);
        });
    }

    if (data === null || !cart.find(i => i.name === clickedItem.name)) {
        const cartItem = { ...clickedItem };
        cartItem.inCart = 1;
        cart.push(cartItem);
    }

    handleCartInStorage(cart)

}

export const removeFromCart = (clickedItem) => {

    const data = getCartFromStorage()
    const cart = []

    if (data !== null) {
        data.forEach(dataItem => {
            if (dataItem.name === clickedItem.name) {
                dataItem.inCart--;
            }
            if (dataItem.inCart > 0) {
                cart.push(dataItem);
            }
            handleCartInStorage(cart)
        });
    }
}

const getCartFromStorage = () => {
    let response = sessionStorage.getItem("cart");
    return JSON.parse(response);
}

const handleCartInStorage = (cart) => {
    if (cart.length > 0) {
        sessionStorage.setItem("cart", JSON.stringify(cart));
    } else {
        sessionStorage.removeItem("cart")
    }
}