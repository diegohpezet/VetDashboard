export default function SectionCard({ children }) {
  return (
    <div className="w-full h-full py-6">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 h-full">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 h-full flex flex-col">
          <div className="p-6 text-gray-900 dark:text-gray-100 flex-grow">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
