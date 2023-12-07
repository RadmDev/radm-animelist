import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/lib/auth-libs";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CollectionPage = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: {
      user_email: user?.email,
    },
  });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title="My Collection" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collection.map((item, index) => (
          <Link
            key={index}
            href={`/anime/${item.anime_mal_id}`}
            className="relative border-2 border-color-accent"
          >
            <Image src="" alt="" width={350} height={350} className="w-full" />
            <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
              <h5 className="text-xl text-center">Judul Anime Judul Anime</h5>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CollectionPage;
