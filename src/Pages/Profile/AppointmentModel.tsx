import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  IconButton,
  Alert,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface AppointmentModalProps {
  open: boolean;
  onClose: () => void;
}


const AppointmentModal: React.FC<AppointmentModalProps> = ({
  open,
  onClose,
}) => {
  const [patientName, setPatientName] = useState<string>("");
  const [patientEmail, setPatientEmail] = useState<string>("");
  const [desiredDateTime, setDesiredDateTime] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submissionMessage, setSubmissionMessage] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!patientName || !patientEmail || !desiredDateTime) {
      setSubmissionMessage("Please fill in all fields.");
      setIsSubmitted(true);
      return;
    }

    setSubmissionMessage(
      ` Your Appointment is Successfull.`
    );
    setIsSubmitted(true);
    setTimeout(() => {
      setPatientName("");
      setPatientEmail("");
      setDesiredDateTime("");
      onClose?.()
    }, 3000);
  };

  const handleCloseAndReset = () => {
    setIsSubmitted(false);
    setSubmissionMessage("");
    setPatientName("");
    setPatientEmail("");
    setDesiredDateTime("");
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleCloseAndReset}
      aria-labelledby="appointment-modal-title"
      aria-describedby="appointment-modal-description"
      closeAfterTransition
      sx={{
        backgroundColor: "#00000090",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Slide
        direction="up"
        in={open}
        mountOnEnter
        unmountOnExit
        style={{  }}
      >
        <Box sx={{ backgroundColor: "#fff", p:2 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {/* <Typography id="appointment-modal-title" variant="h6" component="h2">
              Book Appointment with Dr. 
            </Typography> */}
            <IconButton onClick={handleCloseAndReset} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Box>

          {!isSubmitted ? (
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
              />
              <TextField
                label="Your Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={patientEmail}
                onChange={(e) => setPatientEmail(e.target.value)}
                required
              />
              <TextField
                label="Desired Date & Time"
                type="datetime-local"
                variant="outlined"
                fullWidth
                margin="normal"
                value={desiredDateTime}
                onChange={(e) => setDesiredDateTime(e.target.value)}
                InputLabelProps={{ shrink: true }}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3 }}
              >
                Request Appointment
              </Button>
            </Box>
          ) : (
            <Alert
              severity={
                submissionMessage.includes("Please fill in")
                  ? "error"
                  : "success"
              }
              sx={{ mt: 2 }}
            >
              {submissionMessage}
            </Alert>
          )}
        </Box>
      </Slide>
    </Modal>
  );
};

export default AppointmentModal;
