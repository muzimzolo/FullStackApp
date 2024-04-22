import Link from "next/link";
import { mock } from "node:test";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/aae2e876-b87f-44f7-a800-4087a8a49da2-1xrfm.png",
  "https://utfs.io/f/7276993a-0965-4a85-9696-94ee5dde199c-gonerm.png",
  "https://utfs.io/f/3d7de3b7-69af-48c5-87f6-07f188b8d4e0-lxr74w.png",
  "https://utfs.io/f/eec224e7-65f2-4e9e-abd1-0aaef05c7db6-mjevyv.png"
];

const mockImages = mockUrls.map((url, index) =>  ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4"> {
        mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
            </div>
        ))
      }
      </div>
    </main>
  );
}
