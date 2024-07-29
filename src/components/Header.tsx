"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import ProfileDropdown from "./ProfileDropdown";
import CustomButton from "./CustomButton";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  return (
    <header>
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/stories_logo.png"
            alt="logo"
            width={80}
            height={30}
            className="object-contain"
          />
        </Link>
        <div className="flex items-center gap-4 pr-5">
          <CustomButton heading="Post Story" onClick={() => router.push("/post")} />
          <ProfileDropdown />
        </div>
      </nav>
    </header>
  );
};

export default Header;
