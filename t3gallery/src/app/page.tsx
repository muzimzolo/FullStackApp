import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { mock } from "node:test";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id),
    
  });
  return (
    <div className="flex flex-wrap gap-4"> {
      images.map((image, index) => (
        <div key={image.id + "-" + index} className="w-48 flex flex-col">
          <img src={image.url}/>
          <div>{image.name}</div>
          </div>
      ))};
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full flex flex-col items-center justify-center gap-4 p-4">
        Please sign in
        </div>
        </SignedOut>
        <SignedIn>
          <Images/>
        </SignedIn>
    </main>
  );
}
