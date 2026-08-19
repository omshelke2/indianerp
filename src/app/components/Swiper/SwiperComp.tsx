"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import SwiperSlideComp from "./SwiperSlideComp";

const SwiperComp = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <section className="py-5">
      <div className="mb-10">
        <Swiper
          pagination={pagination}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <SwiperSlideComp
              imgLink={"/Swiper/Banking.svg"}
              title={"Online Banking With MARG ERP with ICICI Bank"}
              desc={
                "Manage direct vendor payments, instant NEFT/RTGS transfers, and automated bank reconciliation with ICICI Bank and 140+ supported banks directly inside your ERP."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComp
              imgLink={"/Swiper/pharma.svg"}
              title={"Comprehensive Solution For Pharmacist"}
              desc={
                "Complete pharmacy software featuring salt composition & substitute lookup, batch and expiry management, digital prescription handling, and effortless GST billing."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComp
              imgLink={"/Swiper/invoice.svg"}
              title={"100% Free Invoicing Software For Your Business"}
              desc={
                "Generate 100% accurate, error-free GST e-invoices directly from the software with zero portal downtime, automated e-way billing, and real-time reconciliation."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComp
              imgLink={"/Swiper/sales.svg"}
              title={"Easy & Simple Way To Get Your Sales Data"}
              desc={
                "Effortlessly analyze your business data via multi-dimensional reports by directly connecting your server to the distributor's system to eliminate third-party dependency."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComp
              imgLink={"/Swiper/advertise.svg"}
              title={"Advertise To Indias Top Pharma & FMCG Retailers"}
              desc={
                "Advertise to India's top 2.5 Lakh+ Retailers & 1 Lakh+ Distributors. Get unlimited reach to 12,000+ Pincodes with high-visibility placements on the ERP software home screen."
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperComp;
