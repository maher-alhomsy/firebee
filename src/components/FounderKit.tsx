import FeaturesList from "./FeaturesList";

const items = [
  "Access to 7 signals (and future signal releases)",
  "Firebee Headband ",
  "No Monthly Membership",
];

const FounderKit = () => {
  return (
    <div className="border-2 border-[#C4C4C4] p-4 rounded-md my-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Firebee Starter Kit</h2>
        <span>$799.00</span>
      </div>

      <FeaturesList items={items} />

      <p>
        The Founders kit allows you to get the Firebee headband and lifetime
        access to the entire Firebee Signal Catalogue for a one-time payment.
        The Founders is kit can be paid through Affirm allowing customers to
        make small payments of $73 a month.
      </p>
    </div>
  );
};

export default FounderKit;
