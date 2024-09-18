import image from "@/assets/money-back.png";

const MoneyBackSection = () => {
  return (
    <section className="w-[80%] bg-white-100 mx-auto p-7 mt-8 flex flex-col lg:flex-row text-center lg:text-left gap-16 items-center">
      <img src={image} className="size-[292px]" alt="" />

      <div>
        <h3 className="text-4xl mb-6">30 Day Money Back Guarantee</h3>

        <p className="text-2xl">
          At Firebee we believe in building quality products that actually work.
          Firebee and its partners have invested over $85 million in research
          and development to create the highest quality wearable for customers
          to enjoy. If for any reason if you are not satisfied with your Firebee
          headband we will happily refund your purchase.
        </p>
      </div>
    </section>
  );
};

export default MoneyBackSection;
