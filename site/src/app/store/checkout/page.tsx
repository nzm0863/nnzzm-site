
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { storeProducts } from "@/content/store";

type Props = {
  searchParams: Promise<{
    slug?: string;
  }>;
};

export default async function CheckoutPage({ searchParams }: Props) {
  const { slug } = await searchParams;

  if (!slug) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl">注文手続き</h1>
        <p className="mt-6 text-zinc-400">
          商品が選択されていません。
        </p>
        <Link
          href="/store"
          className="mt-6 inline-block text-sky-400 hover:text-sky-300"
        >
          Storeに戻る
        </Link>
      </main>
    );
  }

  const product = storeProducts.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href={`/store/${product.slug}`}
        className="text-sm text-zinc-400 hover:text-white"
      >
        ← 商品ページに戻る
      </Link>

      <h1 className="mt-8 text-3xl">注文手続き</h1>

      {/* 注文商品 */}
      <section className="mt-8">
        <h2 className="mb-4 text-xl">注文内容</h2>

        <div className="flex gap-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div className="relative aspect-[3/4] w-28 shrink-0 overflow-hidden rounded-lg">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div>
              <h3 className="text-lg">{product.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">
                全{product.imageCount}枚収録
              </p>
            </div>

            <p className="text-xl font-semibold">
              ¥{product.price.toLocaleString("ja-JP")}
            </p>
          </div>
        </div>
      </section>

      {/* 購入者情報 */}
      <section className="mt-10">
        <h2 className="mb-4 text-xl">購入者情報</h2>

        <label
          htmlFor="email"
          className="mb-2 block text-sm"
        >
          メールアドレス
        </label>

        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@email.com"
          required
          className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 outline-none transition focus:border-sky-400"
        />

        <p className="mt-2 text-xs text-zinc-500">
          注文に関する連絡に使用します。
        </p>
      </section>

      {/* 支払い方法 */}
      <section className="mt-10">
        <h2 className="mb-4 text-xl">お支払い方法</h2>

        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p>銀行振込</p>
          <p className="mt-1 text-sm text-zinc-500">
            詳細は注文確定後にご案内します。
          </p>
        </div>
      </section>

      {/* 合計金額 */}
      <section className="mt-10 border-t border-white/10 pt-6">
        <div className="flex items-center justify-between">
          <span className="text-zinc-400">商品合計</span>
          <span>
            ¥{product.price.toLocaleString("ja-JP")}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold">お支払い合計</span>
          <span className="text-2xl font-bold">
            ¥{product.price.toLocaleString("ja-JP")}
          </span>
        </div>
      </section>

      {/* 次のステップ */}
      <div className="mt-8">
        <button
          type="button"
          disabled
          className="w-full rounded-xl bg-zinc-700 px-6 py-4 text-zinc-400"
        >
          注文内容を確認する（準備中）
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-zinc-500">
        ※現在は注文機能を準備中です。
      </p>
    </main>
  );
}
