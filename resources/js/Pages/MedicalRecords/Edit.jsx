import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { t } from "i18next";

export default function MedicalRecordCreate({ medicalRecord }) {
  const { data, setData, put, errors } = useForm({
    diagnosis: medicalRecord.diagnosis,
    treatment: medicalRecord.treatment,
    date: medicalRecord.date,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('medical-records.update', medicalRecord.id));
  };

  return (
    <MainLayout>
      <Head title="Edit medical record" />

      <SectionCard>
        <h1 className="text-2xl font-bold">{t('medical_records.edit')}</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Diagnosis */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">{t('medical_records.fields.diagnosis')}</span>
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
              <span className="label-text">{t('medical_records.fields.treatment')}</span>
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
              <span className="label-text">{t}</span>
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
            <Link href={route('pets.show', medicalRecord.pet.id)} className="btn btn-ghost mr-2">{t('common.actions.cancel')}</Link>
            <button type="submit" className="btn btn-primary">{t('common.actions.save')}</button>
          </div>
        </form>
      </SectionCard>
    </MainLayout>
  );
}