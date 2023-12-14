Известные ошибки
================

Failed to resolve module specifier "@mui/material/utils"
--------------------------------------------------------

При сборке появляется такая надпись:

```
"@mui/material/utils" is imported by "@mui/material/utils?commonjs-external", 
but could not be resolved – treating it as an external dependency.
```

Собранная версия генерирует в браузере такую ошибку:

```
Uncaught TypeError: Failed to resolve module specifier "@mui/material/utils". 
Relative references must start with either "/", "./", or "../".
```

Решение: Добавить зависимость `@mui/material`.