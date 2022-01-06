import React from "react";
import Head from 'next/head';
import Link from "next/link";

export default function SectionLayout(props) {

    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center">
                    {props.children}
                </div>
            </div>
        </>
    );
}
