import { Link, useForm } from "@inertiajs/react";
import { t } from "i18next";

export default function VaccinationsTable({ vaccinations }) {
  const vaccinationsArray = vaccinations.data || vaccinations;
  const { delete: destroy } = useForm();

  const deleteVaccination = (e, vaccinationId) => {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this vaccination?')) {
      destroy(route('vaccinations.destroy', vaccinationId));
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>{t('vaccinations.fields.name')}</th>
            <th>{t('vaccinations.fields.date')}</th>
            <th>{t('vaccinations.fields.next_dose')}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {vaccinationsArray.map((vaccination) => (
            <tr key={vaccination.id} className="hover">
              <td>{vaccination.name}</td>
              <td>{vaccination.date}</td>
              <td>{vaccination.next_dose || '-'}</td>
              <td className="flex gap-2">
                <Link href={route('vaccinations.edit', vaccination.id)} className="btn btn-primary dark:text-white">{t('common.actions.edit')}</Link>
                <form onSubmit={(e) => deleteVaccination(e, vaccination.id)}>
                  <button type="submit" className="btn">{t('common.actions.delete')}</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
