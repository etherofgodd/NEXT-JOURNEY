const UserProfilePage = (props) => {
  return (
    <div>
      <h1>User Specific profile</h1>
      <h1>{props.userName}</h1>
    </div>
  );
};
export async function getServerSideProps(context) {
  const { params, req, res } = context;

  console.log(params);
  console.log(req);
  console.log(res);

  return {
    props: {
      userName: "Max",
    },
  };
}

export default UserProfilePage;
