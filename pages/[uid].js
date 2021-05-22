const UserIdProfilePage = (props) => {
  return (
    <div>
      <h1>Specific user id</h1>
      <h1>{props.uid}</h1>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  const { uid } = params;

  return {
    props: {
      uid: "Userid-" + uid,
    },
  };
}
export default UserIdProfilePage;
