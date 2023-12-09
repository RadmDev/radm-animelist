import prisma from "@/lib/prisma";

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({
    where: {
      anime_mal_id,
    },
  });

  //   console.log({ comments });
  if (comments.length > 0) {
    return (
      <div className="h-44 overflow-y-scroll">
        <div className="grid lg:grid-cols-4 gap-4 mb-4">
          {comments?.map((comment) => {
            return (
              <div
                key={comment.id}
                className="text-color-primary bg-color-secondary p-4 rounded-md"
              >
                <p className="pb-1">{comment.username}</p>
                <hr className="opacity-50" />
                <p className="pt-4">{comment.comment}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CommentBox;
