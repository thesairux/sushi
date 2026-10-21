/*
  CARTA DE MÓNACO
  ===============
  Aquí están los datos del local, el horario y todos los productos con sus precios.
  Para cambiar algo, edita el texto entre comillas o el número y guarda el archivo.

  Reglas rápidas:
  - Los precios van sin punto ni signo: 5990 (no "$5.990").
  - Horario: "13:00-22:00" o "cerrado". Para dos turnos: "12:00-15:30, 19:00-23:00".
  - diasCerrados: fechas en que no se atiende aunque el horario diga abierto. Ej: ["2026-12-25"].
  - Producto agotado: agrega "disponible": false
  - Producto en la portada (promo destacada): agrega "destacado": true y una "foto".
  - Fotos: guárdalas en la carpeta img/carta/ y escribe la ruta, ej: "img/carta/mi-foto.webp".
  - "opciones": lo que el cliente elige (ej: ["Pollo", "Kanikama"]).
    Si cada opción tiene otro precio, ponlo en "preciosOpciones".
  - "rolls": cómo viene armado cada roll (envoltura y relleno). Sirve para que el cliente
    pueda agregar o cambiar ingredientes; los nombres vienen de "ingredientes" al final.
  - "personalizar": qué cambios se ofrecen (los grupos están en "personalizacion").
    En la categoría vale para todos sus productos; en un producto reemplaza al de la categoría.
  Cuidado con las comas: cada elemento de una lista va separado por una coma.
*/
window.CARTA = {
  "negocio": {
    "nombre": "Mónaco",
    "lema": "Sushi y más",
    "whatsapp": "56971431684",
    "instagram": "monaco_chillan",
    "direccion": "5 de Abril 1163",
    "ciudad": "Chillán",
    "region": "Región de Ñuble",
    "mapa": "https://www.google.com/maps/search/?api=1&query=M%C3%B3naco+Sushi%2C+5+de+Abril+1163%2C+Chill%C3%A1n%2C+Chile",
    "cartaReferencial": true,
    "valorDelivery": null,
    "datosTransferencia": null
  },
  "horario": {
    "lunes": "13:00-22:00",
    "martes": "13:00-22:00",
    "miercoles": "13:00-22:00",
    "jueves": "13:00-22:00",
    "viernes": "13:00-22:00",
    "sabado": "13:00-22:00",
    "domingo": "cerrado"
  },
  "diasCerrados": [],
  "secciones": [
    {
      "nombre": "Promos",
      "categorias": [
        {
          "id": "ofertas",
          "nombre": "Ofertas",
          "nota": "Promos 2x: lleva dos por el precio publicado.",
          "productos": [
            {
              "id": "ofertas-promo-hand-rolls-2x",
              "nombre": "Promo Hand Rolls 2x",
              "detalle": "2 hand rolls de pollo o kanikama, palta y queso crema.",
              "incluye": "2 salsas: soya o agridulce",
              "precio": 5990,
              "opciones": ["Pollo", "Kanikama"],
              "foto": "img/carta/promo-hand-rolls-2x.webp",
              "destacado": true
            },
            {
              "id": "ofertas-promo-sushi-burger-2x",
              "nombre": "Promo Sushi Burger 2x",
              "detalle": "2 sushi burgers de pollo frito, palta y queso crema, con cebollín o papa crispy.",
              "incluye": "4 salsas: soya o agridulce",
              "precio": 13990,
              "opciones": ["Cebollín", "Papa crispy"],
              "foto": "img/carta/promo-sushi-burger-2x.jpg",
              "destacado": true
            },
            {
              "id": "ofertas-promo-gohan-2x",
              "nombre": "Promo Gohan 2x",
              "detalle": "2 gohan con base de arroz, pollo frito, palta, queso crema, cebollín, topping y salsa.",
              "incluye": "2 salsas: soya o agridulce",
              "precio": 10990,
              "opciones": ["Salsa soya", "Salsa agridulce"],
              "foto": "img/carta/promo-gohan-2x.webp",
              "destacado": true
            }
          ]
        },
        {
          "id": "promos-mas-vendidas",
          "nombre": "Promos más vendidas",
          "personalizar": ["agrega-a-tu-roll", "envoltura", "sin-nori"],
          "productos": [
            {
              "id": "promos-mas-vendidas-promo-tori-30",
              "nombre": "Promo Tori 30",
              "detalle": "10 piezas envueltas en panko, rellenas de pollo, palta y queso crema\n10 piezas envueltas en palta, rellenas de pollo, palta y queso crema\n10 piezas envueltas en queso crema, rellenas de pollo, palta y queso crema",
              "incluye": "3 salsas: soya o agridulce",
              "precio": 12990,
              "rolls": [
                {
                  "texto": "10 piezas envueltas en panko, rellenas de pollo, palta y queso crema",
                  "envoltura": "panko",
                  "relleno": ["pollo", "palta", "queso-crema"]
                },
                {
                  "texto": "10 piezas envueltas en palta, rellenas de pollo, palta y queso crema",
                  "envoltura": "palta",
                  "relleno": ["pollo", "palta", "queso-crema"]
                },
                {
                  "texto": "10 piezas envueltas en queso crema, rellenas de pollo, palta y queso crema",
                  "envoltura": "queso-crema",
                  "relleno": ["pollo", "palta", "queso-crema"]
                }
              ]
            },
            {
              "id": "promos-mas-vendidas-promo-tori-60",
              "nombre": "Promo Tori 60",
              "detalle": "20 piezas envueltas en panko, rellenas de pollo, palta y queso crema\n20 piezas envueltas en palta, rellenas de pollo, palta y queso crema\n20 piezas envueltas en queso crema, rellenas de pollo, palta y queso crema",
              "incluye": "6 salsas: soya o agridulce",
              "precio": 25980,
              "rolls": [
                {
                  "texto": "20 piezas envueltas en panko, rellenas de pollo, palta y queso crema",
                  "envoltura": "panko",
                  "relleno": ["pollo", "palta", "queso-crema"]
                },
                {
                  "texto": "20 piezas envueltas en palta, rellenas de pollo, palta y queso crema",
                  "envoltura": "palta",
                  "relleno": ["pollo", "palta", "queso-crema"]
                },
                {
                  "texto": "20 piezas envueltas en queso crema, rellenas de pollo, palta y queso crema",
                  "envoltura": "queso-crema",
                  "relleno": ["pollo", "palta", "queso-crema"]
                }
              ]
            }
          ]
        },
        {
          "id": "ofertas-en-cortes",
          "nombre": "Ofertas en cortes",
          "personalizar": ["agrega-a-tu-roll", "envoltura", "sin-nori"],
          "productos": [
            {
              "id": "ofertas-en-cortes-promo-frito-x3",
              "nombre": "Promo Frito x3",
              "detalle": "20 cortes fritos en panko, kanikama, palta y queso crema\n10 cortes fritos en panko, pollo, palta y queso crema",
              "incluye": "3 salsas: soya o agridulce",
              "precio": 10490,
              "rolls": [
                {
                  "texto": "20 cortes fritos en panko, kanikama, palta y queso crema",
                  "envoltura": "panko",
                  "relleno": ["kanikama", "palta", "queso-crema"],
                  "frito": true
                },
                {
                  "texto": "10 cortes fritos en panko, pollo, palta y queso crema",
                  "envoltura": "panko",
                  "relleno": ["pollo", "palta", "queso-crema"],
                  "frito": true
                }
              ]
            },
            {
              "id": "ofertas-en-cortes-promo-oferta-34",
              "nombre": "Promo Oferta 34",
              "detalle": "20 cortes fritos en panko, rellenos de pollo y queso crema\n10 cortes envueltos en ciboulette, rellenos de cebollín, palta y kanikama\n4 arrollados primavera",
              "incluye": "4 salsas: soya o agridulce",
              "precio": 9990,
              "rolls": [
                {
                  "texto": "20 cortes fritos en panko, rellenos de pollo y queso crema",
                  "envoltura": "panko",
                  "relleno": ["pollo", "queso-crema"],
                  "frito": true
                },
                {
                  "texto": "10 cortes envueltos en ciboulette, rellenos de cebollín, palta y kanikama",
                  "envoltura": "ciboulette",
                  "relleno": ["cebollin", "palta", "kanikama"]
                }
              ]
            },
            {
              "id": "ofertas-en-cortes-promo-tori-monaco",
              "nombre": "Promo Tori Mónaco",
              "detalle": "Envueltos en queso crema, rellenos de pollo, palta y queso crema\nEnvueltos en palta, rellenos de pollo, palta y queso crema\nFritos en panko, rellenos de pollo, palta y queso crema",
              "precio": 12990,
              "rolls": [
                {
                  "texto": "Envueltos en queso crema, rellenos de pollo, palta y queso crema",
                  "envoltura": "queso-crema",
                  "relleno": ["pollo", "palta", "queso-crema"]
                },
                {
                  "texto": "Envueltos en palta, rellenos de pollo, palta y queso crema",
                  "envoltura": "palta",
                  "relleno": ["pollo", "palta", "queso-crema"]
                },
                {
                  "texto": "Fritos en panko, rellenos de pollo, palta y queso crema",
                  "envoltura": "panko",
                  "relleno": ["pollo", "palta", "queso-crema"],
                  "frito": true
                }
              ]
            },
            {
              "id": "ofertas-en-cortes-promo-mix-40-cortes",
              "nombre": "Promo Mix 40 cortes",
              "detalle": "Envueltos en panko, relleno de kanikama, palta y queso crema\nEnvueltos en ciboulette, relleno de camarón, palta y queso crema\nEnvueltos en tempura, relleno de pollo, pimentón y queso crema\nEnvueltos en sésamo, relleno de champiñón, palta y queso crema",
              "incluye": "4 salsas: soya o agridulce",
              "precio": 13990,
              "rolls": [
                {
                  "texto": "Envueltos en panko, relleno de kanikama, palta y queso crema",
                  "envoltura": "panko",
                  "relleno": ["kanikama", "palta", "queso-crema"]
                },
                {
                  "texto": "Envueltos en ciboulette, relleno de camarón, palta y queso crema",
                  "envoltura": "ciboulette",
                  "relleno": ["camaron", "palta", "queso-crema"]
                },
                {
                  "texto": "Envueltos en tempura, relleno de pollo, pimentón y queso crema",
                  "envoltura": "tempura",
                  "relleno": ["pollo", "pimenton", "queso-crema"]
                },
                {
                  "texto": "Envueltos en sésamo, relleno de champiñón, palta y queso crema",
                  "envoltura": "sesamo",
                  "relleno": ["champinon", "palta", "queso-crema"]
                }
              ]
            }
          ]
        },
        {
          "id": "promos-classi",
          "nombre": "Promos Classi",
          "personalizar": ["agrega-a-tu-roll", "envoltura", "sin-nori"],
          "productos": [
            {
              "id": "promos-classi-promo-classi-38",
              "nombre": "Promo Classi 38",
              "detalle": "10 cortes envueltos en panko, rellenos de pollo, palta y queso crema\n10 cortes envueltos en sésamo, rellenos de pollo teriyaki, cebollín y queso crema\n10 cortes envueltos en ciboulette, rellenos de kanikama, palta y queso crema\n8 hosomakis rellenos de kanikama y queso crema",
              "incluye": "4 salsas: soya o agridulce",
              "precio": 12490,
              "rolls": [
                {
                  "texto": "10 cortes envueltos en panko, rellenos de pollo, palta y queso crema",
                  "envoltura": "panko",
                  "relleno": ["pollo", "palta", "queso-crema"]
                },
                {
                  "texto": "10 cortes envueltos en sésamo, rellenos de pollo teriyaki, cebollín y queso crema",
                  "envoltura": "sesamo",
                  "relleno": ["pollo-teriyaki", "cebollin", "queso-crema"]
                },
                {
                  "texto": "10 cortes envueltos en ciboulette, rellenos de kanikama, palta y queso crema",
                  "envoltura": "ciboulette",
                  "relleno": ["kanikama", "palta", "queso-crema"]
                }
              ]
            },
            {
              "id": "promos-classi-promo-classi-48",
              "nombre": "Promo Classi 48",
              "detalle": "10 cortes envueltos en panko, rellenos de pollo, palta y queso crema\n10 cortes envueltos en panko, rellenos de kanikama, cebollín y queso crema\n10 cortes envueltos en sésamo, rellenos de pollo teriyaki, ciboulette y queso crema\n10 cortes envueltos en ciboulette, rellenos de kanikama, palta y queso crema\n8 hosomakis rellenos de kanikama y queso crema",
              "incluye": "5 salsas: soya o agridulce",
              "precio": 15490,
              "rolls": [
                {
                  "texto": "10 cortes envueltos en panko, rellenos de pollo, palta y queso crema",
                  "envoltura": "panko",
                  "relleno": ["pollo", "palta", "queso-crema"]
                },
                {
                  "texto": "10 cortes envueltos en panko, rellenos de kanikama, cebollín y queso crema",
                  "envoltura": "panko",
                  "relleno": ["kanikama", "cebollin", "queso-crema"]
                },
                {
                  "texto": "10 cortes envueltos en sésamo, rellenos de pollo teriyaki, ciboulette y queso crema",
                  "envoltura": "sesamo",
                  "relleno": ["pollo-teriyaki", "ciboulette", "queso-crema"]
                },
                {
                  "texto": "10 cortes envueltos en ciboulette, rellenos de kanikama, palta y queso crema",
                  "envoltura": "ciboulette",
                  "relleno": ["kanikama", "palta", "queso-crema"]
                }
              ]
            },
            {
              "id": "promos-classi-promo-classi-70",
              "nombre": "Promo Classi 70",
              "detalle": "10 cortes envueltos en panko, relleno de pollo, palta y queso\n10 cortes envueltos en panko, relleno de kanikama, cebollín y queso\n10 cortes envueltos en panko, relleno de champiñones, palta y queso\n10 cortes envueltos en sésamo, pollo teriyaki, cebollín y queso\n10 cortes envueltos en ciboulette, relleno de kanikama, palta y queso\n10 cortes envueltos en nori, relleno de palmito, morrón y queso\n10 cortes envueltos en merkén, relleno de pollo, choclo y queso",
              "incluye": "7 salsas: soya o agridulce",
              "precio": 19490,
              "rolls": [
                {
                  "texto": "10 cortes envueltos en panko, relleno de pollo, palta y queso",
                  "envoltura": "panko",
                  "relleno": ["pollo", "palta", "queso"]
                },
                {
                  "texto": "10 cortes envueltos en panko, relleno de kanikama, cebollín y queso",
                  "envoltura": "panko",
                  "relleno": ["kanikama", "cebollin", "queso"]
                },
                {
                  "texto": "10 cortes envueltos en panko, relleno de champiñones, palta y queso",
                  "envoltura": "panko",
                  "relleno": ["champinon", "palta", "queso"]
                },
                {
                  "texto": "10 cortes envueltos en sésamo, pollo teriyaki, cebollín y queso",
                  "envoltura": "sesamo",
                  "relleno": ["pollo-teriyaki", "cebollin", "queso"]
                },
                {
                  "texto": "10 cortes envueltos en ciboulette, relleno de kanikama, palta y queso",
                  "envoltura": "ciboulette",
                  "relleno": ["kanikama", "palta", "queso"]
                },
                {
                  "texto": "10 cortes envueltos en nori, relleno de palmito, morrón y queso",
                  "envoltura": "nori",
                  "relleno": ["palmito", "morron", "queso"]
                },
                {
                  "texto": "10 cortes envueltos en merkén, relleno de pollo, choclo y queso",
                  "envoltura": "merken",
                  "relleno": ["pollo", "choclo", "queso"]
                }
              ]
            }
          ]
        },
        {
          "id": "promos-vip",
          "nombre": "Promos VIP",
          "personalizar": ["agrega-a-tu-roll", "envoltura", "sin-nori"],
          "productos": [
            {
              "id": "promos-vip-promo-vip-26",
              "nombre": "Promo VIP 26",
              "detalle": "10 cortes fritos en panko rellenos de pollo, palta y queso crema\n10 cortes rainbow envueltos en palta y queso crema, rellenos de camarones, queso crema y cebollín\n6 bolitas de arroz rellenas de queso: 2 fritas en panko, 2 envueltas en amapola y 2 envueltas en ciboulette",
              "incluye": "3 salsas: soya o agridulce",
              "precio": 10490,
              "rolls": [
                {
                  "texto": "10 cortes fritos en panko rellenos de pollo, palta y queso crema",
                  "envoltura": "panko",
                  "relleno": ["pollo", "palta", "queso-crema"],
                  "frito": true
                },
                {
                  "texto": "10 cortes rainbow envueltos en palta y queso crema, rellenos de camarones, queso crema y cebollín",
                  "envoltura": "rainbow-palta-queso-crema",
                  "relleno": ["camaron", "queso-crema", "cebollin"]
                }
              ]
            },
            {
              "id": "promos-vip-promo-vip-36",
              "nombre": "Promo VIP 36",
              "detalle": "10 cortes envueltos en panko, rellenos de pollo, palta y queso crema\n10 cortes envueltos en queso crema, rellenos de camarón, cebollín y queso crema\n10 cortes envueltos en palta, rellenos de kanikama, palta y queso crema\n6 bolitas de arroz rellenas de queso: 2 fritas en panko, 2 envuelta en amapola y 2 envueltas en ciboulette.",
              "incluye": "4 salsas: soya o agridulce",
              "precio": 14490,
              "rolls": [
                {
                  "texto": "10 cortes envueltos en panko, rellenos de pollo, palta y queso crema",
                  "envoltura": "panko",
                  "relleno": ["pollo", "palta", "queso-crema"]
                },
                {
                  "texto": "10 cortes envueltos en queso crema, rellenos de camarón, cebollín y queso crema",
                  "envoltura": "queso-crema",
                  "relleno": ["camaron", "cebollin", "queso-crema"]
                },
                {
                  "texto": "10 cortes envueltos en palta, rellenos de kanikama, palta y queso crema",
                  "envoltura": "palta",
                  "relleno": ["kanikama", "palta", "queso-crema"]
                }
              ]
            },
            {
              "id": "promos-vip-promo-vip-46",
              "nombre": "Promo VIP 46",
              "detalle": "10 cortes envueltos en panko, rellenos de pollo, palta y queso crema\n10 cortes envueltos en tempura, rellenos de camarón, cebollín y queso crema\n10 cortes envueltos en queso crema, rellenos de champiñón, palta y queso\n10 cortes envueltos en palta, relleno de kanikama, palta y queso crema\n6 bolitas de arroz rellenas de queso: 2 fritas en panko, 2 envuelta en amapola y 2 envueltas en ciboulette.",
              "incluye": "5 salsas: soya o agridulce",
              "precio": 17490,
              "rolls": [
                {
                  "texto": "10 cortes envueltos en panko, rellenos de pollo, palta y queso crema",
                  "envoltura": "panko",
                  "relleno": ["pollo", "palta", "queso-crema"]
                },
                {
                  "texto": "10 cortes envueltos en tempura, rellenos de camarón, cebollín y queso crema",
                  "envoltura": "tempura",
                  "relleno": ["camaron", "cebollin", "queso-crema"]
                },
                {
                  "texto": "10 cortes envueltos en queso crema, rellenos de champiñón, palta y queso",
                  "envoltura": "queso-crema",
                  "relleno": ["champinon", "palta", "queso"]
                },
                {
                  "texto": "10 cortes envueltos en palta, relleno de kanikama, palta y queso crema",
                  "envoltura": "palta",
                  "relleno": ["kanikama", "palta", "queso-crema"]
                }
              ]
            },
            {
              "id": "promos-vip-promo-vip-66",
              "nombre": "Promo VIP 66",
              "detalle": "10 cortes envueltos en panko, rellenos de pollo, palta y queso crema\n10 cortes envueltos en ciboulette, rellenos de camarón, cebollín y queso crema\n10 cortes envueltos en palta, relleno de kanikama, palta y queso crema\n10 cortes envueltos en queso crema, relleno de pollo teriyaki, palta y cebollín\n10 cortes envueltos en palta, rellenos de salmón, cebollín y queso crema\n10 cortes envueltos en sésamo, rellenos de choclo, palta y queso crema\n6 bolitas de arroz rellenas de queso: 2 fritas en panko, 2 envuelta en amapola y envueltas en ciboulette.",
              "incluye": "7 salsas: soya o agridulce",
              "precio": 26490,
              "rolls": [
                {
                  "texto": "10 cortes envueltos en panko, rellenos de pollo, palta y queso crema",
                  "envoltura": "panko",
                  "relleno": ["pollo", "palta", "queso-crema"]
                },
                {
                  "texto": "10 cortes envueltos en ciboulette, rellenos de camarón, cebollín y queso crema",
                  "envoltura": "ciboulette",
                  "relleno": ["camaron", "cebollin", "queso-crema"]
                },
                {
                  "texto": "10 cortes envueltos en palta, relleno de kanikama, palta y queso crema",
                  "envoltura": "palta",
                  "relleno": ["kanikama", "palta", "queso-crema"]
                },
                {
                  "texto": "10 cortes envueltos en queso crema, relleno de pollo teriyaki, palta y cebollín",
                  "envoltura": "queso-crema",
                  "relleno": ["pollo-teriyaki", "palta", "cebollin"]
                },
                {
                  "texto": "10 cortes envueltos en palta, rellenos de salmón, cebollín y queso crema",
                  "envoltura": "palta",
                  "relleno": ["salmon", "cebollin", "queso-crema"]
                },
                {
                  "texto": "10 cortes envueltos en sésamo, rellenos de choclo, palta y queso crema",
                  "envoltura": "sesamo",
                  "relleno": ["choclo", "palta", "queso-crema"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nombre": "Handrolls",
      "categorias": [
        {
          "id": "handrolls",
          "nombre": "Handrolls",
          "personalizar": ["cortado", "agrega-a-tu-roll"],
          "productos": [
            {
              "id": "handrolls-pollo",
              "nombre": "Pollo",
              "detalle": "Palta y queso crema.",
              "precio": 3990,
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["pollo", "palta", "queso-crema"]
                }
              ]
            },
            {
              "id": "handrolls-kanikama",
              "nombre": "Kanikama",
              "detalle": "Palta y queso crema.",
              "precio": 3790,
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["kanikama", "palta", "queso-crema"]
                }
              ]
            },
            {
              "id": "handrolls-palmito",
              "nombre": "Palmito",
              "detalle": "Palta y queso crema.",
              "precio": 3790,
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["palmito", "palta", "queso-crema"]
                }
              ]
            },
            {
              "id": "handrolls-champinon",
              "nombre": "Champiñón",
              "detalle": "Palta y queso crema.",
              "precio": 3990,
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["champinon", "palta", "queso-crema"]
                }
              ]
            },
            {
              "id": "handrolls-pimenton",
              "nombre": "Pimentón",
              "detalle": "Palta y queso crema.",
              "precio": 3990,
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["pimenton", "palta", "queso-crema"]
                }
              ]
            },
            {
              "id": "handrolls-pollo-crispy",
              "nombre": "Pollo crispy",
              "detalle": "Palta y queso crema.",
              "precio": 4390,
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["pollo-crispy", "palta", "queso-crema"]
                }
              ]
            },
            {
              "id": "handrolls-camaron",
              "nombre": "Camarón",
              "detalle": "Palta y queso crema.",
              "precio": 4490,
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["camaron", "palta", "queso-crema"]
                }
              ]
            },
            {
              "id": "handrolls-camaron-furay",
              "nombre": "Camarón furay",
              "detalle": "Palta y queso crema.",
              "precio": 4990,
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["camaron-furay", "palta", "queso-crema"]
                }
              ]
            },
            {
              "id": "handrolls-salmon",
              "nombre": "Salmón",
              "detalle": "Palta y queso crema.",
              "precio": 4990,
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["salmon", "palta", "queso-crema"]
                }
              ]
            },
            {
              "id": "handrolls-salmon-furay",
              "nombre": "Salmón furay",
              "detalle": "Palta y queso crema.",
              "precio": 5290,
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["salmon-furay", "palta", "queso-crema"]
                }
              ]
            }
          ]
        },
        {
          "id": "handrolls-de-kilo",
          "nombre": "Handrolls de kilo",
          "productos": [
            {
              "id": "handrolls-de-kilo-handroll-monaco",
              "nombre": "Handroll Mónaco",
              "detalle": "Pollo crispy, kanikama, palta, queso crema y cebollín.",
              "incluye": "2 salsas: soya o agridulce",
              "precio": 8990,
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["pollo-crispy", "kanikama", "palta", "queso-crema", "cebollin"]
                }
              ]
            },
            {
              "id": "handrolls-de-kilo-handroll-clasico",
              "nombre": "Handroll Clásico",
              "detalle": "Pollo crispy, palta y queso crema.",
              "incluye": "2 salsas: soya o agridulce",
              "precio": 11990,
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["pollo-crispy", "palta", "queso-crema"]
                }
              ]
            },
            {
              "id": "handrolls-de-kilo-handroll-camaron",
              "nombre": "Handroll Camarón",
              "detalle": "Camarón furay, kanikama, palta, queso crema y cebollín.",
              "incluye": "2 salsas: soya o agridulce",
              "precio": 13990,
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["camaron-furay", "kanikama", "palta", "queso-crema", "cebollin"]
                }
              ]
            },
            {
              "id": "handrolls-de-kilo-handroll-pollo-palta",
              "nombre": "Handroll Pollo palta",
              "detalle": "Pollo crispy y palta.",
              "incluye": "2 salsas: soya o agridulce",
              "precio": 12990,
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["pollo-crispy", "palta"]
                }
              ]
            },
            {
              "id": "handrolls-de-kilo-handroll-pollo-queso",
              "nombre": "Handroll Pollo queso",
              "detalle": "Pollo crispy y queso crema.",
              "incluye": "2 salsas: soya o agridulce",
              "precio": 13490,
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["pollo-crispy", "queso-crema"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nombre": "Rolls",
      "categorias": [
        {
          "id": "gourmet",
          "nombre": "Gourmet",
          "nota": "10 piezas.",
          "personalizar": ["envoltura", "sin-nori", "agrega-a-tu-roll"],
          "productos": [
            {
              "id": "gourmet-pollo-furay-con-guacamole",
              "nombre": "Pollo furay con guacamole",
              "detalle": "Pollo furay, palta y queso crema, envueltos en queso crema, coronados con guacamole.",
              "precio": 8990,
              "rolls": [
                {
                  "envoltura": "queso-crema",
                  "relleno": ["pollo-furay", "palta", "queso-crema"]
                }
              ]
            },
            {
              "id": "gourmet-pollo-furay-con-maracuya",
              "nombre": "Pollo furay con maracuyá",
              "detalle": "Pollo furay, queso crema y almendras, frito en panko, bañado en salsa de maracuyá.",
              "precio": 7990,
              "rolls": [
                {
                  "envoltura": "panko",
                  "relleno": ["pollo-furay", "queso-crema", "almendras"],
                  "frito": true
                }
              ]
            },
            {
              "id": "gourmet-camaron-furay-con-ceviche-de-salmon",
              "nombre": "Camarón furay con ceviche de salmón",
              "detalle": "Camarón furay y queso crema, envuelto en quinoa frita, coronado con ceviche de salmón, bañado en salsa acevichada.",
              "precio": 9990,
              "rolls": [
                {
                  "envoltura": "quinoa-frita",
                  "relleno": ["camaron-furay", "queso-crema"]
                }
              ]
            },
            {
              "id": "gourmet-camaron-furay-envuelto-en-atun",
              "nombre": "Camarón furay envuelto en atún",
              "detalle": "Camarón furay y palta, envuelto en atún, bañado en salsa acevichada y finos cortes de limón.",
              "precio": 7990,
              "rolls": [
                {
                  "envoltura": "atun",
                  "relleno": ["camaron-furay", "palta"]
                }
              ]
            },
            {
              "id": "gourmet-camaron-con-almendras-flameado",
              "nombre": "Camarón con almendras flameado",
              "detalle": "Camarón, queso crema y almendras tostadas, envuelto en queso crema flameado, coronado con crocante de quinoa.",
              "precio": 6990,
              "rolls": [
                {
                  "envoltura": "queso-crema",
                  "relleno": ["camaron", "queso-crema", "almendras-tostadas"]
                }
              ]
            },
            {
              "id": "gourmet-rainbow-de-salmon-atun-y-camaron",
              "nombre": "Rainbow de salmón, atún y camarón",
              "detalle": "Salmón, atún y camarón, envueltos en rainbow (palta y queso crema), bañados en salsa acevichada.",
              "precio": 9990,
              "rolls": [
                {
                  "envoltura": "rainbow-palta-queso-crema",
                  "relleno": ["salmon", "atun", "camaron"]
                }
              ]
            },
            {
              "id": "gourmet-atun-furay-envuelto-en-salmon",
              "nombre": "Atún furay envuelto en salmón",
              "detalle": "Atún furay y queso crema, envuelto en salmón flameado, bañado en salsa acevichada.",
              "precio": 9990,
              "rolls": [
                {
                  "envoltura": "salmon",
                  "relleno": ["atun-furay", "queso-crema"]
                }
              ]
            },
            {
              "id": "gourmet-camaron-furay-gratinado",
              "nombre": "Camarón furay gratinado",
              "detalle": "Camarón furay, queso y palta, envuelto en salmón, queso gauda gratinado, bañado en salsa spicy.",
              "precio": 7990,
              "rolls": [
                {
                  "envoltura": "salmon",
                  "relleno": ["camaron-furay", "queso", "palta"]
                }
              ]
            },
            {
              "id": "gourmet-salmon-en-palta-con-spicy",
              "nombre": "Salmón en palta con spicy",
              "detalle": "Salmón y queso crema, envuelto en palta, coronado con sésamo, bañado en salsa spicy.",
              "precio": 8990,
              "rolls": [
                {
                  "envoltura": "palta",
                  "relleno": ["salmon", "queso-crema"]
                }
              ]
            },
            {
              "id": "gourmet-pollo-crispy-con-cheddar-y-tocino",
              "nombre": "Pollo crispy con cheddar y tocino",
              "detalle": "Pollo crispy, pimentón y queso crema, envueltos en panko, bañados en queso cheddar, topping de tocino.",
              "precio": 9990,
              "rolls": [
                {
                  "envoltura": "panko",
                  "relleno": ["pollo-crispy", "pimenton", "queso-crema"]
                }
              ]
            },
            {
              "id": "gourmet-pollo-furay-gratinado",
              "nombre": "Pollo furay gratinado",
              "detalle": "Pollo furay, pimentón y champiñón, envuelto en nori, cubierto en queso mozzarella gratinado.",
              "precio": 9990,
              "rolls": [
                {
                  "envoltura": "nori",
                  "relleno": ["pollo-furay", "pimenton", "champinon"]
                }
              ]
            }
          ]
        },
        {
          "id": "arma-tu-roll",
          "nombre": "Arma tu roll",
          "personalizar": ["envoltura-arma-tu-roll", "proteina-arma-tu-roll", "topping", "salsa", "acompanamientos"],
          "productos": [
            {
              "id": "arma-tu-roll-arma-tu-roll",
              "nombre": "Arma tu roll",
              "detalle": "1 envoltura + 1 proteína + 2 acompañamientos + topping + salsa a elección.",
              "precio": 8490
            }
          ]
        },
        {
          "id": "rolls-sin-arroz",
          "nombre": "Rolls sin arroz",
          "personalizar": ["envoltura", "sin-nori", "agrega-a-tu-roll"],
          "productos": [
            {
              "id": "rolls-sin-arroz-roll-1",
              "nombre": "Roll 1",
              "detalle": "8 cortes envueltos en palta, rellenos de pollo frito, kanikama, palta, cebollín y queso crema.",
              "precio": 7490,
              "rolls": [
                {
                  "envoltura": "palta",
                  "relleno": ["pollo-frito", "kanikama", "palta", "cebollin", "queso-crema"]
                }
              ]
            },
            {
              "id": "rolls-sin-arroz-roll-2",
              "nombre": "Roll 2",
              "detalle": "8 cortes fritos en panko, rellenos de salmón, camarón, palta, ciboulette, pimentón y queso crema.",
              "precio": 8990,
              "rolls": [
                {
                  "envoltura": "panko",
                  "relleno": ["salmon", "camaron", "palta", "ciboulette", "pimenton", "queso-crema"],
                  "frito": true
                }
              ]
            },
            {
              "id": "rolls-sin-arroz-roll-3",
              "nombre": "Roll 3",
              "detalle": "8 cortes envueltos en queso crema, rellenos de camarón furay, atún, palta, pepino, cebolla morada y queso crema.",
              "precio": 8990,
              "rolls": [
                {
                  "envoltura": "queso-crema",
                  "relleno": ["camaron-furay", "atun", "palta", "pepino", "cebolla-morada", "queso-crema"]
                }
              ]
            },
            {
              "id": "rolls-sin-arroz-roll-4",
              "nombre": "Roll 4",
              "detalle": "8 cortes envueltos en palta, rellenos de palmito, pimentón, champiñón, palta, cebollín y queso crema.",
              "precio": 7990,
              "rolls": [
                {
                  "envoltura": "palta",
                  "relleno": ["palmito", "pimenton", "champinon", "palta", "cebollin", "queso-crema"]
                }
              ]
            }
          ]
        },
        {
          "id": "rolls-frios",
          "nombre": "Rolls fríos",
          "nota": "10 piezas envueltas en sésamo, ciboulette o crocante de quinoa.",
          "personalizar": ["envoltura", "sin-nori", "agrega-a-tu-roll"],
          "productos": [
            {
              "id": "rolls-frios-camaron",
              "nombre": "Camarón",
              "detalle": "Queso y palta.",
              "precio": 4999,
              "opciones": ["Sésamo", "Ciboulette", "Crocante de quinoa"],
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["camaron", "queso", "palta"]
                }
              ]
            },
            {
              "id": "rolls-frios-salmon-furay",
              "nombre": "Salmón furay",
              "detalle": "Queso y palta.",
              "precio": 5390,
              "opciones": ["Sésamo", "Ciboulette", "Crocante de quinoa"],
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["salmon-furay", "queso", "palta"]
                }
              ]
            },
            {
              "id": "rolls-frios-atun",
              "nombre": "Atún",
              "detalle": "Queso crema y palta.",
              "precio": 4790,
              "opciones": ["Sésamo", "Ciboulette", "Crocante de quinoa"],
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["atun", "queso-crema", "palta"]
                }
              ]
            },
            {
              "id": "rolls-frios-salmon",
              "nombre": "Salmón",
              "detalle": "Queso crema y palta.",
              "precio": 5390,
              "opciones": ["Sésamo", "Ciboulette", "Crocante de quinoa"],
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["salmon", "queso-crema", "palta"]
                }
              ]
            },
            {
              "id": "rolls-frios-palmito",
              "nombre": "Palmito",
              "detalle": "Palta y cebollín.",
              "precio": 4490,
              "opciones": ["Sésamo", "Ciboulette", "Crocante de quinoa"],
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["palmito", "palta", "cebollin"]
                }
              ]
            },
            {
              "id": "rolls-frios-choclillo",
              "nombre": "Choclillo",
              "detalle": "Queso y palta.",
              "precio": 4490,
              "opciones": ["Sésamo", "Ciboulette", "Crocante de quinoa"],
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["choclillo", "queso", "palta"]
                }
              ]
            },
            {
              "id": "rolls-frios-nuez",
              "nombre": "Nuez",
              "detalle": "Queso crema y palta.",
              "precio": 4790,
              "opciones": ["Sésamo", "Ciboulette", "Crocante de quinoa"],
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["nuez", "queso-crema", "palta"]
                }
              ]
            },
            {
              "id": "rolls-frios-champinon",
              "nombre": "Champiñón",
              "detalle": "Palta y queso crema.",
              "precio": 4490,
              "opciones": ["Sésamo", "Ciboulette", "Crocante de quinoa"],
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["champinon", "palta", "queso-crema"]
                }
              ]
            }
          ]
        },
        {
          "id": "rolls-envueltos-en-palta",
          "nombre": "Rolls envueltos en palta",
          "nota": "10 piezas envueltas en palta.",
          "personalizar": ["envoltura", "sin-nori", "agrega-a-tu-roll"],
          "productos": [
            {
              "id": "rolls-envueltos-en-palta-pollo",
              "nombre": "Pollo",
              "detalle": "Queso crema y champiñón.",
              "precio": 4490,
              "rolls": [
                {
                  "envoltura": "palta",
                  "relleno": ["pollo", "queso-crema", "champinon"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-palta-pollo-frito",
              "nombre": "Pollo frito",
              "detalle": "Queso crema.",
              "precio": 5490,
              "rolls": [
                {
                  "envoltura": "palta",
                  "relleno": ["pollo-frito", "queso-crema"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-palta-camaron-furay",
              "nombre": "Camarón furay",
              "detalle": "Queso crema y pimentón.",
              "precio": 5790,
              "rolls": [
                {
                  "envoltura": "palta",
                  "relleno": ["camaron-furay", "queso-crema", "pimenton"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-palta-salmon-furay",
              "nombre": "Salmón furay",
              "detalle": "Queso crema y cebollín.",
              "precio": 5990,
              "rolls": [
                {
                  "envoltura": "palta",
                  "relleno": ["salmon-furay", "queso-crema", "cebollin"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-palta-salmon-y-camaron",
              "nombre": "Salmón y camarón",
              "detalle": "Queso crema.",
              "precio": 6490,
              "rolls": [
                {
                  "envoltura": "palta",
                  "relleno": ["salmon", "camaron", "queso-crema"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-palta-camaron-furay-spicy",
              "nombre": "Camarón furay spicy",
              "detalle": "Queso crema y cebollín, bañado en salsa spicy.",
              "precio": 5990,
              "rolls": [
                {
                  "envoltura": "palta",
                  "relleno": ["camaron-furay", "queso-crema", "cebollin"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-palta-atun",
              "nombre": "Atún",
              "detalle": "Queso y palta.",
              "precio": 5790,
              "rolls": [
                {
                  "envoltura": "palta",
                  "relleno": ["atun", "queso", "palta"]
                }
              ]
            }
          ]
        },
        {
          "id": "rolls-fritos-en-tempura",
          "nombre": "Rolls fritos en tempura",
          "nota": "10 piezas fritas en tempura.",
          "personalizar": ["envoltura", "sin-nori", "agrega-a-tu-roll"],
          "productos": [
            {
              "id": "rolls-fritos-en-tempura-salmon",
              "nombre": "Salmón",
              "detalle": "Queso crema y cebollín.",
              "precio": 5990,
              "rolls": [
                {
                  "envoltura": "tempura",
                  "relleno": ["salmon", "queso-crema", "cebollin"],
                  "frito": true
                }
              ]
            },
            {
              "id": "rolls-fritos-en-tempura-pollo-y-salmon",
              "nombre": "Pollo y salmón",
              "detalle": "Queso crema. Envuelto en nori.",
              "precio": 6490,
              "rolls": [
                {
                  "envoltura": "nori",
                  "relleno": ["pollo", "salmon", "queso-crema"],
                  "frito": true
                }
              ]
            },
            {
              "id": "rolls-fritos-en-tempura-camaron-furay",
              "nombre": "Camarón furay",
              "detalle": "Palta y cebollín.",
              "precio": 5490,
              "rolls": [
                {
                  "envoltura": "tempura",
                  "relleno": ["camaron-furay", "palta", "cebollin"],
                  "frito": true
                }
              ]
            },
            {
              "id": "rolls-fritos-en-tempura-atun",
              "nombre": "Atún",
              "detalle": "Queso crema y palta.",
              "precio": 5990,
              "rolls": [
                {
                  "envoltura": "tempura",
                  "relleno": ["atun", "queso-crema", "palta"],
                  "frito": true
                }
              ]
            },
            {
              "id": "rolls-fritos-en-tempura-camaron",
              "nombre": "Camarón",
              "detalle": "Queso crema y pimentón.",
              "precio": 5490,
              "rolls": [
                {
                  "envoltura": "tempura",
                  "relleno": ["camaron", "queso-crema", "pimenton"],
                  "frito": true
                }
              ]
            },
            {
              "id": "rolls-fritos-en-tempura-pimenton",
              "nombre": "Pimentón",
              "detalle": "Queso crema y champiñón.",
              "precio": 4990,
              "rolls": [
                {
                  "envoltura": "tempura",
                  "relleno": ["pimenton", "queso-crema", "champinon"],
                  "frito": true
                }
              ]
            }
          ]
        },
        {
          "id": "rolls-envueltos-en-queso-crema",
          "nombre": "Rolls envueltos en queso crema",
          "nota": "10 piezas envueltas en queso crema.",
          "personalizar": ["envoltura", "sin-nori", "agrega-a-tu-roll"],
          "productos": [
            {
              "id": "rolls-envueltos-en-queso-crema-camaron-furay",
              "nombre": "Camarón furay",
              "detalle": "Palta y cebollín.",
              "precio": 5990,
              "rolls": [
                {
                  "envoltura": "queso-crema",
                  "relleno": ["camaron-furay", "palta", "cebollin"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-queso-crema-camaron-y-salmon",
              "nombre": "Camarón y salmón",
              "detalle": "Ciboulette.",
              "precio": 6490,
              "rolls": [
                {
                  "envoltura": "queso-crema",
                  "relleno": ["camaron", "salmon", "ciboulette"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-queso-crema-pollo",
              "nombre": "Pollo",
              "detalle": "Palta y pimentón.",
              "precio": 5490,
              "rolls": [
                {
                  "envoltura": "queso-crema",
                  "relleno": ["pollo", "palta", "pimenton"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-queso-crema-salmon-furay",
              "nombre": "Salmón furay",
              "detalle": "Palta y pimentón.",
              "precio": 6990,
              "rolls": [
                {
                  "envoltura": "queso-crema",
                  "relleno": ["salmon-furay", "palta", "pimenton"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-queso-crema-pollo-furay",
              "nombre": "Pollo furay",
              "detalle": "Ciboulette y champiñón.",
              "precio": 5490,
              "rolls": [
                {
                  "envoltura": "queso-crema",
                  "relleno": ["pollo-furay", "ciboulette", "champinon"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-queso-crema-atun-furay",
              "nombre": "Atún furay",
              "detalle": "Palta y cebollín.",
              "precio": 6990,
              "rolls": [
                {
                  "envoltura": "queso-crema",
                  "relleno": ["atun-furay", "palta", "cebollin"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-queso-crema-palmito",
              "nombre": "Palmito",
              "detalle": "Palta y pimentón.",
              "precio": 5490,
              "rolls": [
                {
                  "envoltura": "queso-crema",
                  "relleno": ["palmito", "palta", "pimenton"]
                }
              ]
            }
          ]
        },
        {
          "id": "rolls-fritos-en-panko",
          "nombre": "Rolls fritos en panko",
          "nota": "10 piezas apanadas fritas en panko.",
          "personalizar": ["envoltura", "sin-nori", "agrega-a-tu-roll"],
          "productos": [
            {
              "id": "rolls-fritos-en-panko-pollo",
              "nombre": "Pollo",
              "detalle": "Queso crema y palta.",
              "precio": 4490,
              "rolls": [
                {
                  "envoltura": "panko",
                  "relleno": ["pollo", "queso-crema", "palta"],
                  "frito": true
                }
              ]
            },
            {
              "id": "rolls-fritos-en-panko-salmon",
              "nombre": "Salmón",
              "detalle": "Queso crema y cebollín.",
              "precio": 5490,
              "rolls": [
                {
                  "envoltura": "panko",
                  "relleno": ["salmon", "queso-crema", "cebollin"],
                  "frito": true
                }
              ]
            },
            {
              "id": "rolls-fritos-en-panko-camaron",
              "nombre": "Camarón",
              "detalle": "Queso crema y pimentón.",
              "precio": 4990,
              "rolls": [
                {
                  "envoltura": "panko",
                  "relleno": ["camaron", "queso-crema", "pimenton"],
                  "frito": true
                }
              ]
            },
            {
              "id": "rolls-fritos-en-panko-pollo-y-champinon",
              "nombre": "Pollo y champiñón",
              "detalle": "Queso crema.",
              "precio": 4490,
              "rolls": [
                {
                  "envoltura": "panko",
                  "relleno": ["pollo", "champinon", "queso-crema"],
                  "frito": true
                }
              ]
            },
            {
              "id": "rolls-fritos-en-panko-kanikama",
              "nombre": "Kanikama",
              "detalle": "Queso crema y palta.",
              "precio": 3990,
              "rolls": [
                {
                  "envoltura": "panko",
                  "relleno": ["kanikama", "queso-crema", "palta"],
                  "frito": true
                }
              ]
            },
            {
              "id": "rolls-fritos-en-panko-salmon-y-camaron",
              "nombre": "Salmón y camarón",
              "detalle": "Queso crema.",
              "precio": 5490,
              "rolls": [
                {
                  "envoltura": "panko",
                  "relleno": ["salmon", "camaron", "queso-crema"],
                  "frito": true
                }
              ]
            },
            {
              "id": "rolls-fritos-en-panko-atun",
              "nombre": "Atún",
              "detalle": "Queso crema y palta.",
              "precio": 5490,
              "rolls": [
                {
                  "envoltura": "panko",
                  "relleno": ["atun", "queso-crema", "palta"],
                  "frito": true
                }
              ]
            },
            {
              "id": "rolls-fritos-en-panko-pimenton",
              "nombre": "Pimentón",
              "detalle": "Queso crema y cebollín.",
              "precio": 4490,
              "rolls": [
                {
                  "envoltura": "panko",
                  "relleno": ["pimenton", "queso-crema", "cebollin"],
                  "frito": true
                }
              ]
            },
            {
              "id": "rolls-fritos-en-panko-champinon",
              "nombre": "Champiñón",
              "detalle": "Queso crema y palta.",
              "precio": 4490,
              "rolls": [
                {
                  "envoltura": "panko",
                  "relleno": ["champinon", "queso-crema", "palta"],
                  "frito": true
                }
              ]
            }
          ]
        },
        {
          "id": "rolls-envueltos-en-salmon",
          "nombre": "Rolls envueltos en salmón",
          "nota": "10 piezas envueltas en salmón.",
          "personalizar": ["envoltura", "sin-nori", "agrega-a-tu-roll"],
          "productos": [
            {
              "id": "rolls-envueltos-en-salmon-atun",
              "nombre": "Atún",
              "detalle": "Queso crema y palta.",
              "precio": 6990,
              "rolls": [
                {
                  "envoltura": "salmon",
                  "relleno": ["atun", "queso-crema", "palta"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-salmon-atun-furay",
              "nombre": "Atún furay",
              "detalle": "Queso crema y pimentón.",
              "precio": 7499,
              "rolls": [
                {
                  "envoltura": "salmon",
                  "relleno": ["atun-furay", "queso-crema", "pimenton"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-salmon-camaron",
              "nombre": "Camarón",
              "detalle": "Queso crema y cebollín.",
              "precio": 6490,
              "rolls": [
                {
                  "envoltura": "salmon",
                  "relleno": ["camaron", "queso-crema", "cebollin"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-salmon-camaron-furay",
              "nombre": "Camarón furay",
              "detalle": "Queso crema y cebollín.",
              "precio": 6990,
              "rolls": [
                {
                  "envoltura": "salmon",
                  "relleno": ["camaron-furay", "queso-crema", "cebollin"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-salmon-palmito",
              "nombre": "Palmito",
              "detalle": "Queso crema y palta.",
              "precio": 4990,
              "rolls": [
                {
                  "envoltura": "salmon",
                  "relleno": ["palmito", "queso-crema", "palta"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-salmon-salmon",
              "nombre": "Salmón",
              "detalle": "Queso crema y palta.",
              "precio": 7990,
              "rolls": [
                {
                  "envoltura": "salmon",
                  "relleno": ["salmon", "queso-crema", "palta"]
                }
              ]
            }
          ]
        },
        {
          "id": "rolls-envueltos-en-atun",
          "nombre": "Rolls envueltos en atún",
          "nota": "10 piezas envueltas en atún.",
          "personalizar": ["envoltura", "sin-nori", "agrega-a-tu-roll"],
          "productos": [
            {
              "id": "rolls-envueltos-en-atun-salmon",
              "nombre": "Salmón",
              "detalle": "Queso crema y ciboulette.",
              "precio": 6990,
              "rolls": [
                {
                  "envoltura": "atun",
                  "relleno": ["salmon", "queso-crema", "ciboulette"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-atun-salmon-furay",
              "nombre": "Salmón furay",
              "detalle": "Queso crema y pimentón.",
              "precio": 7490,
              "rolls": [
                {
                  "envoltura": "atun",
                  "relleno": ["salmon-furay", "queso-crema", "pimenton"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-atun-camaron",
              "nombre": "Camarón",
              "detalle": "Queso crema y cebollín.",
              "precio": 6490,
              "rolls": [
                {
                  "envoltura": "atun",
                  "relleno": ["camaron", "queso-crema", "cebollin"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-atun-camaron-furay",
              "nombre": "Camarón furay",
              "detalle": "Queso crema y palta.",
              "precio": 6990,
              "rolls": [
                {
                  "envoltura": "atun",
                  "relleno": ["camaron-furay", "queso-crema", "palta"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-atun-kanikama",
              "nombre": "Kanikama",
              "detalle": "Queso crema.",
              "precio": 5990,
              "rolls": [
                {
                  "envoltura": "atun",
                  "relleno": ["kanikama", "queso-crema"]
                }
              ]
            },
            {
              "id": "rolls-envueltos-en-atun-atun",
              "nombre": "Atún",
              "detalle": "Queso crema y palta.",
              "precio": 7990,
              "rolls": [
                {
                  "envoltura": "atun",
                  "relleno": ["atun", "queso-crema", "palta"]
                }
              ]
            }
          ]
        },
        {
          "id": "hosomaki",
          "nombre": "Hosomaki",
          "nota": "10 piezas envueltas en nori.",
          "personalizar": ["envoltura", "agrega-a-tu-roll"],
          "productos": [
            {
              "id": "hosomaki-atun-y-queso-crema",
              "nombre": "Atún y queso crema",
              "detalle": "Atún y queso crema.",
              "precio": 4490,
              "rolls": [
                {
                  "envoltura": "nori",
                  "relleno": ["atun", "queso-crema"]
                }
              ]
            },
            {
              "id": "hosomaki-atun-y-palta",
              "nombre": "Atún y palta",
              "detalle": "Atún y palta.",
              "precio": 3990,
              "rolls": [
                {
                  "envoltura": "nori",
                  "relleno": ["atun", "palta"]
                }
              ]
            },
            {
              "id": "hosomaki-kanikama-y-palta",
              "nombre": "Kanikama y palta",
              "detalle": "Kanikama y palta.",
              "precio": 2990,
              "rolls": [
                {
                  "envoltura": "nori",
                  "relleno": ["kanikama", "palta"]
                }
              ]
            },
            {
              "id": "hosomaki-salmon-y-palta",
              "nombre": "Salmón y palta",
              "detalle": "Salmón y palta.",
              "precio": 3990,
              "rolls": [
                {
                  "envoltura": "nori",
                  "relleno": ["salmon", "palta"]
                }
              ]
            },
            {
              "id": "hosomaki-camaron-y-queso-crema",
              "nombre": "Camarón y queso crema",
              "detalle": "Camarón y queso crema.",
              "precio": 3490,
              "rolls": [
                {
                  "envoltura": "nori",
                  "relleno": ["camaron", "queso-crema"]
                }
              ]
            },
            {
              "id": "hosomaki-almendras-tostadas-y-queso-crema",
              "nombre": "Almendras tostadas y queso crema",
              "detalle": "Almendras tostadas y queso crema.",
              "precio": 3990,
              "rolls": [
                {
                  "envoltura": "nori",
                  "relleno": ["almendras-tostadas", "queso-crema"]
                }
              ]
            },
            {
              "id": "hosomaki-nueces-y-queso-crema",
              "nombre": "Nueces y queso crema",
              "detalle": "Nueces y queso crema.",
              "precio": 3990,
              "rolls": [
                {
                  "envoltura": "nori",
                  "relleno": ["nuez", "queso-crema"]
                }
              ]
            }
          ]
        },
        {
          "id": "rolls-vegetarianos",
          "nombre": "Rolls vegetarianos",
          "nota": "10 piezas.",
          "personalizar": ["sin-nori", "envoltura", "agrega-a-tu-roll"],
          "productos": [
            {
              "id": "rolls-vegetarianos-champinon-envuelto",
              "nombre": "Champiñón envuelto",
              "detalle": "Champiñón, queso y palta.",
              "precio": 4999,
              "opciones": ["Sésamo", "Ciboulette", "Crocante de quinoa"],
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["champinon", "queso", "palta"]
                }
              ]
            },
            {
              "id": "rolls-vegetarianos-champinon-frito-en-panko",
              "nombre": "Champiñón frito en panko",
              "detalle": "Champiñón, queso y palta.",
              "precio": 4999,
              "rolls": [
                {
                  "envoltura": "panko",
                  "relleno": ["champinon", "queso", "palta"],
                  "frito": true
                }
              ]
            },
            {
              "id": "rolls-vegetarianos-nuez-envuelto",
              "nombre": "Nuez envuelto",
              "detalle": "Nuez, queso crema y palta.",
              "precio": 4490,
              "opciones": ["Sésamo", "Ciboulette", "Crocante de quinoa"],
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["nuez", "queso-crema", "palta"]
                }
              ]
            },
            {
              "id": "rolls-vegetarianos-pimenton-frito-en-panko",
              "nombre": "Pimentón frito en panko",
              "detalle": "Pimentón, queso y cebollín.",
              "precio": 4490,
              "rolls": [
                {
                  "envoltura": "panko",
                  "relleno": ["pimenton", "queso", "cebollin"],
                  "frito": true
                }
              ]
            },
            {
              "id": "rolls-vegetarianos-pepino-frito-en-panko",
              "nombre": "Pepino frito en panko",
              "detalle": "Pepino, queso y palta.",
              "precio": 4490,
              "rolls": [
                {
                  "envoltura": "panko",
                  "relleno": ["pepino", "queso", "palta"],
                  "frito": true
                }
              ]
            },
            {
              "id": "rolls-vegetarianos-palmito-envuelto-en-queso-crema",
              "nombre": "Palmito envuelto en queso crema",
              "detalle": "Palmito, palta y pimentón.",
              "precio": 4990,
              "rolls": [
                {
                  "envoltura": "queso-crema",
                  "relleno": ["palmito", "palta", "pimenton"]
                }
              ]
            },
            {
              "id": "rolls-vegetarianos-pimenton-en-nori-tempurizado",
              "nombre": "Pimentón en nori tempurizado",
              "detalle": "Pimentón, queso crema y cebollín.",
              "precio": 4990,
              "rolls": [
                {
                  "envoltura": null,
                  "relleno": ["pimenton", "queso-crema", "cebollin"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nombre": "Para comer",
      "categorias": [
        {
          "id": "sushi-burgers",
          "nombre": "Sushi burgers",
          "productos": [
            {
              "id": "sushi-burgers-chicken-burger",
              "nombre": "Chicken burger",
              "detalle": "Pollo frito, palta, queso crema, cebollín o papa crispy.",
              "incluye": "2 salsas: soya o agridulce",
              "precio": 7990,
              "opciones": ["Cebollín", "Papa crispy"]
            },
            {
              "id": "sushi-burgers-ebi-burger",
              "nombre": "Ebi burger",
              "detalle": "Camarón furay, palta, queso crema, cebollín o papa crispy.",
              "incluye": "2 salsas: soya o agridulce",
              "precio": 8490,
              "opciones": ["Cebollín", "Papa crispy"]
            },
            {
              "id": "sushi-burgers-sake-burger",
              "nombre": "Sake burger",
              "detalle": "Salmón furay, palta, queso crema, cebollín o papa crispy.",
              "incluye": "2 salsas: soya o agridulce",
              "precio": 8990,
              "opciones": ["Cebollín", "Papa crispy"]
            },
            {
              "id": "sushi-burgers-mix-burger",
              "nombre": "Mix burger",
              "detalle": "Salmón y camarón furay, palta, queso crema, cebollín o papa crispy.",
              "incluye": "2 salsas: soya o agridulce",
              "precio": 9990,
              "opciones": ["Cebollín", "Papa crispy"]
            },
            {
              "id": "sushi-burgers-veggie-burger",
              "nombre": "Veggie burger",
              "detalle": "Champiñón, palta, queso crema y pimentón.",
              "incluye": "2 salsas: soya o agridulce",
              "precio": 5990
            }
          ]
        },
        {
          "id": "gohan",
          "nombre": "Gohan",
          "nota": "Todos con topping y salsa a elección.",
          "personalizar": ["topping", "salsa"],
          "productos": [
            {
              "id": "gohan-gohan-chicken",
              "nombre": "Gohan Chicken",
              "detalle": "Base de arroz, pollo frito, palta, queso crema, cebollín, topping y salsa a elección.",
              "incluye": "1 salsa a elección",
              "precio": 5990
            },
            {
              "id": "gohan-gohan-ebi",
              "nombre": "Gohan Ebi",
              "detalle": "Base de arroz, camarón furay, palta, queso crema, cebollín, topping y salsa a elección.",
              "incluye": "1 salsa a elección",
              "precio": 6490
            },
            {
              "id": "gohan-gohan-sake",
              "nombre": "Gohan Sake",
              "detalle": "Base de arroz, salmón furay, palta, queso crema, cebollín, topping y salsa a elección.",
              "incluye": "1 salsa a elección",
              "precio": 7490
            },
            {
              "id": "gohan-gohan-veggie",
              "nombre": "Gohan Veggie",
              "detalle": "Base de arroz, champiñones salteados, palta, queso crema, cebollín, topping y salsa a elección.",
              "incluye": "1 salsa a elección",
              "precio": 5990
            }
          ]
        },
        {
          "id": "ceviches",
          "nombre": "Ceviches",
          "productos": [
            {
              "id": "ceviches-ceviche-de-salmon",
              "nombre": "Ceviche de salmón",
              "detalle": "Salmón, cebolla morada y mix de pimentón.",
              "precio": 9990
            },
            {
              "id": "ceviches-ceviche-mixto",
              "nombre": "Ceviche mixto",
              "detalle": "Salmón, camarón, cebolla morada y mix de pimentón.",
              "precio": 10990
            }
          ]
        },
        {
          "id": "ensaladas",
          "nombre": "Ensaladas",
          "productos": [
            {
              "id": "ensaladas-ensalada-al-salmon",
              "nombre": "Ensalada al salmón",
              "detalle": "Base de lechuga, apio, palta, cebolla morada y jengibre raíz, acompañada de trozos de salmón, bañada en salsa acevichada, con topping de ciboulette.",
              "precio": 9990
            },
            {
              "id": "ensaladas-ensalada-monaco",
              "nombre": "Ensalada Mónaco",
              "detalle": "Base de lechuga, pollo a la plancha y queso parmesano, acompañada de crutones, bañada en salsa Mónaco.",
              "precio": 8990
            },
            {
              "id": "ensaladas-ensalada-vegetariana",
              "nombre": "Ensalada vegetariana",
              "detalle": "Lechuga, tomate, palmito, palta y cebolla morada, bañada en salsa Mónaco.",
              "precio": 7990
            }
          ]
        }
      ]
    },
    {
      "nombre": "Burgers y papas",
      "categorias": [
        {
          "id": "burgers",
          "nombre": "Burgers",
          "nota": "Pollo crispy o vacuno 150 grs. Incluye papitas. Pídela doble por $1.990 más.",
          "productos": [
            {
              "id": "burgers-italiana",
              "nombre": "Italiana",
              "detalle": "Palta, tomate y salsa Mónaco.",
              "precio": 5990,
              "opciones": ["Pollo crispy", "Vacuno", "Pollo crispy doble", "Vacuno doble"],
              "preciosOpciones": {"Pollo crispy": 5990, "Vacuno": 5990, "Pollo crispy doble": 7980, "Vacuno doble": 7980}
            },
            {
              "id": "burgers-cheddar",
              "nombre": "Cheddar",
              "detalle": "Queso cheddar fundido y salsa Mónaco.",
              "precio": 4990,
              "opciones": ["Pollo crispy", "Vacuno", "Pollo crispy doble", "Vacuno doble"],
              "preciosOpciones": {"Pollo crispy": 4990, "Vacuno": 4990, "Pollo crispy doble": 6980, "Vacuno doble": 6980}
            },
            {
              "id": "burgers-brazuca",
              "nombre": "Brazuca",
              "detalle": "Queso cheddar, palta y salsa Mónaco.",
              "precio": 5490,
              "opciones": ["Pollo crispy", "Vacuno", "Pollo crispy doble", "Vacuno doble"],
              "preciosOpciones": {"Pollo crispy": 5490, "Vacuno": 5490, "Pollo crispy doble": 7480, "Vacuno doble": 7480}
            },
            {
              "id": "burgers-americana",
              "nombre": "Americana",
              "detalle": "Queso cheddar, tocino, aros de cebolla y salsa BBQ.",
              "precio": 6990,
              "opciones": ["Pollo crispy", "Vacuno", "Pollo crispy doble", "Vacuno doble"],
              "preciosOpciones": {"Pollo crispy": 6990, "Vacuno": 6990, "Pollo crispy doble": 8980, "Vacuno doble": 8980}
            },
            {
              "id": "burgers-monaco",
              "nombre": "Mónaco",
              "detalle": "Lechuga, tomate, cebolla morada, pepinillos y salsa Mónaco.",
              "precio": 7990,
              "opciones": ["Pollo crispy", "Vacuno", "Pollo crispy doble", "Vacuno doble"],
              "preciosOpciones": {"Pollo crispy": 7990, "Vacuno": 7990, "Pollo crispy doble": 9980, "Vacuno doble": 9980}
            },
            {
              "id": "burgers-pantera",
              "nombre": "Pantera",
              "detalle": "Pimentones salteados, cebolla caramelizada, champiñones y salsa Mónaco.",
              "precio": 7990,
              "opciones": ["Pollo crispy", "Vacuno", "Pollo crispy doble", "Vacuno doble"],
              "preciosOpciones": {"Pollo crispy": 7990, "Vacuno": 7990, "Pollo crispy doble": 9980, "Vacuno doble": 9980}
            },
            {
              "id": "burgers-pink",
              "nombre": "Pink",
              "detalle": "Champiñones salteados, mix de quesos fundidos y cebolla caramelizada.",
              "precio": 8490,
              "opciones": ["Pollo crispy", "Vacuno", "Pollo crispy doble", "Vacuno doble"],
              "preciosOpciones": {"Pollo crispy": 8490, "Vacuno": 8490, "Pollo crispy doble": 10480, "Vacuno doble": 10480}
            },
            {
              "id": "burgers-monaco-bacon",
              "nombre": "Mónaco Bacon",
              "detalle": "Doble queso cheddar, cebolla crispy, tocino y salsa Mónaco.",
              "precio": 8990,
              "opciones": ["Pollo crispy", "Vacuno", "Pollo crispy doble", "Vacuno doble"],
              "preciosOpciones": {"Pollo crispy": 8990, "Vacuno": 8990, "Pollo crispy doble": 10980, "Vacuno doble": 10980}
            }
          ]
        },
        {
          "id": "chorrillanas",
          "nombre": "Chorrillanas",
          "productos": [
            {
              "id": "chorrillanas-chorrillana-clasica",
              "nombre": "Chorrillana clásica",
              "detalle": "Papas fritas, cebolla caramelizada, chorizo, pollo, vacuno y huevo.",
              "precio": 7990,
              "opciones": ["Individual", "Para compartir"],
              "preciosOpciones": {"Individual": 7990, "Para compartir": 15490}
            },
            {
              "id": "chorrillanas-chorrillana-monaco",
              "nombre": "Chorrillana Mónaco",
              "detalle": "Papas fritas, cebolla caramelizada, mix de pimentón y champiñones salteados, chorizo, mix de carnes y mayo Mónaco.",
              "precio": 9990,
              "opciones": ["Individual", "Para compartir"],
              "preciosOpciones": {"Individual": 9990, "Para compartir": 19490}
            }
          ]
        },
        {
          "id": "papitas-bowl",
          "nombre": "Papitas bowl",
          "nota": "Solo formato mediano.",
          "productos": [
            {
              "id": "papitas-bowl-chicken-bowl",
              "nombre": "Chicken bowl",
              "detalle": "Papitas fritas acompañadas de pollo frito, bañadas en salsa de queso cheddar con topping de tocino.",
              "precio": 5990
            },
            {
              "id": "papitas-bowl-bacon-bowl",
              "nombre": "Bacon bowl",
              "detalle": "Papas fritas acompañadas de tocino frito, bañado en salsa BBQ y mayo Mónaco con topping de cebolla crispy.",
              "precio": 5990
            },
            {
              "id": "papitas-bowl-ebi-bowl",
              "nombre": "Ebi bowl",
              "detalle": "Papas fritas acompañadas de camarones furay, queso gauda fundido, bañados en salsa acevichada con topping de ciboulette.",
              "precio": 6990
            },
            {
              "id": "papitas-bowl-cow-bowl",
              "nombre": "Cow bowl",
              "detalle": "Papas fritas acompañadas de vacuno salteado, mix de pimentones, bañados en salsa Mónaco, topping de choclo.",
              "precio": 7990
            },
            {
              "id": "papitas-bowl-luco-bowl",
              "nombre": "Luco bowl",
              "detalle": "Papas fritas acompañadas de vacuno salteado, bañado en queso gauda fundido.",
              "precio": 5990
            },
            {
              "id": "papitas-bowl-acevichado-bowl",
              "nombre": "Acevichado bowl",
              "detalle": "Papas fritas acompañadas de ceviche de salmón o mixto (salmón y camarón), bañado en salsa acevichada con topping de papa crispy.",
              "precio": 8990,
              "opciones": ["Ceviche de salmón", "Ceviche mixto (salmón y camarón)"],
              "preciosOpciones": {"Ceviche de salmón": 8990, "Ceviche mixto (salmón y camarón)": 11990}
            },
            {
              "id": "papitas-bowl-menu-nino",
              "nombre": "Menú niño",
              "detalle": "Papas fritas acompañadas de nuggets o vienesas, bañadas en salsa a elección (mayonesa, ketchup o mostaza).",
              "precio": 4990,
              "opciones": ["Nuggets", "Vienesas"],
              "personalizar": ["salsa-menu-nino"]
            },
            {
              "id": "papitas-bowl-porcion-de-papas-solas",
              "nombre": "Porción de papas solas",
              "detalle": "500 grs.",
              "precio": 3490
            }
          ]
        }
      ]
    },
    {
      "nombre": "Snacks y bebidas",
      "categorias": [
        {
          "id": "snacks",
          "nombre": "Snacks",
          "productos": [
            {"id": "snacks-arrollado-primavera", "nombre": "Arrollado primavera", "precio": 3990},
            {"id": "snacks-gyosas-de-cerdo", "nombre": "Gyosas de cerdo", "precio": 3490},
            {"id": "snacks-gyosas-de-pollo", "nombre": "Gyosas de pollo", "precio": 3490},
            {"id": "snacks-gyosas-de-verduras", "nombre": "Gyosas de verduras", "precio": 3490},
            {"id": "snacks-gyosas-de-camaron", "nombre": "Gyosas de camarón", "precio": 3990},
            {"id": "snacks-camarones-apanados", "nombre": "Camarones apanados", "precio": 4990},
            {"id": "snacks-bastones-de-salmon", "nombre": "Bastones de salmón", "precio": 5490},
            {"id": "snacks-empanadas-de-queso", "nombre": "Empanadas de queso", "precio": 3490},
            {"id": "snacks-alitas-de-pollo-crispy", "nombre": "Alitas de pollo crispy", "precio": 3990},
            {"id": "snacks-sushi-balls", "nombre": "Sushi balls", "precio": 4990}
          ]
        },
        {
          "id": "bebestibles",
          "nombre": "Bebestibles",
          "personalizar": ["sabor"],
          "productos": [
            {
              "id": "bebestibles-bebida-en-lata",
              "nombre": "Bebida en lata",
              "detalle": "Sabores a elección.",
              "precio": 1500
            },
            {
              "id": "bebestibles-bebida-1-5-l",
              "nombre": "Bebida 2 L",
              "detalle": "Sabores a elección.",
              "precio": 3000
            },
            {
              "id": "bebestibles-agua-mineral",
              "nombre": "Agua mineral",
              "detalle": "Aprox. 500 ml.",
              "precio": 1000,
              "opciones": ["Con gas", "Sin gas"],
              "personalizar": []
            },
            {
              "id": "bebestibles-coca-cola-350-ml",
              "nombre": "Coca-Cola 350 ml",
              "detalle": "Elige tu variedad. Doble Zero: sin azúcar y sin cafeína.",
              "precio": 1490,
              "opciones": ["Con azúcar", "Sin azúcar", "Doble Zero"],
              "personalizar": []
            },
            {
              "id": "bebestibles-coca-cola-2-l",
              "nombre": "Coca-Cola 2 L original",
              "precio": 0,
              "disponible": false,
              "personalizar": []
            }
          ]
        },
        {
          "id": "salsas",
          "nombre": "Salsas",
          "productos": [
            {"id": "salsas-salsa-soya", "nombre": "Salsa soya", "precio": 500},
            {"id": "salsas-salsa-agridulce", "nombre": "Salsa agridulce", "precio": 500},
            {"id": "salsas-salsa-mango-maracuya", "nombre": "Salsa mango maracuyá", "precio": 1000},
            {"id": "salsas-salsa-huancaina", "nombre": "Salsa huancaína", "precio": 1000},
            {"id": "salsas-salsa-acevichada", "nombre": "Salsa acevichada", "precio": 1000},
            {"id": "salsas-salsa-spicy", "nombre": "Salsa spicy", "precio": 1000},
            {"id": "salsas-salsa-monaco", "nombre": "Salsa Mónaco", "precio": 1000},
            {"id": "salsas-wasabi", "nombre": "Wasabi", "precio": 500},
            {"id": "salsas-jengibre", "nombre": "Jengibre", "precio": 500}
          ]
        }
      ]
    },
    {
      "nombre": "Extras",
      "categorias": [
        {
          "id": "toppings",
          "nombre": "Toppings",
          "productos": [
            {"id": "toppings-papa-crispy", "nombre": "Papa crispy", "precio": 500},
            {"id": "toppings-ciboulette", "nombre": "Ciboulette", "precio": 500},
            {"id": "toppings-sesamo", "nombre": "Sésamo", "precio": 500},
            {"id": "toppings-cebolla-crispy", "nombre": "Cebolla crispy", "precio": 1000},
            {"id": "toppings-merken", "nombre": "Merkén", "precio": 500},
            {"id": "toppings-amapola", "nombre": "Amapola", "precio": 500},
            {"id": "toppings-nueces", "nombre": "Nueces", "precio": 1000},
            {"id": "toppings-almendras", "nombre": "Almendras", "precio": 1000},
            {"id": "toppings-quinoa-frita", "nombre": "Quinoa frita", "precio": 1000},
            {
              "id": "toppings-almendras-laminadas-tostadas",
              "nombre": "Almendras laminadas tostadas",
              "precio": 1500
            },
            {"id": "toppings-tocino-frito", "nombre": "Tocino frito", "precio": 1500}
          ]
        },
        {
          "id": "agrega-a-tu-roll",
          "nombre": "Agrega a tu roll",
          "productos": [
            {"id": "agrega-a-tu-roll-acevichado-de-salmon", "nombre": "Acevichado de salmón", "precio": 3490},
            {
              "id": "agrega-a-tu-roll-acevichado-mixto-salmon-camaron",
              "nombre": "Acevichado mixto salmón camarón",
              "precio": 4490
            },
            {
              "id": "agrega-a-tu-roll-palta",
              "nombre": "Palta",
              "detalle": "Agregado o cambio.",
              "precio": 2000
            },
            {
              "id": "agrega-a-tu-roll-champinon",
              "nombre": "Champiñón",
              "detalle": "Agregado o cambio.",
              "precio": 1000
            },
            {
              "id": "agrega-a-tu-roll-pimenton",
              "nombre": "Pimentón",
              "detalle": "Agregado o cambio.",
              "precio": 1000
            },
            {
              "id": "agrega-a-tu-roll-kanikama",
              "nombre": "Kanikama",
              "detalle": "Agregado o cambio.",
              "precio": 1000
            },
            {
              "id": "agrega-a-tu-roll-queso-crema",
              "nombre": "Queso crema",
              "detalle": "Agregado o cambio.",
              "precio": 1500
            },
            {
              "id": "agrega-a-tu-roll-camaron",
              "nombre": "Camarón",
              "detalle": "Agregado o cambio.",
              "precio": 1800
            },
            {
              "id": "agrega-a-tu-roll-camaron-furay",
              "nombre": "Camarón furay",
              "detalle": "Agregado o cambio.",
              "precio": 2000
            },
            {
              "id": "agrega-a-tu-roll-pollo",
              "nombre": "Pollo",
              "detalle": "Agregado o cambio.",
              "precio": 1000
            },
            {
              "id": "agrega-a-tu-roll-pollo-furay",
              "nombre": "Pollo furay",
              "detalle": "Agregado o cambio.",
              "precio": 1500
            },
            {
              "id": "agrega-a-tu-roll-pollo-teriyaki",
              "nombre": "Pollo teriyaki",
              "detalle": "Agregado o cambio.",
              "precio": 1500
            },
            {
              "id": "agrega-a-tu-roll-salmon",
              "nombre": "Salmón",
              "detalle": "Agregado o cambio.",
              "precio": 2500
            },
            {
              "id": "agrega-a-tu-roll-salmon-furay",
              "nombre": "Salmón furay",
              "detalle": "Agregado o cambio.",
              "precio": 3000
            }
          ]
        },
        {
          "id": "plaquetas",
          "nombre": "Plaquetas",
          "productos": [
            {"id": "plaquetas-plaqueta-palta", "nombre": "Plaqueta palta", "precio": 2000},
            {"id": "plaquetas-plaqueta-queso-crema", "nombre": "Plaqueta queso crema", "precio": 2000},
            {"id": "plaquetas-plaqueta-salmon", "nombre": "Plaqueta salmón", "precio": 2500},
            {
              "id": "plaquetas-plaqueta-rainbow-palta-queso-crema",
              "nombre": "Plaqueta rainbow palta/queso crema",
              "precio": 3500
            },
            {
              "id": "plaquetas-plaqueta-rainbow-palta-salmon",
              "nombre": "Plaqueta rainbow palta/salmón",
              "precio": 4000
            },
            {
              "id": "plaquetas-plaqueta-rainbow-queso-crema-salmon",
              "nombre": "Plaqueta rainbow queso crema/salmón",
              "precio": 4500
            },
            {"id": "plaquetas-sin-nori", "nombre": "Sin nori", "precio": 1000},
            {
              "id": "plaquetas-ciboulette",
              "nombre": "Ciboulette",
              "detalle": "Envoltura o relleno.",
              "precio": 800
            },
            {"id": "plaquetas-envoltura-tempura", "nombre": "Envoltura tempura", "precio": 1000},
            {"id": "plaquetas-hand-roll-cortado", "nombre": "Hand roll cortado", "precio": 500},
            {"id": "plaquetas-palillo", "nombre": "Palillo", "precio": 300},
            {"id": "plaquetas-tenedor", "nombre": "Tenedor", "precio": 300}
          ]
        }
      ]
    }
  ],
  "personalizacion": [
    {
      "id": "agrega-a-tu-roll",
      "nombre": "Agrega a tu roll",
      "tipo": "agregar",
      "porRoll": true,
      "min": 0,
      "max": 3,
      "opciones": [
        {
          "id": "acevichado-de-salmon",
          "nombre": "Acevichado de salmón",
          "precio": 3490,
          "ingrediente": "acevichado-de-salmon"
        },
        {
          "id": "acevichado-mixto-salmon-camaron",
          "nombre": "Acevichado mixto salmón camarón",
          "precio": 4490,
          "ingrediente": "acevichado-mixto-salmon-camaron"
        },
        {"id": "palta", "nombre": "Palta", "precio": 2000, "ingrediente": "palta", "reemplazo": true},
        {
          "id": "champinon",
          "nombre": "Champiñón",
          "precio": 1000,
          "ingrediente": "champinon",
          "reemplazo": true
        },
        {
          "id": "pimenton",
          "nombre": "Pimentón",
          "precio": 1000,
          "ingrediente": "pimenton",
          "reemplazo": true
        },
        {
          "id": "kanikama",
          "nombre": "Kanikama",
          "precio": 1000,
          "ingrediente": "kanikama",
          "reemplazo": true
        },
        {
          "id": "queso-crema",
          "nombre": "Queso crema",
          "precio": 1500,
          "ingrediente": "queso-crema",
          "reemplazo": true
        },
        {"id": "camaron", "nombre": "Camarón", "precio": 1800, "ingrediente": "camaron", "reemplazo": true},
        {
          "id": "camaron-furay",
          "nombre": "Camarón furay",
          "precio": 2000,
          "ingrediente": "camaron-furay",
          "reemplazo": true
        },
        {"id": "pollo", "nombre": "Pollo", "precio": 1000, "ingrediente": "pollo", "reemplazo": true},
        {
          "id": "pollo-furay",
          "nombre": "Pollo furay",
          "precio": 1500,
          "ingrediente": "pollo-furay",
          "reemplazo": true
        },
        {
          "id": "pollo-teriyaki",
          "nombre": "Pollo teriyaki",
          "precio": 1500,
          "ingrediente": "pollo-teriyaki",
          "reemplazo": true
        },
        {"id": "salmon", "nombre": "Salmón", "precio": 2500, "ingrediente": "salmon", "reemplazo": true},
        {
          "id": "salmon-furay",
          "nombre": "Salmón furay",
          "precio": 3000,
          "ingrediente": "salmon-furay",
          "reemplazo": true
        },
        {"id": "ciboulette", "nombre": "Ciboulette", "precio": 800, "ingrediente": "ciboulette"}
      ]
    },
    {
      "id": "envoltura",
      "nombre": "Envoltura",
      "tipo": "envoltura",
      "porRoll": true,
      "min": 0,
      "max": 1,
      "opciones": [
        {"id": "plaqueta-palta", "nombre": "Plaqueta palta", "precio": 2000, "ingrediente": "palta"},
        {
          "id": "plaqueta-queso-crema",
          "nombre": "Plaqueta queso crema",
          "precio": 2000,
          "ingrediente": "queso-crema"
        },
        {"id": "plaqueta-salmon", "nombre": "Plaqueta salmón", "precio": 2500, "ingrediente": "salmon"},
        {
          "id": "plaqueta-rainbow-palta-queso-crema",
          "nombre": "Plaqueta rainbow palta/queso crema",
          "precio": 3500,
          "ingrediente": "rainbow-palta-queso-crema"
        },
        {
          "id": "plaqueta-rainbow-palta-salmon",
          "nombre": "Plaqueta rainbow palta/salmón",
          "precio": 4000,
          "ingrediente": "rainbow-palta-salmon"
        },
        {
          "id": "plaqueta-rainbow-queso-crema-salmon",
          "nombre": "Plaqueta rainbow queso crema/salmón",
          "precio": 4500,
          "ingrediente": "rainbow-queso-crema-salmon"
        },
        {"id": "ciboulette", "nombre": "Ciboulette", "precio": 800, "ingrediente": "ciboulette"},
        {"id": "envoltura-tempura", "nombre": "Envoltura tempura", "precio": 1000, "ingrediente": "tempura"}
      ]
    },
    {
      "id": "sin-nori",
      "nombre": "Sin nori",
      "tipo": "extra",
      "porRoll": true,
      "min": 0,
      "max": 1,
      "opciones": [
        {"id": "sin-nori", "nombre": "Sin nori", "precio": 1000}
      ]
    },
    {
      "id": "cortado",
      "nombre": "Cortado",
      "tipo": "extra",
      "porRoll": false,
      "min": 0,
      "max": 1,
      "opciones": [
        {"id": "hand-roll-cortado", "nombre": "Hand roll cortado", "precio": 500}
      ]
    },
    {
      "id": "proteina",
      "nombre": "Proteína",
      "tipo": "elegir",
      "porRoll": false,
      "min": 1,
      "max": 1,
      "opciones": [
        {"id": "pollo", "nombre": "Pollo", "precio": 0, "ingrediente": "pollo", "porDefecto": true},
        {"id": "champinon", "nombre": "Champiñón", "precio": 0, "ingrediente": "champinon"},
        {"id": "palmito", "nombre": "Palmito", "precio": 0, "ingrediente": "palmito"}
      ]
    },
    {
      "id": "envoltura-arma-tu-roll",
      "nombre": "Envoltura",
      "tipo": "elegir",
      "porRoll": false,
      "min": 1,
      "max": 1,
      "opciones": [
        {"id": "sesamo", "nombre": "Sésamo", "precio": 0, "ingrediente": "sesamo"},
        {"id": "ciboulette", "nombre": "Ciboulette", "precio": 0, "ingrediente": "ciboulette"},
        {"id": "crocante-de-quinoa", "nombre": "Crocante de quinoa", "precio": 0},
        {"id": "palta", "nombre": "Palta", "precio": 0, "ingrediente": "palta"},
        {"id": "tempura-frito", "nombre": "Tempura (frito)", "precio": 0},
        {"id": "queso-crema", "nombre": "Queso crema", "precio": 0, "ingrediente": "queso-crema"},
        {"id": "panko-frito", "nombre": "Panko (frito)", "precio": 0},
        {"id": "salmon", "nombre": "Salmón", "precio": 0, "ingrediente": "salmon"},
        {"id": "atun", "nombre": "Atún", "precio": 0, "ingrediente": "atun"},
        {"id": "nori", "nombre": "Nori", "precio": 0, "ingrediente": "nori"}
      ]
    },
    {
      "id": "proteina-arma-tu-roll",
      "nombre": "Proteína",
      "tipo": "elegir",
      "porRoll": false,
      "min": 1,
      "max": 1,
      "opciones": [
        {"id": "kanikama", "nombre": "Kanikama", "precio": 0, "ingrediente": "kanikama"},
        {"id": "camaron", "nombre": "Camarón", "precio": 0, "ingrediente": "camaron"},
        {"id": "camaron-furay", "nombre": "Camarón furay", "precio": 0, "ingrediente": "camaron-furay"},
        {"id": "pollo", "nombre": "Pollo", "precio": 0, "ingrediente": "pollo"},
        {"id": "pollo-furay", "nombre": "Pollo furay", "precio": 0, "ingrediente": "pollo-furay"},
        {"id": "pollo-teriyaki", "nombre": "Pollo teriyaki", "precio": 0, "ingrediente": "pollo-teriyaki"},
        {"id": "salmon", "nombre": "Salmón", "precio": 0, "ingrediente": "salmon"},
        {"id": "salmon-furay", "nombre": "Salmón furay", "precio": 0, "ingrediente": "salmon-furay"}
      ]
    },
    {
      "id": "topping",
      "nombre": "Topping",
      "tipo": "elegir",
      "porRoll": false,
      "min": 1,
      "max": 1,
      "opciones": [
        {"id": "papa-crispy", "nombre": "Papa crispy", "precio": 0},
        {"id": "ciboulette", "nombre": "Ciboulette", "precio": 0, "ingrediente": "ciboulette"},
        {"id": "sesamo", "nombre": "Sésamo", "precio": 0, "ingrediente": "sesamo"},
        {"id": "cebolla-crispy", "nombre": "Cebolla crispy", "precio": 0},
        {"id": "merken", "nombre": "Merkén", "precio": 0, "ingrediente": "merken"},
        {"id": "amapola", "nombre": "Amapola", "precio": 0},
        {"id": "nuez", "nombre": "Nueces", "precio": 0, "ingrediente": "nuez"},
        {"id": "almendras", "nombre": "Almendras", "precio": 0, "ingrediente": "almendras"},
        {"id": "quinoa-frita", "nombre": "Quinoa frita", "precio": 0, "ingrediente": "quinoa-frita"},
        {"id": "almendras-laminadas-tostadas", "nombre": "Almendras laminadas tostadas", "precio": 0},
        {"id": "tocino-frito", "nombre": "Tocino frito", "precio": 0}
      ]
    },
    {
      "id": "salsa",
      "nombre": "Salsa",
      "tipo": "elegir",
      "porRoll": false,
      "min": 1,
      "max": 1,
      "opciones": [
        {"id": "salsa-soya", "nombre": "Salsa soya", "precio": 0},
        {"id": "salsa-agridulce", "nombre": "Salsa agridulce", "precio": 0},
        {"id": "salsa-mango-maracuya", "nombre": "Salsa mango maracuyá", "precio": 0},
        {"id": "salsa-huancaina", "nombre": "Salsa huancaína", "precio": 0},
        {"id": "salsa-acevichada", "nombre": "Salsa acevichada", "precio": 0},
        {"id": "salsa-spicy", "nombre": "Salsa spicy", "precio": 0},
        {"id": "salsa-monaco", "nombre": "Salsa Mónaco", "precio": 0}
      ]
    },
    {
      "id": "acompanamientos",
      "nombre": "Acompañamientos",
      "tipo": "elegir",
      "porRoll": false,
      "min": 2,
      "max": 2,
      "opciones": [
        {"id": "palta", "nombre": "Palta", "precio": 0, "ingrediente": "palta"},
        {"id": "champinon", "nombre": "Champiñón", "precio": 0, "ingrediente": "champinon"},
        {"id": "pimenton", "nombre": "Pimentón", "precio": 0, "ingrediente": "pimenton"},
        {"id": "queso-crema", "nombre": "Queso crema", "precio": 0, "ingrediente": "queso-crema"}
      ]
    },
    {
      "id": "salsa-menu-nino",
      "nombre": "Salsa",
      "tipo": "elegir",
      "porRoll": false,
      "min": 1,
      "max": 1,
      "opciones": [
        {"id": "mayonesa", "nombre": "Mayonesa", "precio": 0},
        {"id": "ketchup", "nombre": "Ketchup", "precio": 0},
        {"id": "mostaza", "nombre": "Mostaza", "precio": 0}
      ]
    },
    {"id": "sabor", "nombre": "Sabor", "tipo": "texto", "porRoll": false, "min": 1, "max": 1}
  ],
  "ingredientes": {
    "acevichado-de-salmon": "Acevichado de salmón",
    "acevichado-mixto-salmon-camaron": "Acevichado mixto salmón camarón",
    "almendras": "Almendras",
    "almendras-tostadas": "Almendras tostadas",
    "atun": "Atún",
    "atun-furay": "Atún furay",
    "camaron": "Camarón",
    "camaron-furay": "Camarón furay",
    "cebolla-morada": "Cebolla morada",
    "cebollin": "Cebollín",
    "champinon": "Champiñón",
    "choclillo": "Choclillo",
    "choclo": "Choclo",
    "ciboulette": "Ciboulette",
    "kanikama": "Kanikama",
    "merken": "Merkén",
    "morron": "Morrón",
    "nori": "Nori",
    "nuez": "Nuez",
    "palmito": "Palmito",
    "palta": "Palta",
    "panko": "Panko",
    "pepino": "Pepino",
    "pimenton": "Pimentón",
    "pollo": "Pollo",
    "pollo-crispy": "Pollo crispy",
    "pollo-frito": "Pollo frito",
    "pollo-furay": "Pollo furay",
    "pollo-teriyaki": "Pollo teriyaki",
    "queso": "Queso",
    "queso-crema": "Queso crema",
    "quinoa-frita": "Quinoa frita",
    "rainbow-palta-queso-crema": "Rainbow palta/queso crema",
    "rainbow-palta-salmon": "Rainbow palta/salmón",
    "rainbow-queso-crema-salmon": "Rainbow queso crema/salmón",
    "salmon": "Salmón",
    "salmon-furay": "Salmón furay",
    "sesamo": "Sésamo",
    "tempura": "Tempura"
  }
};
