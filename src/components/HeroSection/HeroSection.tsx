import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type Inputs = {
  searchValue: string;
};

const HeroSection = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <section className="h-[calc(100vh-70px)] bg-bannerBg bg-cover bg-no-repeat bg-center">
      <div className="bg-black/55 h-full w-full flex justify-center items-center">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col justify-center space-y-5 px-3">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-center leading-snug md:leading-[60px]">
          Drive Your Adventure: Find the Perfect Car Today
          </h2>
          <div  className="w-full flex justify-center"><p className="text-gray-300 text-[10px] md:text-[15px] text-center max-w-xl">
          Embark on your next adventure with confidence by choosing the perfect vehicle from our extensive fleet. Whether you’re planning a weekend getaway, a cross-country road trip, or just need a reliable ride for daily errands, 
          </p></div>
          <div className="flex justify-center lg:ml-6 items-center gap-1">
            <Button className="md:w-40 w-[80px] text-[12px] md:text-[15px] h-12 bg-[#e80a0a] hover:bg-[#c20303]">
              Book Now
            </Button>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-full  max-w-sm items-center"
            >
              <Input
                {...register("searchValue")}
                type="text"
                placeholder="Search based on location or dates"
                className="outline-none text-[12px] md:text-[15px] h-12 bg-white text-black md:px-6 focus-visible:ring-offset-0 placeholder:text-black rounded-r-none"
              />
              <Button
                type="submit"
                className="h-12 bg-[#e80a0a] hover:bg-[#b90303] rounded-l-none"
              >
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
