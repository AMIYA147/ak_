import type { ComponentProps } from 'react';

const IconWrapper = (props: ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props} />
);

export const SiReact = (props: ComponentProps<'svg'>) => (
  <IconWrapper {...props} strokeWidth="1.5" stroke="currentColor" fill="none">
    <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
  </IconWrapper>
);

export const SiNextdotjs = (props: ComponentProps<'svg'>) => (
  <IconWrapper {...props}>
    <path d="M9.75 15.25L12 12L14.25 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M5.25 4.5L12 19.5L18.75 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
  </IconWrapper>
);

export const SiTypescript = (props: ComponentProps<'svg'>) => (
  <IconWrapper {...props} stroke="currentColor" strokeWidth="1.5" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M12 17V7m-4 0h8" />
  </IconWrapper>
);

export const SiJavascript = (props: ComponentProps<'svg'>) => (
  <IconWrapper {...props} stroke="currentColor" strokeWidth="1.5" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M16 17a3 3 0 00-3-3h-1v3a3 3 0 003 3z" />
    <path d="M11 17a3 3 0 00-3-3H7v3a3 3 0 003 3z" />
  </IconWrapper>
);

export const SiNodedotjs = (props: ComponentProps<'svg'>) => (
  <IconWrapper {...props} stroke="currentColor" strokeWidth="1.5" fill="none">
    <path d="M12 2l-9 5v10l9 5 9-5V7L12 2z" />
    <path d="M12 2v7l-5 3m5-3l5 3M12 22v-8l-5-3m5 3l5-3" />
  </IconWrapper>
);

export const SiTailwindcss = (props: ComponentProps<'svg'>) => (
  <IconWrapper {...props} stroke="currentColor" strokeWidth="1.5" fill="none">
    <path d="M12 12c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 0c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" transform="scale(0.75) translate(4, 4)" />
  </IconWrapper>
);

export const SiFirebase = (props: ComponentProps<'svg'>) => (
  <IconWrapper {...props} stroke="currentColor" strokeWidth="1.5" fill="none">
    <path d="M4.5 18.5l7.5-14 7.5 14-3-5.5-4.5 2.5-4.5-2.5z" />
    <path d="M12 15l-4.5 3.5h9z" />
  </IconWrapper>
);

export const SiHtml5 = (props: ComponentProps<'svg'>) => (
  <IconWrapper {...props} stroke="currentColor" strokeWidth="1.5" fill="none">
    <path d="M4 3l1.8 18L12 22l6.2-2L20 3z" />
    <path d="M8.5 7h7L15 12H8l.5 4.5L12 17.5l3.5-1L16 12" />
  </IconWrapper>
);

export const SiCss3 = (props: ComponentProps<'svg'>) => (
  <IconWrapper {...props} stroke="currentColor" strokeWidth="1.5" fill="none">
    <path d="M4 3l1.8 18L12 22l6.2-2L20 3z" />
    <path d="M8.5 7h7l-.5 5H8l.5 4.5L12 17.5l3.5-1L16 12" />
  </IconWrapper>
);
