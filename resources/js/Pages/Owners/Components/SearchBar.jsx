import { useForm } from "@inertiajs/react";

export default function SearchBar({ initialSearch }) {
  const { data, setData, get } = useForm({
    search: initialSearch || "",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    get(route("owners.index"), { preserveState: true, replace: true });
  };

  return (
    <form onSubmit={handleSearch} className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="Search owners..."
        value={data.search}
        onChange={(e) => setData("search", e.target.value)}
        className="input input-bordered w-full"
      />
      <button type="submit" className="btn btn-primary font-bold text-lg">
        <i className="ri-search-line"></i>
      </button>
    </form>
  );
}
