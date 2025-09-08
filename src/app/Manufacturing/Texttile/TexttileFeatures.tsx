import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import {  TexttileFeaturesData } from "@/app/components/FeaturesGlance/featuresData";

const TexttileFeatures= () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ TexttileFeaturesData[0].icon}
            title={ TexttileFeaturesData[0].title}
            description={ TexttileFeaturesData[0].description}

          />
          <FeatureItem
            icon={ TexttileFeaturesData[1].icon}
            title={ TexttileFeaturesData[1].title}
            description={ TexttileFeaturesData[1].description}

          />
          <FeatureItem
            icon={ TexttileFeaturesData[2].icon}
            title={ TexttileFeaturesData[2].title}
            description={ TexttileFeaturesData[2].description}

          />
          <FeatureItem
            icon={ TexttileFeaturesData[3].icon}
            title={ TexttileFeaturesData[3].title}
            description={ TexttileFeaturesData[3].description}

          />
          <FeatureItem
            icon={ TexttileFeaturesData[4].icon}
            title={ TexttileFeaturesData[4].title}
            description={ TexttileFeaturesData[4].description}

          />
          <FeatureItem
            icon={ TexttileFeaturesData[5].icon}
            title={ TexttileFeaturesData[5].title}
            description={ TexttileFeaturesData[5].description}

          />
          <FeatureItem
            icon={ TexttileFeaturesData[6].icon}
            title={ TexttileFeaturesData[6].title}
            description={ TexttileFeaturesData[6].description}

          />
          <FeatureItem
            icon={ TexttileFeaturesData[7].icon}
            title={ TexttileFeaturesData[7].title}
            description={ TexttileFeaturesData[7].description}

          />
          <FeatureItem
            icon={ TexttileFeaturesData[8].icon}
            title={ TexttileFeaturesData[8].title}
            description={ TexttileFeaturesData[8].description}

          />
           <FeatureItem
            icon={ TexttileFeaturesData[9].icon}
            title={ TexttileFeaturesData[9].title}
            description={ TexttileFeaturesData[9].description}

          />
           <FeatureItem
            icon={ TexttileFeaturesData[10].icon}
            title={ TexttileFeaturesData[10].title}
            description={ TexttileFeaturesData[10].description}

          />
        </div>
      </div>
    </section>
  );
};

export default TexttileFeatures;
