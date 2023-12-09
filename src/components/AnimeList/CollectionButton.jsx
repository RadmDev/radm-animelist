"use client";

import { useState } from "react";

const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (e) => {
    e.preventDefault();

    const data = { anime_mal_id, user_email, anime_image, anime_title };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.isCreated) {
      setIsCreated(true);
    }
    return;
    // console.log({ data });
  };
  return (
    <>
      {isCreated ? (
        <p className="text-color-primary">Berhasil ditambahkan ke Koleksi</p>
      ) : (
        <button
          onClick={handleCollection}
          className="px-4 py-1 bg-color-red text-color-primary rounded-md mb-4 lg:mb-8"
        >
          Add To Collection
        </button>
      )}
    </>
  );
};

export default CollectionButton;
