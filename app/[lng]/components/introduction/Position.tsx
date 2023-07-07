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
      <div className="font-caption text-right font-st font-light text-gray selection:bg-green dark:text-beige dark:selection:bg-orange">
        {greetingWord}
      </div>
      <div className="h-full w-full px-8 py-4">
        <div className="shrink grow basis-0 self-stretch font-jk text-head2 font-semibold text-orange selection:bg-gray dark:text-green dark:selection:bg-beige">
          {position}
          <br />
          {department}
        </div>
      </div>
    </>
  );
}
