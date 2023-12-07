import prisma from "@/lib/prisma";

export const POST = async (request) => {
  try {
    const { anime_mal_id, user_email } = await request.json();
    const data = { anime_mal_id, user_email };

    const createCollection = await prisma.collection.create({ data });

    if (!createCollection) {
      return Response.json({ status: 500, isCreated: false });
    } else {
      return Response.json({ status: 200, isCreated: true });
    }
  } catch (error) {
    console.error(error);
    return Response.json({ status: 500, isCreated: false });
  }
};

export const GET = async () => {
  return Response.json({ Response: "OK" });
};
