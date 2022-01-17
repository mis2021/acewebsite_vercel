import React from "react";
import Link from "next/link";

export default function PageLayout(props) {

    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
            <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>

            <div>
            {/* <div className="pt-7r"> */}
                <div className="mx-5">
                    <div className="flex flex-wrap items-center">
                        {props.children}
                    </div>
                </div>
            </div>

        </>
    )
}