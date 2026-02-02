import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaStarHalfAlt } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

function Aboutsession4() {
  const teamMembers = [
    {
      id: 1,
      name: "Chris Dev",
      role: "Tax Expert",
      imageColor: "bg-amber-200", // You can replace with actual image URL
      socials: [
        { icon: <FaInstagram />, color: "hover:bg-pink-100" },
        { icon: <FaFacebookF />, color: "hover:bg-blue-100" },
        { icon: <FaLinkedinIn />, color: "hover:bg-blue-200" }
      ]
    },
    {
      id: 2,
      name: "Alex Morgan",
      role: "Finance Advisor",
      imageColor: "bg-blue-200",
      socials: [
        { icon: <FaInstagram />, color: "hover:bg-pink-100" },
        { icon: <FaFacebookF />, color: "hover:bg-blue-100" },
        { icon: <FaLinkedinIn />, color: "hover:bg-blue-200" }
      ]
    },
    {
      id: 3,
      name: "Taylor Smith",
      role: "Tax Consultant",
      imageColor: "bg-purple-200",
      socials: [
        { icon: <FaInstagram />, color: "hover:bg-pink-100" },
        { icon: <FaFacebookF />, color: "hover:bg-blue-100" },
        { icon: <FaLinkedinIn />, color: "hover:bg-blue-200" }
      ]
    }
  ]

  return (
    <div className='flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>

      <div className='flex flex-col md:flex-row mx-auto max-w-5xl w-full gap-8 mb-12'>
        <div className='md:w-1/2'>
          <h2 className='mb-10 flex items-center justify-center md:justify-start gap-2 text-[#5e5f61] text-sm md:text-base'>
            <FaStarHalfAlt className='w-4 h-4 md:w-5 md:h-5 text-[#ffd061]'/> 
            ABOUT US 
            <FaStarHalfAlt className='w-4 h-4 md:w-5 md:h-5 text-[#ffd061]'/>
          </h2>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left'>
            Meet Our Professional Team
          </h1>
        </div>

        <div className='md:w-1/2 flex flex-col items-center md:items-start'>
          <p className='mb-4 text-[#5e5f61] text-sm sm:text-base md:text-ms text-center md:text-left max-w-md'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Sapiente incidunt quisquam nobis deleniti?
          </p>
          <button className='bg-[#ffd061] hover:bg-[#f5c84a] cursor-pointer text-black flex items-center gap-4 px-4 sm:px-6 py-1 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-300'>
            VIEW MORE
            <span className='bg-[#383635] inline-block p-1.5 rounded-md'>
              <FiArrowUpRight className='text-white w-4 h-4 sm:w-5 sm:h-5' />
            </span>
          </button>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-auto max-w-5xl w-full mb-16'>
        {teamMembers.map((member) => (
          <div key={member.id} className='group relative'>
            {/* Image/Color Placeholder */}
            <div className={`${member.imageColor} rounded-lg h-64 md:h-72 w-full mb-4 transition-transform duration-300 group-hover:scale-105`}>
              {/* You can replace this with an actual image */}
              <div className='h-full w-full flex items-center justify-center'>
                <span className='text-gray-700 text-lg font-medium'>Team Member Photo</span>
              </div>
            </div>

            {/* Glass Effect Info Card */}
            <div className='absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-5/6 bg-[#383635]/90 backdrop-blur-lg border border-white/20 rounded-xl p-3 md:p-4 shadow-2xl shadow-black/20'>
              <div className='flex flex-col'>
                <h3 className='text-lg md:text-xl font-bold text-white mb-1'>
                  {member.name}
                </h3>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-300 text-sm md:text-base'>
                    {member.role}
                  </span>
                  <div className='flex gap-2'>
                    {member.socials.map((social, index) => (
                      <span 
                        key={index}
                        className='p-1.5 md:p-2 rounded-full bg-white/90 cursor-pointer transition-all duration-300 hover:scale-110'
                      >
                        {social.icon}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Aboutsession4