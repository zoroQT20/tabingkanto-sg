import Image from "next/image";

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 p-4 border-b">
        <h1 className="text-xl font-bold">Homepage</h1>
      </header>
      <div className="flex flex-1">
        <nav className="w-1/5 bg-gray-50 p-4 border-r">
          <h2 className="text-lg font-semibold mb-4">Modules</h2>
          {/* Add module links here */}
        </nav>
        <main className="flex-1 p-4">
          <div className="flex">
            <div className="w-3/4 pr-4">
              <h2 className="text-2xl font-bold mb-4">Welcome Note</h2>
              <div className="mb-4">
                <Image
                  src="/placeholder.webp?height=200&width=400"
                  alt="Welcome image"
                  width={400}
                  height={200}
                  className="w-full h-full"
                />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2 bg-gray-100 p-4">
                  {/* Content for first box */}
                </div>
                <div className="w-1/2 bg-gray-100 p-4">
                  {/* Content for second box */}
                </div>
              </div>
            </div>
            <div className="w-1/4">
              <div className="grid grid-cols-2 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-200 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
