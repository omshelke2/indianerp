import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { ManagementSoftwareData} from "@/app/components/FeaturesGlance/featuresData";

const ManagementSoftwareFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ManagementSoftwareData[0].icon}
            title={ManagementSoftwareData[0].title}
            description={ManagementSoftwareData[0].description}

          />
          <FeatureItem
            icon={ManagementSoftwareData[1].icon}
            title={ManagementSoftwareData[1].title}
            description={ManagementSoftwareData[1].description}

          />
          <FeatureItem
            icon={ManagementSoftwareData[2].icon}
            title={ManagementSoftwareData[2].title}
            description={ManagementSoftwareData[2].description}

          />
          <FeatureItem
            icon={ManagementSoftwareData[3].icon}
            title={ManagementSoftwareData[3].title}
            description={ManagementSoftwareData[3].description}

          />
          <FeatureItem
            icon={ManagementSoftwareData[4].icon}
            title={ManagementSoftwareData[4].title}
            description={ManagementSoftwareData[4].description}

          />
          <FeatureItem
            icon={ManagementSoftwareData[5].icon}
            title={ManagementSoftwareData[5].title}
            description={ManagementSoftwareData[5].description}

          />
          <FeatureItem
            icon={ManagementSoftwareData[6].icon}
            title={ManagementSoftwareData[6].title}
            description={ManagementSoftwareData[6].description}

          />
          <FeatureItem
            icon={ManagementSoftwareData[7].icon}
            title={ManagementSoftwareData[7].title}
            description={ManagementSoftwareData[7].description}

          />
          <FeatureItem
            icon={ManagementSoftwareData[8].icon}
            title={ManagementSoftwareData[8].title}
            description={ManagementSoftwareData[8].description}

          />
        </div>
      </div>
    </section>
  );
};

export default ManagementSoftwareFeatures;
