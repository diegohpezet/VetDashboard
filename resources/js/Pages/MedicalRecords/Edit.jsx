import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import { Head, useForm } from "@inertiajs/react";

export default function MedicalRecordCreate({ pet, medicalRecord }) {
  const { data, setData, put, errors } = useForm({
    diagnosis: medicalRecord.diagnosis,
    treatment: medicalRecord.treatment,
    date: medicalRecord.date,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('pets.medical-records.update', [pet.id, medicalRecord.id]));
  };

  return (
    <MainLayout>
      <Head title="Edit medical record" />

      <SectionCard>
        <h1 className="text-2xl font-bold">Edit medical record for {pet.name}</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Diagnosis */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Diagnosis</span>
            </div>
            <input
              type="text"
              className="input input-bordered"
              value={data.diagnosis}
              onChange={(e) => setData('diagnosis', e.target.value)}
            />
            {errors.diagnosis && <div className="text-red-500">{errors.diagnosis}</div>}
          </label>

          {/* Treatment */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Treatment</span>
            </div>
            <input
              type="text"
              className="input input-bordered"
              value={data.treatment}
              onChange={(e) => setData('treatment', e.target.value)}
            />
            {errors.treatment && <div className="text-red-500">{errors.treatment}</div>}
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
            {errors.date && <div className="text-red-500">{errors.date}</div>}
          </label>

          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      </SectionCard>
    </MainLayout>
  );
}