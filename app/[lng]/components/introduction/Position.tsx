export default function Position({
  greetingWord,
  position,
  department,
}: {
  greetingWord: string;
  position: string;
  department: string;
}) {
  return (
    <>
      <div className="font-caption text-right font-st font-light text-gray dark:text-beige sm:text-xl lg:text-2xl">
        {greetingWord}
      </div>
      <div className="mt-12 h-full w-full xl:mt-[70px] xl:px-8 xl:pt-4">
        <div className="font-jk text-xl font-semibold text-orange selection:!bg-gray dark:text-green  dark:selection:!bg-beige sm:text-2xl lg:text-3xl xl:text-head2">
          {position + ' '}
          <br className="hidden xl:block" />
          {department}
        </div>
      </div>
    </>
  );
}
