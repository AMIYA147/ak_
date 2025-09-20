import { Github, Linkedin, Twitter } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiReact
} from '@/components/icons/SkillIcons';

export const projects = [
  {
    title: 'Project Alpha',
    description: 'A brief description of Project Alpha, highlighting its purpose and the technologies used. It solves a real-world problem by doing X, Y, and Z.',
    liveLink: '#',
    githubLink: '#',
    image: 'project1',
    imageHint: 'abstract code',
  },
  {
    title: 'Project Beta',
    description: 'A brief description of Project Beta, highlighting its purpose and the technologies used. It solves a real-world problem by doing X, Y, and Z.',
    liveLink: '#',
    githubLink: '#',
    image: 'project2',
    imageHint: 'modern technology',
  },
  {
    title: 'Project Gamma',
    description: 'A brief description of Project Gamma, highlighting its purpose and the technologies used. It solves a real-world problem by doing X, Y, and Z.',
    liveLink: '#',
    githubLink: '#',
    image: 'project3',
    imageHint: 'team collaboration',
  },
];

export const skills = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
];

export const socialLinks = [
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
];

export const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
];
