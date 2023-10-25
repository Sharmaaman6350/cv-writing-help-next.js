import Image from "next/image";
import footerImg from "../../public/images/cv-writing-services-logo.jpg";
import { quicklinks__data } from "@/data/quickLinks";
import Link from "next/link";
import { servicelink__data } from "@/data/serviceLinkData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "@/api/axios";



type servicelinkDataType =     {
  slug: string,
  title: string
};


const Footer = () => {

  
  const [allpage, setAllpage] = useState<servicelinkDataType[]>([])

  useEffect(() => {
      const getData = async () => {
          await axios.get(`/api/servicepage/getpage`).then((response) => {
              if (response) {
                  setAllpage(response.data.servicepage)
              }
          }).catch((error) => {
              console.log(error?.response?.data?.message)
          })
      }
      getData()
  }, []);


  return (
    <footer className="footerBg">
      <div className="container">
        <div className="row footerList pt-4">
          <div className="col-lg-3 col-md-6 mt-4 ">
            <Image
              src={footerImg}
              className="img-fluid mb-4"
              width={140}
              height={100}
              alt=""
            />
            <p className="text-white">
              Want To Get All Our Latest News, Events And Promotions?
            </p>
            {/* <Link href="/order-now" className="btn btn-warning fw-bold">
              Chat with Us
            </Link> */}
          </div>
          <div className="col-lg-3 col-md-6 mt-4">
            <h4 className="text-white">Quick Links</h4>
            <ul className="ps-4 listColor">
              {quicklinks__data.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={item.url} className="nav-link text-white">
                      {item?.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mt-4">
            <h4 className="text-white">Services</h4>
            <ul className="ps-4 listColor">
              {allpage.map((item,i) => {
               
                return (
                  <li key={i}>
                    <Link href={item.slug} className="nav-link text-white ">
                      {item?.title}.
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mt-4">
            <h4 className="text-white">Contact</h4>

            <div className="mb-2">
              <Link
                href="mailto:info@cvwritingservices.ie"
                className="text-white text-decoration-none"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  width={16}
                  className="me-2"
                />
                info@cvwritingservices.ie
              </Link>
            </div>
            {/* <div>
                            <Link href="tel:+91 123 456 7890" className="text-white text-decoration-none"><FontAwesomeIcon icon={faPhone} width={16}/> +91 123 456 7890</Link>

                        </div> */}
          </div>
          <div className="col-12 text-center py-2 border-top">
            <p className="mb-0 fs-12 text-light">
              © 2023 Resume Writing Help. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
