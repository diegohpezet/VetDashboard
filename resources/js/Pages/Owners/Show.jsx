import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import PetsTable from "../Pets/Components/PetsTable";

export default function OwnersShow({ owner }) {
  return (
    <MainLayout>
      <Head title={owner.name} />

      <SectionCard>
        <h1 className="text-2xl font-bold">{owner.name}</h1>
        <p>{owner.address}</p>
        <p>Phone: {owner.phone_number}</p>
      </SectionCard>

      <SectionCard>
        <h1 className="text-2xl font-bold mb-3">Pets</h1>
        <PetsTable pets={owner.pets} showOwner={false} />
      </SectionCard>
    </MainLayout>
  )
}