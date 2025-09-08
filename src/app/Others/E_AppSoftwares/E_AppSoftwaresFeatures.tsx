import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { E_AppSoftwaresData  } from "@/app/components/FeaturesGlance/featuresData";

const E_AppSoftwaresFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ E_AppSoftwaresData[0].icon}
            title={ E_AppSoftwaresData[0].title}
            description={ E_AppSoftwaresData[0].description}

          />
          <FeatureItem
            icon={ E_AppSoftwaresData[1].icon}
            title={ E_AppSoftwaresData[1].title}
            description={ E_AppSoftwaresData[1].description}

          />
          <FeatureItem
            icon={ E_AppSoftwaresData[2].icon}
            title={ E_AppSoftwaresData[2].title}
            description={ E_AppSoftwaresData[2].description}

          />
          <FeatureItem
            icon={ E_AppSoftwaresData[3].icon}
            title={ E_AppSoftwaresData[3].title}
            description={ E_AppSoftwaresData[3].description}

          />
          <FeatureItem
            icon={ E_AppSoftwaresData[4].icon}
            title={ E_AppSoftwaresData[4].title}
            description={ E_AppSoftwaresData[4].description}

          />
          <FeatureItem
            icon={ E_AppSoftwaresData[5].icon}
            title={ E_AppSoftwaresData[5].title}
            description={ E_AppSoftwaresData[5].description}

          />
          <FeatureItem
            icon={ E_AppSoftwaresData[6].icon}
            title={ E_AppSoftwaresData[6].title}
            description={ E_AppSoftwaresData[6].description}

          />
          <FeatureItem
            icon={ E_AppSoftwaresData[7].icon}
            title={ E_AppSoftwaresData[7].title}
            description={ E_AppSoftwaresData[7].description}

          />
          <FeatureItem
            icon={ E_AppSoftwaresData[8].icon}
            title={ E_AppSoftwaresData[8].title}
            description={ E_AppSoftwaresData[8].description}

          />
        </div>
      </div>
    </section>
  );
};

export default E_AppSoftwaresFeatures;
