import type { ChurchEvent, Leader, Testimonial } from "@/types";

export const siteConfig = {
  name: "The Prayer Temple",
  tagline: "A house of prayer for every nation",
  founded: "2026",
  address: "Clock House Community Centre, Defiance Walk, London, SE18 5QL",
  mapsLink: "https://maps.app.goo.gl/edknDF74rhMPP7TBA?g_st=am",
  phone: "+44 7486 015881",
  email: "theprayertemplelondon@gmail.com",
  serviceTimes: [{ label: "Sunday Service", time: "2:00 PM" }],
  social: {
    instagram: "https://www.instagram.com/the.prayertemple/",
    youtube: "https://youtube.com/@ewmmidnightcry-sz1dj",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  },
};

export const gettingHere = {
  buses: ["161", "177", "180", "380"],
  trainStation: "Woolwich Dockyard",
  dlrStation: "Woolwich Arsenal",
};

export const ewmMeeting = {
  schedule: "Mondays, 8:00 PM BST · 7:00 PM GMT",
  zoomLink: "https://us04web.zoom.us/j/2917715520?pwd=MWNTOUx6b3JMenJRL3EzUFIzR09QQT09",
};

export const midnightCryMeeting = {
  schedule: "Mondays, 11:45 PM BST · 10:45 PM GMT",
  zoomLink: ewmMeeting.zoomLink,
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

export const events: ChurchEvent[] = [
  {
    slug: "uk-annual-conference",
    title: "UK Annual Conference",
    date: "2027-06-18",
    endDate: "2027-06-20",
    time: "To be announced",
    location: "Clock House Community Centre, Defiance Walk, London, SE18 5QL",
    category: "Conference",
    summary: "Our first UK gathering of prayer, worship, and impartation.",
    details:
      "Join us for the UK Annual Conference, June 18 to 20, 2027. The full itinerary will be announced soon, so stay connected for updates.",
  },
  {
    slug: "ghana-annual-residential-conference",
    title: "Ghana Annual Residential Conference 2027",
    date: "2027-08-20",
    endDate: "2027-08-22",
    time: "All day",
    location: "New Mercies Retreat Centre",
    category: "Conference",
    summary: "Two days of teaching, worship, and community together, away from the everyday.",
    details:
      "Join us for our Ghana Annual Residential Conference, August 20 to 21, 2027. Full itinerary and accommodation details will follow closer to the date.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The Prayer Temple has provided me the opportunity to grow in my faith in ALMIGHTY GOD through the LORD JESUS CHRIST. I also experience the love of GOD balancing both in-person and online fellowship. The spirit of discipleship is kept alive no matter the distance.",
    name: "Lady Lorraine",
    role: "Member since 2026",
  },
  {
    quote:
      "I am always blessed when I join Midnight Cry, where believers gather to pray as the Spirit of God leads.",
    name: "Dr Benedict Quagraine",
    role: "Midnight Cry",
  },
  {
    quote:
      "I would like to testify to the goodness, protection, and faithfulness of God through the prayers of Midnight Cry. Through these prayers, I experienced God's protection in a powerful and undeniable way. God saved me from an accident that could have had serious consequences. What could have ended in tragedy became a testimony of God's mercy, preservation, and divine protection. I believe the prayers offered during Midnight Cry played an important role in covering my life and standing in the gap for me. Indeed, the Word of God says, "The angel of the LORD encampeth round about them that fear him, and delivereth them" (Psalm 34:7). This experience has strengthened my faith and reminded me of the power of prayer. It has shown me that when we come together to seek God, He hears us. He is able to protect, preserve, deliver, and keep His people from danger. I give all the glory, honour, and praise to God for saving my life. I am grateful to God for Midnight Cry and for every woman who continues to stand in prayer, believing God for one another. This testimony is a reminder that prayer is not in vain. God hears. God answers. God protects. God delivers. Indeed, PRAYER WORKS, AND GOD IS FAITHFUL! To God be all the glory! AMEN! 🔥🙏🏽",
    name: "Prophetess Favour",
    role: "Midnight Cry",
  },
];
