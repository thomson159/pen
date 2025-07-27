import scrollTo from "gatsby-plugin-smoothscroll";
import i18n from "./src/i18n";

export { wrapRootElement } from "./src/apollo/wrapper";

export function onRouteUpdate({ location }) {
  if (location.hash) {
    scrollTo(location.hash);
  } else {
    window.scroll(0, 0);
  }
}

export const onInitialClientRender = () => {
  const lng = localStorage.getItem("i18nextLng") || "en";
  i18n.changeLanguage(lng);
};
