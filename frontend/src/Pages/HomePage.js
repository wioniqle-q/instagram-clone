import React from 'react'
import Feed from '../Components/Feed/Feed'
import SideBar from '../Components/SideBar/SideBar'
import Story from '../Components/Story/Story'

const HomePage = () => {
    return (
        <>
            <div>
                <div className="px-1">
                    <div className="flex  justify-between mt-10">
                        <div className="w-full md:w-3/4">
                            <Story />
                            <Feed />
                        </div>
                        <div className="hidden md:block md:w-1/4">
                            <SideBar />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default HomePage