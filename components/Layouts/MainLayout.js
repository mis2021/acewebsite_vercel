import React from "react";
import Link from "next/link";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageNavbar from "components/Navbars/PageNavbar";
import Footer from "components/FooterTemp/Footer";
export default function MainLayout(props) {

    return (
        <>

            <div style={{ height: '100%' }}>


                {
                    props.type == "index" ? <IndexNavbar fixed /> : <PageNavbar />
                }


                {props.children}

                {
                    props.type == "index" ? <Footer /> : <></>
                }
                

            </div>
        </>

    )
}