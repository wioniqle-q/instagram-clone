import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
const Icons = () => {
  return (
    <div className='flex items-center'>
      <Link to={"/"}>
        <IconButton>
          <HomeIcon />
        </IconButton>
      </Link>
      <Link to={"/message"}>
      <IconButton>
        <MapsUgcOutlinedIcon />
      </IconButton>
      </Link>
      <IconButton>
        <AddCircleOutlineOutlinedIcon />
      </IconButton>
      <Link to={"/explore"}>
      <IconButton>
        <ExploreOutlinedIcon />
      </IconButton>
      </Link>
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