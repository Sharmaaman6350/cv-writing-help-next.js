import axios from "@/api/axios";
import Image from "next/image"
import { useEffect, useState } from "react";
import Slider from "react-slick"



type ItemType = {
    _id: number,
    name: string,
    designation: string,
    description: string,
    gender: string,
};


export const ExpertCard = ({ item }: any) => {

    const [allExpert, setAllExpert] = useState<ItemType[]>([])

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAllExpert = async () => {
            await axios.get(`/api/expert/getexpert/?selectrow=15`)
                .then((res) => {
                    if (res?.status === 200) {
                        setAllExpert(res?.data?.expert)
                        setLoading(false)
                    }
                })
                .catch((error) => {
                    console.log(error?.response?.data?.message);
                    setLoading(false);
                })
        }
        getAllExpert()
    }, [])


    var settings = {
        autoplay: true,
        arrows: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
    };
    return (
        <Slider {...settings} autoplaySpeed={5000}>
            {
                allExpert?.map((item, i) => {
                    return (

                        <div className="col-md-4" key={i}>
                            <div className="d-flex border rounded text-center flex-column p-4 bg-gra align-items-center justify-content-center">
                                <div className="imgg mb-3">
                                    <Image src={item?.gender === "male" ? "/images/male-experts.svg" : "/images/female-experts.svg" } width={100} height={100} className="img-fluid" alt="" />
                                </div>
                                <h4 className="mb-0 text-primary">{item?.name}</h4>
                                <p className="mb-4 fs-12 ">{item?.designation}</p>
                                <div dangerouslySetInnerHTML={{__html : item?.description.substring(0,150) + "....."}} className="text-justify"/>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>


    )
}