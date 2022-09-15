import { Outlet } from "react-router-dom";
import Header from "../Header";

export default function PaginaPadrao() {

    return (             
        <>
            <Header/>
            <div>
                <Outlet/>
            </div>
        </>
    );


}

