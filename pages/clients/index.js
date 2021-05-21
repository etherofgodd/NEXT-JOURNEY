import Link from "next/link";
const ClientsPage = () => {
  const clients = [
    {
      id: "max",
      name: "Maximilian",
    },
    {
      id: "min",
      name: "Minimilian",
    },
    {
      id: "mid",
      name: "Midimilian",
    },
  ];
  return (
    <div>
      <h1>Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
