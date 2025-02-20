import MainLayout from '@/Layouts/MainLayout';
import SectionCard from '@/Components/SectionCard';
import { Head, Link, useForm } from '@inertiajs/react';

export default function ServiceCreate() {
  const { data, setData, post, errors } = useForm({
    name: '',
    price: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('services.store'));
  }

  return (
    <MainLayout>
      <Head title="New Service" />

      <SectionCard>
        <h1 className="text-2xl font-bold">New Service</h1>

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
            { errors.name && <span className="text-red-500">{errors.name}</span> }
          </label>

          {/* Price */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="number"
              className="input input-bordered"
              value={data.price}
              onChange={(e) => setData('price', e.target.value)}
            />
            { errors.price && <span className="text-red-500">{errors.price}</span> }
          </label>

          
          <div className="flex items-center justify-end gap-2">
            <a href={route('owners.index')} className="btn btn-ghost text-blue-500">
              Cancel
            </a>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </SectionCard>
    </MainLayout>
  )
}
