import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import PetAppointmentList from "./Components/PetAppointmentList";
import { Head, Link } from "@inertiajs/react";

export default function PetsShow({ pet }) {
  return (
    <MainLayout>
      <Head title={pet.name} />

      <SectionCard>
        <h1 className="text-2xl font-bold">
          {pet.name}
          {pet.sex === 'Male' ? <i className="ri-men-line text-blue-400"></i> : <i className="ri-women-line text-pink-400"></i>}
        </h1>
        <p>{pet.species} | {pet.breed} | {pet.stage}</p>
        <p>Owner: <Link href={route('owners.show', pet.owner.id)} className="text-primary">{pet.owner.name}</Link></p>

        <p className="text-gray-600">{pet.characteristics}</p>
      </SectionCard>

      <SectionCard>
        <PetAppointmentList appointments={pet.appointments} />
      </SectionCard>
    </MainLayout>
  )
}