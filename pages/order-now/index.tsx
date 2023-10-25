import AssignmentForm from "@/components/Form/AssignmentForm";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function OrderNow() {
  return (
    <>
      <section className="py-5 footerBg">
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center my-4">
            <h1 className="text-center fw-bold text-white">Hire Writers</h1>
          </div>
        </div>
      </section>
      <div className="py-3">
        <div className="container">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Order Now
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <section className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="bg-primary p-4">
                <AssignmentForm />
              </div>
            </div>
            <div className="col-md-5">
              <div className="d-flex border mb-5 rounded text-center flex-column p-4 bg-gra align-items-center justify-content-center">
                <div className="d-flex mb-2 align-items-center justify-content-center mainEmail">
                  <FontAwesomeIcon icon={faEnvelope} width={26} height={26} />
                </div>
                <h5 className="fw-bold">Email Here</h5>
                <p>info@cvwritingservices.ie</p>
              </div>
              {/* <div className="d-flex border mb-5 rounded text-center flex-column p-4 bg-gra2 align-items-center justify-content-center">
                <div className="d-flex mb-2 align-items-center justify-content-center mainPhone">
                  <FontAwesomeIcon icon={faPhone} width={26} height={26} />
                </div>
                <h5 className="fw-bold">Let`&apos;s Talk</h5>
                <p>+91 123 456 7890</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
