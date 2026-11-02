export type StoreProduct = {
  slug: string;
  title: string;
  description: string;
  imageCount: number;
  price: number;
  image: string;
  samples: string[];
  notice: string;
};

export const storeProducts: StoreProduct[] = [
  {
    slug: "collection-001",
    title: "イラスト集 Vol.1",
    description: `イラスト集 Vol.1の説明文
    イラスト集 Vol.1の説明文
    イラスト集 Vol.1の説明文`,
    imageCount: 150,
    price: 500,
    image: "/images/store/samples/001/001.webp",
    samples: [
      "/images/store/samples/001/001.webp",
      "/images/store/samples/001/002.webp",
      "/images/store/samples/001/003.webp",
      "/images/store/samples/001/004.webp",
      "/images/store/samples/001/005.webp",
    ],
    notice: `【利用について】

・個人での鑑賞、壁紙、SNSアイコンとして
  ご利用いただけます。

・XなどのSNSへの作品投稿も可能です。
  投稿する際は、出典としてnnzzm.comまたは
  該当する商品ページへのリンクを掲載してください。

  イラスト提供：nnzzm.com

【禁止事項】

・画像の再配布、転売
・自作発言、著作者を偽る行為
・許可されていない商用利用

・本商品はデジタルコンテンツです。
  物理的な商品の発送はありません。

・購入前に収録内容をご確認ください。

・デジタル商品の性質上、
  お客様都合による返品・返金は
  原則としてお受けしておりません。

・商品に不備がある場合や、
  ダウンロードに問題がある場合は以下のメールアドレスまでお問い合わせください。
  
  nakamura.rundev@gmail.com
  ※返信までお時間をいただく場合があります。
  `,
  },
];