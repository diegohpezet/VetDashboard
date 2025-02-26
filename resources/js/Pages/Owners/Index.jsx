import MainLayout from "@/Layouts/MainLayout";
import SectionCard from "@/Components/SectionCard";
import SearchBar from "@/Components/SearchBar";
import Pagination from "@/Components/Pagination";
import OwnersTable from "./Components/OwnersTable";
import { Head, Link } from "@inertiajs/react";
import { t } from "i18next";

export default function OwnersIndex({ owners, search }) {
  return (
    <MainLayout>
      <Head title={t('owners')} />

      <SectionCard>
        <div className="md:flex justify-between">
          <SearchBar initialSearch={search} resource={t('owners')} />
          
          <Link href={route('owners.create')} className="btn btn-primary mb-3 font-bold text-lg">+ {t('owners.create')}</Link>
        </div>

        <OwnersTable owners={owners} />

        <Pagination links={owners.links} />
      </SectionCard>
    </MainLayout>
  );
}
