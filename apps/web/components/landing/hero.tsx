import { CopyCommand } from './copy-command';
import { HeroDocsLink } from './hero-docs-link';

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 pt-16 sm:pt-24 lg:pt-28 pb-12 sm:pb-[88px]">
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="text-[28px] sm:text-[36px] font-medium leading-[1.11]">
            The content studio built for agents.
          </h1>

          <p className="max-w-xl text-[16px] leading-[1.5] text-[color:var(--color-body)]">
            Slides, LinkedIn carousels, stories, thumbnails, and OG images from one workspace. Every
            page is a React component on a canvas sized for its format. You describe it, your agent
            writes it.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-4">
            <CopyCommand command="npx @open-frame/cli init" />
            <HeroDocsLink />
          </div>
        </div>
      </div>
    </section>
  );
}
