import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/lib/api-list";

const Page = async (props) => {
  const { params } = props;
  const { keyword } = params;

  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section>
        <Header title={`Pencarian Untuk ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
