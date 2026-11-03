
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type CartContextType = {
  cartItems: string[];
  addToCart: (slug: string) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  // localStorageからカートを読み込む
  useEffect(() => {
    try {
      const saved = localStorage.getItem("nnzzm-cart");

      if (saved) {
        const parsed: unknown = JSON.parse(saved);

        if (
          Array.isArray(parsed) &&
          parsed.every((item) => typeof item === "string")
        ) {
          setCartItems([...new Set(parsed)]);
        }
      }
    } catch {
      localStorage.removeItem("nnzzm-cart");
    }

    setLoaded(true);
  }, []);

  // カートの変更を保存する
  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      "nnzzm-cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems, loaded]);

  // 商品追加
  const addToCart = (slug: string) => {
    setCartItems((prev) =>
      prev.includes(slug) ? prev : [...prev, slug]
    );
  };

  // 商品削除
  const removeFromCart = (slug: string) => {
    setCartItems((prev) =>
      prev.filter((item) => item !== slug)
    );
  };

  // カートを空にする
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
