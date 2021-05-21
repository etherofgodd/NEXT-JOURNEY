import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    router.push("/clients/max/proj1");
  }
  return (
    <div>
      <h1>Project of a given client</h1>
      <button onClick={loadProjectHandler}>Load a Proj</button>
    </div>
  );
};

export default ClientProjectsPage;
