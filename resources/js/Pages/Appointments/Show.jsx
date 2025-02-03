import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function AppointmentsShow({ appointment }) {
  return (
    <MainLayout>
      <Head title={'Appointment for ' + appointment.pet.name} />

      <SectionCard>
        <h1 className="text-2xl font-bold">{appointment.pet.name} <span className="text-gray-500">({appointment.pet.owner.name})</span></h1>
        <p>{appointment.reason}</p>
        <p>{appointment.date} | {appointment.status}</p>
      </SectionCard>
    </MainLayout>
  );
}