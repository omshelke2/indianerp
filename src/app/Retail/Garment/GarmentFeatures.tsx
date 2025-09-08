import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { GarmentFeaturesData} from "@/app/components/FeaturesGlance/featuresData";

const GarmentFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={GarmentFeaturesData[0].icon}
            title={GarmentFeaturesData[0].title}
            description={GarmentFeaturesData[0].description}

          />
          <FeatureItem
            icon={GarmentFeaturesData[1].icon}
            title={GarmentFeaturesData[1].title}
            description={GarmentFeaturesData[1].description}

          />
          <FeatureItem
            icon={GarmentFeaturesData[2].icon}
            title={GarmentFeaturesData[2].title}
            description={GarmentFeaturesData[2].description}
          />
          <FeatureItem
            icon={GarmentFeaturesData[3].icon}
            title={GarmentFeaturesData[3].title}
            description={GarmentFeaturesData[3].description}
          />
          <FeatureItem
            icon={GarmentFeaturesData[4].icon}
            title={GarmentFeaturesData[4].title}
            description={GarmentFeaturesData[4].description}

          />
          <FeatureItem
            icon={GarmentFeaturesData[5].icon}
            title={GarmentFeaturesData[5].title}
            description={GarmentFeaturesData[5].description}
          />
          <FeatureItem
            icon={GarmentFeaturesData[6].icon}
            title={GarmentFeaturesData[6].title}
            description={GarmentFeaturesData[6].description}

          />
          <FeatureItem
            icon={GarmentFeaturesData[7].icon}
            title={GarmentFeaturesData[7].title}
            description={GarmentFeaturesData[7].description}
          />
          <FeatureItem
            icon={GarmentFeaturesData[8].icon}
            title={GarmentFeaturesData[8].title}
            description={GarmentFeaturesData[8].description}

          />
          <FeatureItem
            icon={GarmentFeaturesData[9].icon}
            title={GarmentFeaturesData[9].title}
            description={GarmentFeaturesData[9].description}

          />
          <FeatureItem
            icon={GarmentFeaturesData[10].icon}
            title={GarmentFeaturesData[10].title}
            description={GarmentFeaturesData[10].description}

          />
          <FeatureItem
            icon={GarmentFeaturesData[11].icon}
            title={GarmentFeaturesData[11].title}
            description={GarmentFeaturesData[11].description}

          />
        
        </div>
      </div>
    </section>
  );
};

export default GarmentFeatures;
