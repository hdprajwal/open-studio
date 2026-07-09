'use client';

import posthog from 'posthog-js';

export function HeroDocsLink() {
  return (
    <a
      href="/docs"
      onClick={() => posthog.capture('docs_link_clicked', { location: 'hero' })}
      className="inline-flex items-center h-12 rounded-[8px] bg-[color:var(--color-primary)] px-6 text-[14px] font-medium text-[color:var(--color-on-primary)] hover:bg-[color:var(--color-ink-deep)] transition-colors"
    >
      Read the docs
    </a>
  );
}
