function checkInputAbstract() {
    document.addEventListener('DOMContentLoaded', () => {
        const textarea = document.querySelector('#abstract');
        const wordCount = document.querySelector('#wordCount');
        const MAX_WORDS = 1000;
  
        textarea.addEventListener('input', () => {
        const words = textarea.value.trim().split(/\s+/);
        wordCount.textContent = `${words.length} words`;
  
        if (words.length > MAX_WORDS) {
            textarea.value = words.slice(0, MAX_WORDS).join(' ');
            wordCount.textContent = `${MAX_WORDS} words`;
        }
        }); 
    });
}

export { checkInputAbstract }
  