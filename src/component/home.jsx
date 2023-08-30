
import { Grid, Typography, Button } from '@mui/material'
import React from 'react'
import {useDispatch, useSelector} from "react-redux"

export default function Home() {
  const {number} = useSelector((state) => state.custom)
  const dispatch  =  useDispatch()
  const addBtn = () =>{
    dispatch ({
      type: 'increment'
    })
  }
  const sub = () =>{
    dispatch ({
      type: 'decrement'
    })
  }
  return (
    <Grid sx={{
      height: "100vh",
      width: "100wh",
     
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      margin: "0px",

    }}>
      <Typography sx={{ fontSize: "24px", }}>
       {number}
      </Typography>
      <Grid>
        <Button
        onClick={addBtn}
         >increment
        </Button>
        <Button
        onClick={sub}
        >
          decrement
        </Button>
      </Grid>
    </Grid>

  )
}

