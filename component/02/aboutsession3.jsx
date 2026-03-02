import React, { useEffect, useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { motion, AnimatePresence } from "framer-motion";


function Aboutsession3() {

   const titles = [
      "Tax Research for Achieving Financial Mastery in the Building Construction Sector",

      "Strategic Tax Compliance for Promoting Transparency and Accountability in Construction Projects",

      "Effective Tax Planning for Strengthening Financial Control in the Construction Industry",

      "Advanced Tax Research Strategies for Sustainable Financial Mastery in Construction Enterprises"
   ];

   const descriptions = [
    `This analysis focuses on integrating tax intelligence into financial decision-making in the construction sector.
     It evaluates how accurate tax forecasting, deductible expense identification, and compliance monitoring contribute
     to stronger financial performance in building projects. Moreover, it underlines the value of tax awareness in safeguarding
     profits, supporting strategic investment decisions, and ensuring sustainable development within the construction industry.`,
    
    `This study highlights the role of tax compliance in enhancing transparency and accountability within construction enterprises.
     It explores regulatory requirements, VAT implications, payroll taxation, and corporate income tax responsibilities that influence
     operational efficiency in construction projects. Furthermore, it demonstrates how proactive tax research enables construction 
     firms to avoid penalties, optimize financial planning, and maintain long-term economic stability.`,
    
    `This research examines how structured tax planning strengthens financial control in the building construction industry.
     It analyzes tax obligations related to construction materials, labor costs, equipment procurement, and subcontracting 
     services that directly impact project budgets and profitability. Additionally, it emphasizes how strategic tax management
     reduces financial risks, improves cash flow efficiency, and supports sustainable growth for contractors, engineers, and property developers`,
    
    `This study explores how effective tax research contributes to financial mastery within the building construction sector.
      It focuses on understanding tax laws, compliance requirements, allowable deductions, and financial planning strategies that 
      directly affect construction companies, contractors, engineers, and developers. Also, 
      it highlights the importance of tax research in optimizing financial performance, minimizing tax liabilities, and ensuring 
      long-term sustainability in the construction industry.`
  ];
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % descriptions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);
  return (
    <div className='flex flex-col items-center justify-center bg-[#383635] p-6 md:p-20 rounded-3xl'>
      {/* Main grid container centered */}
      <div className='flex flex-col md:flex-row mx-auto max-w-5xl w-full gap-5'>
        
        {/* LEFT SIDE */}
        <div className="flex flex-col bg-red-200 gap-4 w-full md:w-2/3 h-auto md:h-125 rounded-xl p-5"
          style={{
            backgroundImage: 'url(/assert/tax_services.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
           <div className='mt-10 md:mt-80 bg-[#383635]/80 backdrop-blur-lg border border-white/20 rounded-2xl md:p-5 p-3 shadow-2xl shadow-black/20'>
              <FaQuoteRight className='text-white/90 mb-4' />
              <h1 className='font-bold text-white tracking-tight text-xl md:text-2xl'>
                Tax Research for <br />
                Financial Mastery
              </h1>
           </div>
        </div>
    
        {/* RIGHT SIDE */}
        <div className='relative cursor-pointer w-full md:w-2/2 h-90 md:h-auto rounded-xl flex items-center justify-center p-4 text-center md:text-left'
          style={{
            backgroundImage: 'url(/assert/tax_research.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
          <div className="absolute inset-0 bg-[#383635]/55 backdrop rounded-xl p-5 shadow-2xl shadow-black/20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                 >
                  <h1 className="text-white md:text-3xl text-xl font-bold md:my-5 my-3">
                    {titles[index]}
                  </h1>

                  <p className="text-white text-sm md:text-base md:my-5 my-3">
                    {descriptions[index]}
                  </p>
                </motion.div>
              </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Aboutsession3