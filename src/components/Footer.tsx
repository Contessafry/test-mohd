import { Button } from "./UI/button";
import { ChevronDown } from "lucide-react";

export const Footer = () => (
  <footer className="bg-primary text-white py-8 w-full">
    <div className=" px-10">
      <div className="grid grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-medium mb-4">About us</h3>
          <ul className="space-y-2 text-sm ">
            <li>Platform overview</li>
            <li>How to</li>
            <li>Register</li>
            <li>Terms of usage</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm ">
            <li>Contact us</li>
            <li>FAQ</li>
            <li>Payment methods</li>
            <li>Money-back guarantee</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Warranty and claims</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-4">Catalogue</h3>
          <ul className="space-y-2 text-sm ">
            <li>Furniture</li>
            <li>Lighting</li>
            <li>Kitchen</li>
            <li>Accessories</li>
            <li>Outdoor</li>
            <li>Brand</li>
            <li>Designers</li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-end  gap-2 mb-6">
            <div className="pl-10 bg-primary h-full flex items-center  gap-2.5">
              <span className="text-[32px] font-bold font-soehne_breit text-white">mohd</span>
              <span className=" rounded-full bg-destructive px-3 py-1 align-middle font-medium text-sm mt-2 text-white">Pro</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-end pt-6">
        <div className="flex gap-4 items-end">
          <div className="flex-col flex gap-4">
            <div className="text-sm text-secondary-t">Language</div>
            <Button variant="outline" className="w-40 justify-between">
              English <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex-col flex gap-4">
            <div className="text-sm text-secondary-t">Currency</div>
            <Button variant="outline" className="w-28 justify-between">
              EUR <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" className="border-none bg-outline-secondary px-10">
            Confirm
          </Button>
        </div>

        <div className="text-sm flex flex-col items-end justify-end h-full">
          Secure payments
          <div className="flex items-center gap-2 mt-2">
            <div className="w-8 h-5 bg-gray-700 rounded" />
            <div className="w-8 h-5 bg-gray-700 rounded" />
            <div className="w-8 h-5 bg-gray-700 rounded" />
            <div className="w-8 h-5 bg-gray-700 rounded" />
            <div className="w-8 h-5 bg-gray-700 rounded" />
            <div className="w-8 h-5 bg-gray-700 rounded" />
          </div>
        </div>
      </div>
      <div className="flex justify-between  pt-8 items-baseline mt-16 text-xs text-gray-500 border-t-[0.5px] border-secondary-t">
        <div className="text-xs text-gray-500">© 2011-2022 Mollura & C. S.p.a. S.S. 114 Km 6, 400 98128, Tremestieri Messina | P.IVA IT02759750835</div>
        <div className="flex gap-4">
          <div>Privacy Policy</div>
          <div>Cookies Policy</div>
        </div>
      </div>
    </div>
  </footer>
);
