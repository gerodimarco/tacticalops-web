// Contenido editable del sitio: textos, packs, armas, fotos y enlaces.
export const SITE = {
  whatsapp: "https://wa.link/8jgmbi", // link oficial de WhatsApp (no admite texto prellenado)
  instagram: "https://www.instagram.com/tacticalopsarg",
  youtube: "https://www.youtube.com/@TacticalOpsArg",
  maps: "https://www.google.com/maps/search/?api=1&query=-26.8436216,-65.1866505"
};
export const GUNS = {
  pistola: { name: "Pistola 9 mm", type: "Pistola", models: ["Glock 17 Gen 3", "Taurus G3C", "Kral Arms KR19 Pro"], img: "/images/armas/pistola.jpg", alt: "Pistolas Glock 17 Gen 3, Taurus G3C y Kral Arms KR19 Pro sobre la mesa de tiro" },
  carabina: { name: "Carabina .22", type: "Arma larga", models: ["Rossi Delta 70/22", "Retay RA 15/22"], img: "/images/armas/carabina.jpg", alt: "Carabinas Rossi Delta 70/22 y Retay RA 15/22 con munición y protección auditiva" },
  escopeta: { name: "Escopeta 12/70", type: "Arma larga", models: ["Hatsan Escort MPS"], img: "/images/armas/escopeta.jpg", alt: "Escopeta Hatsan Escort MPS con cartuchos 12/70 sobre la mesa de tiro" }
};
export const PACKS = [
  { name: "Pistolero", items: [["pistola", 25]], img: "/images/packs/pistolero.jpg", alt: "Pistola 9 mm con munición, cargador y protección auditiva sobre la mesa de tiro" },
  { name: "Armas Largas", items: [["carabina", 50], ["escopeta", 12]], img: "/images/packs/armas-largas.jpg", alt: "Escopeta y carabina .22 con munición y protección auditiva sobre la mesa de tiro" },
  { name: "Operador", items: [["pistola", 25], ["carabina", 50]], img: "/images/packs/operador.jpg", alt: "Carabina .22 con mira roja y pistola 9 mm con munición y protección auditiva" },
  { name: "Elite", items: [["pistola", 25], ["carabina", 50], ["escopeta", 12]], img: "/images/packs/elite.jpg", alt: "Escopeta, carabina .22 y pistola 9 mm con munición y equipo de protección" }
];
export const ACTIVITIES = [
  { t: "Jornada de iniciación", d: "Bloque teórico de 40 minutos con normas de seguridad, fundamentos del tiro, balística y normativa vigente. Luego, práctica con fuego real con los ejercicios y armas de tu pack." },
  { t: "Programas avanzados", d: "Perfeccionamiento técnico, tiro en movimiento, resolución de fallas, tácticas y drills de alta exigencia, con entrenamiento personalizado." },
  { t: "Entrenamiento para legítimos usuarios", d: "Traé tu armamento y municiones y recibí una jornada planificada según tus requerimientos. También abierto a personal policial y penitenciario." }
];
export const FAQ = [
  ["¿Qué requisitos necesito para ir?", "No hay requisitos: elegís el pack de armas que querés disparar y recibís instrucción. Vos llevás las ganas de aprender, divertirte y sacar el estrés. Nosotros nos encargamos del resto."],
  ["¿En qué consiste la jornada?", "Comienza con un bloque teórico de 40 minutos donde se establecen las normas de seguridad, fundamentos del tiro, balística y normativa legal vigente. Después se pasa a la práctica con fuego real, con distintos ejercicios y las armas que hayas elegido en tu pack."],
  ["¿Qué duración tienen las jornadas?", "Se arranca a las 9 y, según la cantidad de gente, se termina aproximadamente a las 14 o 15 hs. También hay turno de 14 a 18 hs."],
  ["¿Puedo ir con un acompañante?", "Sí. Si no dispara, no abona nada. Solo tiene que ser bueno cebando mates."],
  ["¿Qué medios de pago aceptan?", "Efectivo o transferencias."],
  ["¿Desde qué edad puedo ir a disparar?", "Desde los 12 años con un padre, madre o tutor presente. Sin acompañante, a partir de los 18 años."],
  ["Soy legítimo usuario o personal policial/penitenciario, ¿puedo ir a entrenar?", "Sí. Podés llevar tu armamento y munición, y se te planifica una jornada de entrenamiento personalizada según tus requerimientos. Si necesitás munición, te la podemos proveer."],
  ["¿Las jornadas son grupales?", "Sí, son grupales y con cupos limitados. Las fechas se anuncian por Instagram."],
  ["¿Tengo otra duda?", "Escribinos por mensaje directo en Instagram o por WhatsApp."]
];

export const PHOTOS = [
  [
    "/images/experiencias/01.jpg",
    "Alumnos disparando pistolas en la pedana"
  ],
  [
    "/images/experiencias/02.jpg",
    "Grupo de alumnos con el instructor en la pedana"
  ],
  [
    "/images/experiencias/03.jpg",
    "Grupo con la bandera de Tactical Ops en la pedana"
  ],
  [
    "/images/experiencias/04.jpg",
    "Alumnos e instructores en la pedana"
  ],
  [
    "/images/experiencias/05.jpg",
    "Alumnos posando con el instructor en la pedana"
  ],
  [
    "/images/experiencias/06.jpg",
    "Grupo con la bandera de Tactical Ops"
  ],
  [
    "/images/experiencias/07.jpg",
    "Jornada con las banderas de Tactical Ops y Argentina"
  ],
  [
    "/images/experiencias/08.jpg",
    "Instructor dando la charla de seguridad al aire libre"
  ],
  [
    "/images/experiencias/09.jpg",
    "Grupo con la bandera de Tactical Ops en una jornada"
  ],
  [
    "/images/experiencias/10.jpg",
    "Alumnos con la bandera de Tactical Ops en la pedana"
  ],
  [
    "/images/experiencias/11.jpg",
    "Alumnos posando junto a la bandera de Tactical Ops"
  ],
  [
    "/images/experiencias/12.jpg",
    "Instructor explicando el armamento durante la teoría"
  ],
  [
    "/images/experiencias/13.jpg",
    "Grupo con la bandera de Tactical Ops al aire libre"
  ],
  [
    "/images/experiencias/14.jpg",
    "Grupo numeroso de alumnos e instructores al aire libre"
  ],
  [
    "/images/experiencias/15.jpg",
    "Instructor con alumnos y la bandera de Tactical Ops"
  ],
  [
    "/images/experiencias/16.jpg",
    "Instructor guiando a dos alumnas durante la práctica de tiro"
  ],
  [
    "/images/experiencias/17.jpg",
    "Instructor dando la charla teórica con el armamento sobre la mesa"
  ],
  [
    "/images/experiencias/18.jpg",
    "Grupo con la bandera de Tactical Ops al aire libre"
  ],
  [
    "/images/experiencias/19.jpg",
    "Alumnos practicando la posición de tiro durante la jornada"
  ],
  [
    "/images/experiencias/20.jpg",
    "Alumnos mostrando sus blancos tras la práctica"
  ],
  [
    "/images/experiencias/21.jpg",
    "Alumnos posando junto a sus blancos"
  ],
  [
    "/images/experiencias/22.jpg",
    "Alumno sonriendo junto a su blanco"
  ],
  [
    "/images/experiencias/23.jpg",
    "Alumna señalando los impactos en su blanco"
  ]
];
