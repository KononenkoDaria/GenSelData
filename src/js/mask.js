import IMask from 'imask';

function masks() {
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
}

export { masks }