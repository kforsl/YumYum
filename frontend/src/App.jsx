import { Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage.jsx";
import EtaPage from "./pages/EtaPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ReceiptPage from "./pages/ReceiptPage.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/eta/:id" element={<EtaPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/receipt/:id" element={<ReceiptPage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </div>
    );
}

export default App;
