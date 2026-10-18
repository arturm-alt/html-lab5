// Задача 3. Вводиться номер місяця або назва місяця.
// Створити функцію, яка повинна повертати номер пори року (1-4)
// якщо передаємо число, або назву пори року, якщо було введено 
// назву місяця. Використати перевантаження функцій.
function getSeason(month: number): number;
function getSeason(month: string): string;
function getSeason(month: number | string): number | string {
  if (typeof month === "number") {
    if (month < 1 || month > 12) throw new Error("1-12");
    if (month === 12 || month <= 2) return 1;
    if (month <= 5) return 2;
    if (month <= 8) return 3;
    return 4;
  }

  const seasons: Record<string, string> = {
    грудень: "Зима", січень: "Зима", лютий: "Зима",
    березень: "Весна", квітень: "Весна", травень: "Весна",
    червень: "Літо", липень: "Літо", серпень: "Літо",
    вересень: "Осінь", жовтень: "Осінь", листопад: "Осінь"
  };

  const res = seasons[month.trim().toLowerCase()];
  if (!res) throw new Error("Невідомий місяць");
  return res;
}
