/*
  CARTA
  =====
  Aquí están los datos del local, el horario y todos los productos con sus precios.
  Para cambiar algo, edita el texto entre comillas o el número y guarda el archivo.

  Reglas rápidas:
  - Los precios van sin punto ni signo: 14500 (no "$14.500").
  - Horario: "13:00-22:00" o "cerrado". Para dos turnos: "12:00-15:30, 19:00-23:00".
    Si "horario" queda en null, la página no muestra abierto/cerrado y siempre deja pedir.
  - horarioConfirmado: con false el horario solo se muestra como referencia ("por confirmar"):
    no aparece abierto/cerrado ni se bloquean pedidos. Cámbialo a true cuando esté confirmado.
  - diasCerrados: fechas en que no se atiende aunque el horario diga abierto. Ej: ["2026-12-25"].
  - Lo que quede vacío ("") no se muestra: por ejemplo, sin "direccion" no aparece la sección Ubicación.
  - Producto agotado: agrega "disponible": false
  - Producto en la portada (promo destacada): agrega "destacado": true y una "foto".
  - Fotos: guárdalas en la carpeta img/carta/ y escribe la ruta, ej: "img/carta/mi-foto.webp".
  - "opciones": lo que el cliente elige (ej: ["Envoltura en palta", "Envoltura en queso"]).
    Si cada opción tiene otro precio, ponlo en "preciosOpciones".
  - "rolls": cuántos rolls arma el cliente en ese producto (20 cortes = 2 rolls de 10).
  - "personalizar": qué elige el cliente en cada roll (los grupos están en "personalizacion").
  - En "personalizacion", "gratis": 1 significa que la primera opción con precio de ese grupo
    no se cobra (ej: la primera envoltura en queso o palta).
  Cuidado con las comas: cada elemento de una lista va separado por una coma.
*/
window.CARTA = {
  "negocio": {
    "nombre": "Promo Sushi",
    "lema": "Ármalos a tu pinta",
    "whatsapp": "56954717526",
    "whatsappVisible": "+56 9 5471 7526",
    "facebook": "https://www.facebook.com/p/Promo-Sushi-100063526634812/",
    "instagram": "",
    "direccion": "Río Hurtado 861",
    "sector": "Peñuelas",
    "ciudad": "Coquimbo",
    "region": "",
    "mapa": "https://www.google.com/maps/search/?api=1&query=R%C3%ADo+Hurtado+861%2C+Pe%C3%B1uelas%2C+Coquimbo%2C+Chile",
    "cartaReferencial": true,
    "valorDelivery": null,
    "notaDelivery": "Según el sector",
    "datosTransferencia": null
  },
  "horario": {
    "lunes": "14:00-23:00",
    "martes": "14:00-23:00",
    "miercoles": "14:00-23:00",
    "jueves": "14:00-23:00",
    "viernes": "14:00-23:00",
    "sabado": "14:00-23:00",
    "domingo": "14:00-23:00"
  },
  "horarioConfirmado": false,
  "diasCerrados": [],
  "secciones": [
    {
      "nombre": "Promos",
      "categorias": [
        {
          "id": "promociones",
          "nombre": "Promociones",
          "productos": [
            {
              "id": "promo-del-dia",
              "nombre": "Promo del día",
              "detalle": "50 cortes más handrolls de pollo de regalo.",
              "precio": 14500,
              "foto": "img/carta/promo-del-dia.webp",
              "destacado": true
            },
            {
              "id": "promo-100-piezas-mixtas",
              "nombre": "100 piezas mixtas",
              "detalle": "50 piezas frías, con envoltura en palta o en queso\n50 piezas calientes",
              "nota": "A elección del chef. Válido por tiempo limitado.",
              "precio": 21990,
              "opciones": ["Fríos envueltos en palta", "Fríos envueltos en queso"],
              "foto": "img/carta/promo-100-piezas.webp",
              "destacado": true
            },
            {
              "id": "promo-handrolls",
              "nombre": "Promo Handrolls",
              "detalle": "3 handrolls.",
              "precio": 9990,
              "foto": "img/carta/promo-handrolls.webp",
              "destacado": true
            }
          ]
        }
      ]
    },
    {
      "nombre": "Ármalos a tu pinta",
      "categorias": [
        {
          "id": "armalos-a-tu-pinta",
          "nombre": "Ármalos a tu pinta",
          "nota": "Promo normal. Todas las promociones sobre 50 cortes llevan una bebida de regalo.",
          "ayuda": "Cada roll lleva queso + 1 proteína + 1 relleno + 1 envoltura.",
          "personalizar": ["proteina", "relleno", "envoltura"],
          "productos": [
            { "id": "armalos-20-cortes", "nombre": "20 cortes", "detalle": "2 rolls de 10 cortes, armados a tu pinta.", "precio": 11900, "rolls": 2 },
            { "id": "armalos-30-cortes", "nombre": "30 cortes", "detalle": "3 rolls de 10 cortes, armados a tu pinta.", "precio": 12990, "rolls": 3 },
            { "id": "armalos-40-cortes", "nombre": "40 cortes", "detalle": "4 rolls de 10 cortes, armados a tu pinta.", "precio": 15990, "rolls": 4 },
            { "id": "armalos-50-cortes", "nombre": "50 cortes", "detalle": "5 rolls de 10 cortes, armados a tu pinta.", "precio": 17500, "rolls": 5 },
            { "id": "armalos-60-cortes", "nombre": "60 cortes", "detalle": "6 rolls de 10 cortes, armados a tu pinta.", "precio": 19000, "rolls": 6 },
            { "id": "armalos-70-cortes", "nombre": "70 cortes", "detalle": "7 rolls de 10 cortes, armados a tu pinta.", "precio": 21000, "rolls": 7 },
            { "id": "armalos-100-cortes", "nombre": "100 cortes", "detalle": "10 rolls de 10 cortes, armados a tu pinta.", "precio": 26990, "rolls": 10 }
          ]
        }
      ]
    }
  ],
  "personalizacion": [
    {
      "id": "proteina",
      "nombre": "Proteína",
      "tipo": "elegir",
      "porRoll": true,
      "min": 1,
      "max": 1,
      "opciones": [
        { "id": "pollo", "nombre": "Pollo", "precio": 0 },
        { "id": "kanikama", "nombre": "Kanikama", "precio": 0 },
        { "id": "salmon", "nombre": "Salmón", "precio": 0 },
        { "id": "camaron", "nombre": "Camarón", "precio": 0 }
      ]
    },
    {
      "id": "relleno",
      "nombre": "Relleno",
      "tipo": "elegir",
      "porRoll": true,
      "min": 1,
      "max": 1,
      "opciones": [
        { "id": "pepino", "nombre": "Pepino", "precio": 0 },
        { "id": "palta", "nombre": "Palta", "precio": 0 },
        { "id": "cebollin", "nombre": "Cebollín", "precio": 0 },
        { "id": "aji-verde", "nombre": "Ají verde", "precio": 0 },
        { "id": "pimenton", "nombre": "Pimentón", "precio": 0 },
        { "id": "champinon", "nombre": "Champiñón", "precio": 0 },
        { "id": "palmitos", "nombre": "Palmitos", "precio": 0 },
        { "id": "nueces", "nombre": "Nueces", "precio": 0 },
        { "id": "aceitunas", "nombre": "Aceitunas", "precio": 0 },
        { "id": "choclo-baby", "nombre": "Choclo baby", "precio": 0 },
        { "id": "zanahoria", "nombre": "Zanahoria", "precio": 0 },
        { "id": "almendra", "nombre": "Almendra", "precio": 0 },
        { "id": "frutillas", "nombre": "Frutillas", "precio": 0 }
      ]
    },
    {
      "id": "envoltura",
      "nombre": "Envoltura",
      "tipo": "elegir",
      "porRoll": true,
      "min": 1,
      "max": 1,
      "gratis": 1,
      "ayuda": "Envoltura en queso o palta: la primera es gratis; desde la segunda, $1.000 cada una.",
      "opciones": [
        { "id": "panko", "nombre": "Panko", "precio": 0 },
        { "id": "sesamo", "nombre": "Sésamo", "precio": 0 },
        { "id": "ciboulette", "nombre": "Ciboulette", "precio": 0 },
        { "id": "amapola", "nombre": "Amapola", "precio": 0 },
        { "id": "merken", "nombre": "Merkén", "precio": 0 },
        { "id": "nori", "nombre": "Nori", "precio": 0 },
        { "id": "panko-nori", "nombre": "Panko-nori", "precio": 0 },
        { "id": "chia", "nombre": "Chía", "precio": 0 },
        { "id": "quinoa", "nombre": "Quinoa", "precio": 0 },
        { "id": "tempura", "nombre": "Tempura", "precio": 0 },
        { "id": "panko-coco", "nombre": "Panko-coco", "precio": 0 },
        { "id": "panko-crispy", "nombre": "Panko-crispy", "precio": 0 },
        { "id": "queso", "nombre": "Queso", "precio": 1000 },
        { "id": "palta", "nombre": "Palta", "precio": 1000 }
      ]
    }
  ],
  "ingredientes": {}
};
