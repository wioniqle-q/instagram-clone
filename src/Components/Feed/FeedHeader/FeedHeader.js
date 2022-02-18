import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const FeedHeader = () => {
    return (
        <div className='flex items-center justify-between p-3 border bg-white'>
            <div className='flex items-center'>
                <img src='https://cdn.pixabay.com/photo/2019/03/21/20/29/eyewear-4071870__340.jpg'
                    alt='resim' className='rounded-full object-cover w-11 h-11' />
                <span className='text-xs font-semibold px-2'>Kullanıcı ismi</span>
            </div>
            <div>
                <MoreHorizIcon />
            </div>

        </div>
    )
}

export default FeedHeader