import Title from "./components/Heading/Title";
import Landing from "./components/Hero/Landing";
import ShowCase from "./components/Showcase/ShowCase";
import SoftwareComp from "./components/Software/SoftwareComp";
import Ecod from "./components/Ecod/Ecod";
import SwiperComp from "./components/Swiper/SwiperComp";
import SwiperHero from "./components/Swiper/SwiperHero";
import MainHero from "./components/MainHero/Hero";

export default function Home() {
  return (
    <main className="container ">
      {/* <Hero/> */}
      <SwiperHero />
      <MainHero />
      <Landing />
      <Ecod />
      {/* <ShowCase /> */}
      <Title title="Retail Softwares" />
      <SoftwareComp
        src1="/Retail/Retail-1.svg"
        src2="/Retail/Retail-2.svg"
        src3="/Retail/Retail-3.svg"
        src4="/Retail/Retail-4.svg"
        src5="/Retail/Retail-5.svg"
        src6="/Retail/Retail-6.svg"
        src7="/Retail/Retail-7.svg"
        name1="Retail Software"
        name2="Pharmacy Software"
        name3="SuperMarket Software"
        name4="Garment Software"
        name5="POS Software"
        name6="Jwellery Software"
        name7="Restaurant Software"
        link1="/Retail"
        link2="/Retail/Pharmacy"
        link3="/Retail/SuperMarket"
        link4="/Retail/Garment"
        link5="/Retail/POS"
        link6="/Retail/Jewellery"
        link7="/Retail/Restaurant"


      />
      <Title title="Distributor Softwares" />
      <SoftwareComp
        src1="/Dist/Dist-1.svg"
        src2="/Dist/Dist-2.svg"
        src3="/Dist/Dist-3.svg"
        src4="/Dist/Dist-4.svg"
        src5="/Dist/Dist-5.svg"
        src6="/Retail/Retail-1.svg"
        src7="/Dist/Dist-7.svg"
        name1="Pharma Software"
        name2="FMCG Software"
        name3="WholeSale Dist Software"
        name4="Automobile Software"
        name5="Supply Chain Management"
        name6="Retail Software"
        name7="Accounting Software"
        link1="/Distribution/Pharma"
        link2="/Distribution/FMCG"
        link3="/Distribution/WholesaleDistribution"
        link4="/Distribution/AutoMobile"
        link5="/Distribution/SupplyChain"
        link6="/Retail/RetailSoftware"
        link7="/Distribution/Accounting"
      />
      <Title title="Manufacturing Softwares" />
      <SoftwareComp
        src1="/Manufacture/Manufact-1.svg"
        src2="/Manufacture/Manufact-2.svg"
        src3="/Manufacture/Manufact-3.jpg"
        src4="/Manufacture/Manufact-4.svg"
        src5="/Manufacture/Manufact-5.svg"
        src6="/Manufacture/Manufact-7.svg"
        src7="/Manufacture/Manufact-6.svg"
        name1="ERP Software Solution"
        name2="Pharmacy Manufact Software"
        name3="Automobile Indus Software"
        name4="Textile Software"
        name5="Industry Software"
        name6="Food Software"
        name7="Bevrages & Drinks Software"
        link1="/Manufacturing/ErpSolution"
        link2="/Manufacturing/PharmaManufacture"
        link3="/Manufacturing/AutomobileIndustry"
        link4="/Manufacturing/Texttile"
        link5="/Manufacturing/Indusrty"
        link6="/Manufacturing/Food"
        link7="/Manufacturing/Bevrages&Drinks"
      />
      <Title title="ERP Corporate Solutions" />
      <SoftwareComp
        src1="/ERP/ERP-1.svg"
        src2="/ERP/ERP-2.svg"
        src3="/Manufacture/Manufact-1.svg"
        src4="/ERP/ERP-4.svg"
        src5="/ERP/ERP-5.svg"
        src6="/ERP/ERP-6.svg"
        src7="/ERP/ERP-7.svg"
        name1="Retail Chain Management"
        name2="Supply Chain Management"
        name3="ERP Software Solution"
        name4="Management Softwares"
        name5="Pharma ERP Softwares"
        name6="Hotel ERP Softwares"
        name7="Inventory Management"
        link1="/ERP/RetailChain"
        link2="/ERP/SupplyChain"
        link3="/ERP/ERPSoft"
        link4="/ERP/ManagementSoftware"
        link5="/ERP/PharmaERP"
        link6="/ERP/HotelERP"
        link7="/ERP/InventoryManagement"
      />
      <Title title="Other Solutions" />
      <SoftwareComp
        src1="/Others/Others-1.svg"
        src2="/Others/Others-2.svg"
        src3="/Others/Others-3.svg"
        src4="/Others/Others-4.svg"
        src5="/Others/Others-5.svg"
        src6="/Others/Others-6.svg"
        src7="/Others/Others-7.svg"
        name1="ECOD Secure"
        name2="Payroll Software"
        name3="Billing Software"
        name4="GST Softwares"
        name5="Invoice Softwares"
        name6="Web-App Softwares"
        name7="Ecommerce App Softwares"
        link1="/Others/ECOD"
        link2="/Others/Payroll"
        link3="/Others/Billing"
        link4="/Others/GST"
        link5="/Others/Invoice"
        link6="/Others/WebApp"
        link7="/Others/E_AppSoftwares"
      />

      <SwiperComp />
    </main>
  );
}
