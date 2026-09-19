export const RESUME_PDF_URL =
	'https://docs.google.com/document/d/1L_7An3Fu_9-PUQZF-k5HJGZqDmK8HiA86VOLCsSp7bU/export?format=pdf';

export const VIDEO_ID = 't4O3pI8V49w';

export const profile = {
	name: 'Emiliano Bazaes',
	role: 'Software Engineer · AI Loops · QA',
	tagline: 'I stress-test agentic loops with evals and harness engineering.',
	email: 'luzdealba@gmail.com',
	whatsapp: 'https://wa.me/66902136742',
	linkedin: 'https://www.linkedin.com/in/emilianche/',
	github: 'https://github.com/luzdealba',
	instagram: 'https://instagram.com/emilianche',
	photo: '/emiliano.webp',
};

export const stats = [
	{ value: '500+', label: 'schools kept online' },
	{ value: '80+', label: 'courses & certificates' },
	{ value: '20+', label: 'years shipping' },
	{ value: '3×', label: 'founder / CTO' },
];

export type Project = {
	name: string;
	role: string;
	category: 'Ventures & Leadership' | 'Software Development' | 'Technical Writing';
	outcome: string;
	tech: string[];
	url?: string;
	linkLabel?: string;
	links?: { label: string; url: string }[];
	featured?: boolean;
	year?: string;
};

export const projects: Project[] = [
	{
		name: 'Harnix',
		role: 'Creator & Maintainer',
		category: 'Ventures & Leadership',
		outcome:
			'Turns messy repos into agent-ready ones — audits a codebase or org for AI readiness and returns actionable fixes.',
		tech: ['TypeScript', 'Node.js', 'Zod', 'Vitest', 'GitHub Actions'],
		url: 'https://github.com/anakotai/harnix',
		linkLabel: 'github.com/anakotai/harnix',
		featured: true,
		year: '2025',
	},
	{
		name: 'Anakot.AI',
		role: 'Co-Founder',
		category: 'Ventures & Leadership',
		outcome: 'Automates compliance workflows for businesses across Southeast Asia.',
		tech: ['Harness engineering', 'TypeScript', 'Node.js'],
		url: 'https://github.com/anakotai',
		linkLabel: 'github.com/anakotai',
		featured: true,
		year: '2025',
	},
	{
		name: 'EdTech Connect',
		role: 'CTO',
		category: 'Ventures & Leadership',
		outcome:
			'Architected end to end the platform behind a venture-backed higher-ed tech hub, serving paying enterprise customers.',
		tech: ['Vue.js', 'Vuetify', 'Algolia', 'Python', 'Django + DRF', 'MySQL', 'Azure', 'AWS', 'CrewAI'],
		url: 'https://edtechconnect.com/',
		linkLabel: 'edtechconnect.com',
		featured: true,
		year: '2020–2025',
	},
	{
		name: 'Dalo · Aksarapak',
		role: 'CTO / Owner',
		category: 'Ventures & Leadership',
		outcome: 'Shipped an AI-powered learning platform and mobile app used across Southeast Asia.',
		tech: ['Flutter', 'Dart', 'Azure', 'TypeScript', 'Node.js', 'Astro', 'Playwright', 'LLMs'],
		url: 'https://dalo.app/',
		linkLabel: 'dalo.app',
		featured: true,
		year: '2022–2025',
	},
	{
		name: 'Schooly.co.il',
		role: 'DevOps',
		category: 'Ventures & Leadership',
		outcome: 'Kept 500+ schools online with high-availability orchestration and auto-scaling.',
		tech: ['Rancher', 'Kubernetes', 'Docker', 'AWS', 'Nginx'],
		url: 'https://schooly.co.il/',
		linkLabel: 'schooly.co.il',
		featured: true,
		year: '2018',
	},
	{
		name: 'SitePoint',
		role: 'Author',
		category: 'Technical Writing',
		outcome: 'Wrote deep-dive engineering articles and books read by developers worldwide.',
		tech: ['Docker', 'DevOps', 'Cloud computing', 'Deep work'],
		url: 'https://www.sitepoint.com/author/luzdealba/',
		linkLabel: 'sitepoint.com/author/luzdealba',
		links: [
			{ label: 'articles', url: 'https://www.sitepoint.com/author/luzdealba/' },
			{ label: 'books', url: 'https://www.sitepoint.com/premium/search/?q=lucero' },
		],
		featured: true,
		year: '—',
	},
	{
		name: 'Organisation Development Tools Institute',
		role: 'Lead Developer',
		category: 'Ventures & Leadership',
		outcome: 'Implemented the tutoring and evaluation platform for the Irish think tank.',
		tech: ['Django', 'PostgreSQL', 'Allauth'],
	},
	{
		name: 'ActionPlanNow',
		role: 'Lead Developer',
		category: 'Ventures & Leadership',
		outcome: 'Built the task-assignment platform for the Texan startup.',
		tech: ['Django', 'PostgreSQL', 'Allauth'],
	},
	{
		name: '7 Espejos',
		role: 'Director & Founder (sold)',
		category: 'Ventures & Leadership',
		outcome: 'Founded and sold an Argentine software, web development, hosting, and Linux support company.',
		tech: ['Linux', 'Hosting'],
		url: 'http://7espejos.com',
	},
	{
		name: 'Sanke Solutions',
		role: 'CTO',
		category: 'Ventures & Leadership',
		outcome: 'Led web development, programming, and SEO for a British company.',
		tech: ['PHP', 'HTML', 'CSS', 'SEO'],
		url: 'https://www.sankesolutions.co.uk/',
	},
	{
		name: 'IRIS on MIRROR',
		role: 'Lead Developer',
		category: 'Ventures & Leadership',
		outcome: 'Delivered web, multimedia, and IT security work for an Argentine company.',
		tech: ['Web', 'Security'],
	},
	{
		name: 'Algorithmic Trading R&D',
		role: 'Researcher (NDA)',
		category: 'Software Development',
		outcome: 'Designed, parameterized, and backtested trading algorithms.',
		tech: ['Python', 'pandas', 'NumPy', 'Matplotlib'],
	},
	{
		name: 'Affiliate Marketing Back-End',
		role: 'Designer & Implementer',
		category: 'Software Development',
		outcome:
			'Built the back end for campaigns, banner rotation, cookie management, and segmentation.',
		tech: ['Linux', 'Apache', 'MySQL', 'PHP'],
	},
	{
		name: 'Telam SE Correspondence DB',
		role: 'Developer',
		category: 'Software Development',
		outcome:
			'Built the database and interface for the Argentinian government news agency, with ACLs, auditing, search, and reports.',
		tech: ['Linux', 'Apache', 'MySQL', 'PHP'],
	},
	{
		name: 'Greenpeace Argentina',
		role: 'Developer',
		category: 'Software Development',
		outcome:
			'Created the database and interface that let volunteers maintain Toxics Campaign reports from many sources.',
		tech: ['Linux', 'Apache', 'MySQL', 'PHP'],
	},
	{
		name: 'BUSCADOR-PROP.com.ar',
		role: 'Developer',
		category: 'Software Development',
		outcome: 'Built a real estate search engine grouping dozens of Argentine agencies with rich filters.',
		tech: ['Linux', 'Apache', 'MySQL', 'PHP'],
		url: 'https://www.buscadorprop.com.ar/',
	},
	{
		name: 'The Waston Saving Co. S.A.',
		role: 'Developer',
		category: 'Software Development',
		outcome: 'Integrated a public financial-services site with the in-company LAN system.',
		tech: ['Linux', 'Apache', 'MySQL', 'PHP'],
	},
	{
		name: 'Compose.io',
		role: 'Guest Author',
		category: 'Technical Writing',
		outcome: 'Wrote long-form PostgreSQL and Python pieces for the DBaaS company.',
		tech: ['PostgreSQL', 'Python', 'Full-text search'],
		url: 'https://web.archive.org/web/20230127172534/https://www.compose.com/articles/mastering-postgresql-tools-full-text-search-and-phrase-search/',
		linkLabel: 'archived article',
	},
	{
		name: 'DigitalOcean',
		role: 'Guest Author',
		category: 'Technical Writing',
		outcome: 'Wrote long-form tutorials about debugging and working with Docker effectively.',
		tech: ['Docker', 'Linux', 'debugging'],
		url: 'https://www.digitalocean.com/community/tutorials/how-to-debug-and-fix-common-docker-issues',
		linkLabel: 'DigitalOcean tutorials',
	},
];

export const featuredProjects = projects.filter((p) => p.featured);

const projectOrder = [
	'Harnix',
	'Anakot.AI',
	'EdTech Connect',
	'Dalo · Aksarapak',
	'Schooly.co.il',
	'SitePoint',
	'Compose.io',
	'DigitalOcean',
	'Algorithmic Trading R&D',
	'BUSCADOR-PROP.com.ar',
	'Affiliate Marketing Back-End',
	'7 Espejos',
	'Sanke Solutions',
	'Organisation Development Tools Institute',
	'ActionPlanNow',
	'IRIS on MIRROR',
	'Telam SE Correspondence DB',
	'Greenpeace Argentina',
	'The Waston Saving Co. S.A.',
];

export const orderedProjects = [...projects].sort(
	(a, b) => projectOrder.indexOf(a.name) - projectOrder.indexOf(b.name),
);

export type CertGroup = {
	title: string;
	blurb: string;
	count: string;
	docAnchor: string;
	items: { name: string; provider: string; url?: string }[];
};

export const certGroups: CertGroup[] = [
	{
		title: 'Applied AI & Agents',
		blurb: 'Building, evaluating, and securing agentic systems with frontier providers.',
		count: '23',
		docAnchor:
			'https://docs.google.com/document/d/1nSC5hrvoHY8MDT2mLuhidBZYBx6HPgY62gFsivW6JCQ/edit?tab=t.0#heading=h.9xndo7jyuyge',
		items: [
			{ name: 'Evaluating AI Agents', provider: 'Arize AI · DeepLearning.AI', url: 'https://learn.deeplearning.ai/accomplishments/a16e90eb-b395-41c3-b07c-b71ecc99051f' },
			{ name: 'MCP: Build Rich-Context AI Apps', provider: 'Anthropic · DeepLearning.AI', url: 'https://learn.deeplearning.ai/accomplishments/8ef2f7c4-9d4f-4509-907b-ddbc507686df' },
			{ name: 'Model Context Protocol: Advanced Topics', provider: 'Anthropic Academy', url: 'https://anthropic.skilljar.com/model-context-protocol-advanced-topics' },
			{ name: 'Building toward Computer Use', provider: 'Anthropic · DeepLearning.AI', url: 'https://learn.deeplearning.ai/accomplishments/0855c184-5738-48ba-8499-72ad890cfa33' },
			{ name: 'Reasoning with o1', provider: 'OpenAI · DeepLearning.AI', url: 'https://learn.deeplearning.ai/accomplishments/8d61a762-37c8-4f88-9bd5-9443f653e5b3' },
			{ name: 'Multi AI Agent Systems with crewAI', provider: 'CrewAI · DeepLearning.AI' },
			{ name: 'AI Fluency: Framework & Foundations', provider: 'Anthropic Academy', url: 'https://verify.skilljar.com/c/q759i3snuhco' },
			{ name: 'Agents and Workflows', provider: 'OpenAI Academy', url: 'https://academy.openai.com/home/certificate/u6gg6vwfps' },
			{ name: 'ACP: Agent Communication Protocol', provider: 'IBM Research BeeAI · DeepLearning.AI' },
			{ name: 'Building AI Browser Agents', provider: 'AGI Inc. · DeepLearning.AI' },
		],
	},
	{
		title: 'Data, Math & Computer Science',
		blurb: 'Foundations from Rice, Stanford, Caltech, Duke, UC Berkeley, and more.',
		count: '28',
		docAnchor:
			'https://docs.google.com/document/d/1nSC5hrvoHY8MDT2mLuhidBZYBx6HPgY62gFsivW6JCQ/edit?tab=t.0#heading=h.32pk68z304mh',
		items: [
			{ name: 'Machine Learning', provider: 'Stanford University' },
			{ name: 'Learning from Data', provider: 'California Institute of Technology', url: 'https://verify.edx.org/cert/8a498f4c3dc74aff9cf03498a47c21f0' },
			{ name: 'Data Analysis and Statistical Inference', provider: 'Duke University', url: 'https://coursera.org/verify/4PNFN9682C' },
			{ name: 'Intro to Statistics', provider: 'UC Berkeley', url: 'https://verify.edx.org/cert/f875e4077df64715ba5a5f4309dddeb1' },
			{ name: 'An Intro to Interactive Programming in Python', provider: 'Rice University', url: 'https://coursera.org/verify/P6A3YSGBD9' },
			{ name: 'In-Memory Data Management', provider: 'Hasso Plattner Institut' },
			{ name: 'Linear and Discrete Optimization', provider: 'EPFL' },
			{ name: 'Linear Algebra through CS Applications', provider: 'Brown University' },
		],
	},
	{
		title: 'Economics, Finance & Management',
		blurb: 'Wharton, Columbia, Yale, Bocconi, Michigan, MIT, and Stanford.',
		count: '19',
		docAnchor:
			'https://docs.google.com/document/d/1nSC5hrvoHY8MDT2mLuhidBZYBx6HPgY62gFsivW6JCQ/edit?tab=t.0#heading=h.71zthe4ex9if',
		items: [
			{ name: 'Financial Markets', provider: 'Yale University', url: 'https://coursera.org/verify/PSVHFUAWYZ' },
			{ name: 'Analyzing Global Trends', provider: 'Wharton School, Penn', url: 'https://coursera.org/verify/ZAE6S6D2M6' },
			{ name: 'Economics of Money & Banking I & II', provider: 'Barnard College, Columbia' },
			{ name: 'Financing and Investing in Infrastructure', provider: 'Università Bocconi' },
			{ name: 'Model Thinking', provider: 'University of Michigan', url: 'https://coursera.org/verify/ZGY37DJPXR' },
			{ name: 'Business and Impact Planning for Social Enterprises', provider: 'MIT' },
			{ name: 'Inspiring Leadership through Emotional Intelligence', provider: 'CWRU', url: 'https://coursera.org/verify/ZWPYQPCFZ4' },
			{ name: 'The DO School Start-Up Lab', provider: 'The DO School' },
		],
	},
];

export const beyond = [
	{
		title: 'Tango Chiang Mai',
		body: 'I organize the community and teach dance for free.',
		url: 'https://www.instagram.com/tangochangmai/',
		linkLabel: 'tangochangmai',
	},
	{
		title: 'Musician',
		body: 'I recorded an album, because the other half of my brain needed a turn.',
		url: 'https://luzdealba.bandcamp.com/',
		linkLabel: 'luzdealba.bandcamp.com',
	},
	{
		title: 'Biology roots',
		body: 'I studied biology before software — probably why I think in systems.',
	},
	{
		title: 'Documentary',
		body: 'A short film followed the tango community in Chiang Mai.',
		url: 'https://www.youtube.com/watch?v=Bh_Nh3k3BWI',
		linkLabel: 'watch on YouTube',
	},
];
