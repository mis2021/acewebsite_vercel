import React from "react";
import MainLayout from "components/Layouts/MainLayout";
import PageLayout from "components/Layouts/PageLayout";
import PageHeaderLayout from "components/Layouts/PageHeaderLayout";
import { getPostByCategory } from "lib/api";
import PageCard from "components/Cards/PageCard";
import Parser from "html-react-parser";

export default function PreAdmission({ nodeAdmGuide }) {
//   console.log(nodeAdmGuide);

  return (
    <>
      <MainLayout>
        <PageHeaderLayout />
        <PageLayout>
          <PageCard title="ADMISSION GUIDE">
            <div style={{ width: "100%" }}>
              {nodeAdmGuide.map((p, index) => (
                <div class="accordion" id={"accordionExample5" + index}>
                  <div class="accordion-item bg-white border border-gray-200">
                    <h2
                      class="accordion-header mb-0"
                      id={"headingOne5" + index}
                    >
                      <button
                        class="
          accordion-button
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        "
                        type="button"
                        id={index}
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne5"
                        aria-expanded="true"
                        aria-controls="collapseOne5"
                      >
                        <i class="fas fa-hospital-user"></i>
                        <div class="pl-4">{p.title}</div>
                      </button>
                    </h2>
                    <div
                      id="collapseOne5"
                      class="accordion-collapse collapse show"
                      aria-labelledby={"headingOne5" + index}
                    >
                      <div class="accordion-body py-4 px-5">
                        <div className="pl-4"> {Parser(p.content)} </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PageCard>
        </PageLayout>
      </MainLayout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const AdmGuide = await getPostByCategory("admission_guide");

  const nodeAdmGuide = [];

  AdmGuide.edges.map((p, index) => {
    nodeAdmGuide.push(p.node);
  });

  return {
    props: { nodeAdmGuide },
  };
}
