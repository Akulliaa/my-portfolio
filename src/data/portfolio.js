/**
 * Structured, language-independent portfolio data.
 *
 * Only non-translatable values live here (dates, URLs, images, technology
 * names). Every visible sentence is stored in `src/locales/*.json` and looked
 * up through the `i18nKey` of each entry.
 */

import pianoImg from '../assets/piano.png'
import atimImg from '../assets/atim.png'
import holoreedImg from '../assets/holoreed.png'

export const PROFILE = {
  name: 'Lou Fugier',
  email: 'fugierlou@gmail.com',
  phone: '+33 7 82 67 32 72',
  phoneHref: '+33782673272',
  location: 'Villard-de-Lans, France',
  github: 'https://github.com/Akulliaa',
  githubLabel: 'Akulliaa',
  linkedin: 'https://www.linkedin.com/in/lou-fugier-828b8a268/',
  linkedinLabel: 'lou-fugier',
  website: 'https://akulliaa.github.io/my-portfolio/',
}

/** Professional experience — internships and jobs, newest first. */
export const EXPERIENCES = [
  {
    id: 'reekon',
    start: '2025-09',
    end: '2025-12',
    tech: [
      'Python',
      'Svelte',
      'Open WebUI',
      'LLM APIs',
      'SQLite',
      'Docker',
      'AWS',
      'Headscale',
      'Linux',
    ],
  },
  {
    id: 'atim',
    start: '2023-06',
    end: '2023-09',
    tech: ['JavaScript', 'Node.js', 'C++', 'Qt', 'MySQL', 'XlsxPopulate', 'Git'],
  },
]

/**
 * Projects, most significant first.
 * `context` marks work produced inside a professional experience so the
 * Projects and Experience sections do not read as duplicates.
 */
export const PROJECTS = [
  {
    id: 'holoreed',
    image: holoreedImg,
    link: 'https://github.com/Akulliaa/HoloReed',
    linkType: 'code',
    award: true,
    tech: ['Python', 'REST API', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    id: 'atim',
    image: atimImg,
    link: 'https://www.atim.com/acw-battery-life/',
    linkType: 'site',
    context: 'atim',
    tech: ['JavaScript', 'Node.js', 'HTML5', 'CSS3'],
  },
  {
    id: 'piano',
    image: pianoImg,
    link: 'https://github.com/Akulliaa/Piano-Roll-App',
    linkType: 'code',
    tech: ['Python', 'MIDI'],
  },
]

/**
 * Skills grouped by role in the profile rather than listed flat.
 * `emphasis` drives the visual hierarchy: primary groups are shown first and
 * larger, `secondary` ones are rendered in a quieter style.
 */
export const SKILL_GROUPS = [
  {
    id: 'core',
    emphasis: 'primary',
    items: ['Python', 'JavaScript', 'TypeScript', 'Git', 'Linux'],
  },
  {
    id: 'backend',
    emphasis: 'primary',
    items: ['Node.js', 'NestJS', 'FastAPI', 'Django', 'REST APIs'],
  },
  {
    id: 'frontend',
    emphasis: 'primary',
    items: ['React', 'Next.js', 'Svelte', 'HTML5', 'CSS3', 'Sass'],
  },
  {
    id: 'databases',
    emphasis: 'primary',
    items: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Redis'],
  },
  {
    id: 'cloud',
    emphasis: 'primary',
    items: ['AWS', 'Docker', 'Docker Compose', 'Kubernetes', 'Azure', 'GCP'],
  },
  {
    id: 'ai',
    emphasis: 'primary',
    items: ['LLM integration', 'Open WebUI', 'Model APIs', 'Prompting', 'RAG'],
  },
  {
    id: 'other',
    emphasis: 'secondary',
    items: ['C++', 'Qt', 'C#', 'Java', 'PHP', 'Bash', 'PowerShell', 'Active Directory / LDAP'],
  },
]

/** Education, newest first. */
export const EDUCATION = [
  { id: 'esigelec', start: '2021', end: '2025' },
  { id: 'cpge', start: '2019', end: '2021' },
]

/** Spoken languages. Levels are stored as i18n keys, not as ratings. */
export const LANGUAGES = ['french', 'english']
