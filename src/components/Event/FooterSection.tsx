import { Instagram, Twitter, Facebook } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="relative h-screen bg-cover bg-center text-black flex flex-col justify-between bg-[#95FF8D]">
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
              <Instagram size={18} className="cursor-pointer text-black hover:text-green-600 transition duration-200" />
              <Twitter size={18} className="cursor-pointer text-black hover:text-green-600 transition duration-200" />
              <Facebook size={18} className="cursor-pointer text-black hover:text-green-600 transition duration-200" />
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
        <h1 className="text-6xl md:text-9xl font-[righteous] font-bold leading-tight text-black">
          Running For Change
        </h1>
      </div>
    </footer>
  );
}
