import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { WebAppData  } from "@/app/components/FeaturesGlance/featuresData";

const PayrollFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ WebAppData[0].icon}
            title={ WebAppData[0].title}
            description={ WebAppData[0].description}

          />
          <FeatureItem
            icon={ WebAppData[1].icon}
            title={ WebAppData[1].title}
            description={ WebAppData[1].description}

          />
          <FeatureItem
            icon={ WebAppData[2].icon}
            title={ WebAppData[2].title}
            description={ WebAppData[2].description}

          />
          <FeatureItem
            icon={ WebAppData[3].icon}
            title={ WebAppData[3].title}
            description={ WebAppData[3].description}

          />
          <FeatureItem
            icon={ WebAppData[4].icon}
            title={ WebAppData[4].title}
            description={ WebAppData[4].description}

          />
          <FeatureItem
            icon={ WebAppData[5].icon}
            title={ WebAppData[5].title}
            description={ WebAppData[5].description}

          />
          <FeatureItem
            icon={ WebAppData[6].icon}
            title={ WebAppData[6].title}
            description={ WebAppData[6].description}

          />
          <FeatureItem
            icon={ WebAppData[7].icon}
            title={ WebAppData[7].title}
            description={ WebAppData[8].description}

          />
          <FeatureItem
            icon={ WebAppData[8].icon}
            title={ WebAppData[8].title}
            description={ WebAppData[8].description}

          />
        </div>
      </div>
    </section>
  );
};

export default PayrollFeatures;
