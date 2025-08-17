import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-grow  gap-5 p-5 flex-wrap'>
        <div className='bg-purple-500 text-center p-5 rounded-xl flex-grow'>
            <h2 className='text-4xl font-bold'>23</h2>
            <h4 className='text-xl'>Chennai</h4>
        </div>
        <div className='bg-orange-500 text-center p-5 rounded-xl flex-grow'>
            <h2 className='text-4xl font-bold'>August</h2>
            <h4 className='text-xl'>16/08/2025</h4>
        </div>
        <div className='bg-green-500 text-center p-5 rounded-xl flex-grow'>
            <h2 className='text-4xl font-bold'>Built Using</h2>
            <h4 className='text-xl'>React</h4>
        </div>
      
    </div>
  )
}

export default Card
