export default function EnvTests() {
  console.log(process.env.MONGO_URI)
  console.log(process.env.NODE_ENV)
  console.log(process.env.JWT_SECRET)

  return (
    <div>
      <h1>page envtests</h1>
      {process.env.MONGO_URI ? (
        <h1>DB Successfully Connected</h1>
      ) : (
        <h1>404 DB Not Found</h1>
      )}
    </div>
  )
}
