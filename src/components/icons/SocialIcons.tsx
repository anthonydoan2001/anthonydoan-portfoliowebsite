import { memo } from "react";

interface IconProps {
  className?: string;
  ariaHidden?: boolean;
}

export const EmailIcon = memo(({ className = "w-5 h-5", ariaHidden = true }: IconProps) => (
  <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden={ariaHidden} fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
));

EmailIcon.displayName = "EmailIcon";

export const GitHubIcon = memo(({ className = "w-5 h-5", ariaHidden = true }: IconProps) => (
  <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden={ariaHidden} fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
));

GitHubIcon.displayName = "GitHubIcon";

export const LinkedInIcon = memo(({ className = "w-5 h-5", ariaHidden = true }: IconProps) => (
  <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden={ariaHidden} fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z"/>
  </svg>
));

LinkedInIcon.displayName = "LinkedInIcon";

export const MapPinIcon = memo(({ className = "w-5 h-5", ariaHidden = true }: IconProps) => (
  <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden={ariaHidden} fill="currentColor">
    <path d="M12 1.5C7.86 1.5 4.5 4.86 4.5 9c0 5.5 7.5 13.5 7.5 13.5s7.5-8 7.5-13.5c0-4.14-3.36-7.5-7.5-7.5zm0 10.5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
    <circle cx="12" cy="9" r="2.5" fill="white"/>
  </svg>
));

MapPinIcon.displayName = "MapPinIcon";

export const PhoneIcon = memo(({ className = "w-5 h-5", ariaHidden = true }: IconProps) => (
  <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden={ariaHidden} fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
));

PhoneIcon.displayName = "PhoneIcon";
