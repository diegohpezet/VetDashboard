import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import SearchBar from "./Components/SearchBar";
import Pagination from "./Components/Pagination";
import OwnersTable from "./Components/OwnersTable";

export default function OwnersIndex({ owners, search }) {
  return (
    <MainLayout>
      <Head title="Owners" />

      <SectionCard>
        <div className="md:flex justify-between">
          <SearchBar initialSearch={search} />
          
          <Link href={route('owners.create')} className="btn btn-primary mb-3 font-bold text-lg">+ New owner</Link>
        </div>

        <OwnersTable owners={owners} />

        <Pagination links={owners.links} />
      </SectionCard>
    </MainLayout>
  );
}
