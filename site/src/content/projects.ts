export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];

  github?: string;
  youtube?: string;
  demo?: string;
  period: string;
  content: string;
  
};
export const projects: Project[] = [
  {
    slug: "esp32-mecanum",
    title: "ESP32 メカナムロボット",
    description: "ESP32・React・WebSocketで操作するロボット。",
    image: "/images/projects/ESP32Car.jpg",
    tags: ["ESP32", "React", "WebSocket"],

    github: "https://github.com/nzm0863/ESP32Car",
    youtube: "https://www.youtube.com/shorts/xxxxxxxx",

    period: "2025.05",
    content: `ESP32とゲームパッドで操作するメカナムロボット。`,
  },

  {
    slug: "ai-auto-blur",
    title: "AI Auto Blur",
    description: "AIを使った画像ぼかしツール。",
    image: "/images/projects/AI_auto_blur.png",
    tags: ["Electron", "Python", "AI"],

    github: "https://github.com/nzm0863/AI_auto_blur",
    // YouTube動画が無ければ書かない

    period: "2025.07",
    content: `AIを使った画像ぼかしツール。`,
  },
];
