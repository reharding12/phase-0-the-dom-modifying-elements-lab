const mainElement = document.querySelector('main#main');
mainElement.remove();

const newHeader = document.querySelector('h1');
newHeader.id = 'victory';
   

   const newHeaderText = newHeader.innerHTML;
   console.log(newHeaderText.includes('is the champion'));