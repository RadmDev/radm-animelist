import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/lib/auth-libs";
import prisma from "@/lib/prisma";
import Link from "next/link";

const CommentPage = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: {
      user_email: user?.email,
    },
  });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title="My Comment" />
      <div className="grid grid-cols-1 py-2 gap-4">
        {comments.map((comment, index) => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={index}
              className="bg-color-primary text-color-dark p-4"
            >
              <p className="text-sm">{comment.anime_title}</p>
              <p className="italic">{comment.comment}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CommentPage;
