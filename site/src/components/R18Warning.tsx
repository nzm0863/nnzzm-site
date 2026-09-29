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
      <div className="w-full max-w-lg rounded-2xl border border-red-500/30 bg-zinc-900 p-8 text-center">
        <p className="mb-3 text-sm font-bold tracking-widest text-red-400">
          R18 CONTENT
        </p>

        <h1 className="mb-6 text-3xl font-bold text-white">
          閲覧注意
        </h1>

        <p className="mb-3 text-zinc-300">
          このページには成人向け表現を含む作品があります。
        </p>

        <p className="mb-8 text-sm leading-6 text-zinc-500">
          18歳未満の方は閲覧しないでください。
          <br />
          内容をご理解のうえ、閲覧してください。
        </p>

        <p className="mb-4 text-xs text-zinc-600">
          accepted: {String(accepted)}
        </p>

        <button
          type="button"
          onClick={() => {
            console.log("閲覧ボタン clicked");
            setAccepted(true);
          }}
          className="rounded-lg bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-400"
        >
          閲覧する
        </button>
      </div>
    </main>
  );
}