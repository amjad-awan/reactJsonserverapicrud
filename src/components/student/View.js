import {
  Typography,
  Box,
  makeStyles,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import { useParams, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles({
  stuListColor: {
    backgroundColor: orange[400],
    color: "white",
  },
  tableHeadCell: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
const View = () => {
  const classes = useStyles();
  const [student, setStudent] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getStudent();
  }, [id]);

  async function getStudent() {
    try {
      const student = await axios.get(`http://localhost:3333/students/${id}`);
      console.log(student.data);
      setStudent(student.data);
      console.log("api is connected");
    } catch (err) {
      console.log("api is not connected", err);
    }
  }

  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <Box textAlign="center" p={2} className={classes.stuListColor}>
        <Typography variant="h4">Student Detail</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center" className={classes.tableHeadCell}>
                ID
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Name
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Description
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{student.id}</TableCell>
              <TableCell align="center">{student.stuname}</TableCell>
              <TableCell align="center">{student.desciption}</TableCell>

              <TableCell align="center">{student.email}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box m={3} textAlign="center">
        <Button variant="contained" onClick={handleClick} color="primary">
          Back to Home
        </Button>
      </Box>
    </>
  );
};

export default View;
