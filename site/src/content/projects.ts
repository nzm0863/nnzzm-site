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
    thumbnail: "/images/projects/ESP32Car.webp",
    tags: ["ESP32", "ESP32S3", "ゲームパッド"],
    overview: "ESP32とゲームパッドで操作するメカナムロボット。",
    period: "2026.09",

    title: "ESP32 メカナムロボット",
    gallery: [
      "/images/projects/ESP32Car.webp",
      "/images/projects/ESP32Car2.webp",
      "/images/projects/ESP32Car3.webp",
    ],
    techStack: [
      "ESP32 DevKitC",
      "ESP32S3",
      "Arduino IDE",
    ],
    description: `　Raspberry Piで製作していたラジコンカーが故障したため、 その部品を一部流用しながらESP32を使用して一から製作しているロボットカー。木で組み立てることで拡張、試行錯誤がやりやすくなっている。
    
    　ESP32S3を司令塔としてそれぞれの稼働カ所のESP32に指示を出す設計。

    　18650電池を昇圧モジュールで電圧を引き上げ、一つはメカナムホイール、もう一つはESP32への電源として接続。
    ラズパイ5とカメラモジュールも使用して画像解析も入れる予定。
    `,

    github: "https://github.com/nzm0863/IoT_ESP32Car",
    youtube: "https://www.youtube.com/shorts/H7LRGQXD7YQ",

    features: [
      "木造",
      "Xboxコントローラー操作",
      "メカナムホイール全方向移動",
    ],
    content: [
      "ブレッドボードだとやはり取れやすいのでいずれユニバーサル基盤にはんだ付けする予定",
      "木材加工なら慣れているからできると思ったら工具が足りなくて意外と大変",
      "見学会に出したら好評で嬉しい(´▽｀*)",
    ],

    
    featured: true,
    seoDescription:
      "ESP32を使用して制作したメカナムホイールロボット。Xboxゲームパッドによるリアルタイム操作や全方向移動を実装したIoT個人開発プロジェクトです。",

  },


  {
    slug: "AI_Auto_Blur",
    thumbnail: "/images/projects/AI_Auto_Blur.webp",
    tags: ["AI", "Python", "YOLO"],
    overview: "AIで指定部を自動でぼかすデスクトップアプリ",
    period: "2026.09",

    title: "AI_Auto_Blur",
    gallery: [
      "/images/projects/AI_Auto_Blur.webp",
      "/images/projects/AI_Auto_Blur2.webp",
      "/images/projects/AI_Auto_Blur3.webp",
    ],
    techStack: [
      "Python",
      "YOLO",
      "Tkinter",
      "windows",
    ],
    description: `　写真の人の顔、イラストの陰部をAIで検知してぼかし処理をかける画像加工ツール。
    
    　AIイラストを大量に生成した後投稿する時に、陰部にぼかし処理をするのが大変だったので作成した。
    つまりちん〇とまん〇を自動でぼかせるのだ！(#^.^#)

    　これだけだと使う人がかなり限られるだろうってことで写真の顔も追加。
    選択して好きな処理を行える。使いやすくGUIも作成。

    　現在無料公開中！いずれ有料版も出す予定。
    `,

    github: "https://github.com/nzm0863/AI_Auto_Blur",
    youtube: "https://www.youtube.com/shorts/hnytZAQRL1k",

    features: [
      "無料公開",
      "判定の厳しさ、ブラーの濃さをスライダーで指定可能。",
      "えっちい画像に！",
    ],
    content: [
      "AIイラストを投稿する人にこそ使ってもらいたいツール",
      "千枚でも数分で加工可能",
      "まだ判定が甘いときがあるので、アップデートでAI学習を重ね最新モデルを公開する予定",
    ],

    
    featured: true,
    seoDescription:
      "写真の人の顔、イラストの陰部をAIで自動検知からぼかし処理まで行うデスクトップアプリです。",

  },


  {
    slug: "IoT_toilet_notification",
    thumbnail: "/images/projects/toilet.webp",
    tags: ["ESP32", "WIFI", "通知機能"],
    overview: "トイレに人が入っているかを通知するIoTシステム",
    period: "2026.09",

    title: "IoT_toilet_notification",
    gallery: [
      "/images/projects/toilet.webp",
      "/images/projects/toilet2.webp",
      "/images/projects/toilet3.webp",
    ],
    techStack: [
      "ESP32",
      "光センサー",
      "WIFI",
    ],
    description: `　離れた場所でもトイレに人が入っているかLEDでわかるシステム。

    　通っている就労移行支援事業所でトイレの前まで行かなければわからなかった使用中の通知システムをESP32、光センサー、LEDで作成した。

    　今回のトイレは入るときほぼ必ず照明をつけるので、光センサーを使用した。
    つまり、証明を消し忘れた場合も通知し続けることになる。

    　通っているところが障害のある人たちの使用する施設ということもあるので、30分点きっぱなしの場合はLEDを点滅させて通知するようにした。
    中で誰かが倒れていたり、単純に電気を消し忘れていた場合もこれで対処できる。

    　予算も考慮した分妥協した面もあるが、事業所でかなり感謝されたので個人的には大満足(/・ω・)/
    `,

    github: "https://github.com/nzm0863/IoT_toilet_notification",
    youtube: "https://www.youtube.com/shorts/MFViIbvx_ls",

    features: [
      "トイレ使用中、電気消し忘れ通知",
      "ESP32二つ使用",
      "現在も事業所で稼働中",
    ],
    content: [
      "かなり前から作りたいと思っていたIoT。事業所から要望が来たこともあって作成",
      "光センサーやほかの人感センサーなどを使えばもっと制度や使い勝手があがりそう",
      "トイレに使えるコンセントが必要。なければモバイルバッテリーとかを使う必要がある",
    ],

    
    featured: true,
    seoDescription:
      "トイレに人が入っているかLEDで通知するIoTシステムです。",

  },
  {
    slug: "taskflow",
    thumbnail: "/images/projects/taskflow.webp",
    tags: ["ESP32", "React", "通知機能","Web","TypeScript"],
    overview: "案件管理アプリtaskflow",
    period: "2026.09",

    title: "案件管理アプリtaskflow",
    gallery: [
      "/images/projects/taskflow.webp",
      "/images/projects/taskflow2.webp",
      "/images/projects/taskflow3.webp",
      "/images/projects/taskflow4.webp",
    ],
    techStack: [
      "ESP32",
      "React",
      "TypeScript",
    ],
    description: `　以前受けたインターンでの課題に基づいて自分で作成したWebアプリ。

    　100時間以内で設計からデプロイまで実施し、実装内容のスライドも作成。
    課題はWebアプリの作成だったがせっかくなのでESP32とNeoPixelLED、サーボモーターを使用した通知機能を実装し、Tauriによるデスクトップアプリ化まで行った。

    　初めての部分も多かったので細かくすべてを理解するのではなく全体の流れを理解することを重視して作成。
    今見返すとReactのコンポーネント分けが甘い気がする(;・∀・)
    `,

    github: "https://github.com/nzm0863/taskflow-app",
    youtube: "https://www.youtube.com/watch?v=A44YyAnDyGU",

    features: [
      "複数アカウント、承認フロー",
      "ESP32通知機能",
      "Tauriデスクトップアプリ化",
    ],
    content: [
      "インターンといっても課題を1カ月かけてオンラインでこなすもので、教えてもらうとかはなかった",
      "AI使いながらの開発ではあるが、これが作れるだけの技術力はついてきた",
      "周りの人に使っていただいて、意見をかなり反映したので誰かに見てもらうのはかなり大事",
    ],

    
    featured: true,
    seoDescription:
      "インターン課題に基づいて開発した案件管理アプリです。",

  },
]
