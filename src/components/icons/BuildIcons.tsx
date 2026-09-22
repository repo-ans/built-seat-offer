type IconProps = { className?: string };

const base = "h-7 w-7";

export function PipelineIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <rect x="4" y="6" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="19" y="17" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 10.5H16C17.1046 10.5 18 11.3954 18 12.5V17" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function FlowNodesIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="6" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 9.5L21 15M9 22.5L21 17" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function BranchIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M16 4L26 16L16 28L6 16L16 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M16 4V28M6 16H26" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

export function BoltIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M17.5 4L8 18H15L14 28L24 13H17L17.5 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BrowserIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 12H28" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="9" r="0.75" fill="currentColor" />
      <circle cx="11" cy="9" r="0.75" fill="currentColor" />
    </svg>
  );
}

export function ChatIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M5 8C5 6.89543 5.89543 6 7 6H25C26.1046 6 27 6.89543 27 8V19C27 20.1046 26.1046 21 25 21H14L8 26V21H7C5.89543 21 5 20.1046 5 19V8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M20.5 3.5L21.3 5.7L23.5 6.5L21.3 7.3L20.5 9.5L19.7 7.3L17.5 6.5L19.7 5.7L20.5 3.5Z" fill="currentColor" />
    </svg>
  );
}

export function HeadsetIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M6 17V15C6 9.47715 10.4772 5 16 5C21.5228 5 26 9.47715 26 15V17"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect x="4" y="16" width="5" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="23" y="16" width="5" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M23 24V25C23 26.6569 21.6569 28 20 28H17" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function PlugIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M12 4V11M20 4V11" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 11H24V15C24 19.4183 20.4183 23 16 23C11.5817 23 8 19.4183 8 15V11Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M16 23V28" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
