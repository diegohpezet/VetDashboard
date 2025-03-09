import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import { Head, useForm } from "@inertiajs/react";
import { t } from "i18next";

export default function PetsCreate({ owners }) {
  const { data, setData, post, errors } = useForm({
    name: '',
    species: '',
    breed: '',
    sex: '',
    stage: '',
    characteristics: '',
    owner_id: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('pets.store'));
  };

  return (
    <MainLayout>
      <Head title="New Pet" />

      <SectionCard>
        <h1 className="text-2xl font-bold">{t('pets.create')}</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">{t('pets.fields.name')} *</span>
            </div>
            <input
              type="text"
              placeholder="Jack"
              className="input input-bordered w-full"
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </label>

          {/* Species */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="form-control">
              <div className="label">
                <span className="label-text">{t('pets.fields.species')} *</span>
              </div>
              <select
                className="select select-bordered w-full"
                value={data.species}
                onChange={(e) => setData("species", e.target.value)}
              >
                <option value="" disabled>{t('pets.fields.species.select')}</option>
                <option value="Cat">{t('pets.fields.species.options.cat')}</option>
                <option value="Dog">{t('pets.fields.species.options.dog')}</option>
                <option value="Bunny">{t('pets.fields.species.options.bunny')}</option>
              </select>
              {errors.species && <span className="text-red-500">{errors.species}</span>}
            </label>

            {/* Breed */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">{t('pets.fields.breed')} *</span>
              </div>
              <input
                type="text"
                placeholder={t('pets.fields.breed')}
                className="input input-bordered w-full"
                value={data.breed}
                onChange={(e) => setData("breed", e.target.value)}
              />
              {errors.breed && <span className="text-red-500">{errors.breed}</span>}
            </label>
          </div>

          {/* Sex */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="form-control">
              <div className="label">
                <span className="label-text">{t('pets.fields.sex')} *</span>
              </div>
              <select
                className="select select-bordered w-full"
                value={data.sex}
                onChange={(e) => setData("sex", e.target.value)}
              >
                <option value="" disabled>{t('pets.fields.sex.select')}</option>
                <option value="Male">{t('pets.fields.sex.options.male')}</option>
                <option value="Female">{t('pets.fields.sex.options.female')}</option>
              </select>
              {errors.sex && <span className="text-red-500">{errors.sex}</span>}
            </label>

            {/* Stage */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">{t('pets.fields.stage')} *</span>
              </div>
              <select
                className="select select-bordered w-full"
                value={data.stage}
                onChange={(e) => setData("stage", e.target.value)}
              >
                <option value="" disabled>{t('pets.fields.stage.select')}</option>
                <option value="Baby">{t('pets.fields.stage.options.baby')}</option>
                <option value="Puppy">{t('pets.fields.stage.options.puppy')}</option>
                <option value="Adult">{t('pets.fields.stage.options.adult')}</option>
                <option value="Old">{t('pets.fields.stage.options.old')}</option>
              </select>
              {errors.stage && <span className="text-red-500">{errors.stage}</span>}
            </label>
          </div>

          {/* Characteristics */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">{t('pets.fields.characteristics')}</span>
            </div>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder={t('pets.fields.characteristics.placeholder')}
              value={data.characteristics}
              onChange={(e) => setData("characteristics", e.target.value)}
            />
            {errors.characteristics && <span className="text-red-500">{errors.characteristics}</span>}
          </label>

          {/* Owner */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">{t('pets.fields.owner')} *</span>
            </div>
            <select
              className="select select-bordered w-full"
              value={data.owner_id}
              onChange={(e) => setData("owner_id", e.target.value)}
            >
              <option value="" disabled>{t('pets.fields.owner.select')}</option>
              {owners.map((owner) => (
                <option key={owner.id} value={owner.id}>{owner.name}</option>
              ))}
            </select>
            {errors.owner_id && <span className="text-red-500">{errors.owner_id}</span>}
          </label>


          {/* Botones */}
          <div className="flex items-center justify-end gap-2">
            <a href={route('owners.index')} className="btn btn-ghost text-blue-500">
              {t('common.actions.cancel')}
            </a>
            <button type="submit" className="btn btn-primary">{t('common.actions.save')}</button>
          </div>
        </form>
      </SectionCard>
    </MainLayout>
  );
}
