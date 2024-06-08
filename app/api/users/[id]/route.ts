import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../route";

const prisma = new PrismaClient();

export const GET = async (req: Request, res: Response) => {
  try {
    const id: string = req.url.split("/users/")[1];
    await main();
    const user = await prisma.user.findFirst({ where: { id } }); // http://localhost:3000/api/users/hogehoge
    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Server error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req: Request, res: Response) => {
  try {
    const id: string = req.url.split("/users/")[1];
    const { email } = await req.json();

    await main();
    const user = await prisma.user.update({
      data: { email },
      where: { id },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Server error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
