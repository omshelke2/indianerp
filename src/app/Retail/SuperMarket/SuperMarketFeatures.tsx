import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import {SuperMarketFeaturesData }from "@/app/components/FeaturesGlance/featuresData";

const SuperMarketFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={SuperMarketFeaturesData[0].icon}
            title={SuperMarketFeaturesData[0].title}
            description={SuperMarketFeaturesData[0].description}
          />
          <FeatureItem
            icon={SuperMarketFeaturesData[1].icon}
            title={SuperMarketFeaturesData[1].title}
            description={SuperMarketFeaturesData[1].description}

          />
          <FeatureItem
            icon={SuperMarketFeaturesData[2].icon}
            title={SuperMarketFeaturesData[2].title}
            description={SuperMarketFeaturesData[2].description}

          />
          <FeatureItem
            icon={SuperMarketFeaturesData[3].icon}
            title={SuperMarketFeaturesData[3].title}
            description={SuperMarketFeaturesData[3].description}

          />
          <FeatureItem
            icon={SuperMarketFeaturesData[4].icon}
            title={SuperMarketFeaturesData[4].title}
            description={SuperMarketFeaturesData[4].description}

          />
          <FeatureItem
            icon={SuperMarketFeaturesData[5].icon}
            title={SuperMarketFeaturesData[5].title}
            description={SuperMarketFeaturesData[5].description}

          />
          <FeatureItem
            icon={SuperMarketFeaturesData[6].icon}
            title={SuperMarketFeaturesData[6].title}
            description={SuperMarketFeaturesData[6].description}

          />
          <FeatureItem
            icon={SuperMarketFeaturesData[7].icon}
            title={SuperMarketFeaturesData[7].title}
            description={SuperMarketFeaturesData[7].description}

          />
          <FeatureItem
            icon={SuperMarketFeaturesData[8].icon}
            title={SuperMarketFeaturesData[8].title}
            description={SuperMarketFeaturesData[8].description}

          />
          <FeatureItem
            icon={SuperMarketFeaturesData[9].icon}
            title={SuperMarketFeaturesData[9].title}
            description={SuperMarketFeaturesData[9].description}

          />
          <FeatureItem
            icon={SuperMarketFeaturesData[10].icon}
            title={SuperMarketFeaturesData[10].title}
            description={SuperMarketFeaturesData[10].description}

          />
          {/* <FeatureItem
            icon={SuperMarketFeaturesData[11].icon}
            title={SuperMarketFeaturesData[11].title}
            description={SuperMarketFeaturesData[11].description}

          /> */}
          <FeatureItem
            icon={SuperMarketFeaturesData[12].icon}
            title={SuperMarketFeaturesData[12].title}
            description={SuperMarketFeaturesData[12].description}

          />
          <FeatureItem
            icon={SuperMarketFeaturesData[13].icon}
            title={SuperMarketFeaturesData[13].title}
            description={SuperMarketFeaturesData[13].description}

          />
        
        </div>
      </div>
    </section>
  );
};

export default SuperMarketFeatures;
