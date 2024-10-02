import FeatureCards from "../ProductsFeatures/FeatureCards"

import { FaBarcode } from "react-icons/fa";


import { Icon } from '@iconify/react';

const ProductsFeatures = () => {

    const features = [
        {
            title: "100% Free E-invoicing",
            description:
                "Get 100% Free E-invoicing and easily generate error-free e- invoices without going to the portal with zero downtime using IndianERP.",
            icon: <Icon icon="fxemoji:document" />,
        },
        {
            title: "Payment & Reconciliation",
            description:
                "Simplify your payments & bill-by-bill reconciliation using Indian Pay at 0% service charges & 2% cashback for retailers.",
            icon: <Icon icon="mdi:rupee"  style={{color: "#bdd504"}} />,
        },
        {
            title: "GST Billing & Return Filing",
            description:
                "Create GST invoices, multiple e-way bills & directly upload files in Excel, JSON or CSV format in GST portal and file GST returns.",
            icon: <Icon icon="streamline:bag-rupee-solid"  style={{color: "#bdd507"}} />,
        },
        {
            title: "Barcode Management",
            description:
                "Helps encode & centralize all products information in a barcode to quickly & accurately track products during billing.",
            icon: <FaBarcode />,
        },
        {
            title: "Online Import Purchase",
            description:
                "No need to feed manual Purchase. Import bill from any Excel or CSV format to save time with 100% accuracy.",
            icon: <Icon icon="flat-color-icons:shipped" />,
        },
        {
            title: "Bills, O/s on Whatsapp",
            description:
                "Send Invoices, Outstanding, Stock and Sale Analysis etc. & various reports to customers directly on WhatsApp through Software.",
            icon: <Icon icon="logos:whatsapp-icon" />
            ,
        },
        {
            title: "Direct Calling",
            description:
                "To simplify the order taking process, connect your mobile with system by scanning QR code & place calls directly to customer for receiving orders.",
            icon: <Icon icon="mage:phone-call-fill"  style={{color: "#451cd9"}} />
            ,
        },
        {
            title: "My Shop QR Code",
            description:
                "List & upload products, schemes, offers in QR code. Print & paste outside shop/ counter where customers can directly scan & place orders.",
            icon: <Icon icon="marketeq:qr-code-scan-2"  />
            ,
        },
        {
            title: "eRetail Web Application",
            description:
                "Directly place online orders to distributors & check status of all orders, View nearby distributors, schemes inside Indian ERP.",
            icon: <Icon icon="fxemoji:oldpersonalcomputer" />
            ,
        },
        {
            title: "Inventory Management",
            description:
                "Manage Focused, Dump and Near-Expiry stock level, set reorder points to replenish stock with Push Sale features.",
            icon: <Icon icon="icon-park-outline:chart-histogram"  style={{color: "#d91c1c"}} />
            ,
        },
        {
            title: "Live Credit Limit",
            description:
                "Set & Track the credit limit for customers to save huge losses. Get live notification during billing whenever limit is reached.",
            icon: <Icon icon="noto:credit-card" />
            ,
        },
        {
            title: "Purchase & Sale Claim",
            description:
                "Get timely reminders & keep a track of benefits of claim against the purchases which is being done with Claims & Statements feature.",
            icon: <Icon icon="mdi:sale"  style={{color: "#deec18"}} />
            ,
        },
    ];

    return (
        <section className="py-12 m:py-12 lg:py-16  ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
                    <h2 className="text-[42px] font-bold text-center mb-3">
                        Find Better Solutions Build Better Products
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
