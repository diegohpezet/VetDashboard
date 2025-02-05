import { Link } from "@inertiajs/react";
import PetMedicalRecord from "./PetMedicalRecord";

export default function PetMedicalRecordList({ pet }) {
  const { medical_records } = pet;

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Medical records</h2>
      <div className="flex justify-between">
        <Link href={route('medical-records.create', pet.id)} className="btn btn-primary mb-3">+ New medical record</Link>
        {medical_records.length > 3 && <Link href={route('medical-records.index', pet.id)} className="btn btn-primary mb-3">Show all</Link>}
      </div>
      {medical_records.length > 0 ? (
        medical_records.slice(0, 3).map((medical_record) => (
          <PetMedicalRecord key={medical_record.id} medical_record={medical_record} />
        ))
      ) : (
        <p>No medical records found</p>
      )}
    </div>
  );
};