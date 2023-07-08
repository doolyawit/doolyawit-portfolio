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
      <div className="mt-[70px] h-full w-full px-8 pt-4">
        <div className="font-jk text-head2 font-semibold text-orange selection:bg-gray dark:text-green dark:selection:bg-beige">
          {position}
          <br />
          {department}
        </div>
      </div>
    </>
  );
}
