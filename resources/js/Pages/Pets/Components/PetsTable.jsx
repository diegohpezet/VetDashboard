import { Link, useForm } from "@inertiajs/react";

export default function PetsTable({ pets }) {
  const { delete: destroy } = useForm();

  const deletePet = (e, petId) => {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this pet?')) {
      destroy(route('pets.destroy', petId));
    }
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Species</th>
          <th>Breed</th>
          <th>Sex</th>
          <th>Stage</th>
          <th>Owner</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {pets.data.length > 0 ? (
          pets.data.map((pet) => (
            <tr className="hover" key={pet.id}>
              <td className="text-primary">
                <Link href={route("pets.show", pet.id)}>{pet.name}</Link>
              </td>
              <td>{pet.species}</td>
              <td>{pet.breed}</td>
              <td>
                {pet.sex === 'Male' ? <i className="ri-men-line text-blue-400"></i> : <i className="ri-women-line text-pink-400"></i>}
              </td>
              <td>{pet.stage}</td>
              <td className="text-primary">
                <Link href={route('owners.show', pet.owner.id)}>{pet.owner.name}</Link>
              </td>
              <td>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost m-1">
                    <i className="ri-more-2-fill"></i>
                  </div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><Link href={route('pets.edit', pet.id)}>Edit</Link></li>
                    <form onSubmit={(e) => deletePet(e, pet.id)}>
                      <li><button type="submit" className="w-full">Delete</button></li>
                    </form>
                  </ul>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7" className="text-center">No pets found.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
