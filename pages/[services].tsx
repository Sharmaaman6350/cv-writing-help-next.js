import PageHead from "@/PageHead";
import { ExpertCard } from "@/components/ExpertCard/ExpertCard";
import AssignmentForm from "@/components/Form/AssignmentForm";
import { ServiceCard } from "@/components/ServiceCard/ServiceCard";
import { expert__data } from "@/data/expert";
import { servicepagedata } from "@/data/servicepagedata";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import gifImage from "../public/images/best-cv-writing-service.gif"
import { Review } from "@/components/Review/Review";
import { FAQs } from "@/components/FAQs/FAQs";
import FAQImg from "../public/images/smiling-businessman-raising-hand-conference.webp"
import { OfferCard } from "@/components/OfferCard/OfferCard";
import { useEffect, useState } from "react";
import axios from "@/api/axios";





interface ServiceDataType {
    id: string;
    seotitle: string;
    breadcrumb: string;
    seodescription: string;
    title: string;
    description: string;
    highlightheading: string;
    highlightcontent: string;
    highlights: Array<{
        id: number;
        title: string;
        content: string;
        icon: string;
    }>;
    infoheading: string;
    infocontent: string;
    infopoints: Array<{
        id: number;
        title: string;
        content: string;
    }>;
    expertheading: string;
    expertcontent: string;
    stepsectionheading: string;
    stepsectioncontent: string;
    stepsbox: Array<{
        id: number;
        title: string;
        content: string;
    }>;
    aboutheading: string;
    aboutcontent: string;
    abouthiringheading: string;
    abouthiringcontent: string;
    reviewheading: string;
    faqheading: string;
    faqs: Array<{
        id: number;
        question: string;
        answer: string;
    }>;



}





export const getServerSideProps: GetServerSideProps = async (context) => {
    const itemId = context.params?.services;
    let data;
    let error;

    await axios.get(`/api/servicepage/slug/${itemId}`)
        .then((response) => {
            if (response) {
                data = response?.data?.servicepage
            }
        }).catch(() => {
            error = true
        })

    if (!data) {
        return {
            props: { hasError: true },
        }
    };
    return {
        props: {
            data
        }
    }
};



export default function Services(props: { data: ServiceDataType, hasError: Boolean }) {
    const router = useRouter();

   


    if (props.hasError) {
        return <div className="h-screen flex items-center justify-center flex-col gap-4">
            <p className="text-2xl text-gray-500 font-medium">Invalid Request! The page you are looking, not found.</p>
            <button className="px-5 py-2 bg-red-600 text-white rounded-md" onClick={() => router.back()}>Tap to go back</button>
        </div>
    }

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <PageHead
                title={props?.data?.seotitle}
                description={props?.data?.seodescription}
            />
            <section className="py-5 bg-home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <h1 className="fw-bold mainJs"><span className=" bg-dark text-white px-2 py-1 me-2"> {props.data.title}</span> in Ireland</h1>
                            <div dangerouslySetInnerHTML={{ __html: props?.data?.description }} />
                            <Link href="/order-now" className="btn text-dark fw-bold px-4 btn-warning m-none">Write My CV</Link>
                        </div>
                        <div className="col-lg-5 homeForm">
                            <AssignmentForm />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-sept">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-4">
                            <h2 className="text-primary h3 fw-bold">{props.data.highlightheading}</h2>

                            <div dangerouslySetInnerHTML={{__html:props.data.highlightcontent}}/>

                        </div>
                        {props?.data?.highlights?.map((item) => {
                          
                            return (
                                <OfferCard item={item} key={item.id} />
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center mb-5">
                                <h2 className="text-primary h3 fw-bold mb-4">{props.data.infoheading}</h2>
                                <div dangerouslySetInnerHTML={{__html:props.data.infocontent}}/>

                            </div>

                            {
                                props?.data?.infopoints[0].title === "" ? "" : <ServiceCard data={props?.data?.infopoints} />
                            }



                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-sept">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-4">
                            <h2 className="text-primary h3 fw-bold mb-4">{props.data?.expertheading}</h2>
                            <div dangerouslySetInnerHTML={{__html:props?.data?.expertcontent}}/>

                        </div>

                        <ExpertCard />

                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="text-primary h3 fw-bold mb-4">{props.data?.stepsectionheading}</h2>
                            <div dangerouslySetInnerHTML={{ __html: props.data.stepsectioncontent }} />

                        </div>
                        {
                            props.data.stepsbox?.map((item, i) => {
                                return (

                                    <div className="col-md-4 mt-4" key={i}>
                                        <div
                                            className={`d-flex position-relative h-100 pt-5 bg-primary ${item.id === 1 ? "sepTop" : item.id === 2 ? "sepTop2" : "sepTop3"} text-center p-4 flex-column align-items-center`}>
                                            <h4 className="text-center text-warning ">{item.title}</h4>
                                            <div dangerouslySetInnerHTML={{ __html: item.content }} className="text-white mb-0" />


                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

            </section>

            <section className="py-5 bg-sept">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">

                        </div>
                        <div className="col-md-7">
                            <h2 className="text-primary h3 fw-bold mb-4">{props.data.aboutheading}</h2>
                            <div dangerouslySetInnerHTML={{ __html: props.data.aboutcontent }} />

                            <Link href="/order-now" className="btn text-dark fw-bold px-4 btn-warning">Write My Resume</Link>

                        </div>
                    </div>
                </div>

            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6">
                            <h2 className="text-primary h3 fw-bold">{props.data.abouthiringheading} </h2>
                            <div dangerouslySetInnerHTML={{ __html: props.data.abouthiringcontent }} />
                            <Link href="/order-now" className="btn text-dark fw-bold px-4 btn-warning">Hire Experts</Link>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-center">
                            <Image src={gifImage} className="img-fluid" alt="" width={540} height={200} />
                        </div>
                    </div>
                </div>
            </section>

            <Review />

            <section className="py-5 bg-sept">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-4">
                            <h2 className="text-primary h3 fw-bold mb-4">{props.data.faqheading}</h2>
                        </div>
                        <div className="col-md-8">
                            <FAQs data={props.data.faqs} />
                        </div>
                        <div className="col-md-4">
                            <Image src={FAQImg} className="img-fluid" width={500} height={100} alt="" />
                        </div>

                    </div>
                </div>

            </section>


        </>
    )


}


