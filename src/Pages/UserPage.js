import React from 'react';
import ProfileDetails from './../Components/ProfileDetails'
import LatestPosts from './../Components/LatestPosts'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center"
  },
}))

function UserPage() {
  const classes = useStyles();

  const colors = [ 'Red','Yellow','Green','Blue' ];

  return (
    <div className={classes.root}>
      <center>
        <ProfileDetails />
        <Typography variant="h3" gutterBottom color='primary'>
          最新の投稿
        </Typography>
        <LatestPosts colors={colors}/>
      </center>
    </div>
  );
}

export default UserPage;
