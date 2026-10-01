import type { Recording } from "@/types";

const CHANNEL_ID = "UCyZLB8KmSztlIcJbhM5ezKg";

function decodeEntities(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export async function getRecentRecordings(limit = 3): Promise<Recording[]> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`
    );
    if (!res.ok) return [];

    const xml = await res.text();
    const entries = xml.split("<entry>").slice(1, limit + 1);

    return entries.map((entry) => {
      const videoId = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] ?? "";
      const title = decodeEntities(entry.match(/<title>(.*?)<\/title>/)?.[1] ?? "");
      const thumbnail = entry.match(/<media:thumbnail url="(.*?)"/)?.[1] ?? "";
      const publishedAt = entry.match(/<published>(.*?)<\/published>/)?.[1] ?? "";
      return { videoId, title, thumbnail, publishedAt };
    });
  } catch {
    return [];
  }
}
