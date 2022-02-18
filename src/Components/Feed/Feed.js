import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { IconButton } from '@mui/material';


const Feed = () => {
  return (
    <div className='my-5 w-full'>
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
      <img
        src='https://cdn.pixabay.com/photo/2017/10/17/05/17/panda-2859555__340.jpg'
        alt='panda'
        className='w-full object-cover max-h-screen'
      />

      <div className='bg-white'>
        <div className='flex justify-between'>
          <div>
            <IconButton>
              <FavoriteBorderRoundedIcon />
            </IconButton>
            <IconButton>
              <ChatBubbleOutlineOutlinedIcon />
            </IconButton>
            <IconButton>
              <SendOutlinedIcon />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <BookmarkBorderOutlinedIcon />
            </IconButton>
          </div>
        </div>
        <div className='flex justify-between mt-5 p-3'>
          <input  placeholder='Yorum yaz ...' className='w-full outline-none'/>
          <span className='px-3 cursor-pointer text-blue-700'>
            Paylaş
          </span>
        </div>
      </div>
    </div>
  )
}

export default Feed