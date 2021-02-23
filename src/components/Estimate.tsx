import React from "react";
import Button from '@material-ui/core/Button';
import { Link, RouteComponentProps } from "react-router-dom";
import "../styles/estimate.css";
import Grid from '@material-ui/core/Grid';

interface Props extends RouteComponentProps {statusMsg: any}

export const Estimate: React.FC<Props> = ({ statusMsg }) => {
  return(
    <div >
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={6}>
          <h2>Estimate Range $ { statusMsg } </h2>
        </Grid>
        <Grid item xs={6} className="space">
          <Button variant="contained" color="secondary" onClick={() => { }} > Summary </Button>
        </Grid>
      </Grid>
    </div>
  )
}
