import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHome,
  faUser,
  faSearch,
  faShoppingCart,
  faHeart,
  faBars,
  faTimes,
  faStar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// Add icons to the library
library.add(
  // Solid icons
  faHome,
  faUser,
  faSearch,
  faShoppingCart,
  faHeart,
  faBars,
  faTimes,
  faStar,
  faChevronLeft,
  faChevronRight,

  // Brand icons
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
