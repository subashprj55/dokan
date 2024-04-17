import Nav from './components/nav'

export default function Home() {
  return (
    <>
      <Nav />
      <Intro />
      <Futures />
    </>
  )
}

const Intro = () => {
  return (
    <div className="bg-white">
      <div>
        <title>Your Grocery Store Management</title>
        <meta
          name="description"
          content="Welcome to Your Grocery Store Management System"
        />
      </div>

      {/* body contant  start form here*/}
      <div className="py-48">
        <h1 className=" text-7xl text-center font-bold text-gray-800 mb-4">
          Welcome to Your Grocery Store Management System
        </h1>
        <br />
        <h1 className="text-8xl text-center font-bold text-gray-600 mb-4">
          DOKAN
        </h1>
        <p className=" text-gray-600 text-center mb-8 text-2xl mt-14">
          Manage your grocery store efficiently with our user-friendly system.
        </p>
        <div className="flex justify-center gap-3 ">
          <button className="bg-yellow-300 py-2 px-4 rounded-md hover:bg-yellow-400 duration-500">
            Sign Up
          </button>
          <button className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 duration-500">
            Log In
          </button>
        </div>
      </div>
    </div>
  )
}

const Futures = () => {
  return (
    <>
      <h1 className="text-lg text-gray-700 mb-4">
        Our grocery store management system offers:
      </h1>
    </>
  )
}

{
  /* <ul className="list-disc ml-8">
            <li className="mb-2">Inventory management</li>
            <li className="mb-2">Sales tracking</li>
            <li className="mb-2">Customer management</li>
            <li className="mb-2">Order processing</li>
            <li className="mb-2">Employee scheduling</li>
          </ul>
          <p className="text-lg text-gray-700">And much more...</p> */
}
