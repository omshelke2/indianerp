
import "./hero.css";


const Hero = () => {
  return (
    <>
    <section className="mb-3">
        <div className="mainHero mt-5 pt-2 pb-2 flex items-center justify-center  ">
            <h1 className="text-2xl text-center text-white font-bold">Retail (POS) | Restaurant | Distribution | Manufacturing | ERP Software | Mobile App</h1>
        </div>
    </section>
    <section className="mb-10 w-full h-[80vh] md:h-[70vh] lg:h-[30vh] flex flex-col md:flex-row">
      
      {/* {Left Side 2 ELements} */}
       <div className="flex-1 flex items-center justify-center text-white text-2xl font-bold">
        
         <div className=" w-[200px] h-[200px]  object-cover">
              <img src="/images/supermarket.png" alt="Img 1"  />
         <h3 className="text-black text-center">Supermarket</h3>
         </div>
         
         <img src="/images/medicine.jpg" alt="Img 2" className="ml-5 w-[200px] h-[200px]  object-cover" />
        
       </div>
      
      {/* Center Side (Blue) */}
      <div className="flex-1 ml-0 m-3  flex items-center justify-center text-white text-2xl font-bold">
        
          <img src="/images/Manufacturing_0.jpeg" alt="Img 1" className=" w-[200px] h-[200px]  object-cover" />
          <img src="/images/Manufacturing_0.jpeg" alt="Img 2" className="ml-5 w-[200px] h-[200px]  object-cover" />
        
      </div>

      {/* Right Side (Green) */}
      <div className="flex-1 ml-0 m-3  flex items-center justify-center text-white text-2xl font-bold">
          
          <img src="/images/Manufacturing_0.jpeg" alt="Img 1" className=" w-[200px] h-[200px]  object-cover" />
          <img src="/images/Manufacturing_0.jpeg" alt="Img 2" className="ml-5 w-[200px] h-[200px]  object-cover" />

      </div>

    </section>
    </>
    
  )
}

export default Hero