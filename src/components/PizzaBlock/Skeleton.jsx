import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f2f2f2"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="135" cy="136" r="119" />
    <rect x="5" y="277" rx="10" ry="10" width="264" height="27" />
    <rect x="7" y="374" rx="0" ry="0" width="4" height="1" />
    <rect x="11" y="428" rx="10" ry="10" width="89" height="28" />
    <rect x="118" y="419" rx="25" ry="25" width="148" height="45" />
    <rect x="7" y="325" rx="15" ry="15" width="263" height="74" />
  </ContentLoader>
);

export default Skeleton;
