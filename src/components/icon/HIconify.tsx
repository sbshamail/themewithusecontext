import React, { FC } from "react";
import { Icon, IconProps } from "@iconify/react";

interface props extends IconProps {
  icon: string;
}

const HIconify: FC<props> = ({ icon, ...rest }) => {
  return <Icon icon={icon} {...rest} />;
};

export default HIconify;
