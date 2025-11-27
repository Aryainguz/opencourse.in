import Markdown from "react-markdown";
import YouTube from "react-youtube";

const opts = {
  height: "300",
  width: "600",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};
const ChapterContent = ({ chapter, content }) => {
  // Show loading state when chapter is selected but content is not loaded
  if (!content) {
    return (
      <div className="p-10">
        <h2 className="font-medium text-2xl">
          {chapter?.name || "Loading..."}
        </h2>
        <p className="text-gray-500">
          {" "}
          {chapter?.about || "Loading content..."}
        </p>
        <div className="mt-3 flex justify-center">
          <div className="w-[600px] h-[300px] bg-gray-200 animate-pulse rounded-md flex items-center justify-center">
            <p className="text-gray-500">Loading video...</p>
          </div>
        </div>
        <div className="mt-5">
          <div className="p-5 bg-slate-50 mb-3 rounded-md animate-pulse">
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h2 className="font-medium text-2xl">{chapter?.name}</h2>
      <p className="text-gray-500"> {chapter?.about}</p>

      {/* video  */}
      <div className="mt-3 flex justify-center">
        <YouTube videoId={content?.videoId} opts={opts} />
      </div>

      {/* content  */}
      <div>
        {content?.content?.map((item, index) => (
          <div key={index} className="p-5 bg-slate-50 mb-3 rounded-md">
            <h2 className="font-medium text-lg">{item?.title}</h2>
            {/* <p className='whitespace-pre-wrap mt-1 ml-2'>{item?.description}</p>
             */}
            <Markdown>{item?.description}</Markdown>
            {item?.codeExample && (
              <div className="p-4 bg-black text-white rounded-md mt-3">
                <pre>
                  <code>{item?.codeExample}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
        {(!content?.content || content?.content?.length === 0) && (
          <div className="p-5 bg-slate-50 mb-3 rounded-md">
            <p className="text-gray-500">
              No content available for this chapter yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChapterContent;
