import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

const BackArrow = styled(AntDesign).attrs({ name: "arrowleft", size: 24, color: "black" })`
  position: absolute;
  top: -2.5px;
  left: 20px;
  z-index: 999;
`;

export default BackArrow;
