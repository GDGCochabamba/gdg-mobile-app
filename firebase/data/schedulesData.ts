import { FbSchedule, Room, SocialNetworkType, Talk, TalkType } from '@/models/FbSchedule';

const getTestTallersAula1 = () => {
  const room: Room = { name: 'Talleres (Aula 1)', talks: [] };

  const talk1: Talk = {
    title: 'Fundamentos de Figma: Diseño y prototipado para equipos ágiles',
    description:
      'Conoce las herramientas esenciales de Figma para crear interfaces y prototipos que optimicen la colaboración entre diseñadores y desarrolladores. Este taller te enseñará a usar Figma para trabajar en tiempo real con tu equipo, mejorando la eficiencia y facilitando la entrega de proyectos creativos y técnicos de manera integrada.',
    speakerName: 'Paola Ramirez Arrazola',
    speakerPhoto: 'https://drive.google.com/open?id=1zRNYDN_exYsphNFfh5cJnQdhqUZciiuk',
    time: '10:30 - 11:30',
    duration: '1 hora',
    speakerBio:
      'Paola es una diseñadora con experiencia en diseño de interfaces, enfocada en la creación de soluciones visuales efectivas para diversos sectores. Ha trabajado en proyectos que van desde la creación de identidades visuales hasta el desarrollo de interfaces de usuario y flujos de trabajo para aplicaciones y sitios web (UI/UX). Su enfoque se centra en la usabilidad y la estética, buscando siempre un equilibrio entre creatividad y funcionalidad.',
    links: [],
    resourcesLink: '',
    type: TalkType.WORKSHOP,
    active: false,
    finished: false,
    speakerEmail: 'paola.ramirez.arrazola@gmail.com',
    requirements: 'Computadora con Figma instalado',
    speakerCity: 'Cochabamba',
    speakerCountry: 'Bolivia',
    socialNetworks: [
      {
        name: SocialNetworkType.FACEBOOK,
        url: 'https://www.facebook.com/share/BUWevs4myqdomTZh/',
      },
      {
        name: SocialNetworkType.INSTAGRAM,
        url: 'https://www.instagram.com/paox_praz?igsh=MXIzZXdtOXo5aWx4bQ==',
      },
    ],
  };

  const talk2: Talk = {
    title: 'Taller de Kotlin Multiplatform',
    speakerName: 'Javier Gonzales',
    speakerPhoto: 'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg',
    time: '14:00 - 15:00',
    duration: '1 hora',
    description: 'En este taller aprenderemos a compartir código entre Android y iOS.',
    speakerBio: '',
    links: [],
    resourcesLink: '',
    type: TalkType.WORKSHOP,
    active: false,
    finished: true,
  };

  room.talks.push(talk1);
  room.talks.push(talk2);

  return room;
};

const getTestSchedule = () => {
  const scheduleId = 'byVC0vkT7ffFvyplocGh';
  const schedule: FbSchedule = { rooms: [] };

  const auditorio: Room = { name: 'Auditorio', talks: [] };
  const talleresAula1: Room = { name: 'Talleres (Aula 1)', talks: [] };
  const talleresAula2: Room = { name: 'Talleres (Aula 2)', talks: [] };

  const talkWelcome: Talk = {
    title: 'Bienvenida',
    speakerName: 'GDG Cochabamba',
    speakerPhoto: 'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg',
    time: '09:00 - 09:30',
    duration: '30 min',
    description: 'Bienvenida al DevFest Cochabamba 2024',
    speakerBio: '',
    links: [],
    resourcesLink: '',
    type: TalkType.WELCOME,
    active: false,
    finished: true,
  };
  const talk2: Talk = {
    title: 'Gemini in Android,  Let’s build smart apps',
    speakerName: 'Yuri Camacho',
    speakerPhoto: 'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg',
    time: '09:30 - 09:55',
    duration: '25 min',
    description:
      'La IA esta de moda, escuchamos por todo lado IA, y con la llegada de Genimi las integraciones de IA a nuestras apps son mas fáciles dandole capacidades que antes no podíamos tener en nuestros dispositivos móviles, en esta charla haremos que nuestras apps móviles sean inteligentes integrándolas con Gemini. ',
    speakerBio: '',
    links: [],
    resourcesLink: '',
    type: TalkType.TALK,
    active: false,
    finished: true,
  };

  const talk3: Talk = {
    title: 'Kotlin Multiplatform',
    speakerName: 'Javier Gonzales',
    speakerPhoto: 'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg',
    time: '10:00 - 10:25',
    duration: '25 min',
    description:
      'Kotlin Multiplatform es una tecnología que nos permite compartir código entre plataformas, en esta charla aprenderemos a compartir código entre Android y iOS.',
    speakerBio: '',
    links: [],
    resourcesLink: '',
    type: TalkType.TALK,
    active: false,
    finished: true,
  };

  const talk4: Talk = {
    title: 'Flutter',
    speakerName: 'Javier Gonzales',
    speakerPhoto: 'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg',
    time: '10:30 - 10:55',
    duration: '25 min',
    description:
      'Flutter es un framework de Google que nos permite crear apps para Android y iOS con un solo código, en esta charla aprenderemos a crear apps con Flutter.',
    speakerBio: '',
    links: [],
    resourcesLink: '',
    type: TalkType.TALK,
    active: false,
    finished: true,
  };

  const talk5: Talk = {
    title: 'Break',
    speakerName: '',
    speakerPhoto: 'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg',
    time: '11:00 - 11:30',
    duration: '30 min',
    description: 'Descanso',
    speakerBio: '',
    links: [],
    resourcesLink: '',
    type: TalkType.BREAK,
    active: false,
    finished: true,
  };

  const taller6: Talk = {
    title: 'Taller de Flutter',
    speakerName: 'Javier Gonzales',
    speakerPhoto: 'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg',
    time: '11:30 - 12:30',
    duration: '1 hora',
    description: 'En este taller aprenderemos a crear una app con Flutter.',
    speakerBio: '',
    links: [],
    resourcesLink: '',
    type: TalkType.WORKSHOP,
    active: false,
    finished: true,
  };

  const talk7: Talk = {
    title: 'Lunch',
    speakerName: '',
    speakerPhoto: 'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg',
    time: '12:30 - 14:00',
    duration: '1 hora 30 min',
    description: 'Almuerzo',
    speakerBio: '',
    links: [],
    resourcesLink: '',
    type: TalkType.LUNCH,
    active: false,
    finished: true,
  };

  const taller8: Talk = {
    title: 'Taller de Kotlin Multiplatform',
    speakerName: 'Javier Gonzales',
    speakerPhoto: 'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg',
    time: '14:00 - 15:00',
    duration: '1 hora',
    description: 'En este taller aprenderemos a compartir código entre Android y iOS.',
    speakerBio: '',
    links: [],
    resourcesLink: '',
    type: TalkType.WORKSHOP,
    active: false,
    finished: true,
  };

  const talk9: Talk = {
    title: 'Break',
    speakerName: '',
    speakerPhoto: 'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg',
    time: '15:00 - 15:30',
    duration: '30 min',
    description: 'Descanso',
    speakerBio: '',
    links: [],
    resourcesLink: '',
    type: TalkType.BREAK,
    active: false,
    finished: true,
  };

  const taller10: Talk = {
    title: 'Taller de Gemini',
    speakerName: 'Yuri Camacho',
    speakerPhoto: 'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg',
    time: '15:30 - 16:30',
    duration: '1 hora',
    description: 'En este taller aprenderemos a integrar Gemini en nuestras apps.',
    speakerBio: '',
    links: [],
    resourcesLink: '',
    type: TalkType.WORKSHOP,
    active: false,
    finished: true,
  };

  const talk11: Talk = {
    title: 'Break',
    speakerName: '',
    speakerPhoto: 'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg',
    time: '16:30 - 17:00',
    duration: '30 min',
    description: 'Descanso',
    speakerBio: '',
    links: [],
    resourcesLink: '',
    type: TalkType.BREAK,
    active: false,
    finished: true,
  };

  const talk12: Talk = {
    title: 'Panel de discusión',
    speakerName: 'GDG Cochabamba',
    speakerPhoto: 'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg',
    time: '17:00 - 18:00',
    duration: '1 hora',
    description: 'Panel de discusión con los speakers del DevFest Cochabamba 2024.',
    speakerBio: '',
    links: [],
    resourcesLink: '',
    type: TalkType.PANEL,
    active: false,
    finished: true,
  };

  const talk13: Talk = {
    title: 'Cierre',
    speakerName: 'GDG Cochabamba',
    speakerPhoto: 'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg',
    time: '18:00 - 18:30',
    duration: '30 min',
    description: 'Cierre del DevFest Cochabamba 2024.',
    speakerBio: '',
    links: [],
    resourcesLink: '',
    type: TalkType.CLOSING,
    active: false,
    finished: true,
  };

  auditorio.talks.push(talkWelcome);
  auditorio.talks.push(talk2);
  auditorio.talks.push(talk3);
  auditorio.talks.push(talk4);
  auditorio.talks.push(talk5);
  talleresAula1.talks.push(taller6);
  auditorio.talks.push(talk7);
  talleresAula1.talks.push(taller8);
  auditorio.talks.push(talk9);
  talleresAula2.talks.push(taller10);
  auditorio.talks.push(talk11);
  auditorio.talks.push(talk12);
  auditorio.talks.push(talk13);

  schedule.rooms.push(auditorio);
  schedule.rooms.push(talleresAula1);
  schedule.rooms.push(talleresAula2);

  return { schedule, scheduleId };
};

export default getTestSchedule;
