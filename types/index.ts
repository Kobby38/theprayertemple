export type Sermon = {
  slug: string;
  title: string;
  speaker: string;
  series: string;
  date: string;
  duration: string;
  youtubeId: string;
  scripture: string;
  summary: string;
};

export type ChurchEvent = {
  slug: string;
  title: string;
  date: string;
  endDate?: string;
  /** Overrides the displayed date when the exact day isn't set yet, e.g. "June 2027". */
  dateLabel?: string;
  time: string;
  location: string;
  category: string;
  summary: string;
  details: string;
};

export type Leader = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  photo?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};
