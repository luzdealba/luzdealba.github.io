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
			'Repos are messy, and AI agents waste whole sessions rediscovering that. Harnix checks what a codebase is missing and tells you what to fix first.',
		tech: ['TypeScript', 'Node.js', 'Zod', 'Vitest', 'GitHub Actions'],
		url: 'https://github.com/anakotai/harnix',
		linkLabel: 'github.com/anakotai/harnix',
		featured: true,
		year: '2026',
	},
	{
		name: 'Anakot.AI',
		role: 'Co-Founder',
		category: 'Ventures & Leadership',
		outcome:
			'Thai companies selling to the EU lose contracts to compliance stuff. We automated boring parts, and won the Thai Board of Investment endorsement.',
		tech: ['Harness engineering', 'TypeScript', 'Node.js'],
		url: 'https://demo.anakotai.com/',
		linkLabel: 'demo.anakotai.com',
		featured: true,
		year: '2025',
	},
	{
		name: 'EdTech Connect',
		role: 'CTO',
		category: 'Ventures & Leadership',
		outcome:
			'Owned the whole thing technically, database to deployment. Grew it to ~2k people, ~300 of them paying vendors, and an investment round.',
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
		outcome:
			'Language learners kept getting stuck with apps that need a connection. Ours works offline, and a few hundred people have learned thousands of words with it.',
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
		outcome: 'Kept 500+ schools online with auto-scaling and high availability. It was a one-person ops job.',
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
		outcome: 'Wrote deep-dive engineering articles and books that developers still come back to.',
		tech: ['Docker', 'DevOps', 'Cloud computing', 'Deep work'],
		url: 'https://www.sitepoint.com/author/luzdealba/',
		linkLabel: 'sitepoint.com/author/luzdealba',
		links: [
			{ label: 'articles', url: 'https://www.sitepoint.com/author/luzdealba/' },
			{ label: 'books', url: 'https://www.sitepoint.com/premium/search/?q=lucero' },
		],
		featured: true,
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
		outcome: 'Built the task-assignment platform for a legal company in Texas.',
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
		outcome: 'Ran web development, programming, and SEO for a British company, mostly e-commerce.',
		tech: ['PHP', 'HTML', 'CSS', 'JS', 'SEO'],
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
		outcome: 'Designed and built the back end that runs an ad network\'s campaigns, replacing a pile of manual steps.',
		tech: ['Linux', 'Apache', 'MySQL', 'PHP'],
		url: 'https://drive.google.com/file/d/0BykIuP0J6kLHZlN4SzlmdENRc0E/view?resourcekey=0-9swYpFz42Cy0n6JJd7jJzA',
		linkLabel: 'DB schema',
	},
	{
		name: 'Telam SE Correspondence DB',
		role: 'Developer',
		category: 'Software Development',
		outcome:
			'Built the database and interface for the Argentinian government news agency, so correspondence stopped being a pile of paper. Auditing, search, and reports.',
		tech: ['Linux', 'Apache', 'MySQL', 'PHP', 'ACLs'],
	},
	{
		name: 'Greenpeace Argentina',
		role: 'Developer',
		category: 'Software Development',
		outcome:
			'Built the intake DB that let volunteers keep Toxics Campaign reports from many sources in one place.',
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
		outcome:
			'Hooked a public financial-services site up to the in-company LAN, so people could check their own standing instead of phoning the branch.',
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
			{
				name: 'Machine Learning',
				provider: 'Stanford University',
				url: 'https://drive.google.com/file/d/0BykIuP0J6kLHQURsS2RVMDhFZEU/view?resourcekey=0-aMkKB5GeLra8d14nYHBEbg',
			},
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

export type PublicationTopic = 'AI/ML' | 'DevOps' | 'PostgreSQL' | 'Web Development';

export const publicationTopics: PublicationTopic[] = [
	'AI/ML',
	'DevOps',
	'PostgreSQL',
	'Web Development',
];

export type Publication = {
	title: string;
	url: string;
	date: string;
	year: string;
	/** YYYYMMDD, day 00 when the source gives only a month. */
	sort: number;
	venue: string;
	kind: 'Tutorial' | 'Article';
	topic: PublicationTopic;
	featured?: boolean;
	/** Homepage card title. The publications page keeps `title`. */
	homeTitle?: string;
	blurb?: string;
};

export const publications: Publication[] = [
	{
		title: 'Building a Customer Service Chatbot with GPT-3: A Step-by-Step Guide',
		url: 'https://www.sitepoint.com/premium/books/building-a-customer-service-chatbot-with-gpt-3-a-step-by-step-guide/',
		date: 'Dec 2022',
		year: '2022',
		sort: 20221200,
		venue: 'SitePoint',
		kind: 'Tutorial',
		topic: 'AI/ML',
	},
	{
		title: 'Building and Analyzing Recommender Systems with the Surprise Library',
		url: 'https://www.sitepoint.com/premium/books/building-and-analyzing-recommender-systems-with-the-surprise-library/',
		date: 'Dec 2022',
		year: '2022',
		sort: 20221200,
		venue: 'SitePoint',
		kind: 'Tutorial',
		topic: 'AI/ML',
		featured: true,
		homeTitle: 'Building and Analyzing Recommender Systems',
		blurb: 'A walk through building and scoring recommender systems with Surprise.',
	},
	{
		title: 'Three Approaches to Spam Filtering',
		url: 'https://www.sitepoint.com/premium/books/three-approaches-to-spam-filtering/',
		date: 'Nov 2021',
		year: '2021',
		sort: 20211100,
		venue: 'SitePoint',
		kind: 'Tutorial',
		topic: 'AI/ML',
	},
	{
		title: 'How to Debug and Fix Common Docker Issues',
		url: 'https://www.digitalocean.com/community/tutorials/how-to-debug-and-fix-common-docker-issues',
		date: 'Oct 21, 2016',
		year: '2016',
		sort: 20161021,
		venue: 'DigitalOcean',
		kind: 'Tutorial',
		topic: 'DevOps',
		featured: true,
		blurb: 'The DigitalOcean guide for the container that builds cleanly and then refuses to run.',
	},
	{
		title: 'Predicting Time Series Data',
		url: 'https://www.sitepoint.com/premium/books/predicting-time-series-data/',
		date: 'May 2021',
		year: '2021',
		sort: 20210500,
		venue: 'SitePoint',
		kind: 'Tutorial',
		topic: 'AI/ML',
	},
	{
		title: 'Using Data Science to Chart a Pandemic',
		url: 'https://www.sitepoint.com/premium/books/using-data-science-to-chart-a-pandemic/',
		date: 'May 2021',
		year: '2021',
		sort: 20210500,
		venue: 'SitePoint',
		kind: 'Tutorial',
		topic: 'AI/ML',
	},
	{
		title: 'How to Set Up a Reverse NGINX Proxy on Alibaba Cloud',
		url: 'https://www.sitepoint.com/how-to-set-up-a-reverse-nginx-proxy-on-alibaba-cloud/',
		date: 'Sep 26, 2018',
		year: '2018',
		sort: 20180926,
		venue: 'SitePoint',
		kind: 'Tutorial',
		topic: 'DevOps',
	},
	{
		title: 'Full-Text Search and Phrase Search',
		url: 'https://web.archive.org/web/20171107031702/https://compose.com/articles/mastering-postgresql-tools-full-text-search-and-phrase-search/',
		date: 'Jul 25, 2017',
		year: '2017',
		sort: 20170725,
		venue: 'Compose.io',
		kind: 'Tutorial',
		topic: 'PostgreSQL',
		featured: true,
		blurb: 'How to make PostgreSQL match phrases, not just a bag of words.',
	},
	{
		title: 'Filters and Foreign Data Wrappers',
		url: 'https://web.archive.org/web/20220118195332/https://compose.com/articles/mastering-postgresql-tools-filters-and-foreign-data-wrappers/',
		date: 'Jul 7, 2017',
		year: '2017',
		sort: 20170707,
		venue: 'Compose.io',
		kind: 'Tutorial',
		topic: 'PostgreSQL',
	},
	{
		title: 'Faster Operations with the JSONB Data Type',
		url: 'https://web.archive.org/web/20230521160456/https://compose.com/articles/faster-operations-with-the-jsonb-data-type-in-postgresql/',
		date: 'Mar 20, 2017',
		year: '2017',
		sort: 20170320,
		venue: 'Compose.io',
		kind: 'Tutorial',
		topic: 'PostgreSQL',
	},
	{
		title: 'Store Result Sets with Materialized Views',
		url: 'https://web.archive.org/web/20171016112718/https://compose.com/articles/store-result-sets-with-materialized-views-in-postgresql/',
		date: 'Jan 4, 2017',
		year: '2017',
		sort: 20170104,
		venue: 'Compose.io',
		kind: 'Tutorial',
		topic: 'PostgreSQL',
	},
	{
		title: 'Building OHLC Data in PostgreSQL',
		url: 'https://web.archive.org/web/20190723011900/https://compose.com/articles/building-ohlc-data-in-postgresql/',
		date: 'Nov 30, 2016',
		year: '2016',
		sort: 20161130,
		venue: 'Compose.io',
		kind: 'Tutorial',
		topic: 'PostgreSQL',
	},
	{
		title: "Formatted SQL in Python with Psycopg's Mogrify",
		url: 'https://web.archive.org/web/20190822221612/https://compose.com/articles/formatted-sql-in-python-with-psycopgs-mogrify/',
		date: 'Oct 10, 2016',
		year: '2016',
		sort: 20161010,
		venue: 'Compose.io',
		kind: 'Tutorial',
		topic: 'PostgreSQL',
	},
	{
		title: 'Faster Performance with Unlogged Tables',
		url: 'https://web.archive.org/web/20170724234315/https://compose.com/articles/faster-performance-with-unlogged-tables-in-postgresql/',
		date: 'Sep 12, 2016',
		year: '2016',
		sort: 20160912,
		venue: 'Compose.io',
		kind: 'Tutorial',
		topic: 'PostgreSQL',
	},
	{
		title: 'Best Backend as a Service (BaaS) in 2024',
		url: 'https://www.sitepoint.com/best-backend-as-a-service-baas-in-2023/',
		date: 'Aug 10, 2023',
		year: '2023',
		sort: 20230810,
		venue: 'SitePoint',
		kind: 'Article',
		topic: 'Web Development',
	},
	{
		title: '10 Best Sorting Algorithms Explained',
		url: 'https://www.sitepoint.com/best-sorting-algorithms/',
		date: 'Apr 13, 2023',
		year: '2023',
		sort: 20230413,
		venue: 'SitePoint',
		kind: 'Article',
		topic: 'Web Development',
	},
	{
		title: "What's the Difference between Flutter and React Native?",
		url: 'https://www.sitepoint.com/flutter-vs-react-native/',
		date: 'Mar 23, 2023',
		year: '2023',
		sort: 20230323,
		venue: 'SitePoint',
		kind: 'Article',
		topic: 'Web Development',
	},
	{
		title: 'The Most Effective Programming Languages for Ethical Hacking',
		url: 'https://www.sitepoint.com/best-programming-language-for-hacking/',
		date: 'Nov 11, 2022',
		year: '2022',
		sort: 20221111,
		venue: 'SitePoint',
		kind: 'Article',
		topic: 'Web Development',
	},
	{
		title: 'What Is Python and What Is It Used For?',
		url: 'https://www.sitepoint.com/what-is-python/',
		date: 'Dec 13, 2022',
		year: '2022',
		sort: 20221213,
		venue: 'SitePoint',
		kind: 'Article',
		topic: 'AI/ML',
	},
	{
		title: 'What Is Docker?',
		url: 'https://www.sitepoint.com/what-is-docker/',
		date: 'Dec 9, 2022',
		year: '2022',
		sort: 20221209,
		venue: 'SitePoint',
		kind: 'Article',
		topic: 'DevOps',
	},
	{
		title: 'Cypress Testing: A Guide to Running Web Application Tests',
		url: 'https://www.sitepoint.com/cypress-testing/',
		date: 'Aug 30, 2022',
		year: '2022',
		sort: 20220830,
		venue: 'SitePoint',
		kind: 'Article',
		topic: 'Web Development',
	},
	{
		title: 'A Side-by-Side Comparison of AWS, Google Cloud and Azure',
		url: 'https://www.sitepoint.com/a-side-by-side-comparison-of-aws-google-cloud-and-azure/',
		date: 'Apr 20, 2021',
		year: '2021',
		sort: 20210420,
		venue: 'SitePoint',
		kind: 'Article',
		topic: 'DevOps',
	},
	{
		title: 'How to Host Static Sites for Free with an Automated Pipeline',
		url: 'https://www.sitepoint.com/how-to-host-static-sites-for-free-with-an-automated-pipeline/',
		date: 'Jul 28, 2020',
		year: '2020',
		sort: 20200728,
		venue: 'SitePoint',
		kind: 'Article',
		topic: 'Web Development',
	},
	{
		title: 'Introduction to the Jamstack: Build Secure, High-Performance Sites',
		url: 'https://www.sitepoint.com/learn-jamstack/',
		date: 'Jul 20, 2020',
		year: '2020',
		sort: 20200720,
		venue: 'SitePoint',
		kind: 'Article',
		topic: 'Web Development',
	},
	{
		title: 'How to Migrate from WordPress to a Static Site Generator',
		url: 'https://www.sitepoint.com/migrate-wordpress-static-site-generator/',
		date: 'Aug 6, 2020',
		year: '2020',
		sort: 20200806,
		venue: 'SitePoint',
		kind: 'Article',
		topic: 'Web Development',
	},
	{
		title: 'How to Properly Organize Files in Your Codebase & Avoid Mayhem',
		url: 'https://www.sitepoint.com/organize-project-files/',
		date: 'Feb 20, 2020',
		year: '2020',
		sort: 20200220,
		venue: 'SitePoint',
		kind: 'Article',
		topic: 'Web Development',
	},
	{
		title: 'Commit Changes to Your Codebase the Right Way',
		url: 'https://www.sitepoint.com/committing-changes-right-way/',
		date: 'Feb 10, 2020',
		year: '2020',
		sort: 20200210,
		venue: 'SitePoint',
		kind: 'Article',
		topic: 'Web Development',
	},
	{
		title: 'How to Prototype a Web App with Django and Vue.js',
		url: 'https://www.sitepoint.com/web-app-prototype-django-vue/',
		date: 'May 11, 2020',
		year: '2020',
		sort: 20200511,
		venue: 'SitePoint',
		kind: 'Article',
		topic: 'Web Development',
	},
	{
		title: 'Understanding Docker, Containers and Safer Software Delivery',
		url: 'https://www.sitepoint.com/docker-containers-software-delivery/',
		date: 'Jul 29, 2016',
		year: '2016',
		sort: 20160729,
		venue: 'SitePoint',
		kind: 'Article',
		topic: 'DevOps',
	},
	{
		title: 'DevOps by Example: Tools, Pros and Cons of a DevOps Culture',
		url: 'https://www.sitepoint.com/devops-by-example-tools-pros-and-cons-of-a-devops-culture/',
		date: 'Sep 27, 2016',
		year: '2016',
		sort: 20160927,
		venue: 'SitePoint',
		kind: 'Article',
		topic: 'DevOps',
	},
	{
		title: 'Cloud Storage: Choosing Between Dropbox, Drive, S3 and Others',
		url: 'https://www.sitepoint.com/cloud-storage-for-you-and-your-business/',
		date: 'Oct 12, 2016',
		year: '2016',
		sort: 20161012,
		venue: 'SitePoint',
		kind: 'Article',
		topic: 'DevOps',
	},
	{
		title: 'How to Build an Image with the Dockerfile',
		url: 'https://www.sitepoint.com/how-to-build-an-image-with-the-dockerfile/',
		date: 'Nov 16, 2016',
		year: '2016',
		sort: 20161116,
		venue: 'SitePoint',
		kind: 'Article',
		topic: 'DevOps',
	},
	{
		title: 'Data Serialization Comparison: JSON, YAML, BSON, MessagePack',
		url: 'https://www.sitepoint.com/data-serialization-comparison-json-yaml-bson-messagepack/',
		date: 'Nov 8, 2016',
		year: '2016',
		sort: 20161108,
		venue: 'SitePoint',
		kind: 'Article',
		topic: 'Web Development',
	},
];

const featuredOrder = [
	'Full-Text Search and Phrase Search',
	'How to Debug and Fix Common Docker Issues',
	'Building and Analyzing Recommender Systems with the Surprise Library',
];

export const featuredPublications = publications
	.filter((p) => p.featured)
	.sort((a, b) => featuredOrder.indexOf(a.title) - featuredOrder.indexOf(b.title));

export const publicationsByDate = publications
	.map((p, index) => ({ p, index }))
	.sort((a, b) => b.p.sort - a.p.sort || a.index - b.index)
	.map(({ p }) => p);

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
		body: 'I studied biology before software, which is probably why I think in systems.',
	},
	{
		title: 'Documentary',
		body: 'A short film followed the tango community in Chiang Mai.',
		url: 'https://www.youtube.com/watch?v=Bh_Nh3k3BWI',
		linkLabel: 'watch on YouTube',
	},
];
