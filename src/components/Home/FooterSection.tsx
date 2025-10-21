import React from "react";
import footerImg from "../../assets/footer.png";
import { Instagram, Twitter, Facebook } from "lucide-react";

export default function FooterSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white flex flex-col justify-between"
      style={{
        backgroundImage: `url(${footerImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex justify-between px-10 md:px-20 pt-10 text-sm font-mono">
        <div className="space-y-4">
          <div>
            <p className="font-bold">Email</p>
            <p className="hover:underline cursor-pointer">hello@figma.com</p>
          </div>
          <div>
            <p className="font-bold">Sponsorship</p>
            <p className="hover:underline cursor-pointer">hello@figma.com</p>
          </div>
        </div>

        <div className="text-right space-y-3 max-w-xs">
          <div>
            <p className="font-bold">Socials</p>
            <div className="flex justify-end gap-2 mt-1">
              <Instagram
                size={18}
                className="cursor-pointer bg-white text-black"
              />
              <Twitter
                size={18}
                className="cursor-pointer bg-white text-black"
              />
              <Facebook
                size={18}
                className="cursor-pointer bg-white text-black"
              />
            </div>
          </div>

          <div>
            <p className="font-bold">New Fundraiser</p>
            <p className="text-xs leading-snug">
              Running for Change is a 501(c)(3) non-profit organization.
              Contributions are tax-deductible to the extent permitted by law.
            </p>
          </div>
        </div>
      </div>
      <div className="relative px-6 md:px-16 pb-10 text-center">
        <h1 className="text-6xl md:text-9xl font-[righteous] font-bold leading-tight">
          Running For Change
        </h1>
      </div>
    </section>
  );
}
