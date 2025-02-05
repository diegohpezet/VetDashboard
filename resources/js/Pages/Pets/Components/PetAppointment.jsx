import { Link } from "@inertiajs/react";
import dayjs from "dayjs";

export default function PetAppointment({ appointment }) {
  const setStatusColor = (status) => {
    if (status === "Scheduled") {
      return "text-yellow-600";
    } else if (status === "Completed") {
      return "text-green-600";
    } else {
      return "text-red-600";
    }
  }
  return (
    <div className="bg-base-200 mb-3 p-4 flex justify-between">
      <article>
        <h3 className="text-xl font-medium">{appointment.reason}</h3>
        <p className={setStatusColor(appointment.status)}>{appointment.status}</p>
        <p className="text-gray-500">{dayjs(appointment.date).format('DD/MM/YYYY [at] HH:mm')}</p>
      </article>
      <div>
        <Link href={route('appointments.show', appointment.id)} className="btn btn-ghost m-1">
        <i className="ri-information-line"></i>
        </Link>
      </div>
    </div>
  );
}