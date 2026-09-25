export type Tool = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: "Available" | "Coming Soon";
  github?: string;
  blog?: string;
  youtube?: string;
};

export const tools: Tool[] = [
  {
    title: "AI Auto Blur",
    description: "AI画像を自動でぼかすデスクトップツール。",
    image: "/images/tools/ai-auto-blur.webp",
    tags: ["AI", "Electron", "Python"],
    status: "Available",
    github: "https://github.com/...",
    youtube: "https://github.com/...",
  },
  {
    title: "ESP32 Wi-Fi Starter",
    description: "Wi-Fi接続・再接続・設定保存のテンプレート。",
    image: "/images/tools/esp32-wifi-template.webp",
    tags: ["ESP32", "Arduino IDE"],
    status: "Available",
    github: "https://github.com/...",
    youtube: "https://github.com/...",
  },
  {
    title: "ESP32 OTA Template",
    description: "OTAアップデート対応テンプレート。",
    image: "/images/tools/esp32-ota-template.webp",
    tags: ["ESP32", "OTA"],
    status: "Coming Soon",
  },
];