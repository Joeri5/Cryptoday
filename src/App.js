import Sidebar from "./components/Sidebar";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import Coins from "./pages/Coins";
import Appbar from "./components/Appbar";
import Spinner from "./components/Spinner";
import CoinInfo from "./pages/CoinInfo";

function App() {

    return (
        <>
            <Sidebar />
            <div className="pl-64">
                <Appbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/coins" element={<Coins />} />
                    <Route path="/coins" element={<CoinInfo />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
