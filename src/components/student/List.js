import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  makeStyles,
  Grid,
  TextField,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { deepPurple, green } from "@material-ui/core/colors";
import { orange } from "@material-ui/core/colors";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
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
const List = () => {
  const classes = useStyles();
  const [students, setStudents] = useState([]);
  console.log("students ========", students);
  useEffect(() => {
    getAllStudent();
  }, []);

  async function getAllStudent() {
    try {
      const students = await axios.get("http://localhost:3333/students");
      setStudents(students.data);
      console.log("api is connected");
    } catch (err) {
      console.log("api is not connected", err);
    }
  }
  return (
    <div>
      <Box textAlign="center" p={2} className={classes.stuListColor}>
        <Typography variant="h4">Student List</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center" className={classes.tableHeadCell}>
                No
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
              <TableCell align="center" className={classes.tableHeadCell}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, studentIndex) => {
              return (
                <TableRow key={studentIndex}>
                  <TableCell align="center">{student.id}</TableCell>
                  <TableCell align="center">{student.stuname}</TableCell>
                  <TableCell align="center">
                    {student.desciption.slice(0, 10)}
                  </TableCell>
                  <TableCell align="center">{student.email}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="View">
                      <IconButton>
                        <Link to={`/view/${student.id}`}>
                          <VisibilityIcon color="primary" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton>
                        <Link to={`/edit/${student.id}`}>
                          <EditIcon color="primary" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton>
                        <DeleteIcon color="secondary" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
