import React from "react";
import Link from "next/link";

export default function PageLayout(props) {

    return (
        <>
            <div className="pt-20">
                {props.children}
            </div>

        </>
    )
}