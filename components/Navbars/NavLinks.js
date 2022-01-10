import React from "react";
import Link from "next/link";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function NavbarLinks(props) {

    return (
        <>
            <ul className="flex flex-col lg:flex-row list-none ">
                <li className="flex items-center">
                    <Link href={props.link || "/"}>
                        <a
                            className="hover:text-white-700 text-white-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-medium"
                            href="#"
                        >
                            <i className={`text-white-700 ${props.icon || ""} text-lg leading-lg mr-21`} />&nbsp;&nbsp;
                             {props.title}
                        </a>
                    </Link>
                </li>
            </ul>
        </>
    )
}