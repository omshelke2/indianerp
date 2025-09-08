import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { PharmacyData } from "@/app/components/FeaturesGlance/featuresData";

const PharmacyFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={PharmacyData[0].icon}
            title={PharmacyData[0].title}
            //newly added
            description={PharmacyData[0].description}
          />
          <FeatureItem
            icon={PharmacyData[1].icon}
            title={PharmacyData[1].title}
            description={PharmacyData[1].description}

          />
          <FeatureItem
            icon={PharmacyData[2].icon}
            title={PharmacyData[2].title}
            description={PharmacyData[2].description}

          />
          <FeatureItem
            icon={PharmacyData[3].icon}
            title={PharmacyData[3].title}
            description={PharmacyData[3].description}

          />
          <FeatureItem
            icon={PharmacyData[4].icon}
            title={PharmacyData[4].title}
            description={PharmacyData[4].description}

          />
          <FeatureItem
            icon={PharmacyData[5].icon}
            title={PharmacyData[5].title}
            description={PharmacyData[5].description}

          />
          <FeatureItem
            icon={PharmacyData[6].icon}
            title={PharmacyData[6].title}
            description={PharmacyData[6].description}

          />
          <FeatureItem
            icon={PharmacyData[7].icon}
            title={PharmacyData[7].title}
            description={PharmacyData[7].description}

          />
          <FeatureItem
            icon={PharmacyData[8].icon}
            title={PharmacyData[8].title}
            description={PharmacyData[8].description}

          />
          <FeatureItem
            icon={PharmacyData[9].icon}
            title={PharmacyData[9].title}
            description={PharmacyData[9].description}

          />
          <FeatureItem
            icon={PharmacyData[10].icon}
            title={PharmacyData[10].title}
            description={PharmacyData[10].description}

          />
          <FeatureItem
            icon={PharmacyData[11].icon}
            title={PharmacyData[11].title}
            description={PharmacyData[11].description}

          />
          <FeatureItem
            icon={PharmacyData[12].icon}
            title={PharmacyData[12].title}
            description={PharmacyData[12].description}

          />
          <FeatureItem
            icon={PharmacyData[13].icon}
            title={PharmacyData[13].title}
            description={PharmacyData[13].description}

          />
          <FeatureItem
            icon={PharmacyData[14].icon}
            title={PharmacyData[14].title}
            description={PharmacyData[14].description}

          />
        </div>
      </div>
    </section>
  );
};

export default PharmacyFeatures;
