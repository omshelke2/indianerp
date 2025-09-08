import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { POSFeaturesData }from "@/app/components/FeaturesGlance/featuresData";

const POSFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={POSFeaturesData[0].icon}
            title={POSFeaturesData[0].title}
            description={POSFeaturesData[0].description}

          />
          <FeatureItem
            icon={POSFeaturesData[1].icon}
            title={POSFeaturesData[1].title}
            description={POSFeaturesData[1].description}

          />
          <FeatureItem
            icon={POSFeaturesData[2].icon}
            title={POSFeaturesData[2].title}
            description={POSFeaturesData[2].description}

          />
          <FeatureItem
            icon={POSFeaturesData[3].icon}
            title={POSFeaturesData[3].title}
            description={POSFeaturesData[3].description}

          />
          <FeatureItem
            icon={POSFeaturesData[4].icon}
            title={POSFeaturesData[4].title}
            description={POSFeaturesData[4].description}

          />
          <FeatureItem
            icon={POSFeaturesData[5].icon}
            title={POSFeaturesData[5].title}
            description={POSFeaturesData[5].description}

          />
          <FeatureItem
            icon={POSFeaturesData[6].icon}
            title={POSFeaturesData[6].title}
            description={POSFeaturesData[6].description}

          />
          <FeatureItem
            icon={POSFeaturesData[7].icon}
            title={POSFeaturesData[7].title}
            description={POSFeaturesData[7].description}

          />
          {/* <FeatureItem
            icon={POSFeaturesData[8].icon}
            title={POSFeaturesData[8].title}
            description={POSFeaturesData[8].description}

          /> */}
          <FeatureItem
            icon={POSFeaturesData[9].icon}
            title={POSFeaturesData[9].title}
            description={POSFeaturesData[9].description}

          />
          <FeatureItem
            icon={POSFeaturesData[10].icon}
            title={POSFeaturesData[10].title}
            description={POSFeaturesData[10].description}

          />
          <FeatureItem
            icon={POSFeaturesData[11].icon}
            title={POSFeaturesData[11].title}
            description={POSFeaturesData[11].description}

          />
         
        
        </div>
      </div>
    </section>
  );
};

export default POSFeatures;
