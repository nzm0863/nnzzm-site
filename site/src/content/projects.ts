export type Project = {
  slug: string;
  title: string;
  description: string;
  // SEO用（100〜150文字くらい）
  seoDescription?: string;

  thumbnail: string;
  // OGP専用画像（無ければthumbnailを使う）
  ogImage?: string;

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
    seoDescription:
      "ESP32とReact、WebSocketを使用して制作したメカナムホイールロボット。Xboxゲームパッドによるリアルタイム操作や全方向移動を実装したIoT個人開発プロジェクトです。",

    thumbnail: "/images/projects/ESP32Car.webp",
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
      "/images/projects/ESP32Car.webp",
      "/images/projects/ESP32Car2.webp",
      "/images/projects/ESP32Car3.webp",
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
    seoDescription:
      "YOLO11セグメンテーションを利用して人物や顔を自動検出し、画像を一括でぼかせるWindows向けAIツール。Python・OpenCV・CustomTkinter・PyInstallerで開発。",

    thumbnail: "/images/projects/AI_auto_blur.webp",
    tags: ["Electron", "Python", "AI"],

    github: "https://github.com/nzm0863/AI_auto_blur",

    period: "2025.07",
    content: [
      "YOLO11セグメンテーションを利用して人物や顔を自動検出するWindows向け画像ぼかしツールを開発しました。",
      "CustomTkinterでGUIを作成し、フォルダ単位の一括画像処理に対応しています。",
      "PNG・JPG・JPEG・WebP形式に対応し、ぼかし強度や検出精度を調整できます。",
    ],
    overview: "YOLO11を使って画像を自動でぼかすWindows向けAIツール。",

    features: [
      "YOLO11 セグメンテーション",
      "一括画像処理",
      "ぼかし強度調整",
      "PNG・JPG・WebP対応",
    ],

    techStack: ["Python", "YOLO11", "OpenCV", "CustomTkinter", "PyInstaller"],
    featured: true,
  },
];
