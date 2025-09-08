import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { HotelERPSoftwaresData} from "@/app/components/FeaturesGlance/featuresData";

const HotelERPSoftwaresFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={HotelERPSoftwaresData[0].icon}
            title={HotelERPSoftwaresData[0].title}
            description={HotelERPSoftwaresData[0].description}
            
          />
          <FeatureItem
            icon={HotelERPSoftwaresData[1].icon}
            title={HotelERPSoftwaresData[1].title}
            description={HotelERPSoftwaresData[1].description}

          />
          <FeatureItem
            icon={HotelERPSoftwaresData[2].icon}
            title={HotelERPSoftwaresData[2].title}
            description={HotelERPSoftwaresData[2].description}

          />
          <FeatureItem
            icon={HotelERPSoftwaresData[3].icon}
            title={HotelERPSoftwaresData[3].title}
            description={HotelERPSoftwaresData[3].description}

          />
          <FeatureItem
            icon={HotelERPSoftwaresData[4].icon}
            title={HotelERPSoftwaresData[4].title}
            description={HotelERPSoftwaresData[4].description}

          />
          <FeatureItem
            icon={HotelERPSoftwaresData[5].icon}
            title={HotelERPSoftwaresData[5].title}
            description={HotelERPSoftwaresData[5].description}

          />
          <FeatureItem
            icon={HotelERPSoftwaresData[6].icon}
            title={HotelERPSoftwaresData[6].title}
            description={HotelERPSoftwaresData[6].description}

          />
          <FeatureItem
            icon={HotelERPSoftwaresData[7].icon}
            title={HotelERPSoftwaresData[7].title}
            description={HotelERPSoftwaresData[8].description}

          />
          <FeatureItem
            icon={HotelERPSoftwaresData[8].icon}
            title={HotelERPSoftwaresData[8].title}
            description={HotelERPSoftwaresData[8].description}

          />
        </div>
      </div>
    </section>
  );
};

export default HotelERPSoftwaresFeatures;
