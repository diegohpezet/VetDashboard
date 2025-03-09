import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { t } from "i18next";

export default function MedicalRecordCreate({ pet }) {
  const page = usePage();
  const userId = page.props.auth.user.id;

  const { data, setData, post, errors } = useForm({
    diagnosis: '',
    treatment: '',
    date: new Date().toISOString().slice(0, 10),
    vet_id: userId,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('pets.medical-records.store', pet.id));
  };

  return (
    <MainLayout>
      <Head title={t('medical_records.create')} />

      <SectionCard>
        <h1 className="text-2xl font-bold">{t('medical_records.create.for', { name: pet.name })}</h1>

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
              <span className="label-text">{t('medical_records.fields.date')}</span>
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
            <Link href={route('pets.show', pet.id)} className="btn btn-ghost mr-2">{t('common.actions.cancel')}</Link>
            <button type="submit" className="btn btn-primary">{t('common.actions.save')}</button>
          </div>
        </form>
      </SectionCard>
    </MainLayout>
  );
}