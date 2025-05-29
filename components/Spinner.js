import React from 'react';
import Loader from '../public/loader.gif';
import Image from 'next/image';



const Spinner = ()=>{

    return (

        <>
        
        <Image className='w-[200] m-auto block' src={Loader} alt= 'loading..'/>
        
        </>


    )



}

export default Spinner