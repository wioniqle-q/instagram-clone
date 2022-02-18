import React from 'react'

const StoryItem = () => {
    return (
        <div className='flex flex-col justify-center p-4'>
            <img src='https://cdn.pixabay.com/photo/2019/03/21/20/29/eyewear-4071870__340.jpg'
            alt='resim' className='rounded-full object-cover w-16 h-16' />
            <span className='text-xs pt-2'>Kullanıcı ismi</span>
        </div>
    )
}

export default StoryItem