import dayjs from "dayjs";
import { Link, useForm } from "@inertiajs/react";
import { t } from "i18next";

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
    return dayjs(date).format(`DD/MM/YYYY [${t('time.at')}] HH:mm`);
  };

  const deleteAppointment = (e, appointmentId) => {
    e.preventDefault();
    if (confirm(t('appointments.confirm_delete'))) {
      destroy(route('appointments.destroy', appointmentId));
    }
  };

  return (
    <div className={"bg-base-200 mb-3 p-4 flex justify-between" + (appointment.date < dayjs().format() ? " opacity-50" : "") + (appointment.status === "Completed" ? " opacity-50" : "")}>
      <article>
        <h3 className="text-xl font-medium">{appointment.pet.name} <span className="text-gray-500">({appointment.pet.owner.name})</span></h3>
        <p className="text-gray-500">{appointment.reason}</p>
        <p>
          <span>{formatDate(appointment.date)}</span> | <span className={' text-white px-2 rounded-full ' + setBadgeColor(appointment.status)}>{t(`appointments.fields.status.options.${appointment.status.toLowerCase()}`)}</span>
        </p>
      </article>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost m-1">
          <i className="ri-more-2-fill"></i>
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li><Link href={route('appointments.show', appointment.id)}>{t('common.actions.view')}</Link></li>
          <li><Link href={route('appointments.edit', appointment.id)}>{t('appointments.edit')}</Link></li>
          <form onSubmit={(e) => deleteAppointment(e, appointment.id)}>
            <li><button type="submit" className="w-full">{t('common.actions.delete')}</button></li>
          </form>
        </ul>
      </div>
    </div>
  );
}