import ContentLoader from "react-content-loader";

const Index = (props) => (
  <ContentLoader
    className={"pizza-block"}
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="138" cy="138" r="125" />
    <rect x="0" y="288" rx="19" ry="19" width="280" height="23" />
    <rect x="0" y="328" rx="24" ry="24" width="280" height="88" />
    <rect x="0" y="426" rx="0" ry="0" width="95" height="30" />
    <rect x="119" y="425" rx="0" ry="0" width="155" height="30" />
  </ContentLoader>
);

export default Index;
