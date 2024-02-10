import Link from "next/link"

export default function Home() {
  return (
    <main className="px-3 mb-20">
      <div>
        <h1 className="my-3">Basic routing</h1>
        <Link
          href="/Routing/BasicRouting/about"
          className="bg-gray-400 p-1 text-white rounded-md"
        >
          about
        </Link>

        <Link
          href="/Routing/BasicRouting/contact"
          className="bg-gray-400 p-1 text-white rounded-md"
        >
          contact
        </Link>
      </div>
      <div>
        <h1 className="my-3">Nested Routes</h1>

        <Link
          href="/Routing/NestedRoutes/products/allproducts"
          className="bg-gray-400 p-1 text-white rounded-md mr-3"
        >
          AllProducts
        </Link>
        <Link
          href="/Routing/NestedRoutes/products/specificproduct"
          className="bg-gray-400 p-1 text-white rounded-md"
        >
          SpecificProduct
        </Link>
      </div>
      <div>
        <h1 className="my-3">useRouter</h1>
        <Link
          href="/Routing/useRouter/page1"
          className="bg-gray-400 p-1 text-white rounded-md mr-3"
        >
          useRouter
        </Link>
      </div>
      <div>
        <h1 className="my-3">IgnoringRoutes</h1>
        <Link
          href="/Routing/IgnoringRoutes"
          className="bg-gray-400 p-1 text-white rounded-md mr-3"
        >
          IgnoringRoutes
        </Link>
      </div>
      <div>
        <h1 className="my-3">Dynamic Routes</h1>
        <Link
          href="/Routing/DynamicRoutes/userlist"
          className="bg-gray-400 p-1 text-white rounded-md mr-3"
        >
          Dynamic Routes
        </Link>
      </div>
      <div>
        <h1 className="my-3">Catch All Routes</h1>
        <Link
          href="/Routing/CatchAllRoutes"
          className="bg-gray-400 p-1 text-white rounded-md mr-3"
        >
          Catch All Routes
        </Link>
      </div>
      <div>
        <h1 className="my-3">Redirects</h1>
        <Link
          href="/Routing/Redirects"
          className="bg-gray-400 p-1 text-white rounded-md mr-3"
        >
          Redirects
        </Link>
      </div>
      <div>
        <h1 className="my-3">Layouts</h1>
        <Link
          href="/Layout"
          className="bg-gray-400 p-1 text-white rounded-md mr-3"
        >
          Layout
        </Link>
      </div>
      <div className="flex">
        <div>
          <h1 className="my-3">FetchDataClient</h1>
          <Link
            href="/FetchDataClient"
            className="bg-gray-400 p-1 text-white rounded-md mr-3"
          >
            FetchDataClient
          </Link>
        </div>
        <div>
          <h1 className="my-3">FetchDataServer</h1>
          <Link
            href="/FetchDataServer"
            className="bg-gray-400 p-1 text-white rounded-md mr-3"
          >
            FetchDataServer
          </Link>
        </div>
      </div>
      <div>
        <h1 className="my-3">BackendParams</h1>
        <Link
          href="/BackendParams"
          className="bg-gray-400 p-1 text-white rounded-md mr-3"
        >
          BackendParams
        </Link>
      </div>
      <div>
        <h1 className="my-3">UserListPage</h1>
        <Link
          href="/BackendParams/userlist"
          className="bg-gray-400 p-1 text-white rounded-md mr-3"
        >
          UserListPage
        </Link>
      </div>
      <div>
        <h1 className="my-3">envtests</h1>
        <Link
          href="/EnvTests"
          className="bg-gray-400 p-1 text-white rounded-md mr-3"
        >
          envtests
        </Link>
      </div>
      <div>
        <h1 className="my-3">APIwithUI</h1>
        <Link
          href="/APIwithUI"
          className="bg-gray-400 p-1 text-white rounded-md mr-3"
        >
          APIwithUI
        </Link>
      </div>
      <div>
        <h1 className="my-3">FakeUsersManagmentSystemProject</h1>
        <Link
          href="/FakeUsersManagmentSystemProject"
          className="bg-gray-400 p-1 text-white rounded-md mr-3"
        >
          FakeUsersManagmentSystemProject
        </Link>
      </div>
    </main>
  )
}
