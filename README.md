# Mónaco Sushi y más: página web

Copia de [monacochillan.cl](https://monacochillan.cl): portada con promos destacadas, carta completa,
pedido con opciones (cambiar ingredientes, envoltura, extras) y envío del pedido ordenado por WhatsApp.

Es una página estática: no necesita servidor, base de datos ni instalar nada. Funciona en Vercel,
Netlify, GitHub Pages o cualquier hosting, y también abriendo `index.html` directo en el navegador.

## Cambiar la carta, los precios o el horario

Todo está en **`carta.js`**. Desde GitHub: abre el archivo, toca el lápiz (Edit), cambia lo que necesites
y guarda con **Commit changes**. Si la página está en Vercel, se actualiza sola en un minuto.

- **Precio**: cambia el número de `"precio"`. Va sin punto ni signo: `5990`, no `"$5.990"`.
- **Producto agotado**: agrega `"disponible": false` al producto.
- **Producto nuevo**: copia uno parecido de la misma categoría y cambia `id`, `nombre`, `detalle` y `precio`.
  El `id` no se puede repetir.
- **Promo en la portada**: agrega `"destacado": true` y una `"foto"`.
- **Fotos**: súbelas a la carpeta `img/carta/` y escribe la ruta, por ejemplo `"foto": "img/carta/mi-foto.webp"`.
  Si una categoría tiene al menos un producto con foto, se muestra en tarjetas; si no, en lista.
- **Horario**: `"lunes": "13:00-22:00"`, `"domingo": "cerrado"`, o dos turnos `"12:00-15:30, 19:00-23:00"`.
  Fuera del horario los productos muestran *Cerrado* y no se pueden agregar.
- **Días sin atención** (feriados): `"diasCerrados": ["2026-12-25", "2027-01-01"]`.
- **WhatsApp, dirección, Instagram**: en `"negocio"`, al principio del archivo.
- **Valor del delivery**: `"valorDelivery": 2000` lo suma al total; con `null` aparece *Por confirmar*.
- **Datos de transferencia**: `"datosTransferencia": "Banco …\nCuenta …\nRUT …"` se muestran cuando el
  cliente elige pagar con transferencia.

Al editar, cuida las comillas y las comas: cada elemento de una lista va separado por una coma.
Si la carta deja de aparecer, lo más probable es que falte o sobre una coma en el último cambio.

## Publicar en Vercel

1. En [vercel.com](https://vercel.com) → **Add New… → Project** → importa este repositorio.
2. No hay que configurar nada: toca **Deploy**.
3. Para usar el dominio: **Settings → Domains** → agrega `monacochillan.cl` y sigue las instrucciones de DNS.
   Ojo: al apuntar el dominio aquí, reemplaza a la página que está publicada hoy.

## Archivos

- `index.html`: estructura de la página y textos fijos (portada, cómo pedir, ubicación).
- `carta.js`: datos del local, horario, productos, precios y opciones para personalizar.
- `css/estilos.css`: colores, tipografías y diseño (computador y celular).
- `js/app.js`: carta, buscador, pedido, horario de apertura y mensaje de WhatsApp.
- `img/`: logo, fotos del local, mural y fotos de la carta.

## Cómo funciona el pedido

El cliente arma el pedido, escribe su nombre y elige retiro o delivery (con dirección, ubicación opcional
y forma de pago). Al tocar **Enviar pedido por WhatsApp** se abre WhatsApp con un mensaje ordenado:
productos, opciones, cambios por roll, notas y subtotal. El pedido queda guardado en el navegador del
cliente aunque cierre la página.
