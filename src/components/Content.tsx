import React from 'react';
import ImageOne from '../images/image_1.jpeg';
import ImageTwo from '../images/image_2.jpeg';


const Content = () => {
  return <>
  <div className='menu-card'>

<img src={ImageOne} alt="pizza1" className='h-full rounded mb-20 shadow' />
<div className='flex flex-col justify-center items-center'>

  <h2 className='text-2xl mb-2' >Neopolitan Pizza</h2>
  <p className='mb-2'>The Best Made with Cheeseeeeeeeee</p>
  <span>₹ 400 (Inclusive of my property)</span>

</div>

</div>

<div className='menu-card'>

    <img src={ImageTwo} alt="pizza1" className='h-full w-[600px] rounded mb-20 shadow' />
    <div className='flex flex-col justify-center items-center'>

      <h2 className='text-2xl mb-2' >The New York Pizza </h2>
      <p className='mb-2 p-5'>This is the Budget One if you want to become fat</p>
      <span>$1 (Go to New York)</span>

    </div>

  </div>
  </>;
};

export default Content;
