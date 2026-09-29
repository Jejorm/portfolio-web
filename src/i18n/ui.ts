export const languages = {
	en: 'English',
	es: 'Español',
}

export const defaultLang = 'en'

export const ui = {
	en: {
		'skip.link': 'Skip to content',
		'nav.home': 'Jeremy Orellana, home',
		'nav.work': 'Work',
		'nav.about': 'About',
		'nav.skills': 'Stack',
		'nav.principles': 'Process',
		'nav.contact': 'Contact',
		'nav.language': 'Change language',
		'nav.theme': 'Toggle color theme',
		'nav.theme.light': 'Light',
		'nav.theme.dark': 'Dark',
		'nav.menu.open': 'Open menu',
		'nav.menu.close': 'Close menu',
		'nav.menu': 'Menu',
		'hero.available': 'Open to full-time roles and freelance work',
		'hero.statement':
			'Full-stack developer. I build and ship complete products, like Vikoma, a SaaS that is live in production.',
		'hero.cta': 'View work',
		'hero.portrait.alt':
			'Portrait of Jeremy Orellana wearing glasses and a dark jacket',
		'work.title': 'Selected work',
		'work.intro':
			'Four full-stack projects, from the data layer to the interface.',
		'work.index': 'Project index',
		'work.challenges': 'Problems',
		'work.solutions': 'How I solved them',
		'work.live': 'Live site',
		'work.stack': 'Built with',
		'about.title': 'About',
		'about.statement':
			'I am Jeremy, a full-stack developer in Ecuador, working remotely. I built Vikoma, a live multi-tenant SaaS, on my own, and I care most about where backend rules meet the interface.',
		'about.body':
			'My work covers real-time systems, accessible React interfaces and back ends tested against real database migrations. I work mainly with React, Next.js, Astro, Node.js and Bun.',
		'about.fact.base.label': 'Base',
		'about.fact.base.value': 'Ecuador, remote',
		'about.fact.focus.label': 'Focus',
		'about.fact.focus.value': 'Full-stack web apps',
		'about.fact.work.label': 'Available for',
		'about.fact.work.value': 'Full-time and freelance',
		'about.area1.title': 'Real-time systems',
		'about.area1.body':
			'Tickets App keeps kiosks, desks and display boards in sync over WebSockets, and reconnects clients when a connection drops.',
		'about.area2.title': 'Accessible frontend',
		'about.area2.body':
			'React and Next.js interfaces that work with a keyboard and a screen reader, like the live announcements in Assembly: Endgame.',
		'about.area3.title': 'Backend and data',
		'about.area3.body':
			'Node.js and Bun services, SQL databases with tenant isolation, and Docker for repeatable deployments.',
		'about.area4.title': 'Quality',
		'about.area4.body':
			'Business rules as plain functions, strict types and automated tests, so regressions show up before users see them.',
		'skills.title': 'Stack',
		'skills.intro': 'The tools I use across my projects.',
		'skills.col1': 'Frontend',
		'skills.col2': 'Backend and data',
		'skills.col3': 'Tooling and delivery',
		'principles.title': 'How I work',
		'principles.p1.title': 'Built to be changed',
		'principles.p1.body':
			'I keep business rules in plain functions, apart from the framework, so the next person can change them safely.',
		'principles.p2.title': 'Performance is a feature',
		'principles.p2.body':
			'I set limits for JavaScript, images and fonts at the start of a project, not at the end.',
		'principles.p3.title': 'Plan for failure',
		'principles.p3.body':
			'Reconnection, validation and clear error messages go in the first version. Vikoma refuses to boot if the database does not enforce foreign keys.',
		'principles.quality.title': 'Every change is checked',
		'principles.quality.body':
			'Linting, strict types, unit tests and end-to-end tests check every change.',
		'contact.title': "Let's work together",
		'contact.intro': 'Tell me about the role or project you have in mind.',
		'contact.email.label': 'Email',
		'contact.copy': 'Copy email',
		'contact.copied': 'Copied',
		'contact.form.name': 'Name',
		'contact.form.name.placeholder': 'Example: Ada Lovelace',
		'contact.form.email': 'Email',
		'contact.form.email.placeholder': 'name@example.com',
		'contact.form.message': 'Message',
		'contact.form.message.placeholder':
			'Example: a full-stack role on a product team',
		'contact.form.submit': 'Send message',
		'contact.form.sending': 'Sending message',
		'contact.form.success': 'Message sent. I will get back to you by email.',
		'contact.form.error':
			'The message could not be sent. Try again, or email me at jejorm8@gmail.com.',
		'contact.form.required': 'Fill in this field to send your message.',
		'contact.form.invalidEmail':
			'Enter an email address like name@example.com.',
		'footer.top': 'Back to top',
		'footer.rights': 'Jeremy Orellana',
		'seo.title': 'Full-Stack Developer | Professional Portfolio',
		'seo.description':
			'Full-stack developer in Ecuador. I build and ship complete web products, including Vikoma, a live multi-tenant SaaS for barbershops and salons.',
		'notfound.title': 'Page not found',
		'notfound.body': 'This address does not exist or has moved.',
		'notfound.cta': 'Back to home',
	},
	es: {
		'skip.link': 'Saltar al contenido',
		'nav.home': 'Jeremy Orellana, inicio',
		'nav.work': 'Proyectos',
		'nav.about': 'Sobre mí',
		'nav.skills': 'Stack',
		'nav.principles': 'Proceso',
		'nav.contact': 'Contacto',
		'nav.language': 'Cambiar idioma',
		'nav.theme': 'Cambiar tema de color',
		'nav.theme.light': 'Claro',
		'nav.theme.dark': 'Oscuro',
		'nav.menu.open': 'Abrir menú',
		'nav.menu.close': 'Cerrar menú',
		'nav.menu': 'Menú',
		'hero.available':
			'Disponible para empleo a tiempo completo y proyectos freelance',
		'hero.statement':
			'Desarrollador full-stack. Construyo y publico productos completos, como Vikoma, un SaaS que ya está en producción.',
		'hero.cta': 'Ver proyectos',
		'hero.portrait.alt':
			'Retrato de Jeremy Orellana con gafas y chaqueta oscura',
		'work.title': 'Proyectos seleccionados',
		'work.intro':
			'Cuatro proyectos full-stack, de la capa de datos a la interfaz.',
		'work.index': 'Índice de proyectos',
		'work.challenges': 'Problemas',
		'work.solutions': 'Cómo los resolví',
		'work.live': 'Sitio en vivo',
		'work.stack': 'Construido con',
		'about.title': 'Sobre mí',
		'about.statement':
			'Soy Jeremy, desarrollador full-stack en Ecuador, y trabajo en remoto. Construí Vikoma, un SaaS multi-tenant en producción, por mi cuenta. Lo que más me importa es dónde las reglas del backend se encuentran con la interfaz.',
		'about.body':
			'Mi trabajo abarca sistemas en tiempo real, interfaces React accesibles y backends probados con migraciones reales de base de datos. Uso sobre todo React, Next.js, Astro, Node.js y Bun.',
		'about.fact.base.label': 'Base',
		'about.fact.base.value': 'Ecuador, remoto',
		'about.fact.focus.label': 'Enfoque',
		'about.fact.focus.value': 'Aplicaciones web full-stack',
		'about.fact.work.label': 'Disponible para',
		'about.fact.work.value': 'Tiempo completo y freelance',
		'about.area1.title': 'Sistemas en tiempo real',
		'about.area1.body':
			'Tickets App mantiene sincronizados kioscos, escritorios y pantallas con WebSockets, y reconecta a los clientes cuando se corta la conexión.',
		'about.area2.title': 'Frontend accesible',
		'about.area2.body':
			'Interfaces en React y Next.js que funcionan con teclado y lector de pantalla, como los avisos en vivo de Assembly: Endgame.',
		'about.area3.title': 'Backend y datos',
		'about.area3.body':
			'Servicios en Node.js y Bun, bases de datos SQL con aislamiento por cliente y Docker para despliegues repetibles.',
		'about.area4.title': 'Calidad',
		'about.area4.body':
			'Reglas de negocio como funciones simples, tipos estrictos y pruebas automatizadas, para detectar regresiones antes de que las vean los usuarios.',
		'skills.title': 'Stack',
		'skills.intro': 'Las herramientas que uso en mis proyectos.',
		'skills.col1': 'Frontend',
		'skills.col2': 'Backend y datos',
		'skills.col3': 'Herramientas y entrega',
		'principles.title': 'Cómo trabajo',
		'principles.p1.title': 'Hecho para cambiar',
		'principles.p1.body':
			'Mantengo las reglas de negocio en funciones simples, separadas del framework, para que la siguiente persona pueda cambiarlas con seguridad.',
		'principles.p2.title': 'El rendimiento es una función',
		'principles.p2.body':
			'Defino límites para JavaScript, imágenes y fuentes al inicio del proyecto, no al final.',
		'principles.p3.title': 'Diseñar para el fallo',
		'principles.p3.body':
			'La reconexión, la validación y los mensajes de error claros van en la primera versión. Vikoma no arranca si la base de datos no aplica las claves foráneas.',
		'principles.quality.title': 'Cada cambio se verifica',
		'principles.quality.body':
			'Linting, tipos estrictos, pruebas unitarias y pruebas end-to-end revisan cada cambio.',
		'contact.title': 'Trabajemos juntos',
		'contact.intro':
			'Cuéntame sobre el puesto o el proyecto que tienes en mente.',
		'contact.email.label': 'Correo',
		'contact.copy': 'Copiar correo',
		'contact.copied': 'Copiado',
		'contact.form.name': 'Nombre',
		'contact.form.name.placeholder': 'Ejemplo: Ada Lovelace',
		'contact.form.email': 'Correo',
		'contact.form.email.placeholder': 'nombre@ejemplo.com',
		'contact.form.message': 'Mensaje',
		'contact.form.message.placeholder':
			'Ejemplo: un puesto full-stack en un equipo de producto',
		'contact.form.submit': 'Enviar mensaje',
		'contact.form.sending': 'Enviando mensaje',
		'contact.form.success': 'Mensaje enviado. Te responderé por correo.',
		'contact.form.error':
			'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme a jejorm8@gmail.com.',
		'contact.form.required': 'Completa este campo para enviar tu mensaje.',
		'contact.form.invalidEmail': 'Ingresa un correo como nombre@ejemplo.com.',
		'footer.top': 'Volver arriba',
		'footer.rights': 'Jeremy Orellana',
		'seo.title': 'Desarrollador Full-Stack | Portafolio Profesional',
		'seo.description':
			'Desarrollador full-stack en Ecuador. Construyo y publico productos web completos, entre ellos Vikoma, un SaaS multi-tenant en producción para barberías y salones.',
		'notfound.title': 'Página no encontrada',
		'notfound.body': 'Esta dirección no existe o ha cambiado.',
		'notfound.cta': 'Volver al inicio',
	},
} as const
