"use client";

import { useEffect, useState } from "react";
import BootScreen from "@/components/BootScreen";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <BootScreen /> : children;
}