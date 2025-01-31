import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import { Head, useForm } from "@inertiajs/react";

export default function PetsEdit({ pet, owners }) {
  const { data, setData, put, errors } = useForm({
    name: pet.name,
    species: pet.species,
    breed: pet.breed,
    sex: pet.sex,
    stage: pet.stage,
    characteristics: pet.characteristics,
    owner_id: pet.owner_id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('pets.update', pet.id));
  };

  return (
    <MainLayout>
      <Head title="Edit Pet" />

      <SectionCard>
        <h1 className="text-2xl font-bold">Edit Pet</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Name *</span>
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
                <span className="label-text">Species *</span>
              </div>
              <select
                className="select select-bordered w-full"
                value={data.species}
                onChange={(e) => setData("species", e.target.value)}
              >
                <option value="" disabled>Select species</option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Parrot">Parrot</option>
              </select>
              {errors.species && <span className="text-red-500">{errors.species}</span>}
            </label>

            {/* Breed */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">Breed *</span>
              </div>
              <input
                type="text"
                placeholder="Breed"
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
                <span className="label-text">Sex *</span>
              </div>
              <select
                className="select select-bordered w-full"
                value={data.sex}
                onChange={(e) => setData("sex", e.target.value)}
              >
                <option value="" disabled>Select sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.sex && <span className="text-red-500">{errors.sex}</span>}
            </label>

            {/* Stage */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">Stage *</span>
              </div>
              <select
                className="select select-bordered w-full"
                value={data.stage}
                onChange={(e) => setData("stage", e.target.value)}
              >
                <option value="" disabled>Select stage</option>
                <option value="Baby">Baby</option>
                <option value="Puppy">Puppy</option>
                <option value="Adult">Adult</option>
              </select>
              {errors.stage && <span className="text-red-500">{errors.stage}</span>}
            </label>
          </div>

          {/* Characteristics */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Characteristics</span>
            </div>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Special traits, behavior, etc."
              value={data.characteristics}
              onChange={(e) => setData("characteristics", e.target.value)}
            />
            {errors.characteristics && <span className="text-red-500">{errors.characteristics}</span>}
          </label>

          {/* Owner */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Owner *</span>
            </div>
            <select
              className="select select-bordered w-full"
              value={data.owner_id}
              onChange={(e) => setData("owner_id", e.target.value)}
            >
              <option value="" disabled>Select an owner</option>
              {owners.map((owner) => (
                <option key={owner.id} value={owner.id}>{owner.name}</option>
              ))}
            </select>
            {errors.owner_id && <span className="text-red-500">{errors.owner_id}</span>}
          </label>


          {/* Botones */}
          <div className="flex items-center justify-end gap-2">
            <a href={route('owners.index')} className="btn btn-ghost text-blue-500">
              Cancel
            </a>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </SectionCard>
    </MainLayout>
  );
}
