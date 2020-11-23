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

start.addEventListener('change', (e) => {
    let day = new Date(e.target.value);
    day.setDate(day.getDate()+1);
    let tomorrow = day.toISOString().split('T')[0];
    end.min = tomorrow;
    end.value = tomorrow;
})

const bookingTotal = () =>{
    let date1 = new Date(start.value);
    let date2 = new Date(end.value);
    let diffTime = Math.abs(date2-date1);

    let diffDays = Math.ceil(diffTime / (1000*60*60*24));
    let nightPrice = document.getElementById('nightPrice').innerHTML;

    console.log(diffTime);
    console.log(diffDays);

    let total= diffDays * nightPrice;
    document.getElementById('total').innerHTML = total;
}
start.addEventListener('change', () =>bookingTotal());
end.addEventListener('change', () =>bookingTotal());
bookingTotal();