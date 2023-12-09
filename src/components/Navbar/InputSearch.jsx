"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() === "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault;
      const keyword = searchRef.current.value;
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="flex rounded-full border-2 border-color-secondary">
      <input
        placeholder="cari anime..."
        className="w-full px-5 py-2 bg-color-dark text-color-primary rounded-s-full focus:outline-none"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        className="px-5 py-2 rounded-e-full bg-color-secondary text-color-primary"
        onClick={handleSearch}
      >
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
