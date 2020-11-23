const start = document.getElementById('start_date');
const end = document.getElementById('end_date');
const today= new Date().toISOString().split('T')[0];
console.log(today); //Année-Mois-Jour

start.value=today;
start.min = today;

