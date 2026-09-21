import fs from "fs";
import path from "path";

const galleryRoot = path.join(process.cwd(), "public", "images", "gallery");
const outputFile = path.join(process.cwd(), "src", "content", "gallery.ts");

const titleMap: Record<string, string> = {
  lala: "ララ・サタリン・デビルーク",
  mikan: "結城美柑",
  yami: "金色の闇",
  momo: "モモ・ベリア・デビルーク",
  mea: "黒咲芽亜",
};

const setTitleMap: Record<string, string> = {
  normal: "通常衣装",
  miko: "巫女",
  shower: "シャワー",
};

const slugify = (category: string, character: string) =>
  `${category.toLowerCase()}-${character}`;

const categories = fs.readdirSync(galleryRoot);

const galleries = categories.flatMap((category) => {
  const categoryPath = path.join(galleryRoot, category);

  if (!fs.statSync(categoryPath).isDirectory()) return [];

  const characters = fs.readdirSync(categoryPath);

  return characters.map((character) => {
    const characterPath = path.join(categoryPath, character);

    const sets = fs
      .readdirSync(characterPath)
      .filter((set) =>
        fs.statSync(path.join(characterPath, set)).isDirectory()
      )
      .map((set) => {
        const setPath = path.join(characterPath, set);

        const images = fs
          .readdirSync(setPath)
          .filter((file) => file.endsWith(".webp") && file !== "cover.webp")
          .sort();

        return {
          slug: set,
          title: setTitleMap[set] ?? set,
          cover: `/images/gallery/${category}/${character}/${set}/cover.webp`,
          images: images.map(
            (image) =>
              `/images/gallery/${category}/${character}/${set}/${image}`
          ),
        };
      });

    return {
      slug: slugify(category, character),
      category,
      title: titleMap[character] ?? character,
      sets,
    };
  });
});

const output = `// 自動生成ファイル。編集しないでください。

export type GallerySet = {
  slug: string;
  title: string;
  cover: string;
  images: string[];
};

export type Gallery = {
  slug: string;
  category: string;
  title: string;
  sets: GallerySet[];
};

export const galleries: Gallery[] = ${JSON.stringify(galleries, null, 2)};
`;

fs.writeFileSync(outputFile, output);

console.log("✅ gallery.ts generated!");
console.log("Characters:", galleries.length);