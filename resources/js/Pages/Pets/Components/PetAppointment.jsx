import { Link } from "@inertiajs/react";
import { t } from "i18next";
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

  const deleteAppointment = (e, appointmentId) => {
    e.preventDefault();
    if (confirm(t('appointments.confirm_delete'))) {
      destroy(route('appointments.destroy', appointmentId));
    }
  };

  return (
    <div className="bg-base-200 mb-3 p-4 flex justify-between">
      <article>
        <h3 className="text-xl font-medium">{appointment.reason}</h3>
        <p className={setStatusColor(appointment.status)}>{t(`appointments.fields.status.options.${appointment.status.toLowerCase()}`)}</p>
        <p className="text-gray-500">{dayjs(appointment.date).format(`DD/MM/YYYY [${t('time.at')}] HH:mm`)}</p>
      </article>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost m-1">
          <i className="ri-more-2-fill"></i>
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li><Link href={route('appointments.edit', appointment.id)}>{t('appointments.edit')}</Link></li>
          <form onSubmit={(e) => deleteAppointment(e, appointment.id)}>
            <li><button type="submit" className="w-full">{t('common.actions.delete')}</button></li>
          </form>
        </ul>
      </div>
    </div>
  );
}