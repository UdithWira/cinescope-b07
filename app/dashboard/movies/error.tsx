"use client"

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold text-red-500">Error</h1>
      <p className="text-gray-600">An error occurred while fetching the movies data.
        Please try again later.
      </p>
    </div>
  );
}
