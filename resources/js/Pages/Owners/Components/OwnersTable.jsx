import { Link, useForm } from "@inertiajs/react";

export default function OwnersTable({ owners }) {
  const { delete: destroy } = useForm();

  const deleteOwner = (e, ownerId) => {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this owner?')) {
      destroy(route('owners.destroy', ownerId));
    }
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {owners.data.length > 0 ? (
          owners.data.map((owner) => (
            <tr className="hover" key={owner.id}>
              <td className="text-primary">
                <Link href={route("owners.show", owner.id)}>{owner.name}</Link>
              </td>
              <td>{owner.email}</td>
              <td>{owner.address}</td>
              <td>{owner.phone_number}</td>
              <td>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost m-1">
                    <i className="ri-more-2-fill"></i>
                  </div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><Link href={route('owners.edit', owner.id)}>Edit</Link></li>
                    <form onSubmit={(e) => deleteOwner(e, owner.id)}>
                      <li><button type="submit" className="w-full">Delete</button></li>
                    </form>
                  </ul>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">No owners found.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
