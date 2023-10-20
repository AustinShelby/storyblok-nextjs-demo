import Link from "next/link";

export const RecommendedTour = (story: any) => {
  return (
    <div className="bg-white rounded-sm overflow-hidden shadow">
      <img
        className="aspect-square object-cover w-full"
        src={story.story.content.main_image.filename}
        alt=""
      />
      <div className="p-8">
        <div className="flex gap-4 justify-between text-lg font-bold">
          <h3>{"Taiwan Walking Tour"}</h3>
          <p>
            {Number(story.story.content.price).toLocaleString("en-US", {
              style: "currency",
              currency: "TWD",
              minimumFractionDigits: 0,
            })}
          </p>
        </div>
        <div className="flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6 stroke-current text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p className="text-gray-700 uppercase font-bold ml-2 text-sm tracking-wide">
            {story.story.content.location}, Taiwan
          </p>
        </div>
        <Link
          className="font-bold text-base mt-8 block underline"
          href={`/${story.story.full_slug}`}
        >
          View Tour
        </Link>
      </div>
    </div>
  );
};
