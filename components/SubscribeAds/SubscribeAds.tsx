export const SubscribeAds = () => {
  return (
    <div className="row">
      <div className="col-md-7">
        {/* <h4 className="fw-bold h5 mb-4">Subscribe Now!</h4> */}
        <h3 className="fw-bold h4 text-capitalize">
          Are you struggling to{" "}
          <span className="text-primary">
            {" "}
            create a compelling CV that showcases{" "}
          </span>{" "}
          your skills and experience?{" "}
        </h3>
        <p className="mb-0 m-none">
          Look no further than Cvwritingservices.ie - the premier provider of CV
          writing services in Ireland. Our team of expert writers can help you
          create a professional and targeted CV that highlights your strengths
          and meets industry standards.
        </p>
      </div>
      <div className="col-md-5">
        <div className="d-flex m-left align-items-center justify-content-center">
          <form action="">
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter Your Email"
            />
            <div className="form-check  mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label fs-12">
                I Have Read And Agree To The Privacy Policy
              </label>
            </div>

            <input
              type="submit"
              className="btn btn-primary"
              value="Subscribe Now"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
