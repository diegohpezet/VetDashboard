import { Link, useForm } from '@inertiajs/react';

export default function PetMedicalRecord({ medical_record }) {
  const { delete: destroy } = useForm();

  const deleteMedicalRecord = (e, medical_recordId) => {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this medical record?')) {
      destroy(route('pets.medical-records.destroy', [medical_record.pet_id, medical_recordId]));
    }
  }
  
  return (
    <div className="bg-base-200 mb-3 p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{new Date(medical_record.date).toDateString()}</h2>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
            <i className="ri-more-2-fill"></i>
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><Link href={route('pets.medical-records.edit', [medical_record.pet_id, medical_record.id])}>Edit</Link></li>
            <form onSubmit={(e) => deleteMedicalRecord(e, medical_record.id)}>
              <li><button type="submit" className="w-full">Delete</button></li>
            </form>
          </ul>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-400">
        <span className="font-bold">Diagnosis:</span> {medical_record.diagnosis}
      </p>
      <p className="text-gray-700 dark:text-gray-400">
        <span className="font-bold">Treatment:</span> {medical_record.treatment}
      </p>
    </div>
  );
}