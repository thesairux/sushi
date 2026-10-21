# Promo Sushi: página web

Página de pedidos de Promo Sushi (Río Hurtado 861, Peñuelas, Coquimbo): portada con promos destacadas, carta, armado de rolls (proteína, relleno y envoltura
para cada roll) y envío del pedido ordenado por WhatsApp al +56 9 5471 7526.

Es una página estática: no necesita servidor, base de datos ni instalar nada. Funciona en Vercel,
Netlify, GitHub Pages o cualquier hosting, y también abriendo `index.html` directo en el navegador.

## Panel de administración

Entra a **tu-pagina.vercel.app/admin** con el usuario y la contraseña del panel.
El panel no aparece en ningún menú de la página ni en Google.

Ahí ves tu página tal cual, y:
- **Tocas cualquier texto** (títulos, nombres y descripciones de productos) y escribes encima.
- Con los botones amarillos **Editar** de cada parte, o con el **+** de cada producto, abres sus opciones:
  precios, fotos, opciones para elegir, productos agotados, promos de la portada, horario, dirección,
  WhatsApp y las opciones para armar rolls (proteínas, rellenos, envolturas y sus precios).
- **Ver como cliente** muestra la página sin marcas de edición; **Celular** la muestra en tamaño de teléfono.
- Al tocar **Publicar**, los cambios se guardan en este repositorio y Vercel actualiza la página sola
  en uno o dos minutos.

### Configuración (una sola vez, en Vercel)

En el proyecto de Vercel: **Settings → Environment Variables**

| Nombre | Para qué sirve |
| --- | --- |
| `GITHUB_TOKEN` | Obligatoria. Clave de GitHub con permiso *Contents: Read and write* sobre este repositorio. Solo la usa el servidor; nunca llega al navegador. |
| `ADMIN_USER` | Opcional. Cambia el usuario del panel (si no está: `promosushi`). |
| `ADMIN_PASSWORD` | Opcional. Cambia la contraseña del panel (si no está, se usa la contraseña de fábrica). |
| `GITHUB_REPO` | Opcional. `usuario/repositorio`, si el repositorio cambia de dueño o de nombre. |
| `GITHUB_BRANCH` | Opcional. Rama que publica Vercel (si no está: `main`). |

Después de agregar o cambiar una variable, hay que volver a publicar (Deployments → Redeploy).
Para revisar la configuración, abre **tu-pagina.vercel.app/api/admin**: dice si la clave de GitHub está puesta
(nunca la muestra).

## Cambiar la carta a mano

Todo está en **`carta.js`** (el panel escribe ese mismo archivo). Desde GitHub: abre el archivo, toca el lápiz (Edit), cambia lo que necesites
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
  de *Ármalos a tu pinta*, `"rolls"` dice cuántos rolls arma el cliente. Las envolturas de queso y de palta
  tienen `"gratis": 1`: la primera de cada una no se cobra y cada repetida cuesta $1.000
  (palta + queso = gratis; palta + palta = $1.000; palta + palta + queso = $1.000).
- **Mapa**: `"mapa"` es el enlace del local en Google Maps y `"mapaBusqueda"` lo que se busca para mostrar el mapa.
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
- `admin.html`: el panel de administración.
- `api/admin.js`: el servidor del panel (revisa la contraseña y guarda los cambios en GitHub).
- `fotos/`: las fotos que se suben desde el panel (se crea sola).
- `vercel.json` y `robots.txt`: configuración para que el panel no aparezca en Google.

## Cómo funciona el pedido

El cliente arma el pedido, escribe su nombre y elige retiro o delivery (con dirección, ubicación opcional
y forma de pago). Al tocar **Enviar pedido por WhatsApp** se abre WhatsApp con un mensaje ordenado:
productos, opciones, lo elegido en cada roll, notas y subtotal. El pedido queda guardado en el navegador del
cliente aunque cierre la página.
