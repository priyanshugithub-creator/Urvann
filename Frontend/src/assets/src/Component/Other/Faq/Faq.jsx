import React, { useState } from "react";

const faqData = [
  {
    question: "What is your return policy?",
    answer: "You can return any item within 30 days of purchase.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries around the world.",
  },
  {
    question: "How can I track my order?",
    answer: "Once shipped, you will receive a tracking number via email.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="px-20 py-10">
      <h1 className="popular-categories-title text-center mt-10">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <div className="space-y-3">
        {faqData.map((faq, index) => {
          const isOpen = index === activeIndex;
          return (
            <div key={index}>
              {/* Question box */}
              <div className="border border-gray-300 shadow-sm px-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-left py-5 text-sm font-semibold">
                    {faq.question}
                  </span>
                  <span className="relative w-5 h-5">
                    <span className="absolute top-1/2 left-0 w-5 h-0.5 bg-black transform -translate-y-1/2" />
                    <span
                      className={`absolute left-[47%] top-0 w-0.5 h-5 bg-black origin-center transform transition-all duration-300 ease-in-out ${
                        isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                      }`}
                    />
                  </span>
                </button>
              </div>

              {/* Answer box with smooth transition */}
              <div
                id={`faq-answer-${index}`}
                className={`grid transition-all duration-300 px-4 ${
                  isOpen ? "grid-rows-[1fr] py-2" : "grid-rows-[0fr] py-0"
                } overflow-hidden`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-600 py-5">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
