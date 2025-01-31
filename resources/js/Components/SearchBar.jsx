import { useForm } from "@inertiajs/react";

/**
 * Renders a searchbar for the specified resource
 * @param { String } initialSearch - The initial search
 * @param { String } resource - The resource route name to search
 * @returns 
 */
export default function SearchBar({ initialSearch, resource }) {
  const { data, setData, get } = useForm({
    search: initialSearch || "",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    get(route(`${resource}.index`), { preserveState: true, replace: true });
  };

  return (
    <form onSubmit={handleSearch} className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder={`Search ${resource}...`}
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
