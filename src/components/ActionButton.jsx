import React from 'react'

function ActionButton(prop) {
  return (
    <button className={`text-lg font-bold font-poppins mt-8  bg-primary-color p-3 rounded-xl shadow-sm ease-in-out duration-300 ${prop.class}`}>
        {prop.text}{prop.icons}
    </button>
  )
}

export default ActionButton
