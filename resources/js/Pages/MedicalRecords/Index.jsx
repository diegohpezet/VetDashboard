import MainLayout from "@/Layouts/MainLayout";
import SectionCard from "@/Components/SectionCard";
import PetMedicalRecordList from "./Components/PetMedicalRecordList";
import { Head, Link } from "@inertiajs/react";
import { t } from "i18next";

export default function MedicalRecordsIndex({ pet }) {
  return (
    <MainLayout>
      <Head title="Medical Records" />

      <SectionCard>
        <div className="md:flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-3">{t('medical_records.for', { name: pet.name })}</h1>

          <Link href={route('pets.medical-records.create', pet.id)} className="btn btn-primary mb-3 font-bold text-lg">+ {t('medical_records.create')}</Link>
        </div>
        
        <PetMedicalRecordList pet={pet} />
      </SectionCard>
    </MainLayout>
  );
}