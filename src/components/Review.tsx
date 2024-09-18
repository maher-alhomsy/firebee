import { StarFilledIcon } from "@radix-ui/react-icons";

const Review = () => {
  return (
    <ul className="flex gap-3 items-center justify-center md:justify-normal">
      {Array.from({ length: 5 }, (i) => i).map((_, i) => (
        <li key={i}>
          <StarFilledIcon color="#FFAD00" />
        </li>
      ))}

      <li>267 Reviews</li>
    </ul>
  );
};

export default Review;
