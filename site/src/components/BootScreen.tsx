"use client";

import Image from "next/image";

export default function BootScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1a1d21] transition-opacity duration-500">
      {/* 背景グロー */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.12),transparent_60%)]" />

      <div className="relative flex flex-col items-center gap-8">
        {/* ESP32起動リング */}
        <div className="relative flex items-center justify-center">
          {/* 外側リング */}
          <div className="absolute h-44 w-44 rounded-full border border-pink-500/20" />

          {/* 回転リング */}
          <div className="h-40 w-40 animate-spin rounded-full border-[3px] border-transparent border-t-pink-400 border-r-sky-400" />

          {/* 内側リング */}
          <div className="absolute h-32 w-32 animate-pulse rounded-full border border-sky-400/20" />

          {/* ララアイコン */}
          <Image
            src="/icon.png"
            alt="nnzzm Loading"
            width={110}
            height={110}
            priority
            unoptimized
            className="rounded-full shadow-[0_0_35px_rgba(236,72,153,0.5)]"
          />
        </div>

        {/* タイトル */}
        <div className="text-center">
          <p className="text-xl font-semibold tracking-[0.35em] text-pink-300">
            ESP32 BOOTING...
          </p>

          <p className="mt-2 text-sm tracking-[0.25em] text-zinc-400">
            nnzzm.com | IoT × Web × AI
          </p>
        </div>

        {/* WS2812 LEDストリップ */}
        <div className="flex gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="h-3 w-3 rounded-full animate-led"
              style={{
                animationDelay: `${i * 0.12}s`,
                backgroundColor: i % 2 === 0 ? "#38bdf8" : "#f472b6",
                boxShadow:
                  i % 2 === 0
                    ? "0 0 12px #38bdf8"
                    : "0 0 12px #f472b6",
              }}
            />
          ))}
        </div>

        {/* シリアルログ風 */}
        <div className="rounded-xl border border-zinc-700/50 bg-black/40 px-4 py-3 font-mono text-xs text-green-400 shadow-lg backdrop-blur-sm">
          <p className="animate-pulse">[BOOT] Initializing ESP32...</p>
          <p className="animate-pulse delay-150">
            [WiFi] Connecting to nnzzm.com
          </p>
          <p className="animate-pulse delay-300">
            [OK] Loading Portfolio Assets...
          </p>
        </div>
      </div>
    </div>
  );
}