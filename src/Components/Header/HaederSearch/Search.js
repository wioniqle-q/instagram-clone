import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

const Search = () => {
  return (
    <div className='border items-center rounded-md bg-gray-100 hidden  sm:block' >
      <IconButton>
        <SearchIcon />
      </IconButton>
        <input placeholder='Ara' className='outline-none bg-gray-100'/>
    </div>
  )
}

export default Search