import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import { Head, useForm } from "@inertiajs/react";

export default function VaccinationEdit({ vaccination }) {
  const { data, setData, put, errors } = useForm({
    name: vaccination.name,
    date: vaccination.date,
    next_dose: vaccination.next_dose
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('vaccinations.update', vaccination.id));
  }
  
  return (
    <MainLayout>
      <Head title="Edit vaccination" />

      <SectionCard>
        <h1 className="text-2xl font-bold">Edit vaccination</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              className="input input-bordered"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </label>

          {/* Date */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Date</span>
            </div>
            <input
              type="date"
              className="input input-bordered"
              value={data.date}
              onChange={(e) => setData('date', e.target.value)}
            />
            {errors.date && <span className="text-red-500">{errors.date}</span>}
          </label>

          {/* Next Dose */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Next Dose</span>
            </div>
            <input
              type="date"
              className="input input-bordered"
              value={data.next_dose}
              onChange={(e) => setData('next_dose', e.target.value)}
            />
            {errors.next_dose && <span className="text-red-500">{errors.next_dose}</span>}
          </label>

          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </SectionCard>
    </MainLayout>
  )
}
