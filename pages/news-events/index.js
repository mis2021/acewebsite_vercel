import React from "react";
import MainLayout from "components/Layouts/MainLayout";
import PageLayout from "components/Layouts/PageLayout";
import PagehaderLayoutv2 from "components/Layouts/PagehaderLayoutv2";
// import 'tw-elements';

export default function NewsEvents(props) {
  return (
    <>
      <MainLayout>
        <PageLayout>
            <PagehaderLayoutv2/>
        </PageLayout>
      </MainLayout>
    </>
  );
}
