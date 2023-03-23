import * as flsFunctions from "./modules/functions.js";
import { masks } from "./mask.js";
import Swiper, { Navigation, Pagination} from "swiper";
import { listOfCountries } from "./listOfCounties.js";
import { checkInputAbstract } from "./checkInputAbstract.js";
import { popup } from "./popup.js";

listOfCountries();
checkInputAbstract();
popup();
masks();
flsFunctions.isWebp();

const swiper = new Swiper();

window.onload = function() {
    var currentUrl = window.location.href;
    var targetUrl = "http://localhost:8000/newProject.html";
    
    if (currentUrl === targetUrl) {
      document.getElementById("close").style.display = "none";
    }
};
  

//==========================
(function() {
    try {
      var script = document.createElement('script');
      if ('async') {
        script.async = true;
      }
      script.src = 'http://HOST:3000/browser-sync/browser-sync-client.js?v=2.29.0'.replace("HOST", location.hostname);
      if (document.body) {
        document.body.appendChild(script);
      }
    } catch (e) {
      console.error("Browsersync: could not append script tag", e);
    }
})()
//===========================
