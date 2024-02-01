import Link from "next/link"

export default function Home() {
  return (
    <main className="px-3">
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
    </main>
  )
}
