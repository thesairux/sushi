# Promo Sushi: página web

Página de pedidos de Promo Sushi (Río Hurtado 861, Peñuelas, Coquimbo): portada con promos destacadas, carta, armado de rolls (proteína, relleno y envoltura
para cada roll) y envío del pedido ordenado por WhatsApp al +56 9 5471 7526.

Es una página estática: no necesita servidor, base de datos ni instalar nada. Funciona en Vercel,
Netlify, GitHub Pages o cualquier hosting, y también abriendo `index.html` directo en el navegador.

## Cambiar la carta, los precios o el horario

Todo está en **`carta.js`**. Desde GitHub: abre el archivo, toca el lápiz (Edit), cambia lo que necesites
y guarda con **Commit changes**. Si la página está en Vercel, se actualiza sola en un minuto.

- **Precio**: cambia el número de `"precio"`. Va sin punto ni signo: `14500`, no `"$14.500"`.
- **Producto agotado**: agrega `"disponible": false` al producto.
- **Producto nuevo**: copia uno parecido de la misma categoría y cambia `id`, `nombre`, `detalle` y `precio`.
  El `id` no se puede repetir.
- **Promo en la portada**: agrega `"destacado": true` y una `"foto"`.
- **Fotos**: súbelas a la carpeta `img/carta/` y escribe la ruta, por ejemplo `"foto": "img/carta/mi-foto.webp"`.
  Si una categoría tiene al menos un producto con foto, se muestra en tarjetas; si no, en lista.
- **Horario**: está cargado de 14:00 a 23:00 todos los días, con `"horarioConfirmado": false`: se muestra como
  *horario referencial, por confirmar* y no bloquea pedidos. Cuando lo confirmes, corrígelo si hace falta
  (`"lunes": "14:00-23:00"`, `"domingo": "cerrado"`, o dos turnos `"12:00-15:30, 19:00-23:00"`) y cambia
  `"horarioConfirmado"` a `true`: aparecerá *Abierto ahora / Cerrado ahora* y fuera de horario no se podrá agregar.
- **Días sin atención** (feriados): `"diasCerrados": ["2026-12-25", "2027-01-01"]`.
- **Nombre, WhatsApp, dirección, Facebook, Instagram**: en `"negocio"`, al principio del archivo. Lo que quede
  vacío no se muestra: sin `"direccion"` no aparece la sección de ubicación; sin `"instagram"`, no hay enlace.
- **Armar rolls**: las opciones de proteína, relleno y envoltura están en `"personalizacion"`. En cada producto
  de *Ármalos a tu pinta*, `"rolls"` dice cuántos rolls arma el cliente. La envoltura usa `"gratis": 1`: la
  primera en queso o palta no se cobra y desde la segunda se cobra su precio ($1.000).
- **Valor del delivery**: hoy es `null` con `"notaDelivery": "Según el sector"`, así que el pedido dice que el
  despacho depende del sector y se confirma por WhatsApp. Con un valor fijo (`"valorDelivery": 2000`) se suma al total.
- **Datos de transferencia**: `"datosTransferencia": "Banco …\nCuenta …\nRUT …"` se muestran cuando el
  cliente elige pagar con transferencia.

Al editar, cuida las comillas y las comas: cada elemento de una lista va separado por una coma.
Si la carta deja de aparecer, lo más probable es que falte o sobre una coma en el último cambio.

## Publicar en Vercel

1. En [vercel.com](https://vercel.com) → **Add New… → Project** → importa este repositorio.
2. No hay que configurar nada: toca **Deploy**.
3. Para usar un dominio propio: **Settings → Domains** → agrégalo y sigue las instrucciones de DNS.

## Archivos

- `index.html`: estructura de la página y textos fijos (portada, arma tu roll, cómo pedir, ubicación).
- `carta.js`: datos del local, horario, productos, precios y opciones para personalizar.
- `css/estilos.css`: colores, tipografías y diseño (computador y celular).
- `js/app.js`: carta, buscador, pedido, horario de apertura y mensaje de WhatsApp.
- `img/`: logo (`logo.png`) e íconos, y en `img/carta/` las fotos de las promos (recortadas de los afiches).

## Cómo funciona el pedido

El cliente arma el pedido, escribe su nombre y elige retiro o delivery (con dirección, ubicación opcional
y forma de pago). Al tocar **Enviar pedido por WhatsApp** se abre WhatsApp con un mensaje ordenado:
productos, opciones, lo elegido en cada roll, notas y subtotal. El pedido queda guardado en el navegador del
cliente aunque cierre la página.
