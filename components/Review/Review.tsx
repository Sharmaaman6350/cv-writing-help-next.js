import { review__data } from "@/data/review";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { ReviewCard } from "../ReviewCard/ReviewCard";
import Slider from "react-slick";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "@/api/axios";
import moment from "moment";



type ItemType = {
    _id: number,
    title: string,
    description: string,
    name: string,
    university: string,
    rating: string,
    createdAt: string,
};


export const Review = () => {
   
    const [allReviews, setAllReviews] = useState<ItemType[]>([])
   
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAllReviews = async () => {
            await axios.get(`/api/review/getreview/?selectrow=10`)
                .then((res) => {
                    if (res?.status === 200) {
                        setAllReviews(res?.data?.review)
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


    var settings = {
        autoplay:false,
        arrows:true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
    };

    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-4">
                        <h2 className="text-primary h3 fw-bold">Unlock Your Career Potential: Discover Our CV Writing Service
                            Reviews </h2>
                    </div>

                    <div className="col-12">
                        <Slider {...settings}>
                            {
                                allReviews?.map((item, index) => (
                                    <div className="p-4 bg-sept rounded reviewSlide" key={index}>
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
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>

    )
}