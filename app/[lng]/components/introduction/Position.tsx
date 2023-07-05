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
      <div className="font-caption text-right font-st font-light text-gray dark:text-beige">{greetingWord}</div>
      <div className="h-full w-full px-8 py-4">
        <div className="shrink grow basis-0 self-stretch font-jk text-head2 font-semibold text-orange dark:text-green">
          {position}
          <br />
          {department}
        </div>
      </div>
    </>
  );
}
