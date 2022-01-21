import React from "react";
import MainLayout from "components/Layouts/MainLayout";
import PageLayout from "components/Layouts/PageLayout";
import { getPostByCategory } from "lib/api";
import Parser from "html-react-parser";
import { urlObjectKeys } from "next/dist/shared/lib/utils";
import PageHeaderLayout from "components/Layouts/PageHeaderLayout";
import CardAbout from "./CardAbout";
import { aboutUsMenu } from "constants/navbarmenu";

export default function VMGC({ nodesAbout }) {
  const vision = nodesAbout?.find((e) => e.slug == "vision");
  const mission = nodesAbout?.find((e) => e.slug == "mission");
  const goal = nodesAbout?.find((e) => e.slug == "goal");
  const coreVal = nodesAbout?.find((e) => e.slug == "core-values");
  const about = nodesAbout?.find(
    (e) => e.slug == "about-ace-medical-center-bohol"
  );
  const history = nodesAbout?.find((e) => e.slug == "history");

  console.log("about", about);

  return (
    <>
      <MainLayout type="index">
        <PageHeaderLayout />
        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <img
                      className="  w-20  mb-5 text-center inline-flex items-center justify-center "
                      src={vision?.featuredImage?.node?.sourceUrl}
                    />

                    <h6 className="text-xl font-semibold">{vision.title}</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      {vision?.excerpt ? Parser(vision?.excerpt) : <></>}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <img
                      className="  w-20  mb-5 text-center inline-flex items-center justify-center "
                      src={mission?.featuredImage?.node?.sourceUrl}
                    />
                    <h6 className="text-xl font-semibold">{mission.title}</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      {mission?.excerpt ? Parser(mission?.excerpt) : <></>}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <img
                      className="  w-20  mb-5 text-center inline-flex items-center justify-center "
                      src={goal?.featuredImage?.node?.sourceUrl}
                    />
                    <h6 className="text-xl font-semibold">{goal.title}</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      {goal?.excerpt ? Parser(goal?.excerpt) : <></>}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-hospital-alt text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  {about.title}
                </h3>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  {about?.content ? Parser(about?.content) : <></>}
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="..."
                    src="/img/pattern_nextjs.png"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blueGray-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Ace Medical Center
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      In ACE, what we do here is simply the best in healthcare.
                      ACE Medical Center Bohol KASALIGAN MO!
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-hospital-alt text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  {history.title}
                </h3>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  {history?.content ? Parser(history?.content) : <></>}
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="..."
                    src="/img/pattern_nextjs.png"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blueGray-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Ace Medical Center
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      In ACE, what we do here is simply the best in healthcare.
                      ACE Medical Center Bohol KASALIGAN MO!
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const PostAbout = await getPostByCategory("about, vmgc");

  const nodesAbout = [];

  PostAbout.edges.map((p, index) => {
    nodesAbout.push(p.node);
  });

  return {
    props: { nodesAbout },
  };
}
