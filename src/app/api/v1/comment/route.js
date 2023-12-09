import prisma from "@/lib/prisma";

export const POST = async (request) => {
  try {
    const { anime_mal_id, user_email, comment, username, anime_title } =
      await request.json();
    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const createComment = await prisma.comment.create({ data });
    // console.log({ data });

    if (!createComment) {
      return Response.json({ status: 500, isCreated: false });
    } else {
      return Response.json({ status: 200, isCreated: true });
    }
  } catch (error) {
    console.error(error);
    return Response.json({ status: 500, isCreated: false });
  }
};

// export const GET = async () => {
//   return Response.json({ Response: "OK" });
// };
