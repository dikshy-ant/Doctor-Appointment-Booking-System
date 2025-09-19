import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-800 pt-12   w-full relative bottom-0 ">
      <div className="max-w-7xl h-full mx-auto flex flex-col items-center">
        {/* Logo Section */}
        <div className="mb-4">
          <div className="text-gray-900 text-2xl font-bold text-center">
            Company Name
          </div>
          <p className="text-sm text-gray-500 text-center">
            Your Health Our Priority
          </p>

          <div className="flex flex-col items-center space-y-2">
            <h3 className="font-semibold text-lg text-gray-900">We Accept</h3>
            <div className="flex flex-row items-center gap-9">
              <p className="text-sm text-gray-500">Card 1 </p>
              <p className="text-sm text-gray-500">Card 2</p>
              <p className="text-sm text-gray-500">Card 3</p>
              <p className="text-sm text-gray-500">Card 4</p>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex justify-between w-full mb-6 border-t border-gray-300">
          {/* Column 1 */}
          <div className="flex flex-col items-center space-y-2">
            <h3 className="font-semibold text-lg text-gray-900">Links</h3>
            <p className="text-sm text-gray-500">Link 1</p>
            <p className="text-sm text-gray-500">Link 2</p>
            <p className="text-sm text-gray-500">Link 3</p>
            <p className="text-sm text-gray-500">Link 4</p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center space-y-2">
            <h3 className="font-semibold text-lg text-gray-900">Products</h3>
            <p className="text-sm text-gray-500">Product A</p>
            <p className="text-sm text-gray-500">Product B</p>
            <p className="text-sm text-gray-500">Product C</p>
            <p className="text-sm text-gray-500">Product D</p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center space-y-2">
            <h3 className="font-semibold text-lg text-gray-900">Resources</h3>
            <p className="text-sm text-gray-500">Resource 1</p>
            <p className="text-sm text-gray-500">Resource 2</p>
            <p className="text-sm text-gray-500">Resource 3</p>
            <p className="text-sm text-gray-500">Resource 4</p>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col items-center space-y-2">
            <h3 className="font-semibold text-lg text-gray-900">Company</h3>
            <p className="text-sm text-gray-500">About Us</p>
            <p className="text-sm text-gray-500">Careers</p>
            <p className="text-sm text-gray-500">Privacy</p>
            <p className="text-sm text-gray-500">Terms</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 w-full text-center mt-6 pt-6 text-sm text-gray-500">
        {/* Social Media Section */}
        <div className="flex flex-col items-center mb-6">
          <h3 className="font-semibold text-lg text-gray-900">Follow Us On:</h3>
          <div className="flex space-x-2">
            {/* Add your social icons here */}
          </div>
        </div>

        <span>
          <p>All rights resererved</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
