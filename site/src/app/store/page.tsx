import StoreCard from "@/components/StoreCard";
import { storeProducts, type StoreProduct } from "@/content/store";

export default function StorePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-8 text-4xl">Store</h1>

      <section className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {storeProducts.map((item: StoreProduct) => (
          <StoreCard key={item.slug} {...item} />
        ))}
      </section>
    </main>
  );
}