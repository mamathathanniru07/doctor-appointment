import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  TablePagination,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useLandingPageContainer, type Doctor } from "./Container";
import { useNavigate } from "react-router";

const DoctorsLandingPage: React.FC = () => {
  const {
    filteredDoctors,
    handleSearchChange,
    handleChangeRowsPerPage,
    handleChangePage,
    page,
    rowsPerPage,
    searchTerm,
  } = useLandingPageContainer();

  const navigate = useNavigate();

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Find Your Doctor
      </Typography>

      <TextField
        label="Search by Name or Specialization"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      <Paper sx={{ width: "100%", overflow: "hidden", height: "80%" }}>
        <TableContainer sx={{ maxHeight: "90%" }}>
          <Table stickyHeader aria-label="doctors table">
            <TableHead>
              <TableRow>
                <TableCell>Profile</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Specialization</TableCell>
                <TableCell>Availability</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? filteredDoctors.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : filteredDoctors
              ).map((doctor: Doctor) => (
                <TableRow
                  key={doctor.id}
                  onClick={() => navigate(`/doctor/${doctor.id}`)} // Add onClick handler
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "action.hover",
                    },
                  }}
                >
                  <TableCell>
                    <Avatar alt={doctor.name} src={doctor.profileImage} />
                  </TableCell>
                  <TableCell>{doctor.name}</TableCell>
                  <TableCell>{doctor.specialization}</TableCell>
                  <TableCell>{doctor.availability}</TableCell>
                </TableRow>
              ))}
              {filteredDoctors.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No doctors found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          component="div"
          count={filteredDoctors.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          showFirstButton
          showLastButton
        />
      </Paper>
    </Box>
  );
};

export default DoctorsLandingPage;
