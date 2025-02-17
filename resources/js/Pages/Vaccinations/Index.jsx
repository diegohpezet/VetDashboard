import SearchBar from "@/Components/SearchBar";
import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import VaccinationsTable from "./Components/VaccinationsTable";
import Pagination from "@/Components/Pagination";
import { Head, Link } from "@inertiajs/react";

export default function VaccinationsIndex({ vaccinations, pet, search }) {
  return (
    <MainLayout>
      <Head title="Vaccinations" />

      <SectionCard>
        <div className="md:flex justify-between">
          <SearchBar initialSearch={search} resource='pets.vaccinations' />

          <Link href={route('pets.vaccinations.create', pet.id)} className="btn btn-primary mb-3 font-bold text-lg">+ New Vaccination</Link>
        </div>

        <VaccinationsTable vaccinations={vaccinations} />

        <Pagination links={vaccinations.links} />
      </SectionCard>
    </MainLayout>
  )
}
