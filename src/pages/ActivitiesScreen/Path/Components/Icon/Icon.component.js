import React from "react";
import { Icon, IconLayerOne, IconLayerTwo } from "./Icon.styles";

// eslint-disable-next-line react/prop-types
function IconComponent({ image }) {
  return (
    <IconLayerOne>
      <IconLayerTwo>
        <Icon source={image} />
      </IconLayerTwo>
    </IconLayerOne>
  );
}

export default IconComponent;
