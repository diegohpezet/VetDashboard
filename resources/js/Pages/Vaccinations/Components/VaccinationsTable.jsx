import { Link, useForm } from "@inertiajs/react";

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
            <th>Name</th>
            <th>Date</th>
            <th>Next Dose</th>
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
                <Link href={route('vaccinations.edit', vaccination.id)} className="btn btn-primary dark:text-white">Edit</Link>
                <form onSubmit={(e) => deleteVaccination(e, vaccination.id)}>
                  <button type="submit" className="btn">Delete</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
