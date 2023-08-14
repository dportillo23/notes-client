import { Toolbar, AppBar, Avatar } from "@mui/material";

export const NavBar = () => {
  return (
      <AppBar component="nav" position="relative">
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
          px: 4,
          py: 2,
        }}>
          <img src="/Logo.png" alt="" width="75px" />
          <Avatar src='https://pbs.twimg.com/profile_images/1467845612850843657/oRBA3wxy_400x400.png' sx={{ width: 50, height: 50 }}/>
        </Toolbar>
      </AppBar>
  )
};
