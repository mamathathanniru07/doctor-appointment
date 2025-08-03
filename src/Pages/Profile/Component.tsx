import React, { useContext } from "react";
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Chip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PersonPinIcon from "@mui/icons-material/PersonPin"; // For general info
import { useParams } from "react-router";
import { DoctorsContext } from "../../States/globalContext";
import { useDoctorsDetailsPage } from "./Container";
import AppointmentModal from "./AppointmentModel";

// Re-use the Doctor interface
interface Doctor {
  id: string;
  name: string;
  specialization: string;
  profileImage: string;
  availability: string; // Keep this for basic display on landing
  // Add more detailed fields for the profile page
  bio: string;
  education: string[];
  experience: string;
  contact: {
    phone: string;
    email: string;
  };
  schedule: {
    day: string;
    time: string;
    status: "Available" | "Fully Booked" | "On Leave";
  }[];
}

const DoctorProfilePage: React.FC = () => {
    const {openAppointment, setOpenAppointment, onClose} = useDoctorsDetailsPage()

  const { doctors } = useContext(DoctorsContext);
  const { id } = useParams();
  const doctor = doctors.find((d: Doctor) => d.id === id);

  if (!doctor) {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h5" color="error">
          Doctor not found.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => window.history.back()}
        >
          Go Back
        </Button>
      </Box>
    );
  }

  const getAvailabilityChipColor = (
    status: Doctor["schedule"][0]["status"]
  ) => {
    switch (status) {
      case "Available":
        return "success";
      case "Fully Booked":
        return "warning";
      case "On Leave":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 900, margin: "auto" }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mr: { md: 4 },
          }}
        >
          <Avatar
            alt={doctor.name}
            src={doctor.profileImage}
            sx={{
              width: 150,
              height: 150,
              mb: 2,
              border: "2px solid",
              borderColor: "primary.main",
            }}
          />
          <Typography variant="h5" component="h2" gutterBottom align="center">
            {doctor.name}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            gutterBottom
            align="center"
          >
            {doctor.specialization}
          </Typography>
          <Chip
            label={doctor.availability} // Basic availability from landing page
            color={getAvailabilityChipColor(
              doctor.availability as Doctor["schedule"][0]["status"]
            )} // Cast for chip color
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<BookOnlineIcon />}
            size="large"
            sx={{ width: "100%", mt: 2 }}
            onClick={() => setOpenAppointment(true)}
          >
            Book Appointment
          </Button>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            color="primary"
            sx={{ mt: { xs: 3, md: 0 } }}
          >
            About Dr. {doctor.name.split(" ")[1]}
          </Typography>
          <Typography variant="body1" paragraph>
            {doctor.bio}
          </Typography>

          <Typography variant="h6" color="primary" sx={{ mt: 3 }}>
            Education & Experience
          </Typography>
          <List dense>
            {doctor.education.map((edu:string, index:number) => (
              <ListItem key={`edu-${index}`}>
                <ListItemIcon>
                  <LocalHospitalIcon />
                </ListItemIcon>
                <ListItemText primary={edu} />
              </ListItem>
            ))}
            <ListItem>
              <ListItemIcon>
                <PersonPinIcon />
              </ListItemIcon>
              <ListItemText primary={`Experience: ${doctor.experience}`} />
            </ListItem>
          </List>

          <Typography variant="h6" color="primary" sx={{ mt: 3 }}>
            Availability Schedule
          </Typography>
          <List dense>
            {doctor.schedule.map((slot:any, index:number) => (
              <ListItem key={`schedule-${index}`}>
                <ListItemIcon>
                  <CalendarTodayIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`${slot.day}: ${slot.time}`}
                  secondary={
                    <Chip
                      label={slot.status}
                      color={getAvailabilityChipColor(slot.status)}
                      size="small"
                    />
                  }
                />
              </ListItem>
            ))}
          </List>

          <Typography variant="h6" color="primary" sx={{ mt: 3 }}>
            Contact
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <LocalHospitalIcon />
              </ListItemIcon>
              <ListItemText primary={`Phone: ${doctor.contact.phone}`} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocalHospitalIcon />
              </ListItemIcon>
              <ListItemText primary={`Email: ${doctor.contact.email}`} />
            </ListItem>
          </List>
        </Box>
      </Paper>
      <AppointmentModal open={openAppointment} onClose={onClose}/>
    </Box>
  );
};

export default DoctorProfilePage;
