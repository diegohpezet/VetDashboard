import SearchBar from "@/Components/SearchBar";
import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import { t } from "i18next";
import PetsTable from "./Components/PetsTable";
import Pagination from "@/Components/Pagination";

export default function PetsIndex({ pets, search }) {
  return (
    <MainLayout>
      <Head title={t('pets')} />

      <SectionCard>
        <div className="md:flex justify-between">
          <SearchBar initialSearch={search} resource={t('pets')} />

          <Link href={route('pets.create')} className="btn btn-primary mb-3 font-bold text-lg">+ {t('pets.create')}</Link>
        </div>

        <PetsTable pets={pets} />

        <Pagination links={pets.links} />
      </SectionCard>
    </MainLayout>
  )
}