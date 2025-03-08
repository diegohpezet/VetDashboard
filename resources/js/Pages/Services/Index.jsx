import MainLayout from "@/Layouts/MainLayout";
import SectionCard from "@/Components/SectionCard";
import ServicesTable from "./Components/ServicesTable";
import { Head } from "@inertiajs/react";
import { t } from "i18next";

export default function ServicesIndex({ services }) {
  return (
    <MainLayout>
      <Head title="Services" />

      <SectionCard>
        <h1 className="text-2xl font-bold">{t('services')}</h1>

        <div className="mt-3">
          <ServicesTable services={services} />
        </div>
      </SectionCard>

    </MainLayout>
  )
}
