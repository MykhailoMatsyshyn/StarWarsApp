import { FC } from "react";
import ContentLoader from "react-content-loader";

const LoadingCard: FC = () => (
  <ContentLoader
    speed={1}
    width={387}
    height={605}
    viewBox="0 0 387 605"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
  >
    <rect x="8" y="26" rx="3" ry="3" width="365" height="502" />
    <rect x="74" y="538" rx="0" ry="0" width="230" height="20" />
    <rect x="152" y="565" rx="0" ry="0" width="64" height="30" />
  </ContentLoader>
);

export default LoadingCard;
