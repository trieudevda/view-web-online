"use client";
import Image from "next/image";
import Link from "next/link";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import React from "react";
export default function Home() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  React.useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setMode(savedMode as "light" | "dark");
    }
  }, []);

  // Lưu trạng thái theme vào localStorage
  React.useEffect(() => {
    if (mode) {
      localStorage.setItem("theme", mode);
    }
  }, [mode]);

  // Tạo theme động dựa trên trạng thái mode
  const theme = createTheme({
    palette: {
      mode: mode, // "light" hoặc "dark"
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Đảm bảo sử dụng css chuẩn của MUI */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/admin/dashboard"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </Link>
        </footer>
      </div>
    </ThemeProvider>
  );
}
