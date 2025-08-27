import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function HelpSupport() {
  // centralised state management (not state lifting)
  const [isExpanded, setIsExpanded] = useState(null);
  const details = [
    "Partner Onboarding",
    "Legal",
    "FAQs",
    "Instamart Onboarding",
    "IRCTC FAQ",
  ];
 
  return (
    <div className="bg-[#37718e] h-260  flex justify-center">
      <div className=" h-[900px]">
        <div className="mt-[60px] pl-[40px]  w-full h-20">
          <p className="text-[30px] text-white font-bold">Help & Support</p>
          <p className="text-[17px] text-white">
            Let's take a step ahead and help you better.
          </p>
        </div>

        <div className="mt-5 bg-white pl-[60px] pt-10 border h-[800px] flex w-full">
          <div className="w-[25%] h-162 bg-blue-100 p-2 flex flex-col gap-2">
            {details.map((det, idx) => (
              <div
                key={idx}
                className=" w-[25%] bg-blue-100 transform transition-transform duration-300 p-2"
              >
                <div className="hover:text-gray-950 text-gray-700 cursor-pointer ml-3 pl-15 p-4 text-[17px] font-bold w-70  ">
                  {det}
                </div>
              </div>
            ))}
          </div>

          <div className=" w-[100%] ml-10 pt-8">
            <p className="text-[27px] font-bold">Partner Onboarding</p>

            <div
              className="mt-4 flex justify-between mr-10 cursor-pointer"
              onClick={() =>
                setIsExpanded(isExpanded === "section1" ? null : "section1")
              }
            >
              <p
                className={`text-[20px] font-sans font-semibold ${
                  isExpanded === "section1" ? "text-[#ff5200]" : "text-gray-600"
                }`}
              >
                I want to partner my restaurant with Swiggy
              </p>
              {isExpanded === "section1" ? (
                <IoIosArrowUp className="mt-1 w-10 h-5 text-gray-600" />
              ) : (
                <IoIosArrowDown className="mt-1 w-10 h-5 text-gray-600" />
              )}
            </div>
            {isExpanded === "section1" && (
              <div className="">
                <p className="text-[#ff5200] text-[17px] mt-5 font-bold">
                  Partner with us
                </p>
                <button className="border pt-2.5 pl-5 pr-5 pb-2.5  text-[#ff5200] cursor-pointer text-[14px] mt-2 font-bold">
                  SEND AN EMAIL
                </button>
              </div>
            )}
            <div className="border border-gray-200 mt-6"></div>

            <div
              className="mt-4 flex justify-between mr-10 cursor-pointer"
              onClick={() =>
                setIsExpanded(isExpanded === "section2" ? null : "section2")
              }
            >
              <p
                className={`text-[20px] font-sans font-semibold ${
                  isExpanded === "section2" ? "text-[#ff5200]" : "text-gray-600"
                }`}
              >
                What are the mandatory documents needed to list my restaurant on
                Swiggy?
              </p>
              {isExpanded === "section2" ? (
                <IoIosArrowUp className="mt-1 w-10 h-5 text-gray-600" />
              ) : (
                <IoIosArrowDown className="mt-1 w-10 h-5 text-gray-600" />
              )}
            </div>
            {isExpanded === "section2" && (
              <p className="text-gray-700 text-[15px] mt-5  ">
                - Copies of the below documents are mandatory <br />
                - FSSAI Licence OR FSSAI Acknowledgement <br />
                - Pan Card <br />
                - GSTIN Certificate <br />
                - Cancelled Cheque Or bank Passbook <br />
                - Menu <br />
              </p>
            )}
            <div className="border border-gray-200 mt-6"></div>

            <div
              className="mt-4 flex justify-between mr-10 cursor-pointer"
              onClick={() =>
                setIsExpanded(isExpanded === "section3" ? null : "section3")
              }
            >
              <p
                className={`text-[20px] font-sans font-semibold ${
                  isExpanded === "section3" ? "text-[#ff5200]" : "text-gray-600"
                }`}
              >
                I want to opt-out from google reserve
              </p>
              {isExpanded === "section3" ? (
                <IoIosArrowUp className="mt-1 w-10 h-5 text-gray-600" />
              ) : (
                <IoIosArrowDown className="mt-1 w-10 h-5 text-gray-600" />
              )}
            </div>
            {isExpanded === "section3" && (
              <p className="text-[#ff5200] font-bold text-[17px] mt-5  ">
                Send an email
              </p>
            )}
            <div className="border border-gray-200 mt-6"></div>

            <div
              className="mt-4 flex justify-between mr-10 cursor-pointer"
              onClick={() =>
                setIsExpanded(isExpanded === "section4" ? null : "section4")
              }
            >
              <p
                className={`text-[20px] font-sans font-semibold ${
                  isExpanded === "section4" ? "text-[#ff5200]" : "text-gray-600"
                }`}
              >
                After I submit all documents, how long will it take for my
                restaurants to go live on Swiggy?
              </p>
              {isExpanded === "section4" ? (
                <IoIosArrowUp className="mt-1 w-10 h-5 text-gray-600" />
              ) : (
                <IoIosArrowDown className="mt-1 w-10 h-5 text-gray-600" />
              )}
            </div>
            {isExpanded === "section4" && (
              <p className="text-gray-600 text-[15px] mt-5  ">
                After all mandatory documents have been received and verified it
                takes upto 7-10 working days for the onboarding to be completed{" "}
                <br />
                and make your restaurant live on the platform.
              </p>
            )}
            <div className="border border-gray-200 mt-6"></div>

            <div
              className="mt-4 flex justify-between mr-10 cursor-pointer"
              onClick={() =>
                setIsExpanded(isExpanded === "section5" ? null : "section5")
              }
            >
              <p
                className={`text-[20px] font-sans font-semibold ${
                  isExpanded === "section5" ? "text-[#ff5200]" : "text-gray-600"
                }`}
              >
                What is this one time Onboarding fees? Do I have to pay for it?
              </p>
              {isExpanded === "section5" ? (
                <IoIosArrowUp className="mt-1 w-10 h-5 text-gray-600" />
              ) : (
                <IoIosArrowDown className="mt-1 w-10 h-5 text-gray-600" />
              )}
            </div>
            {isExpanded === "section5" && (
              <p className="text-gray-600 text-[15px] mt-5  ">
                This is a one-time fee charged towards the system & admin costs
                incurred during the onboarding process. <br /> It is deducted
                from the weekly payouts after you start receiving orders from
                Swiggy.
              </p>
            )}
            <div className="border border-gray-200 mt-6"></div>

            <div
              className="mt-4 flex justify-between mr-10 cursor-pointer"
              onClick={() =>
                setIsExpanded(isExpanded === "section6" ? null : "section6")
              }
            >
              <p
                className={`text-[20px] font-sans font-semibold ${
                  isExpanded === "section6" ? "text-[#ff5200]" : "text-gray-600"
                }`}
              >
                Who should I contact if I need to help & support in getting
                onboarded?
              </p>
              {isExpanded === "section6" ? (
                <IoIosArrowUp className="mt-1 w-10 h-5 text-gray-600" />
              ) : (
                <IoIosArrowDown className="mt-1 w-10 h-5 text-gray-600" />
              )}
            </div>
            {isExpanded === "section6" && (
              <div>
                <p className="text-gray-600 text-[15px] mt-5  ">
                  You can connect with Partner Support on 080-67466777/68179777
                  or write to partnersuport@swiggy.in
                </p>
                <button className="border pt-2.5 pl-5 pr-5 pb-2.5  text-[#ff5200] cursor-pointer text-[14px] mt-2 font-bold">
                  SEND AN EMAIL
                </button>
              </div>
            )}
            <div className="border border-gray-200 mt-6"></div>

            <div
              className="mt-4 flex justify-between mr-10 cursor-pointer"
              onClick={() =>
                setIsExpanded(isExpanded === "section7" ? null : "section7")
              }
            >
              <p
                className={`text-[20px] font-sans font-semibold ${
                  isExpanded === "section7" ? "text-[#ff5200]" : "text-gray-600"
                }`}
              >
                How much commission will I be charged by Swiggy?
              </p>
              {isExpanded === "section7" ? (
                <IoIosArrowUp className="mt-1 w-10 h-5 text-gray-600" />
              ) : (
                <IoIosArrowDown className="mt-1 w-10 h-5 text-gray-600" />
              )}
            </div>
            {isExpanded === "section7" && (
              <p className="text-gray-600 text-[15px] mt-5  ">
                The commission charges vary for different cities. You will be
                able to see the commission applicable for you once the
                preliminary <br /> onboarding details have been filled.
              </p>
            )}
            <div className="border border-gray-200 mt-6"></div>

            <div
              className="mt-4 flex justify-between mr-10 cursor-pointer"
              onClick={() =>
                setIsExpanded(isExpanded === "section8" ? null : "section8")
              }
            >
              <p
                className={`text-[20px] font-sans font-semibold ${
                  isExpanded === "section8" ? "text-[#ff5200]" : "text-gray-600"
                }`}
              >
                I don't have an FSSAI licence for my restaurant. Can it still be
                onboarded?
              </p>
              {isExpanded === "section8" ? (
                <IoIosArrowUp className="mt-1 w-10 h-5 text-gray-600" />
              ) : (
                <IoIosArrowDown className="mt-1 w-10 h-5 text-gray-600" />
              )}
            </div>
            {isExpanded === "section8" && (
              <p className="text-gray-600 text-[15px] mt-5  ">
                FSSAI licence is a mandatory requirement according to the
                government’s policies. However, if you are yet to receive the{" "}
                <br />
                licence at the time of onboarding, you can proceed with the
                acknowledgement number which you will have received from FSSAI{" "}
                <br />
                for your registration.
              </p>
            )}
            <div className="border border-gray-200 mt-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpSupport;
