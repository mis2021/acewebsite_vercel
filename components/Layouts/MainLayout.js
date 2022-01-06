import React from "react";
import Link from "next/link";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

export default function MainLayout(props) {

    return (
        <>
            <IndexNavbar fixed />

            {props.children}
        </>
    )
}