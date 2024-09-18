const SECTIONS_NAME = ["How It Works", "Signals", "Reviews", "Blog"];

const MobileMenu = () => {
  return (
    <ul className="flex flex-col gap-6 w-36 p-3 rounded-md absolute bg-gray-400 top-12 right-0 z-20">
      {SECTIONS_NAME.map((item) => (
        <li key={item} className="text-white cursor-pointer border-b-2">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
