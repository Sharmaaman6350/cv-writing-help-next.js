import PageHead from "@/PageHead";
import axios from "@/api/axios";
import { SubscribeAds } from "@/components/SubscribeAds/SubscribeAds";
import { reviewpage__data } from "@/data/review-page-data";
import { faArrowLeft, faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import moment from "moment";
import ReactPaginate from "react-paginate";


type ItemType = {
    _id: number,
    title: string,
    description: string,
    name: string,

    rating: string,
    createdAt: string,
};



type ReviewArrayType = {
    first: ItemType,
    second: ItemType,

}



export default function Reviews() {

    // Get reviews from database
    const [allReviews, setAllReviews] = useState<ItemType[]>([])
    const [currentPage, SetcurrentPage] = useState<number>()
    const [totalPage, SettotalPage] = useState<number>()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAllReviews = async () => {
            await axios.get(`/api/review/getreview/?selectrow=40`)
                .then((res) => {
                    if (res?.status === 200) {
                        setAllReviews(res?.data?.review)
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
        getAllReviews()
    }, [])






    return (
        <>
            <PageHead title="CV Writing Help Reviews" description="CV writing help reviews - We are rated 4.9/5 by more than 23k+ students. Trustpilot Score 4.9/5, Highly trusted and affordable." />
            <section className="py-5 footerBg">
                <div className="container">
                    <div className="d-flex flex-column align-items-center justify-content-center my-4">
                        <h1 className="text-center fw-bold text-white">Reviews</h1>
                    </div>
                </div>

            </section>
            <div className="py-3">
                <div className="container">
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Reviews</li>
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
                                    <h2> Loading Review... Please Wait!!</h2>
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
                                    allReviews?.map((item, i) => {
                                        return (
                                            <div className="col-md-6 mb-4 " key={i}>
                                                <div className="p-4 bg-sept rounded h-100">
                                                    <h4 className="h5 text-primary fw-bold">{item.title}</h4>
                                                    <div className="rating mb-3 d-flex justify-content-between align-items-center">
                                                        <div className="d-flex text-warning">
                                                            <FontAwesomeIcon icon={faStar} width={20} height={24} />
                                                            <FontAwesomeIcon icon={faStar} width={20} height={24} />
                                                            <FontAwesomeIcon icon={faStar} width={20} height={24} />
                                                            <FontAwesomeIcon icon={faStar} width={20} height={24} />
                                                            <FontAwesomeIcon icon={faStar} width={20} height={24} />


                                                        </div>
                                                        <p className="mb-0 fs-12 fw-bold text-muted">{moment(item.createdAt).format("DD-MM-YYYY")}</p>
                                                    </div>
                                                    <div dangerouslySetInnerHTML={{ __html: item?.description }} />

                                                    <h6 className="text-muted fw-bold">- {item.name}</h6>


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