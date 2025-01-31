import SearchBar from "@/Components/SearchBar";
import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import PetsTable from "./Components/PetsTable";
import Pagination from "@/Components/Pagination";

export default function PetsIndex({ pets, search }) {
  return (
    <MainLayout>
      <Head title="Pets" />

      <SectionCard>
        <div className="md:flex justify-between">
          <SearchBar initialSearch={search} resource='pets' />

          <Link href={route('pets.create')} className="btn btn-primary mb-3 font-bold text-lg">+ New Pet</Link>
        </div>

        <PetsTable pets={pets} />

        <Pagination links={pets.links} />
      </SectionCard>
    </MainLayout>
  )
}