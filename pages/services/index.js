import React from "react";
import MainLayout from "components/Layouts/MainLayout";
import PageLayout from "components/Layouts/PageLayout";
import Polygon from "components/Layouts/polygon";
import CardExpand from "components/Cards/CardExpand"
import SectionLayout from "components/Layouts/SectionLayout";
import { getPostByCategory } from "lib/api";
import Parser from 'html-react-parser';
import PageHeaderDesign from "components/Layouts/PageHeaderDesignPolygon";

export default function Services(props) {

    const services = props?.nodeServices;

    return (
        <>
            <MainLayout>
                <PageHeaderDesign title={"OUR SERVICES"}/>
                <div className="   mr-auto ml-auto -mt-48">
                    {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg "> */}
                    <div className="bg-blueGray-200 sec-padding">
                        <section className=" pb-0 relative ">

                            {/* <div className="container px-4 mx-auto"> */}
                            <div className="container  mx-auto">
                                <div className="flex flex-wrap">
                                    {
                                        services.map((p, index) => (
                                            <div className="w-1/3 px-4">
                                                <CardExpand
                                                    image={p?.featuredImage?.node?.sourceUrl}
                                                    title={p.title}
                                                    description={p.excerpt}
                                                    content={p?.content}
                                                    icon={p?.image?.iconimage?.sourceUrl}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* </div> */}
                </div>
                <PageLayout>
                </PageLayout>
            </MainLayout>


        </>
    )
}

export async function getStaticProps({ preview = false }) {


    const PostServices = await getPostByCategory("service")


    const nodeServices = []


    PostServices.edges.map((p, index) => {
        nodeServices.push(p.node)
    })


    return {
        props: { nodeServices },
    }

}

