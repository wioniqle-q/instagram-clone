import React from 'react'
import FeedBody from './FeedBody/FeedBody'
import FeedFooter from './FeedFooter/FeedFooter'
import FeedHeader from './FeedHeader/FeedHeader'

const Feed = () => {
  return (
    <div className='my-5'>
      <FeedHeader />
      <FeedBody />
      <FeedFooter />
    </div>
  )
}

export default Feed