import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1Content = () => {
  return (
    <div className='py-10 flex item-center  gap-10  px-18 h-[90vh]'>
     <LeftContent />  
     <RightContent />
    </div>
  )
}

export default Page1Content