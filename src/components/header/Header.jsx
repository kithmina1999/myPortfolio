import React, { useEffect, useState } from 'react'


export default function Header() {

  const [showSidebar, setShowSidebar] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

const currentScrollPos = window.scrollY;
  const handleScroll = () => {
   
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < prevScrollPos);

   
    setPrevScrollPos(currentScrollPos);
  };

  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);
  

  return (
    <div className={`hover:bg-bg-color lg:py-4 md:py-3 py-1 shadow-sm  fixed w-full ${ visible ? "visible" : "hidden"} ${currentScrollPos < prevScrollPos && "bg-bg-color" }`}>
        <header className=' p-1'>
          <nav className='flex lg:justify-between container mx-auto justify-around'>
            <a href='/' className='text-txt-color font-poppins font-bold ms-4  text-lg'>Kithmina</a>
            <div className='text-txt-color font-poppins text-base font-semibold'>
                <ul className='flex gap-8 invisible lg:visible'>
                  <li className=''>
                        <a href='#home' className='hover:text-accent'>
                        <i className='uil uil-estate mr-1'></i>
                            Home
                        </a>
                  </li>
                  <li className=''>
                        <a href='#about'>
                        <i className='uil uil-user mr-1'></i>
                            About
                        </a>
                  </li>
                  <li className=''>
                        <a href='#skills'>
                        <i className='uil uil-file-alt mr-1'></i>
                            Skills
                        </a>
                  </li>
                  <li className=''>
                        <a href='#portfolio'>
                        <i className='uil uil-scenery mr-1'></i>
                            Portfolio
                        </a>
                  </li>
                  <li className=''>
                        <a href='#contact'>
                        <i className='uil uil-message mr-1'></i>
                            Contact
                        </a>
                  </li>
                </ul>
                
            </div>

            <div className='lg:hidden'>
            {showSidebar ? 
            (
              <button  onClick={()=>setShowSidebar(!showSidebar)} className='z-50'>
               <i className='uil uil-times font-bold text-xl'></i> 
              </button>
            ):(
              <button onClick={()=>setShowSidebar(!showSidebar)} className='z-50'>
               <i className='uil uil-apps font-bold'></i> 
              </button>
            )}
              
              
              
            </div>
          </nav>  
          
          
          

      </header>

      {/* nav panel */}

      <div className={`top-20 h-[75vh] right-0 w-[35vw] rounded-lg bg-secondory-color  sm:p-10 bg-opacity-95 text-txt-color fixed  lg:hidden z-40 ease-in-out duration-300 ${
            showSidebar ? "-translate-x-5 " : "translate-x-full"} shadow-md`}>
      <div className='ms-5 sm:ms-0 sm:text-center text-left  mt-10'>
                    <p className='text-2xl font-extrabold mb-12'>Content</p>
                    <ul className='flex flex-col gap-6 '>
                    <li className=''>
                              <a href='#home' className='hover:text-accent'>
                              <i className='uil uil-estate mr-1'></i>
                                  Home
                              </a>
                        </li>
                        <li className=''>
                              <a href='#about' className='hover:text-accent'>
                              <i className='uil uil-user mr-1 '></i>
                                  About
                              </a>
                        </li>
                        <li className=''>
                              <a href='#skills' className='hover:text-accent'>
                              <i className='uil uil-file-alt mr-1'></i>
                                  Skills
                              </a>
                        </li>
                        <li className=''>
                              <a href='#portfolio' className='hover:text-accent'>
                              <i className='uil uil-scenery mr-1'></i>
                                  Portfolio
                              </a>
                        </li>
                        <li className=''>
                              <a href='#contact' className='hover:text-accent'>
                              <i className='uil uil-message mr-1'></i>
                                  Contact
                              </a>
                        </li>
                    </ul>
                  </div>
      </div>
    </div>
    
  )
}


