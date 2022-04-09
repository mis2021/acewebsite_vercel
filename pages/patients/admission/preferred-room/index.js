import React from "react";
import MainLayout from "components/Layouts/MainLayout";
import PageLayout from "components/Layouts/PageLayout";
import PageHeaderDesign from "components/Layouts/PageHeaderDesignPolygon";
import MediaCard from "components/Cards/MediaCard";
import { getPostByCategory } from "lib/api";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Parser from "html-react-parser";

export default function PreferredRoom(props) {


    return (
        <>
            <MainLayout>
                <PageHeaderDesign title="PREFERRED ROOMS" />
                <div className="bg-blueGray-200 sec-padding-2">
                    <section className=" pb-0 relative ">
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {
                                props.nodeRoom.map((r) => (
                                    <Grid item xs={6}>

                                        <Card sx={{ minWidth: 275 }}>
                                            <CardContent style={{height: 370}} >
                                                
                                                <Typography variant="h5" component="div">
                                                    {r.title}
                                                </Typography>
                                                <div style={{margin: "25px"}}>
                                                    <Typography variant="body2">
                                                        {Parser(r.content)}
                                                    </Typography>
                                                </div>

                                            </CardContent>

                                        </Card>



                                    </Grid>
                                ))
                            }
                        </Grid>








                    </section>
                </div>
                <PageLayout />
            </MainLayout>


        </>
    )
}

export async function getServerSideProps({ preview = false }) {

    const room = await getPostByCategory("patients_and_visitors_guide,preferred_room")

    const nodeRoom = []

    room.edges.map((p, index) => {
        nodeRoom.push(p.node)
    })

    return {
        props: { nodeRoom },
    }

}