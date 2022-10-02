import {
  Typography,
  Box,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { deepPurple, green } from "@material-ui/core/colors";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
const useStyles = makeStyles({
  headingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
  },
});

const Edit = () => {
  const classes = useStyles();

  return (
    <>
      <Box textAlign="center" p={2} className={classes.headingColor} mb={2}>
        <Typography variant="h2">React CRUD with API Call</Typography>
      </Box>

      <Grid container justify="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Edit Student</Typography>
          </Box>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="id"
                  name="id"
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  autoFocus
                  
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                fullWidth
              >
                {" "}
                Update{" "}
              </Button>
            </Box>
          </form>
          <Box m={3} textAlign="center">
            <Button variant="contained" color="primary">
              Back to Home
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Edit;
