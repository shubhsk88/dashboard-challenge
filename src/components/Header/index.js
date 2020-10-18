import React from 'react';

import { StyledHeader } from './style.js';
import {VscSearch,BiBell,CgProfile} from 'react-icons';

const Header = () => {
  return(
    <StyledHeader>
        <div className="logo">Innoloft</div>
        <form>
            <input type="text" placeholder="Enter Interest blah blah"/>
            <button type="button"><VscSearch/></button>
        </form>
        <div className="profile">
            <div className="i18n">En</div>
            <div className="notification"><BiBell/></div>
            <div className="avatar"><CgProfile/></div> 
        </div>
    </StyledHeader>

  )
};

export default Header;
