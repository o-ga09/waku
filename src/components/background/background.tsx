import { Link } from "waku";

export function GridBackground() {
  return (
    <div className="w-screen h-screen dark:bg-black bg-black  dark:bg-grid-black/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      <p className="font-Shippori text-9xl sm:text-9xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        <Link to={"/about"}>飛べ</Link>
      </p>
    </div>
  );
}
