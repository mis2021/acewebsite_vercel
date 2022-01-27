import React from "react";
import MainLayout from "components/Layouts/MainLayout";
import PageLayout from "components/Layouts/PageLayout";
import SectionLayout from "components/Layouts/SectionLayout";
import { getPostByCategory } from "lib/api";
import Parser from "html-react-parser";
import PageHeaderLayout from "components/Layouts/PageHeaderLayout";
import PageCard from "components/Cards/PageCard";
import Footer from "components/FooterTemp/Footer";
import PagehaderLayoutv2 from "components/Layouts/PagehaderLayoutv2";
import ControlledAccordions from "components/Global/ControlledAccordions";

export default function GeneralRules({ nodesGeneral }) {

  return (
    <>
      <MainLayout>
        <PageHeaderLayout title="HOSPITAL RULES AND REGULATIONS" />
        <PageLayout>
        <ControlledAccordions data={nodesGeneral} />
        </PageLayout>
          
      </MainLayout>
    </>
  );
}

export async function getServerSideProps({ preview = false }) {
  const GeneralRules = await getPostByCategory("general_rules");

  const nodesGeneral = [];

  GeneralRules.edges.map((p, index) => {
    nodesGeneral.push(p.node);
  });

  return {
    props: { nodesGeneral },
  };
}



{/* <div className="pl-4"> {Parser(p.content)} </div> */}