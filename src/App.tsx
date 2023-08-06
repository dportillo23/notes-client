import { Typography, Drawer, AppBar } from '@mui/material';

const App = () => {

  return (
    <>
      <AppBar position='absolute'>
        <Drawer variant='permanent'>
          <img src="/vite.svg" alt="" />
          <Typography>DANYBOY LOGO</Typography>
        </Drawer>
      </AppBar>
    </>
  )
}

export default App;
