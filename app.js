let btn = document.querySelector('.btn');
let card = document.querySelector('.card');
let thxCard = document.querySelector('.card-thx');
let ratings = document.querySelectorAll('.btn-numbers');
let result = document.querySelector('.result');


btn.addEventListener('click', () => {
  card.classList.add('hidden');
  thxCard.classList.remove('hidden');
  console.log('clicked');
  
}); 
ratings.forEach((number) => {
  number.addEventListener('click', () => {
    result.textContent = number.textContent;
  });
});
