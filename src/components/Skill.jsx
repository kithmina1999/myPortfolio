import React from 'react'

function Skill(prop) {
        
  return (
    <div className='flex items-center gap-4 justify-center'>
        <p>{prop.skillName}</p>
        <div className="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className={`bg-accent h-2.5 rounded-full ${prop.percentage}` }></div>
        </div>
    </div>
    
  )
}

export default Skill
