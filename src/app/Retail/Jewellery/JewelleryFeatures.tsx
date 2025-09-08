import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import {  JewelleryFeaturesData }from "@/app/components/FeaturesGlance/featuresData";

const JewelleryFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ JewelleryFeaturesData[0].icon}
            title={ JewelleryFeaturesData[0].title}
            description={ JewelleryFeaturesData[0].description}

          />
          <FeatureItem
            icon={ JewelleryFeaturesData[1].icon}
            title={ JewelleryFeaturesData[1].title}
            description={ JewelleryFeaturesData[1].description}

          />
          <FeatureItem
            icon={ JewelleryFeaturesData[2].icon}
            title={ JewelleryFeaturesData[2].title}
            description={ JewelleryFeaturesData[2].description}

          />
          {/* <FeatureItem
            icon={ JewelleryFeaturesData[3].icon}
            title={ JewelleryFeaturesData[3].title}
            description={ JewelleryFeaturesData[3].description}

          /> */}
          <FeatureItem
            icon={ JewelleryFeaturesData[4].icon}
            title={ JewelleryFeaturesData[4].title}
            description={ JewelleryFeaturesData[4].description}

          />
          <FeatureItem
            icon={ JewelleryFeaturesData[5].icon}
            title={ JewelleryFeaturesData[5].title}
            description={ JewelleryFeaturesData[5].description}

          />
          <FeatureItem
            icon={ JewelleryFeaturesData[6].icon}
            title={ JewelleryFeaturesData[6].title}
            description={ JewelleryFeaturesData[6].description}

          />
          <FeatureItem
            icon={ JewelleryFeaturesData[7].icon}
            title={ JewelleryFeaturesData[7].title}
            description={ JewelleryFeaturesData[7].description}

          />
          <FeatureItem
            icon={ JewelleryFeaturesData[8].icon}
            title={ JewelleryFeaturesData[8].title}
            description={ JewelleryFeaturesData[8].description}

          />
          <FeatureItem
            icon={ JewelleryFeaturesData[9].icon}
            title={ JewelleryFeaturesData[9].title}
            description={ JewelleryFeaturesData[9].description}

          />
          <FeatureItem
            icon={ JewelleryFeaturesData[10].icon}
            title={ JewelleryFeaturesData[10].title}
            description={ JewelleryFeaturesData[10].description}

          />
          <FeatureItem
            icon={ JewelleryFeaturesData[11].icon}
            title={ JewelleryFeaturesData[11].title}
            description={ JewelleryFeaturesData[11].description}

          />
           <FeatureItem
            icon={ JewelleryFeaturesData[12].icon}
            title={ JewelleryFeaturesData[12].title}
            description={ JewelleryFeaturesData[12].description}

          />
        </div>
      </div>
    </section>
  );
};

export default JewelleryFeatures;
