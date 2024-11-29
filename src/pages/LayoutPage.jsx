import {Outlet} from "react-router";
import {Header} from "../components/Header/Header.jsx";

export const LayoutPage = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}