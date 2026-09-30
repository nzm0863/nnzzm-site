"use client";

import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function R18Warning({ children }: Props) {
  const [accepted, setAccepted] = useState(false);
  useEffect(() => {
    console.log("R18Warning mounted");

    return () => {
      console.log("R18Warning unmounted");
    };
  }, []);


  console.log("accepted:", accepted);

  if (accepted) {
    return <>{children}</>;
  }



  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="w-full max-w-lg rounded-2xl border border-red-400/20 bg-zinc-900/80 p-8 text-center shadow-lg">
        <p className="mb-3 text-sm font-medium tracking-widest text-red-300">
          R18 CONTENT
        </p>

        <h1 className="mb-6 text-3xl font-serif text-zinc-100">
          閲覧について
        </h1>

        <p className="mb-3 text-zinc-300">
          このページには成人向け表現を含む作品があります。
        </p>

        <p className="mb-8 text-sm leading-6 text-zinc-500">
          18歳未満の方は閲覧をご遠慮ください。
          <br />
          内容をご理解のうえ、閲覧してください。
        </p>

        <button
          type="button"
          onClick={() => {
            setAccepted(true);
          }}
          className="cursor-pointer rounded-xl border border-red-400/40 px-6 py-3 font-medium text-red-300 transition hover:border-red-300 hover:bg-red-400/10 hover:text-red-200"
        >
          閲覧する →
        </button>
      </div>
    </main>
  );
}