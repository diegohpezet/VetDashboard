import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import AppointmentList from "./Components/AppointmentList";
import Pagination from "@/Components/Pagination";
import SearchBar from "@/Components/SearchBar";
import { t } from "i18next";

export default function AppointmentsIndex({ appointments, search }) {
  return (
    <MainLayout>
      <Head title={t('appointments')} />

      <SectionCard>
        <div className="md:flex justify-between">
          <SearchBar initialSearch={search} resource={t('appointments')} />

          <Link href={route('appointments.create')} className="btn btn-primary mb-3 font-bold text-lg">+ {t('appointments.create')}</Link>
        </div>

        <AppointmentList appointments={appointments} />

        <Pagination links={appointments.links} />
      </SectionCard>
    </MainLayout>
  );
}