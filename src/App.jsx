import React from 'react'
import Sidebar from "./component/Sidebar"
import Feed from "./component/Feed"
import Rightbar from "./component/Rightbar"
import Navbar from './component/Navbar'
import { Box, Container, Stack } from '@mui/system'

function App() {
  return (
    <Box>
      <Navbar/>
     <Stack direction="row" spacing={2} justifyContent="space-between">
     <Sidebar/>
      <Feed/>
      <Rightbar/>
     </Stack>
    </Box>
  )
}

export default App