# Cómo publicar un post en el blog 📝

Hola Tim. Esta es la guía súper simple para subir un artículo nuevo al blog de DryGoods. No necesitas saber programar. Solo seguir los pasos.

---

## ✍️ Lo que vas a hacer

Vas a crear **un archivo de texto** en GitHub. Cuando lo guardes, el post aparece solo en la página `drygoods.lovable.app/blog`. Sin botones raros, sin esperar a nadie.

Tiempo: **5 minutos**.

---

## 🪜 Paso a paso

### 1. Entra al repo en GitHub
Abre el link del repositorio (el equipo te lo pasa). Inicia sesión con tu cuenta de GitHub.

### 2. Abre la carpeta del blog
En la lista de carpetas, haz click en:

```
src  →  content  →  blog
```

Vas a ver los posts que ya existen (cada uno es un archivo `.md`).

### 3. Crea un archivo nuevo
Arriba a la derecha, click en el botón **`Add file`** → **`Create new file`**.

### 4. Ponle nombre al archivo
El nombre se convierte en la URL del post. Reglas simples:
- Todo en **minúsculas**.
- Sin espacios — usa **guiones** `-`.
- Termina en **`.md`**.

✅ Bien: `como-prevenir-chafing-en-maratones.md`
❌ Mal: `Cómo Prevenir Chafing.md`

URL final → `drygoods.lovable.app/blog/como-prevenir-chafing-en-maratones`

### 5. Copia esta plantilla y pégala en el archivo

```markdown
---
title: "El título de tu post aquí"
description: "Una frase corta que resume el post. Sale en Google y al compartir en redes."
date: "2026-07-01"
author: "Tim"
cover: "/og-default.jpg"
tags: ["running", "tips"]
---

Aquí empieza el cuerpo del post. Escribe normal, como un email.

## Esto es un subtítulo

Esto es un párrafo. Puedes poner palabras en **negrita** o en *cursiva*.

- Esto es una lista
- Con varios puntos
- Lo que quieras

[Así se hace un enlace](https://drygoods.lovable.app)

![Texto alternativo de la imagen](/ruta-a-la-imagen.jpg)
```

### 6. Cambia lo que está entre comillas
Solo edita lo de arriba (entre los dos `---`). Eso es la "ficha técnica":

| Campo | Qué pones |
|---|---|
| `title` | El título grande del post |
| `description` | 1 frase. Aparece en Google y al compartir en WhatsApp/Twitter |
| `date` | La fecha en formato `AÑO-MES-DÍA` (ej: `2026-07-15`) |
| `author` | Tu nombre |
| `cover` | Imagen para compartir (puedes dejarla así por ahora) |
| `tags` | Etiquetas, entre corchetes y comillas |

### 7. Escribe el post
Debajo del segundo `---`, escribe normal. Si quieres que algo sea un **subtítulo**, ponle `##` adelante. Si quieres **negrita**, rodea la palabra con `**`. Eso es todo.

### 8. Guárdalo
Baja hasta el final de la página. Hay un botón verde que dice **`Commit changes`**. Click. Otra ventana — click **`Commit changes`** de nuevo.

### 9. ¡Listo!
En 1 minuto tu post está en vivo en `drygoods.lovable.app/blog`. No hay que avisar a nadie.

---

## 🎨 Trucos rápidos de Markdown

```markdown
# Título grande
## Subtítulo
### Subtítulo más chico

**negrita**
*cursiva*

- punto de lista
- otro punto

1. lista numerada
2. segundo

[texto del enlace](https://el-link.com)

![imagen](/ruta-imagen.jpg)

> Una cita destacada
```

---

## ❓ Si algo sale mal

- **No veo mi post:** espera 1-2 minutos y recarga la página.
- **Me equivoqué en algo:** en GitHub, abre el archivo, click en el lápiz ✏️ arriba a la derecha, edita, **Commit changes**.
- **Quiero borrar un post:** abre el archivo, click en el bote de basura 🗑️ arriba a la derecha, **Commit changes**.
- **No funciona nada:** mándale el link del post al equipo y lo revisamos.

---

## 📋 Checklist antes de publicar

- [ ] El nombre del archivo está en minúsculas, con guiones y termina en `.md`
- [ ] Hay `---` arriba y `---` abajo del bloque de ficha técnica
- [ ] `title` y `description` están llenos
- [ ] La fecha está en formato `2026-07-15`
- [ ] Le diste a **Commit changes** dos veces

Eso es todo. Bienvenido al blog. 🚀
