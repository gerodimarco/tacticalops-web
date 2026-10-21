// Contenido editable del sitio: textos, packs, armas, fotos y enlaces.
export const SITE = {
  whatsapp: "https://wa.link/mpo10h", // link oficial de WhatsApp (no admite texto prellenado)
  instagram: "https://www.instagram.com/tacticalopsarg",
  youtube: "https://www.youtube.com/@TacticalOpsArg",
  maps: "https://www.google.com/maps/search/?api=1&query=-26.8436216,-65.1866505"
};
export const GUNS = {
  pistola: { name: "Pistola 9 mm", type: "Pistola", caliber: "9 mm", models: ["Glock 17 Gen 3", "Taurus G3C", "Kral Arms KR19 Pro"] },
  carabina: { name: "Carabina .22", type: "Arma larga", caliber: ".22", models: ["Rossi Delta 70/22", "Retay RA 15/22"] },
  escopeta: { name: "Escopeta 12/70", type: "Arma larga", caliber: "12/70", models: ["Hatsan Escort MPS"] }
};
export const FIREARMS = [
  { manufacturer: "Glock", model: "Glock 17 Gen 3", category: "pistola", image: "/images/armas/glock-17-gen-3.jpg" },
  { manufacturer: "Kral Arms", model: "KR19 Pro", category: "pistola", image: "/images/armas/kral-arms-kr19-pro.jpg" },
  { manufacturer: "Taurus", model: "G3C", category: "pistola", image: "/images/armas/taurus-g3c.jpg" },
  { manufacturer: "Rossi", model: "Delta 70/22", category: "carabina", image: "/images/armas/rossi-delta-70-22.jpg" },
  { manufacturer: "Retay", model: "RA 15/22", category: "carabina", image: "/images/armas/retay-ra-15-22.jpg" },
  { manufacturer: "Hatsan", model: "Escort MPS", category: "escopeta", image: "/images/armas/hatsan-escort-mps.jpg" }
].map((firearm) => ({
  ...firearm,
  caliber: GUNS[firearm.category].caliber,
  imageAlt: firearm.model
}));
export const PACKS = [
  { name: "Pistolero", items: [["pistola", 25]], img: "/images/packs/pistolero.jpg", alt: "Pistola 9 mm con munición, cargador y protección auditiva sobre la mesa de tiro" },
  { name: "Armas Largas", items: [["carabina", 50], ["escopeta", 12]], img: "/images/packs/armas-largas.jpg", alt: "Escopeta y carabina .22 con munición y protección auditiva sobre la mesa de tiro" },
  { name: "Operador", items: [["pistola", 25], ["carabina", 50]], img: "/images/packs/operador.jpg", alt: "Carabina .22 con mira roja y pistola 9 mm con munición y protección auditiva" },
  { name: "Elite", items: [["pistola", 25], ["carabina", 50], ["escopeta", 12]], img: "/images/packs/elite.jpg", alt: "Escopeta, carabina .22 y pistola 9 mm con munición y equipo de protección" }
];
export const ACTIVITIES = [
  {
    t: "EXPERIENCIAS DE TIRO",
    d: [
      "Tu primera experiencia en el mundo del tiro, con instrucción paso a paso.",
      "Comenzá con una introducción a las normas de seguridad, fundamentos del tiro y nociones de balística. Después, llevá la teoría a la práctica con fuego real, acompañado por nuestros instructores y con las armas incluidas en tu pack."
    ],
    cta: "CONSULTAR PACKS"
  },
  {
    t: "ENTRENAMIENTO AVANZADO",
    d: [
      "Tu experiencia es solo el comienzo.",
      "¿Te gustó la experiencia de tiro? Seguí entrenando con nosotros, perfeccioná tu técnica y progresá con entrenamientos adaptados a tu nivel. Además, te orientamos en el camino para convertirte en legítimo usuario y adquirir tu primera arma de fuego de manera legal y responsable."
    ],
    cta: "CONSULTAR ENTRENAMIENTO"
  },
  {
    t: "ENTRENAMIENTO PARA LEGÍTIMOS USUARIOS",
    d: [
      "Una jornada adaptada a tus necesidades y objetivos.",
      "Entrená con tu propio armamento y municiones en una jornada planificada según tus requerimientos. También ofrecemos entrenamiento para personal policial y penitenciario, sujeto a las condiciones de cada actividad."
    ],
    cta: "SOLICITAR INFORMACIÓN"
  }
];
export const SCHEDULE = {
  saturday: [
    { label: "Turno mañana", hours: "9:00 a 14:00 hs." },
    { label: "Turno tarde", hours: "14:30 a 18:30 hs." }
  ],
  sunday: "9:00 a 13:00 hs."
};
export const FAQ = [
  {
    question: "¿Necesito experiencia previa o tener un arma?",
    answer: ["No. Podés venir aunque nunca hayas disparado y no tengas un arma propia. Elegís el pack que más te guste y nuestros instructores te guían paso a paso."]
  },
  {
    question: "¿Qué voy a hacer durante la jornada?",
    answer: ["Comenzamos con una breve explicación sobre seguridad, fundamentos del tiro y normativa básica. Luego pasás a la práctica con el pack que elegiste, siempre acompañado por instructores."]
  },
  {
    question: "¿Cuánto dura la jornada?",
    answer: [
      "La duración depende del turno que reserves.",
      "Los horarios pueden variar según la fecha y la cantidad de participantes."
    ],
    includeSchedule: true
  },
  {
    question: "¿Puedo ir con un acompañante?",
    answer: ["Sí. Podés venir acompañado. Si la persona no participa de la actividad, no abona un pack. Consultanos si hay alguna condición de ingreso para acompañantes."]
  },
  {
    question: "¿Desde qué edad puedo participar?",
    answer: ["Desde los 12 años con un padre, madre o tutor responsable. Desde los 18 años podés participar sin acompañante."]
  },
  {
    question: "¿Cuánto cuesta y qué incluye cada pack?",
    answer: [
      "Los precios varían según el pack que elijas y son por persona. Incluyen instrucción, uso de armas y municiones, derecho de pedana y elementos de protección.",
      "Podés ver los packs y valores en nuestra publicación principal."
    ],
    link: { href: "#packs", label: "Ver los packs disponibles en esta página" }
  },
  {
    question: "¿Dónde se realizan las jornadas?",
    answer: ["En el Club Tiro Federal de Tucumán. Te compartimos las indicaciones para llegar una vez que reserves tu lugar."]
  },
  {
    question: "¿Cómo puedo pagar?",
    answer: ["Podés abonar en efectivo o por transferencia bancaria."]
  },
  {
    question: "¿Qué tengo que llevar?",
    answer: ["No necesitás llevar un arma propia ni municiones. Te recomendamos ropa cómoda, calzado cerrado y tu DNI. Todo el equipamiento de protección te lo proporcionamos nosotros."]
  },
  {
    question: "Soy legítimo usuario o personal policial/penitenciario, ¿puedo entrenar?",
    answer: [
      "Sí. Organizamos jornadas de entrenamiento personalizado para Legítimos Usuarios y personal policial o penitenciario.",
      "Podés asistir con tu propio armamento y municiones, según la normativa vigente y las condiciones de la actividad. Consultanos para más información."
    ]
  }
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
