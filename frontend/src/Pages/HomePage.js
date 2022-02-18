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
                        <div className="w-full sm:w-3/4">
                            <Story />
                            <Feed />
                        </div>
                        <div className="hidden sm:block sm:w-1/4">
                            <SideBar />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default HomePage