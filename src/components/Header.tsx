import React from "react";
import "../styles/header.css";
import AppBar from '@material-ui/core/AppBar';

export function Header () {
  return(
    <div>
      <AppBar position="fixed" style={{ background: '#fff' }}>
        <h1> Budget Estimator </h1>
      </AppBar>
    </div>
  )
}
