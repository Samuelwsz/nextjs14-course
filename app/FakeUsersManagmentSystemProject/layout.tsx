import Link from "next/link"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="bg-gray-200 h-screen">
        <div className="p-2">
          <Link 
            href="/"
            className="bg-green-700 p-1.5 text-gray-300 font-semibold rounded-md"
          >
            Voltar
          </Link>
        </div>
        <div className="pt-10 pb-16 bg-gray-200">{children}</div>
      </div>
    </>
  )
}
