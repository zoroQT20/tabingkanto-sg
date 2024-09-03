import Image from "next/image";

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 p-4 border-b">
        <h1 className="text-xl font-bold">Tabing Kanto SG</h1>
      </header>
      <div className="flex flex-1">
        <nav className="w-1/5 bg-gray-50 p-4 border-r">
          <h2 className="text-lg font-semibold mb-4">Modules</h2>
          {/* Add module links here */}
        </nav>
        <main className="flex-1 p-4">
          <div className="flex">
            <div className="w-3/4 pr-4">
              <div className="flex grow items-center flex-col">
                <h1 className="text-2xl font-bold my-16 text-center">
                  Welcome Note
                </h1>
                <div className="flex flex-col">
                  <div className="mb-4">
                    <Image
                      src="/desktop.jpg"
                      alt="Welcome image"
                      width={400}
                      height={200}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-1/2 bg-gray-100 p-4">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim vel voluptatibus soluta.
                      </p>
                      <ul className="list-disc">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                      </ul>
                    </div>
                    <div className="w-1/2 bg-gray-100 p-4">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim vel voluptatibus soluta.
                      </p>
                      <ul className="list-disc">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/4">
              <div className="grid lg:grid-cols-2 grid-cols-12 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full"
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
