import { whyChooseUsData } from "@/utils/WhyChouseUs";

const WhyChooseUs = () => {
   
  return (
    <section className="pt-16 pb-24 md:pt-24 md:pb-40">
      {/* title and description */}
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <p
          data-aos="fade-up"
          className="text-orange-500 font-semibold text-sm md:text-lg"
        >
        
        </p>
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl text-gray-100 font-bold text-center font-young-serif"
        >
          Why Choose Us?
        </h2>
        <p data-aos="fade-up" className="text-gray-300">
          
        </p>
      </div>
      {/* items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {whyChooseUsData?.map((item) => (
            
          <div className="rounded-xl p-8 shadowGray transition-shadow duration-300 flex flex-col items-center justify-center gap-4">
            <div className="text-5xl text-gray-100">
                <img className="w-[100px] h-[100px]" src={item.icon} alt="" />
            </div>
            <h3 className=" lg:text-md text-center font-semibold">{item.title}</h3>
            <p className="text-gray-300 text-[10px] md:text-[13px] text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
