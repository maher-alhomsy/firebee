import image from "@/assets/about.png";
import { CheckIcon } from "@radix-ui/react-icons";

const CONTENT = [
  <>
    Can’t sleep? Turn on the
    <span className="font-bold linear-one"> deep sleep </span>
    signal
  </>,

  <>
    Feeling tired? Turn on the
    <span className="font-bold linear-two"> alert</span> signal
  </>,

  <>
    Feeling anxious? Turn on the
    <span className="font-bold linear-three"> calm</span> signal
  </>,

  <>
    Feeling unproductive? Turn on the
    <span className="font-bold linear-four"> focus</span> signal
  </>,

  <>
    Feeling blue? Turn on the
    <span className="font-bold linear-five"> happy</span> signal
  </>,
];

const AboutSection = () => {
  return (
    <>
      <section className="flex flex-col items-center px-4 py-8 lg:flex-row lg:px-16 lg:py-16 lg:gap-16 bg-white-100 mt-12">
        <div className="flex justify-center lg:w-1/2">
          <img src={image} alt="" className="w-full max-w-md lg:max-w-lg" />
        </div>

        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <h2 className="text-6xl font-bold text-center lg:text-left">
            What will Firebee do for me?
          </h2>

          <p className="text-2xl text-center text-gray-600 mt-4 lg:text-left">
            Firebee will help you gently nudge yourself into a different mental
            state
          </p>

          <ul className="mt-8 space-y-4">
            {CONTENT.map((item, i) => (
              <li key={i} className="flex items-center gap-5">
                <CheckIcon
                  color="white"
                  className="check-icon rounded-full size-8"
                  style={
                    i === 0
                      ? { borderWidth: 2, borderColor: "black" }
                      : undefined
                  }
                />

                <p className="text-xl lg:text-3xl">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
