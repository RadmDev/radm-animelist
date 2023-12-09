import Link from "next/link";
import AnimeList from "../components/AnimeList";
import Header from "../components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "../lib/api-list";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  recommendedAnime = reproduce(recommendedAnime, 5);

  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header
          title="Rekomendasi"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
