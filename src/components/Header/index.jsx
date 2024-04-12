import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import {Search, SearchIconWrapper, StyledInputBase, Settings, LeftCtn} from './style'

const Header = ({handleDrawer}) => {
  return (
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor:'white'}}>
        <Toolbar>
          <LeftCtn>
            <IconButton
              size="large"
              edge="start"
              color="black"
              aria-label="open drawer"
              onClick={()=>handleDrawer()}
              sx={{ mr: 2 ,justifyContent:"start"}}
              >
              <IoMenu />
            </IconButton>
          </LeftCtn>
          <Search>
          <SearchIconWrapper>
              <IoSearch />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Settings>

          </Settings>
        </Toolbar>
      </AppBar>
  );
}
export default Header;