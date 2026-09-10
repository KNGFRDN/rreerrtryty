const AGENCY_STATS = [
  {
    value: "7+",
    label: "Years of Experience",
    description: "Spearheading high-impact digital PR and brand narratives across Kenya and Pan-Africa since 2019."
  },
  {
    value: "120+",
    label: "Campaigns & Projects",
    description: "Successfully executed national and regional media rollouts, crisis interventions, and digital activations."
  },
  {
    value: "65+",
    label: "Brands & Organizations",
    description: "Trusted by tier-1 African enterprises, venture-backed startups, NGOs, and global institutions."
  },
  {
    value: "24/7",
    label: "Digital Monitoring",
    description: "Real-time social listening, media intelligence, and sentiment tracking across East Africa."
  }
];

const AGENCY_SERVICES = [
  {
    id: "digital-pr",
    title: "Digital Public Relations",
    tagline: "High-authority earned media that amplifies your message across modern channels.",
    shortDesc: "Build online brand authority, secure tier-one digital press, and dominate search real estate with high-value placements.",
    fullDesc: "Digital PR marries traditional journalistic media relations with modern search engine visibility, viral storytelling, and data-backed content syndication. We position African CEOs, founders, and enterprises as industry benchmarks on Kenya's most authoritative news platforms and Pan-African digital publications.",
    deliverables: [
      "Tier-1 digital editorial press placements",
      "Executive thought leadership op-eds",
      "SEO backlink acquisition via authoritative media",
      "Digital press kit & interactive newsroom development",
      "Online press conference management & syndication"
    ],
    benefits: [
      "Immediate credibility boost with customers & investors",
      "Perpetual organic search rankings for branded keywords",
      "Unmatched digital reach beyond print media constraints"
    ],
    iconName: "Globe",
    metric: "3.4M+",
    metricLabel: "Average Monthly Editorial Impressions",
    category: "Reputation & Visibility",
    image: "assets/images/governor-campaign-launch.jpg"
  },
  {
    id: "strategic-communications",
    title: "Strategic Communications",
    tagline: "Purpose-led narratives that align internal missions with external stakeholder trust.",
    shortDesc: "Develop comprehensive communication architectures that connect your organization meaningfully with investors, regulators, and consumers.",
    fullDesc: "We craft strategic messaging frameworks that prevent misunderstandings and maximize influence. From navigating sensitive regulatory reforms in Kenya to launching pivotal ESG initiatives, we ensure your message cuts through noise with clarity and conviction.",
    deliverables: [
      "Institutional narrative & messaging matrix",
      "Crisis communication playbooks & 24hr protocol",
      "Stakeholder mapping & perception audits",
      "C-Suite speechwriting & town hall keynotes",
      "Annual sustainability & investor reports"
    ],
    benefits: [
      "Consistent, fortified narrative across all corporate touchpoints",
      "Proactive crisis immunization protecting long-term brand equity",
      "Aligned stakeholder perceptions that unlock strategic partnerships"
    ],
    iconName: "Compass",
    metric: "98%",
    metricLabel: "Crisis Mitigation Success Rate",
    category: "Corporate Strategy",
    image: "assets/images/governor-team-nairobi.jpg"
  },
  {
    id: "media-relations",
    title: "Media Relations",
    tagline: "Direct lines to East Africa's top editors, journalists, and broadcast producers.",
    shortDesc: "Build enduring, reciprocal relationships with leading newsrooms, television networks, business editors, and independent journalists.",
    fullDesc: "We do not blast cold generic press releases. Governor Digital PR maintains respected, high-trust connections with editors at Nation Media Group, Standard Group, Capital FM, Royal Media Services, CNBC Africa, BBC Africa, TechCabal, and Kenyan Wallstreet. We pitch your stories with journalistic depth and contextual relevance.",
    deliverables: [
      "Curated media pitching & editorial exclusives",
      "Press conference facilitation & broadcast bookings",
      "Journalist familiarization tours & media breakfasts",
      "Media training workshops for spokespersons",
      "Daily clipping & media value equivalent (AVE) reporting"
    ],
    benefits: [
      "Priority coverage during major corporate announcements",
      "Neutralized negative press through rapid editorial access",
      "Regular invitations to primetime business analysis shows"
    ],
    iconName: "Mic",
    metric: "450+",
    metricLabel: "Active Media Contacts Across East Africa",
    category: "Media & Press",
    image: "https://images.pexels.com/photos/33317197/pexels-photo-33317197.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    tagline: "Cultivate engaged communities that advocate for your brand around the clock.",
    shortDesc: "Design, manage, and scale active digital communities on LinkedIn, X (Twitter), Instagram, TikTok, and YouTube with cultural fluency.",
    fullDesc: "African social media moves fast, requiring razor-sharp cultural acumen, humour, and rapid response times. We run social channels for corporate brands and executive leaders with high-taste aesthetics, data-driven content calendars, and interactive community moderation.",
    deliverables: [
      "Omni-channel social strategy & creative art direction",
      "Daily community engagement & 15-minute response SLA",
      "LinkedIn executive personal branding for founders & directors",
      "Motion graphics, carousels, and viral short-form video",
      "Monthly growth analytics & competitive benchmark reports"
    ],
    benefits: [
      "Transformed dormant feeds into dynamic lead-generation engines",
      "Direct pulse on customer sentiment and public mood",
      "Organic advocacy that deflects brand detractors"
    ],
    iconName: "Share2",
    metric: "4.8x",
    metricLabel: "Average Engagement Rate Growth",
    category: "Digital Growth",
    image: "https://images.pexels.com/photos/1181232/pexels-photo-1181232.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    id: "brand-reputation-management",
    title: "Brand Reputation Management",
    tagline: "24/7 digital monitoring, sentiment defense, and executive online presence protection.",
    shortDesc: "Safeguard your organization's integrity against misinformation, coordinated negative campaigns, and digital crises.",
    fullDesc: "A reputation built over decades can face jeopardy in minutes on social platforms. Governor Digital PR deploys sophisticated African media monitoring algorithms to detect simmering issues before they erupt into full-scale public relations emergencies.",
    deliverables: [
      "24/7 AI-assisted social listening & sentiment tracking",
      "Rapid-response crisis war room operations",
      "Executive search engine results page (SERP) cleanup",
      "Wikipedia & digital knowledge panel curation",
      "Counter-misinformation & factual rebuttal distribution"
    ],
    benefits: [
      "Early warning alerts for brand-threatening sentiment shifts",
      "Protected enterprise valuation during delicate transactions",
      "Clean, positive digital footprint on first Google search page"
    ],
    iconName: "ShieldCheck",
    metric: "<15m",
    metricLabel: "Crisis Response Protocol Activation",
    category: "Reputation & Visibility",
    image: "assets/images/governor-hero-african-pr.jpg"
  },
  {
    id: "content-creation",
    title: "Content Creation & Storytelling",
    tagline: "Editorial photography, cinematic video, long-form thought leadership, and digital assets.",
    shortDesc: "Produce compelling, culturally attuned multimedia narratives that capture attention and evoke authentic emotion.",
    fullDesc: "From documentary case studies shot across Kenya's economic corridors to executive podcasts, high-fashion corporate portraits, and bespoke infographics, our creative studio delivers world-class assets that rival global creative firms.",
    deliverables: [
      "Cinematic brand films & corporate documentaries",
      "Commercial photography & executive portraiture",
      "High-impact thought leadership whitepapers & research briefs",
      "Infographics & data visualization for financial reports",
      "Podcast production & audio storytelling formats"
    ],
    benefits: [
      "Bespoke original asset library tailored to African audiences",
      "Standout visual presence across international showcases",
      "Elevated storytelling that commands premium market pricing"
    ],
    iconName: "Sparkles",
    metric: "1,200+",
    metricLabel: "Original Content Assets Produced Annually",
    category: "Creative Studio",
    image: "https://images.pexels.com/photos/8547282/pexels-photo-8547282.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    id: "digital-campaigns",
    title: "Digital Campaigns",
    tagline: "High-energy, measurable campaigns that drive tangible commercial and civic action.",
    shortDesc: "Architect integrated digital blitzes that generate public discourse, boost user acquisition, and move cultural needles.",
    fullDesc: "We design multi-platform digital campaigns integrating media relations, influencer waves, trend jacking, interactive web experiences, and programmatic amplification. Every campaign is tracked against hard conversion targets, not just vanity metrics.",
    deliverables: [
      "Integrated 360-degree digital launch blueprints",
      "Paid media amplification & programmatic retargeting",
      "Hashtag activism & national conversation orchestration",
      "User-generated content (UGC) challenges & competitions",
      "Comprehensive post-campaign attribution & ROI analytics"
    ],
    benefits: [
      "Instant nationwide buzz and sustained trending topics",
      "Measurable inbound enquiries and customer signups",
      "Memorable cultural legacy that cements brand dominance"
    ],
    iconName: "TrendingUp",
    metric: "18M+",
    metricLabel: "Organic Campaign Reach Across Africa",
    category: "Digital Growth",
    image: "https://images.pexels.com/photos/8276671/pexels-photo-8276671.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    id: "influencer-community",
    title: "Influencer & Community Engagement",
    tagline: "Authentic collaborations with Kenya's most credible cultural voices and industry leaders.",
    shortDesc: "Bridge your brand with trusted creators, niche key opinion leaders (KOLs), and grassroot digital communities.",
    fullDesc: "Say goodbye to disconnected celebrity endorsements that ring hollow. We vet creators using forensic audience engagement audits, matching your brand with trusted voices who genuinely influence purchasing, policy, and lifestyle choices across Kenya and East Africa.",
    deliverables: [
      "Forensic creator vetting & audience credibility audits",
      "Contract negotiation, compliance & FTC/CAK disclosures",
      "Creative campaign brief development & co-creation workshops",
      "Micro-influencer advocacy swarms & community roundtables",
      "Influencer relationship management (IRM) long-term retainers"
    ],
    benefits: [
      "Humanized brand narrative delivered by trusted tastemakers",
      "Higher conversion rates compared to generic display ads",
      "Organic peer-to-peer amplification within niche demographics"
    ],
    iconName: "Users",
    metric: "350+",
    metricLabel: "Verified African Creators Network",
    category: "Media & Press",
    image: "https://images.pexels.com/photos/10375954/pexels-photo-10375954.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  }
];

const CASE_STUDIES = [
  {
    id: "safari-fintech-launch",
    title: "Launch of 'LipaBora' Pan-African Cross-Border Remittance",
    client: "LipaBora Financial Technologies",
    industry: "Fintech & Mobile Money",
    category: "PR Campaigns",
    shortResult: "Secured 84 tier-1 press placements and drove 140,000 app downloads in 60 days.",
    image: "assets/images/governor-campaign-launch.jpg",
    overview: "LipaBora was entering Kenya's saturated mobile payments market against established telecom giants. Governor Digital PR built a disruptive media campaign framing LipaBora as the champion of cross-border diaspora remittance with zero hidden fees.",
    challenge: "Overcoming legacy brand loyalty and skepticism regarding new financial tech solutions in East Africa while navigating Central Bank compliance communications.",
    strategy: "Positioned the founder on primetime business news (Citizen TV, CNBC Africa), orchestrated an exclusive data report on East African remittance costs covered by Business Daily, and activated a synchronized digital PR wave.",
    execution: [
      "Exclusive preview briefings with key financial journalists in Nairobi",
      "Live-streamed hybrid press event at Villa Rosa Kempinski Nairobi",
      "Thought-leadership byline in Business Daily and TechCabal",
      "Digital press kit syndicated to 45 Pan-African tech hubs"
    ],
    results: [
      { label: "Tier-1 Media Placements", value: "84+" },
      { label: "Earned Editorial Impressions", value: "12.4M" },
      { label: "First 60-Day App Signups", value: "140K+" },
      { label: "Earned Media Value (AVE)", value: "$320,000" }
    ],
    mediaOutlets: ["Business Daily", "Citizen TV", "CNBC Africa", "Daily Nation", "The Standard", "TechCabal"],
    gallery: [
      "assets/images/governor-campaign-launch.jpg",
      "https://images.pexels.com/photos/8276185/pexels-photo-8276185.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8547282/pexels-photo-8547282.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    ],
    testimonial: {
      quote: "Governor Digital PR gave us the credibility of a legacy financial institution while preserving our agile startup edge. Their media access across Nairobi is unmatched.",
      author: "David Mwangi",
      role: "Managing Director",
      company: "LipaBora Technologies"
    }
  },
  {
    id: "kijani-clean-energy",
    title: "Repositioning Kijani Solar as Kenya's Commercial Solar Benchmark",
    client: "Kijani Energy Africa",
    industry: "Renewable Energy & Climate",
    category: "Corporate Communications",
    shortResult: "Transformed an engineering-heavy brand into the leading voice on Kenya's industrial decarbonization.",
    image: "assets/images/governor-hero-african-pr.jpg",
    overview: "Kijani Energy needed to shift perception from residential solar installations to major industrial and tea-estate solar microgrids across the Rift Valley and Central Kenya.",
    challenge: "Industrial energy decision-makers were skeptical of solar ROI and hesitated to sign long-term Power Purchase Agreements (PPAs).",
    strategy: "Engineered a targeted C-Suite corporate communication agenda focusing on ESG cost savings, factory resilience, and energy sovereignty for Kenyan manufacturers.",
    execution: [
      "Executive interview series with the Kenya Association of Manufacturers (KAM)",
      "High-production video case study showcasing solar retrofits on tea factories",
      "Op-eds placed in Business Daily Kenya and The EastAfrican",
      "Keynote facilitation at the Africa Climate Summit in Nairobi"
    ],
    results: [
      { label: "B2B Commercial Leads", value: "+310%" },
      { label: "Industrial PPAs Signed", value: "18 Plants" },
      { label: "Corporate Stakeholder Trust", value: "94%" },
      { label: "Industry Award Wins", value: "3 National" }
    ],
    mediaOutlets: ["The EastAfrican", "Business Daily", "Capital FM", "KBC Channel 1"],
    gallery: [
      "assets/images/governor-hero-african-pr.jpg",
      "https://images.pexels.com/photos/10375945/pexels-photo-10375945.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8276671/pexels-photo-8276671.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    ],
    testimonial: {
      quote: "Their strategic acumen turned complex engineering specifications into compelling boardroom narratives that won us multimillion-shilling contracts.",
      author: "Eng. Wanjiru Kariuki",
      role: "Chief Executive Officer",
      company: "Kijani Energy Africa"
    }
  },
  {
    id: "nairobi-tech-week",
    title: "Silicon Savannah: Amplifying East Africa's Largest Tech Summit",
    client: "Nairobi Innovation Hub Alliance",
    industry: "Technology & Venture Capital",
    category: "Events",
    shortResult: "Trended #1 on Kenyan X for 3 consecutive days; over 4,500 delegates and 60 global investors convened.",
    image: "assets/images/governor-team-nairobi.jpg",
    overview: "Governor Digital PR was tapped as the exclusive Digital PR & Communications Partner for the 5th Silicon Savannah Innovation Summit at the Sarit Expo Centre.",
    challenge: "Cutting through international noise and securing international venture capitalist attendance alongside local grassroots founders.",
    strategy: "Curated a multi-tier storytelling campaign highlighting the resilience and unit economics of African founders, deploying high-cadence digital content and VIP media press suites.",
    execution: [
      "Dedicated on-site media lounge handling 40 accredited African journalists",
      "Real-time quote cards and video reels published within 10 minutes of session wrap",
      "Orchestrated #SiliconSavannah2024 trending wave across Nairobi",
      "Post-summit digital impact report syndicated to 500 global family offices"
    ],
    results: [
      { label: "Total Summit Delegates", value: "4,600+" },
      { label: "Social Media Impressions", value: "28.5M" },
      { label: "Trending Duration", value: "72 Hours" },
      { label: "Pitch-to-Term-Sheet Deals", value: "$14.2M" }
    ],
    mediaOutlets: ["TechCrunch", "TechCabal", "Kenyan Wallstreet", "Citizen Digital", "Pulse Kenya"],
    gallery: [
      "assets/images/governor-team-nairobi.jpg",
      "https://images.pexels.com/photos/33317197/pexels-photo-33317197.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8547282/pexels-photo-8547282.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    ],
    testimonial: {
      quote: "Governor Digital PR did not just manage press; they engineered the digital heartbeat of the entire summit. Exceptional precision and energy.",
      author: "Kevin Otieno",
      role: "Summit Director",
      company: "Silicon Savannah Alliance"
    }
  },
  {
    id: "afriq-beverages",
    title: "Consumer Cultural Rebrand & Viral Social Rollout",
    client: "Afriq Botanicals Kenya",
    industry: "FMCG & Lifestyle",
    category: "Brand Campaigns",
    shortResult: "Grew social engagement by 480% and boosted supermarket shelf velocity by 65% in 3 months.",
    image: "https://images.pexels.com/photos/7793169/pexels-photo-7793169.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    overview: "Afriq Botanicals launched an organic hibiscus and baobab functional beverage crafted from Kenyan smallholders. Governor Digital PR crafted an authentic, vibrant creative campaign celebrating modern African wellness.",
    challenge: "Competing with massive global carbonated soda brands with 10x marketing budgets.",
    strategy: "Mobilized 25 credible Kenyan culinary, fitness, and lifestyle micro-creators, pairing unboxing storytelling with witty conversational banter on X and Instagram reels.",
    execution: [
      "Bespoke influencer gifting crates with personalized wooden typography",
      "Humorous Kenyan office routine skits illustrating natural afternoon energy boosts",
      "Pop-up tasting activation across prime Nairobi office hubs (Westlands & Upper Hill)",
      "Digital PR feature on value addition in Kenyan agriculture in Daily Nation"
    ],
    results: [
      { label: "Social Reach Increase", value: "+480%" },
      { label: "Retail Out-of-Stock Rate", value: "85%" },
      { label: "UGC Video Creations", value: "1,450+" },
      { label: "Direct-to-Consumer Orders", value: "+210%" }
    ],
    mediaOutlets: ["Pulse Live Kenya", "Daily Nation Lifestyle", "Capital Lifestyle", "Standard Entertainment"],
    gallery: [
      "https://images.pexels.com/photos/7793169/pexels-photo-7793169.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/1181232/pexels-photo-1181232.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/10375954/pexels-photo-10375954.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    ],
    testimonial: {
      quote: "Governor Digital PR's innate feel for Kenyan youth culture turned our beverage from an unknown shelf item into a must-have lifestyle statement.",
      author: "Beatrice Achieng",
      role: "Brand Director",
      company: "Afriq Botanicals"
    }
  },
  {
    id: "taji-real-estate",
    title: "Luxury Residential Pre-Sales & C-Suite Media Campaign",
    client: "Taji Heights Residences Nairobi",
    industry: "Luxury Real Estate",
    category: "Digital Campaigns",
    shortResult: "Achieved 82% pre-construction off-plan sales valued at over KES 1.8 Billion.",
    image: "https://images.pexels.com/photos/20185085/pexels-photo-20185085.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    overview: "An ultra-luxury twin-tower residential development in Westlands, Nairobi needed an elite communications strategy to attract high-net-worth Kenyans and the diaspora.",
    challenge: "Skeptical diaspora buyers worried about project delays and developer reputation in Nairobi's property sector.",
    strategy: "Conducted an architectural documentary series, third-party audited escrow account announcements, and an exclusive private salon tasting for diaspora investors.",
    execution: [
      "Virtual 3D digital walkthrough PR release covered by Property Magazine East Africa",
      "Private media brunch for tier-1 business editors and architecture critics",
      "Targeted digital narrative campaign targeting Kenyans in UK, USA, and GCC",
      "Executive LinkedIn thought leadership by lead architects"
    ],
    results: [
      { label: "Pre-Sales Value", value: "KES 1.8B" },
      { label: "Off-Plan Units Sold", value: "82%" },
      { label: "High-Net-Worth Inquiries", value: "480+" },
      { label: "Diaspora Buyer Share", value: "45%" }
    ],
    mediaOutlets: ["Business Daily", "Property Focus Africa", "The EastAfrican", "Kenyan Wallstreet"],
    gallery: [
      "https://images.pexels.com/photos/20185085/pexels-photo-20185085.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/10375945/pexels-photo-10375945.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8276185/pexels-photo-8276185.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    ],
    testimonial: {
      quote: "They understood that selling luxury real estate isn't about spamming billboards—it's about sculpting undeniable prestige and rock-solid investor trust.",
      author: "Hassan Mohamed",
      role: "Lead Developer",
      company: "Taji Properties Group"
    }
  },
  {
    id: "safari-health-crisis",
    title: "Crisis Intervention & Algorithmic Sentiment Turnaround",
    client: "CarePoint Regional Healthcare",
    industry: "Healthcare & Pharmaceuticals",
    category: "Corporate Communications",
    shortResult: "Shifted online negative sentiment from 78% down to 9% within 72 hours through verified fact distribution.",
    image: "https://images.pexels.com/photos/8276671/pexels-photo-8276671.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    overview: "A viral social media claim alleged medical malpractice at a prominent private medical facility, causing a swift digital backlash and threatening institutional licensing.",
    challenge: "Rapidly de-escalating viral hysteria while honoring medical confidentiality laws and transparent regulatory scrutiny.",
    strategy: "Activated our 24/7 Digital PR War Room, deployed certified clinical timelines, held a televised joint briefing with medical regulators, and direct-engaged community concerns.",
    execution: [
      "Immediate fact-sheet dissemination clarifying forensic facts within 2 hours",
      "Direct outreach to key influencers who unwittingly retweeted unverified claims",
      "Transparent media briefing with independent medical board representatives",
      "Long-term patient safety transparency portal launch"
    ],
    results: [
      { label: "Negative Sentiment", value: "78% → 9%" },
      { label: "Response Window", value: "<45 Mins" },
      { label: "Media Retractions", value: "14 Outlets" },
      { label: "Community Trust Restored", value: "91%" }
    ],
    mediaOutlets: ["Citizen TV", "Standard Digital", "Daily Nation", "Capital News"],
    gallery: [
      "https://images.pexels.com/photos/8276671/pexels-photo-8276671.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "assets/images/governor-campaign-launch.jpg",
      "https://images.pexels.com/photos/8547282/pexels-photo-8547282.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    ],
    testimonial: {
      quote: "When our institution was on the brink of reputational disaster, Governor Digital PR stepped into the storm with calm, surgical strategy. They saved our brand.",
      author: "Dr. Mercy Nduta",
      role: "Chief Medical Officer",
      company: "CarePoint Health"
    }
  }
];

const INSIGHTS = [
  {
    id: "future-of-digital-pr-kenya",
    title: "The Death of the Traditional Press Release: How Digital PR is Conquering Kenya's Media Landscape",
    category: "PR",
    date: "March 15, 2025",
    readTime: "5 min read",
    author: {
      name: "Brian Otieno",
      role: "Principal Strategy Director",
      avatar: "assets/images/governor-hero-african-pr.jpg"
    },
    image: "assets/images/governor-campaign-launch.jpg",
    excerpt: "Journalists in Nairobi receive over 200 press releases daily. Why 95% end in the trash bin, and how data-led digital PR secures top-tier placement every time.",
    content: [
      "For decades, the public relations playbook in Kenya remained virtually static: draft a two-page press release, invite a room of journalists for a 10:00 AM breakfast at a Nairobi hotel, distribute brown envelopes, and pray for a two-paragraph mention on page 14 of the next morning's paper.",
      "That era is permanently over. Today's most influential decision-makers consume news on mobile feeds, LinkedIn feeds, WhatsApp communities, and specialized digital newsletters like Kenyan Wallstreet and TechCabal.",
      "At Governor Digital PR, our data proves that newsrooms no longer hunger for generic company announcements. They demand exclusive data hooks, interactive infographics, verified impact metrics, and executives willing to speak candidly on economic realities.",
      "When we launched our digital-first newsroom methodologies in 2019, our goal was simple: bridge the gap between hard journalistic value and enterprise brand objectives. When you respect the intelligence of Kenyan readers and journalists alike, your earned media impact multiplies exponentially."
    ],
    keyTakeaways: [
      "Modern Kenyan newsrooms prioritize proprietary data and verified trends over corporate self-congratulation.",
      "Search Engine Optimization (SEO) backlinks from news sites provide 10x longer ROI than fleeting print mentions.",
      "A proactive digital press kit speeds up editorial turnaround times from days to hours."
    ],
    tags: ["Digital PR", "Media Relations", "Kenyan Journalism", "Newsrooms"]
  },
  {
    id: "navigating-cancel-culture-nairobi",
    title: "Reputation in the Age of 'Kenya on X': Crisis Communication Playbooks for Modern Executives",
    category: "Communications",
    date: "February 28, 2025",
    readTime: "7 min read",
    author: {
      name: "Faith Wambui",
      role: "Head of Reputation & Crisis",
      avatar: "https://images.pexels.com/photos/1181232/pexels-photo-1181232.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    image: "assets/images/governor-hero-african-pr.jpg",
    excerpt: "Kenyan social media is one of the most vibrant and unforgiving digital public squares on earth. Here is how C-suites prepare before the storm strikes.",
    content: [
      "'Kenya on X' (formerly KOT) possesses an unmatched ability to ignite nationwide discourse within thirty minutes. From interrogating corporate environmental claims to holding public institutions accountable, digital Kenyans are forensic, witty, and relentless.",
      "Too many corporate executives react to digital criticism with arrogant silence, defensive legal threats, or sterile PR boilerplate drafted by disconnected legal teams. In nine out of ten cases, this pours kerosene on the fire.",
      "Crisis management in the modern African context demands three core tenets: radical humility, undeniable speed, and immediate human communication. The first 45 minutes of any trending crisis dictate whether a brand is permanently tarnished or remembered for mature accountability.",
      "Our 24/7 Digital War Room at Governor Digital PR has guided commercial banks, hospital networks, and tech platforms through high-pressure situations by establishing pre-approved response matrixes that address public concerns with genuine empathy and verifiable remediation."
    ],
    keyTakeaways: [
      "The first 45 minutes of a social media crisis establish the public narrative—silence is always interpreted as guilt.",
      "Legal responses must be translated into human, conversational language that respects audience emotions.",
      "Pre-crisis stress testing of corporate vulnerabilities prevents 80% of preventable reputational damage."
    ],
    tags: ["Crisis Communications", "Kenya on X", "Brand Defense", "Reputation"]
  },
  {
    id: "b2b-thought-leadership-linkedin-africa",
    title: "The CEO as the Media House: Why African Founders Must Win on LinkedIn",
    category: "Branding",
    date: "February 12, 2025",
    readTime: "6 min read",
    author: {
      name: "Brian Otieno",
      role: "Principal Strategy Director",
      avatar: "assets/images/governor-hero-african-pr.jpg"
    },
    image: "assets/images/governor-team-nairobi.jpg",
    excerpt: "People trust people, not faceless corporate logos. Discover how executive personal branding drives deals, talent acquisition, and venture capital across Africa.",
    content: [
      "When global venture capitalists or institutional partners explore investments in East Africa, their first stop is not your corporate website—it is the LinkedIn profile and public footprint of the founder and leadership bench.",
      "A founder who communicates with vulnerability, industry foresight, and strategic authority creates an unfair competitive advantage. Every post becomes a business development catalyst, attracting tier-one hires and inbound partnership inquiries without expensive agency outbound costs.",
      "However, executive thought leadership is not about posting motivational quotes. It is about documenting real problems solved in the African market: supply chain logistics, cross-currency trade hurdles, talent mentorship, and technological leapfrogging.",
      "Governor Digital PR's Executive Ghostwriting & Personal PR practice manages the digital presence of some of Nairobi's most respected corporate leaders, preserving their authentic voice while ensuring consistent weekly editorial momentum."
    ],
    keyTakeaways: [
      "Founders with strong LinkedIn footprints raise capital 40% faster than invisible counterparts.",
      "Authentic operational lessons resonate vastly more than sterile corporate announcements.",
      "Executive personal branding protects company valuation during turbulent economic cycles."
    ],
    tags: ["LinkedIn Strategy", "Thought Leadership", "Personal Branding", "Executive PR"]
  },
  {
    id: "measuring-pr-roi-kenya",
    title: "Beyond Advertising Value Equivalency (AVE): How to Actually Measure PR Impact in 2025",
    category: "Kenyan Business",
    date: "January 20, 2025",
    readTime: "4 min read",
    author: {
      name: "Edwin Mutua",
      role: "Lead Analytics & Media Intelligence",
      avatar: "https://images.pexels.com/photos/7793169/pexels-photo-7793169.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    image: "images/sheila.jpeg",
    excerpt: "Advertising Value Equivalency is an outdated, discredited metric. Here is how modern communications leaders calculate true commercial ROI.",
    content: [
      "For thirty years, PR agencies defended their retainers by showing clients 'Advertising Value Equivalency'—a calculation of what a newspaper column would have cost if purchased as a display advertisement. The Barcelona Principles debunked this methodology years ago, yet many regional agencies still rely on it.",
      "At Governor Digital PR, we believe communications should be accountable to real business outcomes: share of voice against competitors, branded search volume spikes, organic backlink authority, inbound partner leads, and sentiment transition.",
      "When we present client reports, our dashboards highlight how an op-ed in Business Daily correlated with a 42% lift in B2B demo requests, or how a digital crisis intervention prevented customer churn during regulatory changes.",
      "When PR connects directly to commercial growth, it transforms from a discretionary marketing expense into an indispensable boardroom investment."
    ],
    keyTakeaways: [
      "AVE is obsolete; focus on Share of Voice, Domain Authority, and Inbound Pipeline attribution.",
      "Track brand search volume in Google Trends immediately following major media appearances.",
      "Executive visibility directly correlates with reduced customer acquisition costs."
    ],
    tags: ["PR Metrics", "ROI Analytics", "Data-Led PR", "Media Measurement"]
  }
];

const TIMELINE = [
  {
    year: "2019",
    title: "The Genesis in Nairobi",
    description: "Governor Digital PR was founded in Nairobi, Kenya, with a bold vision: to disrupt traditional, slow-moving PR agencies with digital-first speed, fearless storytelling, and measurable outcomes.",
    highlight: "First 10 commercial startup and fintech retainers secured."
  },
  {
    year: "2020",
    title: "The Digital Shift Acceleration",
    description: "As the global pandemic shifted the entire world into remote communications, Governor Digital PR pioneered virtual press conferences, remote crisis playbooks, and digital newsrooms for Kenyan corporations.",
    highlight: "Awarded Best Digital Crisis Communications Agency by regional peers."
  },
  {
    year: "2022",
    title: "Pan-African Expansion",
    description: "Extended media syndication networks across East and West Africa (Uganda, Tanzania, Rwanda, Nigeria, Ghana), facilitating cross-border communication for venture-backed unicorns.",
    highlight: "Executed 40+ cross-border digital campaigns in a single fiscal year."
  },
  {
    year: "2023",
    title: "AI Media Intelligence Lab",
    description: "Integrated real-time proprietary social listening and media sentiment tracking algorithms to monitor regional conversations 24/7 in English and Swahili.",
    highlight: "Reduced client crisis intervention response time to under 15 minutes."
  },
  {
    year: "2024 - 2025",
    title: "Benchmark Communications Agency",
    description: "Celebrated 5+ years of transformative influence. Governor Digital PR stands recognized as Kenya's premier boutique agency for visionary organizations who refuse to be ignored.",
    highlight: "Over 120+ executed campaigns and 3.4M+ monthly media impressions."
  }
];

const AGENCY_VALUES = [
  {
    title: "Creativity",
    tag: "Original Storytelling",
    desc: "We reject formulaic templates. Every brand narrative is an original piece of cultural art designed to captivate and provoke thought.",
    color: "from-amber-400 to-amber-500"
  },
  {
    title: "Integrity",
    tag: "Radical Transparency",
    desc: "We uphold truth, editorial ethics, and genuine audience respect. We protect our clients and our journalistic partners with relentless fidelity.",
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "Strategy",
    tag: "Data-Backed Precision",
    desc: "Creativity without strategy is just noise. Every press placement, pitch, and tweet is engineered around commercial and brand milestones.",
    color: "from-purple-600 to-indigo-700"
  },
  {
    title: "Collaboration",
    tag: "True Partnership",
    desc: "We do not act like external vendors. We embed directly with your C-Suite and marketing leads as an agile comms war room.",
    color: "from-amber-400 to-pink-500"
  },
  {
    title: "Impact",
    tag: "Measurable Results",
    desc: "We measure success in brand valuation, stakeholder trust, and audience behavior—not empty vanity clicks.",
    color: "from-pink-500 to-purple-600"
  },
  {
    title: "Innovation",
    tag: "Digital First",
    desc: "From AI social listening to algorithmic trend forecasting, we stay ahead of tomorrow's media dynamics across Africa.",
    color: "from-purple-500 to-amber-400"
  }
];

const AGENCY_TEAM = [
  {
    name: "Felix Obuya",
    role: "Founder & Principal Communications Strategist",
    bio: "Former financial journalist turned digital communications architect with 12+ years shaping narratives for East Africa's leading enterprises.",
    location: "Nairobi, Kenya",
    profile: "https://linkedin.com/",
    avatar: "images/felix.jpeg"
  },
  {
    name: "Elvis Omondi",
    role: "Head of Reputation & Crisis Management",
    bio: "Crisis strategist specializing in regulatory communication, executive media training, and high-stakes reputation defense.",
    location: "Nairobi, Kenya",
    profile: "https://linkedin.com/",
    avatar: "images/elvis.jpeg"
  },
  {
    name: "Sheila Kaleha",
    role: "Director of Media Relations & Press Affairs",
    bio: "Deep rolodex across East African television, print, radio, and digital newsrooms. Veteran broadcast producer.",
    location: "Nairobi, Kenya",
    profile: "https://linkedin.com/",
    avatar: "images/Sheila.jpeg"
  },
  {
    name: "Zahara Nanjala",
    role: "Creative Director & Multimedia Storyteller",
    bio: "Directs visual brand stories, documentary films, and award-winning viral campaign concepts for modern African audiences.",
    location: "Nairobi, Kenya",
    profile: "https://linkedin.com/",
    avatar: "https://images.pexels.com/photos/3861074/pexels-photo-3861074.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  }
];

const MEDIA_LOGOS = [
  "Daily Nation",
  "Business Daily Africa",
  "The Standard",
  "Citizen TV",
  "Capital FM Kenya",
  "CNBC Africa",
  "TechCabal",
  "Kenyan Wallstreet",
  "BBC Africa",
  "Pulse Live Kenya"
];

export { AGENCY_STATS, AGENCY_SERVICES, CASE_STUDIES, INSIGHTS, TIMELINE, AGENCY_VALUES, AGENCY_TEAM, MEDIA_LOGOS };