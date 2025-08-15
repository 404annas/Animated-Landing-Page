import React from 'react';

const Testimonials = () => {
  return <div className='pb-20 px-10 bg-[#FEFCF6]'>
    <h1 className="text-center text-black uppercase inter">Happy Clients</h1>
    <h1 className='text-center leading-none text-[#25211D] text-[240px] uppercase mor-n pt-10'>TESTIMONIALS</h1>

    <div className='flex items-center justify-between gap-10 pt-10 px-10'>
      <div className='flex items-start flex-col gap-10 leading-none border border-[#D2D1CB] px-8 py-10'>
        <img loading='lazy' className='w-36' src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68516188ef1e08a08cb7adc8_Delaware.svg" alt="Logo 1" />
        <p className='inter text-[#34302B] text-lg leading-none'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
        <div className='flex items-center gap-3 mt-2'>
          <img loading='lazy' className='w-14 rounded-full border border-gray-400 p-1' src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f938e7a3d5099ea301a_client-03.jpg" alt="Client 1" />
          <div className='flex flex-col gap-3'>
            <h1 className='text-[#25211D] inter font-bold'>Liam Cole</h1>
            <p className='text-[#6F6B61] inter'>CEO</p>
          </div>
        </div>
      </div>

      <div className='flex items-start flex-col gap-10 leading-none border border-[#D2D1CB] px-8 py-11'>
        <img loading='lazy' className='w-40' src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/6851618899fe0f81f09d8dc6_Amsterdam.svg" alt="Logo 2" />
        <p className='inter text-[#34302B] text-lg leading-none'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
        <div className='flex items-center gap-3 mt-2'>
          <img loading='lazy' className='w-14 rounded-full border border-gray-400 p-1' src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f94cf01c11437c2fd63_client-06.jpg" alt="Client 2" />
          <div className='flex flex-col gap-3'>
            <h1 className='text-[#25211D] inter font-bold'>Emma Gray</h1>
            <p className='text-[#6F6B61] inter'>CEO</p>
          </div>
        </div>
      </div>

      <div className='flex items-start flex-col gap-10 leading-none border border-[#D2D1CB] px-8 py-11'>
        <img loading='lazy' className='w-36' src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/6851619fb9d10aebcce79c0d_Sweden.svg" alt="Logo 3" />
        <p className='inter text-[#34302B] text-lg leading-none'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
        <div className='flex items-center gap-3 mt-2'>
          <img loading='lazy' className='w-14 rounded-full border border-gray-400 p-1' src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f93df486cfbc577c5bf_client-02.jpg" alt="Client 3" />
          <div className='flex flex-col gap-3'>
            <h1 className='text-[#25211D] inter font-bold'>Emily Hill</h1>
            <p className='text-[#6F6B61] inter'>CEO</p>
          </div>
        </div>
      </div>

    </div>
  </div>;
};

export default Testimonials;
