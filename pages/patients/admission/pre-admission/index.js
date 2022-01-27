import React from "react";
import MainLayout from "components/Layouts/MainLayout";
import PageLayout from "components/Layouts/PageLayout";
import PageHeaderLayout from "components/Layouts/PageHeaderLayout";
import { getPostByCategory } from "lib/api";
import PageCard from "components/Cards/PageCard";
import Parser from "html-react-parser";
import ControlledAccordions from "components/Global/ControlledAccordions";

export default function PreAdmission({ nodeAdmGuide }) {


  return (
    <>
      <MainLayout>
        <PageHeaderLayout title="ADMISSION GUIDE" />
        <PageLayout>
            <ControlledAccordions data={nodeAdmGuide}/>
        </PageLayout>
      </MainLayout>
    </>
  );
}

export async function getServerSideProps({ preview = false }) {
  const AdmGuide = await getPostByCategory("admission_guide");

  const nodeAdmGuide = [];

  AdmGuide.edges.map((p, index) => {
    nodeAdmGuide.push(p.node);
  });

  return {
    props: { nodeAdmGuide },
  };
}
