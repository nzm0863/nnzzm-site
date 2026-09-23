import Image from "next/image";
import Link from "next/link";

type GalleryCardProps = {
  slug: string;
  title: string;
  category: string;
  cover: string;
  count: number;
};

export default function GalleryCard({
  slug,
  title,
  category,
  cover,
  count,
}: GalleryCardProps) {
  return (
    <Link href={`/gallery/${slug}`} className="block">
      <article className="group transition-all duration-300 hover:-translate-y-1">
        <Image
          src={cover}
          alt={title}
          width={320}
          height={420}
          loading="lazy"
          className="aspect-[3/4] w-full rounded-xl object-cover shadow-md transition duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
        />

        <p className="mt-3 text-sm text-zinc-500">{category}</p>

        <h2 className="mt-1 text-xl font-semibold transition-colors group-hover:text-sky-400">
          {title}
        </h2>

        <p className="mt-2 text-sm text-zinc-500">{count} 枚</p>
      </article>
    </Link>
  );
}