import FindUs from "./FindUs";
import { Separator } from "./ui/separator";
import logo from "@/assets/footer-logo.png";
import background from "@/assets/footer.png";

const Footer = () => {
  return (
    <footer className="bg-[#12151A]">
      <div className="h-[10px] check-icon" />

      <section className="px-10 lg:px-24 pt-9 flex flex-wrap gap-14 lg:gap-40">
        <div className="*:text-white *:relative *:z-10">
          <h4 className="mb-4 text-2xl">About</h4>
          <p>Home</p>
          <p>Product</p>
        </div>

        <div className="*:text-white *:relative *:z-10">
          <h4 className="mb-4 text-2xl">Support</h4>
          <p>Activate</p>
          <p>Login</p>
        </div>

        <FindUs />
      </section>

      <Separator className="my-5" />

      <section className="px-10 lg:px-24 py-7 flex flex-col lg:flex-row gap-4 relative *:text-white">
        <div className="*:relative *:z-10 *:text-white">
          <img src={logo} className="w-56 mb-10 cursor-pointer" />

          <p className="mb-5 opacity-60 relative z-10">
            Copyright © 2020 Firebee Technologies, Inc. All rights reserved.
          </p>

          <p className="opacity-60 relative z-10">
            The statements on this page have not been evaluated by the FDA. This
            product is not intended to diagnose, treat, cure, or prevent any
            disease.
          </p>
        </div>

        <p className="text-white relative z-10 opacity-60">
          Privacy Policy Terms of Service
        </p>

        <img src={background} alt="" className="absolute left-0 bottom-0" />
      </section>
    </footer>
  );
};

export default Footer;
