import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import logo from "../../public/images/cv-writing-services-logo.jpg";
import { servicelink__data } from "@/data/serviceLinkData";
import { useEffect, useState } from "react";
import axios from "@/api/axios";


type servicelinkDataType =     {
  slug: string,
  title: string
}


const Header = () => {

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
    <header>
      <div className={`${styles.topBar}  bg-main`}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex ">
              <Link
                href="mailto:info@cvwritingservices.ie"
                className=" text-dark fs-14"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  width={18}
                  className="me-1"
                  height={18}
                />
                info@cvwritingservices.ie
              </Link>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              {/* <Link href="#" className="mb-0 text-dark fs-12">
                <FontAwesomeIcon
                  icon={faPhone}
                  width={18}
                  className="me-1"
                  height={18}
                />
                
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navbar vjMan navbar-expand-lg navbar-light bg-light py-0"
        id="headerMain"
      >
        <div className="container py-0">
          <Link className="navbar-brand" href="/">
            <Image
              src={logo}
              width={200}
              height={200}
              className="img-fluid "
              alt=""
            />
          </Link>
          <div className="text-center ms-4 m-none">
            <p className="mb-0 fs-12">24/7 Customer support</p>

            <p className="mb-0 fs-12">info@cvwritingservices.ie</p>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="d-flex flex-column align-items-end justify-content-center gulMOhar w-100">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/experts">
                    Experts
                  </Link>
                </li>

                <li className="nav-item position-relative menuTrigger">
                  <Link href="#" className="nav-link dropdown-toggle">
                    Services
                  </Link>
                  <div className="megaMenu" id="mainMenu2">
                    <ul className="menuMain ">
                      {allpage.map((item,i) => {
                        return (
                          <li key={i}>
                            <Link href={`/${item.slug}`} className="text-capitalize">{item.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Samples
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="/review">
                    Reviews
                  </Link>
                </li>
                <li className="nav-item ms-4 btnMenu">
                  <Link
                    className="nav-link btn text-white px-4 btn-primary"
                    href="/order-now"
                  >
                    Write My CV?
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
