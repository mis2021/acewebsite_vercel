import React from "react";
import Link from "next/link";
import Parser from 'html-react-parser';  

export default function SmallDetails(props) {

    return (
        <>
            <div className={"relative flex flex-col" + props.marginTop} >
                <div className="px-4 py-5 flex-auto">
                    {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"> */}
                        {/* <i className="fas fa-sitemap"></i> */}
                        <img 
                            src={props.image} 
                            className="  w-20  mb-5 "
                        />
                    {/* </div> */}
                    <h6 className="text-xl mb-1 font-semibold">
                        {props.title}
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                        { props?.content ? Parser(props?.content) : <></>}
                    </p>
                </div>
            </div>
        </>
    )
}