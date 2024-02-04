import NavBar from "../components/NavBar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-gray-400 h-screen">
      <NavBar />
      {children}
    </div>
  )
}
