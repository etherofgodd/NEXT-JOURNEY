import MainHeader from "./main-header";

const layout = (props) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default layout;
