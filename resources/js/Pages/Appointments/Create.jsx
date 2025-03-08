import SectionCard from "@/Components/SectionCard";
import MainLayout from "@/Layouts/MainLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import { t } from "i18next";

export default function AppointmentCreate({ pets, owners }) {
  const { data, setData, post, errors } = useForm({
    pet_id: "",
    date: "",
    reason: "",
    status: "Scheduled",
  });

  const [selectedOwner, setSelectedOwner] = useState("");
  const [filteredPets, setFilteredPets] = useState([]);
  
  const allowedTimes = ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  function handleOwnerChange(e) {
    const ownerId = e.target.value;
    setSelectedOwner(ownerId);
    setFilteredPets(pets.filter((pet) => pet.owner_id === ownerId));
  }

  function handleDateChange(e) {
    const newDate = e.target.value;
    const currentTime = data.date.split("T")[1];
    setData("date", `${newDate}T${currentTime}`);
  }

  function handleTimeChange(e) {
    const newTime = e.target.value;
    const currentDate = data.date.split("T")[0];
    setData("date", `${currentDate}T${newTime}`);
  }

  function handleSubmit(e) {
    e.preventDefault();
    post(route("appointments.store"));
  }

  return (
    <MainLayout>
      <Head title={t('appointments.create')} />
      <SectionCard>
        <h1 className="text-2xl font-bold">{t('appointments.create')}</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Owner (To filter pets from) */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">{t('appointments.fields.owner')}</span>
            </div>
            <select
              className="select select-bordered"
              value={selectedOwner}
              onChange={handleOwnerChange}
            >
              <option value="">{t('appointments.fields.owner.select')}</option>
              {owners.map((owner) => (
                <option key={owner.id} value={owner.id}>
                  {owner.name}
                </option>
              ))}
            </select>
          </label>

          {/* Pet */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">{t('appointments.fields.pet')}</span>
            </div>
            <select
              className="select select-bordered"
              value={data.pet_id}
              onChange={(e) => setData("pet_id", e.target.value)}
              disabled={!selectedOwner || filteredPets.length === 0}
              required
            >
              <option value="">{t('appointments.fields.pet.select')}</option>
              {filteredPets.map((pet) => (
                <option key={pet.id} value={pet.id}>
                  {pet.name}
                </option>
              ))}
            </select>
            {errors.pet_id && (<span className="text-red-500">{errors.pet_id}</span>)}
          </label>

          {/* Date */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">{t('appointments.fields.date')}</span>
            </div>
            <input
              type="date"
              className="input input-bordered w-full"
              value={data.date.split("T")[0]}
              onChange={handleDateChange}
              required
            />
            {errors.date && (<span className="text-red-500">{errors.date}</span>)}
          </label>

          {/* Time */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">{t('appointments.fields.time')}</span>
            </div>
            <select
              className="select select-bordered"
              value={data.date.split("T")[1]}
              onChange={handleTimeChange}
              required
            >
              <option value="">{t('appointments.fields.time.select')}</option>
              {allowedTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </label>

          {/* Reason */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">{t('appointments.fields.reason')}</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full"
              value={data.reason}
              onChange={(e) => setData("reason", e.target.value)}
            />
            {errors.reason && (<span className="text-red-500">{errors.reason}</span>)}
          </label>

          {/* Status */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">{t('appointments.fields.status')}</span>
            </div>
            <select
              className="select select-bordered"
              value={data.status}
              onChange={(e) => setData("status", e.target.value)}
            >
              <option value="Scheduled">{t('appointments.fields.status.options.scheduled')}</option>
              <option value="Cancelled">{t('appointments.fields.status.options.cancelled')}</option>
              <option value="Completed">{t('appointments.fields.status.options.completed')}</option>
            </select>
            {errors.status && (<span className="text-red-500">{errors.status}</span>)}
          </label>

          <div className="flex items-center justify-end gap-2">
            <a
              href={route("appointments.index")}
              className="btn btn-ghost text-primary"
            >
              {t('common.actions.cancel')}
            </a>
            <button type="submit" className="btn btn-primary">
              {t('common.actions.save')}
            </button>
          </div>
        </form>
      </SectionCard>
    </MainLayout>
  );
}
