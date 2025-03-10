import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import { Head, useForm } from "@inertiajs/react";
import { t } from "i18next";

export default function OwnersEdit({ owner }) {
  const { data, setData, put, errors } = useForm({
    name: owner.name,
    email: owner.email,
    phone_number: owner.phone_number,
    address: owner.address,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('owners.update', owner.id));
  };

  return (
    <MainLayout>
      <Head title="New Owner" />

      <SectionCard>
        <h1 className="text-2xl font-bold">{t('owners.edit')}</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="form-control">
            <div className="label">
              <span className="label-text">{t('owners.fields.name')}</span>
            </div>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full"
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">{t('owners.fields.email')}</span>
            </div>
            <input
              type="email"
              placeholder={t('owners.fields.email.placeholder')}
              className="input input-bordered w-full"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">{t('owners.fields.address')}</span>
            </div>
            <input
              type="text"
              placeholder={t('owners.fields.address.placeholder')}
              className="input input-bordered w-full"
              value={data.address}
              onChange={(e) => setData("address", e.target.value)}
            />
            {errors.address && <span className="text-red-500">{errors.address}</span>}
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">{t('owners.fields.phone_number')}</span>
            </div>
            <input
              type="text"
              placeholder={t('owners.fields.phone_number.placeholder')}
              className="input input-bordered w-full"
              value={data.phone_number}
              onChange={(e) => setData("phone_number", e.target.value)}
            />
            {errors.phone_number && <span className="text-red-500">{errors.phone_number}</span>}
          </label>

          <div className="flex items-center justify-end gap-2">
            <a href={route('owners.index')} className="btn btn-ghost text-blue-500">
              {t('common.actions.cancel')}
            </a>
            <button type="submit" className="btn btn-primary">{t('common.actions.update')}</button>
          </div>
        </form>
      </SectionCard>
    </MainLayout>
  );
}
