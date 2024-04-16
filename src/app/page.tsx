import Nav from "./components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <HeadCom />
    </>
  );
}

const HeadCom = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div>
        <title>Your Grocery Store Management</title>
        <meta name="description" content="Welcome to Your Grocery Store Management System" />
        <link rel="icon" href="/favicon.ico" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Welcome to Your Grocery Store Management System</h1>
        <p className="text-lg text-gray-600 text-center mb-8">Manage your grocery store efficiently with our user-friendly system.</p>

        <div className="flex justify-center mb-8">
          <img src="/images/grocery-store.jpeg" alt="Grocery Store" className="rounded-lg shadow-lg" style={{ minWidth: '600px' }} />
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">Our grocery store management system offers:</p>
          <ul className="list-disc ml-8">
            <li className="mb-2">Inventory management</li>
            <li className="mb-2">Sales tracking</li>
            <li className="mb-2">Customer management</li>
            <li className="mb-2">Order processing</li>
            <li className="mb-2">Employee scheduling</li>
          </ul>
          <p className="text-lg text-gray-700">And much more...</p>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
