import image from "@/assets/box.png";
import companyOne from "@/assets/company-one.png";
import companyTwo from "@/assets/company-two.png";
import companySix from "@/assets/company-six.png";
import { CheckIcon } from "@radix-ui/react-icons";
import companyFive from "@/assets/company-five.png";
import companyFour from "@/assets/company-four.png";
import companyThree from "@/assets/company-three.png";
import { Separator } from "@/components/ui/separator";

const images = [
  companyOne,
  companyTwo,
  companyThree,
  companyFour,
  companyFive,
  companySix,
];

const content = ["1 Firebeeheadband ", "1 Charging cable", "1 User manual"];

const BoxSection = () => {
  return (
    <section className="mt-24 flex flex-col justify-center items-center">
      <h3 className="text-5xl mb-8 text-center">What’s in the box?</h3>
      <img src={image} alt="" />

      <span className="font-medium tracking-[6px] uppercase mb-6">
        featured on
      </span>

      <ul className="flex gap-12 flex-wrap mx-auto px-3">
        {images.map((image) => (
          <li key={image}>
            <img className="w-24 h-14" src={image} alt="" />
          </li>
        ))}
      </ul>

      <Separator className="w-[50%] my-3" />

      <ul className="flex gap-10 lg:gap-24 flex-wrap mx-3">
        {content.map((item) => (
          <li key={item} className="flex gap-4 items-center">
            <CheckIcon color="white" className="size-8 rounded-lg check-icon" />
            <p className="text-3xl">{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BoxSection;
