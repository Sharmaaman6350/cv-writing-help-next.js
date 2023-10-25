import PageHead from "@/PageHead";
import axios from "@/api/axios";
import { SubscribeAds } from "@/components/SubscribeAds/SubscribeAds";

import {  faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import moment from "moment";



type ItemType = {
    _id: number,
    title: string,
    content: string,
    createdAt: string,
};






export default function Blogs() {

    // Get blogs from database
    const [allBlogs, setAllBlogs] = useState<ItemType[]>([])
    const [currentPage, SetcurrentPage] = useState<number>()
    const [totalPage, SettotalPage] = useState<number>()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAllBlog = async () => {
            await axios.get(`/api/blog/getblog/?selectrow=40`)
                .then((res) => {
                    if (res?.status === 200) {
                   
                        setAllBlogs(res?.data?.blog)
                        SetcurrentPage(res?.data?.page);
                        SettotalPage(res?.data?.totalPages);
                        setLoading(false)
                    }
                })
                .catch((error) => {
                    console.log(error?.response?.data?.message);
                    setLoading(false);
                })
        }

        getAllBlog()
    }, [])






    return (
        <>
            <PageHead title="CV Writing Help Blogs" description="CV writing help Blogs - We are rated 4.9/5 by more than 23k+ students. Trustpilot Score 4.9/5, Highly trusted and affordable." />
            <section className="py-5 footerBg">
                <div className="container">
                    <div className="d-flex flex-column align-items-center justify-content-center my-4">
                        <h1 className="text-center fw-bold text-white">Blogs</h1>
                    </div>
                </div>

            </section>
            <div className="py-3">
                <div className="container">
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Blogs</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {
                loading === true ? <section>
                    <div className="loadingText">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center text-primary fw-bold">
                                    <h2> Loading Blogs... Please Wait!!</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> :      allBlogs.length === 0 ? <section>
                    <div className="loadingText">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center text-primary fw-bold mb-5">
                                    <h2>No Blogs Found!!</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                    :



                    <section className="py-5">
                        <div className="container">
                            <div className="row">
                                {
                                    allBlogs?.map((item, i) => {
                                        return (
                                            <div className="col-md-6 mb-4 " key={i}>
                                                <div className="p-4 bg-sept rounded h-100">
                                                    <h4 className="h5 text-primary fw-bold">{item.title}</h4>
                                                    <div className="rating mb-3 d-flex justify-content-between align-items-center">
                                                        <p className="mb-0 fs-12 fw-bold text-muted">{moment(item.createdAt).format("DD-MM-YYYY")}</p>
                                                    </div>
                                                    <div dangerouslySetInnerHTML={{ __html: item?.content }} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
            }
            <section className="py-5 bg-warning">
                <div className="container">
                    <SubscribeAds />
                </div>
            </section>
        </>
    )
}