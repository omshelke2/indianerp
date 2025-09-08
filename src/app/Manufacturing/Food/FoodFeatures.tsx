import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import {  FoodFeaturesData } from "@/app/components/FeaturesGlance/featuresData";

const FoodFeatures= () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ FoodFeaturesData[0].icon}
            title={ FoodFeaturesData[0].title}
            description={ FoodFeaturesData[0].description}

          />
          <FeatureItem
            icon={ FoodFeaturesData[1].icon}
            title={ FoodFeaturesData[1].title}
            description={ FoodFeaturesData[1].description}

          />
          <FeatureItem
            icon={ FoodFeaturesData[2].icon}
            title={ FoodFeaturesData[2].title}
            description={ FoodFeaturesData[2].description}

          />
          <FeatureItem
            icon={ FoodFeaturesData[3].icon}
            title={ FoodFeaturesData[3].title}
            description={ FoodFeaturesData[3].description}

          />
          <FeatureItem
            icon={ FoodFeaturesData[4].icon}
            title={ FoodFeaturesData[4].title}
            description={ FoodFeaturesData[4].description}

          />
          <FeatureItem
            icon={ FoodFeaturesData[5].icon}
            title={ FoodFeaturesData[5].title}
            description={ FoodFeaturesData[5].description}

          />
          <FeatureItem
            icon={ FoodFeaturesData[6].icon}
            title={ FoodFeaturesData[6].title}
            description={ FoodFeaturesData[6].description}

          />
          <FeatureItem
            icon={ FoodFeaturesData[7].icon}
            title={ FoodFeaturesData[7].title}
            description={ FoodFeaturesData[7].description}

          />
          <FeatureItem
            icon={ FoodFeaturesData[8].icon}
            title={ FoodFeaturesData[8].title}
            description={ FoodFeaturesData[8].description}

          />
           <FeatureItem
            icon={ FoodFeaturesData[9].icon}
            title={ FoodFeaturesData[9].title}
            description={ FoodFeaturesData[9].description}

          />
           <FeatureItem
            icon={ FoodFeaturesData[10].icon}
            title={ FoodFeaturesData[10].title}
            description={ FoodFeaturesData[10].description}

          />
        </div>
      </div>
    </section>
  );
};

export default FoodFeatures;
