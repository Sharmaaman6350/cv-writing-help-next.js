import Link from "next/link";
import Image from "next/image";
import PageHead from "@/PageHead";

import AssignmentForm from "@/components/Form/AssignmentForm";
import gifImage from "../public/images/best-cv-writing-service.gif";
import { offers__data } from "@/data/offers";
import { OfferCard } from "@/components/OfferCard/OfferCard";
import { services__data } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard/ServiceCard";
import { useState } from "react";
import { expert__data } from "@/data/expert";
import { ExpertCard } from "@/components/ExpertCard/ExpertCard";
import FAQImg from "../public/images/smiling-businessman-raising-hand-conference.webp";
import { FAQs } from "@/components/FAQs/FAQs";
import { faq__data } from "@/data/faqdata";
import { SubscribeAds } from "@/components/SubscribeAds/SubscribeAds";
import { Review } from "@/components/Review/Review";
export default function Home() {
  return (
    <>
      <PageHead
        title="CV Writing Help"
        description="Get online cv/resume writing services  from team of 500+  experts. We offer assistance with all types  of resume writing at very cheap cost."
      />
      <section className="py-5 bg-home">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-justify">
              <div>
                <h1 className="fw-bold mainJs ">
                  <span className=" bg-dark text-white px-2 py-1 ">
                    {" "}
                    Best CV Writing Service</span>{" "}
                  Ireland 
                </h1>
                <p className="m-none pt-2">
                  Welcome to CV Writing Services, the <b> premier CV writing agency  in
                  Ireland </b>. Our team of highly skilled CV writers understands the
                  importance of creating a CV that effectively markets your
                  personal brand and highlights your unique value proposition.{" "}
                </p>
                <p className="m-none">
                  We utilize the latest <b> ATS (Applicant Tracking System) </b> 
                   optimization techniques to ensure that your CV gets past the
                  initial screening process and into the hands of hiring
                  managers. With our expertise in crafting executive summaries,
                  core competencies, and career objectives, we can help you
                  position yourself as a top candidate in your field.{" "}
                </p>
                <p className="m-none">
                  We help people who are looking for jobs in Ireland, no matter
                  which big city they are in - whether it&apos;s Dublin, Cork,
                  Galway, Limerick, Waterford, or Belfast. Let us help you with
                  a CV writing service in Ireland and help you showcase your
                  skills and experience with a tailored CV that meets the needs
                  of your target employers.
                </p>
                <Link
                  href="/order-now"
                  className="btn text-dark fw-bold px-4 btn-warning m-none"
                >
                  Write My CV
                </Link>
              </div>
            </div>
            <div className="col-lg-5 homeForm">
              <AssignmentForm />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <Image
                src={gifImage}
                className="img-fluid"
                alt=""
                width={540}
                height={200}
              />
            </div>
            <div className="col-lg-6 text-justify">
              <h2 className="text-primary h3 fw-bold">
                Stand Out in a Competitive Job Market with Our Professional CV
                Writers
              </h2>
              <p>
                In today&apos;s competitive job market, it&apos;s essential to
                have a standout CV that catches the attention of recruiters and
                hiring managers. Our team of professional CV
                writers has the expertise and experience to help you create a CV
                that sets you apart from the competition. We understand what
                recruiters are looking for and can help you highlight your
                skills and achievements in a way that makes you stand out.{" "}
              </p>
              <p>
                No matter where you are in your career - whether you just
                graduated, are in the middle of your career, or have reached a
                high-level position - we can provide services that are tailored
                to your specific needs. Our goal is to help you achieve your
                career objectives and move forward in your professional life.
                Let us help you land your dream job with a professionally
                written CV that showcases your potential and value as a
                candidate. We pride ourselves on providing the best resume
                writing services in Ireland.
              </p>
              <Link
                href="/order-now"
                className="btn text-dark fw-bold px-4 btn-warning"
              >
                Write My Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-sept">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="text-primary h3 fw-bold">
              Factors of Our CV Writing Help in Ireland: Why Choose Us?
              </h2>

              <p>
              At Cv Writing Services Ireland, we pride ourselves on offering top-notch CV writing services to professionals in Ireland. Our team of experienced CV writers is dedicated to helping you stand out in the competitive job market. Here are key reasons to choose our technical cv writing service for your CV writing needs:

              </p>
            </div>

            {offers__data?.map((item) => {
              return <OfferCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-5">
                <h2 className="text-primary h3 fw-bold mb-4">
                Enjoy Numerous CV-Related Services with Our Irish CV Writing Service
                </h2>
                <p>
                At Cvwritingservices.ie, we provide a range of CV services to help you achieve your career aspirations in Ireland. Our affordable CV writing help is designed to help you stand out from the competition and land your dream job.
                </p>
                <p>
                We also offer a Social Scrub Privacy Report that helps you identify any sensitive or inappropriate content that may be available online, and recommends steps to protect your online reputation. This report is essential for job seekers who want to make sure their online presence is not hindering their job prospects. Let&apos;s take a closer look at our various services offered by our leading CV agency in Ireland.
                </p>
              </div>

              <ServiceCard data={services__data} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-sept">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="text-primary h3 fw-bold mb-4">
                Meet Our Team of Ireland&apos;s Premier CV Writers
              </h2>
              <p>
              Our team at Cvwritingservices.ie consists of Ireland&apos;s premier CV writers. With their expertise in the local job market and attention to detail, they know how to create CVs that stand out. When you choose our Certified CV writers online in Ireland, you can trust that your CV will be crafted by a top-notch professional who will work with you to meet your specific needs. Get started on landing your dream job in Ireland with our premier CV writing team.
              </p>
            </div>

            <ExpertCard />
          </div>
        </div>
      </section>

      <section className="py-5 stepSection">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="text-primary h3 fw-bold mb-4">
                Follow Three Easy Steps to Hire CV Writing Experts in Ireland
              </h2>
              <p>
              CV Writing Services Ireland is an online platform offering professional CV-making services in Ireland. With our team of experienced CV writers, they can help you create a compelling CV that highlights your skills, achievements, and experiences to potential employers. If you&apos;re interested in hiring CV-making services, follow these three easy steps with CV Writing Service Ireland:
              </p>
            </div>
            <div className="col-md-4 mt-4">
              <div className="d-flex h-100 position-relative pt-5 bg-primary sepTop text-center p-4 flex-column align-items-center ">
                <h4 className="text-center text-warning ">
                  Choose the Right Package
                </h4>
                <p className="text-white mb-0">
                Our cv maker ireland offers various packages to suit your needs, from basic CV help online to advanced services that include LinkedIn profile optimization, cover letter writing, and interview coaching. Choose the package that best fits your requirements and budget.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="d-flex h-100 position-relative pt-5 bg-primary sepTop2 text-center p-4 flex-column align-items-center ">
                <h4 className="text-center text-warning ">
                  {" "}
                  Provide Your Details
                </h4>
                <p className="text-white mb-0">
                Once you&apos;ve selected your package, provide your details to the CV writing experts at Cvwritingservices.ie. They will ask you for all the necessary information needed to create your CV, such as your work experience, qualifications, achievements, and any other relevant details.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="d-flex h-100 position-relative pt-5 bg-primary sepTop3 text-center p-4 flex-column align-items-center ">
                <h4 className="text-center text-warning ">Receive Your CV</h4>
                <p className="text-white mb-0">
                After providing your details, sit back and relax while Cvwritingservices.ie&apos;s team of experts create your CV. Once it&apos;s ready, they will send it to you for review. If there&apos;s anything that you&apos;d like to change or edit, just let us know and we&apos;ll make the necessary revisions for you. Finally, you&apos;ll receive your polished CV that showcases your skills and experience to potential employers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-sept">
        <div className="container">
          <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-7">
              <h2 className="text-primary h3 fw-bold mb-4">
              Write My CV For Me In Ireland 
              </h2>
              <p>
              If you are looking to get your CV professionally written, Cvwritingservices.ie is the perfect choice for you. With our team of experienced and field-oriented CV writers, we can help you craft a CV that highlights your skills, achievements, and experiences, and that effectively communicates your value to potential employers.
              </p>
              <p>
                If you are searching for &apos;write my CV for me&apos; in
                Ireland, we are the place to go. our CV writing services are
                designed to help you stand out from the crowd and increase your
                chances of getting hired.{" "}
              </p>
              <p>
                With our CV Ireland Services, you can rest assured that your CV
                will be written by a professional writer who understands the
                Irish job market and knows what employers are looking for. If
                you&apos;re a new graduate searching for your first job or an
                experienced professional wanting to advance your career,
                Cvwritingservices.ie can assist you in reaching your objectives.
              </p>
              <p>
                Don&apos;t waste any more time trying to write your curriculum
                vitae document yourself. Hire CV writers now and let their team
                of experts create a CV that will help you get noticed by
                potential employers. Contact Cvwritingservices.ie today to learn more
                about their CV writing services in Ireland.
              </p>
              <Link
                href="/order-now"
                className="btn text-dark fw-bold px-4 btn-warning"
              >
                Write My CV
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Review />
      <section className="py-5 bg-sept">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="text-primary h3 fw-bold mb-4">
                FAQ’s - Genuine CV Writing Agency in Ireland
              </h2>
            </div>
            <div className="col-md-8">
              <FAQs data={faq__data} />
            </div>
            <div className="col-md-4">
              <Image
                src={FAQImg}
                className="img-fluid"
                width={500}
                height={100}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-warning">
        <div className="container">
          <SubscribeAds />
        </div>
      </section>
    </>
  );
}
