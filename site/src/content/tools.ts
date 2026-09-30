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
    description: "AIで画像を自動でぼかすデスクトップツール。",
    image: "/images/tools/AI_Auto_Blur.webp",
    tags: ["AI", "Electron", "Python"],
    status: "Available",
    github: "https://github.com/nzm0863/AI_Auto_Blur",
    youtube: "https://www.youtube.com/shorts/hnytZAQRL1k",
  },
  {
    title: "ESP32Utils",
    description: "ESP32開発を簡単にするためのユーティリティライブラリ。",
    image: "/images/tools/ESP32Utils.webp",
    tags: ["ESP32", "ArduinoIDE", "library"],
    status: "Available",
    github: "https://github.com/nzm0863/ESP32Utils",
    youtube: "https://www.youtube.com/shorts/aXVLTQwZH1s",
  },
  {
    title: "ESP32 Wi-Fi Starter",
    description: "Wi-Fi接続のテンプレート。",
    image: "/images/tools/WIFI_connect_template.webp",
    tags: ["ESP32", "Arduino IDE"],
    status: "Available",
    github: "https://github.com/nzm0863/ESP32_WIFI_connect_template",
    youtube: "https://www.youtube.com/shorts/zqNgp7YTBe8",
  },
  {
    title: "ESP32 OTA Template",
    description: "OTAアップデート対応テンプレート。",
    image: "/images/tools/WIFI_OTA_template.webp",
    tags: ["ESP32", "OTA"],
    status: "Available",
    github: "https://github.com/nzm0863/WIFI_OTA_template",
  },
];