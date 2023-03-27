import * as flsFunctions from "./modules/functions.js";
import { masks } from "./mask.js";
import Swiper, { Navigation, Pagination} from "swiper";
import { listOfCountries } from "./listOfCounties.js";
import { checkInputAbstract } from "./checkInputAbstract.js";
import { popup } from "./popup.js";
import { newProjectForm } from "./newProjectForm.js";

newProjectForm();
listOfCountries();
checkInputAbstract();
popup();
masks();
flsFunctions.isWebp();

const swiper = new Swiper();
