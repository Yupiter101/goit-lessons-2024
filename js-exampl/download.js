console.log("Download file.txt");

// Як зробити так щоб при натисканні на кнопку <button> користувачу завантажився file.txt 
// з текстом Serhii?

const USER_NAME = "Serhii";
const USERS = ["Serhii", "Misha", "Henri", "Artem"];



const downloadButton = document.querySelector('button[data-action="download"]');

downloadButton.addEventListener('click', () => {
  // Створюємо Blob з текстом
  const blob = new Blob([USER_NAME], { type: 'text/plain' });
  // Генеруємо URL для Blob
  const url = URL.createObjectURL(blob);
  
  // Створюємо приховане посилання
  const a = document.createElement('a');
  a.href = url;
  a.download = 'file.txt'; // ім'я файлу для завантаження

  // Додаємо посилання в DOM і симулюємо клік
  document.body.appendChild(a);
  a.click();

  // Прибираємо посилання з DOM та звільняємо URL
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});