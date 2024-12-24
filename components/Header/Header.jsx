import { s } from "./Header.style";
import { Image, Text } from "react-native";
import logoImg from "../../assets/logo.png";


export function Header() {
  return <>
  <Image style={s.img} source={logoImg}  resizeMode="contain"/>
  <Text style={s.subtitle}>You probably have something to do</Text>
  </>;
}
