import PetMedicalRecord from "./PetMedicalRecord";

export default function PetMedicalRecordList({ pet }) {
  const { medical_records } = pet;

  return (
    <div>
      {medical_records.length > 0 ? (
        medical_records.map((medical_record) => (
          <PetMedicalRecord key={medical_record.id} medical_record={medical_record} />
        ))
      ) : (
        <p>No medical records found</p>
      )}
    </div>
  );
};