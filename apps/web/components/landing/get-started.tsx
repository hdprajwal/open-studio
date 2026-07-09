import { CopyCommand } from './copy-command';

export function GetStarted() {
  return (
    <section id="install" className="relative">
      <div className="mx-auto max-w-[720px] px-5 sm:px-8 py-12 sm:py-16 lg:py-[88px]">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-[24px] sm:text-[30px] font-medium leading-[1.2]">
            Make your first frame in the next minute.
          </h2>

          <p className="max-w-[560px] text-[16px] leading-[1.5] text-[color:var(--color-body)]">
            One command, zero config. Your agent takes it from here.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <CopyCommand command="npx @open-frame/cli init" />
          </div>
        </div>
      </div>
    </section>
  );
}
