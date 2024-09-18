import youtubeLogo from "@/assets/youtube.png";
import twitterLogo from "@/assets/twitter.png";
import facebookLogo from "@/assets/facebook.png";
import instagramLogo from "@/assets/instagram.png";

const images = [youtubeLogo, twitterLogo, facebookLogo, instagramLogo];

const FindUs = () => {
  return (
    <div className="*:text-white">
      <h4 className="mb-4 text-2xl">Fing Us On</h4>

      <ul className="flex gap-6">
        {images.map((image) => (
          <li key={image} className="cursor-pointer">
            <img src={image} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FindUs;
