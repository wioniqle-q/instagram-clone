import React from 'react'
import DefaultMessage from '../DefaultMessage/DefaultMessage'
import Messanger from '../Messanger/Messanger'
import UserTile from '../UserTile/UserTile'
const Messages = () => {
    return (
        <div className='my-2 h-[90vh]  bg-white border'>
            <div className='flex h-full'>
                <div className='w-2/5 border-r overflow-auto'>
                    <div className='flex justify-center py-5 h-16 border-b '>
                        Kullanıcı Adı
                    </div>
                    <UserTile />
                </div>
                <div className='w-3/5 relative'>
                    {/* <DefaultMessage /> */}
                    <Messanger />
                </div>
            </div>


        </div>
    )
}

export default Messages