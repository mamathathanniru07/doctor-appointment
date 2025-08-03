import { useState } from "react";

export const useDoctorsDetailsPage = () => {
  const [openAppointment, setOpenAppointment] = useState<boolean>(false);

  const onClose = () => {
    setOpenAppointment(false)
  }

  return {
    openAppointment,
    setOpenAppointment,
    onClose
  };
};
