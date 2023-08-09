import { AppBar, Drawer, Typography } from "@mui/material";

export const Sidebar = () => {
  return (
    <AppBar position='absolute'>
        <Drawer variant='permanent'>
          <img src="/Logo.png" alt="" width="200jpx" />
        </Drawer>
      </AppBar>
  )
};
