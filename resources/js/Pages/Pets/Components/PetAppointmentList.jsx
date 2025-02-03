import PetAppointment from "./PetAppointment";

export default function PetAppointmentList({ appointments }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Appointments</h2>
      {appointments.length > 0 ? (
        appointments.map((appointment) => (
          <PetAppointment key={appointment.id} appointment={appointment} />
        ))
      ) : (
        <p>No appointments found</p>
      )}
    </div>
  );
}