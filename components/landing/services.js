import React from "react";
import { getPostByCategory } from "lib/api";
import Parser from 'html-react-parser';
import ImageCubes from "components/Contents/ImageCubes";
import {  isBrowser, isMobile } from 'react-device-detect';

export default function LandingServices(props) {
   


    const intDesc = props?.initialDesc[0];
    const services = props?.services;


    const srLength = services.length;
    const srl_cut = parseInt(services.length / 2) - 1;



    var srvb_1 = []
    var srvb_2 = []

    services.map((p, index) => {

        if (index >= 0 && index <= srl_cut) {
           
            srvb_1.push(p)
        }
        else {
           
            srvb_2.push(p)
        }
    })

   



    return (
        <>
            <div className={`container mx-auto overflow-hidden pb-20 ${srLength > 6 ? "mt-16" : "mt-2"} `}>
            {/* ${isMobile == true ? " " : "scroll_height"} */}
                <div className="flex flex-wrap items-center ">
                    <div className={`w-full md:w-6/12 px-4 mr-auto ml-auto ${srLength > 6 ? "mt-32" : ""}`}>
                        <div className={`justify-center flex flex-wrap relative ${srLength > 6 ? "infinite__scroll" : ""} `}>
                            <div className="my-4 w-full lg:w-6/12 px-4">

                                {
                                    srvb_1.map((p, index) => (

                                        <ImageCubes image={p?.featuredImage?.node?.sourceUrl} title={p.title} />

                                    ))
                                }

                            </div>
                            <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                                {
                                    srvb_2.map((p, index) => (
                                        <ImageCubes image={p?.featuredImage?.node?.sourceUrl} title={p.title} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-8">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                           
                            <i className="fas fa-drafting-compass text-xl"></i>
                        </div>
                        <h3 className="text-3xl mb-2 font-semibold leading-normal">
                            {intDesc?.title}
                        </h3>
                        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                            {intDesc?.content ? Parser(intDesc?.content) : <></>}
                        </p>


                        {/* <a
                            href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
                            target="_blank"
                            className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                        >
                            View all{" "}
                            <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                        </a> */}
                    </div>
                </div>
            </div>

        </>
    );
}

