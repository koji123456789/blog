import { AppBar, Button, Toolbar, Typography} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div sx={{flexGrow:1}}  >
        <AppBar position='static'>
            <Toolbar>
                <Typography sx={{flexGrow:1}} align='left' variant='h6'>BLOG</Typography>
                    <Button   >
                    <Link to='/s' style={{color:'white'}}>ADD</Link>
                    </Button>
                    <Button   >
                    <Link to='/a' style={{color:'white'}}>Home</Link>
                    </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar