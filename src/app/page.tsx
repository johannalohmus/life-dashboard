import Image from "next/image";
import WaterTracker from "./components/WaterTracker";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl gap-6 p-6">
      <header className="mb-4">
        <h1 className="text-2xl font-semibold text-neutral-900"></h1>
        <p className="text-sm text-neutral-600"> </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <aside className="rounded-xl bg-white p-5">
          <div className="text-sm font-medium text-neutral-900">Johanna</div>
          <div className="mt-4">
            <div className="flex gap-6">
              <div className="relative aspect-[4/5] w-48 overflow-hidden rounded-xl bg-blue-100">
                <Image
                  src="/character.png"
                  alt="Character"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900">Stats</p>
                <WaterTracker />
              </div>
            </div>
          </div>
        </aside>
        <section className="rounded-xl bg-white p-5">
          <div className="text-sm font-medium text-neutral-900"> </div>
          <div className="mt-2 text-sm text-neutral-600"> </div>
        </section>
      </div>
    </div>
  );
}
