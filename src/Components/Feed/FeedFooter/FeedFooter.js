import React from 'react'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { IconButton } from '@mui/material';
import FeedInput from '../FeedInput/FeedInput';
const FeedFooter = () => {
    return (
        <div className='bg-white p-3'>
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
            <FeedInput />
        </div>
    )
}

export default FeedFooter