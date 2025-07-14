import React from "react";
import avatarImage from "./img/vins.png";

export const PlaceHolderUser = React.lazy(async () => ({
  avatarImage: (await import("./img/vins.png")) as any,
  default: (await import("./img/placeholder-logo.svg")) as any,
}));

export const Images = {
  avatarImage,
};
