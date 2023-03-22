import * as flsFunctions from "./modules/functions.js";
import IMask from 'imask';
import countryList from "country-list";


flsFunctions.isWebp();

import Swiper, { Navigation, Pagination} from "swiper";

const swiper = new Swiper();

window.onload = function() {
    var currentUrl = window.location.href;
    var targetUrl = "http://localhost:8000/newProject.html";
    
    if (currentUrl === targetUrl) {
      document.getElementById("close").style.display = "none";
    }
  };
  

//country list=======================


const countries = countryList.getNames();
const select = document.getElementById("countriesList");
countries.forEach(function(country) {
    const option = document.createElement("option");
    option.text = country;
    option.value = country;
    select.add(option);
});

//end country list===================

//orcidid mask=======================

document.addEventListener('DOMContentLoaded', () => {

    const mask = (dataValue, options) => { 
      const elements = document.querySelectorAll(`[data-mask="${dataValue}"]`) 
      if (!elements) return 
  
      elements.forEach(el => { 
        IMask(el, options) 
      })
    }

    mask('orcidid', {
        mask: '0000-0000-0000-0000'
    });
    
    mask('zipCode', {
        mask: '00000'
    });
})
//end orcidid========================

//popup=========================================

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

/*function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if(lockPadding.length > 0){
        for(let index = 0; index < lockPadding.length; index++){
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}*/

function popupOpen(curentPopup) {
    if(curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if(popupActive) {
            popupClose(popupActive, false);
        } /*else {
            bodyLock();
        }*/
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function(e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

if(popupLinks.length > 0) {
    for(let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function(e){
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for(let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function(e) {
            popupCloseIcon(el.closest('.popup'));
            e.preventDefault();
        })
    }
}

function popupClose(popupActive, doUnlock = true) {
    if(unlock) {
        popupActive.classList.remove('open');
        if(doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyUnLock() {
    setTimeout(function(){
        if(lockPadding.length > 0){
            for(let index = 0; index < lockPadding.length; index++){
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function(e) {
    if (e.which === 27){
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

(function () {
    if(!Element.prototype.closest) {
        Element.prototype.closest = function(css) {
            var node = this;
            while(node) {
                if(node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function(){
    if(!Element.prototype.matches){
        Element.prototype.matches = Element.prototype.matchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector;
    }
})();

//end popup==========================================