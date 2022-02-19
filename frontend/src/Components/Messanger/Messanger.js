import React from 'react'
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import { IconButton } from '@mui/material';
const Messanger = () => {
    return (
        <>
            <div className='h-16 p-3 border-b '>
                <div className='flex '>
                    <div>
                        <img src='https://picsum.photos/200/300' className='w-11 h-11 object-cover rounded-full' alt='' />
                    </div>
                    <span className='text-xs font-semibold px-2'>kullanıcı Adı </span>
                </div>
            </div>
            <div>
                <div className='absolute w-full bottom-0 p-5'>
                    <div className='w-full p-1 rounded-full border items-center flex'>
                        <IconButton>
                            <SentimentSatisfiedAltOutlinedIcon />
                        </IconButton>
                        <input className='outline-none' placeholder='Mesaj yaz...' />
                    </div>


                </div>

            </div>

        </>
    )
}

export default Messanger