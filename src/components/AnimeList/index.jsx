import Image from "next/image";
import Link from "next/link";

const AnimeList = (props) => {
  const { api } = props;

  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="cursor-pointer text-color-primary transition-all group"
            key={index}
          >
            <Image
              src={anime.images.webp.large_image_url}
              alt="..."
              width={1080}
              height={1080}
              className="w-full max-h-64 object-cover rounded-2xl aspect-auto md:aspect-video"
            />
            <h3 className="text-base font-bold text-color-primary md:text-md p-4">
              {anime.title_english || anime.title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
