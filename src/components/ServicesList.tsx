import star from "@/assets/star.png";
import world from "@/assets/world.png";
import signal from "@/assets/signal.png";
import customer from "@/assets/customer.png";

const CONTENT = [
  { title: "30-day Money-back Guarantee", icon: star },
  { title: "Free Shipping within USA", icon: world },
  { title: "Signal Catalogue Updates Included", icon: signal },
  { title: "Customer Support via E-mail, Phone, and Chat", icon: customer },
];

const ServicesList = () => {
  return (
    <ul className="flex flex-wrap mt-5 gap-10 xl:gap-20 justify-center">
      {CONTENT.map(({ icon, title }) => (
        <li
          key={title}
          className="w-[30%] flex flex-col gap-3 justify-center items-center"
        >
          <img src={icon} alt="" />
          <p className="text-center">{title}</p>
        </li>
      ))}
    </ul>
  );
};

export default ServicesList;
