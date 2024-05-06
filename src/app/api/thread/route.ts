import prisma from "@/lib/prismaClient"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const allThreads = await prisma.tread.findMany();
    return NextResponse.json(allThreads)
}