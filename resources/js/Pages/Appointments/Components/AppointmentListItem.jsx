import dayjs from "dayjs";
import { Link, useForm } from "@inertiajs/react";

export default function AppointmentListItem({ appointment }) {
  const { delete: destroy } = useForm();

  const setBadgeColor = (status) => {
    if (status === "Scheduled") {
      return "bg-yellow-600";
    } else if (status === "Completed") {
      return "bg-green-600";
    } else {
      return "bg-red-600";
    }
  };

  const formatDate = (date) => {
    return dayjs(date).format("DD/MM/YYYY [at] HH:mm");
  };

  const deleteAppointment = (e, appointmentId) => {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this appointment?')) {
      destroy(route('appointments.destroy', appointmentId));
    }
  };

  return (
    <div className={"bg-base-200 mb-3 p-4 flex justify-between" + (appointment.date < dayjs().format() ? " opacity-50" : "") + (appointment.status === "Completed" ? " opacity-50" : "")}>
      <article>
        <h3 className="text-xl font-medium">{appointment.pet.name} <span className="text-gray-500">({appointment.pet.owner.name})</span></h3>
        <p className="text-gray-500">{appointment.reason}</p>
        <p>
          <span>{formatDate(appointment.date)}</span> | <span className={' text-white px-2 rounded-full ' + setBadgeColor(appointment.status)}>{appointment.status}</span>
        </p>
      </article>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost m-1">
          <i className="ri-more-2-fill"></i>
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li><Link href={route('pets.show', appointment.pet.id)}>Pet info</Link></li>
          <li><Link href={route('owners.show', appointment.pet.owner.id)}>Contact owner</Link></li>
          <li><Link href={route('appointments.edit', appointment.id)}>Edit</Link></li>
          <form onSubmit={(e) => deleteAppointment(e, appointment.id)}>
            <li><button type="submit" className="w-full">Delete</button></li>
          </form>
        </ul>
      </div>
    </div>
  );
}