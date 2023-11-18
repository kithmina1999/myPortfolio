import React from 'react'
import ActionButton from '../components/ActionButton'

function Home() {
  return (
    <section className='min-h-[100vh]' id='home' >
      <div className='container mx-auto  flex lg:justify-center lg:gap-16 lg:pt-[35vh] md:pt-[15vh] pt-[15vh] items-center flex-col-reverse lg:flex-row'>
        <div className='p-5 items-center text-center lg:text-left'>
            <h1 className='md:text-5xl font-poppins mb-6 text-color-gradient lg:text-6xl text-4xl'>Kithmina<br className='lg:hidden'/> <span className='lg:text-5xl md:text-3xl text-2xl'>Kanchana</span></h1>
            <p className='font-bold mb-2 '>--Web Developer</p>
            <p className='text-sm font-thin mt-2'>I'm a web developer based in Rathnapura, Sri Lanka <br/>
            and I'm very dedicated and hard working for my work</p>
            <ActionButton class="text-white hover:bg-secondory-color hover:text-black" text="Say Hello &nbsp;&nbsp;" icons={<i className='bx bxl-telegram'></i>} /> 
            
            <div className='p-3 mt-3 '>
                <ul className='flex lg:flex-row gap-4 text-xl justify-center lg:justify-start'>
                    <li><a><i className='bx bxl-github text-primary-color hover:text-white rounded-full hover:bg-primary-color p-1'></i></a></li>
                    <li><a><i className='bx bxl-linkedin text-primary-color  hover:text-white rounded-full hover:bg-primary-color p-1'></i></a></li>
                </ul>
            </div>
        </div>
        <img src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"  className='rounded-full lg:w-[300px] md:w-[220px] w-[150px] '/>
      </div>
      
    </section>
  )
}

export default Home
