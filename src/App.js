import Sidebar from "./components/Sidebar";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import Coins from "./pages/Coins";
import Appbar from "./components/Appbar";

function App() {

    return (
        <>
            <Sidebar />
            <div className="pl-64 bg-dark-600">
                <Appbar title="Hello" />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/coins" element={<Coins />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
