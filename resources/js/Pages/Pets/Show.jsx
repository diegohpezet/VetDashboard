import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import PetAppointmentList from "./Components/PetAppointmentList";
import { Head, Link } from "@inertiajs/react";
import { t } from "i18next";
import PetMedicalRecord from "../MedicalRecords/Components/PetMedicalRecord";
import VaccinationsTable from "../Vaccinations/Components/VaccinationsTable";

export default function PetsShow({ pet }) {
  return (
    <MainLayout>
      <Head title={pet.name} />

      {/* Pet info */}
      <SectionCard>
        <h1 className="text-2xl font-bold">
          {pet.name}
          {pet.sex === 'Male' ? <i className="ri-men-line text-blue-400"></i> : <i className="ri-women-line text-pink-400"></i>}
        </h1>
        <p>{pet.species} | {pet.breed} | {pet.stage}</p>
        <p>{t('pets.fields.owner')}: <Link href={route('owners.show', pet.owner.id)} className="text-primary">{pet.owner.name}</Link></p>

        <p className="text-gray-600">{pet.characteristics}</p>
      </SectionCard>

      <div className="xl:mx-auto xl:flex min-h-[400px] max-w-7xl">
        <div className="flex-1">
          {/* Appointments */}
          <SectionCard>
            <PetAppointmentList appointments={pet.appointments} />
          </SectionCard>
        </div>
        <div className="flex-1">
          {/* Medical Records */}
          <SectionCard>
            <h2 className="text-xl font-bold mb-3">{t('medical_records')}</h2>
            <div className="flex justify-between">
              <Link href={route('pets.medical-records.create', pet.id)} className="btn btn-primary dark:text-white mb-3">+ {t('medical_records.create')}</Link>
              {pet.medical_records.length > 3 && <Link href={route('pets.medical-records.index', pet.id)} className="btn btn-primary mb-3">{t('medical_records.view_all')}</Link>}
            </div>

            {pet.medical_records.length > 0 ? (
              pet.medical_records.slice(0, 3).map((medical_record) => (
                <PetMedicalRecord key={medical_record.id} medical_record={medical_record} />
              ))
            ) : (
              <p>No medical records found</p>
            )}
          </SectionCard>
        </div>
      </div>

      {/* Vaccinations */}
      <div className="flex">
        <div className="flex-1">
          <SectionCard>
            <h2 className="text-xl font-bold mb-3">Vaccinations</h2>
            {pet.vaccinations.length > 0 ? (
              <div>
                <div className="flex gap-2 mb-3">
                <Link href={route('pets.vaccinations.index', pet.id)} className="btn btn-primary dark:text-white mb-3">View all</Link>
                <Link href={route('pets.vaccinations.create', pet.id)} className="btn btn-primary dark:text-white mb-3">+ New vaccination</Link>
                </div>
                <VaccinationsTable vaccinations={pet.vaccinations.slice(0, 6)} />
              </div>
            ) : (
              <p>No vaccinations found</p>
            )}
          </SectionCard>
        </div>
      </div>
    </MainLayout>
  );
}