import React from 'react'
import Skill from '../components/Skill'

function Skills() {
  return (
    <section id='skills'>
        <div className='min-h-[100vh]  md:pb-0'>

        <div className='text-center py-5 pb-20 pt-[25vh] '>
            <h1 className='font-bold font-poppins text-4xl'>Skills</h1>
            <p>Things that I'm good at</p>
        </div>
        <div className='max-w-7xl mx-auto lg:mt-16'>


        <div className='grid md:grid-cols-3 lg:gap-10 md:gap-3 text-center flex-col md:flex-none'>
                <div className="grid grid-flow-row auto-rows-max gap-10 ">
                <p className='text-center mb-5 font-semibold'>Front-End</p>
                <Skill skillName="Html" percentage="w-[40%]" />
                <Skill skillName="CSS" percentage="w-[40%]" />
                <Skill skillName="JavaScript" percentage="w-[40%]" />
                <Skill skillName="PHP" percentage="w-[40%]" />
                </div>
                <div className="grid grid-flow-row auto-rows-max gap-10 mt-10 md:mt-0">
                <p className='text-center mb-5 font-semibold'>Back-End</p>
                <Skill skillName="React" percentage="w-[40%]" />
                <Skill skillName="NodeJs" percentage="w-[40%]" />
                <Skill skillName="ExpressJs" percentage="w-[40%]" />
                <Skill skillName="SQL" percentage="w-[40%]" />
                </div>
                <div className="grid grid-flow-row auto-rows-max gap-10 mt-10 md:mt-0">
                <p className='text-center mb-5 font-semibold'>Database Management</p>
                <Skill skillName="React" percentage="w-[40%]" />
                <Skill skillName="NodeJs" percentage="w-[40%]" />
                <Skill skillName="ExpressJs" percentage="w-[40%]" /> 
                <Skill skillName="NoSQL" percentage="w-[40%]" />    
                </div>
        </div>
        </div>
        
    </div>
    </section>
    
  )
}

export default Skills
