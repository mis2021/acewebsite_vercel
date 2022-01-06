import React from "react";
import Link from "next/link";
import Parser from 'html-react-parser';

export default function ImageCubes(props) {
    console.log(props.image)
    return (
        <>
            
                <a
                    href={props?.link}
                    target="_blank"

                >
                    <div className="shadow-lg rounded-lg text-center  mt-8 " style={{ backgroundImage: `url(${props?.image})`, backgroundSize: '100%', height: '160px' }}>
                        {/* <div className="bg-red-600 shadow-lg rounded-lg text-center p-8" style={{backgroundImage: props?.image  }}> */}
                        {/* <div style={{ backgroundImage: `url(${props?.image})`, backgroundSize: '100%', width: '100%' }}> */}
                        {/* <img
                            alt="..."
                            className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                        /> */}
                        <p className="text-lg text-white cube_____image-overlay">
                            {/* <p className="text-lg text-white mt-4 font-semibold"> */}
                            {props?.title}
                        </p>
                        {/* </div> */}

                    </div>
                </a>
            
        </>
    )
}