const start = document.getElementById('start_date');
const end = document.getElementById('end_date');
const today= new Date().toISOString().split('T')[0];
console.log(today); //Année-Mois-Jour

start.value=today;
start.min = today;

const tomorrowDate = ()=>{
    let day = new Date(today);
    day.setDate(day.getDate()+1);
    let tomorrow = day.toISOString().split('T')[0];
    end.value= tomorrow;
    end.min = tomorrow;
}

tomorrowDate();