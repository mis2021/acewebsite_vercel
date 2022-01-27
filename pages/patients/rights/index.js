import React from "react";
import MainLayout from "components/Layouts/MainLayout";
import PageLayout from "components/Layouts/PageLayout";
import { getPostByCategory } from "lib/api";
import PageCard from "components/Cards/PageCard";
import Parser from "html-react-parser";
import PageHeaderLayout from "components/Layouts/PageHeaderLayout";
import ControlledAccordions from "components/Global/ControlledAccordions";

export default function PatientRight({nodePatRights}) {
  return (
    <>
      <MainLayout>
       <PageHeaderLayout title="PATIENT RIGHTS" />
        <PageLayout>
          <ControlledAccordions data={nodePatRights}/>
        </PageLayout>
      </MainLayout>
    </>
  );
}


export async function getStaticProps({ preview = false }) {
    const PatientRights = await getPostByCategory("patient_rights");
  
    const nodePatRights = [];
  
    PatientRights.edges.map((p, index) => {
        nodePatRights.push(p.node);
    });
  
    return {
      props: { nodePatRights },
    };
  }