import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { FMCGFeaturesData} from "@/app/components/FeaturesGlance/featuresData";

const FMCGFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={FMCGFeaturesData[0].icon}
            title={FMCGFeaturesData[0].title}
            description={FMCGFeaturesData[0].description}

          />
          <FeatureItem
            icon={FMCGFeaturesData[1].icon}
            title={FMCGFeaturesData[1].title}
            description={FMCGFeaturesData[1].description}

          />
          <FeatureItem
            icon={FMCGFeaturesData[2].icon}
            title={FMCGFeaturesData[2].title}
            description={FMCGFeaturesData[2].description}

          />
          <FeatureItem
            icon={FMCGFeaturesData[3].icon}
            title={FMCGFeaturesData[3].title}
            description={FMCGFeaturesData[3].description}

          />
          <FeatureItem
            icon={FMCGFeaturesData[4].icon}
            title={FMCGFeaturesData[4].title}
            description={FMCGFeaturesData[4].description}

          />
          <FeatureItem
            icon={FMCGFeaturesData[5].icon}
            title={FMCGFeaturesData[5].title}
            description={FMCGFeaturesData[5].description}

          />
          <FeatureItem
            icon={FMCGFeaturesData[6].icon}
            title={FMCGFeaturesData[6].title}
            description={FMCGFeaturesData[6].description}

          />
          <FeatureItem
            icon={FMCGFeaturesData[7].icon}
            title={FMCGFeaturesData[7].title}
            description={FMCGFeaturesData[7].description}

          />
          <FeatureItem
            icon={FMCGFeaturesData[8].icon}
            title={FMCGFeaturesData[8].title}
            description={FMCGFeaturesData[8].description}

          />
          <FeatureItem
            icon={FMCGFeaturesData[9].icon}
            title={FMCGFeaturesData[9].title}
            description={FMCGFeaturesData[9].description}

          />
          <FeatureItem
            icon={FMCGFeaturesData[10].icon}
            title={FMCGFeaturesData[10].title}
            description={FMCGFeaturesData[10].description}

          />
          <FeatureItem
            icon={FMCGFeaturesData[11].icon}
            title={FMCGFeaturesData[11].title}
            description={FMCGFeaturesData[11].description}

          />
            <FeatureItem
            icon={FMCGFeaturesData[12].icon}
            title={FMCGFeaturesData[12].title}
            description={FMCGFeaturesData[12].description}

          />
           <FeatureItem
            icon={FMCGFeaturesData[13].icon}
            title={FMCGFeaturesData[13].title}
            description={FMCGFeaturesData[13].description}

          />
           <FeatureItem
            icon={FMCGFeaturesData[14].icon}
            title={FMCGFeaturesData[14].title}
            description={FMCGFeaturesData[14].description}

          />
           <FeatureItem
            icon={FMCGFeaturesData[15].icon}
            title={FMCGFeaturesData[15].title}
            description={FMCGFeaturesData[15].description}

          />
           <FeatureItem
            icon={FMCGFeaturesData[16].icon}
            title={FMCGFeaturesData[16].title}
            description={FMCGFeaturesData[16].description}

          />
           <FeatureItem
            icon={FMCGFeaturesData[17].icon}
            title={FMCGFeaturesData[17].title}
            description={FMCGFeaturesData[17].description}

          />
        
        </div>
      </div>
    </section>
  );
};

export default FMCGFeatures;
