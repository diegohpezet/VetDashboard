import SectionCard from '@/Components/SectionCard';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import AppointmentList from './Appointments/Components/AppointmentList';

export default function Dashboard({ appointments, stats }) {
    const appointmentStats = [
        { label: "Finished Appt.", value: stats.appointments.completed, icon: "ri-calendar-check-line", color: "text-success" },
        { label: "Upcoming Appt.", value: stats.appointments.scheduled, icon: "ri-calendar-event-line", color: "text-warning" },
        { label: "Missed Appt.", value: stats.appointments.cancelled, icon: "ri-calendar-close-line", color: "text-error" },
    ];

    return (
        <MainLayout>
            <Head title="Dashboard" />

            <div className="xl:mx-auto xl:flex max-w-7xl hidden">
                {appointmentStats.map((stat, index) => (
                    <SectionCard key={index}>
                        <header className="flex gap-2">
                            <i className={`${stat.icon} ${stat.color} text-xl`}></i>
                            <h1 className="text-xl font-bold">{stat.label}</h1>
                        </header>
                        <p className="text-6xl font-bold">{stat.value}</p>
                    </SectionCard>
                ))}
            </div>

            <SectionCard>
                <h1 className="text-2xl font-bold">Today's appointments</h1>

                <div className="mt-3">
                    <AppointmentList appointments={appointments} />
                </div>
            </SectionCard>
        </MainLayout>
    );
}
