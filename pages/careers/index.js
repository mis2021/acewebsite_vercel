import React from "react";
import MainLayout from "components/Layouts/MainLayout";
import PageLayout from "components/Layouts/PageLayout";
import CardExpand from "components/Cards/CardExpandCareers";
import { getPostByCategory } from "lib/api";
import PageHeaderDesign from "components/Layouts/PageHeaderDesignPolygon";




export default function Careers(props) {
  const careers = props?.NodeNewsAndEvent;

  const pageTitle = 'Allied Care Experts CAREERS';

  console.log(careers)

  return (
    <>
      <MainLayout>
        {/* <PagehaderLayoutv2 image={careers}/>
        <PageheaderLayoutCareers image={careers} /> */}

        <PageHeaderDesign title={"OUR CAREERS"}/>
        
        <div className=" bg-blueGray-200  mr-auto ml-auto -mt-12">
          {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg "> */}
          <div className=" sec-padding">
            <section className=" pb-0 relative ">
              {/* <div className="container px-4 mx-auto"> */}
              <div className="container  mx-auto">
                <div className="flex flex-wrap" style={{display:'flex', justifyContent:'center' }}>
                  <center>
                    <br/>
                    <br/>
                    <br/>
                    <div style={{fontSize:'30px',padding:'140px',fontWeight:'bold'}}>
                      <p>FOR THE INTERESTED APPLICANTS</p>
                      <br/>
                      <p>You may email your resume to hr@acemcbohol.com or you may personally submit it to our office at 8th floor HR Department ACE Medical Center-Bohol 0368 AS Bioco St., Carlos P. Garcia East Avenue, Mansasa District, Tagbilaran City, Bohol 6300.</p>
                    </div>
                    
                  {careers.map((p, index) => (
                    <div className="w-1/3 px-4" style={{width:'100%',padding:'40px'}}>
                      <CardExpand
                        // image={p?.featuredImage?.node?.sourceUrl}
                        title={p.title}
                        // description={p.excerpt}
                        content={p?.content}
                        // icon={p?.image?.iconimage?.sourceUrl}
                      />
                    </div>
                  ))}
                  </center>
                </div>
              </div>
            </section>
          </div>
        </div>
        <PageLayout>
        </PageLayout>
      </MainLayout>
    </>
  );
}

export async function getServerSideProps({ preview = false }) {
  const PostNewsAndEvent = await getPostByCategory("careers");

  const NodeNewsAndEvent = [];

  PostNewsAndEvent.edges.map((p, index) => {
    NodeNewsAndEvent.push(p.node);
  });

  return {
    props: { NodeNewsAndEvent },
  };
}
