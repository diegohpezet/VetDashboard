import PetMedicalRecord from "./PetMedicalRecord";
import { t } from "i18next";

export default function PetMedicalRecordList({ pet }) {
  const { medical_records } = pet;

  return (
    <div>
      {medical_records.length > 0 ? (
        medical_records.map((medical_record) => (
          <PetMedicalRecord key={medical_record.id} medical_record={medical_record} />
        ))
      ) : (
        <p>{t('common.empty')}</p>
      )}
    </div>
  );
};