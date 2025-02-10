import { useState } from "react";
import { faqData } from "../constant/data";
import faqElicp from "../assets/FAQ/images/faqRightElipc.webp"


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

      <div className="container mx-auto flex flex-col gap-4 max-sm:px-5 sm:px-12 lg:px-20 py-10">
        <h2 className=" text-center">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="px-[20%] flex flex-col gap-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-2 faq-border border-muted  py-5 px-2  cursor-pointer"
              onClick={() => handleFAQ(index)
              }
            >
              <div className="flex gap-3 items-center  rounded-md px-2">
                <span>
                  {openAccord === index ? "-" : "+"}
                </span>
                <h4 className="font-secondary">{item.question}</h4>
              </div>
              {openAccord === index && (
                <div>
                  <h6 className="font-secondary line-height-l text-light py-1 px-6">{item.answer}</h6>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <img src={faqElicp} alt="" className="absolute right-0 top-0 size-120 max-lg:size-94"/>
    </div>
  );
};

export default FAQ;