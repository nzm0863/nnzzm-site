"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

type Props = {
  slug: string;
};

export default function AddToCartButton({ slug }: Props) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(slug);
    setAdded(true);
  };

  return (
    <div className="mt-8 space-y-3">
      <button
        type="button"
        onClick={handleAdd}
        disabled={added}
        className="block w-full rounded-xl bg-sky-600 px-6 py-4 text-center transition hover:bg-sky-500 disabled:bg-emerald-700 disabled:cursor-default cursor-pointer"
      >
        {added ? "✓ カートに追加しました" : "カートに入れる"}
      </button>

      {added && (
        <Link
          href="/store/cart"
          className="block w-full rounded-xl border border-zinc-600 px-6 py-3 text-center hover:bg-zinc-800"
        >
          カートを見る
        </Link>
      )}
    </div>
  );
}