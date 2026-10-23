import Image from "next/image";
import Link from "next/link";

type StoreCardProps = {
  slug: string;
  title: string;
  imageCount: number;
  price: number;
  image: string;
};

export default function StoreCard({
  slug,
  title,
  imageCount,
  price,
  image,
}: StoreCardProps) {
  return (
    <Link
      href={`/store/${slug}`}
      className="group block overflow-hidden rounded-xl border border-white/10
        bg-white/[0.03] transition-all duration-300
        hover:-translate-y-1 hover:border-white/25"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300
            group-hover:scale-105"
        />
      </div>

      <div className="space-y-3 p-4">
        <h2 className="font-medium">{title}</h2>

        <div className="flex items-center justify-between text-sm">
          <span className="text-white/60">{imageCount}枚収録</span>
          <span className="text-lg font-semibold">
            ¥{price.toLocaleString("ja-JP")}
          </span>
        </div>
      </div>
    </Link>
  );
}