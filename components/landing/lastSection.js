import React from 'react';

export default function LastSection(props) {
    return (
        <>
            <section className="pb-16 bg-blueGray-200 relative pt-32">
                <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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

                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64   relative z-10">
                    {/* <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16  relative z-10"> */}
                        <div className="w-full text-center ">
                         <iframe width="100%" className='rounded-lg' height="500px" id="gmap_canvas" src="https://maps.google.com/maps?q=Ace&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
// lg:w-8/12