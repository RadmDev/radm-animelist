import CollectionButton from "@/components/AnimeList/CollectionButton";
import CommentBox from "@/components/AnimeList/CommentBox";
import CommentInput from "@/components/AnimeList/CommentInput";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import { getAnimeResponse } from "@/lib/api-list";
import { authUserSession } from "@/lib/auth-libs";
import prisma from "@/lib/prisma";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: {
      user_email: user?.email,
      anime_mal_id: id,
    },
  });
  // console.log({ collection });

  return (
    <div className="wfull lg:w-3/5 mx-auto mb-12">
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="pt-4 px-4 flex flex-col gap-4 lg:flex-row lg:gap-6 text-color-primary">
        <div className="w-full md:max-w-md lg:w-1/3">
          <Image
            src={anime.data.images.webp.large_image_url}
            alt={anime.data.images.jpg.large_image_url}
            width={1080}
            height={1080}
            className="w-full rounded object-cover"
          />
        </div>
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <div className="flex flex-wrap gap-2 text-color-primary">
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
              <h3>PERINGKAT</h3>
              <p>{anime.data.rank}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
              <h3>SKOR</h3>
              <p>{anime.data.score}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
              <h3>ANGGOTA</h3>
              <p>{anime.data.members}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
              <h3>EPISODE</h3>
              <p>{anime.data.episodes}</p>
            </div>
          </div>
          <div>
            {!collection && user && (
              <CollectionButton
                anime_mal_id={id}
                user_email={user?.email}
                anime_image={anime.data.images.webp.large_image_url}
                anime_title={anime.data.title}
              />
            )}
          </div>
          <p className="text-justify text-xl">{anime.data.synopsis}</p>
        </div>
      </div>
      <div className="p-4 mt-14">
        <h3 className="text-color-primary text-2xl mb-4">Komentar Penonton</h3>
        <CommentBox anime_mal_id={id} />
        {user && (
          <CommentInput
            anime_mal_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={anime.data.title}
          />
        )}
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </div>
  );
};

export default Page;
