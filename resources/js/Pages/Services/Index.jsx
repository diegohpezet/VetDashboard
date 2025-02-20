import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import ServicesTable from "./Components/ServicesTable";

export default function ServicesIndex({ services }) {
  return (
    <MainLayout>
      <Head title="Services" />

      <SectionCard>
        <h1 className="text-2xl font-bold">Services and Prices</h1>

        <div className="mt-3">
          <ServicesTable services={services} />
        </div>
      </SectionCard>

    </MainLayout>
  )
}
