import type { ChurchEvent, Leader, Sermon, Testimonial } from "@/types";

export const siteConfig = {
  name: "The Prayer Temple",
  tagline: "A house of prayer for every nation",
  founded: "2026",
  address: "Clock House Community Centre, Defiance Walk, London, SE18 5QL",
  phone: "+44 20 0000 0000",
  email: "hello@theprayertemple.org",
  serviceTimes: [{ label: "Sunday Service", time: "2:00 PM" }],
  social: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  },
};

export const ewmMeeting = {
  schedule: "Mondays, 8:00 PM BST · 7:00 PM GMT",
  zoomLink: "https://us04web.zoom.us/j/2917715520?pwd=MWNTOUx6b3JMenJRL3EzUFIzR09QQT09",
};

export const midnightCryMeeting = {
  schedule: "Mondays, 11:45 PM BST · 10:45 PM GMT",
  // TODO: replace with the real recurring Zoom meeting link.
  zoomLink: "https://zoom.us/j/PLACEHOLDER",
};

export const vision = {
  pillars: [
    "Raising Overcomers",
    "Imparting Lives",
    "Thinking Like an Ocean",
    "Building Kingdom Financiers",
  ],
  statement:
    "This is not merely a church expression; it is a divine mandate to shape lives, influence generations, and advance God's Kingdom through prayer, leadership and stewardship.",
};

export const missionStatement =
  "The Prayer Temple exists to establish a governing house of prayer that raises overcomers, imparts lives and cultivates Kingdom-minded thinkers, and equips Kingdom financiers to advance the agenda of God on earth. We are committed to building people of power, purity and purpose, anchored in prayer, Prophetic, transformed by the Word and mobilized for Kingdom Impact.";

export const coreIdentity = [
  { label: "A House of Prayer", icon: "landmark" },
  { label: "A Training Ground for Leaders", icon: "graduation-cap" },
  { label: "A Furnace for Overcomers", icon: "flame" },
  { label: "A Launchpad for Kingdom Financiers", icon: "rocket" },
];

export const declaration = {
  intro: "The Prayer Temple is not just a gathering; it is a movement.",
  identity: [
    "A praying people",
    "A prevailing people",
    "A productive people",
    "A prospering people",
  ],
  rally: ["We will rise.", "We will build.", "We will impact generations."],
};

export const leaders: Leader[] = [
  {
    name: "Prophetess Abena Hackman",
    role: "Founder & General Overseer",
    bio: "Prophetess Abena Hackman is a Ghanaian-born minister of the gospel, prophetess, preacher, and community-development advocate. She is the General Overseer of The Prayer Temple and Midnight Cry, raising people who know God, understand their identity and purpose, and become agents of transformation in their generation.",
    initials: "AH",
    photo: "/images/abena-hackman.jpg",
  },
];

export const founderProfile = {
  intro:
    "Prophetess Abena Hackman is a Ghanaian-born Christian minister of the gospel of Jesus Christ, prophetess, preacher, motivational speaker, philanthropist and community-development advocate whose work brings together faith, prophetic ministry, spiritual empowerment, leadership development and humanitarian service.",
  overseer:
    "She is the General Overseer of The Prayer Temple and Midnight Cry, ministries committed to raising people who know God, understand their identity and purpose, activate their faith, and become agents of transformation in their generation. As General Overseer, she provides spiritual leadership through prayer, biblical teaching, prophetic ministry and spiritual mentorship. Midnight Cry reflects her strong emphasis on intercession, spiritual awakening and seeking God through prayer.",
  aspects: [
    {
      icon: "zap",
      title: "A Prophetic Voice and Preacher",
      body: "Prophetess Abena ministers around themes including faith, prayer, restoration, healing, divine purpose, spiritual transformation, prophetic activation and the supernatural. Her teaching emphasizes moving beyond simply hearing God's Word to believing, acting and walking by faith, carrying ministry language such as “Powerfire,” “Prophetic Touch” and “Divine Lift Up.”",
    },
    {
      icon: "landmark",
      title: "General Overseer of The Prayer Temple and Midnight Cry",
      body: "Her vision is centered on raising overcomers, imparting lives, developing Kingdom-minded people and building individuals who can make a meaningful impact in their families, communities and generation.",
    },
    {
      icon: "globe",
      title: "A Humanitarian and Community-Development Advocate",
      body: "Prophetess Abena is associated with HackmanSmile, an initiative focused on supporting vulnerable people and creating opportunities through training, empowerment and community development, particularly among young people and disadvantaged communities in Ghana.",
    },
    {
      icon: "crown",
      title: "A Women's Empowerment and Leadership Advocate",
      body: "She is also involved in women's empowerment and entrepreneurship initiatives, including the Entrepreneur Women's Movement, encouraging women to discover their potential, develop their capacity and become economically and socially impactful.",
    },
    {
      icon: "sprout",
      title: "A Spiritual Mentor and Teacher",
      body: "A major emphasis of her ministry is helping people recognize that God has deposited something within them that must be discovered, developed and activated, combining biblical exposition, prophetic declarations, encouragement and practical application.",
    },
    {
      icon: "compass",
      title: "Her Ministry Assignment",
      body: "Raising people who know God, understand their identity, activate their faith, walk in the supernatural, overcome adversity and become instruments of transformation in their families, communities and generation.",
    },
  ],
  quotes: [
    "You were not created merely to survive; you were created to fulfil divine purpose.",
    "Know God. Discover who you are. Activate what God has placed inside you. Walk in your purpose. Become a blessing to your generation.",
  ],
};

export const sermons: Sermon[] = [
  {
    slug: "the-secret-place",
    title: "The Secret Place",
    speaker: "Prophetess Abena Hackman",
    series: "Foundations",
    date: "2026-08-16",
    duration: "52 min",
    youtubeId: "dQw4w9WgXcQ",
    scripture: "Psalm 91:1–4",
    summary:
      "Why private, consistent prayer is the source of every public breakthrough.",
  },
];

export const events: ChurchEvent[] = [
  {
    slug: "uk-annual-conference",
    title: "UK Annual Conference",
    date: "2027-06-01",
    dateLabel: "Jun 2027",
    time: "To be announced",
    location: "United Kingdom · Venue to be confirmed",
    category: "Conference",
    summary: "Our first UK gathering of prayer, worship, and impartation. Date to be announced.",
    details:
      "Join us for the UK Annual Conference in June 2027. The exact date, venue, and full itinerary will be announced soon, so stay connected for updates.",
  },
  {
    slug: "ghana-annual-residential-conference",
    title: "Ghana Annual Residential Conference 2027",
    date: "2027-08-20",
    endDate: "2027-08-21",
    time: "All day",
    location: "Location to be confirmed",
    category: "Conference",
    summary: "Two days of teaching, worship, and community together, away from the everyday.",
    details:
      "Join us for our Ghana Annual Residential Conference, August 20 to 21, 2027. Full itinerary, venue, and accommodation details will follow closer to the date.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The Prayer Temple didn't just give me a church to attend. It gave me a family that prayed with me until I saw the breakthrough.",
    name: "Adjoa Mensah",
    role: "Founding member",
  },
  {
    quote:
      "Through the Entrepreneur Women's Movement I found the mentorship and courage to finally launch my business on a foundation of faith.",
    name: "Yaa Asantewaa",
    role: "Entrepreneur Women's Movement",
  },
  {
    quote:
      "The teaching here is deep, practical, and Christ-centered. I've grown so much since joining this year.",
    name: "Daniel Ofori",
    role: "Member since 2026",
  },
];
