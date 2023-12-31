import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, front, back, gitLink, gitLink2, vercel, vercel2 }) => {
  return (
    <div className="w-full min-h-[500px] p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              {
                gitLink2 ? (
                  <div className='flex items-center gap-[2px]'>
                    <a title='front-end' className='hover:contents' target='_blank' href={gitLink} rel="noreferrer">
                      <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <BsGithub />
                      </span>
                    </a>
                    <a title='backend' target='_blank' href={gitLink2} rel="noreferrer">
                      <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <BsGithub />
                      </span>
                    </a>
                  </div>
                ) : gitLink && (
                  <a target='_blank'  href={gitLink} rel="noreferrer">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <BsGithub />
                    </span>
                  </a>
                ) 
              
              }

{
                vercel2 ? (
                  <div className='flex items-center gap-[2px]'>
                    <a title='user' className='hover:contents' target='_blank' href={vercel} rel="noreferrer">
                      <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <FaGlobe />
                      </span>
                    </a>
                    <a title='admin' target='_blank' href={vercel2} rel="noreferrer">
                      <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <FaGlobe />
                      </span>
                    </a>
                  </div>
                ) : (
                  <a target='_blank'  href={vercel} rel="noreferrer">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <FaGlobe />
                    </span>
                  </a>
                )
              }
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
          {
            front &&
            <p className=" text-xs tracking-wide mt-3 hover:text-gray-100 duration-300">
              {front}
            </p>

          }
          {
            back &&
            <p className="text-xs tracking-wide mt-1 hover:text-gray-100 duration-300">
              {back}
            </p>

          }

        </div>
      </div>
    </div>
  );
}

export default ProjectsCard