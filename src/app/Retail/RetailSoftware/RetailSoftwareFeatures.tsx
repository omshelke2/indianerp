import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import {  RetailFeaturesData }from "@/app/components/FeaturesGlance/featuresData";

const RetailSoftwareFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ RetailFeaturesData[0].icon}
            title={ RetailFeaturesData[0].title}
            description={ RetailFeaturesData[0].description}

          />
          <FeatureItem
            icon={ RetailFeaturesData[1].icon}
            title={ RetailFeaturesData[1].title}
            description={ RetailFeaturesData[1].description}

          />
          <FeatureItem
            icon={ RetailFeaturesData[2].icon}
            title={ RetailFeaturesData[2].title}
            description={ RetailFeaturesData[2].description}

          />
          <FeatureItem
            icon={ RetailFeaturesData[3].icon}
            title={ RetailFeaturesData[3].title}
            description={ RetailFeaturesData[3].description}

          />
          <FeatureItem
            icon={ RetailFeaturesData[4].icon}
            title={ RetailFeaturesData[4].title}
            description={ RetailFeaturesData[4].description}

          />
          <FeatureItem
            icon={ RetailFeaturesData[5].icon}
            title={ RetailFeaturesData[5].title}
            description={ RetailFeaturesData[5].description}

          />
          <FeatureItem
            icon={ RetailFeaturesData[6].icon}
            title={ RetailFeaturesData[6].title}
            description={ RetailFeaturesData[6].description}

          />
          <FeatureItem
            icon={ RetailFeaturesData[7].icon}
            title={ RetailFeaturesData[7].title}
            description={ RetailFeaturesData[7].description}

          />
          <FeatureItem
            icon={ RetailFeaturesData[8].icon}
            title={ RetailFeaturesData[8].title}
            description={ RetailFeaturesData[8].description}

          />
          <FeatureItem
            icon={ RetailFeaturesData[9].icon}
            title={ RetailFeaturesData[9].title}
            description={ RetailFeaturesData[9].description}

          />
          <FeatureItem
            icon={ RetailFeaturesData[10].icon}
            title={ RetailFeaturesData[10].title}
            description={ RetailFeaturesData[10].description}

          />
          <FeatureItem
            icon={ RetailFeaturesData[11].icon}
            title={ RetailFeaturesData[11].title}
            description={ RetailFeaturesData[11].description}

          />
          
        </div>
      </div>
    </section>
  );
};

export default RetailSoftwareFeatures;
