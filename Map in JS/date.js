const date = ['2024-1-10','2025-2-20','2026-2-30'];
const newDates = date.map(formatteDates);
console.log(newDates);

function formatteDates(element){
    const parts = element.split('-');
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}