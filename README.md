# Blip - messanger

Blip – это учебный проект по курсу middle frontend-разработчик. Чат написан на чистом TypeScript, с использованием шаблонов Handlebars. Макет мессенджера доступен [здесь](<https://www.figma.com/design/77WI5evsOvhJ9quzsnpPOy/Chat_external_link-(Copy)?node-id=0-1&p=f&t=NAcIR5bPCp7cBiiw-0>).

---

## Netlify

- [Netlify](https://)

## Установка зависимостей

```sh
npm i
```

### Запуск в режиме разработчика

```sh
npm start
```

### Сборка

```sh
npm run build
```

### Проект запускается по по адресу

```sh
http://localhost:3000
```

### Описание прокета

Это SPA-приложение, сосотоящее из несколько страниц:

- **/** или **/sign-in** — страница входа
- **/sign-up** — страница регистрации нового пользователя
- **/chat** — страница чата, справа отображается список всех чатов, справа активный чат, так же в разработке страница вывода и отправки сообщения
- **/profile** — страница настроек профиля
- **любая другая страница, например /a** — страница "Не найдено"
- **/500 или страница "ошибка сервера"** — раздел в разработке, где будет переиспользован в компонент NotFound во 2 спринте
