import { Link, useForm } from '@inertiajs/react'
import { t } from 'i18next'

export default function ServicesTable({ services }) {
  const { delete: destroy } = useForm();

  const deleteService = (e, serviceId) => {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this service?')) {
      destroy(route('services.destroy', serviceId));
    }
  }

  return (    
    <table v-else className="table w-full">
      <thead>
        <tr>
          <th>{t('services.fields.name')}</th>
          <th>{t('services.fields.price')}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {services.map((service) => (
          <tr key={service.id}>
            <td>{service.name}</td>
            <td>{service.price}</td>
            <td>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost m-1">
                  <i className="ri-more-2-fill"></i>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li><Link href={route('services.edit', service.id)}>{t('common.actions.edit')}</Link></li>
                  <form onSubmit={(e) => deleteService(e, service.id)}>
                    <li><button type="submit" className="w-full">{t('common.actions.delete')}</button></li>
                  </form>
                </ul>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
