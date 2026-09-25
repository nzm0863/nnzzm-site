export type Project = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];

  github?: string;
  youtube?: string;
  demo?: string;
  period: string;
  content: string[];

  gallery?: string[];
  overview: string; // 一言紹介
  features: string[]; // 特徴
  techStack: string[]; // 技術一覧

  status?: "Completed" | "In Progress";
  featured?: boolean;
};
export const projects: Project[] = [
  {
    slug: "esp32-mecanum",
    title: "ESP32 メカナムロボット",
    description: "ESP32・React・WebSocketで操作するロボット。",
    thumbnail: "/images/projects/ESP32Car.jpg",
    tags: ["ESP32", "React", "WebSocket"],

    github: "https://github.com/nzm0863/ESP32Car",
    youtube: "https://www.youtube.com/shorts/xxxxxxxx",

    period: "2025.05",
    content: [
      "ESP32でメカナムホイールを制御するロボットを制作しました。",
      "ReactからWebSocket経由でリアルタイム操作できます。",
      "ゲームパッド入力にも対応しています。",
    ],
    gallery: [
      "/images/projects/ESP32Car.jpg",
      "/images/projects/ESP32Car2.jpg",
      "/images/projects/ESP32Car3.jpg",
    ],
    overview: "ESP32とゲームパッドで操作するメカナムロボット。",

    features: [
      "Xboxコントローラー操作",
      "WebSocketリアルタイム通信",
      "メカナムホイール全方向移動",
    ],

    techStack: [
      "ESP32 DevKitC",
      "Arduino IDE",
      "React",
      "TypeScript",
      "WebSocket",
    ],
    featured: true,
  },

  {
    slug: "ai-auto-blur",
    title: "AI Auto Blur",
    description: "AIを使った画像ぼかしツール。",
    thumbnail: "/images/projects/AI_auto_blur.png",
    tags: ["Electron", "Python", "AI"],

    github: "https://github.com/nzm0863/AI_auto_blur",
    // YouTube動画が無ければ書かない

    period: "2025.07",
    content: [
      "ESP32でメカナムホイールを制御するロボットを制作しました。",
      "ReactからWebSocket経由でリアルタイム操作できます。",
      "ゲームパッド入力にも対応しています。",
    ],
    overview: "ESP32とゲームパッドで操作するメカナムロボット。",

    features: [
      "Xboxコントローラー操作",
      "WebSocketリアルタイム通信",
      "メカナムホイール全方向移動",
    ],

    techStack: [
      "ESP32 DevKitC",
      "Arduino IDE",
      "React",
      "TypeScript",
      "WebSocket",
    ],
    featured: true,
  },
];
