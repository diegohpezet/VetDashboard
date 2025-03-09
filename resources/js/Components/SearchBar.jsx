import { useForm } from "@inertiajs/react";
import { t } from "i18next";

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
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder={`${t('common.actions.search')} ${resource}...`}
          value={data.search}
          onChange={(e) => setData("search", e.target.value)}
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" />
        </svg>
      </label>
    </form>
  );
}
