import AppointmentListItem from "./AppointmentListItem";

export default function AppointmentList({ appointments }) {
  return (
    <div>
      {appointments.data.length > 0 ? (
        appointments.data.map((appointment) => (
          <AppointmentListItem key={appointment.id} appointment={appointment} />
        ))
      ) : (
        <p>No appointments found</p>
      )}
    </div>
  );
}