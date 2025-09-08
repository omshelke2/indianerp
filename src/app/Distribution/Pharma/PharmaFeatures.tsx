import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { PharmaFeaturesData} from "@/app/components/FeaturesGlance/featuresData";

const PharmaFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={PharmaFeaturesData[0].icon}
            title={PharmaFeaturesData[0].title}
            description={PharmaFeaturesData[0].description}


          />
          <FeatureItem
            icon={PharmaFeaturesData[1].icon}
            title={PharmaFeaturesData[1].title}
            description={PharmaFeaturesData[1].description}
            
          />
          <FeatureItem
            icon={PharmaFeaturesData[2].icon}
            title={PharmaFeaturesData[2].title}
            description={PharmaFeaturesData[2].description}

          />
          <FeatureItem
            icon={PharmaFeaturesData[3].icon}
            title={PharmaFeaturesData[3].title}
            description={PharmaFeaturesData[3].description}

          />
          <FeatureItem
            icon={PharmaFeaturesData[4].icon}
            title={PharmaFeaturesData[4].title}
            description={PharmaFeaturesData[4].description}

          />
          <FeatureItem
            icon={PharmaFeaturesData[5].icon}
            title={PharmaFeaturesData[5].title}
            description={PharmaFeaturesData[5].description}

          />
          <FeatureItem
            icon={PharmaFeaturesData[6].icon}
            title={PharmaFeaturesData[6].title}
            description={PharmaFeaturesData[6].description}

          />
          <FeatureItem
            icon={PharmaFeaturesData[7].icon}
            title={PharmaFeaturesData[7].title}
            description={PharmaFeaturesData[7].description}

          />
          <FeatureItem
            icon={PharmaFeaturesData[8].icon}
            title={PharmaFeaturesData[8].title}
            description={PharmaFeaturesData[8].description}

          />
          <FeatureItem
            icon={PharmaFeaturesData[9].icon}
            title={PharmaFeaturesData[9].title}
            description={PharmaFeaturesData[9].description}

          />
          <FeatureItem
            icon={PharmaFeaturesData[10].icon}
            title={PharmaFeaturesData[10].title}
            description={PharmaFeaturesData[10].description}

          />
          <FeatureItem
            icon={PharmaFeaturesData[11].icon}
            title={PharmaFeaturesData[11].title}
            description={PharmaFeaturesData[11].description}

          />
            <FeatureItem
            icon={PharmaFeaturesData[12].icon}
            title={PharmaFeaturesData[12].title}
            description={PharmaFeaturesData[12].description}

          />
           <FeatureItem
            icon={PharmaFeaturesData[13].icon}
            title={PharmaFeaturesData[13].title}
            description={PharmaFeaturesData[13].description}

          />
           <FeatureItem
            icon={PharmaFeaturesData[14].icon}
            title={PharmaFeaturesData[14].title}
            description={PharmaFeaturesData[14].description}

          />
        
        </div>
      </div>
    </section>
  );
};

export default PharmaFeatures;
