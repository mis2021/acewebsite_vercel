import React from "react";
import Head from 'next/head'
import Link from "next/link";
import MainLayout from "components/Layouts/MainLayout";
import LandingHeader from "components/Contents/LandingHeader";
import { getPostByCategory } from "lib/api";
import SmallDetails from "components/Contents/SmallDetails";
import Parser from 'html-react-parser';
import SectionLayout from "components/Layouts/SectionLayout";
import Carousel3D from "components/Carousel/Crl/3DCarousel";
import LandingServices from "../components/landing/services";
import Polygon from "components/Layouts/polygon";
import DoctorSummary from "components/landing/doctors";
import LastSection from "components/landing/lastSection";
import Footer from "components/FooterTemp/Footer";
import Script from 'next/script'

export default function Index({ nodesAbout, preview, nodeFeatured, nodeGallery, ...props }) {

    const vision = nodesAbout?.find(e => e.slug == 'vision')
    const mission = nodesAbout?.find(e => e.slug == 'mission')
    const goal = nodesAbout?.find(e => e.slug == 'goal')
    const coreVal = nodesAbout?.find(e => e.slug == 'core-values')
    const featured = nodeFeatured ? nodeFeatured[0] : {}
    const gallery = nodeGallery ? nodeGallery : {}


    const Section2 = () => {
        return (
            <>

                <SectionLayout>
                    <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">

                            <iframe className="w-full align-middle rounded-t-lg" width="600" height="200" src="https://www.youtube.com/embed/LxQhxBqYOgs?rel=0?version=3&autoplay=1&controls=0&&showinfo=0&loop=1" allowFullScreen="allowfullscreen" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <blockquote className="relative p-8 mb-4">

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

    const CarouselTemp = () => {

        const nodeGallery = []

        gallery.map((p, index) => {
            var img = {}
            img.title = p.title
            img.url = p?.featuredImage?.node?.sourceUrl
            nodeGallery.push(img)
        })

        return (
            <>
                <Carousel3D imageList={nodeGallery} />
            </>
        )
    }

    return (
        <>
            {/* <script src="../path/to/tw-elements/dist/js/index.min.js"></script> */}
            <MainLayout type="index">
                <LandingHeader />

                <section className="mt-48 md:mt-40 pb-0 relative bg-blueGray-100">
                    <SectionLayout>
                        <Polygon color={'text-blueGray-100'} />
                        <Section2 />
                        <CarouselTemp />
                        <LandingServices initialDesc={props?.nodeInitialServDesc} services={props?.nodeServices} />
                    </SectionLayout>
                </section>

                <DoctorSummary doctors={props?.nodeDoctors} />
                <LastSection />
                {/* <Footer /> */}


            </MainLayout>


        </>
    )
}

// export async function getStaticProps({ preview = false }) {
export async function getServerSideProps({ preview = false }) {

    const PostAbout = await getPostByCategory("about, vmgc")
    const PostFeatured = await getPostByCategory("featured")
    const PostGallery = await getPostByCategory("gallery")
    const PostInitialService = await getPostByCategory("initial_service_desc")
    const PostServices = await getPostByCategory("service")
    const PostDoctors = await getPostByCategory("featured_doctor")


    const nodesAbout = []
    const nodeFeatured = []
    const nodeGallery = []
    const nodeInitialServDesc = []
    const nodeServices = []
    const nodeDoctors = []

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

    PostDoctors.edges.map((p, index) => {
        nodeDoctors.push(p.node)
    })

    return {
        props: { nodesAbout, preview, nodeFeatured, nodeGallery, nodeInitialServDesc, nodeServices, nodeDoctors },
    }

}

