// Задача 2. Створити функцію, яка дозволяє знайти 
// або останню цифру числа, або останній символ числа. 
function getLastChar(a: number | string): string {
    const str = String(a);
    return str.at(-1) ?? '';
}
document.write(getLastChar(123) + '<br>');      
document.write(getLastChar('123') + '<br>');    
document.write(getLastChar('123dad*') + '<br>');

