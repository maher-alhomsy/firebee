import { ArrowRightIcon } from "@radix-ui/react-icons";

import Slider from "./Slider";
import Review from "./Review";
import { Button } from "./ui/button";
import StarterKit from "./StarterKit";
import FounderKit from "./FounderKit";
import PaymentsList from "./PaymentsList";
import ServicesList from "./ServicesList";
import intro_two from "@/assets/intro-two.png";
import intro_one from "@/assets/intro-one.png";

const IntroSection = () => {
  return (
    <section className="flex flex-col md:flex-row gap-[50px] bg-[#F6F6F6] py-10">
      <div className="flex-1 px-2 lg:pl-12">
        <div className="flex gap-8 mb-5">
          <img className="size-28" src={intro_one} alt="" />
          <img className="size-28" src={intro_two} alt="" />
        </div>

        <Slider />

        <ServicesList />
      </div>

      <div className="flex-1 px-3 md:pr-9">
        <h1 className="text-3xl font-bold text-center md:text-left">
          Firebee Headband
        </h1>

        <Review />

        <p className="text-center md:text-left mb-3">
          Order today and receive your Firebee by June 15th, 2021
        </p>

        <StarterKit />
        <FounderKit />

        <div className="text-center">
          <Button className="w-[60%] p-6">
            <span className="text-white text-xl mr-6">Add to Cart</span>
            <ArrowRightIcon color="white" className="size-6" />
          </Button>
        </div>

        <PaymentsList />
      </div>
    </section>
  );
};

export default IntroSection;
