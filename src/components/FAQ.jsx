import { useState } from "react";
import { faqData } from "../constant/data";
import faqElicp from "../assets/FAQ/images/faqRightElipc.webp"
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
const FAQ = () => {
  const [openAccord, setOpenAccord] = useState(null);

  const handleFAQ = (index) => {
    if (openAccord === index) {
      setOpenAccord(null);
    } else {
      setOpenAccord(index);
    }
  };
  return (
    <div className="flex justify-center relative">

      <div className="container mx-auto flex flex-col gap-4 max-sm:px-5 sm:px-12 lg:px-20 py-10 relative z-50">
        <h2 className=" text-center font-bold uppercase">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="px-[20%] flex flex-col gap-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-2 faq-border border-muted py-5 px-2  cursor-pointer"
              onClick={() => handleFAQ(index)
              }
            >
              <div className="flex gap-3 items-center  rounded-md px-2">
                <div className="text-2xl flex items-center gap-2 w-full ">
                  {openAccord === index ?

                    <div className=" bg-[#FFD9D9] gap-4  flex items-center w-full rounded-md py-2 px-2 opacity-90">
                      <RiSubtractLine />
                      <h4 className="font-secondary w-full rounded-md font-semibold text-secondary">{item.question}</h4>
                    </div>

                    :
                    <div className="flex gap-4 px-2">
                      <IoMdAdd />
                      <h4 className="font-secondary font-semibold text-secondary">{item.question}</h4>
                    </div>
                  }
                </div>

              </div>
              {openAccord === index && (
                <div>
                  <h6 className="font-secondary line-height-l text-light py-3 px-6">{item.answer}</h6>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <img src={faqElicp} alt="" className="absolute right-0 top-0 size-120 max-lg:size-94 max-sm:hidden" />
    </div>
  );
};

export default FAQ;