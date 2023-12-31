import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
const Fields = ({name,email,index}) => {
  return (
    <div className="dataval">
        <h4>{name}</h4>
        <h4>{email}</h4>
        <Button variant="outlined" color="error">
            <DeleteIcon/>
        </Button>
    </div>
  )
}

export default Fields
