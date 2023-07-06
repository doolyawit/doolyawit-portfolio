'use client';

function Email() {
  return (
    <div
      className="flex h-full w-full cursor-pointer items-center justify-center font-jk text-6xl font-extrabold "
      onClick={() => {
        window.open('mailto:dew.doolyawit@gmail.com');
      }}
    >
      dew.doolyawit@gmail.com
    </div>
  );
}

export default Email;
