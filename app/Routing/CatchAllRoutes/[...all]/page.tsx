"use client"

// qualquer coisa escrita após o / aparecera na tela como uma lista /Routing/CatchAllRoutes/

export default function AllPage({ params }: any) {
  return (
    <div>
      <h1>Project {params.all}</h1>
      <div>
        <h1>All Routes</h1>
        {params.all.map((p: any) => (
          <li key={p}>{p}</li>
        ))}
      </div>
    </div>
  )
}
