// Ваш файл скрипта (script.js)

document.addEventListener("DOMContentLoaded", function() {
  // Проверка, был ли пользователь успешно аутентифицирован
  var isAuthenticated = sessionStorage.getItem('authenticated');

  if (!isAuthenticated) {
    // Если не был, отображаем всплывающее окно
    document.getElementById('loginModal').style.display = 'block';
  }
});

function closeModal() {
  // При закрытии окна сохраняем информацию о том, что пользователь аутентифицирован
  sessionStorage.setItem('authenticated', 'true');
  document.getElementById('loginModal').style.display = 'none';
}

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Пример простой проверки логина и пароля (замените на свою логику)
  if (username === "admin" && password === "admin") {
    alert("Вход успешно выполнен!");
    closeModal();
  } else {
    alert("Неверный логин или пароль");
  }
  return false; // Предотвращение отправки формы
}
