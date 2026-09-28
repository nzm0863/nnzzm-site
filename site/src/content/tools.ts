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
    image: "/images/tools/AI_auto_blur.webp",
    tags: ["AI", "Electron", "Python"],
    status: "Available",
    github: "https://github.com/nzm0863/AI_Auto_Blur",
    youtube: "https://www.youtube.com/shorts/hnytZAQRL1k",
  },
  {
    title: "ESP32 Wi-Fi Starter",
    description: "Wi-Fi接続・再接続・設定保存のテンプレート。",
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
    status: "Coming Soon",
    github: "https://github.com/nzm0863/WIFI_OTA_template",
  },
];