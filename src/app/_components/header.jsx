import React from 'react'

function Header() {
  return (
    <>
    <div className='h-[75px] relative'></div>
    <div className='w-full bg-white p-5 flex flex-row items-center justify-center fixed inset-0 z-[100] h-[75px] bg-neutral-100/[0.4]'>
        <h1 className='font-bold text-2xl '>usatii's web resume.</h1>
    </div>
    </>
  )
}

export default Header