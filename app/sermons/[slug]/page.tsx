import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Clock, User } from "lucide-react";
import { VideoEmbed } from "@/components/VideoEmbed";
import { SermonCard } from "@/components/SermonCard";
import { sermons } from "@/lib/data";

export function generateStaticParams() {
  return sermons.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/sermons/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const sermon = sermons.find((s) => s.slug === slug);
  if (!sermon) return {};
  return { title: sermon.title, description: sermon.summary };
}

export default async function SermonDetailPage(
  props: PageProps<"/sermons/[slug]">
) {
  const { slug } = await props.params;
  const sermon = sermons.find((s) => s.slug === slug);
  if (!sermon) notFound();

  const more = sermons.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <section className="bg-cream pb-28 pt-40">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Link
          href="/sermons"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy-900/60 transition-colors hover:text-navy-900"
        >
          <ArrowLeft size={16} /> All sermons
        </Link>

        <p className="mt-8 text-xs font-bold uppercase tracking-widest text-brown-500">
          {sermon.series}
        </p>
        <h1 className="mt-3 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl">
          {sermon.title}
        </h1>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-y border-navy-900/10 py-6 text-sm font-medium text-navy-900/60">
          <span className="flex items-center gap-2">
            <User size={16} /> {sermon.speaker}
          </span>
          <span className="flex items-center gap-2">
            <BookOpen size={16} /> {sermon.scripture}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} /> {sermon.duration}
          </span>
        </div>

        <div className="mt-12">
          <VideoEmbed youtubeId={sermon.youtubeId} title={sermon.title} />
        </div>

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy-900/70">
          {sermon.summary}
        </p>
      </div>

      {more.length > 0 && (
        <div className="mx-auto mt-28 max-w-7xl px-6 lg:px-10">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy-900">
            More from {sermon.series}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {more.map((s, i) => (
              <SermonCard key={s.slug} sermon={s} index={i} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
