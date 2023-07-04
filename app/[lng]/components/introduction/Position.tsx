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
      <div className="font-caption col-span-1 col-start-10 row-span-1 text-right font-st font-light text-gray dark:text-beige">
        {greetingWord}
      </div>
      <div className="col-span-5 col-start-1 row-span-2 h-[145px] w-[522px] px-8 py-4">
        <div className="shrink grow basis-0 self-stretch font-jk text-head2 font-semibold text-orange dark:text-green">
          {position}
          <br />
          {department}
        </div>
      </div>
    </>
  );
}