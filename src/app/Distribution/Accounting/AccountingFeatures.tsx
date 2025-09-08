import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { AccountingFeaturesData } from "@/app/components/FeaturesGlance/featuresData";

const AccountingFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={AccountingFeaturesData[0].icon}
            title={AccountingFeaturesData[0].title}
            description={AccountingFeaturesData[0].description}

          />
          <FeatureItem
            icon={AccountingFeaturesData[1].icon}
            title={AccountingFeaturesData[1].title}
            description={AccountingFeaturesData[1].description}

          />
          <FeatureItem
            icon={AccountingFeaturesData[2].icon}
            title={AccountingFeaturesData[2].title}
            description={AccountingFeaturesData[2].description}

          />
          <FeatureItem
            icon={AccountingFeaturesData[3].icon}
            title={AccountingFeaturesData[3].title}
            description={AccountingFeaturesData[3].description}

          />
          <FeatureItem
            icon={AccountingFeaturesData[4].icon}
            title={AccountingFeaturesData[4].title}
            description={AccountingFeaturesData[4].description}

          />
          <FeatureItem
            icon={AccountingFeaturesData[5].icon}
            title={AccountingFeaturesData[5].title}
            description={AccountingFeaturesData[5].description}

          />
          <FeatureItem
            icon={AccountingFeaturesData[6].icon}
            title={AccountingFeaturesData[6].title}
            description={AccountingFeaturesData[6].description}

          />
          <FeatureItem
            icon={AccountingFeaturesData[7].icon}
            title={AccountingFeaturesData[7].title}
            description={AccountingFeaturesData[7].description}

          />
          <FeatureItem
            icon={AccountingFeaturesData[8].icon}
            title={AccountingFeaturesData[8].title}
            description={AccountingFeaturesData[8].description}

          />
        </div>
      </div>
    </section>
  );
};

export default AccountingFeatures;
