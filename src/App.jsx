import React, { useState } from 'react'
import Sidebar from "./component/Sidebar"
import Feed from "./component/Feed"
import Rightbar from "./component/Rightbar"
import Navbar from './component/Navbar'
import { Box, Stack } from '@mui/system'
import AddButtom from './component/AddButtom'
import { createTheme, ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  let [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette:{
      made:'dark',
    },
  });
  

  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={'background.default'} color={'text.primary'}>
      <Navbar/>
     <Stack direction="row" spacing={2} justifyContent="space-between">
     <Sidebar setMode={setMode} mode={mode} />
     {/* <Sidebar/> */}
      <Feed/>
      <Rightbar/>
     </Stack>
     <AddButtom/>
    </Box>
    </ThemeProvider>
  )
}

export default App