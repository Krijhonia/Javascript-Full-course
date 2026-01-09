// Switch = can be an efficient replacement for too many else if statements

let day = 1;

switch(day){
    case 1:
        console.log('It is monday');
        break;
    case 2:
        console.log('It is tuesday');
        break; 
    case 3:
        console.log('It is Wednesday');
        break;    
    case 4:
        console.log('It is Thursday');
        break;
    case 5:
        console.log('It is Friday');
        break;
    case 6:
        console.log('It is Saturday');
        break;
    case 7:
        console.log('It is Sunday');
        break;       
    default:
        console.log(`${day} is not valid day`);
        break;               
}
