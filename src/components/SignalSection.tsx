import signalOne from "@/assets/signal-one.png";
import signalTwo from "@/assets/signal-two.png";
import signalSix from "@/assets/signal-six.png";
import signalFour from "@/assets/signal-four.png";
import signalFive from "@/assets/signal-five.png";
import signalThree from "@/assets/signal-three.png";
import signalSevent from "@/assets/signal-seven.png";
import signalEight from "@/assets/signal-eight.png";

const images = [
  {
    image: signalOne,
    text: "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    image: signalTwo,
    text: "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    image: signalThree,
    text: "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    image: signalFour,
    text: "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    image: signalFive,
    text: "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    image: signalSix,
    text: "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    image: signalSevent,
    text: "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    image: signalEight,
    text: "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
];

const SignalSection = () => {
  return (
    <section className="mt-10">
      <h3 className="text-5xl text-center mb-5">Firebee Signals</h3>
      <p className="text-center font-normal text-2xl mb-8">
        A signal for every situation
      </p>

      <ul className="flex flex-wrap w-[80%] mx-auto gap-8">
        {images.map(({ image, text }) => (
          <li
            key={image}
            className="flex flex-col text-center 2xl:flex-row md:flex-[1/3] lg:w-[30%] bg-[#FBFBFD] p-6 gap-4 items-center"
          >
            <img className="size-24" src={image} alt="" />
            <p className="leading-8">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SignalSection;
