import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import PetMedicalRecordList from "./Components/PetMedicalRecordList";

export default function MedicalRecordsIndex({ pet }) {
  return (
    <MainLayout>
      <Head title="Medical Records" />

      <SectionCard>
        <div className="md:flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-3">Medical Records for {pet.name}</h1>

          <Link href={route('pets.medical-records.create', pet.id)} className="btn btn-primary mb-3 font-bold text-lg">+ New medical record</Link>
        </div>
        
        <PetMedicalRecordList pet={pet} />
      </SectionCard>
    </MainLayout>
  );
}