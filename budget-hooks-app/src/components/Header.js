//  type shortcut: "rafce" to create a functional component
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Header = () => {
  const { totalBudget } = useContext(GlobalContext);

  return (
    <div className="header">
      <h1>$tate</h1>
    </div>
  );
};

export default Header;
