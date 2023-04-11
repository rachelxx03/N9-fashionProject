import { Routes ,Route } from 'react-router-dom';
import mainPage from "./App"
import contactPage from "./pages/contact"
import outlookPage from "./pages/outlook"
import trendPage from "./pages/trend"




export default function routes() {
    return (
        <Routes>
            <Route key="menu" exact path="/" element={<mainPage/>} />
            <Route key="xuhuong" exact path="/xuhuong" element={<mainPage/>} />
            <Route key="gocnhin" exact path="/gocnhin" element={<mainPage/>} />
            <Route key="lienhe" exact path="/lienhe" element={<mainPage/>} />
        </Routes>
    );
}
