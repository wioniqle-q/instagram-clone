import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Icons = () => {
  return (
    <div className='flex items-center'>
      <IconButton>
        <HomeIcon />
      </IconButton>
      <IconButton>
        <MapsUgcOutlinedIcon />
      </IconButton>
      <IconButton>
        <AddCircleOutlineOutlinedIcon />
      </IconButton>
      <IconButton>
        <ExploreOutlinedIcon />
      </IconButton>
      <IconButton>
        <FavoriteBorderOutlinedIcon />
      </IconButton>
      <IconButton>
        <AccountCircleIcon />
      </IconButton>
    </div>
  )
}

export default Icons