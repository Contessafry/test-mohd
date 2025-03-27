export const Footer = () => (
  <footer className="bg-primary text-white py-8 w-full">
    <div className=" px-6">
      <div className="grid grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-medium mb-4">About us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Platform overview</li>
            <li>How to</li>
            <li>Register</li>
            <li>Terms of usage</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm text-gray-400">
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
          <ul className="space-y-2 text-sm text-gray-400">
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
          <div className="flex items-center gap-2 mb-6">
            <span className="font-bold text-xl">mohd</span>
            <div className="bg-mohd-red text-white text-xs rounded-sm px-1 py-0 h-4">PRO</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-gray-700">
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-400">Language</div>
          <button className="text-white border-gray-700 gap-1">English</button>

          <div className="text-sm text-gray-400 ml-4">Currency</div>
          <button className="text-white border-gray-700 gap-1">EUR</button>

          <button className="ml-4">Confirm</button>
        </div>

        <div className="text-sm text-gray-400">
          Secure payments
          <div className="flex items-center gap-2 mt-2">
            {/* Payment method icons would go here */}
            <div className="w-8 h-5 bg-gray-700 rounded"></div>
            <div className="w-8 h-5 bg-gray-700 rounded"></div>
            <div className="w-8 h-5 bg-gray-700 rounded"></div>
            <div className="w-8 h-5 bg-gray-700 rounded"></div>
            <div className="w-8 h-5 bg-gray-700 rounded"></div>
            <div className="w-8 h-5 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-500 mt-8">© 2011-2022 Mohd S.r.l. C.a.p.s. S.S. 114 Km 4,300 Giarre, Trecastagni (Messina) ITALIA (IT02770240838)</div>

      <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
        <div>Privacy Policy</div>
        <div>Cookies Policy</div>
      </div>
    </div>
  </footer>
);
