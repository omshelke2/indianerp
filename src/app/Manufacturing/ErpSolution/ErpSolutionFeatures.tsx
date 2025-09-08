import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import {  ErpSolutionFeaturesData } from "@/app/components/FeaturesGlance/featuresData";

const ErpSolutionFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ ErpSolutionFeaturesData[0].icon}
            title={ ErpSolutionFeaturesData[0].title}
            description={ ErpSolutionFeaturesData[0].description}

          />
          <FeatureItem
            icon={ ErpSolutionFeaturesData[1].icon}
            title={ ErpSolutionFeaturesData[1].title}
            description={ ErpSolutionFeaturesData[1].description}

          />
          <FeatureItem
            icon={ ErpSolutionFeaturesData[2].icon}
            title={ ErpSolutionFeaturesData[2].title}
            description={ ErpSolutionFeaturesData[2].description}

          />
          <FeatureItem
            icon={ ErpSolutionFeaturesData[3].icon}
            title={ ErpSolutionFeaturesData[3].title}
            description={ ErpSolutionFeaturesData[3].description}

          />
          <FeatureItem
            icon={ ErpSolutionFeaturesData[4].icon}
            title={ ErpSolutionFeaturesData[4].title}
            description={ ErpSolutionFeaturesData[4].description}

          />
          <FeatureItem
            icon={ ErpSolutionFeaturesData[5].icon}
            title={ ErpSolutionFeaturesData[5].title}
            description={ ErpSolutionFeaturesData[5].description}

          />
          <FeatureItem
            icon={ ErpSolutionFeaturesData[6].icon}
            title={ ErpSolutionFeaturesData[6].title}
            description={ ErpSolutionFeaturesData[6].description}

          />
          <FeatureItem
            icon={ ErpSolutionFeaturesData[7].icon}
            title={ ErpSolutionFeaturesData[7].title}
            description={ ErpSolutionFeaturesData[7].description}

          />
          <FeatureItem
            icon={ ErpSolutionFeaturesData[8].icon}
            title={ ErpSolutionFeaturesData[8].title}
            description={ ErpSolutionFeaturesData[8].description}

          />
           <FeatureItem
            icon={ ErpSolutionFeaturesData[9].icon}
            title={ ErpSolutionFeaturesData[9].title}
            description={ ErpSolutionFeaturesData[9].description}

          />
           <FeatureItem
            icon={ ErpSolutionFeaturesData[10].icon}
            title={ ErpSolutionFeaturesData[10].title}
            description={ ErpSolutionFeaturesData[10].description}

          />
        </div>
      </div>
    </section>
  );
};

export default ErpSolutionFeatures;
