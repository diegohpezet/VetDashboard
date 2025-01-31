import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
  return (
    <div className="flex justify-center mt-4">
      <div className="join">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url || "#"}
            className={`join-item btn ${link.active ? "btn-primary" : "btn-ghost"}`}
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        ))}
      </div>
    </div>
  );
}
