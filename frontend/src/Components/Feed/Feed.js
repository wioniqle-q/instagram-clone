import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { IconButton } from '@mui/material';
import { Link, useParams } from 'react-router-dom';


const Feed = () => {
  const { userName } = useParams();
  return (
    <div className='my-3 w-full'>
      <div className='flex items-center justify-between p-3 border bg-white'>
        <div className='flex items-center'>
          <img src='https://cdn.pixabay.com/photo/2019/03/21/20/29/eyewear-4071870__340.jpg'
            alt='resim' className='rounded-full object-cover w-11 h-11' />
          <Link to={`${userName}`} className='text-xs font-semibold px-2'>Kullanıcı ismi</Link>
        </div>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
      <img
        src='https://cdn.pixabay.com/photo/2017/10/17/05/17/panda-2859555__340.jpg'
        alt='panda'
        className='w-full object-cover'
      />

      <div className='bg-white'>
        <div className='flex justify-between py-4'>
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
        <div className='flex justify-between items-center mt-5 p-3'>
          <IconButton>
            <SentimentSatisfiedAltIcon />
          </IconButton>
          <input placeholder='Yorum yaz ...' className='w-full outline-none p-4' />
          <span className='px-2 cursor-pointer text-blue-700'>
            Paylaş
          </span>
        </div>
      </div>
    </div>

  )
}

export default Feed