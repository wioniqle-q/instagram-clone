import React from 'react'
import Posts from '../Posts/Posts'

const Profile = () => {
    return (
        <>

            <div className='my-7 max-w-3xl mx-auto'>
                <div className='w-full flex'>
                    <div className='w-1/3'>
                        <img src='https://cdn.pixabay.com/photo/2019/03/21/20/29/eyewear-4071870__340.jpg' alt="Hello"
                            className='rounded-full sm:w-48 sm:h-48 w-24 h-24  object-cover object-center'
                        />
                    </div>
                    <div className='pt-5 w-8/12'>
                        <div>
                            <span className='text-lg sm:text-2xl font-bold'>Kullanıcı Adı </span>
                        </div>
                    </div>
                </div>
            </div>
            <Posts />
        </>
    )
}

export default Profile