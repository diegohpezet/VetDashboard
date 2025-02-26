import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import { t } from "i18next";
import PetsTable from "../Pets/Components/PetsTable";

export default function OwnersShow({ owner }) {
  return (
    <MainLayout>
      <Head title={owner.name} />

      <SectionCard>
        <h1 className="text-2xl font-bold">{owner.name}</h1>
        <p>{owner.address}</p>
        <p>{t('owners.fields.phone_number')}: {owner.phone_number}</p>
      </SectionCard>

      <SectionCard>
        <h1 className="text-2xl font-bold mb-3">{t('pets')}</h1>
        <PetsTable pets={owner.pets} showOwner={false} />
      </SectionCard>
    </MainLayout>
  )
}