import { Routes, Route } from "react-router-dom";
import semaphore from "./pages/semaphore";

function RoutesBase(props) {

    return (
        <Routes>
            <Route path="/" Component={semaphore} />
            {/* <Route path="/" element={(<div>aaa</div>)} /> */}
        </Routes>
    )
}

export default RoutesBase