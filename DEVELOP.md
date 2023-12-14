Инструкции для разработчика
===========================

Модель данных
-------------

Модель приложения
- Файлы
- Текущий файл

Файл
- Название файла
- Категории
- Массив наборов карточек

Категория
- Название категории

Набор карточек
- Название набора карточек
- Ссылка на категорию набора карточек
- Массив карточек

Карточка
- Лицевая сторона
- Оборотная сторона

Сторона карточки
- Текст

Возможные улучшения терминологии
- Набор карточек переименовать в Колоду карточек (CardSet -> CardDeck)

Полезные ссылки
---------------

https://vitejs.dev/
https://mobx.js.org/
https://mui.com/joy-ui/getting-started/
https://mui.com/material-ui/material-icons/

Рекомендации от Vite
--------------------

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
