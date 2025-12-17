export default function VideoPlayer({ videoId }: { videoId: string }) {
  if (!videoId) return null;

  return (
    <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg shadow-lg bg-black">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
