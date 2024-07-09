import { Routes, Route } from "react-router-dom"
import MenuPage from './pages/MenuPage.jsx';
import EtaPage from './pages/EtaPage.jsx';
import CartPage from './pages/CartPage.jsx';
import ReceiptPage from './pages/ReceiptPage.jsx';
import OrdersPage from "./pages/OrdersPage.jsx";


function App() {

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<MenuPage />} />
                <Route path="/eta/:id" element={<EtaPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/receipt" element={<ReceiptPage />} />
                <Route path="/orders" element={<OrdersPage />} />
            </Routes>
        </div>
    )
}

export default App
