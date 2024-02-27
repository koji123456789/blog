import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Api = () => {
  var[user,setUsers]=useState([])
  useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
    console.log(response.data)
    setUsers(response.data)
  })})
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>TITLE</TableCell>
              <TableCell>BODY</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((val,i) =>{
              return(
                <TableRow>
                <TableCell key={i}>{val.id}</TableCell>
                <TableCell key={i}>{val.title}</TableCell>
                <TableCell key={i}>{val.body}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Api