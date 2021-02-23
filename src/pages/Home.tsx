import React from 'react';
import { Checklist } from "../components/Checklist";
import Paper from '@material-ui/core/Paper';
import "../styles/index.css";

export const Home: React.FC = () => {
  return(
    <div className="paper">
      <Paper elevation={3}>
        <Checklist highPrice="" lowPrice="" name="" type="" />
      </Paper>
    </div>
  )
}
