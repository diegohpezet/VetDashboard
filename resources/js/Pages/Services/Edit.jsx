import MainLayout from '@/Layouts/MainLayout'
import SectionCard from '@/Components/SectionCard'
import { useForm, Head } from '@inertiajs/react'
import { t } from 'i18next'

export default function ServiceEdit({ service }) {
  const { data, setData, put, errors } = useForm({
    name: service.name,
    price: service.price
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('services.update', service.id));
  }

  return (
    <MainLayout>
      <Head title={t('services.edit')} />

      <SectionCard>
        <h1 className="text-2xl font-bold">{t('services.edit')}</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">{t('services.fields.name')}</span>
            </div>
            <input
              type="text"
              className="input input-bordered"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </label>

          {/* Price */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">{t('services.fields.price')}</span>
            </div>
            <input
              type="number"
              className="input input-bordered"
              value={data.price}
              onChange={(e) => setData('price', e.target.value)}
            />
            {errors.price && <span className="text-red-500">{errors.price}</span>}
          </label>

          <div className="flex items-center justify-end gap-2">
            <a href={route('owners.index')} className="btn btn-ghost text-blue-500">
              {t('common.actions.cancel')}
            </a>
            <button type="submit" className="btn btn-primary">{t('common.actions.save')}</button>
          </div>
        </form>
      </SectionCard>
    </MainLayout>
  )
}
