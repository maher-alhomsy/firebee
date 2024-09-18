import { CheckIcon } from "@radix-ui/react-icons";

type Props = {
  items: string[];
};

const FeaturesList = ({ items }: Props) => {
  return (
    <ul className="space-y-3 my-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 items-center">
          <CheckIcon color="white" className="check-icon rounded-full size-6" />

          <span className="mt-0">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;
