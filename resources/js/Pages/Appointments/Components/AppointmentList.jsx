import AppointmentListItem from "./AppointmentListItem";

export default function AppointmentList({ appointments }) {
  const appointmentsArray = appointments.data || appointments;
  
  return (
    <div>
      {appointmentsArray.length > 0 ? (
        appointmentsArray.map((appointment) => (
          <AppointmentListItem key={appointment.id} appointment={appointment} />
        ))
      ) : (
        <p>No appointments found</p>
      )}
    </div>
  );
}