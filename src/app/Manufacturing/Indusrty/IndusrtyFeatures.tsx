import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import {  IndusrtyFeaturesData } from "@/app/components/FeaturesGlance/featuresData";

const IndusrtyFeatures= () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ IndusrtyFeaturesData[0].icon}
            title={ IndusrtyFeaturesData[0].title}
            description={ IndusrtyFeaturesData[0].description}

          />
          <FeatureItem
            icon={ IndusrtyFeaturesData[1].icon}
            title={ IndusrtyFeaturesData[1].title}
            description={ IndusrtyFeaturesData[1].description}

          />
          <FeatureItem
            icon={ IndusrtyFeaturesData[2].icon}
            title={ IndusrtyFeaturesData[2].title}
            description={ IndusrtyFeaturesData[2].description}

          />
          <FeatureItem
            icon={ IndusrtyFeaturesData[3].icon}
            title={ IndusrtyFeaturesData[3].title}
            description={ IndusrtyFeaturesData[3].description}

          />
          <FeatureItem
            icon={ IndusrtyFeaturesData[4].icon}
            title={ IndusrtyFeaturesData[4].title}
            description={ IndusrtyFeaturesData[4].description}

          />
          <FeatureItem
            icon={ IndusrtyFeaturesData[5].icon}
            title={ IndusrtyFeaturesData[5].title}
            description={ IndusrtyFeaturesData[5].description}

          />
          <FeatureItem
            icon={ IndusrtyFeaturesData[6].icon}
            title={ IndusrtyFeaturesData[6].title}
            description={ IndusrtyFeaturesData[6].description}

          />
          <FeatureItem
            icon={ IndusrtyFeaturesData[7].icon}
            title={ IndusrtyFeaturesData[7].title}
            description={ IndusrtyFeaturesData[7].description}

          />
          <FeatureItem
            icon={ IndusrtyFeaturesData[8].icon}
            title={ IndusrtyFeaturesData[8].title}
            description={ IndusrtyFeaturesData[8].description}

          />
           <FeatureItem
            icon={ IndusrtyFeaturesData[9].icon}
            title={ IndusrtyFeaturesData[9].title}
            description={ IndusrtyFeaturesData[9].description}

          />
           <FeatureItem
            icon={ IndusrtyFeaturesData[10].icon}
            title={ IndusrtyFeaturesData[10].title}
            description={ IndusrtyFeaturesData[10].description}

          />
          <FeatureItem
            icon={ IndusrtyFeaturesData[11].icon}
            title={ IndusrtyFeaturesData[11].title}
            description={ IndusrtyFeaturesData[11].description}

          />
        </div>
      </div>
    </section>
  );
};

export default IndusrtyFeatures;
