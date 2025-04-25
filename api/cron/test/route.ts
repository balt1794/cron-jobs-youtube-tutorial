import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const GET = async (request:NextRequest) => {
  console.log("Hello World - Cron job is working")
  return NextResponse.json({message:"Hello World"}, {status:200});
};
