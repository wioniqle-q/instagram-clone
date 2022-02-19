import React from 'react'

const UserTile = () => {
    return (<div className='w-full p-3 cursor-pointer hover:bg-gray-50'>
        <div className='flex items-center'>
            <img src='https://cdn.pixabay.com/photo/2021/02/27/16/25/woman-6055084__340.jpg'
                 className='w-16 h-16 rounded-full' alt='profil resmi'/>
            <div className='flex flex-col text-sm px-2'>
                    <span>
                        Kullanıcı Adı
                    </span>
                <span>
                      Son Mesaj
                    </span>

            </div>


        </div>
    </div>)
}

export default UserTile