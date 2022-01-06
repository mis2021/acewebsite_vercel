import React from "react";
import Head from 'next/head'
import Link from "next/link";
import MainLayout from "components/Layouts/MainLayout";
import LandingHeader from "components/Contents/LandingHeader";
import { getAllPostsForHome, getPostByCategory } from "lib/api";
import SmallDetails from "components/Contents/SmallDetails";
import Parser from 'html-react-parser';
import MainCarousel from '../components/Carousel/MainCarousel'
import SectionLayout from "components/Layouts/SectionLayout";
import Carousel3D from "components/Carousel/Crl/3DCarousel";
import LandingServices from "../components/landing/services";

export default function Index( { nodesAbout, preview, nodeFeatured, nodeGallery , ...props}) {

    const vmgc = []

    // if(edges){
    //     edges.map((e) => {

    //     })
    // }

    console.log("nodesAbout", nodesAbout)
    console.log("nodeFeatured", nodeFeatured)
  


    const vision = nodesAbout?.find(e => e.slug == 'vision')
    const mission = nodesAbout?.find(e => e.slug == 'mission')
    const goal = nodesAbout?.find(e => e.slug == 'goal')
    const coreVal = nodesAbout?.find(e => e.slug == 'core-values')
    const featured = nodeFeatured ? nodeFeatured[0] : {}
    const gallery = nodeGallery ? nodeGallery : {}
    // const featured = nodes?.find(e => e.slug == 'core-values')


    function polygonBlue() {
        return (
            <>
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
                            className="text-blueGray-100 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </>
        )
    }

    function section2() {
        return (
            <>

                <SectionLayout>
                    <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                            {/* <img
                                    alt="..."
                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                                    className="w-full align-middle rounded-t-lg"
                                /> */}
                            {/* width="560" height="315" */}
                            <iframe className="w-full align-middle rounded-t-lg" width="600" height="200" src="https://www.youtube.com/embed/LxQhxBqYOgs?rel=0?version=3&autoplay=1&controls=0&&showinfo=0&loop=1" allowFullScreen="allowfullscreen" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            {/* <iframe className="w-full align-middle rounded-t-lg" src="https://www.youtube.com/embed/LxQhxBqYOgs?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                            <blockquote className="relative p-8 mb-4">
                                {/* <svg
                                        preserveAspectRatio="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 583 95"
                                        className="absolute left-0 w-full block h-95-px -top-94-px"
                                    >
                                        <polygon
                                            points="-30,95 583,95 583,65"
                                            className="text-blueGray-700 fill-current"
                                        ></polygon>
                                    </svg> */}
                                <h4 className="text-xl font-bold text-white">
                                    {featured?.title ? Parser(featured?.title) : <></>}
                                </h4>
                                <p className="text-md font-light mt-2 text-white">

                                    {featured?.content ? Parser(featured?.content) : <></>}
                                </p>
                            </blockquote>
                        </div>
                    </div>

                    <div className="w-full md:w-6/12 px-4">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-6/12 px-4">

                                <SmallDetails marginTop="mt-4" title={vision?.title} content={vision?.excerpt} image={vision?.featuredImage?.node?.sourceUrl} />
                                <SmallDetails marginTop="min-w-0" title={mission?.title} content={mission?.excerpt} image={mission?.featuredImage?.node?.sourceUrl} />

                            </div>
                            <div className="w-full md:w-6/12 px-4">
                                <SmallDetails marginTop="min-w-0 mt-4" title={goal?.title} content={goal?.excerpt} image={goal?.featuredImage?.node?.sourceUrl} />
                                <SmallDetails marginTop="min-w-0" title={coreVal?.title} content={coreVal?.excerpt} image={coreVal?.featuredImage?.node?.sourceUrl} />

                            </div>
                        </div>
                    </div>

                </SectionLayout>
            </>
        )
    }

    function carouseltemp() {

        const nodeGallery = []

        gallery.map((p, index) => {
            var img = {}
            img.title = p.title
            img.url = p?.featuredImage?.node?.sourceUrl
            nodeGallery.push(img)
        })

        console.log("display image array", nodeGallery)


        return (
            <>
                <Carousel3D imageList={nodeGallery} />
            </>
        )
    }

    return (
        <>
            <MainLayout>
                <LandingHeader />

                <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
                    <SectionLayout>
                        {polygonBlue()}
                        {section2()}
                        {carouseltemp()}
                        <LandingServices initialDesc={props?.nodeInitialServDesc} services={props?.nodeServices} />
                    </SectionLayout>

                </section>

            </MainLayout>


        </>
    )
}

export async function getStaticProps({ preview = false }) {

    const PostAbout = await getPostByCategory("about, vmgc")
    const PostFeatured = await getPostByCategory("featured")
    const PostGallery = await getPostByCategory("gallery")
    const PostInitialService = await getPostByCategory("initial_service_desc")
    const PostServices = await getPostByCategory("service")


    const nodesAbout = []
    const nodeFeatured = []
    const nodeGallery = []
    const nodeInitialServDesc = []
    const nodeServices = []

    PostAbout.edges.map((p, index) => {
        nodesAbout.push(p.node)
    })

    PostFeatured.edges.map((p, index) => {
        nodeFeatured.push(p.node)
    })

    PostGallery.edges.map((p, index) => {
        nodeGallery.push(p.node)
    })

    PostInitialService.edges.map((p, index) => {
        nodeInitialServDesc.push(p.node)
    })

    PostServices.edges.map((p, index) => {
        nodeServices.push(p.node)
    })

   



    return {
        props: { nodesAbout, preview, nodeFeatured, nodeGallery, nodeInitialServDesc, nodeServices },
    }

}

