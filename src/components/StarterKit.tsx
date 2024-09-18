import { Button } from "./ui/button";
import FeaturesList from "./FeaturesList";

const items = [
  "Access to 7 signals (and future signal releases)",
  "Firebee Headband ",
  "$19/month membership, first 2 months free",
];

const StarterKit = () => {
  return (
    <div className="bg-gradient-to-b from-[#2D5ECE] to-[#9F4EA1] rounded-md p-[2px]">
      <div className="bg-white p-4 rounded-md">
        <div className="flex justify-between flex-wrap mb-2">
          <h2 className="text-2xl font-bold">Firebee Starter Kit</h2>

          <p className="space-x-4">
            <span className="relative">
              <span className="absolute top-[11px] -right-0 w-14 h-[2px] bg-red-500 -rotate-[16deg]" />
              $999.00
            </span>
            <span>$379.00</span>
          </p>
        </div>

        <Button className="bg-gradient-to-r from-[#9F4EA1] to-[#2D5ECE] uppercase rounded-full px-12">
          most popular kit
        </Button>

        <FeaturesList items={items} />
        <p>
          The starter kit is the most affordable way to get started with
          Firebee. Pay $299 for the Firebee headband and access to the entire
          Firebee Signal Catalogue for only $19 a month.{" "}
          <span className="font-bold text-xl">
            Membership can be cancelled anytime. No contracts. Satisfaction
            guaranteed.
          </span>
        </p>
      </div>
    </div>
  );
};

export default StarterKit;
