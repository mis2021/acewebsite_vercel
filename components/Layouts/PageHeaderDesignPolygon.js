import React from "react";

export default function PageHeaderDesign(props) {
    return (
        <>

            <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage:
                            "url('/img/pattern_nextjs.png')",
                        zIndex: 0
                    }}
                >
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-75 bg-black"
                    ></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div className="pr-12">
                                <center>
                                <h1 className="text-white font-semibold text-5xl">
                                  {props.title}
                                </h1>
                                </center>
                                {/* <p className="mt-4 text-lg text-blueGray-200">
                                        In the heart island of Bohol, a new era of medical healthcare rises. Allied Care Experts (ACE) Medical Center – Bohol  <br />
                                        is a tertiary healthcare facility with an organized, systematic, cost-effective, <br />
                                        sympathetic and holistic approach to its goal in providing the best quality and justifiable <br />
                                        medical services in Bohol’s communities and beyond.<br />
                                    </p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
                    style={{ transform: "translateZ(0)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-blueGray-200 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </div>
        </>
    );
}
