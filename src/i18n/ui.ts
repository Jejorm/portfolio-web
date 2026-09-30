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
		'nav.principles': 'How I work',
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
		'hero.cta.contact': 'Get in touch',
		'hero.cta.projects': 'See projects',
		'hero.portrait.alt':
			'Portrait of Jeremy Orellana wearing glasses and a dark jacket',
		'work.title': 'Selected work',
		'work.intro':
			'Live projects. Each one lists the problems I faced and how I solved them.',
		'work.index': 'Project index',
		'work.challenges': 'Problems',
		'work.solutions': 'How I solved them',
		'work.live': 'Live site',
		'work.stack': 'Built with',
		'about.title': 'About',
		'about.statement':
			'I am Jeremy, a full-stack developer in Ecuador, working remotely. I built Vikoma on my own, from the database schema to the interface.',
		'about.body':
			'I prefer projects where I own a feature end to end: the data model, the business rules and the interface.',
		'about.fact.base.label': 'Base',
		'about.fact.base.value': 'Ecuador, remote',
		'about.fact.focus.label': 'Focus',
		'about.fact.focus.value': 'Full-stack web apps',
		'about.fact.work.label': 'Available for',
		'about.fact.work.value': 'Full-time and freelance',
		'about.area1.title': 'Real-time systems',
		'about.area1.body':
			'WebSocket servers and clients that share one state and reconnect after a network drop.',
		'about.area2.title': 'Accessible frontend',
		'about.area2.body':
			'React and Next.js interfaces that work with a keyboard and a screen reader.',
		'about.area3.title': 'Backend and data',
		'about.area3.body':
			'Node.js and Bun services, SQL databases with data isolated per business, and Docker deployments.',
		'about.area4.title': 'Integrations',
		'about.area4.body':
			'Third-party APIs such as WhatsApp Cloud API, OAuth sign-in and Supabase Auth.',
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
			'Pages render on the server first and send less JavaScript to the browser, as in Luxe Estate.',
		'principles.p3.title': 'Plan for failure',
		'principles.p3.body':
			'Reconnection, validation and clear error messages go in the first version. Vikoma refuses to boot if the database does not enforce foreign keys.',
		'principles.quality.title': 'Automated checks',
		'principles.quality.body':
			'Vikoma uses ESLint, strict TypeScript and Vitest tests. This site uses Biome, strict TypeScript and Playwright end-to-end tests.',
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
		'seo.title': 'Jeremy Orellana | Full-Stack Developer',
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
		'nav.principles': 'Cómo trabajo',
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
			'Desarrollador full-stack. Construyo y lanzo productos completos, como Vikoma, un SaaS que ya está en producción.',
		'hero.cta.contact': 'Escríbeme',
		'hero.cta.projects': 'Ver proyectos',
		'hero.portrait.alt':
			'Retrato de Jeremy Orellana con gafas y chaqueta oscura',
		'work.title': 'Proyectos seleccionados',
		'work.intro':
			'Proyectos en producción. Cada uno muestra los problemas que enfrenté y cómo los resolví.',
		'work.index': 'Índice de proyectos',
		'work.challenges': 'Problemas',
		'work.solutions': 'Cómo los resolví',
		'work.live': 'Ver sitio',
		'work.stack': 'Construido con',
		'about.title': 'Sobre mí',
		'about.statement':
			'Soy Jeremy, desarrollador full-stack en Ecuador, y trabajo en remoto. Construí Vikoma por mi cuenta, del esquema de base de datos a la interfaz.',
		'about.body':
			'Prefiero proyectos donde me encargo de una funcionalidad de punta a punta: el modelo de datos, las reglas de negocio y la interfaz.',
		'about.fact.base.label': 'Base',
		'about.fact.base.value': 'Ecuador, remoto',
		'about.fact.focus.label': 'Enfoque',
		'about.fact.focus.value': 'Aplicaciones web full-stack',
		'about.fact.work.label': 'Disponible para',
		'about.fact.work.value': 'Tiempo completo y freelance',
		'about.area1.title': 'Sistemas en tiempo real',
		'about.area1.body':
			'Servidores y clientes WebSocket que comparten un mismo estado y se reconectan tras un corte de red.',
		'about.area2.title': 'Frontend accesible',
		'about.area2.body':
			'Interfaces en React y Next.js que funcionan con teclado y lector de pantalla.',
		'about.area3.title': 'Backend y datos',
		'about.area3.body':
			'Servicios en Node.js y Bun, bases de datos SQL con datos aislados por negocio y despliegues con Docker.',
		'about.area4.title': 'Integraciones',
		'about.area4.body':
			'APIs de terceros como WhatsApp Cloud API, inicio de sesión con OAuth y Supabase Auth.',
		'skills.title': 'Stack',
		'skills.intro': 'Las herramientas que uso en mis proyectos.',
		'skills.col1': 'Frontend',
		'skills.col2': 'Backend y datos',
		'skills.col3': 'Herramientas y entrega',
		'principles.title': 'Cómo trabajo',
		'principles.p1.title': 'Hecho para cambiar',
		'principles.p1.body':
			'Mantengo las reglas de negocio en funciones simples, separadas del framework, para que la siguiente persona pueda cambiarlas con seguridad.',
		'principles.p2.title': 'El rendimiento es parte del producto',
		'principles.p2.body':
			'Las páginas se renderizan primero en el servidor y envían menos JavaScript al navegador, como en Luxe Estate.',
		'principles.p3.title': 'Diseñar para el fallo',
		'principles.p3.body':
			'La reconexión, la validación y los mensajes de error claros van en la primera versión. Vikoma no arranca si la base de datos no aplica las claves foráneas.',
		'principles.quality.title': 'Verificación automática',
		'principles.quality.body':
			'Vikoma usa ESLint, TypeScript estricto y pruebas con Vitest. Este sitio usa Biome, TypeScript estricto y pruebas end-to-end con Playwright.',
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
		'seo.title': 'Jeremy Orellana | Desarrollador Full-Stack',
		'seo.description':
			'Desarrollador full-stack en Ecuador. Construyo y lanzo productos web completos, entre ellos Vikoma, un SaaS multi-tenant en producción para barberías y salones.',
		'notfound.title': 'Página no encontrada',
		'notfound.body': 'Esta dirección no existe o ha cambiado.',
		'notfound.cta': 'Volver al inicio',
	},
} as const
