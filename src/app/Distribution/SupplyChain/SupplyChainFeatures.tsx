import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { SupplyChainFeaturesData } from "@/app/components/FeaturesGlance/featuresData";

const SupplyChainFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={SupplyChainFeaturesData[0].icon}
            title={SupplyChainFeaturesData[0].title}
            description={SupplyChainFeaturesData[0].description}
          />
          <FeatureItem
            icon={SupplyChainFeaturesData[1].icon}
            title={SupplyChainFeaturesData[1].title}
            description={SupplyChainFeaturesData[1].description}

          />
          <FeatureItem
            icon={SupplyChainFeaturesData[2].icon}
            title={SupplyChainFeaturesData[2].title}
            description={SupplyChainFeaturesData[2].description}

          />
          <FeatureItem
            icon={SupplyChainFeaturesData[3].icon}
            title={SupplyChainFeaturesData[3].title}
            description={SupplyChainFeaturesData[3].description}

          />
          <FeatureItem
            icon={SupplyChainFeaturesData[4].icon}
            title={SupplyChainFeaturesData[4].title}
            description={SupplyChainFeaturesData[4].description}

          />
          <FeatureItem
            icon={SupplyChainFeaturesData[5].icon}
            title={SupplyChainFeaturesData[5].title}
            description={SupplyChainFeaturesData[5].description}

          />
          <FeatureItem
            icon={SupplyChainFeaturesData[6].icon}
            title={SupplyChainFeaturesData[6].title}
            description={SupplyChainFeaturesData[6].description}

          />
          <FeatureItem
            icon={SupplyChainFeaturesData[7].icon}
            title={SupplyChainFeaturesData[7].title}
            description={SupplyChainFeaturesData[7].description}

          />
          <FeatureItem
            icon={SupplyChainFeaturesData[8].icon}
            title={SupplyChainFeaturesData[8].title}
            description={SupplyChainFeaturesData[8].description}

          />
          <FeatureItem
            icon={SupplyChainFeaturesData[9].icon}
            title={SupplyChainFeaturesData[9].title}
            description={SupplyChainFeaturesData[9].description}

          />
          <FeatureItem
            icon={SupplyChainFeaturesData[10].icon}
            title={SupplyChainFeaturesData[10].title}
            description={SupplyChainFeaturesData[10].description}

          />
          <FeatureItem
            icon={SupplyChainFeaturesData[11].icon}
            title={SupplyChainFeaturesData[11].title}
            description={SupplyChainFeaturesData[11].description}

          />
          <FeatureItem
            icon={SupplyChainFeaturesData[12].icon}
            title={SupplyChainFeaturesData[12].title}
            description={SupplyChainFeaturesData[12].description}

          />
        </div>
      </div>
    </section>
  );
};

export default SupplyChainFeatures;
