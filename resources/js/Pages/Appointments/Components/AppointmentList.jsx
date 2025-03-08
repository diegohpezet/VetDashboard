import AppointmentListItem from "./AppointmentListItem";
import { t } from "i18next";

export default function AppointmentList({ appointments }) {
  const appointmentsArray = appointments.data || appointments;
  
  return (
    <div>
      {appointmentsArray.length > 0 ? (
        appointmentsArray.map((appointment) => (
          <AppointmentListItem key={appointment.id} appointment={appointment} />
        ))
      ) : (
        <p>{t('common.empty')}</p>
      )}
    </div>
  );
}