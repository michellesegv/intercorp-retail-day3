export default function Page({ params }: { params: { id: string } }) {
  return <h1>Order: {params.id}</h1>;
}
