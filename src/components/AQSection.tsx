import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CONTENT = [
  {
    title: "Is Firebee Safe?",
    content: (
      <>
        Yes, Firebee is safe. Firebee meets the safety standards set by ICNIRP
        (International Commission on Non-Ionizing Radiation Protection). Firebee
        is
        <span className="font-semibold"> 3000x less powerful</span> than your
        average smartphone. Firebee uses an ultra-low signal that is completely
        safe for home use. The technology behind Firebee has been rigorously
        safety tested and has over 300,000 hours tested by users for efficacy
        and safety.
      </>
    ),
  },

  {
    title: "How Does Firebee work?",
    content: ` Firebee uses safe ultra-low energy magnetic signals to gently nudge
            you into a different mental state. Every Firebee signal is made by
            studying real world magnetic signatures. Did you know caffeine has a
            unique one of a kind magnetic signature? It’s a relatively unknown
            fact that every molecule on earth actually has a unique magnetic
            signature. Firebee using patented technology is able to take a
            magnetic signature and play it back through the Firebee headband.
            When you use the alert signal with Firebee you are actually playing
            back the magnetic signature of caffeine which our bodies already
            recognize. Within minutes of feeling the ultra-low magnetic signal
            of caffeine our body begins to feel more alert and awake. Firebee
            signal is 3000 times less powerful than a smartphone and completely
            safe to use.`,
  },

  {
    title: "Will Firebee Fit on My Head?",
    content: `Firebee has a fully adjustable headband you can adjust to fit
            comfortably and snug on your head.`,
  },
  {
    title: "What If I want the signal to stop?",
    content: `Firebee is designed to be used on command. If you wish to turn off a
            signal, the effects wear off within minutes.`,
  },
  {
    title: "How do you charge Firebee?",
    content: ` Firebee comes with a charging dock and a charging cable. Just set up
            the charging dock on a nightstand and plug it in.`,
  },
];

const AQSection = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-[#FBFBFB] mt-8 py-8">
      <h3 className="text-5xl text-center mb-16">Frequently Asked Questions</h3>

      <Accordion className="w-[80%] md:max-w-4xl" type="multiple">
        {CONTENT.map(({ content, title }, i) => (
          <AccordionItem
            key={title}
            value={title}
            style={i === CONTENT.length - 1 ? { borderBottom: 0 } : undefined}
          >
            <AccordionTrigger className="border-t-2 border-t-[#3F3631] hover:no-underline">
              <p className="text-2xl">{title}</p>
            </AccordionTrigger>

            <AccordionContent className="text-xl">{content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default AQSection;
