import React from 'react'
import ActionButton from '../components/ActionButton'

function AboutUs() {
  return (
    <section id='about'>
      <div className='min-h-[100vh]'>
    <div className='text-center py-5 pb-20 pt-[25vh]'>
        <h1 className='font-bold font-poppins text-4xl'>About Me</h1>
    <p>My Introduction</p>
    </div>
    

      <div className='flex  md:justify-center lg:gap-32 md:gap-24 flex-col md:flex-row items-center md:items-stretch gap-10'>
            <div>
            <img src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"  className='rounded-lg lg:w-[300px] md:w-[220px] w-[150px] '/>
            </div>
            <div className='text-left'>
                <div className='grid grid-cols-3 gap-6 mb-6'>
                  <div className='flex flex-col items-center text-center bg-slate-200 rounded-xl drop-shadow-sm p-3'>
                    <img src='src/assets/exp.png' className='w-16' />
                    <p className='text-sm'>2 years+ <br/>experiences..</p>
                  </div>
                  <div className='flex flex-col items-center text-center bg-slate-200 rounded-xl drop-shadow-sm p-3'>
                    <img src='src/assets/english.png' className='w-16' />
                    <p className='text-sm'>fluent English</p>
                  </div>
                  <div className='flex flex-col items-center text-center bg-slate-200 rounded-xl drop-shadow-sm p-3'>
                    <img src='src/assets/exp.png' className='w-16' />
                    <p className='text-sm'>2 years+ <br/>experiences..</p>
                  </div>
                </div>

                <p className='text-lg'>I'm <span className='font-semibold'>Kithmina Kanchana</span> </p>
                <p> </p>
                <a href="path_to_file" download="proposed_file_name">
                <ActionButton class="text-white hover:bg-secondory-color hover:text-black text-base" text="Download CV &nbsp;&nbsp;" icons={<i className='bx bxs-download' ></i>}/>
                </a>
            </div>
      </div>
    </div>
    </section>
    
  )
}

export default AboutUs
