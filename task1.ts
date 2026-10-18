// Задача 1. Вводиться перший номер  місяця якоїсь пори року (3,6,9,12). 
// Визначити пору року. Передбачити перевірку і генерувати помилку 
// якщо некоректний місяць (1-12) і генерувати помилку якщо це не перший
// місяць пори року. Використати never.
type FirstMonth = 3 | 6 | 9 | 12;

function getSeason(month: number): string {
  if (month < 1 || month > 12) {
    throw new Error(`Некоректний місяць: ${month}`);
  }
  if (![3, 6, 9, 12].includes(month)) {
    throw new Error(`Місяць ${month} не є першим у порі року`);
  }

  switch (month as FirstMonth) {
    case 3: return "Весна";
    case 6: return "Літо";
    case 9: return "Осінь";
    case 12: return "Зима";
    default: return fail(month as never);
  }
}

function fail(x: never): never {
  throw new Error(`Недосяжне значення: ${x}`);
}
