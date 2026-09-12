type VideoEmbedProps = {
  youtubeId: string;
  title: string;
};

export function VideoEmbed({ youtubeId, title }: VideoEmbedProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-navy-900 shadow-xl">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
