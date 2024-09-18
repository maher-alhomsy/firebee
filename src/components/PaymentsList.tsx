import paymentOne from "@/assets/payment-one.png";
import paymentTwo from "@/assets/payment-two.png";
import paymentSix from "@/assets/payment-six.png";
import paymentFour from "@/assets/payment-four.png";
import paymentFive from "@/assets/payment-five.png";
import paymentThree from "@/assets/payment-three.png";

const images = [
  paymentOne,
  paymentTwo,
  paymentThree,
  paymentFour,
  paymentFive,
  paymentSix,
];

const PaymentsList = () => {
  return (
    <ul className="flex justify-center gap-3 mt-3">
      {images.map((image) => (
        <li key={image} className="cursor-pointer">
          <img className="size-10 rounded-sm" src={image} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default PaymentsList;
