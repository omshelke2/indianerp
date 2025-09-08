import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { RestaurantFeaturesData } from "@/app/components/FeaturesGlance/featuresData";

const RestaurantFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={RestaurantFeaturesData[0].icon}
            title={RestaurantFeaturesData[0].title}
            description={RestaurantFeaturesData[0].description}

          />
          <FeatureItem
            icon={RestaurantFeaturesData[1].icon}
            title={RestaurantFeaturesData[1].title}
            description={RestaurantFeaturesData[1].description}

          />
          <FeatureItem
            icon={RestaurantFeaturesData[2].icon}
            title={RestaurantFeaturesData[2].title}
            description={RestaurantFeaturesData[2].description}

          />
          <FeatureItem
            icon={RestaurantFeaturesData[3].icon}
            title={RestaurantFeaturesData[3].title}
            description={RestaurantFeaturesData[3].description}

          />
          <FeatureItem
            icon={RestaurantFeaturesData[4].icon}
            title={RestaurantFeaturesData[4].title}
            description={RestaurantFeaturesData[4].description}

          />
          <FeatureItem
            icon={RestaurantFeaturesData[5].icon}
            title={RestaurantFeaturesData[5].title}
            description={RestaurantFeaturesData[5].description}

          />
          <FeatureItem
            icon={RestaurantFeaturesData[6].icon}
            title={RestaurantFeaturesData[6].title}
            description={RestaurantFeaturesData[6].description}

          />
          <FeatureItem
            icon={RestaurantFeaturesData[7].icon}
            title={RestaurantFeaturesData[7].title}
            description={RestaurantFeaturesData[7].description}
            
          />
          <FeatureItem
            icon={RestaurantFeaturesData[8].icon}
            title={RestaurantFeaturesData[8].title}
            description={RestaurantFeaturesData[8].description}

          />
          <FeatureItem
            icon={RestaurantFeaturesData[9].icon}
            title={RestaurantFeaturesData[9].title}
            description={RestaurantFeaturesData[9].description}

          />
          <FeatureItem
            icon={RestaurantFeaturesData[10].icon}
            title={RestaurantFeaturesData[10].title}
            description={RestaurantFeaturesData[10].description}

          />
          <FeatureItem
            icon={RestaurantFeaturesData[11].icon}
            title={RestaurantFeaturesData[11].title}
            description={RestaurantFeaturesData[11].description}

          />
        </div>
      </div>
    </section>
  );
};

export default RestaurantFeatures;
