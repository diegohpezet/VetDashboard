import MainLayout from "@/Layouts/MainLayout";
import SectionCard from "@/Components/SectionCard";
import ServicesTable from "./Components/ServicesTable";
import { Head, Link } from "@inertiajs/react";
import { t } from "i18next";

export default function ServicesIndex({ services }) {
  return (
    <MainLayout>
      <Head title="Services" />

      <SectionCard>
        <div className="md:flex justify-between items-center">
          <h1 className="text-2xl font-bold">{t('services')}</h1>
          <Link href={route('services.create')} className="btn btn-primary mb-3 font-bold text-lg">+ {t('services.create')}</Link>
        </div>

        <div className="mt-3">
          <ServicesTable services={services} />
        </div>
      </SectionCard>

    </MainLayout>
  )
}
