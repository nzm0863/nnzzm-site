
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { storeProducts } from "@/content/store";
import type { Metadata } from "next";
import StoreGallery from "@/components/StoreGallery";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = storeProducts.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "商品が見つかりません",
    };
  }

  return {
    title: `${product.title} | Store`,
    description: `${product.title}。全${product.imageCount}枚収録。`,
  };
}

export default async function StoreDetailPage({
  params,
}: Props) {
  const { slug } = await params;
  const product = storeProducts.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <Link
        href="/store"
        className="text-sm text-zinc-400 hover:text-white"
      >
        ← Storeに戻る
      </Link>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <section>
          <h1 className="text-3xl font-serif">
            {product.title}
          </h1>

          <p className="mt-4 text-zinc-400">
            全{product.imageCount}枚収録
          </p>

          <p className="mt-6 text-3xl font-semibold">
            ¥{product.price.toLocaleString("ja-JP")}
          </p>

          <p className="mt-6 leading-7 text-zinc-300">
            収録内容や作品の説明をここに追加していきます。
          </p>

          <button
            type="button"
            disabled
            className="mt-8 w-full rounded-xl bg-zinc-700 px-6 py-4 text-zinc-400"
          >
            購入機能は準備中
          </button>
        </section>
      </div>

      <StoreGallery
        title={product.title}
        image={product.samples[0] ?? product.image}
        gallery={product.samples}
      />
    </main>
  );
}
