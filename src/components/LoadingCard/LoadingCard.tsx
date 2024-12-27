import { FC } from "react";
import ContentLoader from "react-content-loader";

const LoadingCard: FC = () => (
  <ContentLoader
    speed={1}
    width={255}
    height={400}
    viewBox="0 0 255 400"
    backgroundColor="#020b16"
    foregroundColor="rgba(240, 0, 0, 0.3)"
  >
    <rect x="8" y="26" rx="3" ry="3" width="239" height="310" />{" "}
    <rect x="74" y="365" rx="0" ry="0" width="120" height="20" />{" "}
  </ContentLoader>
);

export default LoadingCard;
