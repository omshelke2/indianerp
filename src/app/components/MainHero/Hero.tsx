
import "./Hero.css";


const Hero = () => {
  return (
    <>
      <section className="mb-3">
        <div className="mainHero mt-5 pt-2 pb-2 flex items-center justify-center rounded-sm">
          <h1 className="text-xl md:text-2xl text-center text-white font-bold px-2">
            Retail(POS) | Restaurant | Distribution | Manufacturing | ERP Software | Mobile App
          </h1>
        </div>
      </section>

      <section className="mb-10 w-full py-4 flex flex-wrap lg:flex-nowrap items-center justify-center gap-6">
        {/* Left Side (2 Elements) */}
        <div className="flex items-center justify-center gap-4 flex-wrap sm:flex-nowrap">
          <div className="hero-card">
            <div className="hero-card-img-wrapper">
              <img src="/images/supermarket.png" alt="Supermarket" className="hero-card-img" />
            </div>
            <h3 className="hero-card-title">Supermarket</h3>
          </div>

          <div className="hero-card">
            <div className="hero-card-img-wrapper">
              <img src="/images/medicine.jpg" alt="Medicine" className="hero-card-img" />
            </div>
            <h3 className="hero-card-title">Medicine</h3>
          </div>
        </div>

        {/* Center Side (2 Elements) */}
        <div className="flex items-center justify-center gap-4 flex-wrap sm:flex-nowrap">
          <div className="hero-card">
            <div className="hero-card-img-wrapper">
              <img src="/images/warehouse.png" alt="Distribution" className="hero-card-img" />
            </div>
            <h3 className="hero-card-title">Distribution</h3>
          </div>

          <div className="hero-card">
            <div className="hero-card-img-wrapper">
              <img src="/images/Manufacturing_0.jpeg" alt="Manufacturing" className="hero-card-img" />
            </div>
            <h3 className="hero-card-title">Manufacturing</h3>
          </div>
        </div>

        {/* Right Side (2 Elements) */}
        <div className="flex items-center justify-center gap-4 flex-wrap sm:flex-nowrap">
          <div className="hero-card">
            <div className="hero-card-img-wrapper">
              <img src="/images/erp.png" alt="ERP Software" className="hero-card-img" />
            </div>
            <h3 className="hero-card-title">ERP Software</h3>
          </div>

          <div className="hero-card">
            <div className="hero-card-img-wrapper">
              <img src="/images/mobile.png" alt="Mobile App" className="hero-card-img" />
            </div>
            <h3 className="hero-card-title">Mobile App</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
