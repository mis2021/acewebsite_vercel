import React from 'react';
import Parser from 'html-react-parser';

export default function PersonDesc(props) {
    const { data } = props
    return (
        <>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 pb-16">
                <div className="px-6 ">
                    <img
                        alt="..."
                        src={data?.featuredImage?.node?.sourceUrl}
                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                    />
                    <div className="pt-6 text-center">
                        <h5 className="text-xl font-bold">{data?.title}</h5>
                        <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                            {data?.excerpt ? Parser(data?.excerpt) : <></>}
                        </p>
                        <p className="mt-4 text-blueGray-500">
                            {data?.content ? Parser(data?.content) : <></>}
                        </p>

                    </div>
                </div>
            </div>
        </>

    )
}
