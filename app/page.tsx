import TypeBox from "./components/TypeBox";

export default function Home() {
  return (
    <div className="bg-zinc-700 w-full min-h-screen flex flex-col">
      <div className="flex justify-center text-2xl text-gray-200 pt-10">
        Finger Ninja
      </div>
      {/* Dragon Fingers / Finger Ninja */}
      <div className="flex flex-grow items-center justify-center">
        <TypeBox />
      </div>
    </div>
  );
}
