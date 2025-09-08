import FeatureCards from "@/app/components/ProductsFeatures/FeatureCards"

import { FaBarcode } from "react-icons/fa";


import { Icon } from '@iconify/react';

const ProductsFeatures = () => {

    const features = [
        {
            title: "Production Planning",
            description:
                "Material Requirement Planning, Master Production Scheduling, Production Process Definition, Demand Management, Batch Manufacturing Practice, Raw Material Formulation, Packing Material Formulation",
            icon: <Icon icon="logos:producthunt" />,
        },
        {
            title: "Quality Control",
            description:
                "Raw Material Testing, Bulk/ Finish Goods Testing, Release Order, Transfer Slip, Tag Printing, Rejection Order, Testing Req. Slip",
            icon: <Icon icon="ic:outline-control-camera"  style={{color: "#ee2f2f"}} />,
        },
        {
            title: "Inventory Management",
            description:
                "Inventory Planning, Warehouse Management, Bin Management, Material Inward/ Outward, Physical Stock Verification, Multi-Unit Of Material, Stock Costing and Valuation",
            icon:  <Icon icon="fa6-solid:warehouse"  style={{color: "#9370db"}} />,
        },
        {
            title: "Material Management",
            description:
                "Raw Material Indent, Packing Material Indent, Raw Material Issue, Packing Material Issue, Return Raw Material, Return Packing Material, Quality Assurance",
            icon: <Icon icon="lets-icons:materials-light"  style={{color: "#ba55d3"}} />,
        },
        {
            title: "Finance and Accounting",
            description:
                "GST, Eway Bill generation, General Ledger, Accounts Payable, Receivables, Trial Balance, Cash Flow, Debit Note/ Credit Note/ Cost, Automatic TDS & TCS Calculation, PDC & Outstanding, Audit Trails and Other MIS",
            icon: <Icon icon="material-symbols:finance"  style={{color: "#da70d6"}} />,
        },
        {
            title: "Sales & Procurement",
            description:
                "Supplier/ Vendor Management, Product Delivery & tracking, Quote to Receipt Management, Integration with Planning, Customer Management, Sales Management, Reduce Forecasting Errors",
            icon: <Icon icon="emojione:dress" />
            ,
        },
        {
            title: "Purchase Management",
            description:
                "Supplier Evaluation, Request for Quote, Quote Comparison, Order Calling, Purchase Budget and Approval, Integrated with Planning Function, Supplier Order Management",
            icon: <Icon icon="f7:purchased-circle-fill"  style={{color: "#00bfff"}} />
            ,
        },
        {
            title: "Reporting",
            description:
                "Production Register, Consolidate Register, Yield Register, Packing Not Issue, Sample Register-Bulk/finish/Raw, Control Sample Register, Transfer register",
            icon: <Icon icon="mdi:file-report"  style={{color: "#ddb345"}} />
            ,
        },
    ];

    return (
        <section className="py-12 m:py-12 lg:py-16  ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
                    <h2 className="text-[42px] font-bold text-center mb-3">
                     Best ERP Process Manufacturing Software
                    </h2>
                </div>
                <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
                    {features.map((feature, index) => (
                        <FeatureCards key={index} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};



export default ProductsFeatures;
