import React from 'react'

const Posts = () => {
    return (
        <div className='border-t p-5'>
            <div className='flex justify-evenly items-center text-xs'>
                <span>
                    POSTS
                </span>
                <span>
                    VIDEOS
                </span>
                <span>
                    SAVED
                </span>
                <span>
                    TAGGED
                </span>
            </div>
            <div className='pt-5 flex flex-wrap'>

                <img src='https://cdn.pixabay.com/photo/2022/02/15/07/27/travel-7014427_960_720.jpg' alt='resim'
                    className='w-1/3 p-2  object-cover'
                />
                <img src='http://cdn.webtekno.com/custom/images/panaromik/hd-wallpapers-animals-technology-cat.jpg' alt='resim'
                    className='w-1/3 p-2  object-cover '
                />
                <img src='https://cdn.pixabay.com/photo/2022/02/15/07/27/travel-7014427_960_720.jpg' alt='resim'
                    className='w-1/3 p-2  object-cover'
                />
                <img src='https://cdn.pixabay.com/photo/2022/02/15/07/27/travel-7014427_960_720.jpg' alt='resim'
                    className='w-1/3 p-2  object-cover'
                />
                <img src='https://cdn.pixabay.com/photo/2022/02/15/07/27/travel-7014427_960_720.jpg' alt='resim'
                    className='w-1/3 p-2  object-cover'
                />

                <img src='https://cdn.pixabay.com/photo/2022/02/15/07/27/travel-7014427_960_720.jpg' alt='resim'
                    className='w-1/3 p-2  object-cover'
                />
            </div>
        </div>
    )
}

export default Posts