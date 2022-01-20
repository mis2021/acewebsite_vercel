import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

const DropdownMenu = (props) => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start",
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    const menu = props.menus;
    console.log("menus", menu)
    return (
        <>
            <div
                onMouseEnter={(e) => {
                    e.preventDefault();
                    openDropdownPopover();
                }}
                onMouseLeave={(e) => {
                    e.preventDefault();
                    closeDropdownPopover();
                }}
            >
                <a
                    className="hover:text-white-700 text-white-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-medium"
                    href="#"
                    ref={btnDropdownRef}
                // onClick={(e) => {
                //     e.preventDefault();
                //     dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                // }}

                >
                    <i className={`text-white-700 ${props.icon || ""} text-lg leading-lg mr-21`} />&nbsp;&nbsp;
                    {props.title}
                </a>
                <div
                    ref={popoverDropdownRef}
                    className={
                        (dropdownPopoverShow ? "block " : "hidden ") +
                        "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                    }
                >
                    {menu?.map((m, index) => (
                        <>
                            {
                                m.category ?
                                    <span
                                        className={
                                            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
                                        }
                                    >
                                        {m.category}
                                    </span> : <></>
                            }

                            {m?.submenus.map((ms, sindex) => (
                                <Link href={ms.link}>


                                    {
                                        ms.type == 'single' ?
                                            <a
                                                href="#pablo"
                                                className={
                                                    "text-sm py-2 px-4  px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
                                                }
                                            >
                                                {ms.name}
                                            </a>
                                            :
                                            <a
                                                href="#pablo"
                                                className={
                                                    `text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700`
                                                }
                                            >
                                                {ms.name}
                                            </a>
                                    }

                                </Link>
                            ))}
                        </>
                    ))}

                </div>
            </div>
        </>
    );
};

export default DropdownMenu;
