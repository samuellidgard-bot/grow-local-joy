const defaultData = {
  prospects: [
    { company: "Brighton Build & Renovate", area: "Brighton", service: "Extensions", score: 91, status: "Warm Reply", nextAction: "Send audit summary" },
    { company: "Hove Kitchen Studio", area: "Hove", service: "Kitchens", score: 87, status: "Call Booked", nextAction: "Prepare call notes" },
    { company: "Worthing Loft Co.", area: "Worthing", service: "Lofts", score: 84, status: "AI Drafted", nextAction: "Approve email" },
    { company: "Lewes Design Build", area: "Lewes", service: "Full refurb", score: 82, status: "Contacted", nextAction: "Manual Instagram DM" },
    { company: "Shoreham Renovation Ltd", area: "Shoreham", service: "Bathrooms", score: 78, status: "New Prospect", nextAction: "Create AI audit" },
    { company: "Crawley Extensions", area: "Crawley", service: "Extensions", score: 74, status: "Proposal Sent", nextAction: "Follow up proposal" }
  ],
  drafts: [
    { channel: "Email", company: "Shoreham Renovation Ltd", subject: "Quick growth audit for Shoreham Renovation Ltd", status: "Needs review", message: "I noticed your bathroom renovation work around Shoreham. There may be room to turn more local homeowners into quote enquiries through a stronger website journey and Meta ads." },
    { channel: "Instagram", company: "Hove Kitchen Studio", subject: "DM: saw your recent kitchen projects", status: "Approved", message: "Hi, saw your kitchen work around Hove. We help renovation firms turn local homeowners into quote enquiries using website upgrades, Meta ads and lead tracking." },
    { channel: "Email", company: "Crawley Extensions", subject: "More local extension quote requests", status: "Needs edit", message: "I came across your extension work in Crawley and had a couple of ideas for improving your quote-request funnel." }
  ],
  outreachFeedback: [
    { company: "Example draft", channel: "Email", feedback: "Sounds real", lesson: "Keep first touches light, specific and easy to reply to.", createdAt: "Demo" },
    { company: "Example draft", channel: "Instagram", feedback: "Too salesy", lesson: "Reduce pitch language and ask one simple question instead.", createdAt: "Demo" }
  ],
  companyResearch: [
    { company: "First Touch Innovations", hook: "Trial client for Xello's starter foundations process with real renovation/home improvement proof potential.", painPoint: "Online foundations, proof assets and enquiry tracking need to be checked before any paid lead test.", opportunity: "Use the starter project to improve social, Google Business, website basics, content foundations and CRM tracking.", angle: "Treat as a real starter client: audit first, build trust proof, then decide if a small local lead test is ready." },
    { company: "M8 Designs", hook: "Trial client for the starter foundations process; exact service niche and strongest offer need confirming in discovery.", painPoint: "The offer, ideal customer, proof assets and enquiry path need to be made clear before content or ads are planned.", opportunity: "Use the starter project to clarify positioning, profile/portfolio presentation, proof assets and tracking.", angle: "Start with a proper discovery and foundation audit, then build a simple content and visibility plan." },
    { company: "Hove Kitchen Studio", hook: "Positioned around kitchen work in Hove with strong visual project potential.", painPoint: "Could turn more project visitors into quote enquiries.", opportunity: "Lead with website conversion and Meta retargeting.", angle: "Free growth audit focused on quote journey." },
    { company: "Worthing Loft Co.", hook: "Loft conversion firms usually have high-ticket projects and clear local demand.", painPoint: "Trust signals and follow-up speed can decide who gets the quote.", opportunity: "Audit landing page, proof and enquiry flow.", angle: "Free audit for more qualified loft enquiries." }
  ],
  websiteAudits: [
    { company: "Brackenborough Lakes Resort", url: "https://brackenboroughlakesresort.co.uk/lodge-holiday-homes-for-sale/", score: 78, scores: { cta: 72, mobile: 76, trust: 84, form: 68, speed: 74, offer: 92 }, status: "Needs Review", summary: "Strong lifestyle product and proof, but the page should make the main viewing/brochure action clearer and move lead capture higher.", wins: "Clear lodge pricing, strong setting, testimonials, product range and appointment route.", issues: "Too many competing CTAs, enquiry form too low, open day could be more visible, brochure form may fail if JavaScript blocks.", improvements: "Use one main CTA, add a short top form, split lifestyle vs investment buyers, add mobile sticky call/viewing button.", outreachAngle: "Compliment the strength of the lodge offer, then ask if they are trying to increase booked viewings from the page.", createdAt: "Demo" }
  ],
  socialAudits: [
    { company: "Hove Kitchen Studio", platform: "Instagram", score: 74, status: "Practice", strengths: "Visual service with strong before/after potential.", gaps: "Needs clearer profile CTA, more project proof and more local homeowner-facing hooks.", nextAction: "Plan Reels around design reveal, detail close-ups and homeowner problem/solution stories." }
  ],
  contentIdeas: [
    { company: "Hove Kitchen Studio", hook: "See how a tired kitchen becomes the room everyone gathers in.", filming: "Before/after walk-through, close-ups of finishes, owner explaining design choices.", adAngle: "Local Hove kitchen transformations with a clear quote CTA.", talkingPoints: "Craftsmanship, local homes, stress-free process, finished detail." },
    { company: "Worthing Loft Co.", hook: "Turn unused roof space into a proper bedroom, office or studio.", filming: "Drone exterior, stairs reveal, natural light shots, homeowner problem/solution story.", adAngle: "Worthing loft conversions for families needing more space.", talkingPoints: "Space, planning, value, minimal disruption." }
  ],
  contentBriefs: [
    { company: "Hove Kitchen Studio", title: "Kitchen transformation Reel", hook: "From tired kitchen to the room everyone gathers in.", format: "30-second Reel / Meta ad", scenes: "Before shot, detail close-ups, reveal, owner or fitter talking through one design decision.", cta: "Book a free kitchen quote conversation.", source: "Company Research Agent", status: "Needs Review" }
  ],
  xelloSocial: [
    { platform: "Instagram Reels", pillar: "Marketing education", hook: "3 reasons renovation companies lose leads from their website", format: "Talking-head Reel with captions", script: "Open with the problem, show 3 fixes, end with 'I’m testing this with local Brighton renovation firms.'", cta: "Follow for local marketing breakdowns", status: "Planned" },
    { platform: "TikTok", pillar: "Founder journey", hook: "I’m building a Brighton marketing agency from zero", format: "Day-in-the-life / behind the scenes", script: "Show outreach, research, filming kit and why local businesses need better lead tracking.", cta: "Comment 'audit' if you want me to review a local business", status: "Planned" },
    { platform: "Instagram Carousel", pillar: "Proof building", hook: "Why local trades need online foundations before paid ads", format: "6-slide educational carousel", script: "Social setup, Google Business, website basics, tracking, content proof, then ads when ready.", cta: "Save this if you run a local service business", status: "Planned" }
  ],
  socialCalendar: [
    { day: "Monday", platform: "Instagram Reel", focus: "Marketing education", task: "Film one practical tip for renovation companies, using captions and a clear example.", status: "Planned" },
    { day: "Wednesday", platform: "TikTok", focus: "Founder journey", task: "Show behind the scenes of building Xello: prospect research, CRM, filming kit or learning from calls.", status: "Planned" },
    { day: "Friday", platform: "Instagram Reel", focus: "Proof building", task: "Break down a website, advert or lead tracking improvement without naming private client data.", status: "Planned" },
    { day: "Sunday", platform: "Carousel", focus: "Authority", task: "Post a simple checklist or mini-guide local businesses can save.", status: "Planned" }
  ],
  contentPillars: [
    { pillar: "Marketing education", goal: "Show expertise with websites, Meta ads, lead tracking and follow-up systems.", examples: "3 website mistakes, what makes a good local ad, how to track leads properly." },
    { pillar: "Founder journey", goal: "Make Xello feel human, local and trustworthy while the company is still growing.", examples: "Building from Brighton, learning from calls, preparing filming equipment, honest wins and lessons." },
    { pillar: "Behind the scenes", goal: "Show the quality of the process and equipment before you have lots of public case studies.", examples: "Drone setup, filming checklist, CRM workflow, ad planning process." },
    { pillar: "Local proof", goal: "Build credibility around Brighton/Hove renovation marketing without inventing results.", examples: "Local market observations, anonymised audits, before/after creative concepts, test structure." }
  ],
  adExamples: [
    {
      name: "First Choice Design",
      niche: "Renovation Meta ads",
      signal: "163 qualified leads, $99k converted revenue, 14.47x ROAS",
      pattern: "High-quality visual creative plus service-specific homeowner lead forms.",
      learning: "Tie proof footage to lofts, extensions, refurbs and serious enquiry language.",
      source: "https://www.adovateagency.com/case-studies/fcd-casestudy"
    },
    {
      name: "My/Architect",
      niche: "Home renovation paid social",
      signal: "+525% leads generated and first lead within 3 days",
      pattern: "Use the homeowner journey and process positioning, not just pretty visuals.",
      learning: "Captions need to explain the path from idea to active site to enquiry.",
      source: "https://helloseed.co.uk/case-studies/my-architect-scaling-home-renovation-enquiries-with-paid-social/"
    },
    {
      name: "Builder Funnel Remodeler",
      niche: "Kitchen/bath remodel Facebook ads",
      signal: "53 contacts, $19.95 CPL, 3.6% CTR",
      pattern: "Service-specific before/after proof with branded creative and landing-page tracking.",
      learning: "Use before-final-reveal wording until finished First Touch reveals are available.",
      source: "https://info.builderfunnel.com/case-studies/remodeler-generates-5000-clicks-and-53-leads-with-before-after-photo-facebook-ad"
    },
    {
      name: "Excellent Exteriors",
      niche: "Home improvement video lead ad",
      signal: "22k video plays, 42 leads, $15.55 CPL",
      pattern: "Show the service happening, then use a short practical lead form.",
      learning: "Active site footage is useful when it clearly demonstrates real work.",
      source: "https://searchenginesmarketer.com/case-studies/facebook-ads-lead-gen-power-washing/"
    },
    {
      name: "Takkenkamp Groep",
      niche: "Construction/renovation TikTok",
      signal: "88.5% follower growth, below EUR 1 cost per follow, 19% engagement",
      pattern: "Craftsmanship, sustainability and life-on-site content amplified with Spark Ads.",
      learning: "Real site life can build trust before polished finished-project reveals exist.",
      source: "https://ads.tiktok.com/business/en-US/inspiration/takkenkamp-groep-tiktok-success-stories?redirected=1"
    },
    {
      name: "EZiD Singapore",
      niche: "Interior renovation TikTok lead gen",
      signal: "25.7% lower CPA and 4% CVR uplift",
      pattern: "Quote-form journey backed by lookalike/customer signals and conversion optimisation.",
      learning: "Track which hooks create serious homeowner leads, not only watch time.",
      source: "https://ads.tiktok.com/business/en/inspiration/ezid-singapore?redirected=1"
    },
    {
      name: "Studio 32",
      niche: "Remodeling TikTok UGC",
      signal: "550 leads in 3 months and 20:1 ROAS",
      pattern: "UGC remodeling content plus measurement before scaling.",
      learning: "Sonny talking clips should become the trust spine over site footage.",
      source: "https://www.dinametra.com/en/case-study/generacion-de-250-leads-y-roas-de-4-1-con-nueva-estrategia-en-tiktok-para-estudio-32"
    },
    {
      name: "Greenkub",
      niche: "Garden studio Facebook quote post",
      signal: "Public engagement signal: 1.2k comments and 579 shares seen in search result",
      pattern: "Concrete benefit bullets with a direct Get quote route.",
      learning: "Use specific proof and benefits instead of vague quality claims.",
      source: "https://www.facebook.com/greenkub.europe/posts/le-studio-de-jardin-greenkub-sans-permis-de-construire-install%C3%A9-en-5-jours-sans-/733976085430739/"
    },
    {
      name: "Wood Quality",
      niche: "Remodeling Meta lead system",
      signal: "$33 remodeling leads reported",
      pattern: "Simple local remodeling offer with lead quality treated as the main win.",
      learning: "The edit should qualify the project type early instead of chasing cheap broad leads.",
      source: "https://ads.inc/case-studies/wood-quality"
    },
    {
      name: "Renew Tile & Grout",
      niche: "Home improvement Facebook/Instagram leads",
      signal: "$15 CPL and 16x ROAS reported",
      pattern: "Visual proof and human-first messaging for a local booking service.",
      learning: "Close-up process footage can convert when the viewer understands the problem being solved.",
      source: "https://soudcoh.com/case-study/renew-tile-grout"
    },
    {
      name: "Leads.io GreenMatch",
      niche: "TikTok quote lead generation",
      signal: "1,000+ leads, 5.06% conversion rate, 35% qualification rate",
      pattern: "Storytelling, trend fit and form/CRO testing for quote-style lead generation.",
      learning: "Reference ads should teach the editor to judge qualification rate, not only lead count.",
      source: "https://ads.tiktok.com/business/en-US/inspiration/leads-io-tiktok-succes-stories"
    },
    {
      name: "SuCo Home Windows",
      niche: "TikTok home services lead gen",
      signal: "1,615 new leads and 37% lower CPL",
      pattern: "TikTok-first creative with hyperlocal messaging and zip-code targeting.",
      learning: "First Touch edits should mention service area and homeowner context when possible.",
      source: "https://ads.tiktok.com/business/en/inspiration/suco-finds-new-professional-servivces-customers-with-zip-code-targeting?redirected=1"
    },
    {
      name: "TeknoStep",
      niche: "Home products TikTok lead generation",
      signal: "2,600 qualified leads and nearly 29% CTR",
      pattern: "Natural product/service content plus lead forms to learn what buyers actually want.",
      learning: "Every First Touch edit should teach the CRM which service or project stage viewers respond to.",
      source: "https://ads.tiktok.com/business/en-US/inspiration/caso-de-exito-TikTok-TeknoStep-Smart%2B_smb_pymes"
    },
    {
      name: "Granny Flats WA",
      niche: "Construction TikTok Smart+ lead generation",
      signal: "76% lower CPA, 20% higher CVR and 6x impressions",
      pattern: "Quality story-led videos combined with high creative volume.",
      learning: "Train quality first, then create variants once the story format is proven.",
      source: "https://ads.tiktok.com/business/library/AUNZ_TakeItToTikTok_Proserve_Playbook.pdf"
    },
    {
      name: "A+ Construction",
      niche: "Home renovation paid ads",
      signal: "+95% total conversions and 48% lower CPA",
      pattern: "Creative strategy, landing page quality and audience testing worked together.",
      learning: "A good reel is only one part of the funnel; the CTA and landing route must match the promise.",
      source: "https://lineardesign.com/case-studies/a-construction/"
    },
    {
      name: "Triadex Horsepower Brands",
      niche: "Multi-location home services",
      signal: "1,844 verified leads and $1.55m estimated pipeline value",
      pattern: "Local service verticals used paid media, GBP and tracked lead value together.",
      learning: "Train editors to think about pipeline value and booked jobs, not isolated views.",
      source: "https://triadexservices.com/hvac-marketing-services/"
    },
    {
      name: "Profit Roofing Hail Funnel",
      niche: "Roofing Facebook lead funnel",
      signal: "50 quality leads, $30 average CPL and 40% conversion rate reported",
      pattern: "Urgent local problem, weather/event context and a clear inspection route.",
      learning: "When there is a real trigger, lead with the homeowner problem before the company name.",
      source: "https://profitroofingsystems.com/case-study/facebook-ads/facebook-ads-roofing-contractor-case-study/"
    },
    {
      name: "Service Allies Bath Remodel",
      niche: "Bathroom remodeling Facebook leads",
      signal: "$173k in sales from bath-remodel leads reported",
      pattern: "Specific project-type ads and exclusive leads owned by the contractor.",
      learning: "Specificity beats general builder messaging: loft, extension, refurb, bathroom, kitchen.",
      source: "https://www.serviceallies.com/bath-remodeling-leads"
    },
    {
      name: "Greenlane RenoFi",
      niche: "Home renovation paid social lead quality",
      signal: "+113% leads, +137% opportunities, 30% lower CPL and 35% fewer unwanted leads",
      pattern: "Audience restructure, first-party data, funnel-stage creative and lead-quality exclusions.",
      learning: "The editor must help repel poor-fit leads as much as it attracts good-fit ones.",
      source: "https://www.greenlanemarketing.com/case-studies/paid-social-audience-restructure-doubled-mqls-and-reduced-cpl-by-30"
    },
    {
      name: "Construction Lead Benchmarks",
      niche: "Construction Facebook lead ads",
      signal: "Home and home improvement benchmark listed at $41.26 CPL",
      pattern: "Raw CPL only matters when linked to lead value, follow-up speed and project margin.",
      learning: "Score ads against likely job value and lead quality, not just cheap lead volume.",
      source: "https://admanage.ai/blog/facebook-ads-for-construction-companies"
    },
    {
      name: "Home Services 2026 Benchmarks",
      niche: "Contractor Facebook lead ads",
      signal: "Facebook lead ads reported at 7.72% conversion rate and $27.66 CPL benchmark",
      pattern: "Lead ads can work when tracking and follow-up are in place.",
      learning: "No First Touch edit is ready for paid testing unless the enquiry route is clear.",
      source: "https://pipelineon.com/blog/facebook-ads-home-service/"
    },
    {
      name: "Roofing Creative Guide",
      niche: "Roofing/home service creative",
      signal: "Guide benchmark suggests 3-7% CTR on video content",
      pattern: "Educational problem-led video helps homeowners before they request a quote.",
      learning: "First Touch videos should teach one useful thing, not only show pretty site clips.",
      source: "https://ppcinfo.com/en/articles/facebook-ads-roofing-2024-guide"
    },
    {
      name: "CyberOptik Roofing Campaign",
      niche: "Roofing Facebook campaign analysis",
      signal: "$120k return from $650 ad investment and 50 leads cited from source case study",
      pattern: "Real project visuals, local targeting and a clear offer beat stock-looking ads.",
      learning: "Use First Touch's real project footage as the trust asset; avoid anything that feels generic.",
      source: "https://www.cyberoptik.net/blog/roofing-business-facebook-ads/"
    }
  ],
  firstTouchProduction: [
    { stage: "Shoot mission", detail: "Build a proof library, not just adverts: profile proof, website proof, Google photos, architect referral proof and future gated lead-test footage.", checklist: "Minimum: 70 usable vertical clips, 20 still photos, 5 owner talking clips, 3 review snippets and 3 project notes." },
    { stage: "Priority services", detail: "Lead the shoot around loft conversions, extensions and full refurbs across Brighton/Hove/Sussex.", checklist: "Capture larger-project proof first; keep smaller jobs only as finish-quality or referral proof." },
    { stage: "Must-have proof", detail: "Film finished wide reveals, close finish details, before/during/after sequences, process clips, clean site care and local context.", checklist: "Tag every clip after the shoot as hook, trust, process, detail, before-after, CTA or review." },
    { stage: "Sonny trust clips", detail: "Record Sonny answering what work he wants more of, how he communicates, what homeowners worry about and why architects can trust First Touch.", checklist: "Keep answers natural and short; redo once in a cleaner one-sentence version if needed." },
    { stage: "Contact-route clips", detail: "Capture call/text/WhatsApp CTA lines for homeowners planning lofts, extensions or refurbs.", checklist: "Get one clean CTA clip before leaving site." },
    { stage: "Proof collection", detail: "Ask for original/high-res photos, videos, review screenshots and project notes while you are with Sonny.", checklist: "Collect or request 3 project examples, 3 reviews and permission notes for anything filmed in a client home." },
    { stage: "First edit batch", detail: "After the shoot, sort assets, pick the 10 strongest clips/photos, create one pinned proof post, one review/proof post and one quote-route post.", checklist: "Do not launch ads until proof, enquiry route, tracker and readiness review are complete." }
  ],
  firstTouchAdAngles: [
    { title: "Pinned Profile Proof", hook: "Planning a loft, extension or refurb around Brighton/Hove?", structure: "Best finished shot, Sonny trust line, process/detail proof, clear WhatsApp CTA.", cta: "Call or WhatsApp First Touch to talk through your project." },
    { title: "Wrong Builder Fear", hook: "Worried about choosing the wrong builder?", structure: "Owner trust clip, tidy process, review proof, finished result.", cta: "Ask First Touch about your renovation project." },
    { title: "Quote Route Explainer", hook: "What should you send before asking for a renovation quote?", structure: "Sonny answer, examples of drawings/photos, phone/WhatsApp CTA.", cta: "Send project details, photos and timing by WhatsApp." },
    { title: "Architect Referral Proof", hook: "A local build team architects can safely recommend.", structure: "Project proof, communication answer, detail/process shots, referral CTA.", cta: "Architects can call or WhatsApp to discuss a client project." },
    { title: "Before/After Proof", hook: "From unused space to proper living space.", structure: "Before or during shot, transition, finished reveal, detail shots.", cta: "Thinking about a bigger renovation? Send an enquiry." },
    { title: "Finish Quality Reel", hook: "Small details that make a renovation feel finished.", structure: "Close-ups of clean finishes, checking details, final reveal.", cta: "Message First Touch for lofts, extensions and refurbs." },
    { title: "Timeframes And Hidden Costs", hook: "What affects the timeframe or cost on a bigger renovation?", structure: "Sonny answer, process clips, project proof, calm CTA.", cta: "Talk through the project early so the next step is clear." },
    { title: "Google Business Photo Set", hook: "Recent project proof around Brighton and Hove.", structure: "Best still photos, local service caption, phone/website route.", cta: "Call First Touch Innovations for local renovation enquiries." }
  ],
  firstTouchMetaPlan: [
    { area: "Campaign objective", instruction: "Use Leads first because it is simple to test and track.", status: "Planned" },
    { area: "Budget", instruction: "Start with GBP 10-20/day for 7-14 days. First Touch pays ad spend through their own Meta account.", status: "To confirm" },
    { area: "Campaign structure", instruction: "One campaign, one local ad set, three adverts first: Local Trust, Problem/Solution and Before/After.", status: "Draft" },
    { area: "Location", instruction: "Brighton, Hove, Worthing, Lewes, Shoreham and nearby areas only if relevant.", status: "Draft" },
    { area: "Lead form", instruction: "Name, phone, email, postcode/area, work interested in, when they want to start.", status: "Draft" },
    { area: "Success tracking", instruction: "Track spend, leads, cost per lead, best ad, lead quality, replies, calls booked and quotes requested.", status: "Ready" }
  ],
  firstTouchLearningPlan: [
    { day: "Before shoot", focus: "Confirm location, permission boundaries, kit, Sonny questions and asset request list.", output: "Shoot-day checklist ready; phone/WhatsApp bio copy ready to show Sonny." },
    { day: "Shoot day", focus: "Capture proof library first, then Sonny trust clips, process clips, CTA clips and review/project notes.", output: "70+ clips, 20 photos, 5 talking clips, 3 reviews/project notes requested or captured." },
    { day: "Same day backup", focus: "Back up files and separate unusable/private clips from usable proof.", output: "Raw asset safety copy and first quick shortlist." },
    { day: "Days 1-2 after", focus: "Sort into proof folders and tag assets by hook/trust/process/detail/before-after/CTA/review.", output: "Proof library organised; CRM proof intake can advance." },
    { day: "Days 3-5 after", focus: "Create starter proof content before any ad setup.", output: "Pinned proof post, review/proof post, quote-route post and Google Business photo shortlist." },
    { day: "After foundations review", focus: "Only then review future lead-test creative angles.", output: "Gated Meta test decision based on proof, enquiry route and tracker readiness." }
  ],
  firstTouchCaseStudy: [
    { section: "Starting point", prompt: "Document their current website/social presence, content they already have and what work they want more of." },
    { section: "What Xello did", prompt: "Planned one local lead test, filmed real content, created multiple advert versions, launched a small Meta campaign and tracked the result." },
    { section: "Creative produced", prompt: "List each ad version, the hook used and what footage made it strong." },
    { section: "Results", prompt: "Only use real numbers: test length, ad spend, leads, cost per lead, best advert and lead quality." },
    { section: "Learning", prompt: "Record what homeowners responded to, what needs improving and whether the offer is worth scaling." }
  ],
  outreachTraining: [
    { rule: "First-touch opener", detail: "The first message should start a conversation: one real observation, one light compliment, one very brief line explaining that Xello helps local renovation companies improve online presence and enquiries, then one simple question.", owner: "Outreach Writer" },
    { rule: "Voice", detail: "Write like Sam: direct, friendly, local and human. No corporate agency fluff, no long pitch, no pressure.", owner: "Outreach Writer" },
    { rule: "Personalisation", detail: "Use the company research hook before writing. Mention one specific observation when available, but keep it natural and short.", owner: "Company Research Agent" },
    { rule: "Cold CTA", detail: "Ask a low-friction question or offer a quick chat only if it feels natural. Do not explain the whole offer in the first touch.", owner: "Sales" },
    { rule: "Starter Offer First", detail: "After they reply, explain the starter foundations offer first: social setup, Google Business, website basics, tracking and content foundations.", owner: "Sales" },
    { rule: "Lead Test Timing", detail: "Only offer the 14-day local lead test once the company has enough trust proof and online foundations to make paid traffic useful.", owner: "Sales" },
    { rule: "Trial Boundary", detail: "The company covers Meta ad spend. Never say Xello covers ad spend. The test is capped and does not include unlimited edits, full management or website rebuild work.", owner: "Operations" },
    { rule: "Retainer Timing", detail: "Only discuss the full retainer after starter work or a lead test has shown enough value, trust or clear learning.", owner: "Sales" },
    { rule: "Compliance", detail: "No fake results, fake case studies, guaranteed outcomes or automatic sending.", owner: "Xello" }
  ],
  replies: [
    { company: "Hove Kitchen Studio", channel: "Email", type: "Warm question", summary: "Thanks Sam, appreciate that. Most of our work is referrals at the moment but we would like more consistent website or Instagram enquiries. What did you have in mind?", nextAction: "Explain starter foundations and ask for 10-minute call", status: "Warm Reply", createdAt: "Demo" },
    { company: "Brighton Build & Renovate", channel: "Instagram DM", type: "Interested", summary: "Cheers Sam. Instagram brings a few people in but nothing consistent. What would the process actually involve?", nextAction: "Explain starter foundations and ask for 10-minute call", status: "Follow Up", createdAt: "Demo" }
  ],
  replyResponses: [
    { company: "Hove Kitchen Studio", channel: "Email", type: "Interested", status: "Needs review", message: "Thanks for getting back to me. I’d usually start by getting the online foundations in order first: social profiles, Google Business, website/CTA basics, tracking and a simple content plan. Then, if the foundations are strong enough, we can look at a small paid lead test afterwards. Would you be open to a quick 10-minute call this week so I can explain what I’d check?", nextAction: "Ask for 10-minute call" },
    { company: "Brighton Build & Renovate", channel: "Instagram DM", type: "Warm question", status: "Needs review", message: "Yes, exactly. I’d keep it simple first and look at the foundations: whether the socials, Google Business profile, website and enquiry route make the company look trustworthy enough before spending money on ads. If it looks ready, the next step could be a small local lead test. Want to jump on a quick 10-minute call and I’ll explain it?", nextAction: "Send if approved" }
  ],
  calls: [
    { company: "Hove Kitchen Studio", contact: "Owner", date: "Next Tuesday", type: "Growth audit", outcome: "Booked", nextStep: "Prepare website and Meta audit notes", value: 1500, status: "Call Booked" }
  ],
  clients: [
    { company: "First Touch Innovations", retainer: "Starter foundations trial", status: "Trial client", note: "Treat as a real starter foundations client: research, audit, setup plan, content base and readiness decision before any paid test." },
    { company: "M8 Designs", retainer: "Starter foundations trial", status: "Trial client", note: "Treat as a real starter foundations client. Confirm niche, best services, proof assets and current online setup during discovery." },
    { company: "Client delivery checklist", retainer: "Template", status: "Ready", note: "Meta access, website access, service areas, budget, lead tracking." },
    { company: "Reporting cadence", retainer: "Weekly", status: "Ready", note: "Leads, CPL, booked quotes, follow-up speed, next tests." }
  ],
  clientOwnerResponses: {
    "First Touch Innovations": {
      raw: "Owner transcript summary: First Touch wants more loft conversions, extensions and full refurbs. The aim is fewer, higher-value projects rather than lots of smaller low-value jobs. Smaller jobs are still worth taking when they are profitable or can lead to referrals and future larger work. Best enquiry route is direct phone, text or WhatsApp. The owner personally replies to enquiries, with response time depending on job size and information needed, sometimes up to around a week for bigger jobs. They have lots of photos, videos and 5-star reviews available. Main customer worries are timeframes and hidden costs, especially when project changes happen during the job. A key growth route is building relationships with architects, because one strong architect relationship can become a long-term stream of larger projects.",
      updatedAt: "05/05/2026, 16:55",
      summary: {
        bestServices: "Priority projects: loft conversions, extensions and full refurbs. The commercial goal is fewer higher-value projects, such as several larger jobs around GBP 100k, instead of many smaller GBP 10k jobs.",
        avoidJobs: "No job type is automatically ruled out. Smaller jobs can still be profitable and can create referrals or future bigger work, so the CRM should filter by value, fit and relationship potential rather than dismissing all small jobs.",
        enquiryRoute: "Best route: direct phone call, text or WhatsApp. The owner handles enquiries personally and response time depends on job size and how much information needs gathering, sometimes around a week for bigger projects.",
        proofAssets: "Strong proof available: lots of project photos, videos and 5-star reviews. Use the most detailed reviews and strongest project footage as trust assets.",
        starterPriorities: "Position the business around loft conversions, extensions and full refurbs. Organise the proof library, tighten enquiry/follow-up expectations, create content around timeframes and cost clarity, and build a relationship-led route for architect referrals.",
        leadTestAngle: "Later lead test angle: larger local renovation enquiries for loft conversions, extensions and full refurbs around Brighton/Hove. Paid ads should stay gated until the proof library, enquiry route and tracking are ready."
      }
    },
    "M8 Designs": {
      raw: "Owner transcript summary: M8 Designs sells full construction and home improvement project delivery, especially new builds and extensions, with bathrooms, rendering, plastering, painting/decorating and related trades as supporting services. The strongest fit is a start-to-finish project where M8 can control the site and manage the process from the beginning to the end. Ideal customers are mainly private homeowners, with landlords, businesses and designers also possible. They would rather avoid working as a subcontractor for other builders because they want control over methods, standards and the site. Best projects are proper projects with enough time and value behind them, not small handyman jobs. New builds, extensions and bathrooms can be profitable when priced and delivered well. Good job fit also depends on practical access: parking, material drop-off, storage and site security matter. Difficult access, city-centre parking problems and high-rise flat jobs are less attractive. Best enquiry routes are phone and email, with both available through TikTok bio and the website contact page. M8 has lots of website photos but may need to organise higher-quality image files into a folder. They are not focused on Google Business right now and currently see the website, portfolio, contact page and word of mouth as more important. Website reviews may be added manually. The owner was unsure what would make the starter project useful, so the next step should be explaining how the process helps clarify offer, improve profile, strengthen content and generate better enquiries.",
      updatedAt: "05/05/2026, 18:22",
      summary: {
        bestServices: "Priority services: new builds and extensions, with bathrooms, rendering, plastering and finishing trades as supporting services. The strongest offer is a start-to-finish project where M8 controls the process from beginning to end.",
        avoidJobs: "Avoid promoting small handyman jobs, tiny repair work, difficult-access jobs, high-rise flat work, heavy city-centre parking situations and subcontractor work for other builders where M8 loses control over site standards and methods.",
        enquiryRoute: "Best enquiry routes: phone and email. These are already available through the TikTok bio and website contact page, so the starter work should make those routes clearer and easier to trust.",
        proofAssets: "Proof exists on the website through project photos, but the owner may need to send a cleaner high-quality folder. Build a proof library around new builds, extensions, bathrooms, rendering and start-to-finish project delivery.",
        starterPriorities: "Clarify the core offer around new builds and extensions, make the website/contact route feel more premium, organise high-quality portfolio assets, explain why M8 is best for full-site control, and decide whether Google Business is worth setting up later.",
        leadTestAngle: "Later lead test angle: larger homeowner enquiries for new builds and extensions around Brighton/Hove, with supporting content showing complete project delivery. Keep paid ads gated until the offer, proof assets, enquiry route and tracking are ready."
      }
    }
  },
  clientAnalyses: [
    {
      company: "First Touch Innovations",
      viewId: "client-first-touch",
      status: "Starter foundations trial",
      relationship: "Mate / trial client",
      offerStage: "Starter foundations",
      serviceCategory: "Home renovation / home improvement services",
      area: "Brighton, Hove and nearby Sussex areas",
      researchStatus: "Company Research Agent sheet ready",
      objective: "Use the starter offer exactly as if this were a paying client: understand the business, improve online trust, create content foundations and decide whether a 14-day lead test is actually ready.",
      identityCheck: {
        confidence: "Needs evidence",
        humanStatus: "Sam to confirm",
        logoStatus: "Logo supplied by Sam",
        decisionRule: "Only treat a profile as confirmed when the name, location/service fit, logo or visual brand, and at least one contact detail all line up.",
        evidence: [
          { signal: "Business name", expected: "First Touch Innovations", found: "To confirm from website/social/Google results", status: "Missing" },
          { signal: "Logo / visual brand", expected: "Use official website logo or known profile image as reference", found: "First Touch website logo found", status: "Likely" },
          { signal: "Location and service fit", expected: "Brighton/Hove/Sussex home renovation or home improvement", found: "Expected from trial context, needs public-source confirmation", status: "Likely" },
          { signal: "Website or portfolio", expected: "Official domain controlled by the business", found: "Not added yet", status: "Missing" },
          { signal: "Social profiles", expected: "Same name/logo plus matching services or contact details", found: "Not audited yet", status: "Missing" },
          { signal: "Google Business", expected: "Same name/location/category with matching photos/reviews/contact", found: "Google panel screenshot: 5.0 rating, 7 reviews, contractor category, address and phone match", status: "Verified from screenshot" }
        ],
        agentRules: [
          "Use logo matching as supporting evidence, not the only proof.",
          "If only the name matches, mark it as Needs human check.",
          "If name, location, service, logo and contact detail match, mark it as Confirmed match.",
          "If any signal conflicts, pause the research and ask Sam before using the data."
        ]
      },
      icp: [
        { label: "Best-fit customer", value: "Local homeowners planning renovation, repair, upgrade or improvement work who want a trustworthy local team and clear communication before requesting a quote." },
        { label: "Buyer trigger", value: "A room, property or project now feels dated, broken, unfinished or too small, and the homeowner is starting to compare local options." },
        { label: "Main worries", value: "Choosing the wrong contractor, unclear price, disruption at home, poor communication, unreliable timelines and not knowing whether the team is genuinely trustworthy." },
        { label: "Trust proof needed", value: "Finished project photos, team/process clips, before-and-after examples, customer comments, service areas, clear quote route and visible local presence." },
        { label: "Avoid for now", value: "People wanting instant bargain work, unrealistic deadlines, no budget clarity, or projects outside the company capacity and service area." }
      ],
      businessAnalysis: [
        { label: "Positioning angle", value: "A local, trustworthy home improvement team that can show real workmanship and help homeowners feel safer before they enquire." },
        { label: "Likely growth gap", value: "The business needs stronger visible proof, clearer enquiry routes and consistent content foundations before paid traffic would be useful." },
        { label: "Starter offer focus", value: "Social profile cleanup, Google Business improvements, website/enquiry basics, proof asset list, CRM lead tracking and a simple content plan." },
        { label: "Possible offer two", value: "Only after foundations are ready: one local lead test using real project footage, three vertical adverts, a Meta lead form and client-paid ad spend." }
      ],
      foundations: [
        { area: "Social profiles", currentState: "Needs real audit", starterAction: "Check Instagram, Facebook, TikTok and YouTube Shorts presence; improve bio, CTA, highlights and proof posts.", status: "To audit" },
        { area: "Google Business", currentState: "Profile found: 5.0 rating, 7 reviews, contractor in Brighton and Hove, phone and address visible.", starterAction: "Check categories, service areas, photos, review replies, quote/contact route and recent activity.", status: "Found - audit next" },
        { area: "Website/enquiry journey", currentState: "Needs real audit", starterAction: "Check whether the website has clear services, project proof, call/quote CTA, mobile layout and form tracking.", status: "To audit" },
        { area: "Tracking", currentState: "Not confirmed", starterAction: "Create a lead source field, call notes, quote status and follow-up owner inside the CRM.", status: "Build now" },
        { area: "Content proof", currentState: "Trial content planned", starterAction: "Collect finished work, process shots, team clips, FAQs, service areas and homeowner objections.", status: "Planned" }
      ],
      foundationAudit: {
        score: 72,
        status: "Strategy clarified - optimise before ads",
        summary: "First Touch has the important visibility base and the owner has now confirmed the commercial direction: loft conversions, extensions and full refurbs, with architect relationships as a serious growth route. The starter work should now package proof, tighten the WhatsApp/phone enquiry route, add tracking and position the business around bigger renovation projects before any 14-day lead test.",
        lastRun: "AI owner-response audit",
        sources: "Official website, official website Instagram link, Sam-supplied TikTok, Sam Google screenshot, owner WhatsApp transcript",
        rows: [
          { area: "Identity and trust", agent: "Company Research Agent", score: 82, status: "Strong base", finding: "Business name, local contractor positioning, website, social handles and Google listing all point to the same Brighton/Hove business.", recommendation: "Confirm logo/profile image with owner and keep one consistent visual identity across website, Instagram, TikTok and Google." },
          { area: "Website and enquiry route", agent: "Website Audit Agent", score: 58, status: "Needs optimisation", finding: "Website exists with Home, Work and Contact routes plus Sussex construction/carpentry positioning, but the visible copy is broad and the enquiry flow still needs checking.", recommendation: "Add clearer high-value services, stronger quote CTA, phone/WhatsApp path, proof sections, and basic tracking for form/call/social enquiries." },
          { area: "Google Business Profile", agent: "Local Visibility Agent", score: 74, status: "Good base", finding: "Google panel shows contractor category, 5.0 rating, 7 reviews, address, phone and opening status.", recommendation: "Audit services, service areas, photos, review replies, posts, quote link and UTM/tracking route. Add fresh project photos weekly if possible." },
          { area: "Social profiles", agent: "Social Audit Agent", score: 62, status: "Accounts found", finding: "Instagram is linked from the website and TikTok was supplied by Sam. Content quality, bio clarity, highlights and CTA still need manual review.", recommendation: "Make bio say what they do, where they work and how to enquire. Pin best proof, add before/after posts and reuse project footage across Reels/TikTok." },
          { area: "Proof and content assets", agent: "Content Creation Agent", score: 72, status: "Assets available", finding: "The owner confirmed lots of photos, videos and 5-star reviews are available. The gap is organisation and choosing the strongest proof for bigger projects.", recommendation: "Build a proof library around lofts, extensions, refurbs, detailed reviews, timeframe clarity and no-hidden-cost messaging." },
          { area: "Lead tracking and follow-up", agent: "Tracking Agent", score: 42, status: "Needs setup", finding: "The owner handles enquiries personally through phone, text or WhatsApp, but lead source, project value, reply time and quote stage are not tracked in the CRM yet.", recommendation: "Track source, project type, estimated value, architect/referral source, response time, quote status and next follow-up." }
        ],
        priorities: [
          "Position the business around loft conversions, extensions and full refurbs.",
          "Create a proof library from the strongest photos, videos and 5-star reviews.",
          "Build an architect-referral proof pack for larger project relationships.",
          "Tighten the phone/text/WhatsApp enquiry route and response expectations.",
          "Create content that answers timeframe and hidden-cost worries.",
          "Add lead tracking before considering any paid test."
        ]
      },
      competitorBenchmark: {
        status: "Public competitor scan complete",
        currentScore: 68,
        competitorAverage: "79%",
        bestCompetitor: "Hove Renovations - 84%",
        targetScore: "78%+ before paid lead test",
        summary: "Public scan compared First Touch against 3 Brighton/Hove renovation and home improvement competitors. Competitors with clearer service pages, project proof, stronger enquiry routes and more complete trust signals create the benchmark First Touch needs to catch before paid traffic.",
        competitors: [
          { name: "Hove Renovations", score: 84, source: "https://hoverenovations.com/", fit: "Direct local renovation/building competitor", strengths: "Design-led positioning, clear service categories, selected projects, FMB trust signal, consultation CTA and detailed FAQs.", gapToClient: "First Touch needs clearer high-value service pages, stronger project proof organisation and a tighter quote journey." },
          { name: "Martyr Group", score: 82, source: "https://martyr-group.co.uk/brighton-sussex", fit: "Premium Brighton/Sussex construction, renovation and carpentry competitor", strengths: "Premium positioning, renovation/carpentry service page, high-spec project language, FMB-accredited trust signal and clear service coverage.", gapToClient: "First Touch can borrow the premium proof structure: high-value project types, trust badges, project delivery language and stronger finish-quality proof." },
          { name: "Complete Home Improvements", score: 70, source: "https://complete-homeimprovements.com/", fit: "Local carpentry/building/home improvement competitor", strengths: "Broad local service menu, quote CTA, contact details, Facebook/Instagram links and service categories covering renovations/installations.", gapToClient: "First Touch already has stronger Google review proof, but should make its services and proof library easier to scan." }
        ],
        rows: [
          { area: "Website clarity", current: "Website exists with Home, Work and Contact routes, but high-value services and quote journey need checking.", competitorCheck: "Hove Renovations and Martyr Group explain renovation/carpentry services, project types and consultation routes more clearly.", pitchUse: "Show why clearer service pages can turn more visitors into quote enquiries." },
          { area: "Google Business", current: "5.0 rating from 7 reviews, contractor category, address and phone visible.", competitorCheck: "Manual Google/Maps check still needed for competitor review counts, photos and categories.", pitchUse: "Explain whether First Touch needs more photos, reviews or Google activity to look equally trusted." },
          { area: "Project proof", current: "Proof exists, but usable before/after library is not organised yet.", competitorCheck: "Hove Renovations and Martyr Group show selected/recent projects as part of the website journey.", pitchUse: "Turn missing proof into a simple content and website asset list." },
          { area: "Social presence", current: "Instagram and TikTok found; content quality, bio and pinned proof still need manual review.", competitorCheck: "Complete Home Improvements exposes Facebook/Instagram links; other competitor social quality needs manual platform review.", pitchUse: "Show what a stronger profile needs before ads send people there." },
          { area: "Enquiry route", current: "Phone/website/social routes exist, but tracking and fastest route need confirming.", competitorCheck: "Competitors use quote/contact/consultation CTAs more prominently on key pages.", pitchUse: "Recommend the simplest enquiry path and tracking setup." },
          { area: "Tracking readiness", current: "Lead-source and quote-stage tracking not confirmed.", competitorCheck: "Public sites rarely show tracking. This remains Xello's internal advantage.", pitchUse: "Explain why Xello tracks enquiries before recommending paid traffic." }
        ],
        nextSteps: [
          "Manually check Google/Maps review counts and photos for the 3 competitors.",
          "Review competitor Instagram/TikTok profiles for recent project proof.",
          "Update the benchmark scores if manual social/Google checks change the picture.",
          "Turn the top 3 gaps into the starter foundations pitch."
        ]
      },
      agentOutputs: [
        { agent: "Company Research Agent", output: "Create business context, ICP, pain points, proof gaps and outreach/sales notes for the starter plan.", nextAction: "Confirm facts with the owner before presenting recommendations." },
        { agent: "Website Audit Agent", output: "Check CTA clarity, trust proof, mobile experience, quote route and tracking readiness.", nextAction: "Turn findings into a one-page starter report." },
        { agent: "Social Audit Agent", output: "Review profile setup, recent proof, local CTA and content gaps.", nextAction: "Create profile fixes and first content ideas." },
        { agent: "Content Creation Agent", output: "Build filming shot list, starter content hooks and future ad concepts.", nextAction: "Film usable vertical proof before any Meta test." },
        { agent: "Client Strategy Agent", output: "Turn owner goals, best jobs and capacity into clear delivery priorities.", nextAction: "Decide which services are worth promoting first." }
      ],
      contentAngles: [
        "Before-and-after project reveal with a simple homeowner problem.",
        "Owner/team trust clip explaining how the process works.",
        "Detail shots showing workmanship, clean finish and care in the home.",
        "FAQ Reel answering what homeowners should know before starting.",
        "Local proof post showing service areas and real project context."
      ],
      discoveryQuestions: [
        "Which type of project usually brings in the most money or profit for you, and why is it worth chasing?",
        "Roughly what is a good project worth to you, even as a ballpark range?",
        "Which jobs are not worth chasing because they are too small, awkward, low-margin, slow to finish or just not the kind of work you want?",
        "When someone wants a quote, what is the best route right now: call, text, WhatsApp, website form, Instagram DM or something else?",
        "Who normally replies to enquiries, and roughly how quickly can you get back to people on a normal workday?",
        "What photos, videos, finished projects, reviews or customer messages are you happy for us to use as proof?",
        "What do customers usually ask or worry about before they book you?",
        "For this trial to feel genuinely useful to you, what would you want to understand or improve by the end?"
      ],
      nextActions: [
        "Complete the real website/social/Google Business audit.",
        "Collect current assets and access details.",
        "Write the starter foundations report.",
        "Create the first 3-5 content ideas and shot list.",
        "Only decide on a 14-day lead test once the foundations score as ready."
      ]
    },
    {
      company: "M8 Designs",
      viewId: "client-m8-designs",
      status: "Starter foundations trial",
      relationship: "Mate / trial client",
      offerStage: "Starter foundations",
      serviceCategory: "Construction / home improvement project delivery",
      area: "Brighton, Hove and nearby local areas",
      researchStatus: "Owner response captured",
      objective: "Use M8 Designs as a real starter foundations client: package the full-project construction offer, make the website/contact route feel premium, organise proof assets and build tracking before thinking about ads.",
      identityCheck: {
        confidence: "Strong match",
        humanStatus: "Sam supplied official website",
        logoStatus: "Logo supplied by Sam",
        decisionRule: "Only treat a profile as confirmed when the name, exact service niche, logo or visual brand, and at least one contact detail all line up.",
        evidence: [
          { signal: "Business name", expected: "M8 Designs", found: "M8 Designs Ltd on official website", status: "Confirmed" },
          { signal: "Logo / visual brand", expected: "Use uploaded logo or known profile image as reference", found: "Sam supplied logo matches the CRM reference for M8 Designs", status: "Confirmed" },
          { signal: "Location and service fit", expected: "Construction/home improvement work around Brighton, Hove and Sussex", found: "Official website says Sussex / Brighton and Hove construction services", status: "Confirmed" },
          { signal: "Website or portfolio", expected: "Official portfolio/domain controlled by M8 Designs", found: "https://www.m8designs.co.uk/", status: "Confirmed" },
          { signal: "Social profiles", expected: "Same name/logo plus matching portfolio/service details", found: "TikTok @m8.designs supplied by Sam; other socials still unconfirmed", status: "Partial" },
          { signal: "Google Business", expected: "Same name/location/category with matching photos/reviews/contact, if local search matters", found: "Sam thinks there may not be a Google presence yet", status: "Likely missing" }
        ],
        agentRules: [
          "Do not assume the first M8 Designs result is the right business.",
          "Use the logo/profile image to compare candidate pages when names are similar.",
          "Mark conflicting services, cities or contact details as a mismatch.",
          "Ask Sam to confirm before filling any analysis fields from an uncertain source."
        ]
      },
      icp: [
        { label: "Best-fit customer", value: "Private homeowners around Brighton, Hove and Sussex who want a proper construction project handled from start to finish, especially new builds, extensions, bathrooms or larger refurb-style work." },
        { label: "Buyer trigger", value: "They are planning a serious home improvement project and want one team who can control the site, manage standards and make the process feel less risky." },
        { label: "Main worries", value: "Choosing the wrong builder, unclear timelines, messy site management, poor finish quality, hidden costs, parking/access disruption and whether the team can actually manage the full project." },
        { label: "Trust proof needed", value: "High-quality project photos, before-and-after examples, website portfolio sections, customer comments, clear contact routes, service areas and proof that M8 can manage the whole job properly." },
        { label: "Avoid for now", value: "Handyman jobs, tiny repairs, difficult-access high-rise jobs, heavy city-centre parking issues and subcontractor work where M8 cannot control site standards." }
      ],
      businessAnalysis: [
        { label: "Positioning angle", value: "A Sussex construction team for homeowners who want full-project delivery, with new builds and extensions as the strongest top-level message." },
        { label: "Likely growth gap", value: "M8 has a website and proof route, but the public presence still needs to make the premium project fit, contact path and strongest portfolio examples instantly obvious." },
        { label: "Starter offer focus", value: "Tighten the website/contact journey, organise proof assets, improve TikTok/profile CTA, decide on Google Business and build lead tracking before visibility work." },
        { label: "Possible offer two", value: "Only after the portfolio, enquiry route and tracking are ready: test one focused local visibility angle for new builds or extensions with client-paid ad spend." }
      ],
      foundations: [
        { area: "Offer clarity", currentState: "Owner and website confirm new builds, extensions, bathrooms, refurbishments and supporting trades.", starterAction: "Lead with full-project delivery, new builds and extensions; keep bathrooms/rendering/plastering as supporting proof.", status: "Clarified" },
        { area: "Social profiles", currentState: "Needs real audit", starterAction: "Check Instagram, Facebook, TikTok/YouTube and portfolio links for proof, bio clarity and enquiry CTA.", status: "To audit" },
        { area: "Google Business", currentState: "Likely not set up yet", starterAction: "Confirm whether local search matters, then create or claim a profile with logo, services, photos, hours and review plan if useful.", status: "Likely missing" },
        { area: "Website/portfolio", currentState: "Official website supplied: https://www.m8designs.co.uk/.", starterAction: "Audit portfolio flow, service explanations, calls to action, contact route and mobile presentation.", status: "Found - audit next" },
        { area: "Tracking", currentState: "Not confirmed", starterAction: "Create a simple lead tracker: source, service wanted, budget signal, stage, next action and follow-up owner.", status: "Build now" }
      ],
      foundationAudit: {
        score: 49,
        status: "Offer clarified - foundations still need building",
        summary: "M8 now has a clearer commercial direction: full construction projects, especially new builds and extensions, with bathrooms, rendering, plastering and finishing trades as supporting proof. The starter work should make the brand look premium, organise portfolio assets, sharpen the contact route and decide whether Google Business is worth adding before any visibility push.",
        lastRun: "AI owner-response audit",
        sources: "Official M8 website, Sam-supplied logo, Sam-supplied TikTok, public company index, public search mismatch review, owner WhatsApp transcript",
        rows: [
          { area: "Identity and trust", agent: "Company Research Agent", score: 72, status: "Strong match", finding: "Sam supplied the official m8designs.co.uk website, which matches the M8 Designs Ltd construction context, local Sussex/Brighton and Hove positioning, services and owner transcript.", recommendation: "Use m8designs.co.uk as the main identity source, while still confirming any extra social or Google profiles before adding them." },
          { area: "Offer clarity", agent: "Client Strategy Agent", score: 68, status: "Owner clarified", finding: "The owner confirmed M8 wants proper projects: new builds, extensions, bathrooms, rendering and full start-to-finish work, not handyman jobs.", recommendation: "Position M8 around controlled, full-project delivery for homeowners, with new builds and extensions as the top offer." },
          { area: "Website and portfolio", agent: "Website Audit Agent", score: 52, status: "Found - needs polish", finding: "The official website exists and supports the owner transcript with construction, new builds, extensions, refurbishments, bathrooms and contact routes. The next job is conversion polish and proof order.", recommendation: "Build a clean portfolio proof order, make phone/email obvious and show full-project capability above smaller trade services." },
          { area: "Google Business Profile", agent: "Local Visibility Agent", score: 14, status: "Likely missing", finding: "The owner is not focused on Google Business right now and Sam thinks there may not be a Google presence yet.", recommendation: "Keep this as a strategic decision: set it up if local search is a priority, but do not let it block website/social proof improvements." },
          { area: "Social profiles", agent: "Social Audit Agent", score: 48, status: "TikTok found", finding: "TikTok @m8.designs is owner-supplied. The profile should now clearly push full projects, new builds and extensions rather than looking like general trades.", recommendation: "Update bio, pinned videos and CTA around proper projects, phone/email and Brighton/Hove service area." },
          { area: "Proof and tracking", agent: "Tracking Agent", score: 36, status: "Needs setup", finding: "Proof exists on the website, but high-quality folders, testimonial structure, enquiry owner, source tracking and quote-stage tracking are not set up in the CRM yet.", recommendation: "Collect assets by project type and create a tracker for source, project type, access/parking fit, estimated value, stage and next action." }
        ],
        priorities: [
          "Position M8 around new builds, extensions and full-project delivery.",
          "Avoid promoting handyman jobs, difficult access, high-rise flats and subcontractor work.",
          "Organise high-quality proof assets from the website and owner files.",
          "Make phone/email and website contact routes clearer.",
          "Create tracking before any paid activity."
        ]
      },
      competitorBenchmark: {
        status: "Provisional competitor scan complete",
        currentScore: 49,
        competitorAverage: "77%",
        bestCompetitor: "Hove Renovations - 84%",
        targetScore: "60%+ before visibility push",
        summary: "Public scan compared M8 against local construction, renovation and home-improvement competitors. Now the official website is confirmed, this benchmark can be used to show how M8's portfolio, offer clarity, enquiry route and trust proof compare with stronger local alternatives.",
        competitors: [
          { name: "Hove Renovations", score: 84, source: "https://hoverenovations.com/", fit: "Design-led renovation/building benchmark", strengths: "Clear design-led positioning, service categories, selected projects, FMB trust signal, consultation CTA and FAQs.", gapToClient: "M8 needs a clear offer, portfolio route and proof structure before it can compete visually." },
          { name: "Soundhouse Build", score: 78, source: "https://www.soundhousebuild.co.uk/", fit: "Thoughtful local renovation/refurbishment benchmark", strengths: "Strong positioning around smart planning, local projects, careful craftsmanship and getting in touch.", gapToClient: "M8 needs similar clarity around what problem it solves, who it serves and why people should enquire." },
          { name: "Complete Home Improvements", score: 70, source: "https://complete-homeimprovements.com/", fit: "Broad local home improvement benchmark", strengths: "Simple local service menu, quote CTA, contact details and social links.", gapToClient: "M8 can beat broad competitors by being more specific, but only after the core offer and proof route are clear." }
        ],
        rows: [
          { area: "Offer clarity", current: "Owner and website confirm new builds, extensions, refurbishments, bathrooms and full construction project delivery.", competitorCheck: "Hove Renovations and Soundhouse Build make their proposition clear quickly: design-led renovation/building, careful planning and local projects.", pitchUse: "Use the gap to sharpen M8's public message around proper projects rather than broad trade work." },
          { area: "Portfolio route", current: "Official website is confirmed at https://www.m8designs.co.uk/ and now needs a conversion/proof audit.", competitorCheck: "Hove Renovations has selected recent projects; Soundhouse uses visual project/planning proof; Complete Home Improvements has broad service sections.", pitchUse: "Show how M8 can make the website feel more premium and easier to enquire through." },
          { area: "Google Business", current: "Likely not set up yet.", competitorCheck: "Manual Google/Maps check still needed for competitor local pack/review comparison.", pitchUse: "Decide whether Google Business is a foundation priority or whether TikTok/portfolio should come first." },
          { area: "Social proof", current: "TikTok @m8.designs found; other profiles and proof depth unconfirmed.", competitorCheck: "Complete Home Improvements exposes Facebook/Instagram links; platform quality still needs manual review.", pitchUse: "Show what M8 needs to look credible from social traffic." },
          { area: "Trust signals", current: "Logo supplied, but testimonials, examples and customer proof are not confirmed.", competitorCheck: "Hove Renovations uses FMB membership and project examples; competitors show local service proof and contact details.", pitchUse: "Turn missing trust into a proof collection task." },
          { area: "Enquiry and tracking", current: "Contact route and follow-up owner are not confirmed.", competitorCheck: "Competitors make contact/quote/get in touch routes visible.", pitchUse: "Create one clean contact path and CRM tracking fields." }
        ],
        nextSteps: [
          "Audit m8designs.co.uk page-by-page for portfolio, CTA, proof order and mobile trust.",
          "Replace any provisional competitor that does not match M8's confirmed construction/new-build/extension offer.",
          "Manually check Google/Maps and social profiles once the final competitor set is chosen.",
          "Use the biggest gap to shape the starter foundations plan."
        ]
      },
      agentOutputs: [
        { agent: "Company Research Agent", output: "Create ICP, buyer triggers, proof gaps, positioning notes and discovery questions.", nextAction: "Use the sheet in the first proper client conversation." },
        { agent: "Website Audit Agent", output: "Review portfolio clarity, enquiry route, mobile trust and conversion basics.", nextAction: "Turn findings into starter recommendations." },
        { agent: "Social Audit Agent", output: "Review whether the profile explains the offer quickly and shows enough proof.", nextAction: "Create profile fixes and content pillars." },
        { agent: "Content Creation Agent", output: "Turn the best proof into portfolio posts, process clips, FAQs and future ad concepts.", nextAction: "Plan the first filming/content session once the offer is clear." },
        { agent: "Client Strategy Agent", output: "Map best services, ideal projects and capacity into a simple 30-day starter plan.", nextAction: "Prioritise the services M8 actually wants to sell." }
      ],
      contentAngles: [
        "Process post showing how an idea becomes a finished direction.",
        "Portfolio breakdown explaining the problem, decision and final result.",
        "FAQ content about timelines, pricing signals and how to start.",
        "Behind-the-scenes clip showing tools, sketches, planning or production.",
        "Local proof post showing the type of client/project M8 wants more of."
      ],
      discoveryQuestions: [
        "In one simple sentence, what does M8 Designs sell or help people with right now?",
        "Who is the ideal customer: homeowners, builders, landlords, businesses, designers or someone else?",
        "Which type of project usually makes the most money or profit for M8 Designs, and what makes it worth chasing?",
        "Roughly what is a good project worth to you, even as a ballpark range?",
        "What work should we avoid promoting because it is not profitable, takes too long, is awkward to deliver or is not the direction you want M8 to go?",
        "Where should people contact you first: TikTok, Instagram, WhatsApp, phone, email, website/portfolio or something else?",
        "Do you already have any portfolio photos, videos, customer messages, drawings, mockups or finished examples we can use?",
        "Do you want a Google Business Profile set up, or would it make more sense to focus on TikTok/portfolio first?",
        "What would make this starter project useful: clearer offer, more enquiries, better profile, better content ideas, or understanding the process?"
      ],
      nextActions: [
        "Run the full discovery conversation and confirm the exact niche.",
        "Audit every public profile and portfolio route.",
        "Build a clean ICP and service positioning statement.",
        "Create the starter content/portfolio improvement plan.",
        "Wait until proof and enquiry flow are ready before considering a lead test."
      ]
    }
  ],
  spend: [
    { item: "OpenAI audits + drafts", cost: 1.14, limit: "£10 starting balance" },
    { item: "Prospect search API", cost: 0.7, limit: "Keep batches small" },
    { item: "Email sending", cost: 0, limit: "Provider/inbox based" }
  ],
  agents: [
    { name: "Leader", purpose: "Reads the current client stage tasks, delegates them to specialist agents, collects their relay notes and tracks what is ready to tick off.", status: "Queued", currentTask: "Waiting for a client stage action plan to command", progress: 10, lastRun: "Not run yet", nextRun: "Manual from client page", cost: 0, outputs: 0 },
    { name: "Prospect Scanner", purpose: "Finds renovation companies across Brighton, Hove and Sussex.", status: "Running", currentTask: "Scanning builders and extension firms in Brighton", progress: 68, lastRun: "Today 09:20", nextRun: "Today 16:00", cost: 0.42, outputs: 37 },
    { name: "Company Research Agent", purpose: "Builds personalised hooks and pain points for each company before outreach is written.", status: "Queued", currentTask: "Waiting for new prospects to research", progress: 10, lastRun: "Not run yet", nextRun: "After prospect scan", cost: 0, outputs: 0 },
    { name: "Content Creation Agent", purpose: "Turns company research into advert hooks, filming plans and Meta content ideas.", status: "Queued", currentTask: "Waiting for researched companies", progress: 10, lastRun: "Not run yet", nextRun: "After company research", cost: 0, outputs: 0 },
    { name: "Xello Social Growth Agent", purpose: "Plans Instagram and TikTok content to grow Xello's credibility and following.", status: "Queued", currentTask: "Planning founder-led marketing content", progress: 10, lastRun: "Not run yet", nextRun: "Weekly", cost: 0, outputs: 0 },
    { name: "Website Audit Agent", purpose: "Checks prospect websites for conversion gaps and trust signals.", status: "Queued", currentTask: "Waiting for new prospect batch", progress: 20, lastRun: "Yesterday 17:10", nextRun: "After scan", cost: 0.31, outputs: 18 },
    { name: "Social Audit Agent", purpose: "Reviews Instagram activity and content opportunities.", status: "Idle", currentTask: "No pending social audits", progress: 0, lastRun: "Yesterday 15:40", nextRun: "Manual trigger", cost: 0.18, outputs: 12 },
    { name: "Outreach Writer", purpose: "Drafts personalised emails, follow-ups and Instagram DMs.", status: "Waiting Approval", currentTask: "42 drafts need review", progress: 100, lastRun: "Today 10:05", nextRun: "After approvals", cost: 0.56, outputs: 42 },
    { name: "Reply Triage Agent", purpose: "Categorises replies and suggests the next step.", status: "Complete", currentTask: "Tagged 8 warm replies", progress: 100, lastRun: "Today 11:30", nextRun: "Every morning", cost: 0.08, outputs: 14 },
    { name: "Client Strategy Agent", purpose: "Turns client goals, services and capacity into clear monthly priorities.", status: "Queued", currentTask: "Waiting for first retained client", progress: 10, lastRun: "Not run yet", nextRun: "On client onboarding", cost: 0, outputs: 0 },
    { name: "Tracking Agent", purpose: "Sets up enquiry tracking fields, lead status rules and follow-up checks before any paid visibility work.", status: "Queued", currentTask: "Waiting for starter tracking setup", progress: 10, lastRun: "Not run yet", nextRun: "Before lead test readiness review", cost: 0, outputs: 0 },
    { name: "Meta Test Planner", purpose: "Prepares campaign structure, lead forms and tracking fields for offer two: the 14-day lead test.", status: "Queued", currentTask: "Waiting for a client with foundations ready", progress: 10, lastRun: "Not run yet", nextRun: "Before campaign launch", cost: 0, outputs: 0 },
    { name: "Reporting Agent", purpose: "Summarises pipeline, spend, booked calls and weekly priorities.", status: "Idle", currentTask: "Weekly report due Friday", progress: 0, lastRun: "Not run yet", nextRun: "Friday 09:00", cost: 0, outputs: 0 }
  ],
  agentTasks: [
    { task: "Find 25 new Brighton/Hove renovation prospects", agent: "Prospect Scanner", related: "Prospects", status: "Running", priority: "High", progress: 68, cost: 0.42, approval: "No" },
    { task: "Draft outreach for top 10 scored prospects", agent: "Outreach Writer", related: "Outreach Drafts", status: "Waiting Approval", priority: "High", progress: 100, cost: 0.56, approval: "Yes" },
    { task: "Audit websites for new kitchen and loft firms", agent: "Website Audit Agent", related: "AI Audits", status: "Queued", priority: "Medium", progress: 20, cost: 0.31, approval: "No" },
    { task: "Summarise warm replies and next steps", agent: "Reply Triage Agent", related: "Replies", status: "Complete", priority: "High", progress: 100, cost: 0.08, approval: "No" }
  ],
  agentLogs: [
    { time: "11:30", agent: "Reply Triage Agent", event: "Tagged 4 replies as warm and 2 as not now." },
    { time: "10:05", agent: "Outreach Writer", event: "Generated 42 drafts and moved them to approval queue." },
    { time: "09:20", agent: "Prospect Scanner", event: "Started Brighton/Hove scan for builders, lofts and extensions." },
    { time: "08:55", agent: "Spend Guardrail", event: "API spend below daily limit. Processing allowed." }
  ],
  agentOutputs: [
    { agent: "Website Audit Agent", company: "Brackenborough Lakes Resort", type: "Website audit", result: "78/100. Strong offer, clearer CTA and higher lead capture recommended.", nextAction: "Use audit as conversation opener or call prep.", approval: "No", status: "Needs Review", createdAt: "Demo" },
    { agent: "Content Creation Agent", company: "Hove Kitchen Studio", type: "Content brief", result: "Created a kitchen transformation Reel concept from company research.", nextAction: "Use as filming plan if prospect becomes a client.", approval: "No", status: "Needs Review", createdAt: "Demo" }
  ],
  memory: [
    { insight: "Kitchen and extension firms respond best to a website audit angle before Meta ads are mentioned.", source: "Warm replies", confidence: 78, action: "Lead with website conversion gaps." },
    { insight: "Brighton and Hove prospects need a local, personal tone. Generic agency language gets ignored.", source: "Outreach review", confidence: 72, action: "Mention exact town and service." },
    { insight: "Instagram DMs should stay short and manual-assisted to avoid account risk.", source: "Operating rule", confidence: 90, action: "Queue DMs for human sending." },
    { insight: "A free growth audit is easier to sell than a full retainer in the first message.", source: "Sales strategy", confidence: 86, action: "CTA remains free audit." },
    { insight: "For renovation ads, the best examples optimise for qualified enquiries, CPA, CPL or ROAS rather than likes alone.", source: "AI Editor research 2026-05-07", confidence: 88, action: "Judge videos by serious leads and booked conversations." },
    { insight: "Without Sonny voiceover, captions must act as the narrator: hook, context, proof, fit filter and CTA.", source: "Sam feedback 2026-05-07", confidence: 92, action: "Upgrade all V3 edit plans with story-led captions." },
    { insight: "The next AI editor jump comes from one excellent scored draft at a time: reference examples, caption story, lead filter, render, score, then V-next instruction.", source: "Elite editor training 2026-05-07", confidence: 91, action: "Run the elite feedback loop before creating more variants." },
    { insight: "AI editor training should compound through a flywheel: reference mining, pattern extraction, draft, agent competition, score, Sam taste feedback, outcome tracking and a new reusable rule.", source: "Exponential editor training 2026-05-07", confidence: 93, action: "Save every draft lesson into the winning-pattern, taste or outcome libraries." },
    { insight: "Limited footage means the next quality gains should come from editor skill training: SFX restraint, colour correction, transition taste, caption motion and end-card polish.", source: "Tutorial expansion 2026-05-07", confidence: 90, action: "Train agents from editing tutorials before forcing more drafts from the same footage." },
    { insight: "The First Touch AI editor automation should improve itself: scan recent logs, avoid duplicates, rotate weak gaps, score every run and add one low-risk training-pack improvement when evidence is clear.", source: "Automation self-improvement 2026-05-07", confidence: 91, action: "Use daily scoring plus a Friday weekly review to keep training compounding." }
  ],
  knowledge: [
    { title: "Entry Offer", detail: "Start with the starter foundations offer: social setup, Google Business improvements, website/CTA basics, tracking and content foundations.", owner: "Xello" },
    { title: "Middle Offer", detail: "After the basics are strong enough, offer the paid 14-day local visibility and lead test. Company covers ad spend.", owner: "Xello" },
    { title: "Retainer Path", detail: "After trust, proof or useful lead test learning is created, pitch £1,500+/month plus ad spend for ongoing local growth.", owner: "Xello" },
    { title: "Target Market", detail: "Renovation companies, builders, extensions, lofts, kitchens, bathrooms and design-build firms across Sussex.", owner: "Prospect Scanner" },
    { title: "Personalisation Layer", detail: "Company Research Agent creates hooks, pain points and outreach angles before the Outreach Writer drafts.", owner: "Company Research Agent" },
    { title: "Content Creation Layer", detail: "Content Creation Agent turns company research into filming angles, advert hooks and Meta content ideas.", owner: "Content Creation Agent" },
    { title: "Xello Social Growth", detail: "Xello Social Growth Agent plans Instagram and TikTok content to build credibility, followers and authority for the agency.", owner: "Xello Social Growth Agent" },
    { title: "Compliance Rule", detail: "No fake guarantees. Clear Xello identity. Respect do-not-contact and approval-first sending.", owner: "Compliance" },
    { title: "Sales CTA", detail: "First message starts a conversation with a compliment, one brief line explaining that Xello helps improve local online presence and a simple question. Do not lead with paid ads.", owner: "Outreach Writer" },
    { title: "AI Editor Reference Library", detail: "Use the conversion ad examples before creating new First Touch edit plans. Learn from actual leads, CPL, CPA, ROAS and quote-route patterns, not vanity metrics.", owner: "AI Editor Teacher" },
    { title: "Caption Narrator Rule", detail: "Until Sonny voiceover exists, on-screen captions must carry the story: why this matters, what the viewer is seeing, proof, who it is for and the next enquiry step.", owner: "Caption Ads Agent" },
    { title: "Elite AI Editor Standard", detail: "Before each new First Touch reel, pick three conversion references, choose one narrative, write captions first, add a lead filter, score the draft and write one V-next improvement.", owner: "Elite Reference Teacher Agent" },
    { title: "Editor Compounding Library", detail: "The training pack now stores winning patterns, Sam taste feedback, daily reference-mining logs and real outcome data so every edit becomes training data.", owner: "Master Chat" },
    { title: "Editing Tutorial Curriculum", detail: "Agents now study official/tutorial sources for SFX, colour grading, transitions, text motion and audio, then convert each lesson into First Touch editing rules.", owner: "AI Editor Teacher" },
    { title: "Self-Improving Automation", detail: "The daily First Touch AI editor automation now scores itself, rotates training gaps, updates a backlog and applies low-risk training-pack improvements. A weekly Friday review checks the last 7 days for repeated weaknesses.", owner: "AI Automation" }
  ],
  playbooks: [
    { name: "Prospect Research", steps: "Find company, identify service, check area, score lead need, avoid poor-fit businesses.", agent: "Prospect Scanner" },
    { name: "Company Research", steps: "Check available website/social notes, create a safe personal hook, identify pain point, choose outreach angle.", agent: "Company Research Agent" },
    { name: "Content Creation", steps: "Use company research to choose profile improvements, starter content ideas, what to film and which hooks could later support a paid lead test.", agent: "Content Creation Agent" },
    { name: "AI Editor Training", steps: "Study the conversion reference library, choose a narrative shape, create slick caption sequences, build a JSON edit plan, render a draft, score it and feed Sam feedback back into memory.", agent: "AI Editor Teacher" },
    { name: "Elite Editor Feedback Loop", steps: "Pick 3 references, write the caption story before editing, create one draft, score hook/story/captions/proof/premium feel/lead fit, then write one V-next instruction.", agent: "Elite Reference Teacher Agent" },
    { name: "Agent Competition Editing", steps: "Teacher sets standards, Creative Director proposes narratives, Caption Agent writes variants, Editor Agent plans shots, QA scores before render, Master keeps the strongest route.", agent: "Master Chat" },
    { name: "Outcome-To-Training Loop", steps: "After posting or testing a video, record views, watch time, DMs, leads, qualified leads, booked calls and the winning lesson before making the next version.", agent: "Lead Feedback Loop Agent" },
    { name: "SFX And Colour Training", steps: "Study editing tutorials, extract rules for sound effects, transitions, colour correction and grading, then apply only where the technique improves trust, pacing or lead clarity.", agent: "SFX Sound Design Agent / Colour Grading Agent" },
    { name: "Automation Self-Improvement", steps: "Daily: read recent logs, choose the weakest gap, mine references/tutorials, score the run and update the backlog. Weekly: review repeated gaps and tighten the training rules.", agent: "AI Automation" },
    { name: "V3 First Touch Reels", steps: "Create story-led edits from current site footage: hook, context, proof, fit filter and CTA. Save Sonny voiceover slots for the next shoot.", agent: "Short-Form Editor Agent" },
    { name: "Xello Social Growth", steps: "Plan weekly Reels/TikToks around founder journey, marketing tips, local lead generation, behind-the-scenes and proof-building content.", agent: "Xello Social Growth Agent" },
    { name: "Website Audit", steps: "Check CTA clarity, quote form, mobile experience, trust signals, tracking and landing page quality.", agent: "Website Audit Agent" },
    { name: "Outreach Writing", steps: "Use one specific observation, a light compliment and one easy question. Avoid pitching the full offer until they reply.", agent: "Outreach Writer" },
    { name: "Starter Foundations", steps: "Create/optimise social profiles, Google Business, website/CTA basics, tracking and content foundations before paid ads.", agent: "Sales" },
    { name: "14-Day Lead Test", steps: "Offer two only: one filming visit, three edited adverts, one Meta campaign, lead tracking and one results review. Company covers ad spend.", agent: "Sales" },
    { name: "Reply Handling", steps: "Classify reply, suggest next response, book audit if warm, suppress if not relevant.", agent: "Reply Triage Agent" },
    { name: "Client Onboarding", steps: "Get Meta access, website access, assets, budget, service areas, lead routing and reporting cadence.", agent: "Client Onboarding Agent" },
    { name: "Weekly Reporting", steps: "Summarise leads, cost, booked calls, client follow-up speed, risks and next tests.", agent: "Reporting Agent" }
  ],
  experiments: [
    { name: "Website audit first", hypothesis: "Lead with website conversion gaps instead of Meta ads to increase replies.", status: "Running", result: "8 warm replies from 96 sends", learning: "Keep testing with kitchen and extension firms." },
    { name: "Short Instagram DM", hypothesis: "Short local DMs get more replies than long audit pitches.", status: "Planned", result: "Not started", learning: "Run manually with 20 prospects." },
    { name: "Brighton vs Worthing", hypothesis: "Brighton/Hove firms have higher budget but more competition.", status: "Running", result: "Brighton has stronger lead scores", learning: "Prioritise high-ticket areas first." },
    { name: "First Touch V3 caption upgrade", hypothesis: "Story-led captions will make active-project footage feel more premium and more enquiry-focused than descriptive captions.", status: "Review draft rendered", result: "Active Site Proof V3 rendered and scored 81/100 with a 7.9/10 taste overlay.", learning: "The process-before-reveal frame works; next upgrade is Sonny voiceover, stronger licensed music or a cleaner final brand/contact card." },
    { name: "Conversion examples over vanity examples", hypothesis: "Training editors on CPL, CPA, ROAS and qualified lead patterns will produce better ad concepts than training on likes alone.", status: "Running", result: "24 reference examples added to the CRM examples box and elite reference bank.", learning: "The agent should justify each edit by the lead it is trying to attract." },
    { name: "Exponential editor flywheel", hypothesis: "Daily reference mining plus scored draft feedback will compound editor quality faster than occasional large prompting sessions.", status: "Ready", result: "Flywheel, mining routine, competition workflow, winning-pattern library, Sam taste profile and outcome tracker created.", learning: "Every draft now needs to become a reusable lesson." },
    { name: "Tutorial-based editor skill training", hypothesis: "SFX, colour and transition tutorial study will raise edit quality while footage is limited.", status: "Running", result: "SFX rules, colour grading rules, tutorial curriculum and two specialist agent prompts added.", learning: "Effects are approved only when they improve clarity, trust or conversion." },
    { name: "Self-improving editor automation", hypothesis: "A daily scorecard plus weekly review will make AI editor training compound faster than one-off prompt upgrades.", status: "Running", result: "Daily automation upgraded with protocol, scorecard, backlog and gap rotation; weekly Friday review automation added.", learning: "The automation can improve low-risk training docs itself while keeping publishing, spend and account access approval-gated." }
  ],
  delivery: [
    { client: "First Touch Innovations", stage: "Starter foundations", checklist: "Social/GMB/website basics, content plan and tracking foundations before any paid test.", health: "Trial", adSpend: 0, leads: 0, cpl: 0, bookedCalls: 0, siteVisit: "Optional", contentStatus: "Foundation plan ready", campaignStatus: "Not ready for ads", nextReview: "After starter setup", nextAction: "Confirm missing socials, Google Business gaps and website basics" },
    { client: "M8 Designs", stage: "Starter foundations", checklist: "Clarify offer, ICP, social/profile setup, portfolio or website route, proof assets, tracking and first content foundations.", health: "Trial", adSpend: 0, leads: 0, cpl: 0, bookedCalls: 0, siteVisit: "To confirm", contentStatus: "Discovery needed", campaignStatus: "Not ready for ads", nextReview: "After starter discovery", nextAction: "Confirm exact niche, best services, target area and current online presence" },
    { client: "New Client Template", stage: "Starter onboarding", checklist: "Social access, website access, Google Business access, photos, testimonials, logo, services and tracking route.", health: "Ready", adSpend: 0, leads: 0, cpl: 0, bookedCalls: 0, siteVisit: "Not set", contentStatus: "Waiting", campaignStatus: "Waiting", nextReview: "Not set", nextAction: "Collect access and foundation details" },
    { client: "Offer Two Template", stage: "14-day lead test", checklist: "Campaign angle, lead form, conversion tracking, ad spend boundary, first creatives.", health: "Template", adSpend: 0, leads: 0, cpl: 0, bookedCalls: 0, siteVisit: "To schedule", contentStatus: "Create first adverts", campaignStatus: "Draft", nextReview: "Launch + 3 days", nextAction: "Only launch after starter foundations are ready" },
    { client: "Weekly Reporting", stage: "Retain", checklist: "Leads, CPL, booked quotes, follow-up speed, best ads, next actions.", health: "Template", adSpend: 0, leads: 0, cpl: 0, bookedCalls: 0, siteVisit: "Complete", contentStatus: "Ongoing", campaignStatus: "Optimising", nextReview: "Every Friday", nextAction: "Prepare client summary and retainer next steps" }
  ],
  testJourney: [
    { stage: "1. Prospect added", owner: "Prospect Scanner", status: "Complete", detail: "First Touch Innovations is tracked as the test company so the system can be tested safely." },
    { stage: "2. Company research", owner: "Company Research Agent", status: "Complete", detail: "Research creates a personalised hook, likely pain point and outreach angle." },
    { stage: "3. Outreach drafted", owner: "Outreach Writer", status: "Complete", detail: "Email/Instagram draft is created for review, but nothing sends automatically." },
    { stage: "4. Reply logged", owner: "Reply Triage Agent", status: "Complete", detail: "A demo reply shows how warm interest appears in the hub." },
    { stage: "5. Call booked", owner: "Sales", status: "Ready", detail: "The 10-minute call is used to understand their online foundations and explain the starter offer." },
    { stage: "6. Starter foundations", owner: "Delivery", status: "Planned", detail: "Social setup, Google Business improvements, website/CTA basics, tracking and content foundation plan." },
    { stage: "7. 14-day lead test", owner: "Delivery", status: "Planned", detail: "Only after foundations are ready: filming, Meta test, lead tracking and review. Client covers ad spend." },
    { stage: "8. Retainer follow-up", owner: "Sales", status: "Planned", detail: "Only discuss the £1,500/month+ retainer after trust, value or clear learning is proven." }
  ],
  demoProof: [
    { title: "Pipeline proof", detail: "The company moves through every CRM stage without needing real outreach." },
    { title: "Agent proof", detail: "Each AI agent has a clear job, input, output and approval boundary." },
    { title: "Delivery proof", detail: "The starter offer has a visible setup checklist, then the 14-day test has a clear budget boundary and review step." },
    { title: "Sales proof", detail: "The retainer is positioned after foundations and trust are built, not in the first cold message." }
  ],
  icpProfile: [
    { section: "Best-fit company", detail: "Local home improvement businesses across Brighton, Hove and Sussex: renovation firms, builders, extensions, loft conversions, kitchens, bathrooms, decorators, painters, roofers, garden rooms and design-build companies." },
    { section: "Owner profile", detail: "Usually trade-led, experienced at the work, often older or less digitally confident, busy on site, proud of their reputation and short on time for marketing." },
    { section: "Sweet spot", detail: "Good at the trade, weak online presence, relies heavily on referrals, has visual project work that can be filmed, wants better local visibility and would value even a small number of extra high-quality quote enquiries." },
    { section: "Buyer trigger", detail: "They know their website, social media or Google profile is behind, or they have gaps between jobs and want more options for their next project." },
    { section: "Avoid for now", detail: "Companies wanting guaranteed leads, zero ad spend, instant results, national targeting, no access to real project proof, or owners who do not reply/follow up with enquiries." }
  ],
  customerProblems: [
    { problem: "We are good at the work but poor online", answer: "Xello's starter offer gets the basics in order: clearer online presence, stronger social proof, Google Business improvements, practical content and a simple quote journey." },
    { problem: "We have been burned by agencies before", answer: "Lead with a low-risk starter package and clear deliverables. Avoid promising hundreds of leads. Show exactly what is being improved and report honestly." },
    { problem: "We do not have time to film or post", answer: "Xello can visit on site, capture the footage, turn long-form material into short clips and create simple posting/ad assets the owner does not have to manage day to day." },
    { problem: "We do not know what makes us different", answer: "Use a short client interview to uncover their ideal customer, proof, local reputation, specialist services and what homeowners are nervous about." },
    { problem: "We need leads but do not trust ads yet", answer: "Do not sell ads first. Start by improving visibility and proof, then offer a capped lead test once the foundations are strong enough." },
    { problem: "How will we know if it worked?", answer: "Track using Meta lead forms, website forms, unique offers, call notes, enquiry source fields, cost per lead, booked quote calls and client follow-up speed." },
    { problem: "We do not need loads of leads", answer: "Position around a few better quote opportunities, not high-volume cheap leads. For renovation firms, one to five serious enquiries can be meaningful." },
    { problem: "We do not understand AI/SEO changes", answer: "Explain simply: modern visibility needs a stronger website, Google Business profile, social proof, YouTube/short-form content and regular signals that AI/search systems can understand." }
  ],
  customerJourneyMap: [
    { stage: "1. Unaware or ignoring it", mindset: "They know marketing is weak but keep relying on referrals.", xelloAction: "Use local observation, website/social audit and simple examples to show the visibility gap without embarrassing them." },
    { stage: "2. Problem aware", mindset: "They realise their social media, Google profile or website does not match the quality of their work.", xelloAction: "Offer a free review or quick local audit focused on what is stopping homeowners from trusting/enquiring." },
    { stage: "3. Trust building", mindset: "They are interested but sceptical because they have seen poor agency promises before.", xelloAction: "Show Sam's local angle, filming process, honest boundaries, First Touch proof and starter offer with clear deliverables." },
    { stage: "4. Starter project", mindset: "They want help but do not want a big monthly commitment yet.", xelloAction: "Deliver the starter visibility package: social/GMB/website/content foundations and a clear next-step report." },
    { stage: "5. Lead test", mindset: "They have better proof online and now want to test whether content can generate enquiries.", xelloAction: "Run a capped Meta lead/content test with client-paid ad spend, simple tracking and a results review." },
    { stage: "6. Ongoing growth", mindset: "They trust Xello and want the work handled consistently.", xelloAction: "Move into monthly content, Meta management, website improvements, tracking, reporting and ongoing visibility growth." }
  ],
  offerLadder: [
    {
      name: "Starter Offer",
      price: "£350-£750 one-off",
      positioning: "Get your house in order online",
      bestFor: "Trade businesses with weak socials/Google profile/website basics that are not ready for heavy ads yet.",
      deliverables: "ICP mini-interview, online presence audit, Google Business checklist, website/CTA recommendations, 1 on-site filming session or content planning session, 3-5 short-form content ideas, basic profile/content improvement plan.",
      boundary: "Does not include full website rebuild, ongoing posting, Meta ad management or lead guarantees.",
      nextStep: "Use this to create trust, proof and a clear path into a lead test.",
      actionPlan: [
        "Book a 30-minute discovery call and complete the ICP mini-interview.",
        "Audit website, Google Business Profile, Instagram/TikTok, Facebook and visible trust proof.",
        "Write a one-page visibility report showing the biggest conversion gaps and quickest fixes.",
        "Agree whether the client needs a filming session, content planning session or simple profile cleanup first.",
        "Capture basic business proof: team, finished work, process clips, service areas, testimonials and FAQs.",
        "Create 3-5 content ideas and a simple improvement plan the client can understand.",
        "Finish with a clear recommendation: stay foundational, move to the 14-day test, or quote extra website work."
      ],
      aiAutomation: [
        { agent: "Company Research Agent", helpsWith: "Prepares the client interview questions and turns answers into positioning notes.", humanCheck: "Sam confirms the notes are accurate before sharing anything with the client." },
        { agent: "Website Audit Agent", helpsWith: "Reviews CTA clarity, trust proof, forms, mobile journey and simple conversion gaps.", humanCheck: "Sam reviews the audit and removes anything too harsh or uncertain." },
        { agent: "Social Audit Agent", helpsWith: "Checks profile quality, posting gaps, project proof and easy content opportunities.", humanCheck: "Sam confirms the account is the right business and the advice is realistic." },
        { agent: "Content Creation Agent", helpsWith: "Creates the first content ideas, filming shot list and quick-win profile recommendations.", humanCheck: "Sam chooses the strongest ideas and adapts them to the real client." },
        { agent: "Reporting Agent", helpsWith: "Creates the final starter report and suggested next offer path.", humanCheck: "Sam approves the recommendation before presenting it."
        }
      ],
      setupPlaybook: [
        {
          title: "1. Confirm What Exists",
          detail: "Before creating anything, list what they already have: website, Google Business Profile, Instagram, Facebook Page, TikTok, YouTube, LinkedIn, logo, photos, reviews and access details."
        },
        {
          title: "2. Create Missing Foundations",
          detail: "Create only the useful missing accounts. For most renovation companies this means Instagram, Facebook Page, Google Business Profile, TikTok and YouTube Shorts. LinkedIn is optional for premium/design-led firms."
        },
        {
          title: "3. Optimise Every Profile",
          detail: "Add logo/profile image, strong bio, service area, phone/email, website link, enquiry CTA, consistent brand wording, opening hours, service categories and basic highlights where possible."
        },
        {
          title: "4. Improve Google Business",
          detail: "Check categories, services, description, photos, service areas, contact links, quote/enquiry route, review prompts and whether the profile makes the company look active and trustworthy."
        },
        {
          title: "5. Build The Content Foundation",
          detail: "Create 3-5 starter content ideas, before/after post structures, Reel hooks, simple captions, FAQs, project story ideas and a list of footage Sam should capture if a site visit is included."
        },
        {
          title: "6. Add Website And Tracking Basics",
          detail: "Recommend quick CTA improvements, add the client into the CRM, create simple tracking fields and make sure future enquiries can be linked back to website, social, Meta ads or manual referrals."
        },
        {
          title: "7. Set Clear Boundaries",
          detail: "Do not include ongoing posting, full website rebuilds, Meta ad management, heavy SEO or lead guarantees. Those belong in the middle or high-value offers."
        },
        {
          title: "8. Present The Next Step",
          detail: "Give the client a simple starter report showing what was fixed, what still needs work and whether they are ready for the 14-day local visibility and lead test."
        }
      ]
    },
    {
      name: "Middle Offer",
      price: "£900-£1,500 project fee + client ad spend",
      positioning: "14-day local visibility and lead test",
      bestFor: "Businesses with decent proof or after completing the starter offer, ready to test whether local content can create quote enquiries.",
      deliverables: "One focused campaign strategy, one filming visit, 3 edited vertical adverts, simple Meta lead campaign setup, lead form, tracking sheet, mid-test check, end-of-test review and next-step recommendation.",
      boundary: "Client pays Meta ad spend. No guaranteed leads. One campaign/test angle only unless agreed.",
      nextStep: "If useful enquiries or strong learning appear, pitch the high-value monthly offer.",
      actionPlan: [
        "Confirm the offer, service area, ad budget, success measure and who follows up with leads.",
        "Research the company and pick one clear campaign angle based on their strongest proof.",
        "Plan the shoot list: hook, owner/team trust, work examples, process, local area, CTA and vertical cutaways.",
        "Film on site and organise footage into client folders with clear filenames.",
        "Edit 3 vertical adverts with different hooks, captions and call-to-action variations.",
        "Build the Meta campaign, lead form, tracking sheet and notification flow before spend starts.",
        "Check results halfway through, adjust the weakest creative or targeting, then deliver the final review.",
        "Use the review to recommend whether they should stop, repeat another test, or move into monthly growth."
      ],
      aiAutomation: [
        { agent: "Company Research Agent", helpsWith: "Finds the strongest local angle, likely homeowner problem and best proof to film.", humanCheck: "Sam validates the angle on the client call before filming." },
        { agent: "Content Creation Agent", helpsWith: "Builds the shoot list, advert hooks, script prompts and creative variations.", humanCheck: "Sam uses the plan on site but adjusts based on what is actually available." },
        { agent: "Website Audit Agent", helpsWith: "Checks whether the website or landing route can handle traffic from the ad test.", humanCheck: "Sam decides whether to use website traffic, lead form or call booking." },
        { agent: "Meta Test Planner", helpsWith: "Drafts campaign structure, audience, ad copy, lead form questions and tracking fields.", humanCheck: "Sam sets budgets manually and checks everything before launch." },
        { agent: "Reporting Agent", helpsWith: "Summarises spend, leads, CPL, lead quality, learning and retainer recommendation.", humanCheck: "Sam explains results honestly and never guarantees future leads." }
      ],
      setupPlaybook: [
        {
          title: "1. Confirm The Test Scope",
          detail: "Agree the service being promoted, target area, ad budget, who responds to leads, what counts as a good enquiry and when the review call happens."
        },
        {
          title: "2. Choose One Clear Offer Angle",
          detail: "Pick one simple campaign idea, such as free quote, renovation advice call, site visit request, before/after inspiration or local project availability."
        },
        {
          title: "3. Build The Filming Plan",
          detail: "Create a shot list covering local proof, owner/team trust, work examples, process footage, problem/solution clips, testimonials and clear call-to-action moments."
        },
        {
          title: "4. Film On Site",
          detail: "Capture vertical footage first, then drone/details/process shots. Make sure the company looks real, skilled, local and trustworthy."
        },
        {
          title: "5. Edit The Test Creatives",
          detail: "Create three short vertical advert variations with different hooks, captions, proof points and CTAs so the test has more than one angle."
        },
        {
          title: "6. Prepare Meta And Tracking",
          detail: "Set up the campaign structure, lead form or landing route, notification flow, CRM tracking sheet, budget cap and manual review checkpoint before launch."
        },
        {
          title: "7. Monitor The Test",
          detail: "Check spend, leads, cost per lead, quality, creative performance and client response speed. Adjust weak creative or targeting if needed."
        },
        {
          title: "8. Present Results And Next Step",
          detail: "Show what worked, what did not, what was learned, whether leads were useful and whether the high-value monthly system is the right next move."
        }
      ]
    },
    {
      name: "High-Value Offer",
      price: "£1,500-£2,500/month + ad spend",
      positioning: "Ongoing local growth system",
      bestFor: "Renovation/home improvement companies that want Xello to manage content, ads, website improvements and lead tracking every month.",
      deliverables: "Monthly content plan, regular short-form edits, Meta ad management, Google Business/content recommendations, website conversion improvements, lead tracking, weekly/monthly reporting, testing roadmap and follow-up improvement notes.",
      boundary: "Ad spend and third-party tools are separate. Larger website rebuilds, heavy SEO or full sales handling are quoted separately.",
      nextStep: "Retain clients by showing leads, learning, better follow-up and stronger local visibility.",
      actionPlan: [
        "Run a monthly planning call covering pipeline, priority services, best projects and client capacity.",
        "Create the monthly content calendar for Instagram, TikTok, YouTube Shorts, Google Business and ad creatives.",
        "Film or collect new proof regularly: before/afters, team clips, process shots, customer questions and project stories.",
        "Edit and schedule short-form content while saving strong clips for future advert testing.",
        "Manage Meta campaigns weekly: budget, CPL, lead quality, creative fatigue, targeting and form performance.",
        "Improve website conversion in small steps: stronger CTAs, proof placement, enquiry forms, service pages and tracking.",
        "Update the CRM with leads, replies, booked quotes, follow-up speed, spend, results and next actions.",
        "Send a monthly report showing what happened, what was learned and what Xello will test next."
      ],
      aiAutomation: [
        { agent: "Client Strategy Agent", helpsWith: "Turns client goals, services and capacity into the monthly growth priorities.", humanCheck: "Sam confirms the strategy fits what the client can actually deliver." },
        { agent: "Content Creation Agent", helpsWith: "Creates monthly content calendars, scripts, hooks, filming briefs and repurposing ideas.", humanCheck: "Sam checks tone, claims and real-world accuracy before content is published." },
        { agent: "Xello Social Growth Agent", helpsWith: "Reuses learning from client work to plan Xello's own founder-led social content.", humanCheck: "Sam decides what is appropriate to share publicly." },
        { agent: "Meta Optimisation Agent", helpsWith: "Reviews ad performance, flags weak creatives, suggests new tests and tracks CPL movement.", humanCheck: "Sam changes budgets and campaign settings manually." },
        { agent: "Website Audit Agent", helpsWith: "Finds monthly website conversion improvements and page ideas.", humanCheck: "Sam approves changes before anything goes live." },
        { agent: "Reporting Agent", helpsWith: "Writes weekly notes, monthly reports, risk summaries and next test recommendations.", humanCheck: "Sam sends the client-facing report after checking it."
        }
      ],
      setupPlaybook: [
        {
          title: "1. Monthly Strategy Reset",
          detail: "Start each month by reviewing the client's pipeline, best services, capacity, local areas, current leads, project photos and what they most want to sell."
        },
        {
          title: "2. Build The Monthly Plan",
          detail: "Decide the content themes, Meta campaign focus, website improvements, Google Business updates and tracking priorities for the month."
        },
        {
          title: "3. Collect Or Film Proof",
          detail: "Gather project photos, customer questions, before/afters, process clips, team trust clips, finished work and any testimonials or review screenshots."
        },
        {
          title: "4. Create And Repurpose Content",
          detail: "Turn footage into Reels, TikToks, YouTube Shorts, Meta ad creatives, Google Business posts, website proof sections and future content ideas."
        },
        {
          title: "5. Manage Meta Ads",
          detail: "Monitor budget, CPL, lead quality, follow-up speed, creative fatigue and audience performance. Test new hooks when the current ads weaken."
        },
        {
          title: "6. Improve Website Conversion",
          detail: "Make small monthly improvements such as stronger CTAs, better service pages, clearer enquiry forms, more proof, local landing pages and tracking fixes."
        },
        {
          title: "7. Track Leads And Follow-Up",
          detail: "Log every lead, source, cost, status, call outcome, quote booked and follow-up issue so the client can see what is happening clearly."
        },
        {
          title: "8. Report And Retain",
          detail: "Send a monthly report showing activity, spend, leads, learning, risks, wins and next tests. Use this to keep trust high and prevent churn."
        }
      ]
    }
  ],
  risks: [
    { issue: "GitHub/Vercel deployment friction", severity: "Medium", fix: "Keep standalone dashboard local until pushing flow is simple." },
    { issue: "Instagram automation risk", severity: "High", fix: "Use AI-drafted but human-sent DMs." },
    { issue: "OpenAI/API spend", severity: "Low", fix: "Batch prospects and stop at daily limit." },
    { issue: "Fake proof risk", severity: "High", fix: "Use concept visuals honestly and build real case studies from first clients." }
  ],
  finance: [
    { metric: "MRR", value: "£0", note: "First target is 3 clients = £4,500/mo." },
    { metric: "Pipeline", value: "£7,500/mo", note: "Based on booked/proposal opportunities." },
    { metric: "Tool/API Costs", value: "£1.84", note: "Early testing spend only." },
    { metric: "Target CAC", value: "< £300", note: "Keep prospecting and AI costs controlled." }
  ],
  ceoBrief: [
    { title: "This week", detail: "Prioritise approval of outreach drafts and book the first 10-minute intro calls." },
    { title: "Best opportunity", detail: "Kitchen, extension and loft firms with good project photos but weak quote journeys." },
    { title: "Biggest risk", detail: "Spending too long on systems before speaking to real prospects." },
    { title: "Recommended move", detail: "Run 25 prospects, approve 10 strong messages, book calls, then offer starter foundations before any paid lead test." }
  ]
};

const storageKey = "xello-crm-dashboard-data";
const apiUrlKey = "xello-crm-dashboard-api-url";
const activeButtonKeys = new Set();
const buttonFlashTimers = new Map();
let state = loadState();
let liveMode = Boolean(localStorage.getItem(apiUrlKey));

const identityResearchDrafts = {
  "First Touch Innovations": {
    confidence: "Likely match - strong evidence",
    humanStatus: "Awaiting Sam review",
    logoStatus: "Website visual brand found - confirm against known logo",
    logoPreview: {
      imageUrl: "https://www.firsttouchinnovations.co.uk/cdn/shop/files/FRONT_First_Touch_Innovations_Master_logo_80mm.png?height=628&pad_color=ffffff&v=1723057732&width=1200",
      label: "Logo found on official website",
      note: "Compare this with the logo/profile image your mate sends you before confirming."
    },
    socialScan: {
      summary: "First Touch now has Instagram, TikTok and Google Business evidence. Instagram is linked from the official website, TikTok was supplied by Sam, and Google Business is verified from Sam's screenshot with rating, reviews, category, address and phone visible.",
      platforms: [
        { platform: "Instagram", result: "Found: @firsttouch_innovations", url: "https://www.instagram.com/firsttouch_innovations/", evidence: "Linked from the official First Touch Innovations website", status: "Strong match" },
        { platform: "Facebook", result: "Not found", url: "", evidence: "No official website link or reliable public result found", status: "Ask owner" },
        { platform: "TikTok", result: "Found: @firsttouch_innovations", url: "https://www.tiktok.com/@firsttouch_innovations?lang=en-GB", evidence: "Owner-supplied link from Sam; compare profile image/content against the First Touch brand", status: "Trusted owner link" },
        { platform: "YouTube", result: "Not found", url: "", evidence: "No official website link or reliable public result found", status: "Ask owner" },
        { platform: "LinkedIn", result: "Not found", url: "", evidence: "Search results showed unrelated FirstTouch/First Touch companies, not this Sussex construction business", status: "Do not assume" },
        { platform: "Google Business", result: "Found: 5.0 rating, 7 reviews", url: "", evidence: "Sam screenshot shows Contractor in Brighton and Hove, 12 Franklin Rd, phone 07943 574948, open/closes 5pm", status: "Verified from screenshot" }
      ]
    },
    summary: "The agent found an official website for First Touch Innovations and a matching UK company record for FIRST TOUCH INNOVATIONS LIMITED in Brighton/Portslade. Service language and company category both point toward construction/building work.",
    fields: [
      { label: "Provided identity", value: "First Touch Innovations / FIRST TOUCH INNOVATIONS LIMITED", source: "Official website + Companies House", status: "Likely match" },
      { label: "Official website", value: "https://www.firsttouchinnovations.co.uk/", source: "Website result", status: "Found" },
      { label: "Public positioning", value: "Comprehensive construction and carpentry solutions in Sussex.", source: "Official website", status: "Found" },
      { label: "Company number", value: "15731472", source: "Companies House", status: "Found" },
      { label: "Registered office", value: "12 Franklin Road, Portslade, Brighton, England, BN41 1AF", source: "Companies House", status: "Found" },
      { label: "Company status", value: "Active", source: "Companies House", status: "Found" },
      { label: "Business activity", value: "41100 - Development of building projects", source: "Companies House SIC", status: "Found" },
      { label: "TikTok profile", value: "https://www.tiktok.com/@firsttouch_innovations?lang=en-GB", source: "Owner-supplied link from Sam", status: "Trusted owner link" },
      { label: "Google Business category", value: "Contractor in Brighton and Hove, England", source: "Sam screenshot", status: "Verified from screenshot" },
      { label: "Google rating", value: "5.0 stars from 7 Google reviews", source: "Sam screenshot", status: "Verified from screenshot" },
      { label: "Google Business address", value: "12 Franklin Rd, Brighton and Hove, Brighton BN41 1AF", source: "Sam screenshot", status: "Verified from screenshot" },
      { label: "Google Business phone", value: "07943 574948", source: "Sam screenshot", status: "Verified from screenshot" },
      { label: "Google Business hours", value: "Open - closes 5pm", source: "Sam screenshot", status: "Needs full hours check" },
      { label: "Logo check", value: "Visual brand should be compared with the owner's known logo/profile image before confirming.", source: "Human review", status: "Needs check" }
    ],
    sources: [
      { label: "Official website", url: "https://www.firsttouchinnovations.co.uk/" },
      { label: "Instagram from official website", url: "https://www.instagram.com/firsttouch_innovations/" },
      { label: "First Touch TikTok", url: "https://www.tiktok.com/@firsttouch_innovations?lang=en-GB" },
      { label: "Companies House", url: "https://find-and-update.company-information.service.gov.uk/company/15731472" }
    ],
    gaps: [
      "Confirm the logo/profile image with the owner.",
      "Confirm the Instagram and TikTok profiles are controlled by the same business and ask if there are any private/new accounts.",
      "Copy the Google Business/Profile share link when possible so the CRM can open the exact listing later.",
      "Audit Google Business photos, services, review replies, description, service areas and enquiry route.",
      "Confirm phone/email and who handles enquiries."
    ]
  },
  "M8 Designs": {
    confidence: "Strong match - official website supplied",
    humanStatus: "Sam supplied official website",
    logoStatus: "Logo supplied by Sam - compare candidate profiles against it",
    logoPreview: {
      imageUrl: "assets/m8-designs-logo.png",
      label: "Logo supplied by Sam",
      note: "Use this as the visual reference. Candidate websites/social profiles should match this M8 Designs logo before you confirm them."
    },
    socialScan: {
      summary: "Owner-supplied scan now has one trusted website and one trusted social account: m8designs.co.uk and TikTok @m8.designs. Other public social platforms still need owner links or manual confirmation. The visible m8designs.com result is a different business selling boat/fishing accessories in Ohio, so it should not be used.",
      platforms: [
        { platform: "Website", result: "Found: m8designs.co.uk", url: "https://www.m8designs.co.uk/", evidence: "Owner-supplied link from Sam; website presents M8 Designs Ltd construction services in Sussex / Brighton and Hove", status: "Trusted owner link" },
        { platform: "Instagram", result: "Not found", url: "", evidence: "No reliable public profile found that matches the supplied logo and Hove construction context", status: "Ask owner" },
        { platform: "Facebook", result: "Not found", url: "", evidence: "No reliable public profile found that matches the supplied logo and Hove construction context", status: "Ask owner" },
        { platform: "TikTok", result: "Found: @m8.designs", url: "https://www.tiktok.com/@m8.designs?lang=en-GB", evidence: "Owner-supplied link from Sam; compare profile image/content against the supplied M8 Designs logo", status: "Trusted owner link" },
        { platform: "YouTube", result: "Not found", url: "", evidence: "No reliable public profile found that matches the supplied logo and Hove construction context", status: "Ask owner" },
        { platform: "LinkedIn", result: "Not found", url: "", evidence: "Search results showed unrelated M8 companies, not this supplied logo/business", status: "Do not assume" },
        { platform: "Google Business", result: "Likely not set up yet", url: "", evidence: "Sam does not think M8 currently has a Google presence; confirm with owner before creating or claiming one", status: "Likely missing" },
        { platform: "Wrong public match", result: "Mismatch: m8designs.com", url: "https://www.m8designs.com/", evidence: "Boat/fishing accessories business near Macedonia, Ohio; does not match Sam's supplied logo or local construction context", status: "Reject" }
      ]
    },
    summary: "Sam supplied the official M8 Designs website at m8designs.co.uk. It matches the owner transcript, Sussex/Brighton and Hove construction context and the M8 Designs Ltd identity. The separate m8designs.com fishing accessories website in Ohio remains a rejected mismatch.",
    fields: [
      { label: "Provided identity", value: "M8 DESIGNS LTD", source: "Public company index", status: "Likely match" },
      { label: "Official website", value: "https://www.m8designs.co.uk/", source: "Owner-supplied link from Sam", status: "Trusted owner link" },
      { label: "Company number", value: "15672323", source: "Public company index", status: "Found" },
      { label: "Registered office", value: "16 Blatchington Road, Hove, United Kingdom, BN3 3YN", source: "Public company index", status: "Found" },
      { label: "Company status", value: "Active", source: "Public company index", status: "Found" },
      { label: "Business activity", value: "Construction of commercial buildings, other construction installation, building completion and finishing.", source: "SIC codes", status: "Found" },
      { label: "Previous company name", value: "LION CONSTRUCTION SOUTHERN LTD", source: "Public company index", status: "Found" },
      { label: "TikTok profile", value: "https://www.tiktok.com/@m8.designs?lang=en-GB", source: "Owner-supplied link from Sam", status: "Trusted owner link" },
      { label: "Likely wrong match", value: "m8designs.com appears to be boat/fishing accessories in Macedonia, Ohio.", source: "Web result", status: "Mismatch" },
      { label: "Logo check", value: "Trusted M8 Designs logo supplied by Sam and saved in CRM assets.", source: "Human reference", status: "Reference ready" }
    ],
    sources: [
      { label: "M8 Designs official website", url: "https://www.m8designs.co.uk/" },
      { label: "Public company index", url: "https://www.companiesintheuk.co.uk/ltd/m8-designs" },
      { label: "M8 Designs TikTok", url: "https://www.tiktok.com/@m8.designs?lang=en-GB" },
      { label: "Possible wrong M8 Designs result", url: "https://www.m8designs.com/" }
    ],
    gaps: [
      "Ask for Instagram, Facebook, YouTube, LinkedIn and Google Business links that use this logo/profile image, if they exist.",
      "Confirm exact niche and whether the old company name matters."
    ]
  }
};

const agentDetails = {
  "Leader": {
    purpose: "Coordinates the specialist AI agents for the active client stage, then turns their returned notes into a clear completion checklist for Sam.",
    responsibilities: [
      "Reads the current stage action plan on the client page.",
      "Decides which specialist agent should own each task.",
      "Creates a command for each agent and captures the relay note back.",
      "Only marks work as complete when Sam reviews and ticks the task."
    ],
    inputs: "Current client, active offer stage, exact task list, identity/social/website/proof/tracking status and existing CRM notes.",
    outputs: "Delegated agent commands, relay summaries, completion status and the next blocker.",
    guardrails: "Coordinator only. It does not create accounts, request passwords, send client messages or publish anything without Sam."
  },
  "Prospect Scanner": {
    purpose: "Finds renovation, building and home improvement companies across the target locations and turns them into structured CRM prospects.",
    responsibilities: [
      "Searches Brighton, Hove and surrounding areas for relevant companies.",
      "Captures company name, location, service, website and phone where available.",
      "Scores each lead so the team knows who is worth prioritising.",
      "Avoids duplicates and respects the Do Not Contact list."
    ],
    inputs: "Target areas, target services, Google Places data, existing Prospects and Do Not Contact rows.",
    outputs: "New Prospect rows with lead scores, source notes and next actions.",
    guardrails: "Adds prospects only. It does not contact anyone or send messages."
  },
  "Company Research Agent": {
    purpose: "Researches each prospect so the Outreach Writer can sound specific, local and human.",
    responsibilities: [
      "Turns raw prospect rows into useful context before writing.",
      "Creates a personalised hook, likely pain point and best outreach angle.",
      "Uses website notes, service, area and existing CRM notes when available.",
      "Feeds the Outreach Writer so messages avoid generic agency spam."
    ],
    inputs: "Prospect name, area, service, website, Instagram, notes, lead score and existing company research rows.",
    outputs: "Company Research rows with hook, pain point, opportunity and outreach angle.",
    guardrails: "Research only. It does not contact the company or invent proof."
  },
  "Content Creation Agent": {
    purpose: "Turns Company Research rows into practical content and ad ideas for each prospect or client.",
    responsibilities: [
      "Uses research hooks, pain points and opportunities to shape filming ideas.",
      "Creates starter content foundations first, then advert hooks when offer two is appropriate.",
      "Suggests what Sam should film on site with camera, drone and microphones.",
      "Keeps content specific to the company instead of generic renovation ads."
    ],
    inputs: "Company Research rows, service type, area, prospect notes, content performance and client goals.",
    outputs: "Filming angles, advert hooks, Meta ad ideas, talking points and content briefs.",
    guardrails: "Ideas only. It does not post content or run ads without human approval."
  },
  "Xello Social Growth Agent": {
    purpose: "Grows Xello Media's own Instagram and TikTok presence with credible founder-led marketing content.",
    responsibilities: [
      "Plans Reels, TikToks, carousels and short-form content ideas for Xello.",
      "Creates marketing tips that show Xello understands lead generation, websites, Meta ads and tracking.",
      "Turns Sam's founder story, local Brighton/Hove angle and filming equipment into trust-building content.",
      "Suggests hooks, scripts, CTAs and weekly posting plans."
    ],
    inputs: "Xello offer, target market, founder story, available equipment, trends/manual research notes and content performance.",
    outputs: "Xello Social Plan rows with platform, pillar, hook, format, script, CTA and status.",
    guardrails: "Planning only. It does not post, comment, DM or represent Xello publicly without human approval."
  },
  "Website Audit Agent": {
    purpose: "Reviews a prospect's website and identifies practical ways Xello could improve conversion into quote enquiries.",
    responsibilities: [
      "Checks whether the website has clear calls to action.",
      "Looks for weak trust signals, unclear offers and poor mobile journeys.",
      "Creates audit angles that can be used in outreach and sales calls.",
      "Flags website gaps that support the £1,500/month offer."
    ],
    inputs: "Prospect website, service type, location, notes and current pipeline stage.",
    outputs: "Audit notes, improvement ideas, sales angles and call preparation points.",
    guardrails: "No fake claims, no invented results and no guarantees."
  },
  "Social Audit Agent": {
    purpose: "Reviews Instagram and social presence to find content gaps, proof opportunities and DM angles.",
    responsibilities: [
      "Checks if the company posts recent project work.",
      "Looks for weak profile positioning or missing enquiry prompts.",
      "Identifies content ideas for renovation, roofing, kitchen and extension companies.",
      "Prepares short observations for manual-assisted Instagram outreach."
    ],
    inputs: "Instagram handle, company name, service, location and existing notes.",
    outputs: "Social audit notes, DM context, content opportunities and follow-up ideas.",
    guardrails: "Instagram outreach stays approval-first and human-sent."
  },
  "Outreach Writer": {
    purpose: "Writes personalised email and Instagram draft messages that offer a free growth audit.",
    responsibilities: [
      "Turns prospects into email and DM drafts.",
      "Keeps copy short, local and specific to the company.",
      "Uses Sam from Xello Media as the sender.",
      "Creates follow-up copy without claiming guaranteed results."
    ],
    inputs: "Prospect data, lead score, website/social notes, offer details and approval rules.",
    outputs: "Rows in Outreach Drafts for review, edit, approval or manual sending.",
    guardrails: "Only drafts messages. It does not send emails or DMs automatically."
  },
  "Reply Triage Agent": {
    purpose: "Classifies replies and tells you what the next best action should be.",
    responsibilities: [
      "Labels replies as interested, objection, not now, booked call or not suitable.",
      "Suggests the next follow-up or call action.",
      "Moves warm leads forward in the pipeline.",
      "Creates clean summaries so you do not lose context."
    ],
    inputs: "Replies, prospect history, outreach status and current pipeline stage.",
    outputs: "Reply rows, suggested next actions, call tasks and updated prospect statuses.",
    guardrails: "It can suggest replies, but sending stays approval-first."
  },
  "Client Strategy Agent": {
    purpose: "Turns a paying client's business goals into simple priorities, so monthly work does not become random posting and guessing.",
    responsibilities: [
      "Summarises what the client sells, where they want work and what jobs are highest value.",
      "Turns monthly capacity and pipeline gaps into a focused growth plan.",
      "Chooses which services should get content, website improvements and ad tests first.",
      "Feeds the Content Creation Agent, Website Audit Agent and Reporting Agent with the right priorities."
    ],
    inputs: "Client onboarding answers, service areas, target job types, current pipeline, ad budget, past results and client notes.",
    outputs: "Monthly client priorities, campaign focus, content themes, website improvement focus and delivery notes.",
    guardrails: "It recommends priorities only. Sam confirms what the client can actually handle before work begins."
  },
  "Meta Test Planner": {
    purpose: "Prepares offer two, the 14-day Meta lead test, after the starter foundations are ready.",
    responsibilities: [
      "Turns the approved offer angle into campaign structure and ad set notes.",
      "Drafts Meta ad copy, lead form questions and tracking fields.",
      "Checks whether the campaign should use a Meta lead form, website form or call booking route.",
      "Creates the pre-launch checklist so tracking and notifications are ready."
    ],
    inputs: "Company research, content brief, website audit, client offer, service area, ad budget and success measure.",
    outputs: "Campaign plan, advert copy, lead form questions, tracking setup list and launch checklist.",
    guardrails: "It never launches ads or changes budgets. Sam manually checks and launches inside Meta."
  },
  "Tracking Agent": {
    purpose: "Makes sure enquiries, sources and follow-up stages can be tracked before any paid traffic is considered.",
    responsibilities: [
      "Creates the lead tracking fields for the current client stage.",
      "Checks whether every enquiry source has a simple status.",
      "Flags missing source, project type, value, area, quote stage and next-action fields.",
      "Feeds Leader with whether a task is trackable and ready to tick off."
    ],
    inputs: "Current client action plan, enquiry route, social scan status, CRM fields and owner follow-up notes.",
    outputs: "Tracking field checklist, task status notes and follow-up rules.",
    guardrails: "It tracks and recommends only. It does not contact leads or change client systems automatically."
  },
  "Reporting Agent": {
    purpose: "Summarises what is happening in the agency so you can see the business clearly each week.",
    responsibilities: [
      "Tracks prospects, drafts, replies, calls, clients and spend.",
      "Creates weekly CEO brief rows.",
      "Flags risks like API spend, weak follow-up or too many unreviewed drafts.",
      "Turns messy activity into simple decisions."
    ],
    inputs: "All CRM tabs, spend data, replies, calls, client rows and risks.",
    outputs: "CEO Brief rows, dashboard metrics, risk notes and weekly priorities.",
    guardrails: "Reports and recommends. It does not make financial commitments or send external messages."
  }
};

function loadState() {
  const saved = localStorage.getItem(storageKey);
  const data = saved ? safeParse(saved) : structuredClone(defaultData);
  const merged = { ...structuredClone(defaultData), ...data };
  merged.agents = mergeByName(merged.agents || [], defaultData.agents);
  merged.clients = mergeByField(merged.clients || [], defaultData.clients, "company");
  merged.clientAnalyses = mergeByField(merged.clientAnalyses || [], defaultData.clientAnalyses, "company");
  merged.delivery = mergeByField(merged.delivery || [], defaultData.delivery, "client");
  merged.xelloSocial = mergeByField(merged.xelloSocial || [], defaultData.xelloSocial, "hook");
  merged.outreachFeedback = merged.outreachFeedback || defaultData.outreachFeedback;
  merged.replyResponses = merged.replyResponses || defaultData.replyResponses;
  merged.companyResearch = merged.companyResearch || defaultData.companyResearch;
  merged.websiteAudits = mergeByField(merged.websiteAudits || [], defaultData.websiteAudits, "url");
  merged.socialAudits = mergeByField(merged.socialAudits || [], defaultData.socialAudits, "company");
  merged.contentIdeas = merged.contentIdeas || defaultData.contentIdeas;
  merged.contentBriefs = mergeByField(merged.contentBriefs || [], defaultData.contentBriefs, "title");
  merged.agentOutputs = merged.agentOutputs || defaultData.agentOutputs;
  merged.socialCalendar = merged.socialCalendar || defaultData.socialCalendar;
  merged.contentPillars = merged.contentPillars || defaultData.contentPillars;
  merged.adExamples = mergeByField(merged.adExamples || [], defaultData.adExamples, "name");
  merged.firstTouchProduction = merged.firstTouchProduction || defaultData.firstTouchProduction;
  merged.firstTouchAdAngles = merged.firstTouchAdAngles || defaultData.firstTouchAdAngles;
  merged.firstTouchMetaPlan = merged.firstTouchMetaPlan || defaultData.firstTouchMetaPlan;
  merged.firstTouchLearningPlan = merged.firstTouchLearningPlan || defaultData.firstTouchLearningPlan;
  merged.firstTouchCaseStudy = merged.firstTouchCaseStudy || defaultData.firstTouchCaseStudy;
  if (hasLegacyFirstTouchShootStrategy(merged)) {
    merged.firstTouchProduction = defaultData.firstTouchProduction;
    merged.firstTouchAdAngles = defaultData.firstTouchAdAngles;
    merged.firstTouchLearningPlan = defaultData.firstTouchLearningPlan;
  }
  merged.testJourney = merged.testJourney || defaultData.testJourney;
  merged.demoProof = merged.demoProof || defaultData.demoProof;
  merged.icpProfile = merged.icpProfile || defaultData.icpProfile;
  merged.customerProblems = merged.customerProblems || defaultData.customerProblems;
  merged.customerJourneyMap = merged.customerJourneyMap || defaultData.customerJourneyMap;
  merged.offerLadder = merged.offerLadder || defaultData.offerLadder;
  merged.outreachTraining = merged.outreachTraining || defaultData.outreachTraining;
  merged.clientOwnerResponses = {
    ...(defaultData.clientOwnerResponses || {}),
    ...(merged.clientOwnerResponses || {})
  };
  merged.leaderRuns = merged.leaderRuns || {};
  merged.leaderTaskCompletions = merged.leaderTaskCompletions || {};
  merged.leaderTaskEvidence = merged.leaderTaskEvidence || {};
  merged.openCurrentActionPlanKey = merged.openCurrentActionPlanKey || "";
  return migrateOfferStrategy(merged);
}

function hasLegacyFirstTouchShootStrategy(data) {
  const productionText = JSON.stringify(data.firstTouchProduction || []);
  const angleText = JSON.stringify(data.firstTouchAdAngles || []);
  const learningText = JSON.stringify(data.firstTouchLearningPlan || []);
  return productionText.includes("Film enough real vertical footage to create 5 short Meta adverts")
    || angleText.includes("Local Trust Ad")
    || learningText.includes("Days 9-11");
}

function migrateOfferStrategy(data) {
  const byTitle = (rows = [], title) => rows.find((row) => row.title === title);
  const byName = (rows = [], name) => rows.find((row) => row.name === name);
  const byClient = (rows = [], client) => rows.find((row) => row.client === client);
  const trialClientNames = ["First Touch Innovations", "M8 Designs"];

  const starterClientRows = trialClientNames.map((company) => {
    const defaultClient = defaultData.clients.find((row) => row.company === company);
    const existingClient = (data.clients || []).find((row) => row.company === company);
    return { ...defaultClient, ...existingClient };
  });
  data.clients = [
    ...starterClientRows,
    ...(data.clients || []).filter((row) => row.company && !trialClientNames.includes(row.company) && row.company !== "First client target")
  ];

  data.clientAnalyses = (data.clientAnalyses || []).map((analysis) => {
    if (!trialClientNames.includes(analysis.company)) return analysis;
    const latest = defaultData.clientAnalyses.find((row) => row.company === analysis.company);
    if (!latest) return analysis;
    return {
      ...analysis,
      status: latest.status,
      relationship: latest.relationship,
      offerStage: latest.offerStage,
      serviceCategory: latest.serviceCategory,
      area: latest.area,
      researchStatus: latest.researchStatus,
      objective: latest.objective,
      icp: structuredClone(latest.icp),
      businessAnalysis: structuredClone(latest.businessAnalysis),
      discoveryQuestions: structuredClone(latest.discoveryQuestions),
      foundations: structuredClone(latest.foundations),
      foundationAudit: structuredClone(latest.foundationAudit),
      competitorBenchmark: structuredClone(latest.competitorBenchmark),
      identityCheck: {
        ...(analysis.identityCheck || {}),
        confidence: latest.identityCheck?.confidence || analysis.identityCheck?.confidence,
        humanStatus: latest.identityCheck?.humanStatus || analysis.identityCheck?.humanStatus,
        logoStatus: latest.identityCheck?.logoStatus || analysis.identityCheck?.logoStatus,
        decisionRule: latest.identityCheck?.decisionRule || analysis.identityCheck?.decisionRule,
        evidence: structuredClone(latest.identityCheck?.evidence || analysis.identityCheck?.evidence || []),
        agentRules: structuredClone(latest.identityCheck?.agentRules || analysis.identityCheck?.agentRules || [])
      }
    };
  });

  const starterAnalyses = (data.clientAnalyses || []).filter((analysis) => trialClientNames.includes(analysis.company));
  const starterIdeas = starterAnalyses.flatMap(getStarterClientContentIdeas);
  const starterBriefs = starterAnalyses.flatMap(getStarterClientContentBriefs);
  data.contentIdeas = [
    ...starterIdeas,
    ...(data.contentIdeas || []).filter((item) => !trialClientNames.includes(item.company))
  ];
  data.contentBriefs = [
    ...starterBriefs,
    ...(data.contentBriefs || []).filter((item) => !trialClientNames.includes(item.company))
  ];

  const oldProof = (data.outreachTraining || []).find((row) => row.rule === "Proof Offer");
  if (oldProof) {
    oldProof.rule = "Starter Offer First";
    oldProof.detail = "After they reply, explain the starter foundations offer first: social setup, Google Business, website basics, tracking and content foundations.";
  }
  if (!data.outreachTraining.some((row) => row.rule === "Lead Test Timing")) {
    data.outreachTraining.splice(5, 0, { rule: "Lead Test Timing", detail: "Only offer the 14-day local lead test once the company has enough trust proof and online foundations to make paid traffic useful.", owner: "Sales" });
  }

  const entry = byTitle(data.knowledge, "Entry Offer");
  if (entry) entry.detail = "Start with the starter foundations offer: social setup, Google Business improvements, website/CTA basics, tracking and content foundations.";
  if (!byTitle(data.knowledge, "Middle Offer")) {
    data.knowledge.splice(1, 0, { title: "Middle Offer", detail: "After the basics are strong enough, offer the paid 14-day local visibility and lead test. Company covers ad spend.", owner: "Xello" });
  }
  const salesCta = byTitle(data.knowledge, "Sales CTA");
  if (salesCta) salesCta.detail = "First message starts a conversation with a compliment, one brief line explaining that Xello helps improve local online presence and a simple question. Do not lead with paid ads.";

  const contentPlaybook = byName(data.playbooks, "Content Creation");
  if (contentPlaybook) contentPlaybook.steps = "Use company research to choose profile improvements, starter content ideas, what to film and which hooks could later support a paid lead test.";
  if (!byName(data.playbooks, "Starter Foundations")) {
    const leadTestIndex = data.playbooks.findIndex((row) => row.name === "14-Day Lead Test");
    data.playbooks.splice(leadTestIndex >= 0 ? leadTestIndex : data.playbooks.length, 0, { name: "Starter Foundations", steps: "Create/optimise social profiles, Google Business, website/CTA basics, tracking and content foundations before paid ads.", agent: "Sales" });
  }
  const leadTest = byName(data.playbooks, "14-Day Lead Test");
  if (leadTest) leadTest.steps = "Offer two only: one filming visit, three edited adverts, one Meta campaign, lead tracking and one results review. Company covers ad spend.";

  const firstTouch = byClient(data.delivery, "First Touch Innovations");
  if (firstTouch && String(firstTouch.stage || "").includes("14-day")) {
    Object.assign(firstTouch, {
      stage: "Starter foundations",
      checklist: "Social/GMB/website basics, content plan and tracking foundations before any paid test.",
      adSpend: 0,
      siteVisit: "Optional",
      contentStatus: "Foundation plan ready",
      campaignStatus: "Not ready for ads",
      nextReview: "After starter setup",
      nextAction: "Confirm missing socials, Google Business gaps and website basics"
    });
  }
  const newClient = byClient(data.delivery, "New Client Template");
  if (newClient && newClient.stage === "Onboarding") {
    Object.assign(newClient, {
      stage: "Starter onboarding",
      checklist: "Social access, website access, Google Business access, photos, testimonials, logo, services and tracking route.",
      nextAction: "Collect access and foundation details"
    });
  }
  const campaignLaunch = byClient(data.delivery, "Campaign Launch");
  if (campaignLaunch) {
    Object.assign(campaignLaunch, {
      client: "Offer Two Template",
      stage: "14-day lead test",
      checklist: "Campaign angle, lead form, conversion tracking, ad spend boundary, first creatives.",
      siteVisit: "To schedule",
      contentStatus: "Create first adverts",
      nextAction: "Only launch after starter foundations are ready"
    });
  }
  const seenClients = new Set();
  data.delivery = (data.delivery || []).filter((row) => {
    if (!row.client || seenClients.has(row.client)) return false;
    seenClients.add(row.client);
    return true;
  });

  data.testJourney = (data.testJourney || []).some((row) => row.stage === "6. 14-day test")
    ? structuredClone(defaultData.testJourney)
    : data.testJourney;
  data.demoProof = (data.demoProof || []).some((row) => row.detail?.includes("The 14-day test has"))
    ? structuredClone(defaultData.demoProof)
    : data.demoProof;

  data.replies = (data.replies || []).map((reply) => ({
    ...reply,
    nextAction: String(reply.nextAction || "").includes("14-day test")
      ? "Explain starter foundations and ask for 10-minute call"
      : reply.nextAction
  }));

  data.replyResponses = (data.replyResponses || []).map((response) => {
    if (!String(response.message || "").includes("14-day local lead test") && !String(response.message || "").includes("one site visit")) return response;
    const updated = (defaultData.replyResponses || []).find((row) => row.company === response.company && row.channel === response.channel);
    return updated ? { ...response, message: updated.message, nextAction: updated.nextAction } : response;
  });

  data.memory = (data.memory || []).map((memory) => ({
    ...memory,
    action: String(memory.action || "").includes("explain the 14-day test")
      ? "Keep first touch light and explain starter foundations after a reply."
      : memory.action
  }));

  data.agents = (data.agents || []).map((agent) =>
    agent.name === "Meta Test Planner"
      ? { ...agent, purpose: "Prepares campaign structure, lead forms and tracking fields for offer two: the 14-day lead test.", currentTask: agent.currentTask === "Waiting for approved test client" ? "Waiting for a client with foundations ready" : agent.currentTask }
      : agent
  );

  return data;
}

function safeParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return structuredClone(defaultData);
  }
}

function mergeByName(currentRows, defaultRows) {
  const rows = [...currentRows];
  const existing = new Set(rows.map((row) => row.name));
  defaultRows.forEach((row) => {
    if (!existing.has(row.name)) rows.push(row);
  });
  return rows;
}

function mergeByField(currentRows, defaultRows, field) {
  const rows = [...currentRows];
  const existing = new Set(rows.map((row) => row[field]));
  defaultRows.forEach((row) => {
    if (!existing.has(row[field])) rows.push(row);
  });
  return rows;
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function displayDate() {
  return new Date().toLocaleString([], { dateStyle: "short", timeStyle: "short" });
}

function domainFromUrl(url = "") {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return String(url).replace(/^https?:\/\//, "").split("/")[0] || "website";
  }
}

function titleFromDomain(domain = "") {
  return domain
    .split(".")[0]
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getButtonContext(button) {
  const card = button.closest(".draft-card, .panel, .pipeline-card, .client-card, .spend-card, .metric-card, .feedback-card");
  const heading = card?.querySelector("h2, h3, strong, .label")?.textContent?.trim();
  return heading ? heading.toLowerCase().replace(/\s+/g, "-").slice(0, 80) : "";
}

function getButtonKey(button) {
  if (button.id) return `id:${button.id}`;

  const datasetParts = Object.entries(button.dataset)
    .filter(([, value]) => value !== undefined && value !== "")
    .map(([key, value]) => `${key}:${value}`)
    .join("|");

  const text = button.textContent.trim().toLowerCase().replace(/\s+/g, "-").slice(0, 80);
  const context = getButtonContext(button);
  return [context, datasetParts || text].filter(Boolean).join("::") || `button:${text}`;
}

function markButtonClicked(button) {
  if (!button) return;
  const key = getButtonKey(button);
  activeButtonKeys.add(key);
  button.classList.add("was-clicked", "click-flash");
  scheduleButtonReset(key, button);
}

function scheduleButtonReset(key, button, delay = 420) {
  if (!key) return;
  window.clearTimeout(buttonFlashTimers.get(key));
  const timer = window.setTimeout(() => {
    activeButtonKeys.delete(key);
    button?.classList.remove("was-clicked", "click-flash");
    applyClickedButtonStates();
    buttonFlashTimers.delete(key);
  }, delay);
  buttonFlashTimers.set(key, timer);
}

function applyClickedButtonStates() {
  document.querySelectorAll("button").forEach((button) => {
    const active = activeButtonKeys.has(getButtonKey(button));
    button.classList.toggle("was-clicked", active);
    button.classList.toggle("click-flash", active);
  });
}

function getApiUrl() {
  return localStorage.getItem(apiUrlKey) || "";
}

function saveApiUrl(url) {
  localStorage.setItem(apiUrlKey, url.trim());
  liveMode = false;
}

function setConnectionStatus(message, connected = false) {
  const bar = document.getElementById("connectionBar");
  const text = document.getElementById("connectionText");
  if (!bar || !text) return;
  bar.classList.toggle("connected", connected);
  text.textContent = message;
}

function buildActionUrl(action, params = {}) {
  const apiUrl = getApiUrl();
  const url = new URL(apiUrl);
  url.searchParams.set("action", action);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) url.searchParams.set(key, String(value));
  });
  return url;
}

function callSheetAction(action, params = {}, pendingMessage = "Working in Google Sheets...") {
  const apiUrl = getApiUrl();
  if (!apiUrl) {
    setConnectionStatus("Connect your Google Sheet before running dashboard actions.", false);
    openSheetDialog();
    return;
  }

  const callbackName = `xelloActionCallback_${Date.now()}`;
  const script = document.createElement("script");
  const url = buildActionUrl(action, params);
  url.searchParams.set("callback", callbackName);
  let finished = false;

  setConnectionStatus(pendingMessage, false);

  window[callbackName] = (payload) => {
    finished = true;
    try {
      if (!payload || payload.ok === false) throw new Error(payload?.message || "Google Sheets action failed.");
      applySheetPayload(payload.snapshot || payload);
      liveMode = true;
      saveState();
      renderAll();
      setConnectionStatus(payload.message || "Google Sheets updated.", true);
    } catch (error) {
      setConnectionStatus(`Action failed: ${error.message}`, false);
    } finally {
      delete window[callbackName];
      script.remove();
    }
  };

  script.onerror = () => {
    finished = true;
    setConnectionStatus("Action failed. Check the Apps Script deployment and access settings.", false);
    delete window[callbackName];
    script.remove();
  };

  setTimeout(() => {
    if (!finished) {
      setConnectionStatus("Still waiting for Google Sheets. Some AI actions can take a few minutes; leave this tab open.", false);
    }
  }, 120000);

  script.src = url.toString();
  document.body.appendChild(script);
}

function money(value) {
  return `£${Number(value).toFixed(2)}`;
}

function statusClass(status) {
  const lowered = String(status).toLowerCase();
  if (lowered.includes("approved") || lowered.includes("won") || lowered.includes("warm") || lowered.includes("booked") || lowered.includes("complete")) return "status hot";
  if (lowered.includes("review") || lowered.includes("edit") || lowered.includes("draft") || lowered.includes("approval") || lowered.includes("queued") || lowered.includes("running")) return "status warning";
  return "status";
}

const reviewStatuses = ["Needs Review", "Approved", "Used", "Archived"];
const statusCollections = new Set(["websiteAudits", "socialAudits", "contentBriefs", "agentOutputs"]);

function normaliseStatus(status, fallback = "Needs Review") {
  const raw = String(status || fallback).trim().toLowerCase();
  if (raw === "ready" || raw === "reviewed" || raw === "practice") return "Needs Review";
  const match = reviewStatuses.find((item) => item.toLowerCase() === raw);
  return match || fallback;
}

function getAuditScores(seed = "") {
  const source = String(seed || "xello").split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const score = (offset, base = 72) => Math.max(45, Math.min(94, base + ((source + offset) % 18) - 6));
  return {
    cta: score(3, 72),
    mobile: score(11, 74),
    trust: score(19, 78),
    form: score(29, 68),
    speed: score(37, 73),
    offer: score(43, 80)
  };
}

function averageAuditScore(scores) {
  const values = Object.values(scores || {}).map(Number).filter((value) => Number.isFinite(value));
  if (!values.length) return 70;
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function percent(value, target) {
  const safeTarget = Number(target) || 1;
  return Math.max(0, Math.min(100, Math.round((Number(value) / safeTarget) * 100)));
}

function renderProgressBar(value, target, label = "") {
  const progress = percent(value, target);
  return `
    <div class="progress-template" aria-label="${label || "Progress"} ${progress}%">
      <div class="progress-template-top">
        <span>${label}</span>
        <strong>${progress}%</strong>
      </div>
      <div class="progress-template-track">
        <span style="width:${progress}%"></span>
      </div>
    </div>
  `;
}

function renderLeadScore(score = 0) {
  const safeScore = Math.max(0, Math.min(100, Number(score) || 0));
  const label = safeScore >= 85 ? "Prime" : safeScore >= 70 ? "Warm" : safeScore >= 50 ? "Nurture" : "Low";
  return `
    <div class="lead-score">
      <strong>${safeScore}</strong>
      <span>${label}</span>
      <div class="lead-score-track"><i style="width:${safeScore}%"></i></div>
    </div>
  `;
}

function scoreGrid(scores = {}) {
  const labels = {
    cta: "CTA",
    mobile: "Mobile",
    trust: "Trust",
    form: "Lead Form",
    speed: "Speed",
    offer: "Offer"
  };
  return `
    <div class="score-grid">
      ${Object.entries(labels).map(([key, label]) => {
        const value = Number(scores[key] || 0);
        return `
          <div class="score-item">
            <span>${label}</span>
            <strong>${value || "?"}</strong>
            <div class="score-track"><span style="width:${Math.max(4, Math.min(100, value || 0))}%"></span></div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function statusButtons(collection, index, currentStatus) {
  if (!statusCollections.has(collection)) return "";
  const current = normaliseStatus(currentStatus);
  return `
    <div class="status-actions">
      ${reviewStatuses.map((status) => `
        <button class="status-button ${status === current ? "active" : ""}" data-status-collection="${collection}" data-status-index="${index}" data-status-value="${status}">${status}</button>
      `).join("")}
    </div>
  `;
}

function bindStatusButtons() {
  document.querySelectorAll("[data-status-collection]").forEach((button) => {
    button.addEventListener("click", () => {
      const collection = button.dataset.statusCollection;
      const index = Number(button.dataset.statusIndex);
      const status = button.dataset.statusValue;
      if (!statusCollections.has(collection) || !state[collection]?.[index]) return;
      state[collection][index].status = status;
      state[collection][index].updatedAt = displayDate();
      saveState();
      renderAll();
    });
  });
}

function calculateMetrics() {
  const prospects = state.prospects;
  const drafts = state.drafts;
  const replies = state.replies?.length || prospects.filter((lead) => ["Warm Reply", "Call Booked", "Proposal Sent", "Won"].includes(lead.status)).length;
  const calls = state.calls?.length || prospects.filter((lead) => lead.status === "Call Booked").length;
  const activeClientAnalyses = (state.clientAnalyses || defaultData.clientAnalyses || []).filter((analysis) => ["First Touch Innovations", "M8 Designs"].includes(analysis.company));
  const foundationScores = activeClientAnalyses.map((analysis) => Number(analysis.foundationAudit?.score || 0)).filter(Boolean);
  const averageFoundationScore = foundationScores.length
    ? Math.round(foundationScores.reduce((sum, score) => sum + score, 0) / foundationScores.length)
    : 0;
  const activeAgents = state.agents.filter((agent) => ["Running", "Waiting Approval", "Queued"].includes(agent.status)).length;
  const reviewOutputs = [
    ...(state.websiteAudits || []),
    ...(state.socialAudits || []),
    ...(state.contentBriefs || []),
    ...(state.agentOutputs || [])
  ].filter((item) => normaliseStatus(item.status) === "Needs Review").length;
  const pipelineValue = prospects.filter((lead) => ["Call Booked", "Proposal Sent", "Won"].includes(lead.status)).length * 1500;
  const deliveryActions = state.delivery.filter((item) => item.nextAction && !String(item.health).toLowerCase().includes("complete")).length;
  const starterContentCount = (state.contentIdeas || []).filter((item) => isStarterFoundationClient(item.company)).length + (state.firstTouchProduction || []).length;
  const leadTests = state.delivery.filter((item) => String(item.stage || "").toLowerCase().includes("test") || String(item.campaignStatus || "").toLowerCase().includes("launch")).length;

  return [
    { label: "Active clients", value: activeClientAnalyses.length, note: "Trial delivery", icon: "C", progressValue: activeClientAnalyses.length, progressTarget: 2, progressLabel: "Trial clients" },
    { label: "Foundation score", value: `${averageFoundationScore}%`, note: "Avg readiness", icon: "F", progressValue: averageFoundationScore, progressTarget: 100, progressLabel: "Ready target" },
    { label: "Client actions", value: deliveryActions, note: "Need movement", icon: "D", progressValue: Math.max(0, 8 - deliveryActions), progressTarget: 8, progressLabel: "Delivery clarity" },
    { label: "Lead tests", value: leadTests, note: "Gated for now", icon: "G", progressValue: leadTests, progressTarget: 1, progressLabel: "Only when ready" },
    { label: "Agent queue", value: activeAgents, note: "Running/queued", icon: "AI", progressValue: activeAgents, progressTarget: Math.max(1, state.agents.length), progressLabel: "Agent coverage" },
    { label: "Review queue", value: drafts.filter((draft) => draft.status !== "Approved").length + reviewOutputs, note: "Drafts/outputs", icon: "R" },
    { label: "Starter content", value: starterContentCount, note: "Ideas/assets", icon: "S", progressValue: starterContentCount, progressTarget: 12, progressLabel: "Proof bank" },
    { label: "Pipeline value", value: `£${(pipelineValue / 1000).toFixed(1)}k`, note: `${replies} replies, ${calls} calls`, icon: "P", progressValue: pipelineValue, progressTarget: 4500, progressLabel: "3-client target" }
  ];
}

function calculateAgentMetrics() {
  const active = state.agents.filter((agent) => ["Running", "Waiting Approval", "Queued"].includes(agent.status)).length;
  const approvals = state.agentTasks.filter((task) => task.approval === "Yes").length + state.drafts.filter((draft) => draft.status !== "Approved").length;
  const totalAgentCost = state.agents.reduce((sum, agent) => sum + Number(agent.cost || 0), 0);

  return [
    { label: "Active agents", value: active, note: "Live/queued", icon: "AI" },
    { label: "Tasks tracked", value: state.agentTasks.length, note: "Agent workload", icon: "T" },
    { label: "Needs approval", value: approvals, note: "Human review", icon: "!" },
    { label: "Agent spend", value: money(totalAgentCost), note: "AI/search costs", icon: "£" }
  ];
}

function calculateTodayMetrics() {
  const approvals = state.drafts.filter((draft) => draft.status !== "Approved").length;
  const warm = state.prospects.filter((lead) => ["Warm Reply", "Call Booked", "Proposal Sent"].includes(lead.status)).length;
  const researchNeeded = state.prospects.filter((lead) => ["New Prospect", "AI Drafted"].includes(lead.status)).length;
  const deliveryActions = state.delivery.filter((item) => item.nextAction && !String(item.health).toLowerCase().includes("complete")).length;
  const reviewOutputs = [
    ...(state.websiteAudits || []),
    ...(state.socialAudits || []),
    ...(state.contentBriefs || []),
    ...(state.agentOutputs || [])
  ].filter((item) => normaliseStatus(item.status) === "Needs Review").length;

  return [
    { label: "Review", value: approvals + reviewOutputs, note: "Drafts/outputs", icon: "R" },
    { label: "Warm leads", value: warm, note: "Follow up today", icon: "W" },
    { label: "Research", value: researchNeeded, note: "Need context", icon: "C" },
    { label: "Delivery", value: deliveryActions, note: "Client actions", icon: "D" }
  ];
}

function calculateDeliveryMetrics() {
  const rows = state.delivery || [];
  const leads = rows.reduce((sum, item) => sum + Number(item.leads || 0), 0);
  const bookedCalls = rows.reduce((sum, item) => sum + Number(item.bookedCalls || 0), 0);
  const adSpend = rows.reduce((sum, item) => sum + Number(item.adSpend || 0), 0);
  const activeTests = rows.filter((item) => String(item.stage || "").toLowerCase().includes("test") || String(item.campaignStatus || "").toLowerCase().includes("launch")).length;

  return [
    { label: "Offer two tests", value: activeTests, note: "After foundations", icon: "T" },
    { label: "Client ad spend", value: money(adSpend), note: "Paid by client", icon: "£" },
    { label: "Leads", value: leads, note: "Tracked enquiries", icon: "L" },
    { label: "Booked calls", value: bookedCalls, note: "Quote/call outcomes", icon: "B" }
  ];
}

function calculateSocialMetrics() {
  const planned = (state.xelloSocial || []).filter((item) => item.status !== "Posted").length;
  const weekly = state.socialCalendar?.length || 0;
  const pillars = state.contentPillars?.length || 0;
  const reels = (state.xelloSocial || []).filter((item) => String(item.platform).toLowerCase().includes("reel") || String(item.platform).toLowerCase().includes("tiktok")).length;

  return [
    { label: "Ideas", value: planned, note: "Ready to film", icon: "I" },
    { label: "Weekly slots", value: weekly, note: "Posting rhythm", icon: "W" },
    { label: "Pillars", value: pillars, note: "Brand themes", icon: "P" },
    { label: "Video ideas", value: reels, note: "Reels/TikToks", icon: "V" }
  ];
}

function renderMetricCards(targetId, metrics) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = metrics
    .map((metric) => `
      <article class="metric-card">
        <div class="metric-top">
          <div class="metric-icon">${metric.icon}</div>
          <span class="metric-note">${metric.note}</span>
        </div>
        <p class="label">${metric.label}</p>
        <p class="metric-value">${metric.value}</p>
        ${metric.progressTarget ? renderProgressBar(metric.progressValue, metric.progressTarget, metric.progressLabel) : ""}
      </article>
    `)
    .join("");
}

function calculatePerformance() {
  const approvedDrafts = state.drafts.filter((draft) => draft.status === "Approved" || draft.status === "Sent manually").length;
  const warm = state.prospects.filter((lead) => ["Warm Reply", "Call Booked", "Proposal Sent", "Won"].includes(lead.status)).length;
  const calls = state.calls?.length || state.prospects.filter((lead) => lead.status === "Call Booked").length;
  const completedTasks = state.agentTasks.filter((task) => String(task.status).toLowerCase().includes("complete")).length;
  const reviewedOutputs = [
    ...(state.websiteAudits || []),
    ...(state.socialAudits || []),
    ...(state.contentBriefs || []),
    ...(state.agentOutputs || [])
  ].filter((item) => ["Approved", "Used", "Archived"].includes(normaliseStatus(item.status))).length;
  const pipelineValue = state.prospects.filter((lead) => ["Call Booked", "Proposal Sent", "Won"].includes(lead.status)).length * 1500;
  const points = approvedDrafts * 15 + warm * 25 + calls * 40 + completedTasks * 20 + reviewedOutputs * 10;
  const level = Math.max(1, Math.floor(points / 250) + 1);
  const nextLevelPoints = level * 250;

  const badges = [
    { title: "Follow-up Streak", detail: warm ? `${warm} warm conversation${warm === 1 ? "" : "s"} active` : "Build by creating warm replies", active: warm > 0 },
    { title: "Pipeline Builder", detail: pipelineValue ? `£${pipelineValue.toLocaleString()}/mo in motion` : "Book calls to unlock", active: pipelineValue > 0 },
    { title: "Approval Captain", detail: approvedDrafts ? `${approvedDrafts} draft${approvedDrafts === 1 ? "" : "s"} approved/sent` : "Approve drafts to unlock", active: approvedDrafts > 0 },
    { title: "Foundation First", detail: "Lead test stays gated until basics are ready", active: true }
  ];

  return { points, level, nextLevelPoints, approvedDrafts, warm, calls, pipelineValue, badges };
}

function renderPerformancePanel() {
  const target = document.getElementById("performancePanel");
  if (!target) return;
  const performance = calculatePerformance();
  target.innerHTML = `
    <div class="performance-main">
      <div>
        <p class="label">Operating level</p>
        <h2>Level ${performance.level} CRM Operator</h2>
        <p>Earn points by approving work, following up warm leads, booking calls and moving starter foundations forward.</p>
      </div>
      <div class="level-card">
        <strong>${performance.points}</strong>
        <span>CRM points</span>
        ${renderProgressBar(performance.points, performance.nextLevelPoints, "Next level")}
      </div>
    </div>
    <div class="performance-badges">
      ${performance.badges.map((badge) => `
        <article class="achievement-badge ${badge.active ? "active" : ""}">
          <span>${badge.active ? "✓" : "·"}</span>
          <div>
            <strong>${badge.title}</strong>
            <p>${badge.detail}</p>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderMetrics() {
  renderPerformancePanel();
  renderMetricCards("metricGrid", calculateMetrics());
  renderMetricCards("agentMetricGrid", calculateAgentMetrics());
  renderMetricCards("todayMetricGrid", calculateTodayMetrics());
  renderMetricCards("deliveryMetricGrid", calculateDeliveryMetrics());
  renderMetricCards("socialMetricGrid", calculateSocialMetrics());
}

function renderOverviewOperatingHub() {
  renderOverviewClientProgress();
  renderOverviewPriorityList();
  renderOverviewSystemGrid();
}

function getOverviewClientProgressRows() {
  const analyses = (state.clientAnalyses || defaultData.clientAnalyses || []).filter((analysis) => ["First Touch Innovations", "M8 Designs"].includes(analysis.company));
  return analyses.map((analysis) => {
    const progress = getClientProgressPlan(analysis);
    const steps = progress.starterComplete ? progress.middleOfferSteps : progress.starterSteps;
    const percentComplete = Math.min(100, Math.round((progress.currentStep / steps.length) * 100));
    const tasks = progress.currentStepDetail?.tasks || [];
    const key = leaderPlanKey(progress);
    const completions = {
      ...getDefaultCurrentStageTaskCompletions(progress),
      ...(state.leaderTaskCompletions?.[key] || {})
    };
    const nextTaskIndex = tasks.findIndex((_, index) => !completions[index]);
    const nextTask = nextTaskIndex >= 0 ? tasks[nextTaskIndex] : progress.currentStepDetail?.doneWhen || "Ready for review.";
    const auditScore = Number(analysis.foundationAudit?.score || 0);
    return {
      company: analysis.company,
      viewId: analysis.viewId,
      offer: progress.currentOffer,
      step: progress.currentStepLabel,
      stepCount: `${progress.currentStep}/8`,
      percentComplete,
      auditScore,
      nextTask,
      decision: readinessLabel(auditScore).label
    };
  });
}

function renderOverviewClientProgress() {
  const target = document.getElementById("overviewClientProgress");
  if (!target) return;
  const rows = getOverviewClientProgressRows();
  target.innerHTML = `
    <div class="overview-client-progress-grid">
      ${rows.map((row) => `
        <article class="overview-client-card">
          <div class="card-title-row">
            <div>
              <p class="label">${escapeHtml(row.offer)}</p>
              <h3>${escapeHtml(row.company)}</h3>
            </div>
            <span class="status-chip ${row.auditScore >= 70 ? "positive" : row.auditScore >= 45 ? "warning" : "neutral"}">${escapeHtml(row.decision)}</span>
          </div>
          <div class="overview-progress-stats">
            <span><strong>${escapeHtml(row.stepCount)}</strong> current step</span>
            <span><strong>${row.percentComplete}%</strong> phase progress</span>
            <span><strong>${row.auditScore}%</strong> readiness</span>
          </div>
          ${renderProgressBar(row.percentComplete, 100, row.step)}
          <p><strong>Next:</strong> ${escapeHtml(row.nextTask)}</p>
          <button class="small-button approve" data-view-jump="${escapeHtml(row.viewId)}">Open client page</button>
        </article>
      `).join("")}
    </div>
  `;
}

function renderOverviewPriorityList() {
  const target = document.getElementById("overviewPriorityList");
  if (!target) return;
  target.innerHTML = getTodayActions()
    .slice(0, 5)
    .map((item, index) => `
      <article class="overview-priority-card priority-${String(item.priority).toLowerCase()}">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <div>
          <p class="label">${escapeHtml(item.owner)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.detail)}</p>
          <strong>${escapeHtml(item.next)}</strong>
        </div>
      </article>
    `)
    .join("");
}

function renderOverviewSystemGrid() {
  const target = document.getElementById("overviewSystemGrid");
  if (!target) return;
  const actions = getClientTickAlongActions();
  const approvals = state.drafts.filter((draft) => draft.status !== "Approved").length;
  const warm = state.prospects.filter((lead) => ["Warm Reply", "Call Booked", "Proposal Sent"].includes(lead.status)).length;
  const activeAgents = state.agents.filter((agent) => ["Running", "Waiting Approval", "Queued"].includes(agent.status)).length;
  const proofReady = (state.firstTouchProduction || []).length;
  const systems = [
    { area: "Client Delivery", status: "Priority", detail: actions[0]?.title || "Move active clients one step forward.", score: 82 },
    { area: "Foundation Offer", status: "Building", detail: "Trial-client friction is being turned into a repeatable delivery process.", score: 74 },
    { area: "Content + Proof", status: "Active", detail: `${proofReady} First Touch shoot/proof items ready for the workflow.`, score: 68 },
    { area: "AI Agents", status: "Queued", detail: `${activeAgents} agents are running, queued or waiting approval.`, score: 61 },
    { area: "Outreach", status: "Secondary", detail: `${approvals} drafts to review and ${warm} warm pipeline conversations.`, score: 56 },
    { area: "Lead Tests", status: "Gated", detail: "No paid tests until proof, route and tracking pass readiness review.", score: 25 }
  ];
  target.innerHTML = systems
    .map((system) => `
      <article class="overview-system-card">
        <div class="card-title-row">
          <strong>${escapeHtml(system.area)}</strong>
          <span>${escapeHtml(system.status)}</span>
        </div>
        <div class="overview-system-meter"><span style="width:${Math.max(4, Math.min(100, system.score))}%"></span></div>
        <p>${escapeHtml(system.detail)}</p>
      </article>
    `)
    .join("");
}

function renderHotLeads() {
  const hot = [...state.prospects].sort((a, b) => b.score - a.score).slice(0, 5);
  document.getElementById("hotLeadsTable").innerHTML = hot
    .map((lead) => `
      <tr>
        <td><strong>${lead.company}</strong>${lead.score >= 85 ? `<span class="priority-chip">Priority</span>` : ""}</td>
        <td>${lead.area}</td>
        <td>${lead.service}</td>
        <td>${renderLeadScore(lead.score)}</td>
        <td><span class="${statusClass(lead.status)}">${lead.status}</span></td>
      </tr>
    `)
    .join("") || `<tr><td colspan="5"><div class="empty-state"><strong>No hot leads yet.</strong><p>Add prospects or run a scan to build the priority list.</p></div></td></tr>`;
}

function renderProspects(filter = "") {
  const rows = state.prospects.filter((lead) => JSON.stringify(lead).toLowerCase().includes(filter.toLowerCase()));
  document.getElementById("prospectsTable").innerHTML = rows
    .map((lead) => `
      <tr>
        <td><strong>${lead.company}</strong></td>
        <td>${lead.area}</td>
        <td>${lead.service}</td>
        <td>${renderLeadScore(lead.score)}</td>
        <td><span class="${statusClass(lead.status)}">${lead.status}</span></td>
        <td>${lead.nextAction}</td>
        <td><button class="small-button" data-open-profile="${escapeHtml(lead.company)}">Open</button></td>
      </tr>
    `)
    .join("");

  document.querySelectorAll("[data-open-profile]").forEach((button) => {
    button.addEventListener("click", () => {
      showView("profiles");
      renderProfiles(button.dataset.openProfile);
    });
  });
}

function renderTasks() {
  const target = document.getElementById("taskList");
  if (!target) return;
  const needsApproval = state.drafts.filter((draft) => draft.status !== "Approved").length;
  const igTasks = state.drafts.filter((draft) => draft.channel === "Instagram").length;
  const warm = state.prospects.filter((lead) => ["Warm Reply", "Call Booked"].includes(lead.status)).length;
  const tasks = [
    { text: `Approve ${needsApproval} AI outreach drafts.`, priority: needsApproval ? "High" : "Low", progress: percent(state.drafts.length - needsApproval, Math.max(1, state.drafts.length)) },
    { text: `Send ${igTasks} manual Instagram DM tasks.`, priority: igTasks ? "Medium" : "Low", progress: igTasks ? 45 : 100 },
    { text: `Follow up ${warm} warm opportunities.`, priority: warm ? "High" : "Low", progress: percent(warm, 5) },
    { text: "Run the next 25-prospect scan.", priority: "Medium", progress: percent(state.prospects.length, 25) },
    { text: "Check spend before the next AI batch.", priority: "Low", progress: percent(10 - state.spend.reduce((sum, item) => sum + Number(item.cost || 0), 0), 10) }
  ];

  target.innerHTML = tasks
    .map((task) => `
      <div class="task-item priority-${String(task.priority).toLowerCase()}">
        <span class="task-check">${task.priority === "High" ? "!" : "✓"}</span>
        <div>
          <span>${task.text}</span>
          <div class="task-progress"><span style="width:${task.progress}%"></span></div>
        </div>
      </div>
    `)
    .join("");
}

function getTodayActions() {
  const approvals = state.drafts.filter((draft) => draft.status !== "Approved").length;
  const warmReplies = state.replies?.filter((reply) => ["Warm Reply", "Follow Up", "Interested"].includes(reply.status) || ["Interested", "Warm question"].includes(reply.type)).length || 0;
  const prospectsToResearch = state.prospects.filter((lead) => ["New Prospect", "AI Drafted"].includes(lead.status)).length;
  const auditsToReview = (state.websiteAudits || []).filter((item) => normaliseStatus(item.status) === "Needs Review").length;
  const briefsToReview = (state.contentBriefs || []).filter((item) => normaliseStatus(item.status) === "Needs Review").length;
  const outputsToReview = (state.agentOutputs || []).filter((item) => normaliseStatus(item.status) === "Needs Review").length;
  const socialIdeas = state.xelloSocial?.filter((item) => item.status !== "Posted").length || 0;
  const deliveryNext = state.delivery.find((item) => item.nextAction);

  const clientActions = getClientTickAlongActions();

  return [
    ...clientActions.slice(0, 3),
    {
      title: approvals ? `Review ${approvals} outreach draft${approvals === 1 ? "" : "s"}` : "Outreach approvals clear",
      owner: "Sam",
      priority: approvals ? "High" : "Low",
      detail: approvals ? "Approve, edit or mark do-not-send before any manual outreach." : "No outreach draft is waiting right now.",
      next: "Open Outreach"
    },
    {
      title: warmReplies ? `Follow up ${warmReplies} warm repl${warmReplies === 1 ? "y" : "ies"}` : "No warm replies waiting",
      owner: "Reply Triage Agent",
      priority: warmReplies ? "High" : "Medium",
      detail: warmReplies ? "Move warm conversations toward a 10-minute call." : "Use demo replies or real replies to test the workflow.",
      next: "Open Replies"
    },
    {
      title: auditsToReview ? `Review ${auditsToReview} website audit${auditsToReview === 1 ? "" : "s"}` : "Website audits clear",
      owner: "Website Audit Agent",
      priority: auditsToReview ? "High" : "Low",
      detail: auditsToReview ? "Approve useful findings, use them for call prep, or archive anything weak." : "Run a website audit from a company profile when you want a fresh angle.",
      next: "Open Website Audits"
    },
    {
      title: briefsToReview ? `Check ${briefsToReview} content brief${briefsToReview === 1 ? "" : "s"}` : "No content briefs waiting",
      owner: "Content Creation Agent",
      priority: briefsToReview ? "Medium" : "Low",
      detail: "Good briefs should clearly say what to film, why it matters and what the CTA is.",
      next: "Open Content Briefs"
    },
    {
      title: prospectsToResearch ? `Research ${prospectsToResearch} prospect${prospectsToResearch === 1 ? "" : "s"}` : "Prospect research is up to date",
      owner: "Company Research Agent",
      priority: prospectsToResearch ? "Medium" : "Low",
      detail: "Personalisation improves outreach quality and feeds the content creation agent.",
      next: "Run research"
    },
    {
      title: deliveryNext ? deliveryNext.nextAction : "Prepare first client delivery test",
      owner: "Delivery",
      priority: "High",
      detail: deliveryNext ? `${deliveryNext.client}: ${deliveryNext.stage}` : "Use First Touch Innovations as the safe dry-run client.",
      next: "Open Delivery"
    },
    {
      title: socialIdeas ? `Film or refine ${socialIdeas} Xello content idea${socialIdeas === 1 ? "" : "s"}` : "Generate Xello social ideas",
      owner: "Xello Social Growth Agent",
      priority: "Medium",
      detail: "Build credibility with founder-led marketing education and behind-the-scenes proof.",
      next: "Open Xello Social"
    },
    {
      title: outputsToReview ? `Tidy ${outputsToReview} agent output${outputsToReview === 1 ? "" : "s"}` : "Agent output log tidy",
      owner: "Operations",
      priority: outputsToReview ? "Medium" : "Low",
      detail: "Mark outputs as Approved, Used or Archived so the hub stays clean.",
      next: "Open Agent Outputs"
    }
  ];
}

function getClientTickAlongActions() {
  return [
    {
      title: "Prepare First Touch shoot-day proof capture",
      owner: "Master Control + Content Engine",
      priority: "High",
      detail: "Use the print pack to capture 70 clips, 20 photos, Sonny trust clips, reviews and project notes. This moves First Touch through proof asset intake even while profile edits wait until the shoot.",
      next: "Open First Touch"
    },
    {
      title: "Advance M8 missing foundations decisions",
      owner: "Client Delivery + Leader",
      priority: "High",
      detail: "Website and TikTok are found. Next job is deciding Instagram/Facebook/Google Business as Create, Polish or Skip, then checking website phone/email clarity.",
      next: "Open M8"
    },
    {
      title: "Capture today's learning into the Foundations offer",
      owner: "Sam + Master Control",
      priority: "Medium",
      detail: "Turn trial-client friction into a repeatable process: AI can prepare, client waits are labelled, and ads stay gated until proof, route and tracking are ready.",
      next: "Open Offer Doc"
    }
  ];
}

function renderTodayActions() {
  const actionTarget = document.getElementById("todayActionList");
  const checklistTarget = document.getElementById("setupChecklist");
  if (!actionTarget || !checklistTarget) return;

  actionTarget.innerHTML = getTodayActions()
    .map((item) => `
      <article class="today-action-card priority-${String(item.priority).toLowerCase()}">
        <div class="card-title-row">
          <div>
            <p class="label">${item.owner}</p>
            <h2>${item.title}</h2>
          </div>
          <span class="${item.priority === "High" ? "status warning" : "status"}">${item.priority}</span>
        </div>
        <p>${item.detail}</p>
        <span class="mini-stat">${item.next}</span>
      </article>
    `)
    .join("");

  const checklist = [
    { title: "Google Sheet connected", done: Boolean(getApiUrl()), detail: "Dashboard can sync real prospects, drafts and agent rows." },
    { title: "Prospect scanner tested", done: state.prospects.length > 0, detail: "At least one company is visible in the CRM." },
    { title: "Research layer working", done: (state.companyResearch || []).length > 0, detail: "Outreach can use specific company context." },
    { title: "Draft approval flow working", done: state.drafts.length > 0, detail: "Messages are created for review, not sent automatically." },
    { title: "Delivery tracker ready", done: (state.delivery || []).length > 0, detail: "Client trial work has stages, spend and next actions." },
    { title: "Xello social plan ready", done: (state.xelloSocial || []).length > 0, detail: "Your own brand growth has content ideas and weekly rhythm." }
  ];

  checklistTarget.innerHTML = checklist
    .map((item) => `
      <article class="setup-check-card ${item.done ? "complete" : ""}">
        <span class="task-check">${item.done ? "✓" : "!"}</span>
        <div>
          <strong>${item.title}</strong>
          <p>${item.detail}</p>
        </div>
      </article>
    `)
    .join("");
}

function groupByStage() {
  const stages = ["New Prospect", "AI Drafted", "Contacted", "Warm Reply", "Call Booked", "Proposal Sent", "Won"];
  return stages.map((stage) => ({
    stage,
    leads: state.prospects.filter((lead) => lead.status === stage)
  }));
}

function renderPipeline() {
  const grouped = groupByStage();
  const maxStageCount = Math.max(1, ...grouped.map((group) => group.leads.length));
  document.getElementById("pipelineRow").innerHTML = grouped
    .slice(0, 6)
    .map((group) => `
      <article class="pipeline-card">
        <p>${group.stage}</p>
        <strong>${group.leads.length}</strong>
        <span>${group.leads.length * 1500 ? `£${(group.leads.length * 1500).toLocaleString()}/mo potential` : "Build pipeline"}</span>
        ${renderProgressBar(group.leads.length, maxStageCount, "Stage weight")}
      </article>
    `)
    .join("");

  document.getElementById("kanban").innerHTML = grouped
    .map((group) => `
      <div class="kanban-column">
        <p class="kanban-title">${group.stage}</p>
        ${group.leads.map((lead) => `
          <div class="kanban-card">
            <strong>${lead.company}</strong>
            <p>${lead.area} · ${lead.service}</p>
            <p>Next: ${lead.nextAction}</p>
          </div>
        `).join("") || `<p class="metric-note">No leads here yet.</p>`}
      </div>
    `)
    .join("");
}

function renderDrafts() {
  document.getElementById("draftList").innerHTML = state.drafts
    .map((draft, index) => `
      <article class="draft-card">
        <div class="panel-header">
          <div>
            <p class="label">${draft.channel}</p>
            <h2>${draft.company}</h2>
          </div>
          <span class="${statusClass(draft.status)}">${draft.status}</span>
        </div>
        <strong>${draft.subject}</strong>
        <p>${draft.message}</p>
        ${draft.feedback ? `<p class="feedback-note"><strong>Training mark:</strong> ${draft.feedback}</p>` : ""}
        <div class="feedback-actions" aria-label="Draft feedback options">
          <button class="feedback-button positive" data-draft-feedback="${index}" data-feedback="Sounds real">Sounds Real</button>
          <button class="feedback-button positive" data-draft-feedback="${index}" data-feedback="Good question">Good Question</button>
          <button class="feedback-button" data-draft-feedback="${index}" data-feedback="Too salesy">Too Salesy</button>
          <button class="feedback-button" data-draft-feedback="${index}" data-feedback="Too long">Too Long</button>
          <button class="feedback-button" data-draft-feedback="${index}" data-feedback="Not personal">Not Personal</button>
        </div>
        <div class="draft-actions">
          <button class="small-button approve" data-draft-status="${index}" data-status="Approved">Approve</button>
          <button class="small-button" data-draft-status="${index}" data-status="Needs edit">Needs Edit</button>
          <button class="small-button" data-draft-status="${index}" data-status="Sent manually">Sent</button>
          <button class="small-button danger" data-draft-status="${index}" data-status="Do not send">Do Not Send</button>
        </div>
      </article>
    `)
    .join("");

  document.querySelectorAll("[data-draft-status]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.draftStatus);
      const status = button.dataset.status;
      const draft = state.drafts[index];
      draft.status = status;
      saveState();
      renderAll();
      if (draft.draftId) {
        callSheetAction("updateDraftStatus", { draft_id: draft.draftId, status }, `Updating ${draft.company} draft status...`);
      }
    });
  });

  document.querySelectorAll("[data-draft-feedback]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.draftFeedback);
      markDraftFeedback(index, button.dataset.feedback);
    });
  });
}

function refreshedOutreachDrafts() {
  const topProspects = state.prospects.length ? state.prospects.slice(0, 4) : defaultData.prospects.slice(0, 4);
  const templates = [
    {
      channel: "Instagram",
      subject: "Soft DM opener",
      message: (lead) => `Hi ${lead.company} team, I came across your work while looking at ${String(lead.service || "renovation").toLowerCase()} companies around ${lead.area || "Brighton"}. Really liked the quality of the projects you show. I help local renovation companies improve their online presence and enquiries. Do most of yours come through word of mouth, your website or Instagram?`
    },
    {
      channel: "Email",
      subject: "Quick question",
      message: (lead) => `Hi ${lead.company} team,\n\nI came across you while looking at ${String(lead.service || "renovation").toLowerCase()} companies around ${lead.area || "Brighton"}. I liked how clear your work looks from a homeowner's point of view.\n\nI help local renovation companies improve their online presence and turn more of that attention into enquiries. Quick question: do most of yours currently come through word of mouth, your website or Instagram?\n\nSam\nXello Media`
    },
    {
      channel: "Instagram",
      subject: "Project compliment DM",
      message: (lead) => `Hi, I was just looking at ${lead.company} and liked the style of your ${String(lead.service || "renovation").toLowerCase()} work. I help local renovation companies get more eyes on work like that online. Are most of your enquiries referral-based at the moment?`
    },
    {
      channel: "Email",
      subject: "Saw your work locally",
      message: (lead) => `Hi ${lead.company} team,\n\nI’m Sam from Xello Media, based around Brighton/Hove. I came across your company while looking at local renovation businesses and thought your work looked really solid.\n\nI help companies like yours improve their online presence and turn more local attention into enquiries. Out of interest, are you actively trying to get more enquiries online right now, or is most of it still referral-based?\n\nSam`
    }
  ];

  return topProspects.map((lead, index) => {
    const template = templates[index % templates.length];
    return {
      draftId: "",
      prospectId: lead.prospectId || "",
      channel: template.channel,
      company: lead.company || "Local renovation company",
      subject: template.subject,
      status: "Needs review",
      message: template.message(lead),
      feedback: ""
    };
  });
}

function refreshLocalOutreachExamples() {
  state.drafts = refreshedOutreachDrafts();
  state.outreachFeedback = state.outreachFeedback || [];
  state.outreachFeedback.unshift({
    company: "Outreach Writer",
    channel: "Training",
    feedback: "Examples refreshed",
    lesson: "Drafts now use a conversation-first opener: observation, compliment, one brief Xello context line and one easy question.",
    createdAt: new Date().toLocaleString([], { dateStyle: "short", timeStyle: "short" })
  });
  addAgentLog("Outreach Writer", "Refreshed local outreach examples with a brief Xello context line before the question.");
  saveState();
  renderAll();
}

function feedbackLesson(feedback) {
  const lessons = {
    "Sounds real": "Do more of this: natural tone, low-pressure opener and human wording.",
    "Good question": "Use this style again: one easy question that invites a reply.",
    "Too salesy": "Reduce pitch language. Start with observation, compliment and question.",
    "Too long": "Shorten the first touch. Keep email under 90 words and DM under 40 words.",
    "Not personal": "Add one specific observation from company research before drafting."
  };
  return lessons[feedback] || "Use this feedback to improve the next draft.";
}

function markDraftFeedback(index, feedback) {
  const draft = state.drafts[index];
  if (!draft || !feedback) return;
  const lesson = feedbackLesson(feedback);
  draft.feedback = feedback;
  state.outreachFeedback = state.outreachFeedback || [];
  state.outreachFeedback.unshift({
    draftId: draft.draftId || "",
    company: draft.company,
    channel: draft.channel,
    feedback,
    lesson,
    createdAt: new Date().toLocaleString([], { dateStyle: "short", timeStyle: "short" })
  });
  addAgentLog("Outreach Writer", `Feedback marked for ${draft.company}: ${feedback}.`);
  saveState();
  renderAll();

  if (draft.draftId) {
    callSheetAction("updateDraftFeedback", {
      draft_id: draft.draftId,
      company_name: draft.company,
      channel: draft.channel,
      feedback,
      lesson
    }, `Saving ${feedback} feedback for ${draft.company}...`);
  }
}

function renderAgents() {
  document.getElementById("agentGrid").innerHTML = state.agents
    .map((agent, index) => `
      <article class="agent-card">
        <div class="agent-top">
          <div>
            <p class="label">Agent</p>
            <h2>${agent.name}</h2>
          </div>
          <span class="${statusClass(agent.status)}">${agent.status}</span>
        </div>
        <p class="agent-purpose">${agent.purpose}</p>
        <div>
          <div class="agent-top">
            <span class="metric-note">${agent.currentTask}</span>
            <span class="metric-note">${agent.progress}%</span>
          </div>
          <div class="progress-track"><div class="progress-fill" style="width: ${agent.progress}%"></div></div>
        </div>
        <div class="agent-meta">
          <div><span>Last run</span><strong>${agent.lastRun}</strong></div>
          <div><span>Next run</span><strong>${agent.nextRun}</strong></div>
          <div><span>Cost</span><strong>${money(agent.cost)}</strong></div>
          <div><span>Outputs</span><strong>${agent.outputs}</strong></div>
        </div>
        <div class="draft-actions">
          <button class="small-button" data-agent-detail="${index}">Details</button>
          <button class="small-button approve" data-agent-run="${index}">Run</button>
          <button class="small-button" data-agent-pause="${index}">Pause</button>
        </div>
      </article>
    `)
    .join("");

  document.querySelectorAll("[data-agent-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      showAgentDetails(state.agents[Number(button.dataset.agentDetail)]);
    });
  });

  document.querySelectorAll("[data-agent-run]").forEach((button) => {
    button.addEventListener("click", () => {
      const agent = state.agents[Number(button.dataset.agentRun)];
      agent.status = "Running";
      agent.progress = Math.min(100, Math.max(agent.progress, 15) + 10);
      addAgentLog(agent.name, `${agent.name} was manually started from the dashboard.`);
      saveState();
      renderAll();
    });
  });

  document.querySelectorAll("[data-agent-pause]").forEach((button) => {
    button.addEventListener("click", () => {
      const agent = state.agents[Number(button.dataset.agentPause)];
      agent.status = "Idle";
      agent.currentTask = "Paused by team";
      addAgentLog(agent.name, `${agent.name} was paused.`);
      saveState();
      renderAll();
    });
  });
}

function showAgentDetails(agent) {
  const detail = agentDetails[agent.name] || {
    purpose: agent.purpose || "This agent supports the Xello operating system.",
    responsibilities: ["Track the relevant work in the CRM.", "Keep activity organised.", "Help move the business forward."],
    inputs: "CRM data and task context.",
    outputs: "Tracked tasks, status updates and recommendations.",
    guardrails: "Approval-first. No real outbound messages are sent automatically."
  };

  document.getElementById("agentDialogLabel").textContent = agent.status || "AI agent";
  document.getElementById("agentDialogTitle").textContent = agent.name;
  document.getElementById("agentDetailGrid").innerHTML = `
    <section class="agent-detail-section">
      <p class="label">Purpose</p>
      <p>${detail.purpose}</p>
    </section>
    <section class="agent-detail-section">
      <p class="label">Responsibilities</p>
      <ul>
        ${detail.responsibilities.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>
    <section class="agent-detail-section">
      <p class="label">Inputs</p>
      <p>${detail.inputs}</p>
    </section>
    <section class="agent-detail-section">
      <p class="label">Outputs</p>
      <p>${detail.outputs}</p>
    </section>
    <section class="agent-detail-section">
      <p class="label">Guardrails</p>
      <p>${detail.guardrails}</p>
    </section>
    <section class="agent-detail-section">
      <p class="label">Current State</p>
      <p>${agent.currentTask || "No current task."}</p>
    </section>
  `;
  document.getElementById("agentDialog").showModal();
}

function renderAgentTasks() {
  document.getElementById("agentTaskTable").innerHTML = state.agentTasks
    .map((task) => `
      <article class="agent-task-card">
        <div class="agent-task-head">
          <div>
            <p class="label">${task.agent}</p>
            <h2>${task.task}</h2>
            <p>${task.related}</p>
          </div>
          <span class="${statusClass(task.status)}">${task.status}</span>
        </div>
        <div>
          <div class="agent-top">
            <span class="metric-note">Progress</span>
            <span class="metric-note">${task.progress}%</span>
          </div>
          <div class="progress-track"><div class="progress-fill" style="width: ${task.progress}%"></div></div>
        </div>
        <div class="agent-task-footer">
          <span class="pill">Priority: ${task.priority}</span>
          <span class="pill">Cost: ${money(task.cost)}</span>
          <span class="${task.approval === "Yes" ? "pill warning" : "pill"}">Approval: ${task.approval}</span>
        </div>
        ${task.taskId && task.approval === "Yes" && task.status !== "Complete" ? `
          <div class="draft-actions">
            <button class="small-button approve" data-approve-task="${task.taskId}">Approve Task</button>
          </div>
        ` : ""}
      </article>
    `)
    .join("");

  document.querySelectorAll("[data-approve-task]").forEach((button) => {
    button.addEventListener("click", () => {
      callSheetAction("approveTask", { task_id: button.dataset.approveTask }, "Approving agent task in Google Sheets...");
    });
  });
}

function renderApprovals() {
  const approvals = [
    ...state.drafts.filter((draft) => draft.status !== "Approved").map((draft) => ({
      title: `${draft.channel} draft for ${draft.company}`,
      description: draft.subject,
      status: draft.status
    })),
    ...state.agentTasks.filter((task) => task.approval === "Yes").map((task) => ({
      title: task.task,
      description: `${task.agent} needs approval before this can move forward.`,
      status: task.status
    }))
  ].slice(0, 6);

  document.getElementById("approvalList").innerHTML = approvals
    .map((item) => `
      <article class="approval-card">
        <div class="approval-head">
          <div>
            <strong>${item.title}</strong>
            <p>${item.description}</p>
          </div>
          <span class="${statusClass(item.status)}">${item.status}</span>
        </div>
      </article>
    `)
    .join("") || `<p class="metric-note">No approvals waiting.</p>`;
}

function renderAgentLogs() {
  document.getElementById("agentLogList").innerHTML = state.agentLogs
    .slice(0, 8)
    .map((log) => `
      <article class="log-card">
        <div class="log-head">
          <div>
            <strong>${log.agent}</strong>
            <p>${log.event}</p>
          </div>
          <span class="pill">${log.time}</span>
        </div>
      </article>
    `)
    .join("");
}

function renderReplies() {
  const replies = state.replies || [];
  const calls = state.calls || [];

  document.getElementById("replyList").innerHTML = replies
    .map((reply) => `
      <article class="reply-card">
        <div class="card-title-row">
          <div>
            <p class="label">${reply.channel}</p>
            <h2>${reply.company}</h2>
          </div>
          <span class="${statusClass(reply.status)}">${reply.status}</span>
        </div>
        <p><strong>${reply.type}</strong></p>
        <p>${reply.summary}</p>
        <p class="metric-note">Next: ${reply.nextAction}</p>
      </article>
    `)
    .join("") || `<p class="metric-note">No replies logged yet.</p>`;

  document.getElementById("callList").innerHTML = calls
    .map((call) => `
      <article class="call-card">
        <div class="card-title-row">
          <div>
            <p class="label">${call.type}</p>
            <h2>${call.company}</h2>
          </div>
          <span class="${statusClass(call.status)}">${call.status}</span>
        </div>
        <p><strong>${call.date}</strong> with ${call.contact}</p>
        <p>${call.nextStep}</p>
        <p class="metric-note">Estimated value: ${money(call.value || 0)}/mo</p>
      </article>
    `)
    .join("") || `<p class="metric-note">No calls booked yet.</p>`;
}

function renderReplyResponses() {
  const target = document.getElementById("replyResponseList");
  if (!target) return;
  target.innerHTML = (state.replyResponses || [])
    .map((response, index) => `
      <article class="reply-card">
        <div class="card-title-row">
          <div>
            <p class="label">${response.channel || "Reply"}</p>
            <h2>${response.company}</h2>
          </div>
          <span class="${statusClass(response.status || "Needs review")}">${response.status || "Needs review"}</span>
        </div>
        <p><strong>${response.type || "Suggested response"}</strong></p>
        <p>${response.message}</p>
        <p class="metric-note">Next: ${response.nextAction || "Ask for a 10-minute call"}</p>
        <div class="draft-actions">
          <button class="small-button approve" data-reply-response-status="${index}" data-status="Approved">Approve</button>
          <button class="small-button" data-reply-response-status="${index}" data-status="Needs edit">Needs Edit</button>
          <button class="small-button" data-reply-response-status="${index}" data-status="Sent manually">Sent</button>
        </div>
      </article>
    `)
    .join("") || `<p class="metric-note">No suggested responses yet. Click Triage Replies to draft next-step replies.</p>`;

  document.querySelectorAll("[data-reply-response-status]").forEach((button) => {
    button.addEventListener("click", () => {
      const response = state.replyResponses[Number(button.dataset.replyResponseStatus)];
      response.status = button.dataset.status;
      saveState();
      renderAll();
    });
  });
}

function createLocalReplyResponse(reply) {
  const replyText = `${reply.type || ""} ${reply.summary || ""} ${reply.status || ""}`.toLowerCase();
  const isMaybeLater = replyText.includes("later") || replyText.includes("busy") || replyText.includes("not now");
  const isQuestion = replyText.includes("question") || replyText.includes("include") || replyText.includes("process") || replyText.includes("what did you have in mind") || replyText.includes("what would");
  const isReferralLed = replyText.includes("referral") || replyText.includes("word of mouth") || replyText.includes("recommendation");
  const isAdConcern = replyText.includes("tried ads") || replyText.includes("ads before") || replyText.includes("didn") || replyText.includes("waste");
  const base = isMaybeLater
    ? `No worries at all, thanks for getting back to me. I’d probably start with something simple rather than jumping straight into ads: checking your socials, Google Business, website/enquiry route, tracking and what content would make you look more trustworthy locally. Would it be worth a quick 10-minute call when things calm down so I can explain what I’d check?`
    : isAdConcern
      ? `Completely understand. A lot of local companies have tried ads before the basics were strong enough, so the spend gets wasted and nobody really knows what worked. I’d start by checking the online foundations first: socials, Google Business, website CTA, tracking and content proof. If that looks ready, then a small paid test could come later. Would you be open to a quick 10-minute call so I can explain how I’d structure it?`
      : isReferralLed
        ? `That makes sense, referrals are usually the strongest source for renovation companies. What I’d look at first is whether your online presence shows the same trust people already get through word of mouth: socials, Google Business, website, proof and enquiry tracking. Would you be open to a quick 10-minute call so I can explain it properly?`
        : isQuestion
          ? `Yes, of course. I’d keep it deliberately simple first: look at your social profiles, Google Business, website CTA, trust proof, tracking and the content foundations that would make enquiries more likely. If those foundations are strong enough, then we can look at a small paid lead test afterwards. Would you be open to a quick 10-minute call so I can walk you through it?`
          : `Thanks for getting back to me. The next step would be a quick 10-minute chat so I can explain the starter foundations offer: socials, Google Business, website/enquiry basics, tracking and content ideas before spending money on ads. Would you be open to a quick call this week?`;

  return {
    replyId: reply.replyId || "",
    company: reply.company,
    channel: reply.channel,
    type: reply.type || "Reply",
    status: "Needs review",
    message: base,
    nextAction: "Review response and ask for 10-minute call"
  };
}

function triageLocalReplies() {
  const replies = state.replies || [];
  state.replyResponses = state.replyResponses || [];
  replies.forEach((reply) => {
    if (state.replyResponses.some((response) => response.company === reply.company && response.channel === reply.channel)) return;
    state.replyResponses.unshift(createLocalReplyResponse(reply));
  });
  state.agents = state.agents.map((agent) =>
    agent.name === "Reply Triage Agent"
      ? { ...agent, status: "Waiting Approval", currentTask: `Drafted ${state.replyResponses.length} suggested response(s)`, progress: 100, lastRun: "Just now", outputs: state.replyResponses.length }
      : agent
  );
  addAgentLog("Reply Triage Agent", "Created suggested replies explaining the starter foundations offer and asking for a 10-minute call.");
  saveState();
  renderAll();
}

function practiceReplies() {
  const prospects = (state.prospects?.length ? state.prospects : defaultData.prospects).slice(0, 4);
  const scenarios = [
    {
      channel: "Email",
      type: "Warm question",
      summary: (lead) => `Thanks Sam, appreciate the message. Most of our work is referrals at the moment, but we would like more consistent website or Instagram enquiries. What did you have in mind?`,
      status: "Warm Reply"
    },
    {
      channel: "Instagram DM",
      type: "Process question",
      summary: (lead) => `Cheers Sam. Instagram brings a few people in, but nothing consistent. What would the process actually involve?`,
      status: "Follow Up"
    },
    {
      channel: "Email",
      type: "Ad concern",
      summary: (lead) => `Hi Sam, thanks for reaching out. We have tried ads before and did not get much back from them, so we are a bit cautious. What would you do differently?`,
      status: "Warm Reply"
    },
    {
      channel: "Instagram DM",
      type: "Busy but open",
      summary: (lead) => `Thanks for the message. We are pretty busy right now, but open to hearing the idea if it is simple.`,
      status: "Follow Up"
    }
  ];

  return prospects.map((lead, index) => {
    const scenario = scenarios[index % scenarios.length];
    return {
      replyId: `practice_${Date.now()}_${index}`,
      prospectId: lead.prospectId || "",
      company: lead.company || "Local renovation company",
      channel: scenario.channel,
      type: scenario.type,
      summary: scenario.summary(lead),
      nextAction: "Reply with starter foundations outline and ask for 10-minute call",
      status: scenario.status,
      createdAt: "Practice"
    };
  });
}

function runPracticeReplyFlow() {
  state.replies = practiceReplies();
  state.replyResponses = state.replies.map(createLocalReplyResponse);
  state.agents = state.agents.map((agent) =>
    agent.name === "Reply Triage Agent"
      ? { ...agent, status: "Waiting Approval", currentTask: `Practised ${state.replyResponses.length} reply response(s)`, progress: 100, lastRun: "Just now", outputs: state.replyResponses.length }
      : agent
  );
  addAgentLog("Reply Triage Agent", "Practice flow created fake company replies and drafted starter foundations call responses.");
  saveState();
  renderAll();
}

function renderMasterApprovals() {
  const approvals = [
    ...state.drafts.filter((draft) => draft.status !== "Approved").map((draft) => ({
      title: `${draft.channel} draft for ${draft.company}`,
      description: draft.message,
      status: draft.status,
      owner: "Outreach Writer"
    })),
    ...state.agentTasks.filter((task) => task.approval === "Yes").map((task) => ({
      title: task.task,
      description: `${task.agent} needs approval before this moves forward.`,
      status: task.status,
      owner: task.agent
    })),
    { title: "Run next prospect batch", description: "Approve another 25-prospect scan before using more search/API budget.", status: "Needs review", owner: "Prospect Scanner" },
    { title: "Launch first experiment", description: "Test website audit first vs Meta ads first messaging.", status: "Needs review", owner: "Learning Loop" }
  ];

  document.getElementById("masterApprovalList").innerHTML = approvals
    .map((item) => `
      <article class="approval-card">
        <div class="approval-head">
          <div>
            <p class="label">${item.owner}</p>
            <h2>${item.title}</h2>
            <p>${item.description}</p>
          </div>
          <span class="${statusClass(item.status)}">${item.status}</span>
        </div>
      </article>
    `)
    .join("");
}

function renderMemory() {
  document.getElementById("memoryList").innerHTML = state.memory
    .map((item) => `
      <article class="memory-card">
        <div class="card-title-row">
          <strong>${item.insight}</strong>
          <span class="mini-stat">${item.confidence}%</span>
        </div>
        <p>Source: ${item.source}</p>
        <p>Next action: ${item.action}</p>
        <div class="confidence-bar"><div class="confidence-fill" style="width: ${item.confidence}%"></div></div>
      </article>
    `)
    .join("");
}

function renderKnowledge() {
  document.getElementById("knowledgeList").innerHTML = state.knowledge
    .map((item) => `
      <article class="knowledge-card">
        <div class="card-title-row">
          <strong>${item.title}</strong>
          <span class="mini-stat">${item.owner}</span>
        </div>
        <p>${item.detail}</p>
      </article>
    `)
    .join("");
}

function renderCompanyResearch() {
  const target = document.getElementById("researchList");
  if (!target) return;
  target.innerHTML = (state.companyResearch || [])
    .map((item) => `
      <article class="knowledge-card">
        <div class="card-title-row">
          <strong>${item.company}</strong>
          <span class="${statusClass(item.status || "Research complete")}">${item.status || "Research complete"}</span>
        </div>
        <p><strong>Hook:</strong> ${item.hook || "Needs research."}</p>
        <p><strong>Pain point:</strong> ${item.painPoint || "Not identified yet."}</p>
        <p><strong>Opportunity:</strong> ${item.opportunity || "Not identified yet."}</p>
        <p><strong>Outreach angle:</strong> ${item.angle || "Use a free growth audit angle."}</p>
        ${item.websiteNotes ? `<p class="metric-note">Website: ${item.websiteNotes}</p>` : ""}
        ${item.instagramNotes ? `<p class="metric-note">Instagram: ${item.instagramNotes}</p>` : ""}
      </article>
    `)
    .join("") || `<p class="metric-note">No company research yet. Click Research Prospects after syncing your sheet.</p>`;
}

function getCompanyBundle(company) {
  return {
    prospect: state.prospects.find((item) => item.company === company),
    research: (state.companyResearch || []).find((item) => item.company === company),
    websiteAudit: (state.websiteAudits || []).find((item) => item.company === company),
    socialAudit: (state.socialAudits || []).find((item) => item.company === company),
    drafts: (state.drafts || []).filter((item) => item.company === company),
    replies: (state.replies || []).filter((item) => item.company === company),
    calls: (state.calls || []).filter((item) => item.company === company),
    content: (state.contentIdeas || []).filter((item) => item.company === company),
    briefs: (state.contentBriefs || []).filter((item) => item.company === company)
  };
}

function renderProfiles(focusCompany = "") {
  const target = document.getElementById("profileGrid");
  if (!target) return;
  const companies = [...new Set([
    focusCompany,
    ...state.prospects.map((item) => item.company),
    ...(state.companyResearch || []).map((item) => item.company),
    ...(state.websiteAudits || []).map((item) => item.company)
  ].filter(Boolean))];

  target.innerHTML = companies
    .map((company) => {
      const bundle = getCompanyBundle(company);
      const lead = bundle.prospect || {};
      return `
        <article class="profile-card ${company === focusCompany ? "featured-profile" : ""}">
          <div class="card-title-row">
            <div>
              <p class="label">${lead.area || "Tracked company"}</p>
              <h2>${company}</h2>
            </div>
            <span class="${statusClass(lead.status || "Profile")}">${lead.status || "Profile"}</span>
          </div>
          <div class="profile-facts">
            <span>Service <strong>${lead.service || "Not set"}</strong></span>
            <span>Lead score <strong>${lead.score || "?"}</strong></span>
            <span>Drafts <strong>${bundle.drafts.length}</strong></span>
            <span>Replies <strong>${bundle.replies.length}</strong></span>
          </div>
          <p><strong>Research hook:</strong> ${bundle.research?.hook || "No research hook yet."}</p>
          <p><strong>Website audit:</strong> ${bundle.websiteAudit ? `${bundle.websiteAudit.score}/100 - ${bundle.websiteAudit.summary}` : "No website audit yet."}</p>
          <p><strong>Social audit:</strong> ${bundle.socialAudit ? `${bundle.socialAudit.score}/100 - ${bundle.socialAudit.gaps}` : "No social audit yet."}</p>
          <p><strong>Content idea:</strong> ${bundle.content[0]?.hook || bundle.briefs[0]?.hook || "No content idea yet."}</p>
          <p class="metric-note">Next action: ${lead.nextAction || bundle.websiteAudit?.outreachAngle || "Add next action."}</p>
          <div class="profile-action-grid">
            <button class="small-button approve" data-profile-action="outreach" data-profile-company="${escapeHtml(company)}">Create Outreach Draft</button>
            <button class="small-button" data-profile-action="audit" data-profile-company="${escapeHtml(company)}">Run Website Audit</button>
            <button class="small-button" data-profile-action="brief" data-profile-company="${escapeHtml(company)}">Generate Content Brief</button>
            <button class="small-button" data-profile-action="call" data-profile-company="${escapeHtml(company)}">Mark Call Booked</button>
            <button class="small-button" data-profile-action="test" data-profile-company="${escapeHtml(company)}">Move To Starter Setup</button>
          </div>
        </article>
      `;
    })
    .join("") || `<p class="metric-note">No company profiles yet. Add a prospect first.</p>`;

  target.querySelectorAll("[data-profile-action]").forEach((button) => {
    button.addEventListener("click", () => runProfileAction(button.dataset.profileAction, button.dataset.profileCompany));
  });
}

function leadForCompany(company) {
  return state.prospects.find((item) => item.company === company) || {};
}

function ensureProfileResearch(company) {
  const lead = leadForCompany(company);
  const existing = (state.companyResearch || []).find((item) => item.company === company);
  if (existing) return existing;
  upsertLocalResearch(company, {
    hook: `${company} looks like a local ${lead.service || "home improvement"} business with strong visual proof potential.`,
    painPoint: "They may be relying on referrals or existing channels instead of a tracked enquiry system.",
    opportunity: "Use a sharper website journey, a local filmed advert and clear lead tracking.",
    angle: "Start with one genuine compliment, then ask where their best enquiries come from right now.",
    websiteNotes: "No deep website audit yet. Run the audit action when a website URL is available.",
    instagramNotes: "No deep social audit yet.",
    status: "Profile research created"
  });
  return (state.companyResearch || []).find((item) => item.company === company);
}

function createProfileOutreachDraft(company) {
  const lead = leadForCompany(company);
  const research = ensureProfileResearch(company);
  const service = lead.service || "renovation work";
  const area = lead.area || "Brighton and Hove";
  state.drafts.unshift({
    channel: "Instagram",
    company,
    subject: `DM: ${company}`,
    status: "Needs review",
    message: `Hi ${company} team, I came across your ${service} work around ${area} and liked how clear/local it feels. I run Xello Media and help local renovation companies improve their online presence and enquiry flow. Out of interest, do most of your enquiries come from referrals, the website or Instagram at the moment?`
  });
  addAgentOutput({
    agent: "Outreach Writer",
    company,
    type: "Outreach draft",
    result: `Created a short conversation-first Instagram DM using this hook: ${research?.hook || "local company observation"}`,
    nextAction: "Review the draft before sending anything manually.",
    approval: "Yes",
    status: "Needs Review"
  });
  addAgentLog("Outreach Writer", `Created a profile outreach draft for ${company}.`);
  saveState();
  renderAll();
  showView("outreach");
}

function runProfileWebsiteAudit(company) {
  const lead = leadForCompany(company);
  const existingAudit = (state.websiteAudits || []).find((item) => item.company === company);
  const website = lead.website || existingAudit?.url || "";
  const scores = getAuditScores(`${company}-${website}`);
  const score = averageAuditScore(scores);
  const audit = {
    company,
    url: website,
    score,
    scores,
    status: "Needs Review",
    summary: website
      ? "Audit created from the profile action. Review the CTA clarity, mobile journey, trust proof and enquiry route before using this in outreach."
      : "No website is stored for this company yet, so this is a planning audit. Add the website URL to the prospect row for a stronger live audit.",
    wins: "The business has a clear local service and visual proof potential that can support stronger ads and website trust.",
    issues: "The system needs a confirmed website URL before the audit can be fully specific.",
    improvements: "Add the website URL, check the top CTA, form position, mobile call button, proof placement and whether enquiries are tracked.",
    outreachAngle: `Ask ${company} how their online enquiries are currently tracked, then offer to send one practical conversion idea.`,
    createdAt: displayDate()
  };
  state.websiteAudits = [audit, ...(state.websiteAudits || []).filter((item) => item.company !== company)];
  upsertLocalResearch(company, {
    websiteNotes: audit.summary,
    hook: `${company} has enough visible local service context to open with a light website/enquiry question.`,
    painPoint: "Online enquiry tracking and conversion clarity may not be fully optimised.",
    opportunity: "Tighten website CTA, proof and tracking before scaling paid ads.",
    angle: audit.outreachAngle,
    status: "Website audit complete"
  });
  addAgentOutput({
    agent: "Website Audit Agent",
    company,
    type: "Website audit",
    result: `${score}/100. ${audit.summary}`,
    nextAction: "Review the score categories, then approve or archive the audit.",
    approval: "No",
    status: "Needs Review"
  });
  addAgentLog("Website Audit Agent", `Ran a profile website audit for ${company}.`);
  saveState();
  renderAll();
  showView("website-audits");
}

function generateProfileContentBrief(company) {
  if (!isStarterFoundationClient(company)) {
    addAgentLog("Content Creation Agent", `Skipped content brief for ${company}; content is gated to starter-foundations clients.`);
    setConnectionStatus("Content briefs are only generated for clients who have agreed to starter foundations.", false);
    showView("content-briefs");
    return;
  }
  const lead = leadForCompany(company);
  const research = ensureProfileResearch(company);
  const service = lead.service || "local renovation";
  const brief = {
    company,
    title: `${company} proof-led advert brief`,
    hook: research?.hook || `Show why ${company} is trusted for ${service}.`,
    format: "30-second Reel / Meta ad test",
    scenes: buildFilmingIdea(research || lead),
    cta: "Ask viewers to enquire or book a quick call/viewing/quote conversation.",
    source: "Company Profile Action",
    status: "Needs Review",
    createdAt: displayDate()
  };
  state.contentBriefs = [brief, ...(state.contentBriefs || []).filter((item) => item.company !== company || item.title !== brief.title)];
  addAgentOutput({
    agent: "Content Creation Agent",
    company,
    type: "Content brief",
    result: `Created a proof-led advert brief for ${company}.`,
    nextAction: "Review the scenes and approve before using it for filming.",
    approval: "No",
    status: "Needs Review"
  });
  addAgentLog("Content Creation Agent", `Generated a profile content brief for ${company}.`);
  saveState();
  renderAll();
  showView("content-briefs");
}

function markProfileCallBooked(company) {
  const lead = leadForCompany(company);
  if (lead.company) {
    lead.status = "Call Booked";
    lead.nextAction = "Prepare 10-minute call notes and starter foundations explanation";
  }
  state.calls.unshift({
    company,
    contact: "Owner / decision maker",
    date: "To confirm",
    type: "10-minute intro call",
    outcome: "Booked from CRM action",
    nextStep: "Explain the starter foundations offer and decide whether they are ready for offer two later.",
    value: 1500,
    status: "Call Booked",
    createdAt: displayDate()
  });
  addAgentOutput({
    agent: "Reply Triage Agent",
    company,
    type: "Call booked",
    result: "Moved this company into call preparation mode.",
    nextAction: "Prepare short call notes and avoid pitching the retainer too early.",
    approval: "No",
    status: "Used"
  });
  saveState();
  renderAll();
  showView("calls");
}

function moveProfileToClientTest(company) {
  const lead = leadForCompany(company);
  if (lead.company) {
    lead.status = "Starter Setup";
    lead.nextAction = "Confirm foundation setup scope and missing accounts";
  }
  const existing = state.delivery.find((item) => item.client === company);
  const delivery = {
    client: company,
    stage: "Starter foundations",
    checklist: "Social setup, Google Business improvements, website/CTA basics, tracking and content foundations.",
    health: "Needs setup",
    adSpend: 0,
    leads: 0,
    cpl: 0,
    bookedCalls: 0,
    siteVisit: "Optional",
    contentStatus: "Foundation brief needed",
    campaignStatus: "Not ready for ads",
    nextReview: "After starter setup",
    nextAction: "Confirm missing socials, access, website basics and tracking route"
  };
  if (existing) Object.assign(existing, delivery);
  else state.delivery.unshift(delivery);
  addAgentOutput({
    agent: "Operations Agent",
    company,
    type: "Starter setup",
    result: "Moved the company into the starter foundations delivery workflow.",
    nextAction: "Confirm boundaries before creating accounts or doing setup work.",
    approval: "No",
    status: "Needs Review"
  });
  saveState();
  renderAll();
  showView("delivery");
}

function runProfileAction(action, company) {
  if (!company) return;
  if (action === "outreach") return createProfileOutreachDraft(company);
  if (action === "audit") return runProfileWebsiteAudit(company);
  if (action === "brief") return generateProfileContentBrief(company);
  if (action === "call") return markProfileCallBooked(company);
  if (action === "test") return moveProfileToClientTest(company);
}

function renderWebsiteAudits() {
  const target = document.getElementById("websiteAuditList");
  if (!target) return;
  target.innerHTML = (state.websiteAudits || [])
    .map((item, index) => {
      const scores = item.scores || getAuditScores(`${item.company}-${item.url}`);
      const score = Number(item.score || averageAuditScore(scores));
      return `
      <article class="knowledge-card">
        <div class="card-title-row">
          <div>
            <p class="label">${item.url ? domainFromUrl(item.url) : "Website audit"}</p>
            <h2>${item.company}</h2>
          </div>
          <span class="${statusClass(item.status || "Needs Review")}">${score}/100</span>
        </div>
        ${scoreGrid(scores)}
        <p>${item.summary}</p>
        <p><strong>What works:</strong> ${item.wins}</p>
        <p><strong>Issues:</strong> ${item.issues}</p>
        <p><strong>Improvements:</strong> ${item.improvements}</p>
        <p><strong>Outreach angle:</strong> ${item.outreachAngle}</p>
        <p class="metric-note">${item.createdAt || ""}</p>
        ${statusButtons("websiteAudits", index, item.status)}
      </article>
    `;
    })
    .join("") || `<p class="metric-note">No website audits yet. Paste a URL and create one.</p>`;
}

function renderSocialAudits() {
  const target = document.getElementById("socialAuditList");
  if (!target) return;
  target.innerHTML = (state.socialAudits || [])
    .map((item, index) => `
      <article class="knowledge-card">
        <div class="card-title-row">
          <div>
            <p class="label">${item.platform || "Social"}</p>
            <h2>${item.company}</h2>
          </div>
          <span class="${statusClass(item.status || "Needs Review")}">${item.score}/100</span>
        </div>
        <p><strong>Strengths:</strong> ${item.strengths}</p>
        <p><strong>Gaps:</strong> ${item.gaps}</p>
        <p><strong>Next action:</strong> ${item.nextAction}</p>
        ${statusButtons("socialAudits", index, item.status)}
      </article>
    `)
    .join("") || `<p class="metric-note">No social audits yet. Generate practice audits from your current prospects.</p>`;
}

function renderContentIdeas() {
  const target = document.getElementById("contentIdeaList");
  if (!target) return;
  const starterIdeas = (state.contentIdeas || []).filter((item) => isStarterFoundationClient(item.company));
  target.innerHTML = starterIdeas
    .map((item) => `
      <article class="knowledge-card">
        <div class="card-title-row">
          <strong>${item.company}</strong>
          <span class="mini-stat">Starter client</span>
        </div>
        <p><strong>Ad hook:</strong> ${item.hook}</p>
        <p><strong>What to film:</strong> ${item.filming}</p>
        <p><strong>Meta angle:</strong> ${item.adAngle}</p>
        <p><strong>Talking points:</strong> ${item.talkingPoints}</p>
      </article>
    `)
    .join("") || `<p class="metric-note">No starter-client content ideas yet. Generate ideas only after a company has agreed to starter foundations.</p>`;
}

function listMarkup(items = []) {
  return `
    <ul class="compact-list">
      ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function renderFirstTouchLaunchPack() {
  const target = document.getElementById("firstTouchLaunchPack");
  if (!target) return;

  const productionItems = (state.firstTouchProduction || []).map((item) => `${item.stage}: ${item.detail} ${item.checklist}`);
  const adAngleItems = (state.firstTouchAdAngles || []).map((item) => `${item.title}: ${item.hook}`);
  const metaItems = (state.firstTouchMetaPlan || []).map((item) => `${item.area}: ${item.instruction}`);
  const learningItems = (state.firstTouchLearningPlan || []).map((item) => `${item.day}: ${item.focus}`);
  const caseStudyItems = (state.firstTouchCaseStudy || []).map((item) => `${item.section}: ${item.prompt}`);

  target.innerHTML = `
    <article class="launch-pack-card featured">
      <div class="card-title-row">
        <strong>Production Command</strong>
        <span class="mini-stat">Content Creation Agent</span>
      </div>
      <p>Use this as the operating checklist for the First Touch shoot. The aim is to produce one real local proof project before outreach begins.</p>
      ${listMarkup(productionItems)}
    </article>
    <article class="launch-pack-card">
      <div class="card-title-row">
        <strong>5 Advert Angles</strong>
        <span class="mini-stat">Edit into versions</span>
      </div>
      <p>Make multiple ads from the same footage so you can learn what homeowners respond to.</p>
      ${listMarkup(adAngleItems)}
    </article>
    <article class="launch-pack-card">
      <div class="card-title-row">
        <strong>Meta Test Setup</strong>
        <span class="mini-stat">Small budget test</span>
      </div>
      <p>Keep the campaign simple: one local lead test, three ads first and clear tracking.</p>
      ${listMarkup(metaItems)}
    </article>
    <article class="launch-pack-card">
      <div class="card-title-row">
        <strong>Foundation-To-Ads Learning Plan</strong>
        <span class="mini-stat">Skill building</span>
      </div>
      <p>This keeps Sam focused on learning filming, editing and Meta ads in the right order.</p>
      ${listMarkup(learningItems)}
    </article>
    <article class="launch-pack-card">
      <div class="card-title-row">
        <strong>Case Study Capture</strong>
        <span class="mini-stat">Proof for Xello</span>
      </div>
      <p>Document the process honestly so Xello has proof without inventing results.</p>
      ${listMarkup(caseStudyItems)}
    </article>
  `;
}

function renderContentBriefs() {
  const target = document.getElementById("contentBriefList");
  if (!target) return;
  const starterBriefs = (state.contentBriefs || [])
    .map((item, index) => ({ ...item, originalIndex: index }))
    .filter((item) => isStarterFoundationClient(item.company));
  target.innerHTML = starterBriefs
    .map((item) => `
      <article class="knowledge-card">
        <div class="card-title-row">
          <div>
            <p class="label">${item.company}</p>
            <h2>${item.title}</h2>
          </div>
          <span class="${statusClass(item.status || "Needs Review")}">${normaliseStatus(item.status)}</span>
        </div>
        <p><strong>Hook:</strong> ${item.hook}</p>
        <p><strong>Format:</strong> ${item.format}</p>
        <p><strong>Scenes:</strong> ${item.scenes}</p>
        <p><strong>CTA:</strong> ${item.cta}</p>
        <p class="metric-note">Source: ${item.source || "Content Creation Agent"}</p>
        ${statusButtons("contentBriefs", item.originalIndex, item.status)}
      </article>
    `)
    .join("") || `<p class="metric-note">No starter-client content briefs yet. Briefs are gated until a company agrees to the starter foundations offer.</p>`;
}

function renderAgentOutputs() {
  const target = document.getElementById("agentOutputList");
  if (!target) return;
  target.innerHTML = (state.agentOutputs || [])
    .slice(0, 40)
    .map((item, index) => `
      <article class="knowledge-card">
        <div class="card-title-row">
          <div>
            <p class="label">${item.agent}</p>
            <h2>${item.company}</h2>
          </div>
          <span class="${statusClass(item.status || "Needs Review")}">${normaliseStatus(item.status)}</span>
        </div>
        <p class="mini-stat">${item.type}</p>
        <p>${item.result}</p>
        <p><strong>Next action:</strong> ${item.nextAction}</p>
        <p class="metric-note">${item.createdAt || ""} · Approval needed: ${item.approval || "No"}</p>
        ${statusButtons("agentOutputs", index, item.status)}
      </article>
    `)
    .join("") || `<p class="metric-note">No agent outputs yet. Run an audit or practice agent action.</p>`;
}

function renderXelloSocial() {
  const target = document.getElementById("xelloSocialList");
  if (!target) return;
  target.innerHTML = (state.xelloSocial || [])
    .map((item) => `
      <article class="knowledge-card">
        <div class="card-title-row">
          <strong>${item.hook}</strong>
          <span class="${statusClass(item.status || "Planned")}">${item.status || "Planned"}</span>
        </div>
        <p><strong>Platform:</strong> ${item.platform}</p>
        <p><strong>Pillar:</strong> ${item.pillar}</p>
        <p><strong>Format:</strong> ${item.format}</p>
        <p><strong>Script:</strong> ${item.script}</p>
        <p><strong>CTA:</strong> ${item.cta}</p>
      </article>
    `)
    .join("") || `<p class="metric-note">No Xello social plan yet. Generate a plan to create content ideas.</p>`;
}

function renderSocialCalendar() {
  const calendarTarget = document.getElementById("socialCalendarList");
  const pillarTarget = document.getElementById("pillarList");
  if (!calendarTarget || !pillarTarget) return;

  calendarTarget.innerHTML = (state.socialCalendar || defaultData.socialCalendar)
    .map((item) => `
      <article class="social-calendar-card">
        <div class="card-title-row">
          <div>
            <p class="label">${item.day}</p>
            <h2>${item.platform}</h2>
          </div>
          <span class="${statusClass(item.status || "Planned")}">${item.status || "Planned"}</span>
        </div>
        <p><strong>${item.focus}</strong></p>
        <p>${item.task}</p>
      </article>
    `)
    .join("");

  pillarTarget.innerHTML = (state.contentPillars || defaultData.contentPillars)
    .map((item) => `
      <article class="pillar-card">
        <p class="label">${item.pillar}</p>
        <h2>${item.goal}</h2>
        <p>${item.examples}</p>
      </article>
    `)
    .join("");
}

function renderOutreachVoice() {
  const target = document.getElementById("voiceList");
  if (!target) return;
  target.innerHTML = (state.outreachTraining || [])
    .map((item) => `
      <article class="knowledge-card">
        <div class="card-title-row">
          <strong>${item.rule}</strong>
          <span class="mini-stat">${item.owner}</span>
        </div>
        <p>${item.detail}</p>
      </article>
    `)
    .join("");
}

function renderOutreachFeedback() {
  const target = document.getElementById("outreachFeedbackList");
  if (!target) return;
  target.innerHTML = (state.outreachFeedback || [])
    .slice(0, 12)
    .map((item) => `
      <article class="feedback-card">
        <div class="card-title-row">
          <div>
            <p class="label">${item.channel || "Draft"}</p>
            <h2>${item.company || "Outreach draft"}</h2>
          </div>
          <span class="${["Sounds real", "Good question"].includes(item.feedback) ? "status hot" : "status warning"}">${item.feedback}</span>
        </div>
        <p>${item.lesson}</p>
        <p class="metric-note">${item.createdAt || ""}</p>
      </article>
    `)
    .join("") || `<p class="metric-note">No feedback yet. Use the buttons on each draft to train the Outreach Writer.</p>`;
}

function renderPlaybooks() {
  document.getElementById("playbookGrid").innerHTML = state.playbooks
    .map((item) => `
      <article class="playbook-card">
        <div class="card-title-row">
          <strong>${item.name}</strong>
          <span class="mini-stat">${item.agent}</span>
        </div>
        <p>${item.steps}</p>
      </article>
    `)
    .join("");
}

function renderExperiments() {
  document.getElementById("experimentGrid").innerHTML = state.experiments
    .map((item) => `
      <article class="experiment-card">
        <div class="card-title-row">
          <strong>${item.name}</strong>
          <span class="${statusClass(item.status)}">${item.status}</span>
        </div>
        <p><strong>Hypothesis:</strong> ${item.hypothesis}</p>
        <p><strong>Result:</strong> ${item.result}</p>
        <p><strong>Learning:</strong> ${item.learning}</p>
      </article>
    `)
    .join("");
}

function renderAdExamples() {
  const target = document.getElementById("adExampleGrid");
  if (!target) return;
  target.innerHTML = (state.adExamples || defaultData.adExamples)
    .map((item) => `
      <article class="experiment-card">
        <div class="card-title-row">
          <div>
            <p class="label">${item.niche}</p>
            <strong>${item.name}</strong>
          </div>
          <span class="mini-stat">Reference</span>
        </div>
        <p><strong>Signal:</strong> ${item.signal}</p>
        <p><strong>Pattern:</strong> ${item.pattern}</p>
        <p><strong>Agent learning:</strong> ${item.learning}</p>
        <p class="metric-note"><a href="${item.source}" target="_blank" rel="noreferrer">Open source</a></p>
      </article>
    `)
    .join("");
}

function renderDelivery() {
  document.getElementById("deliveryGrid").innerHTML = state.delivery
    .map((item) => `
      <article class="delivery-card">
        <div class="card-title-row">
          <strong>${item.client}</strong>
          <span class="${statusClass(item.health)}">${item.health}</span>
        </div>
        <p class="label">${item.stage}</p>
        <p>${item.checklist}</p>
        <div class="delivery-stats">
          <span>Ad spend: <strong>${money(item.adSpend || 0)}</strong></span>
          <span>Leads: <strong>${item.leads || 0}</strong></span>
          <span>CPL: <strong>${money(item.cpl || 0)}</strong></span>
          <span>Booked: <strong>${item.bookedCalls || 0}</strong></span>
        </div>
        <p><strong>Site visit:</strong> ${item.siteVisit || "Not set"}</p>
        <p><strong>Content:</strong> ${item.contentStatus || "Not set"}</p>
        <p><strong>Campaign:</strong> ${item.campaignStatus || "Not set"}</p>
        <p><strong>Next review:</strong> ${item.nextReview || "Not set"}</p>
        <p class="metric-note">Next action: ${item.nextAction || "Add next action"}</p>
      </article>
    `)
    .join("");

  const workflowTarget = document.getElementById("deliveryWorkflow");
  if (!workflowTarget) return;
  const workflow = [
    { step: "1. Starter discovery", detail: "Confirm what socials, Google Business, website pages, assets, reviews and tracking the company already has." },
    { step: "2. Build foundations", detail: "Create or optimise missing socials, Google Business, website/CTA basics, enquiry routes and CRM tracking." },
    { step: "3. Create content base", detail: "Prepare profile copy, starter content ideas, FAQs, proof assets and a filming list for future adverts." },
    { step: "4. Decide if ads are ready", detail: "Only move into offer two if the company has enough trust proof and a clear enquiry route." },
    { step: "5. Run optional 14-day test", detail: "If ready, run one focused paid test with client-paid ad spend, clear tracking and one review." },
    { step: "6. Review next offer", detail: "Recommend staying foundational, repeating a test, or moving into the monthly growth system." }
  ];
  workflowTarget.innerHTML = workflow
    .map((item) => `
      <article class="workflow-card">
        <strong>${item.step}</strong>
        <p>${item.detail}</p>
      </article>
    `)
    .join("");
}

function renderTestJourney() {
  const journeyTarget = document.getElementById("journeyTimeline");
  const proofTarget = document.getElementById("demoProofGrid");
  if (!journeyTarget || !proofTarget) return;

  journeyTarget.innerHTML = (state.testJourney || defaultData.testJourney)
    .map((item) => `
      <article class="journey-card">
        <div class="journey-marker"></div>
        <div>
          <div class="card-title-row">
            <div>
              <p class="label">${item.owner}</p>
              <h2>${item.stage}</h2>
            </div>
            <span class="${statusClass(item.status)}">${item.status}</span>
          </div>
          <p>${item.detail}</p>
        </div>
      </article>
    `)
    .join("");

  proofTarget.innerHTML = (state.demoProof || defaultData.demoProof)
    .map((item) => `
      <article class="knowledge-card">
        <p class="label">${item.title}</p>
        <p>${item.detail}</p>
      </article>
    `)
    .join("");
}

function renderBusinessStrategy() {
  const icpTarget = document.getElementById("icpProfileGrid");
  const problemTarget = document.getElementById("customerProblemList");
  const journeyTarget = document.getElementById("customerJourneyMap");
  const offerTarget = document.getElementById("offerLadderGrid");
  if (!icpTarget || !problemTarget || !journeyTarget || !offerTarget) return;

  icpTarget.innerHTML = (state.icpProfile || defaultData.icpProfile)
    .map((item) => `
      <article class="strategy-card">
        <p class="label">${item.section}</p>
        <p>${item.detail}</p>
      </article>
    `)
    .join("");

  problemTarget.innerHTML = (state.customerProblems || defaultData.customerProblems)
    .map((item) => `
      <article class="problem-card">
        <strong>${item.problem}</strong>
        <p>${item.answer}</p>
      </article>
    `)
    .join("");

  journeyTarget.innerHTML = (state.customerJourneyMap || defaultData.customerJourneyMap)
    .map((item) => `
      <article class="journey-map-card">
        <p class="label">${item.stage}</p>
        <h3>${item.mindset}</h3>
        <p>${item.xelloAction}</p>
      </article>
    `)
    .join("");

  offerTarget.innerHTML = (state.offerLadder || defaultData.offerLadder)
    .map((item) => {
      const defaultOffer = defaultData.offerLadder.find((offer) => offer.name === item.name) || {};
      const actionPlan = item.actionPlan || defaultOffer.actionPlan || [];
      const aiAutomation = item.aiAutomation || defaultOffer.aiAutomation || [];
      const setupPlaybook = item.setupPlaybook || defaultOffer.setupPlaybook || [];
      const playbookTitle = item.name === "Starter Offer"
        ? "Starter Offer Setup Playbook"
        : item.name === "Middle Offer"
          ? "14-Day Test Playbook"
          : "Monthly Growth Playbook";
      const playbookSubtitle = item.name === "Starter Offer"
        ? "How to build their online foundations"
        : item.name === "Middle Offer"
          ? "How to deliver the paid lead test"
          : "How to run the retainer each month";
      return `
        <article class="offer-card">
          <div class="card-title-row">
            <div>
              <p class="label">${item.positioning}</p>
              <h2>${item.name}</h2>
            </div>
            <span class="offer-price">${item.price}</span>
          </div>
          <div class="offer-section">
            <strong>Best for</strong>
            <p>${item.bestFor}</p>
          </div>
          <div class="offer-section">
            <strong>Deliverables</strong>
            <p>${item.deliverables}</p>
          </div>
          <div class="offer-section">
            <strong>Boundary</strong>
            <p>${item.boundary}</p>
          </div>
          <div class="offer-section next">
            <strong>Next step</strong>
            <p>${item.nextStep}</p>
          </div>
          <div class="offer-action-plan">
            <div class="card-title-row">
              <div>
                <p class="label">Delivery Action Plan</p>
                <h3>Exact tasks to complete</h3>
              </div>
              <span class="mini-stat">${actionPlan.length} tasks</span>
            </div>
            <ol>
              ${actionPlan.map((task) => `<li>${task}</li>`).join("")}
            </ol>
          </div>
          <details class="offer-ai-plan">
            <summary>
              <span>
                <small>AI Automation Layer</small>
                <strong>Agents that reduce manual work</strong>
              </span>
              <em>${aiAutomation.length} agents</em>
            </summary>
            <div class="offer-ai-grid">
              ${aiAutomation.map((item) => `
                <article class="offer-ai-card">
                  <strong>${item.agent}</strong>
                  <p>${item.helpsWith}</p>
                  <span>${item.humanCheck}</span>
                </article>
              `).join("")}
            </div>
          </details>
          ${setupPlaybook.length ? `
            <details class="starter-playbook">
              <summary>
                <span>
                  <small>${playbookTitle}</small>
                  <strong>${playbookSubtitle}</strong>
                </span>
                <em>${setupPlaybook.length} steps</em>
              </summary>
              <div class="starter-playbook-grid">
                ${setupPlaybook.map((step) => `
                  <article class="starter-playbook-card">
                    <strong>${step.title}</strong>
                    <p>${step.detail}</p>
                  </article>
                `).join("")}
              </div>
            </details>
          ` : ""}
        </article>
      `;
    })
    .join("");
}

function calculateFinanceMetrics() {
  return [
    { label: "MRR", value: "£0", note: "Current", icon: "M" },
    { label: "3-client target", value: "£4.5k", note: "Monthly", icon: "3" },
    { label: "Pipeline", value: "£7.5k", note: "Potential", icon: "P" },
    { label: "Tool spend", value: money(state.spend.reduce((sum, item) => sum + Number(item.cost || 0), 0)), note: "Tracked", icon: "£" }
  ];
}

function renderFinance() {
  renderMetricCards("financeMetricGrid", calculateFinanceMetrics());
  document.getElementById("financeList").innerHTML = state.finance
    .map((item) => `
      <article class="finance-card">
        <div class="card-title-row">
          <strong>${item.metric}</strong>
          <span class="mini-stat">${item.value}</span>
        </div>
        <p>${item.note}</p>
      </article>
    `)
    .join("");
}

function renderRisks() {
  document.getElementById("riskList").innerHTML = state.risks
    .map((item) => `
      <article class="risk-card">
        <div class="card-title-row">
          <strong>${item.issue}</strong>
          <span class="${item.severity === "High" ? "status warning" : "status"}">${item.severity}</span>
        </div>
        <p>${item.fix}</p>
      </article>
    `)
    .join("");
}

function renderCeoBrief() {
  document.getElementById("ceoGrid").innerHTML = state.ceoBrief
    .map((item) => `
      <article class="ceo-card">
        <p class="label">${item.title}</p>
        <h2>${item.detail}</h2>
      </article>
    `)
    .join("");
}

function auditScoreBand(score = 0) {
  if (score >= 75) return { label: "Strong", className: "strong" };
  if (score >= 55) return { label: "Needs polish", className: "medium" };
  if (score >= 35) return { label: "Needs work", className: "low" };
  return { label: "Build first", className: "critical" };
}

function renderAuditScore(score = 0, size = "full") {
  const safeScore = Math.max(0, Math.min(100, Number(score) || 0));
  const band = auditScoreBand(safeScore);
  return `
    <div class="audit-score-template ${size} ${band.className}" aria-label="Foundation score ${safeScore} out of 100">
      <div class="audit-score-top">
        <strong>${safeScore}%</strong>
        <span>${band.label}</span>
      </div>
      <div class="audit-score-track">
        <span style="width: ${safeScore}%"></span>
      </div>
    </div>
  `;
}

function renderTemplateCard(item, index, variant) {
  const initials = String(item.label || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase() || String(index + 1);
  return `
    <article class="template-card ${variant}">
      <div class="template-card-marker">${initials}</div>
      <div>
        <p class="label">${item.label}</p>
        <h3>${item.label}</h3>
        <p>${item.value}</p>
      </div>
    </article>
  `;
}

function renderSectionPreview(text, items = []) {
  return `
    <p class="section-preview-copy">${text}</p>
    ${items.length ? `
      <div class="section-stat-strip">
        ${items.map((item) => `
          <span>
            <strong>${item.value}</strong>
            ${item.label}
          </span>
        `).join("")}
      </div>
    ` : ""}
  `;
}

function numberFromPercent(value) {
  return Number(String(value || "").replace(/[^\d]/g, "")) || 0;
}

function auditRowScore(audit, keywords = []) {
  const row = audit?.rows?.find((item) =>
    keywords.some((keyword) => String(item.area || "").toLowerCase().includes(keyword))
  );
  return Number(row?.score || 0);
}

function readinessLabel(score) {
  if (score >= 78) return { label: "Ready for lead test", className: "ready" };
  if (score >= 55) return { label: "Nearly ready", className: "nearly" };
  return { label: "Not ready for ads", className: "blocked" };
}

function readinessItemLabel(score) {
  if (score >= 75) return "Strong";
  if (score >= 55) return "Needs polish";
  if (score >= 35) return "Needs work";
  return "Build first";
}

function getOwnerSummary(analysis) {
  const saved = state.clientOwnerResponses?.[analysis.company] || defaultData.clientOwnerResponses?.[analysis.company] || {};
  return saved.summary || analyseOwnerResponse(saved.raw || "", analysis);
}

function getClientFoundationPlan(analysis, foundationAudit, competitorBenchmark) {
  const owner = getOwnerSummary(analysis);
  const isFirstTouch = analysis.company === "First Touch Innovations";
  const competitorTarget = competitorBenchmark?.targetScore || "ready score";

  if (isFirstTouch) {
    return {
      headline: "Package First Touch as a bigger-project renovation specialist before sending paid traffic.",
      decision: "Not ready for a paid lead test yet. The offer is clearer now, but proof, tracking and the enquiry route need tightening first.",
      target: "Loft conversions, extensions and full refurbs around Brighton/Hove, with architect referrals treated as a serious second channel.",
      scoreNote: `Move from ${foundationAudit?.score || 72}% toward ${competitorTarget} by making proof and enquiry handling easier to trust.`,
      strategyCards: [
        { label: "Primary offer", value: owner.bestServices },
        { label: "Sales filter", value: "Prioritise larger projects, but keep smaller profitable jobs when they have referral or future-project potential." },
        { label: "Best route", value: owner.enquiryRoute },
        { label: "Growth channel", value: "Create architect-facing proof: best projects, reliability signals, timeframe clarity and a simple referral conversation." }
      ],
      sprint: [
        { phase: "1. Positioning", tasks: ["Rewrite profile language around lofts, extensions and refurbs.", "Use GBP 100k-style project ambition as internal targeting, not a public promise.", "Keep smaller work as a secondary route, not the main message."] },
        { phase: "2. Proof", tasks: ["Collect top 10 photos/videos from larger jobs.", "Choose the most detailed 5-star reviews.", "Create before/after and process proof folders."] },
        { phase: "3. Architect pack", tasks: ["Create a simple referral PDF or web page.", "Show best larger projects, reviews and reliability proof.", "Explain what makes First Touch easy for architects to recommend."] },
        { phase: "4. Enquiry route", tasks: ["Make phone/text/WhatsApp the main contact path.", "Add response expectations for bigger jobs.", "Prepare questions that qualify project type, timeline and budget signal."] },
        { phase: "5. Tracking", tasks: ["Track source, project type, estimated value and quote stage.", "Mark architect/referral leads separately.", "Review weekly before considering ads."] }
      ],
      trackingFields: [
        "Lead source",
        "Project type",
        "Estimated project size",
        "Architect or homeowner",
        "Contact route",
        "Response time",
        "Quote stage",
        "Next follow-up"
      ],
      proofRequest: "Ask for the strongest loft, extension and refurb photos/videos, the most detailed 5-star reviews, and any examples that show reliability, clean finishes, timeframe management or cost clarity.",
      proofFolder: {
        label: "First Touch upload folder",
        url: "https://drive.google.com/drive/folders/1r6D7-zJuTw7RWqXDGpWYRl94Qr8iKiBv",
        note: "Anyone with the link can upload/edit. Send this to First Touch for photos, videos, reviews, brand files and process proof."
      },
      architectPack: {
        title: "Architect Referral Proof Pack",
        purpose: "Give First Touch something polished to send or show when meeting architects, so architects can quickly understand what projects they are right for and why they are safe to recommend.",
        format: "Start with a short PDF. Later, turn the same content into a website page if the referral route proves useful.",
        sections: [
          { label: "Who First Touch helps", value: "Homeowners planning loft conversions, extensions and full refurbs around Brighton/Hove and nearby Sussex areas." },
          { label: "Why architects should care", value: "First Touch wants strong communication, reliable delivery, clean proof and a builder relationship that protects the architect's reputation with the client." },
          { label: "Proof to include", value: "Best project photos, before/after examples, detailed 5-star reviews, process shots, finished details and any evidence of tidy site management." },
          { label: "Project fit", value: "Larger renovation work, extensions, loft conversions and full refurb projects where a reliable local contractor is needed after drawings or planning." },
          { label: "Referral CTA", value: "If you have a client looking for a trusted local team to price or discuss the build, contact First Touch by phone, text or WhatsApp." }
        ],
        nextSteps: [
          "Collect 3 strongest larger-project examples.",
          "Choose 3 detailed reviews that mention trust, communication, quality or reliability.",
          "Write a short founder/business intro.",
          "Create a one-page PDF first, then consider a web page later."
        ]
      },
      questionsForSam: [
        "Confirm the official First Touch website URL if you want the CRM to link directly to the exact page.",
        "Ask the owner to send the best project photos/videos in one folder.",
        "Ask the owner for 3 larger projects and 3 detailed reviews that would make architects feel safe recommending them."
      ]
    };
  }

  return {
    headline: "Turn M8 from a broad trades profile into a premium full-project construction offer.",
    decision: "Do not push ads yet. The offer is now clearer, but the proof, website/contact route, Google decision and tracking are still foundations work.",
    target: "Homeowners in Brighton/Hove who want new builds, extensions or proper start-to-finish projects where M8 controls the site and standard.",
    scoreNote: `Move from ${foundationAudit?.score || 49}% toward ${competitorTarget} by making the portfolio, contact route and project fit obvious.`,
    strategyCards: [
      { label: "Primary offer", value: owner.bestServices },
      { label: "Sales filter", value: owner.avoidJobs },
      { label: "Best route", value: owner.enquiryRoute },
      { label: "Google decision", value: "Create Google Business if local search matters, but the immediate priority is a premium portfolio/contact route and proof library." }
    ],
    sprint: [
      { phase: "1. Positioning", tasks: ["Lead with new builds, extensions and full-project delivery.", "Move bathrooms, rendering and plastering into supporting proof.", "Make site control and high standards part of the message."] },
      { phase: "2. Proof", tasks: ["Organise website photos into high-quality folders.", "Separate proof by new builds, extensions, bathrooms and rendering.", "Add testimonials or manual review snippets if available."] },
      { phase: "3. Enquiry route", tasks: ["Make phone/email obvious on TikTok and website.", "Create a simple project-fit qualifier.", "Filter out handyman jobs, awkward access and subcontractor work."] },
      { phase: "4. Tracking", tasks: ["Track project type, access/parking fit and estimated value.", "Mark source from TikTok, website, referral or word of mouth.", "Review poor-fit enquiries so content can repel them earlier."] }
      ],
    trackingFields: [
      "Lead source",
      "Project type",
      "Access and parking fit",
      "Estimated value",
      "Homeowner or other buyer",
      "Contact route",
      "Quote stage",
      "Poor-fit reason"
    ],
    proofRequest: "Ask for the highest-quality images from new builds, extensions, bathrooms, rendering and start-to-finish projects, plus any customer messages that prove trust, finish quality and site control.",
    proofFolder: {
      label: "M8 Designs upload folder",
      url: "https://drive.google.com/drive/folders/1xEiwFqK8yFS9CPbEQwsQwrfoI11e5dZZ",
      note: "Anyone with the link can upload/edit. Send this to M8 for photos, videos, reviews, brand files and process proof."
    },
    questionsForSam: [
      "Audit m8designs.co.uk for proof order, contact clarity and mobile trust.",
      "Ask the owner to export high-quality photos into one folder rather than relying only on website downloads.",
      "Decide whether M8 wants Google Business now or whether website/TikTok proof comes first."
    ]
  };
}

function renderDoneForYouFoundationPlan(analysis, foundationAudit, competitorBenchmark) {
  const plan = getClientFoundationPlan(analysis, foundationAudit, competitorBenchmark);
  return `
    <section class="panel done-for-you-plan-panel">
      <div class="panel-header">
        <div>
          <p class="label">Done-for-you plan</p>
          <h2>Starter Foundations Workplan</h2>
          ${renderSectionPreview(plan.headline, [
            { value: "Ads gated", label: "decision" },
            { value: `${foundationAudit?.score || competitorBenchmark?.currentScore || 0}%`, label: "current score" }
          ])}
        </div>
        <span class="pill">Use this next</span>
      </div>
      <div class="foundation-plan-hero">
        <article>
          <p class="label">Client-facing decision</p>
          <strong>${escapeHtml(plan.decision)}</strong>
        </article>
        <article>
          <p class="label">Best target</p>
          <strong>${escapeHtml(plan.target)}</strong>
        </article>
        <article>
          <p class="label">Score movement</p>
          <strong>${escapeHtml(plan.scoreNote)}</strong>
        </article>
      </div>
      <div class="foundation-strategy-grid">
        ${plan.strategyCards.map((card) => `
          <article>
            <span>${escapeHtml(card.label)}</span>
            <strong>${escapeHtml(card.value)}</strong>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderFoundationSprintBoard(analysis, foundationAudit, competitorBenchmark) {
  const plan = getClientFoundationPlan(analysis, foundationAudit, competitorBenchmark);
  return `
    <section class="panel foundation-sprint-panel">
      <div class="panel-header">
        <div>
          <p class="label">Delivery sprint</p>
          <h2>What Xello Should Do First</h2>
          ${renderSectionPreview("A practical delivery board for turning the owner replies into real starter foundations work.", [
            { value: plan.sprint.length, label: "work phases" },
            { value: "Foundations", label: "offer stage" }
          ])}
        </div>
      </div>
      <div class="foundation-sprint-grid">
        ${plan.sprint.map((phase) => `
          <article>
            <span>${escapeHtml(phase.phase)}</span>
            <ol class="analysis-checklist">
              ${phase.tasks.map((task) => `<li>${escapeHtml(task)}</li>`).join("")}
            </ol>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderArchitectReferralPack(analysis, foundationAudit, competitorBenchmark) {
  const plan = getClientFoundationPlan(analysis, foundationAudit, competitorBenchmark);
  if (!plan.architectPack) return "";
  const pack = plan.architectPack;
  return `
    <section class="panel architect-pack-panel">
      <div class="panel-header">
        <div>
          <p class="label">Referral asset</p>
          <h2>${escapeHtml(pack.title)}</h2>
          ${renderSectionPreview(pack.purpose, [
            { value: pack.format, label: "first format" },
            { value: pack.sections.length, label: "pack sections" }
          ])}
        </div>
        <span class="pill">Architect route</span>
      </div>
      <div class="architect-pack-layout">
        <article class="architect-pack-intro">
          <p class="label">Why make this</p>
          <strong>${escapeHtml(pack.purpose)}</strong>
          <span>${escapeHtml(pack.format)}</span>
        </article>
        <div class="architect-pack-grid">
          ${pack.sections.map((section) => `
            <article>
              <span>${escapeHtml(section.label)}</span>
              <strong>${escapeHtml(section.value)}</strong>
            </article>
          `).join("")}
        </div>
      </div>
      <div class="architect-pack-actions">
        <p class="label">Build checklist</p>
        <ol class="analysis-checklist">
          ${pack.nextSteps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
        </ol>
      </div>
    </section>
  `;
}

function renderLeadTrackingBlueprint(analysis, foundationAudit, competitorBenchmark) {
  const plan = getClientFoundationPlan(analysis, foundationAudit, competitorBenchmark);
  return `
    <section class="panel lead-tracking-panel">
      <div class="panel-header">
        <div>
          <p class="label">Tracking setup</p>
          <h2>Lead Tracker Blueprint</h2>
          ${renderSectionPreview("These are the fields to track before any lead test, so you know which enquiries are good instead of guessing.", [
            { value: plan.trackingFields.length, label: "fields" },
            { value: "Required", label: "before ads" }
          ])}
        </div>
      </div>
      <div class="tracking-blueprint-grid">
        ${plan.trackingFields.map((field, index) => `
          <article>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${escapeHtml(field)}</strong>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function getClientProgressPlan(analysis) {
  const missingFoundationTasks = analysis.company === "First Touch Innovations"
    ? [
      "Mark website, Instagram, TikTok and Google Business as found in the identity check.",
      "Treat the First Touch Facebook Page as approved for creation; prepare the page setup plan and only pause for the admin invite or final public publish.",
      "Check the Instagram bio, TikTok bio and Google Business contact details all point to the same phone/WhatsApp route.",
      "Ask the owner for access only where needed, never for personal passwords: use page admin invites or owner-led setup.",
      "Update the CRM social scan with one clear status per platform: Found, Needs polish, Create, or Skip."
    ]
    : analysis.company === "M8 Designs"
      ? [
        "Mark the M8 website and supplied TikTok link as found in the identity check.",
        "Confirm whether M8 has Instagram or Facebook accounts already, and add the links if they exist.",
        "Decide whether M8 should create a Google Business Profile now, since there is no strong Google presence yet.",
        "Check the website contact route and make sure phone/email are clear before any content or lead work.",
        "Update the CRM social scan with one clear status per platform: Found, Needs polish, Create, or Skip."
      ]
      : [
        "List every existing useful profile: website, Google Business, Instagram, Facebook, TikTok, LinkedIn and YouTube.",
        "Decide which missing accounts are actually worth creating for this client.",
        "Confirm the best enquiry route and make sure every useful profile points there.",
        "Avoid asking for passwords by using owner-led setup, admin invites or screen-share setup.",
        "Update the CRM social scan with one clear status per platform: Found, Needs polish, Create, or Skip."
      ];
  const proofAssetTasks = analysis.company === "First Touch Innovations"
    ? [
      "Mark public proof as found: website Work page project photos, TikTok profile proof, Google photos and 5-star review proof.",
      "Collect original/high-res project photos, vertical videos and review screenshots on shoot day with Sonny.",
      "Sort assets into project type, proof type and quality level.",
      "Flag missing larger-project proof needed for lofts, extensions and full refurbs."
    ]
    : [
      "Send or chase the Google Drive proof folder.",
      "Collect best project photos, vertical videos, reviews and before/after examples.",
      "Sort assets into project type, proof type and quality level.",
      "Flag missing proof needed for the best service angle."
    ];
  const starterSteps = [
    {
      title: "Discovery + identity",
      description: "Confirm the exact business, owner, offer stage, service area, website, socials and Google presence so Xello is working from the right company profile.",
      tasks: ["Confirm official business name, owner contact and service area.", "Add website, socials, Google Business and logo evidence into the CRM.", "Confirm the best enquiry route and current offer stage.", "Mark the identity check as confirmed or list what still needs proof."],
      doneWhen: "The CRM has one confirmed identity, one preferred enquiry route and no obvious business mix-up risk."
    },
    {
      title: "Missing foundations",
      description: "Create or improve only the useful missing accounts and basics, such as Instagram, Facebook Page, Google Business Profile, TikTok, website contact route and clear enquiry details.",
      tasks: missingFoundationTasks,
      doneWhen: "Every useful foundation has a status: keep, polish, create or skip, and Leader has auto-prepared everything possible before any access, publish, spend or password boundary."
    },
    {
      title: "Profile polish",
      description: "Make the visible profiles look credible: consistent logo, bio, service list, location, contact route, proof highlights and a clear reason to enquire.",
      tasks: ["Write a simple one-line positioning statement for the business.", "Prepare tightened bio/contact-route copy for Instagram, TikTok and Google; owner implementation can wait until Sam's shoot day with Sonny.", "Use the same logo/name/contact details across useful platforms.", "Add service highlights and proof points where the platform allows it."],
      doneWhen: "A prospect can land on any main profile and understand who the business helps, what they do and how to enquire."
    },
    {
      title: "Proof asset intake",
      description: "Collect the photos, videos, reviews, project notes, before-and-after proof and brand files needed to make the business look trusted before paid traffic.",
      tasks: proofAssetTasks,
      doneWhen: "There is enough proof to build credible starter content without scraping random low-quality assets."
    },
    {
      title: "Website/enquiry route",
      description: "Check that people can understand the offer and contact the business quickly through phone, WhatsApp, email or form without confusion.",
      tasks: ["Check the homepage explains the main services clearly.", "Check phone, WhatsApp, email or form links work.", "Make the highest-value services obvious.", "Write a simple enquiry route recommendation for the owner."],
      doneWhen: "A local prospect can go from profile or website to enquiry in under one minute."
    },
    {
      title: "Lead tracker setup",
      description: "Set up the simple tracking fields for every enquiry: source, project type, value, location, reply speed, quote status and whether it became a good opportunity.",
      tasks: ["Create the enquiry tracking fields in the CRM or sheet.", "Agree what counts as a good lead.", "Add source, project type, estimated value, area and follow-up status fields.", "Test the tracker with one fake enquiry example."],
      doneWhen: "Every new enquiry can be logged consistently before any paid traffic is switched on."
    },
    {
      title: "Starter content plan",
      description: "Turn the confirmed services, proof assets and customer worries into starter content ideas before generating bigger campaign briefs.",
      tasks: ["Choose the main service angles from the owner answers.", "Match each angle to available proof assets.", "Write starter ideas for trust, process, project type, local proof and enquiry CTA.", "Avoid paid ad briefs until the foundation score is ready."],
      doneWhen: "There is a practical first batch of organic/proof-led content ideas based on confirmed client information."
    },
    {
      title: "Readiness review",
      description: "Review the foundations score and decide whether the client is ready for the 14-day lead test or still needs more trust, proof or enquiry setup.",
      tasks: ["Review identity, socials, Google, website, proof, content and tracking scores.", "Compare against local competitor baseline.", "List final blockers before paid visibility.", "Make a clear decision: ready, nearly ready or not ready."],
      doneWhen: "The CRM has a written readiness decision and the 14-day test stays gated unless the foundations are strong enough."
    }
  ];
  const middleOfferSteps = [
    { title: "Confirm test angle", description: "Choose one focused lead test angle based on the best service, strongest proof and most valuable local enquiry type.", tasks: ["Pick one service to test.", "Confirm the local area and ideal enquiry type.", "Write the lead promise and CTA.", "Get owner approval before creating ads."], doneWhen: "The test has one approved service angle, one audience and one enquiry route." },
    { title: "Collect/film assets", description: "Film or collect the exact clips, project visuals, owner talking points and proof needed for the chosen lead test angle.", tasks: ["Create a shot list for the chosen angle.", "Collect or film vertical clips.", "Capture owner talking points and trust proof.", "Save all assets in the client proof folder."], doneWhen: "There is enough usable footage and proof for at least three ad variations." },
    { title: "Create 3 adverts", description: "Produce a small set of vertical ad variations with different hooks, proof moments and calls to action for the same offer.", tasks: ["Write three hooks for the same service.", "Edit three vertical adverts.", "Check captions, CTA and branding.", "Send previews for owner approval."], doneWhen: "Three approved adverts are ready to upload." },
    { title: "Build lead form", description: "Create the lead form questions and follow-up route so enquiries arrive with enough detail to judge quality.", tasks: ["Write qualifying questions.", "Add contact fields.", "Add project type, location and timeframe fields.", "Test the form and lead notification route."], doneWhen: "A test lead arrives with enough detail to follow up properly." },
    { title: "Set ad spend", description: "Confirm the client-paid Meta budget, campaign dates, location targeting and daily spend limit before launch.", tasks: ["Confirm client-paid budget.", "Set daily spend and dates.", "Confirm targeting radius.", "Make sure spend is attached to the client's ad account/payment method."], doneWhen: "Budget, dates, targeting and payment responsibility are written down before launch." },
    { title: "Launch 14-day test", description: "Run the gated local visibility test only after foundations are ready and all tracking/follow-up basics are in place.", tasks: ["Final pre-launch check.", "Publish campaign.", "Check delivery after launch.", "Record launch date in CRM."], doneWhen: "The campaign is live and the CRM knows when the 14-day window started." },
    { title: "Track + follow up", description: "Record every lead, response speed, project type, quote quality and follow-up action so the test is judged properly.", tasks: ["Log each lead source and project type.", "Track reply speed.", "Mark quote/site visit/booked status.", "Note lead quality and owner feedback."], doneWhen: "Every lead has a follow-up status and quality note." },
    { title: "Review next offer", description: "Use the results to decide whether to improve foundations, run another test or pitch the monthly growth retainer.", tasks: ["Summarise spend, leads, quality and lessons.", "Compare results against the goal.", "Decide next recommendation.", "Prepare the retainer or next-test pitch if justified."], doneWhen: "The client has a clear next-step recommendation based on evidence, not guesswork." }
  ];
  const currentStarterStepIndex = starterSteps.findIndex((step) => {
    const stepProgress = {
      company: analysis.company,
      currentOffer: "Starter foundations",
      currentStepLabel: step.title
    };
    const key = leaderPlanKey(stepProgress);
    const completions = {
      ...getDefaultCurrentStageTaskCompletions(stepProgress),
      ...(state.leaderTaskCompletions?.[key] || {})
    };
    return !step.tasks.every((_, index) => completions[index]);
  });
  const currentStarterStep = currentStarterStepIndex === -1 ? starterSteps.length + 1 : currentStarterStepIndex + 1;
  const starterComplete = currentStarterStep > starterSteps.length;
  const currentStepDetail = starterComplete ? middleOfferSteps[0] : starterSteps[currentStarterStep - 1];
  return {
    company: analysis.company,
    currentOffer: starterComplete ? "14-day local visibility / lead test" : "Starter foundations",
    currentStep: starterComplete ? 1 : currentStarterStep,
    currentStepLabel: starterComplete ? middleOfferSteps[0].title : starterSteps[currentStarterStep - 1].title,
    starterSteps,
    middleOfferSteps,
    starterComplete,
    currentStepDetail,
    note: starterComplete
      ? "Starter foundations are complete. Move into the gated 14-day lead test with client-paid ad spend."
      : `${analysis.company} is currently in Phase ${currentStarterStep}: ${currentStepDetail.description}`
  };
}

function renderStepLane(steps, currentStep, locked = false) {
  return `
    <div class="client-progress-steps ${locked ? "locked" : ""}">
      ${steps.map((step, index) => {
        const stepNumber = index + 1;
        const stateClass = locked ? "locked" : stepNumber < currentStep ? "complete" : stepNumber === currentStep ? "current" : "pending";
        const statusLabel = locked ? "Future step" : stateClass === "complete" ? "Covered" : stateClass === "current" ? "Current focus" : "Upcoming";
        return `
          <button type="button" class="${stateClass}" data-progress-step-toggle="true" data-step-number="${stepNumber}" data-step-title="${escapeHtml(step.title)}" data-step-description="${escapeHtml(step.description)}" data-step-tasks="${encodeURIComponent(JSON.stringify(step.tasks || []))}" data-step-done="${escapeHtml(step.doneWhen || "")}" data-step-status="${statusLabel}" aria-expanded="false" ${stateClass === "current" ? 'aria-current="step"' : ""} ${locked ? 'aria-disabled="true"' : ""}>
            <span>${stepNumber}</span>
            <strong>${escapeHtml(step.title)}</strong>
            <small>${escapeHtml(statusLabel)}</small>
          </button>
        `;
      }).join("")}
    </div>
    <div class="client-progress-detail" hidden></div>
  `;
}

function renderClientCurrentStageActionPlan(progress) {
  const step = progress.currentStepDetail;
  if (!step) return "";
  const key = leaderPlanKey(progress);
  const isOpen = state.openCurrentActionPlanKey === key;
  const tasks = step.tasks || [];
  const completions = {
    ...getDefaultCurrentStageTaskCompletions(progress),
    ...(state.leaderTaskCompletions?.[key] || {})
  };
  const nextTaskIndex = tasks.findIndex((_, index) => !completions[index]);
  return `
    <div class="client-current-action-shell">
      <div class="client-current-action-plan" ${isOpen ? "" : "hidden"}>
        <div class="client-current-action-copy">
          <p class="label">Current stage action plan</p>
          <h3>${escapeHtml(step.title)}</h3>
          <p>${escapeHtml(step.description)}</p>
        </div>
        <div class="client-current-task-list">
          <p class="label">Exact tasks to complete now</p>
          <ol>
            ${tasks.map((task, index) => `
              <li class="${completions[index] ? "is-complete" : index === nextTaskIndex ? "is-next" : ""}">
                <span>${escapeHtml(task)}</span>
                <div class="task-ownership-row">
                  ${renderTaskOwnershipChips(task, progress, completions[index], index === nextTaskIndex)}
                </div>
                ${completions[index] ? "<strong>Done</strong>" : index === nextTaskIndex ? "<strong>Next</strong>" : ""}
              </li>
            `).join("")}
          </ol>
        </div>
        <div class="client-current-done-card">
          <p class="label">Done when</p>
          <strong>${escapeHtml(step.doneWhen)}</strong>
        </div>
        ${renderLeaderCommandPanel(progress)}
      </div>
    </div>
  `;
}

function renderTaskOwnershipChips(task, progress, complete = false, next = false) {
  const chips = getTaskOwnershipChips(task, progress, complete, next);
  return chips.map((chip) => `<small class="task-chip ${chip.className}">${escapeHtml(chip.label)}</small>`).join("");
}

function getTaskOwnershipChips(task, progress, complete = false, next = false) {
  if (complete) return [{ label: "completed", className: "done" }];
  const text = String(task || "").toLowerCase();
  const chips = [];
  if (next) chips.push({ label: "next", className: "next" });
  if (text.includes("access") || text.includes("admin invite") || text.includes("publish") || text.includes("spend") || text.includes("password")) {
    chips.push({ label: "approval gate", className: "gate" });
  } else if (text.includes("collect") || text.includes("shoot") || text.includes("owner") || text.includes("send or chase") || text.includes("ask")) {
    chips.push({ label: "sam/client action", className: "human" });
  } else if (text.includes("prepare") || text.includes("write") || text.includes("audit") || text.includes("check") || text.includes("update") || text.includes("sort") || text.includes("create")) {
    chips.push({ label: "ai can prep", className: "ai" });
  }
  if (progress.company === "First Touch Innovations" && progress.currentStepLabel === "Proof asset intake" && !complete) {
    chips.push({ label: "shoot-day workflow", className: "shoot" });
  }
  if (progress.company === "M8 Designs" && progress.currentStepLabel === "Missing foundations" && !complete) {
    chips.push({ label: "decision needed", className: "decision" });
  }
  if (!chips.length) chips.push({ label: "xello action", className: "neutral" });
  return chips;
}

function getDefaultCurrentStageTaskCompletions(progress) {
  if (progress.currentStepLabel === "Discovery + identity") return { 0: true, 1: true, 2: true, 3: true };
  if (progress.company === "First Touch Innovations" && progress.currentStepLabel === "Missing foundations") return { 0: true, 1: true, 2: true, 3: true, 4: true };
  if (progress.company === "First Touch Innovations" && progress.currentStepLabel === "Profile polish") return { 0: true, 1: true, 2: true, 3: true };
  if (progress.company === "First Touch Innovations" && progress.currentStepLabel === "Proof asset intake") return { 0: true };
  if (progress.currentStepLabel !== "Missing foundations") return {};
  if (progress.company === "M8 Designs") return { 0: true };
  return {};
}

function leaderPlanKey(progress) {
  return `${progress.company}::${progress.currentOffer}::${progress.currentStepLabel}`.replace(/\s+/g, "-").toLowerCase();
}

function getLeaderAgentForTask(task) {
  const text = String(task || "").toLowerCase();
  if (text.includes("website") || text.includes("contact route") || text.includes("form")) return "Website Audit Agent";
  if (text.includes("instagram") || text.includes("tiktok") || text.includes("facebook") || text.includes("social") || text.includes("google business") || text.includes("profile")) return "Social Audit Agent";
  if (text.includes("proof") || text.includes("photos") || text.includes("videos") || text.includes("content") || text.includes("assets")) return "Content Creation Agent";
  if (text.includes("track") || text.includes("status") || text.includes("source") || text.includes("field")) return "Tracking Agent";
  if (text.includes("owner") || text.includes("access") || text.includes("password") || text.includes("confirm")) return "Client Strategy Agent";
  return "Company Research Agent";
}

function buildLeaderAssignments(progress) {
  const tasks = progress.currentStepDetail?.tasks || [];
  return tasks.map((task, index) => {
    const agent = getLeaderAgentForTask(task);
    return {
      index,
      task,
      agent,
      command: `${agent}, handle this for ${progress.company}: ${task}`,
      relay: `Relay back to Leader with: platform status if relevant, evidence found, auto-complete decision, and only flag human approval for access, public publishing, passwords or spend.`
    };
  });
}

function getClientPlatformStatusPlan(analysis) {
  const firstTouch = analysis.company === "First Touch Innovations";
  if (firstTouch) {
    return {
      summary: "First Touch has enough public foundations to work with. Facebook Page creation is approved, so Leader should auto-prepare setup details and only pause at admin invite or public publish.",
      rows: [
        { platform: "Website", status: "Needs polish", evidence: "Official website and Work/Contact routes are known.", action: "Audit service wording, larger-project proof, WhatsApp/phone CTA and mobile enquiry route.", ownerDecision: "Confirm the official URL and whether Xello can suggest copy changes.", priority: "Now" },
        { platform: "Instagram", status: "Needs polish", evidence: "Official website links to @firsttouch_innovations.", action: "Check bio, pinned proof, highlights, service area and CTA for lofts/extensions/refurbs.", ownerDecision: "Ask for admin invite only if profile edits are approved.", priority: "Now" },
        { platform: "TikTok", status: "Needs polish", evidence: "Sam supplied @firsttouch_innovations as the trusted link.", action: "Check profile image, bio, recent proof and whether the same enquiry route is visible.", ownerDecision: "Confirm whether TikTok should mirror Instagram or stay lighter.", priority: "Now" },
        { platform: "Google Business", status: "Needs polish", evidence: "Sam screenshot shows 5.0 rating, 7 reviews, contractor category, address and phone.", action: "Audit photos, services, review replies, posts, service areas and quote/contact route.", ownerDecision: "Ask owner before changing categories, hours or public details.", priority: "Now" },
        { platform: "Facebook", status: "Create", evidence: "No reliable official page has been found yet; Sam has approved creation.", action: "Prepare the Facebook Page setup: name, category, bio, service area, contact route, logo and first proof posts. Pause only for admin invite or final publish.", ownerDecision: "Approved for creation by Sam; no further create-or-skip approval needed.", priority: "Now" },
        { platform: "YouTube", status: "Skip", evidence: "No official useful channel found.", action: "Do not create now; reuse vertical proof on Instagram/TikTok first.", ownerDecision: "Revisit only when video volume justifies it.", priority: "Later" }
      ]
    };
  }

  return {
    summary: "M8 has a trusted website and TikTok base. The main decision is whether to create missing local-search/social foundations or keep the starter work focused on website, proof and contact route.",
    rows: [
      { platform: "Website", status: "Needs polish", evidence: "Owner-supplied m8designs.co.uk is the trusted source.", action: "Audit portfolio order, premium service hierarchy, phone/email CTA, mobile layout and project-fit wording.", ownerDecision: "Confirm which site edits the owner is comfortable making first.", priority: "Now" },
      { platform: "TikTok", status: "Needs polish", evidence: "Sam supplied @m8.designs as the trusted TikTok link.", action: "Make bio and pinned proof point at proper projects, new builds, extensions and contact route.", ownerDecision: "Confirm whether TikTok should be the main social proof channel for now.", priority: "Now" },
      { platform: "Google Business", status: "Create", evidence: "Owner is not focused on Google and Sam thinks there may be no profile yet.", action: "Create or claim only if local search matters now; add logo, services, photos, hours and review plan.", ownerDecision: "Owner must approve setup because public business details are involved.", priority: "Decision" },
      { platform: "Instagram", status: "Create", evidence: "No reliable matching profile found yet.", action: "Create only if M8 can keep it consistent with website proof and has enough quality images.", ownerDecision: "Ask whether Instagram exists already before creating anything.", priority: "Decision" },
      { platform: "Facebook", status: "Skip", evidence: "No reliable matching page found yet.", action: "Skip for now unless the owner already has a page or local referrals use Facebook heavily.", ownerDecision: "Confirm skip so Xello does not waste setup time.", priority: "Later" },
      { platform: "Wrong M8 result", status: "Skip", evidence: "m8designs.com is a boat/fishing accessories business in Ohio.", action: "Do not use this result for research, screenshots, links or client planning.", ownerDecision: "No action, just keep the rejection visible.", priority: "Guardrail" }
    ]
  };
}

function platformStatusClass(status = "") {
  return String(status).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "unknown";
}

function renderClientPlatformStatusBoard(analysis) {
  const plan = getClientPlatformStatusPlan(analysis);
  const counts = plan.rows.reduce((totals, row) => {
    totals[row.status] = (totals[row.status] || 0) + 1;
    return totals;
  }, {});
  return `
    <section class="panel client-platform-panel">
      <div class="panel-header">
        <div>
          <p class="label">Platform status board</p>
          <h2>Foundations Account Decisions</h2>
          ${renderSectionPreview(plan.summary, [
            { value: counts["Needs polish"] || 0, label: "polish" },
            { value: counts.Found || 0, label: "found" },
            { value: counts.Create || 0, label: "create" },
            { value: counts.Skip || 0, label: "skip" }
          ])}
        </div>
        <span class="pill">Found / polish / create / skip</span>
      </div>
      <div class="platform-status-summary">
        ${["Needs polish", "Found", "Create", "Skip"].map((status) => `
          <span class="${platformStatusClass(status)}">
            <strong>${counts[status] || 0}</strong>
            ${status}
          </span>
        `).join("")}
      </div>
      <div class="platform-status-grid">
        ${plan.rows.map((row) => `
          <article class="platform-status-card ${platformStatusClass(row.status)}">
            <div class="card-title-row">
              <div>
                <p class="label">${escapeHtml(row.priority)}</p>
                <h3>${escapeHtml(row.platform)}</h3>
              </div>
              <span>${escapeHtml(row.status)}</span>
            </div>
            <p><strong>Evidence:</strong> ${escapeHtml(row.evidence)}</p>
            <p><strong>Starter action:</strong> ${escapeHtml(row.action)}</p>
            <em>${escapeHtml(row.ownerDecision)}</em>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderLeaderCommandPanel(progress) {
  const key = leaderPlanKey(progress);
  const run = state.leaderRuns?.[key];
  const completions = {
    ...getDefaultCurrentStageTaskCompletions(progress),
    ...(state.leaderTaskCompletions?.[key] || {})
  };
  const evidenceNotes = state.leaderTaskEvidence?.[key] || {};
  const localAssignments = buildLeaderAssignments(progress);
  const assignments = run?.assignments?.length ? run.assignments : localAssignments;
  const delegatedAgents = [...new Set(assignments.map((assignment) => assignment.agent))].join("|");
  const completeCount = assignments.filter((assignment) => completions[assignment.index]).length;
  const evidenceCount = assignments.filter((assignment) => String(evidenceNotes[assignment.index] || "").trim()).length;
  const taskPayload = encodeURIComponent(JSON.stringify(localAssignments.map((assignment) => assignment.task)));
  return `
    <div class="leader-command-panel">
      <div class="leader-command-head">
        <div>
          <p class="label">Leader agent</p>
          <h3>Command Centre</h3>
          <p>Leader reads the current tasks, commands the specialist agents, collects their relay notes and lets you tick off tasks once reviewed.</p>
        </div>
        <div class="leader-command-actions">
          ${run?.mode ? `<span class="pill">${run.mode === "server-runner" ? "backend runner" : "local fallback"}</span>` : ""}
          ${run?.persisted ? `<span class="pill">${run.persisted === "kv" ? "saved to server" : "browser saved"}</span>` : ""}
          <span class="pill">${evidenceCount}/${assignments.length} relay notes</span>
          <span class="pill">${completeCount}/${assignments.length} complete</span>
          <button type="button" class="small-button approve" data-leader-run="${escapeHtml(key)}" data-leader-company="${escapeHtml(progress.company)}" data-leader-stage="${escapeHtml(progress.currentStepLabel)}" data-leader-offer="${escapeHtml(progress.currentOffer)}" data-leader-tasks="${taskPayload}" data-leader-agents="${escapeHtml(delegatedAgents)}">
            ${run ? "Rerun Leader" : "Run Leader agent"}
          </button>
        </div>
      </div>
      ${run ? `
        <div class="leader-assignment-list">
          ${assignments.map((assignment) => {
            const done = Boolean(completions[assignment.index]);
            const evidence = String(evidenceNotes[assignment.index] || "");
            return `
              <article class="${done ? "is-complete" : ""}">
                <div>
                  <p class="label">${escapeHtml(assignment.agent)}</p>
                  <strong>${escapeHtml(assignment.task)}</strong>
                  <span>${escapeHtml(assignment.command)}</span>
                  <small>${escapeHtml(assignment.relay)}</small>
                  <div class="leader-relay-fields" aria-label="Relay note checklist">
                    <span>Platform status</span>
                    <span>Evidence</span>
                    <span>Only true approval gates</span>
                    <span>Tick-off decision</span>
                  </div>
                  <div class="leader-relay-note">
                    <label for="leader-evidence-${assignment.index}-${escapeHtml(key)}">Relay evidence note</label>
                    <textarea id="leader-evidence-${assignment.index}-${escapeHtml(key)}" data-leader-evidence-input="${escapeHtml(key)}" data-leader-task-index="${assignment.index}" placeholder="Status: Found / Needs polish / Create / Skip&#10;Evidence: ...&#10;Auto-complete decision: yes/no and why&#10;Approval gate only if access, public publishing, passwords or spend are involved">${escapeHtml(evidence)}</textarea>
                    <div>
                      <span>${evidence.trim() ? "Evidence saved for Leader review" : "No relay note saved yet"}</span>
                      <button type="button" class="small-button" data-leader-evidence-save="${escapeHtml(key)}" data-leader-task-index="${assignment.index}">Save relay note</button>
                    </div>
                  </div>
                </div>
                <button type="button" class="small-button ${done ? "" : "approve"}" data-leader-task-toggle="${escapeHtml(key)}" data-leader-task-index="${assignment.index}" aria-pressed="${done}">
                  ${done ? "Done" : "Mark done"}
                </button>
              </article>
            `;
          }).join("")}
        </div>
      ` : `
        <p class="leader-empty-state">Click Run Leader agent to create the agent commands for this stage.</p>
      `}
    </div>
  `;
}

function renderClientProgressTracker(analysis) {
  const progress = getClientProgressPlan(analysis);
  const activeSteps = progress.starterComplete ? progress.middleOfferSteps : progress.starterSteps;
  const activePercent = Math.round((progress.currentStep / activeSteps.length) * 100);
  const actionPlanKey = leaderPlanKey(progress);
  const actionPlanOpen = state.openCurrentActionPlanKey === actionPlanKey;
  return `
    <section class="panel client-progress-panel">
      <div class="panel-header">
        <div>
          <p class="label">Client progress</p>
          <h2>Offer Stage Tracker</h2>
          <p class="section-preview-copy">${escapeHtml(progress.note)}</p>
          <div class="client-progress-summary-row">
            <span>
              <strong>${escapeHtml(progress.currentOffer)}</strong>
              current offer
            </span>
            <span>
              <strong>${progress.currentStep}/8</strong>
              current step
            </span>
            <span>
              <strong>${activePercent}%</strong>
              phase progress
            </span>
            <button type="button" class="small-button client-current-action-toggle" data-current-action-toggle="true" data-current-action-key="${escapeHtml(actionPlanKey)}" aria-expanded="${actionPlanOpen}">
              ${actionPlanOpen ? "Hide current action plan" : "Show current action plan"}
            </button>
          </div>
        </div>
        <span class="pill">${escapeHtml(progress.currentStepLabel)}</span>
      </div>
      <div class="client-progress-meter" aria-label="${activePercent}% complete">
        <span style="width:${activePercent}%"></span>
      </div>
      ${renderClientCurrentStageActionPlan(progress)}
      <div class="client-progress-lane">
        <div class="client-progress-lane-header">
          <strong>Starter foundations</strong>
          <span>${progress.starterComplete ? "Complete" : `Step ${progress.currentStep} of 8`}</span>
        </div>
        ${renderStepLane(progress.starterSteps, progress.starterComplete ? 9 : progress.currentStep)}
      </div>
      <div class="client-progress-lane next-offer">
        <div class="client-progress-lane-header">
          <strong>Middle offer: 14-day lead test</strong>
          <span>${progress.starterComplete ? "Active" : "Locked until starter foundations are complete"}</span>
        </div>
        ${renderStepLane(progress.middleOfferSteps, progress.starterComplete ? progress.currentStep : 0, !progress.starterComplete)}
      </div>
    </section>
  `;
}

function renderProofAndHelpPanel(analysis, foundationAudit, competitorBenchmark) {
  const plan = getClientFoundationPlan(analysis, foundationAudit, competitorBenchmark);
  return `
    <section class="panel proof-help-panel">
      <div class="panel-header">
        <div>
          <p class="label">What still needs human help</p>
          <h2>Proof Pack + Missing Details</h2>
          ${renderSectionPreview("Most of the strategy is now done. These are the only human inputs that will make the audit stronger.", [
            { value: "Proof pack", label: "main ask" },
            { value: plan.questionsForSam.length, label: "open items" }
          ])}
        </div>
      </div>
      <div class="proof-help-layout">
        <article class="proof-request-card">
          <p class="label">Message to client</p>
          <strong>${escapeHtml(plan.proofRequest)}</strong>
        </article>
        ${plan.proofFolder ? `
          <article class="proof-folder-card">
            <p class="label">Google Drive upload folder</p>
            <strong>${escapeHtml(plan.proofFolder.label)}</strong>
            <span>${escapeHtml(plan.proofFolder.note)}</span>
            <a href="${plan.proofFolder.url}" target="_blank" rel="noreferrer">Open proof folder</a>
          </article>
        ` : ""}
        <article>
          <p class="label">Ask Sam / owner next</p>
          <ol class="analysis-checklist">
            ${plan.questionsForSam.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ol>
        </article>
      </div>
    </section>
  `;
}

function getStarterDeliveryPrep(analysis, foundationAudit, competitorBenchmark) {
  const isFirstTouch = analysis.company === "First Touch Innovations";
  const auditScore = foundationAudit?.score || competitorBenchmark?.currentScore || 0;

  if (isFirstTouch) {
    return {
      score: auditScore,
      nowTasks: [
        "Write the bigger-project positioning brief around loft conversions, extensions and full refurbs.",
        "Draft the architect referral proof pack structure before photos arrive.",
        "Prepare the lead tracker fields for project type, source, quote stage and architect/referral source.",
        "Turn owner worries into FAQ prompts: timeframes, hidden costs, changes during the job and communication."
      ],
      waitingTasks: [
        "Choose 5-10 best larger-project photos/videos from the Drive folder.",
        "Select 3 detailed 5-star reviews that mention trust, quality, reliability or communication.",
        "Build before/after proof once the strongest project files have been uploaded.",
        "Add real project examples into the architect proof pack."
      ],
      strategyBrief: [
        { label: "Positioning", value: "First Touch should be presented as a trusted local renovation team for bigger homeowner projects, not a small-job handyman option." },
        { label: "Best work", value: "Loft conversions, extensions and full refurbs. Smaller jobs stay acceptable when profitable or likely to create referrals." },
        { label: "Buyer", value: "Brighton/Hove homeowners planning serious home improvement work, plus architects who can refer suitable build projects." },
        { label: "Proof needed", value: "Finished project visuals, detailed reviews, process shots, clean site evidence and examples that reduce risk for architects/homeowners." }
      ],
      offerAngles: [
        "Trusted Brighton/Hove team for loft conversions, extensions and full refurb projects.",
        "Bigger renovation projects handled with clear communication and strong local proof.",
        "Architect-friendly build partner for homeowners who need a reliable contractor after drawings or planning.",
        "Clearer project conversations around timelines, changes and cost expectations before work starts."
      ],
      contentTemplates: [
        { format: "Project proof post", title: "From plan to finished space", hook: "Show a full refurb or extension in stages so homeowners can see the quality and process.", proof: "Before photo, process clip, finished result and one review line." },
        { format: "Trust Reel", title: "What makes a renovation less stressful", hook: "Explain timeframes, communication and how changes are handled during bigger jobs.", proof: "Owner talking clip plus finished detail shots." },
        { format: "Architect pack section", title: "Why architects can recommend First Touch", hook: "Make it easy for an architect to understand fit, reliability and referral route.", proof: "Three larger projects, three reviews and contact CTA." }
      ],
      reportSections: [
        "Current foundation score and why ads stay gated.",
        "Best project types to target first.",
        "Competitor benchmark and what stronger local companies show better.",
        "Proof library gaps from the Drive folder.",
        "30-day starter foundations plan.",
        "Architect referral proof pack recommendation.",
        "Lead test readiness decision."
      ]
    };
  }

  return {
    score: auditScore,
    nowTasks: [
      "Rewrite the strategy brief around new builds, extensions and full start-to-finish construction projects.",
      "Audit m8designs.co.uk for proof order, mobile clarity, contact CTA and project fit language.",
      "Prepare a project-fit qualifier that filters out handyman jobs, awkward access and subcontractor work.",
      "Decide how Google Business fits the plan without making it the only foundation priority."
    ],
    waitingTasks: [
      "Pull high-quality project photos into separate folders for new builds, extensions, bathrooms and rendering.",
      "Collect any customer messages or review snippets that can be used on the website.",
      "Choose the strongest visuals for a premium portfolio order.",
      "Add real project proof into the content templates."
    ],
    strategyBrief: [
      { label: "Positioning", value: "M8 should look like a premium project delivery company for proper construction work, not a general small-jobs page." },
      { label: "Best work", value: "New builds, extensions, bathrooms and rendering, with full start-to-finish projects as the main commercial direction." },
      { label: "Buyer", value: "Brighton/Hove homeowners who want a proper project handled with control, standards and clear site management." },
      { label: "Filter", value: "Avoid handyman requests, difficult access, city-centre parking-heavy jobs and subcontractor work under other builders." }
    ],
    offerAngles: [
      "Start-to-finish construction projects for Brighton/Hove homeowners.",
      "New builds and extensions delivered with control over the full site and standard.",
      "Premium bathroom, rendering and finish work used as proof of larger project quality.",
      "Better-fit enquiries by showing exactly what M8 does and does not want."
    ],
    contentTemplates: [
      { format: "Portfolio post", title: "Built from start to finish", hook: "Show M8 as the team that can manage the whole journey, not just one trade.", proof: "Project sequence, finished result and contact CTA." },
      { format: "Fit-filter post", title: "What kind of project is right for M8", hook: "Attract proper projects while quietly repelling handyman requests.", proof: "Examples of new builds, extensions, bathrooms or rendering." },
      { format: "Website section", title: "Project types we take on", hook: "Make the website instantly clear for homeowners comparing builders.", proof: "Service tiles, strongest project photos and phone/email CTA." }
    ],
    reportSections: [
      "Current foundation score and why the profile needs tightening before ads.",
      "Best project types to promote.",
      "Website/contact route audit.",
      "Competitor benchmark and proof gaps.",
      "Drive folder asset review.",
      "30-day starter foundations plan.",
      "Google Business recommendation and lead test readiness decision."
    ]
  };
}

function renderStarterDeliveryPrepPanel(analysis, foundationAudit, competitorBenchmark) {
  const prep = getStarterDeliveryPrep(analysis, foundationAudit, competitorBenchmark);
  const readyCount = prep.nowTasks.length;
  const waitingCount = prep.waitingTasks.length;
  return `
    <section class="panel starter-delivery-prep-panel">
      <div class="panel-header">
        <div>
          <p class="label">Delivery command centre</p>
          <h2>Starter Foundations Prep</h2>
          ${renderSectionPreview("Everything Xello can prepare while the Google Drive folders are being filled out, plus the exact sections to finish once proof arrives.", [
            { value: readyCount, label: "can do now" },
            { value: waitingCount, label: "waiting on assets" },
            { value: `${prep.score}%`, label: "audit score" }
          ])}
        </div>
        <span class="pill">Ready to work</span>
      </div>
      <div class="delivery-prep-hero">
        <article>
          <p class="label">Can do now</p>
          <ol class="analysis-checklist">
            ${prep.nowTasks.map((task) => `<li>${escapeHtml(task)}</li>`).join("")}
          </ol>
        </article>
        <article>
          <p class="label">Finish when assets arrive</p>
          <ol class="analysis-checklist">
            ${prep.waitingTasks.map((task) => `<li>${escapeHtml(task)}</li>`).join("")}
          </ol>
        </article>
      </div>
      <div class="delivery-brief-grid">
        ${prep.strategyBrief.map((item) => `
          <article>
            <span>${escapeHtml(item.label)}</span>
            <strong>${escapeHtml(item.value)}</strong>
          </article>
        `).join("")}
      </div>
      <div class="delivery-template-layout">
        <article class="delivery-offer-card">
          <p class="label">Starter offer angles</p>
          <ol class="analysis-checklist">
            ${prep.offerAngles.map((angle) => `<li>${escapeHtml(angle)}</li>`).join("")}
          </ol>
        </article>
        <article class="delivery-report-card">
          <p class="label">Client report structure</p>
          <ol class="analysis-checklist">
            ${prep.reportSections.map((section) => `<li>${escapeHtml(section)}</li>`).join("")}
          </ol>
        </article>
      </div>
      <div class="content-template-grid">
        ${prep.contentTemplates.map((template) => `
          <article>
            <span>${escapeHtml(template.format)}</span>
            <strong>${escapeHtml(template.title)}</strong>
            <p>${escapeHtml(template.hook)}</p>
            <em>${escapeHtml(template.proof)}</em>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function getStarterDeliveryPack(analysis) {
  const isFirstTouch = analysis.company === "First Touch Innovations";

  if (isFirstTouch) {
    return {
      headline: "First Touch should be packaged around fewer, higher-value renovation enquiries, with architect referrals treated as a serious growth channel.",
      assetChecklist: [
        { item: "Best larger-project photos", status: "Waiting", note: "Lofts, extensions and full refurb shots that show finished quality." },
        { item: "Before and after examples", status: "Waiting", note: "Use to make the transformation obvious in reports and social content." },
        { item: "Owner/process videos", status: "Waiting", note: "Short clips explaining trust, timeframes, communication and how changes are handled." },
        { item: "Detailed 5-star reviews", status: "Available", note: "Pick the strongest reviews for the website, proof pack and architect PDF." },
        { item: "Architect proof pack assets", status: "Build next", note: "Needs 3 larger projects, 3 reviews, intro copy and a simple referral CTA." }
      ],
      monthPlan: [
        { week: "Week 1", focus: "Positioning and proof audit", action: "Confirm strongest high-value services, organise proof folders and write the client-facing positioning brief." },
        { week: "Week 2", focus: "Visible trust upgrades", action: "Tighten website/social language, Google Business proof, enquiry route and FAQs around timeframes and cost clarity." },
        { week: "Week 3", focus: "Architect referral asset", action: "Build the one-page architect referral PDF with project proof, reviews and contact route." },
        { week: "Week 4", focus: "Readiness decision", action: "Score the foundations again and decide whether a small lead test is now sensible." }
      ],
      clientScript: [
        "The main thing I have taken from your answers is that we should not position First Touch around small odd jobs.",
        "The strongest angle is bigger renovation work: lofts, extensions and full refurbs, with smaller jobs kept as a referral route rather than the main message.",
        "Before we do anything with ads, I want to make the proof, enquiry route and tracking stronger so better leads do not get wasted.",
        "A useful extra asset for you is an architect referral pack, because architects could become a long-term source of bigger work."
      ],
      nextDecisions: [
        "Which 3 larger projects best prove First Touch can handle bigger work?",
        "Which reviews would make an architect or homeowner feel safest?",
        "Does the architect pack need to be a PDF first, a website page later, or both?"
      ]
    };
  }

  return {
    headline: "M8 should be packaged as a premium full-project construction team, with clear filtering so the content attracts proper projects instead of handyman requests.",
    assetChecklist: [
      { item: "New build project proof", status: "Waiting", note: "Best start-to-finish visuals, ideally showing scale and quality." },
      { item: "Extension project proof", status: "Waiting", note: "Use as the main homeowner-facing proof for higher-value enquiries." },
      { item: "Bathrooms and rendering", status: "Waiting", note: "Use as supporting proof that shows finish quality and seasonal demand." },
      { item: "Website portfolio images", status: "Available", note: "Audit the current website order, then replace with higher-quality uploads where possible." },
      { item: "Review/testimonial snippets", status: "Needed", note: "If Google is not the focus yet, add believable website review snippets from real messages." }
    ],
    monthPlan: [
      { week: "Week 1", focus: "Offer clarity", action: "Rewrite positioning around new builds, extensions and full start-to-finish project delivery." },
      { week: "Week 2", focus: "Website and profile cleanup", action: "Improve project order, contact CTA, service wording and mobile proof clarity." },
      { week: "Week 3", focus: "Content and filters", action: "Create content that attracts proper projects and filters out handyman, awkward-access and subcontractor work." },
      { week: "Week 4", focus: "Google and readiness decision", action: "Decide whether Google Business is needed now, then rescore before any lead test." }
    ],
    clientScript: [
      "The strongest message for M8 is not that you do a bit of everything. It is that you can take proper projects from start to finish.",
      "The content should lead with new builds and extensions, then use bathrooms, rendering and finish work as proof of quality.",
      "We should also make the poor-fit jobs clearer, so the marketing does not create loads of small handyman enquiries.",
      "Before any ads, I want the website/contact route and proof library to look premium enough to match the type of projects you want."
    ],
    nextDecisions: [
      "Which project category should be the first public focus: new builds, extensions, or bathrooms/rendering?",
      "Do you want Google Business set up now, or should the website/TikTok proof come first?",
      "Which images are high-quality enough to represent M8 as premium?"
    ]
  };
}

function renderStarterDeliveryPackPanel(analysis) {
  const pack = getStarterDeliveryPack(analysis);
  return `
    <section class="panel starter-delivery-pack-panel">
      <div class="panel-header">
        <div>
          <p class="label">Client-ready materials</p>
          <h2>Starter Delivery Pack</h2>
          ${renderSectionPreview(pack.headline, [
            { value: pack.assetChecklist.length, label: "asset checks" },
            { value: "30 days", label: "delivery plan" },
            { value: pack.clientScript.length, label: "talking points" }
          ])}
        </div>
        <span class="pill">Use on next call</span>
      </div>
      <div class="starter-pack-grid">
        <article class="starter-pack-feature">
          <p class="label">Client call script</p>
          <ol class="analysis-checklist">
            ${pack.clientScript.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
          </ol>
        </article>
        <article>
          <p class="label">Next decisions</p>
          <ol class="analysis-checklist">
            ${pack.nextDecisions.map((decision) => `<li>${escapeHtml(decision)}</li>`).join("")}
          </ol>
        </article>
      </div>
      <div class="asset-intake-grid">
        ${pack.assetChecklist.map((asset) => `
          <article class="${asset.status === "Available" ? "ready" : asset.status === "Needed" ? "needed" : "waiting"}">
            <span>${escapeHtml(asset.status)}</span>
            <strong>${escapeHtml(asset.item)}</strong>
            <p>${escapeHtml(asset.note)}</p>
          </article>
        `).join("")}
      </div>
      <div class="month-plan-grid">
        ${pack.monthPlan.map((week) => `
          <article>
            <span>${escapeHtml(week.week)}</span>
            <strong>${escapeHtml(week.focus)}</strong>
            <p>${escapeHtml(week.action)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function getPreAssetWorkbench(analysis, foundationAudit, competitorBenchmark) {
  const isFirstTouch = analysis.company === "First Touch Innovations";
  const score = foundationAudit?.score || competitorBenchmark?.currentScore || 0;

  if (isFirstTouch) {
    return {
      reportTitle: "First Touch Innovations - Starter Foundations Report",
      summary: "First Touch already has strong trust potential through 5-star reviews and a clear owner ambition to win bigger renovation projects. The current work is to package that properly before sending paid traffic.",
      clientUpdate: "I have built the strategy side while waiting for your photos/videos. The direction is bigger renovation projects first: lofts, extensions and full refurbs, with architect referrals as a serious growth route. Once your proof folder is filled, I can turn this into a polished report and referral pack.",
      profileCopy: [
        { label: "Short positioning line", value: "Local Brighton/Hove renovation team for loft conversions, extensions and full refurb projects." },
        { label: "Enquiry CTA", value: "Call, text or WhatsApp to discuss your project and the best next step." },
        { label: "Trust message", value: "5-star local reviews, practical communication and a focus on projects where the client needs reliability, not just labour." },
        { label: "Architect angle", value: "A reliable local build partner for architects who need a trusted contractor to discuss or price homeowner projects." }
      ],
      reportBlocks: [
        { label: "Current score", value: `${score}% starter foundation readiness. Paid lead testing stays gated until proof and tracking improve.` },
        { label: "What is working", value: "Clear owner direction, strong review base, valuable project types and a sensible architect referral opportunity." },
        { label: "What is missing", value: "Organised proof library, project examples, stronger enquiry tracking and a client-facing architect proof pack." },
        { label: "30-day outcome", value: "A sharper public profile, proof pack, architect referral asset and lead tracker ready for better-quality enquiries." }
      ],
      trackerRows: [
        { field: "Lead source", example: "Architect referral / Google / WhatsApp / Facebook / Instagram" },
        { field: "Project type", example: "Loft conversion, extension, full refurb, smaller referral job" },
        { field: "Project value signal", example: "Small, medium, high, or owner-estimated range" },
        { field: "Quote stage", example: "New enquiry, info needed, site visit, quote sent, follow-up due" },
        { field: "Next follow-up", example: "Date and exact next action" }
      ],
      contentCalendar: [
        { day: "Post 1", idea: "Why bigger renovation projects need clearer communication before work starts." },
        { day: "Post 2", idea: "Before/after or project-stage story from a loft, extension or refurb once assets arrive." },
        { day: "Post 3", idea: "What architects need from a reliable build partner." },
        { day: "Post 4", idea: "Review-led trust post using one detailed 5-star review." }
      ],
      nextWork: [
        "Draft the one-page architect referral PDF structure.",
        "Prepare the project proof selection criteria.",
        "Build the lead tracker columns in the CRM or Google Sheet.",
        "Write the first version of the client-facing report without photos.",
        "Add photos/reviews once the Drive folder is ready."
      ]
    };
  }

  return {
    reportTitle: "M8 Designs - Starter Foundations Report",
    summary: "M8 has a strong project-delivery angle, but the message needs to move away from broad trades and toward premium start-to-finish projects before any paid lead generation is considered.",
    clientUpdate: "I have built the strategy side while waiting for your project files. The direction is full-project construction first: new builds, extensions and proper start-to-finish work, with bathrooms/rendering used as proof of quality. Once your folder is filled, I can turn this into a premium profile/report.",
    profileCopy: [
      { label: "Short positioning line", value: "Start-to-finish construction projects, extensions and premium home improvements across Brighton/Hove." },
      { label: "Enquiry CTA", value: "Call or email to discuss your project, access, timeline and the best way to quote it properly." },
      { label: "Trust message", value: "A project-led team focused on site control, finish quality and proper work rather than small handyman jobs." },
      { label: "Filter message", value: "Best suited to proper projects with sensible access, parking/material drop-off and enough scope to do the work properly." }
    ],
    reportBlocks: [
      { label: "Current score", value: `${score}% starter foundation readiness. Ads stay gated while the profile, proof and enquiry route are tightened.` },
      { label: "What is working", value: "Clear desire for proper projects, existing website/TikTok presence, strong service range and visual portfolio potential." },
      { label: "What is missing", value: "Sharper project hierarchy, organised proof, review snippets, Google Business decision and poor-fit enquiry filters." },
      { label: "30-day outcome", value: "A cleaner premium profile, stronger website sections, better-fit enquiry wording and a practical lead tracking process." }
    ],
    trackerRows: [
      { field: "Lead source", example: "Website / TikTok / referral / word of mouth / future Google" },
      { field: "Project type", example: "New build, extension, bathroom, rendering, other" },
      { field: "Access fit", example: "Good parking/storage, okay, difficult access, high-rise/city-centre issue" },
      { field: "Fit decision", example: "Strong fit, possible fit, poor fit, reject" },
      { field: "Quote stage", example: "New enquiry, info needed, site visit, quote sent, follow-up due" }
    ],
    contentCalendar: [
      { day: "Post 1", idea: "What makes a project right for M8: proper scope, access and start-to-finish delivery." },
      { day: "Post 2", idea: "New build or extension project proof once strongest assets arrive." },
      { day: "Post 3", idea: "Bathroom/rendering finish-quality proof as supporting content." },
      { day: "Post 4", idea: "Website/contact post explaining how to enquire and what info to send." }
    ],
    nextWork: [
      "Draft homepage/profile wording around full-project delivery.",
      "Prepare the website service section order.",
      "Create the poor-fit enquiry filter wording.",
      "Build the lead tracker columns in the CRM or Google Sheet.",
      "Add best images/testimonials once the Drive folder is ready."
    ]
  };
}

function renderPreAssetWorkbenchPanel(analysis, foundationAudit, competitorBenchmark) {
  const workbench = getPreAssetWorkbench(analysis, foundationAudit, competitorBenchmark);
  return `
    <section class="panel pre-asset-workbench-panel">
      <div class="panel-header">
        <div>
          <p class="label">No-assets workbench</p>
          <h2>Everything To Complete Before Drive Uploads</h2>
          ${renderSectionPreview(workbench.summary, [
            { value: "No photos needed", label: "status" },
            { value: workbench.trackerRows.length, label: "tracker fields" },
            { value: workbench.contentCalendar.length, label: "content prompts" }
          ])}
        </div>
        <span class="pill">Do this now</span>
      </div>
      <div class="pre-asset-report-card">
        <div>
          <p class="label">One-page report draft</p>
          <h3>${escapeHtml(workbench.reportTitle)}</h3>
          <p>${escapeHtml(workbench.summary)}</p>
        </div>
        <article>
          <p class="label">Message to send while waiting</p>
          <strong>${escapeHtml(workbench.clientUpdate)}</strong>
        </article>
      </div>
      <div class="pre-asset-copy-grid">
        ${workbench.profileCopy.map((item) => `
          <article>
            <span>${escapeHtml(item.label)}</span>
            <strong>${escapeHtml(item.value)}</strong>
          </article>
        `).join("")}
      </div>
      <div class="pre-asset-report-grid">
        ${workbench.reportBlocks.map((block) => `
          <article>
            <span>${escapeHtml(block.label)}</span>
            <strong>${escapeHtml(block.value)}</strong>
          </article>
        `).join("")}
      </div>
      <div class="pre-asset-operating-grid">
        <article>
          <p class="label">Lead tracker setup</p>
          <div class="mini-table">
            ${workbench.trackerRows.map((row) => `
              <div>
                <strong>${escapeHtml(row.field)}</strong>
                <span>${escapeHtml(row.example)}</span>
              </div>
            `).join("")}
          </div>
        </article>
        <article>
          <p class="label">Content prompts ready</p>
          <ol class="analysis-checklist">
            ${workbench.contentCalendar.map((item) => `<li><strong>${escapeHtml(item.day)}:</strong> ${escapeHtml(item.idea)}</li>`).join("")}
          </ol>
        </article>
        <article>
          <p class="label">Next work queue</p>
          <ol class="analysis-checklist">
            ${workbench.nextWork.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ol>
        </article>
      </div>
    </section>
  `;
}

function getReadinessItems(analysis, foundationAudit, competitorBenchmark) {
  const currentScore = Number(foundationAudit?.score || competitorBenchmark?.currentScore || 0);
  const competitorAverage = numberFromPercent(competitorBenchmark?.competitorAverage);
  const competitorGapScore = competitorAverage ? Math.max(0, Math.min(100, currentScore + (100 - competitorAverage))) : currentScore;
  return [
    {
      label: "Google presence",
      score: auditRowScore(foundationAudit, ["google"]) || (analysis.company === "M8 Designs" ? 12 : 74),
      detail: analysis.company === "M8 Designs" ? "Likely missing, create or claim if local search matters." : "Profile found, now optimise services, photos and review activity."
    },
    {
      label: "Website/enquiry route",
      score: auditRowScore(foundationAudit, ["website", "portfolio"]) || 35,
      detail: "Make services, proof and the fastest quote route clear before sending traffic."
    },
    {
      label: "Social proof",
      score: auditRowScore(foundationAudit, ["social"]) || 40,
      detail: "Clean profile bio, pinned proof, local CTA and recent project content."
    },
    {
      label: "Content assets",
      score: auditRowScore(foundationAudit, ["proof", "content"]) || 38,
      detail: "Collect finished work, before/after visuals, reviews, FAQs and process clips."
    },
    {
      label: "Tracking",
      score: auditRowScore(foundationAudit, ["tracking", "follow-up"]) || 25,
      detail: "Track source, service wanted, value, reply speed, quote stage and follow-up."
    },
    {
      label: "Competitor gap",
      score: competitorGapScore,
      detail: competitorAverage ? `Current score compared with a ${competitorAverage}% local benchmark.` : "Benchmark against 3 strong local alternatives."
    }
  ];
}

function renderClientReadinessBoard(analysis, foundationAudit, competitorBenchmark) {
  const score = Number(foundationAudit?.score || competitorBenchmark?.currentScore || 0);
  const status = readinessLabel(score);
  const items = getReadinessItems(analysis, foundationAudit, competitorBenchmark);
  return `
    <section class="panel readiness-panel">
      <div class="panel-header">
        <div>
          <p class="label">Client readiness score</p>
          <h2>Lead Test Readiness Gate</h2>
          ${renderSectionPreview("A simple decision board showing whether this client is ready for paid visibility, nearly ready, or still needs starter foundations first.", [
            { value: `${score}%`, label: "foundation score" },
            { value: status.label, label: "current decision" }
          ])}
        </div>
        <span class="readiness-decision ${status.className}">${status.label}</span>
      </div>
      <div class="readiness-hero-card">
        <div>
          <span>Readiness</span>
          <strong>${score}%</strong>
          <p>${status.label}. Keep the 14-day lead test gated until the basics are strong enough to convert attention into enquiries.</p>
        </div>
        ${renderProgressBar(score, 100, "Foundation readiness")}
      </div>
      <div class="readiness-grid">
        ${items.map((item) => `
          <article class="readiness-item ${auditScoreBand(item.score).className}">
            <div class="card-title-row">
              <strong>${item.label}</strong>
              <span>${item.score}%</span>
            </div>
            <div class="readiness-meter"><span style="width:${Math.max(4, Math.min(100, item.score))}%"></span></div>
            <p>${item.detail}</p>
            <em>${readinessItemLabel(item.score)}</em>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function splitOwnerResponseSentences(raw = "") {
  return String(raw)
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+|\n+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function analyseOwnerResponse(raw = "", analysis = {}) {
  const text = String(raw || "").trim();
  const lower = text.toLowerCase();
  const serviceKeywords = ["kitchen", "bathroom", "extension", "new build", "build", "loft", "refurb", "renovation", "carpentry", "joinery", "wardrobe", "rendering", "plastering", "painting", "decorating", "design", "garden", "driveway", "flooring", "media wall"];
  const foundServices = serviceKeywords.filter((keyword) => lower.includes(keyword));
  const sentences = splitOwnerResponseSentences(text);
  const avoidLine = sentences.find((sentence) => /avoid|don't|do not|not want|too small|cheap|low.margin|awkward|hassle/i.test(sentence));
  const proofLine = sentences.find((sentence) => /photo|video|review|testimonial|portfolio|before|after|case study|project/i.test(sentence));
  const enquiryLine = sentences.find((sentence) => /call|text|whatsapp|form|instagram|dm|email|reply|enquir/i.test(sentence));
  const mainService = foundServices[0] || "";

  return {
    bestServices: foundServices.length
      ? `Likely high-value focus: ${foundServices.slice(0, 3).map((item) => item.replace(/\b\w/g, (letter) => letter.toUpperCase())).join(", ")}. Confirm margin and capacity before promoting.`
      : "Highest-income service still needs owner confirmation. Ask which work creates the best margin, not just the most enquiries.",
    avoidJobs: avoidLine || "Poor-fit jobs still need confirming: small, low-margin, awkward or slow jobs should be filtered out before outreach.",
    enquiryRoute: enquiryLine || "Best enquiry route still needs confirming: call, WhatsApp, form, Instagram DM or email.",
    proofAssets: proofLine || "Ask for finished project photos, before/after shots, reviews, FAQs, process clips and any customer messages that can be used as proof.",
    starterPriorities: (analysis.foundationAudit?.priorities || analysis.nextActions || []).slice(0, 3).join(" "),
    leadTestAngle: lower.includes("architect")
      ? "Possible later growth angle: build authority and referral assets for architects as well as homeowner-facing proof. Paid lead tests can come later once the foundations are ready."
      : mainService
      ? `Possible later test angle: local ${mainService} enquiries around Brighton/Hove, only after the profile, proof and tracking foundations are ready.`
      : "Possible later test angle depends on the high-value service they confirm. Keep paid ads gated for now."
  };
}

function renderOwnerResponseInbox(analysis) {
  const saved = state.clientOwnerResponses?.[analysis.company] || {};
  const summary = saved.summary || analyseOwnerResponse(saved.raw || "", analysis);
  return `
    <section class="panel owner-response-panel">
      <div class="panel-header">
        <div>
          <p class="label">Owner response inbox</p>
          <h2>Paste WhatsApp Replies Here</h2>
          ${renderSectionPreview("When your mates reply, paste the message here and the CRM turns it into service priorities, proof gaps and starter actions.", [
            { value: saved.updatedAt ? "Captured" : "Waiting", label: "response status" },
            { value: "Local only", label: "stored in browser" }
          ])}
        </div>
        <button class="small-button approve" data-owner-response-save="${analysis.company}">Save + Summarise</button>
      </div>
      <textarea class="owner-response-textarea" data-owner-response-input placeholder="Paste the WhatsApp reply from ${analysis.company} here...">${escapeHtml(saved.raw || "")}</textarea>
      ${saved.updatedAt ? `<p class="owner-response-saved">Last saved ${saved.updatedAt}</p>` : ""}
      <div class="owner-summary-grid">
        <article><p class="label">Best services</p><strong>${escapeHtml(summary.bestServices)}</strong></article>
        <article><p class="label">Jobs to avoid</p><strong>${escapeHtml(summary.avoidJobs)}</strong></article>
        <article><p class="label">Enquiry route</p><strong>${escapeHtml(summary.enquiryRoute)}</strong></article>
        <article><p class="label">Proof needed</p><strong>${escapeHtml(summary.proofAssets)}</strong></article>
        <article class="wide"><p class="label">Starter priorities</p><strong>${escapeHtml(summary.starterPriorities)}</strong></article>
        <article class="wide"><p class="label">Later lead test angle</p><strong>${escapeHtml(summary.leadTestAngle)}</strong></article>
      </div>
    </section>
  `;
}

function renderPitchView(analysis, foundationAudit, competitorBenchmark) {
  const competitorName = String(competitorBenchmark?.bestCompetitor || "strong local competitors");
  return `
    <section class="panel pitch-view-panel">
      <div class="panel-header">
        <div>
          <p class="label">Client pitch view</p>
          <h2>Before / After Story</h2>
          ${renderSectionPreview("A clean client-facing explanation of why starter foundations come first and what improves before any lead test.", [
            { value: "4 steps", label: "pitch story" },
            { value: "No ad rush", label: "positioning" }
          ])}
        </div>
        <span class="pill">Show this on calls</span>
      </div>
      <div class="pitch-grid">
        <article>
          <span>01</span>
          <p class="label">Where you are now</p>
          <h3>${foundationAudit?.status || "Foundations need checking"}</h3>
          <p>${foundationAudit?.summary || analysis.objective}</p>
        </article>
        <article>
          <span>02</span>
          <p class="label">What competitors do better</p>
          <h3>${competitorName}</h3>
          <p>${competitorBenchmark?.summary || "Competitors are used as the practical benchmark for proof, clarity and enquiry routes."}</p>
        </article>
        <article>
          <span>03</span>
          <p class="label">What Xello fixes first</p>
          <h3>Starter foundations</h3>
          <p>Profile clarity, Google Business, website/enquiry basics, proof assets, content plan and lead tracking.</p>
        </article>
        <article>
          <span>04</span>
          <p class="label">What happens after</p>
          <h3>Lead test only when ready</h3>
          <p>Once the foundations can convert attention, test one local angle with real content, Meta lead tracking and client-paid ad spend.</p>
        </article>
      </div>
    </section>
  `;
}

function getContentAssets(analysis) {
  const firstTouch = analysis.company === "First Touch Innovations";
  const m8 = analysis.company === "M8 Designs";
  return [
    { item: "Finished project photos", status: firstTouch ? "Likely available" : "Ask owner", detail: "Use as website/social proof and future ad creative." },
    { item: "Before/after shots", status: "Ask owner", detail: "Best proof format for homeowners comparing options." },
    { item: "Short process clips", status: "Needed", detail: "Useful for Reels, TikTok and trust-building content." },
    { item: "Customer reviews/messages", status: firstTouch ? "Google reviews found" : "Needed", detail: "Use real trust proof, never fake results." },
    { item: "Logo and brand files", status: m8 ? "Logo supplied" : "Confirm final logo", detail: "Keeps profiles, reports and content consistent." },
    { item: "FAQs and objections", status: "Ask owner", detail: "Turns customer worries into useful posts and call prep." },
    { item: "Portfolio/contact route", status: firstTouch ? "Website found" : "Needs route", detail: "Gives attention a clear place to convert." },
    { item: "Lead tracking fields", status: "Build now", detail: "Source, service wanted, value, quote stage and next follow-up." }
  ];
}

function renderContentAssetChecklist(analysis) {
  const assets = getContentAssets(analysis);
  const readyCount = assets.filter((asset) => /found|supplied|available/i.test(asset.status)).length;
  const score = Math.round((readyCount / assets.length) * 100);
  return `
    <section class="panel content-assets-panel">
      <div class="panel-header">
        <div>
          <p class="label">Content asset checklist</p>
          <h2>Proof Library Readiness</h2>
          ${renderSectionPreview("A practical checklist of what we need before the client looks polished enough for stronger visibility.", [
            { value: `${score}%`, label: "asset readiness" },
            { value: assets.length, label: "proof items" }
          ])}
        </div>
        ${renderAuditScore(score)}
      </div>
      <div class="asset-checklist-grid">
        ${assets.map((asset) => `
          <article class="asset-card ${/found|supplied|available/i.test(asset.status) ? "ready" : /needed|needs|build/i.test(asset.status) ? "needed" : "ask"}">
            <span>${asset.status}</span>
            <strong>${asset.item}</strong>
            <p>${asset.detail}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderCompetitorVisualComparison(competitorBenchmark) {
  if (!competitorBenchmark) return "";
  const current = Number(competitorBenchmark.currentScore || 0);
  const competitorAverage = numberFromPercent(competitorBenchmark.competitorAverage);
  const target = numberFromPercent(competitorBenchmark.targetScore) || 78;
  const rows = [
    { label: "Client current", value: current, note: "Where the foundations are today" },
    { label: "Competitor average", value: competitorAverage, note: "Local benchmark from public scan" },
    { label: "Ready target", value: target, note: "Minimum before pushing paid lead generation" }
  ].filter((row) => row.value);
  return `
    <div class="competitor-visual-panel">
      ${rows.map((row) => `
        <article>
          <div class="card-title-row">
            <strong>${row.label}</strong>
            <span>${row.value}%</span>
          </div>
          <div class="comparison-bar"><span style="width:${Math.min(100, row.value)}%"></span></div>
          <p>${row.note}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function renderStarterTimeline(analysis) {
  const steps = [
    { day: "Day 1", title: "Confirm owner answers", detail: "Paste WhatsApp replies, define high-income services, poor-fit jobs, proof assets and enquiry owner." },
    { day: "Day 2", title: "Audit public foundations", detail: "Check Google Business, website/portfolio, social profiles, trust proof and current enquiry route." },
    { day: "Day 3", title: "Fix visible trust", detail: "Tighten bios, CTAs, service wording, proof order, review plan and contact route." },
    { day: "Day 4", title: "Build proof library", detail: "Collect photos, before/after shots, process clips, reviews, FAQs and strongest project examples." },
    { day: "Day 5", title: "Set tracking", detail: "Create lead source, project value, quote stage, response speed and follow-up fields in the CRM." },
    { day: "Day 6", title: "Readiness decision", detail: "Score the foundations. If ready, plan one 14-day lead test angle. If not, keep polishing." }
  ];
  return `
    <section class="panel starter-timeline-panel">
      <div class="panel-header">
        <div>
          <p class="label">Task timeline</p>
          <h2>Starter Foundations Timeline</h2>
          ${renderSectionPreview(`A simple working timeline for ${analysis.company}, built around foundations first and paid ads only after readiness.`, [
            { value: "6 days", label: "starter sprint" },
            { value: "Decision gate", label: "final step" }
          ])}
        </div>
      </div>
      <div class="starter-timeline">
        ${steps.map((step) => `
          <article>
            <span>${step.day}</span>
            <strong>${step.title}</strong>
            <p>${step.detail}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderClients() {
  renderClientOperatingBoard();

  document.getElementById("clientGrid").innerHTML = state.clients
    .map((client) => `
      <article class="client-card">
        <p class="label">${client.status}</p>
        <h2>${client.company}</h2>
        <strong>${client.retainer}</strong>
        <span>${client.note}</span>
        ${client.company === "First Touch Innovations" ? `<button class="small-button approve" data-view-jump="client-first-touch">Open Analysis Sheet</button>` : ""}
        ${client.company === "M8 Designs" ? `<button class="small-button approve" data-view-jump="client-m8-designs">Open Analysis Sheet</button>` : ""}
      </article>
    `)
    .join("");

  const auditTarget = document.getElementById("clientFoundationAuditGrid");
  if (!auditTarget) return;
  const audits = (state.clientAnalyses || defaultData.clientAnalyses).filter((analysis) => analysis.foundationAudit);
  auditTarget.innerHTML = audits
    .map((analysis) => {
      const audit = analysis.foundationAudit;
      return `
        <article class="foundation-audit-card">
          <div class="card-title-row">
            <div>
              <p class="label">${audit.lastRun}</p>
              <h3>${analysis.company}</h3>
            </div>
            ${renderAuditScore(audit.score)}
          </div>
          <strong>${audit.status}</strong>
          <p>${audit.summary}</p>
          <div class="audit-mini-list">
            ${audit.priorities.slice(0, 3).map((item) => `<span>${item}</span>`).join("")}
          </div>
          ${analysis.company === "First Touch Innovations" ? `<button class="small-button approve" data-view-jump="client-first-touch">Open Full Audit</button>` : ""}
          ${analysis.company === "M8 Designs" ? `<button class="small-button approve" data-view-jump="client-m8-designs">Open Full Audit</button>` : ""}
        </article>
      `;
    })
    .join("") || `<p class="metric-note">No foundations audits yet.</p>`;
}

function getClientOperatingBoard() {
  return [
    {
      client: "First Touch Innovations",
      stage: "Proof asset intake",
      momentum: "Moving",
      nextAction: "Use the shoot-day print pack with Sonny and collect proof assets instead of waiting on bio edits.",
      aiCanDo: ["Prepare shot list/scripts", "Build proof folder structure", "Draft first content batch", "Prepare tracker fields"],
      waitingOn: ["Shoot day with Sonny", "Original/high-res files", "Review screenshots", "Owner permission for public use"],
      samAction: "Take the print pack to the shoot, capture the proof library and mark assets by project/proof type afterwards.",
      crmLearning: "Waiting on a client should not feel stuck if Xello has prep work, proof capture and tracking setup to complete."
    },
    {
      client: "M8 Designs",
      stage: "Missing foundations",
      momentum: "Needs decisions",
      nextAction: "Confirm platform decisions and keep the offer focused on proper projects, not small handyman enquiries.",
      aiCanDo: ["Audit website contact route", "Prepare platform status notes", "Draft profile/portfolio positioning", "Build M8 tracker fields"],
      waitingOn: ["Owner links for Instagram/Facebook if they exist", "Google Business create/skip decision", "High-quality project files"],
      samAction: "Ask one clean M8 question set: existing socials, Google Business decision, best project assets and contact route.",
      crmLearning: "The system needs a clear Create/Polish/Skip decision for each foundation so setup work does not blur into guessing."
    },
    {
      client: "Xello CRM",
      stage: "System development",
      momentum: "Build from friction",
      nextAction: "Keep improving the dashboard around real trial-client bottlenecks instead of adding random features.",
      aiCanDo: ["Label ownership", "Prepare next actions", "Document offer process", "Gate lead tests"],
      waitingOn: ["Real trial outcomes", "Shoot assets", "Client responses"],
      samAction: "Use each confusing moment as a rule for the offer: what AI does, what Sam does and what the client must approve.",
      crmLearning: "The first trial clients are not just clients; they are the training data for the repeatable Xello Foundations offer."
    }
  ];
}

function renderClientOperatingBoard() {
  const target = document.getElementById("clientOperatingBoard");
  if (!target) return;
  const rows = getClientOperatingBoard();
  target.innerHTML = `
    <div class="client-operating-summary">
      <article>
        <span>Primary goal</span>
        <strong>Keep every trial client moving one useful step forward.</strong>
      </article>
      <article>
        <span>Rule</span>
        <strong>Label work as AI can do, Sam action, waiting on client or approval gate.</strong>
      </article>
      <article>
        <span>Offer learning</span>
        <strong>Turn each messy trial-client lesson into the repeatable Foundations process.</strong>
      </article>
    </div>
    <div class="client-operating-grid">
      ${rows.map((row) => `
        <article class="client-operating-card">
          <div class="card-title-row">
            <div>
              <p class="label">${escapeHtml(row.stage)}</p>
              <h3>${escapeHtml(row.client)}</h3>
            </div>
            <span class="status-chip ${statusToneClass(row.momentum)}">${escapeHtml(row.momentum)}</span>
          </div>
          <strong>${escapeHtml(row.nextAction)}</strong>
          <div class="client-operating-columns">
            <div>
              <span>AI can do now</span>
              <ul>${row.aiCanDo.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </div>
            <div>
              <span>Waiting on</span>
              <ul>${row.waitingOn.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </div>
          </div>
          <p><strong>Sam action:</strong> ${escapeHtml(row.samAction)}</p>
          <em>${escapeHtml(row.crmLearning)}</em>
        </article>
      `).join("")}
    </div>
  `;
}

function statusToneClass(status = "") {
  const text = String(status).toLowerCase();
  if (text.includes("moving") || text.includes("build")) return "positive";
  if (text.includes("decision") || text.includes("needs")) return "warning";
  return "neutral";
}

function renderClientAnalyses() {
  renderClientAnalysisSheet("clientFirstTouchSheet", "First Touch Innovations");
  renderClientAnalysisSheet("clientM8Sheet", "M8 Designs");
}

function setupClientSectionExpansion() {
  document.querySelectorAll(".client-analysis-view .panel:not(.client-analysis-hero):not(.client-progress-panel)").forEach((panel) => {
    const header = panel.querySelector(":scope > .panel-header");
    if (!header) return;

    panel.classList.add("analysis-expandable-panel");
    panel.classList.remove("is-expanded");

    let actions = header.querySelector(":scope > .panel-actions");
    if (!actions) {
      actions = document.createElement("div");
      actions.className = "panel-actions";
      [...header.children].forEach((child) => {
        if (!child.matches("div")) actions.appendChild(child);
      });
      header.appendChild(actions);
    }

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "small-button section-toggle-button";
    toggle.dataset.analysisToggle = "true";
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "View";
    actions.appendChild(toggle);
  });
}

function toggleClientAnalysisSection(button) {
  const panel = button.closest(".analysis-expandable-panel");
  if (!panel) return;
  const isExpanded = panel.classList.toggle("is-expanded");
  button.setAttribute("aria-expanded", String(isExpanded));
  button.textContent = isExpanded ? "Close" : "View";
}

function toggleProgressStepDescription(button) {
  const lane = button.closest(".client-progress-lane");
  const detail = lane?.querySelector(".client-progress-detail");
  if (!lane || !detail) return;

  const isOpen = button.getAttribute("aria-expanded") === "true";
  lane.querySelectorAll("[data-progress-step-toggle]").forEach((stepButton) => {
    stepButton.setAttribute("aria-expanded", "false");
    stepButton.classList.remove("is-detail-open");
  });

  if (isOpen) {
    detail.hidden = true;
    detail.innerHTML = "";
    return;
  }

  button.setAttribute("aria-expanded", "true");
  button.classList.add("is-detail-open");
  let tasks = [];
  try {
    tasks = JSON.parse(decodeURIComponent(button.dataset.stepTasks || "%5B%5D"));
  } catch (error) {
    tasks = [];
  }
  detail.hidden = false;
  detail.innerHTML = `
    <div>
      <p class="label">Step ${escapeHtml(button.dataset.stepNumber)}</p>
      <h3>${escapeHtml(button.dataset.stepTitle)}</h3>
      <p>${escapeHtml(button.dataset.stepDescription)}</p>
      ${tasks.length ? `
        <ol class="client-progress-detail-tasks">
          ${tasks.map((task) => `<li>${escapeHtml(task)}</li>`).join("")}
        </ol>
      ` : ""}
      ${button.dataset.stepDone ? `
        <p class="client-progress-done-note"><strong>Done when:</strong> ${escapeHtml(button.dataset.stepDone)}</p>
      ` : ""}
    </div>
    <span class="pill">${escapeHtml(button.dataset.stepStatus)}</span>
  `;
}

function toggleCurrentStageActionPlan(button) {
  const panel = button.closest(".client-progress-panel");
  const plan = panel?.querySelector(".client-current-action-plan");
  if (!plan) return;
  const isOpen = button.getAttribute("aria-expanded") === "true";
  plan.hidden = isOpen;
  button.setAttribute("aria-expanded", String(!isOpen));
  button.textContent = isOpen ? "Show current action plan" : "Hide current action plan";
  state.openCurrentActionPlanKey = isOpen ? "" : button.dataset.currentActionKey || "";
  saveState();
}

async function requestLeaderRun(payload) {
  if (window.location.protocol === "file:") return null;
  try {
    const response = await fetch("api/leader/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify(payload)
    });
    if (!response.ok) return null;
    const result = await response.json();
    return result?.ok ? result : null;
  } catch (error) {
    return null;
  }
}

async function requestLeaderTaskToggle(payload) {
  if (window.location.protocol === "file:") return null;
  try {
    const response = await fetch("api/leader/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify(payload)
    });
    if (!response.ok) return null;
    const result = await response.json();
    return result?.ok ? result : null;
  } catch (error) {
    return null;
  }
}

async function requestLeaderState() {
  if (window.location.protocol === "file:") return null;
  try {
    const response = await fetch("api/leader/state", {
      method: "GET",
      credentials: "same-origin"
    });
    if (!response.ok) return null;
    const result = await response.json();
    return result?.ok ? result : null;
  } catch (error) {
    return null;
  }
}

async function hydrateLeaderState() {
  const serverState = await requestLeaderState();
  if (!serverState) return;
  state.leaderRuns = { ...(state.leaderRuns || {}), ...(serverState.runs || {}) };
  state.leaderTaskCompletions = { ...(state.leaderTaskCompletions || {}), ...(serverState.completions || {}) };
  state.leaderTaskEvidence = { ...(state.leaderTaskEvidence || {}), ...(serverState.evidence || {}) };
  saveState();
  renderAll();
}

async function runLeaderAgent(button) {
  const key = button.dataset.leaderRun;
  const company = button.dataset.leaderCompany || "client";
  const delegatedAgents = String(button.dataset.leaderAgents || "").split("|").filter(Boolean);
  let tasks = [];
  try {
    tasks = JSON.parse(decodeURIComponent(button.dataset.leaderTasks || "%5B%5D"));
  } catch (error) {
    tasks = [];
  }
  if (!key) return;
  button.disabled = true;
  state.leaderRuns = state.leaderRuns || {};
  state.leaderTaskCompletions = state.leaderTaskCompletions || {};
  state.leaderTaskEvidence = state.leaderTaskEvidence || {};
  const serverRun = await requestLeaderRun({
    key,
    company,
    stage: button.dataset.leaderStage || "",
    offer: button.dataset.leaderOffer || "",
    tasks
  });
  state.leaderRuns[key] = {
    ranAt: displayDate(),
    company,
    mode: serverRun?.mode || "local-fallback",
    persisted: serverRun?.persisted || "local",
    assignments: serverRun?.assignments || null
  };
  state.openCurrentActionPlanKey = key;

  const leader = state.agents.find((agent) => agent.name === "Leader");
  if (leader) {
    leader.status = "Running";
    leader.currentTask = `Commanding specialist agents for ${company}`;
    leader.progress = 72;
    leader.lastRun = "Just now";
    leader.outputs = Number(leader.outputs || 0) + 1;
  }

  delegatedAgents.forEach((agentName) => {
    const agent = state.agents.find((row) => row.name === agentName);
    if (!agent) return;
    agent.status = "Queued";
    agent.currentTask = `Command from Leader for ${company}`;
    agent.progress = Math.max(Number(agent.progress || 0), 35);
    agent.nextRun = "After Leader command";
  });

  addAgentLog("Leader", `Leader read the current stage tasks for ${company}, delegated them to specialist agents and opened the relay board${serverRun ? " using the backend runner" : " using local fallback mode"}.`);
  addAgentOutput({
    agent: "Leader",
    company,
    type: "Stage command plan",
    result: `${serverRun?.summary || `Delegated the current stage action plan for ${company} to specialist agents and prepared task tick-off controls.`}`,
    nextAction: "Review each relay note, then mark tasks done once the evidence is good enough.",
    status: "Needs Review"
  });
  saveState();
  renderAll();
}

async function toggleLeaderTask(button) {
  const key = button.dataset.leaderTaskToggle;
  const index = button.dataset.leaderTaskIndex;
  if (!key || index === undefined) return;
  state.leaderTaskCompletions = state.leaderTaskCompletions || {};
  state.leaderTaskCompletions[key] = state.leaderTaskCompletions[key] || {};
  state.leaderTaskEvidence = state.leaderTaskEvidence || {};
  state.leaderTaskEvidence[key] = state.leaderTaskEvidence[key] || {};
  const noteInput = button.closest("article")?.querySelector(`[data-leader-evidence-input="${CSS.escape(key)}"][data-leader-task-index="${CSS.escape(index)}"]`);
  const evidence = noteInput?.value || state.leaderTaskEvidence[key][index] || "";
  const nextValue = !state.leaderTaskCompletions[key][index];
  button.disabled = true;
  const serverResult = await requestLeaderTaskToggle({ key, index, complete: nextValue, evidence });
  state.leaderTaskCompletions[key][index] = typeof serverResult?.complete === "boolean"
    ? serverResult.complete
    : nextValue;
  state.leaderTaskEvidence[key][index] = typeof serverResult?.evidence === "string"
    ? serverResult.evidence
    : evidence;
  state.openCurrentActionPlanKey = key;
  addAgentLog("Leader", `${state.leaderTaskCompletions[key][index] ? "Ticked off" : "Reopened"} a current-stage task after Leader review.`);
  saveState();
  renderAll();
}

async function saveLeaderEvidenceNote(button) {
  const key = button.dataset.leaderEvidenceSave;
  const index = button.dataset.leaderTaskIndex;
  if (!key || index === undefined) return;
  const noteInput = button.closest("article")?.querySelector(`[data-leader-evidence-input="${CSS.escape(key)}"][data-leader-task-index="${CSS.escape(index)}"]`);
  const evidence = noteInput?.value || "";
  state.leaderTaskEvidence = state.leaderTaskEvidence || {};
  state.leaderTaskEvidence[key] = state.leaderTaskEvidence[key] || {};
  state.leaderTaskCompletions = state.leaderTaskCompletions || {};
  state.leaderTaskCompletions[key] = state.leaderTaskCompletions[key] || {};
  button.disabled = true;
  const complete = Boolean(state.leaderTaskCompletions[key][index]);
  const serverResult = await requestLeaderTaskToggle({ key, index, complete, evidence });
  state.leaderTaskEvidence[key][index] = typeof serverResult?.evidence === "string"
    ? serverResult.evidence
    : evidence;
  state.openCurrentActionPlanKey = key;
  addAgentLog("Leader", `Saved a relay evidence note for current-stage task ${Number(index) + 1}.`);
  saveState();
  renderAll();
}

function renderClientAnalysisSheet(targetId, company) {
  const target = document.getElementById(targetId);
  if (!target) return;
  const analysis = (state.clientAnalyses || defaultData.clientAnalyses).find((item) => item.company === company);
  if (!analysis) {
    target.innerHTML = `<p class="metric-note">No client analysis sheet found yet.</p>`;
    return;
  }
  const defaultAnalysis = defaultData.clientAnalyses.find((item) => item.company === company) || {};
  const identityCheck = analysis.identityCheck || defaultAnalysis.identityCheck;
  const logoPreview = identityCheck?.candidate?.logoPreview?.imageUrl
    ? identityCheck.candidate.logoPreview
    : identityResearchDrafts[analysis.company]?.logoPreview;
  const socialScan = identityResearchDrafts[analysis.company]?.socialScan || identityCheck?.candidate?.socialScan;
  const foundationAudit = analysis.foundationAudit || defaultAnalysis.foundationAudit;
  const competitorBenchmark = analysis.competitorBenchmark || defaultAnalysis.competitorBenchmark;
  const auditScore = foundationAudit?.score || 0;
  const benchmarkGap = competitorBenchmark?.competitorAverage
    ? `${Math.max(0, Number(String(competitorBenchmark.competitorAverage).replace(/\D/g, "")) - auditScore)}% gap`
    : "Benchmark ready";

  const sheetRows = [
    { label: "Company", value: analysis.company },
    { label: "Relationship", value: analysis.relationship },
    { label: "Current offer stage", value: analysis.offerStage },
    { label: "Service category", value: analysis.serviceCategory },
    { label: "Area", value: analysis.area },
    { label: "Research status", value: analysis.researchStatus }
  ];

  target.innerHTML = `
    <section class="panel client-analysis-hero">
      <div class="client-hero-layout">
        <div>
          <p class="label">${analysis.status}</p>
          <h2>${analysis.company}</h2>
          <p>${analysis.objective}</p>
        </div>
        <div class="client-hero-stats">
          <article>
            <span>Current phase</span>
            <strong>${analysis.offerStage}</strong>
          </article>
          <article>
            <span>Audit score</span>
            <strong>${auditScore ? `${auditScore}%` : "Ready"}</strong>
          </article>
          <article>
            <span>Paid ads</span>
            <strong>Gated</strong>
          </article>
        </div>
      </div>
    </section>

    ${renderClientProgressTracker(analysis)}

    <section class="panel snapshot-panel">
      <div class="panel-header">
        <div>
          <p class="label">Client sheet</p>
          <h2>Business Snapshot</h2>
          ${renderSectionPreview("The quick context card for who they are, what stage they are in and what still needs confirming.", [
            { value: analysis.relationship, label: "Relationship" },
            { value: analysis.area, label: "Coverage" }
          ])}
        </div>
        <span class="pill">Do not skip discovery</span>
      </div>
      <div class="analysis-sheet-table">
        ${sheetRows.map((row) => `
          <div class="analysis-sheet-row">
            <strong>${row.label}</strong>
            <span>${row.value}</span>
          </div>
        `).join("")}
      </div>
    </section>

    ${renderClientReadinessBoard(analysis, foundationAudit, competitorBenchmark)}

    ${renderClientPlatformStatusBoard(analysis)}

    ${renderOwnerResponseInbox(analysis)}

    ${renderDoneForYouFoundationPlan(analysis, foundationAudit, competitorBenchmark)}

    ${renderFoundationSprintBoard(analysis, foundationAudit, competitorBenchmark)}

    ${renderArchitectReferralPack(analysis, foundationAudit, competitorBenchmark)}

    ${renderLeadTrackingBlueprint(analysis, foundationAudit, competitorBenchmark)}

    ${renderProofAndHelpPanel(analysis, foundationAudit, competitorBenchmark)}

    ${renderStarterDeliveryPrepPanel(analysis, foundationAudit, competitorBenchmark)}

    ${renderStarterDeliveryPackPanel(analysis)}

    ${renderPreAssetWorkbenchPanel(analysis, foundationAudit, competitorBenchmark)}

    ${renderPitchView(analysis, foundationAudit, competitorBenchmark)}

    ${identityCheck ? `
      <section class="panel identity-check-panel premium-section-card">
        <div class="panel-header">
          <div>
            <p class="label">Business identity check</p>
            <h2>Correct Business Detection</h2>
            ${renderSectionPreview("Confirm the exact business identity before using any AI-found public data in the client plan.", [
              { value: identityCheck.humanStatus, label: "Human check" },
              { value: identityCheck.logoStatus, label: "Logo" }
            ])}
          </div>
          <div class="panel-actions">
            <span class="pill">${identityCheck.confidence}</span>
            <button class="small-button approve" data-identity-action="run" data-identity-company="${analysis.company}">Run AI Identity Search</button>
          </div>
        </div>
        <div class="identity-summary-grid">
          <article class="identity-summary-card">
            <p class="label">Human status</p>
            <strong>${identityCheck.humanStatus}</strong>
          </article>
          <article class="identity-summary-card">
            <p class="label">Logo status</p>
            <strong>${identityCheck.logoStatus}</strong>
          </article>
          <article class="identity-summary-card wide">
            <p class="label">Decision rule</p>
            <strong>${identityCheck.decisionRule}</strong>
          </article>
        </div>
        ${identityCheck.candidate ? `
          <div class="identity-candidate-card">
            <div class="card-title-row">
              <div>
                <p class="label">Provided identity</p>
                <h3>Agent-found candidate</h3>
              </div>
              <span class="${statusClass(identityCheck.reviewStatus || identityCheck.candidate.confidence)}">${identityCheck.reviewStatus || identityCheck.candidate.confidence}</span>
            </div>
            ${logoPreview ? `
              <div class="identity-logo-preview">
                <div class="identity-logo-frame ${logoPreview.imageUrl ? "" : "empty"}">
                  ${logoPreview.imageUrl ? `<img src="${logoPreview.imageUrl}" alt="${analysis.company} logo preview" />` : `<span>No logo</span>`}
                </div>
                <div>
                  <p class="label">${logoPreview.label}</p>
                  <strong>Visual confirmation</strong>
                  <span>${logoPreview.note}</span>
                </div>
              </div>
            ` : ""}
            ${socialScan ? `
              <div class="social-scan-card">
                <div>
                  <p class="label">Social platform scan</p>
                  <strong>Existing Accounts Found</strong>
                  <span>${socialScan.summary}</span>
                </div>
                <div class="social-scan-table">
                  <div class="social-scan-row social-scan-head">
                    <strong>Platform</strong>
                    <strong>Result</strong>
                    <strong>Evidence</strong>
                    <strong>Status</strong>
                  </div>
                  ${socialScan.platforms.map((item) => `
                    <div class="social-scan-row">
                      <strong>${item.platform}</strong>
                      <span>${item.url ? `<a href="${item.url}" target="_blank" rel="noreferrer">${item.result}</a>` : item.result}</span>
                      <span>${item.evidence}</span>
                      <span class="status">${item.status}</span>
                    </div>
                  `).join("")}
                </div>
              </div>
            ` : ""}
            <p>${identityCheck.candidate.summary}</p>
            <div class="provided-identity-table">
              <div class="provided-identity-row provided-identity-head">
                <strong>Detail</strong>
                <strong>Value found</strong>
                <strong>Source</strong>
                <strong>Status</strong>
              </div>
              ${identityCheck.candidate.fields.map((field) => `
                <div class="provided-identity-row">
                  <strong>${field.label}</strong>
                  <span>${field.value}</span>
                  <span>${field.source}</span>
                  <span class="status">${field.status}</span>
                </div>
              `).join("")}
            </div>
            <div class="identity-source-list">
              ${identityCheck.candidate.sources.map((source) => `
                <a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>
              `).join("")}
            </div>
            <div class="identity-gap-list">
              <p class="label">Still ask owner</p>
              <ol class="analysis-checklist">
                ${identityCheck.candidate.gaps.map((gap) => `<li>${gap}</li>`).join("")}
              </ol>
            </div>
            <div class="identity-review-actions">
              <button class="small-button approve" data-identity-action="confirm" data-identity-company="${analysis.company}">Confirm Match</button>
              <button class="small-button danger" data-identity-action="deny" data-identity-company="${analysis.company}">Deny Match</button>
            </div>
          </div>
        ` : `
          <div class="identity-empty-state">
            <strong>No agent-provided identity yet.</strong>
            <p>Run the identity search to let the Company Research Agent collect a candidate business identity, sources and missing owner questions.</p>
          </div>
        `}
        <div class="identity-evidence-table">
          <div class="identity-evidence-row identity-evidence-head">
            <strong>Signal</strong>
            <strong>Expected</strong>
            <strong>Found</strong>
            <strong>Status</strong>
          </div>
          ${identityCheck.evidence.map((item) => `
            <div class="identity-evidence-row">
              <strong>${item.signal}</strong>
              <span>${item.expected}</span>
              <span>${item.found}</span>
              <span class="status">${item.status}</span>
            </div>
          `).join("")}
        </div>
        <details class="identity-rules">
          <summary>
            <span>
              <small>Company Research Agent</small>
              <strong>Matching rules before using public data</strong>
            </span>
            <em>${identityCheck.agentRules.length} rules</em>
          </summary>
          <ol class="analysis-checklist">
            ${identityCheck.agentRules.map((rule) => `<li>${rule}</li>`).join("")}
          </ol>
        </details>
      </section>
    ` : ""}

    <section class="panel">
      <div class="panel-header">
        <div>
          <p class="label">ICP</p>
          <h2>Ideal Customer Profile</h2>
          ${renderSectionPreview("A sharper view of who is worth attracting, what they care about and what proof they need before enquiring.", [
            { value: analysis.icp.length, label: "buyer signals" },
            { value: "Local", label: "homeowner market" }
          ])}
        </div>
      </div>
      <div class="analysis-grid">
        ${analysis.icp.map((item, index) => renderTemplateCard(item, index, "icp-template")).join("")}
      </div>
    </section>

    <section class="panel">
      <div class="panel-header">
        <div>
          <p class="label">AI research</p>
          <h2>Business Analysis</h2>
          ${renderSectionPreview("Positioning, growth gaps and the starter foundations work that should happen before any lead test.", [
            { value: analysis.businessAnalysis.length, label: "strategic notes" },
            { value: analysis.offerStage, label: "offer stage" }
          ])}
        </div>
      </div>
      <div class="analysis-grid">
        ${analysis.businessAnalysis.map((item, index) => renderTemplateCard(item, index, "business-template")).join("")}
      </div>
    </section>

    ${foundationAudit ? `
      <section class="panel ai-foundation-audit-panel">
        <div class="panel-header">
          <div>
            <p class="label">AI agent audit</p>
            <h2>Starter Foundations Audit</h2>
            ${renderSectionPreview(foundationAudit.summary, [
              { value: `${foundationAudit.score}%`, label: "current readiness" },
              { value: foundationAudit.rows.length, label: "audit areas" }
            ])}
          </div>
          <div class="panel-actions">
            <span class="pill">${foundationAudit.lastRun}</span>
            ${renderAuditScore(foundationAudit.score)}
          </div>
        </div>
        <p class="audit-summary">${foundationAudit.summary}</p>
        <div class="audit-source-line">
          <strong>Sources used</strong>
          <span>${foundationAudit.sources}</span>
        </div>
        <div class="agent-audit-table">
          <div class="agent-audit-row agent-audit-head">
            <strong>Area</strong>
            <strong>Agent</strong>
            <strong>Finding</strong>
            <strong>Starter action</strong>
            <strong>Status</strong>
          </div>
          ${foundationAudit.rows.map((row) => `
            <div class="agent-audit-row">
              <strong>${row.area}${renderAuditScore(row.score, "mini")}</strong>
              <span>${row.agent}</span>
              <span>${row.finding}</span>
              <span>${row.recommendation}</span>
              <span class="status">${row.status}</span>
            </div>
          `).join("")}
        </div>
        <details class="identity-rules audit-priorities">
          <summary>
            <span>
              <small>Delivery Agent</small>
              <strong>Priority moves while waiting for replies</strong>
            </span>
            <em>${foundationAudit.priorities.length} actions</em>
          </summary>
          <ol class="analysis-checklist">
            ${foundationAudit.priorities.map((item) => `<li>${item}</li>`).join("")}
          </ol>
        </details>
      </section>
    ` : ""}

    ${competitorBenchmark ? `
      <section class="panel competitor-benchmark-panel">
        <div class="panel-header">
          <div>
            <p class="label">Competitor benchmark</p>
            <h2>Local Foundations Comparison</h2>
            ${renderSectionPreview("See how the client’s current foundations compare with stronger local competitors, then turn the gaps into the pitch.", [
              { value: competitorBenchmark.competitorAverage, label: "competitor average" },
              { value: benchmarkGap, label: "to close" }
            ])}
          </div>
          <div class="panel-actions">
            <span class="pill">${competitorBenchmark.status}</span>
          </div>
        </div>
        <p class="audit-summary">${competitorBenchmark.summary}</p>
        ${renderCompetitorVisualComparison(competitorBenchmark)}
        <div class="benchmark-summary-grid">
          <article class="benchmark-score-card">
            <p class="label">Current score</p>
            ${renderAuditScore(competitorBenchmark.currentScore)}
          </article>
          <article class="benchmark-score-card">
            <p class="label">Competitor average</p>
            <strong>${competitorBenchmark.competitorAverage}</strong>
            <span>Add after scanning 3 local competitors.</span>
          </article>
          <article class="benchmark-score-card">
            <p class="label">Best competitor</p>
            <strong>${competitorBenchmark.bestCompetitor}</strong>
            <span>Use the strongest local example as the practical benchmark.</span>
          </article>
          <article class="benchmark-score-card">
            <p class="label">Target</p>
            <strong>${competitorBenchmark.targetScore}</strong>
            <span>Foundation target before pushing paid visibility.</span>
          </article>
        </div>
        ${competitorBenchmark.competitors?.length ? `
          <div class="competitor-card-grid">
            ${competitorBenchmark.competitors.map((competitor) => `
              <article class="competitor-card">
                <div class="card-title-row">
                  <div>
                    <p class="label">${competitor.fit}</p>
                    <h3>${competitor.name}</h3>
                  </div>
                  ${renderAuditScore(competitor.score, "mini")}
                </div>
                <p><strong>Strengths:</strong> ${competitor.strengths}</p>
                <p><strong>Gap to client:</strong> ${competitor.gapToClient}</p>
                <a href="${competitor.source}" target="_blank" rel="noreferrer">Open source</a>
              </article>
            `).join("")}
          </div>
        ` : ""}
        <div class="benchmark-table">
          <div class="benchmark-row benchmark-head">
            <strong>Area</strong>
            <strong>Client now</strong>
            <strong>Competitor check</strong>
            <strong>Pitch use</strong>
          </div>
          ${competitorBenchmark.rows.map((row) => `
            <div class="benchmark-row">
              <strong>${row.area}</strong>
              <span>${row.current}</span>
              <span>${row.competitorCheck}</span>
              <span>${row.pitchUse}</span>
            </div>
          `).join("")}
        </div>
        <details class="identity-rules audit-priorities">
          <summary>
            <span>
              <small>Benchmark Agent</small>
              <strong>How to run this comparison</strong>
            </span>
            <em>${competitorBenchmark.nextSteps.length} steps</em>
          </summary>
          <ol class="analysis-checklist">
            ${competitorBenchmark.nextSteps.map((item) => `<li>${item}</li>`).join("")}
          </ol>
        </details>
      </section>
    ` : ""}

    <section class="panel">
      <div class="panel-header">
        <div>
          <p class="label">Starter offer</p>
          <h2>Foundations Audit Sheet</h2>
          ${renderSectionPreview("The practical starter checklist: fix the visible trust, enquiry and tracking basics before paid visibility.", [
            { value: analysis.foundations.length, label: "foundation areas" },
            { value: "Ads gated", label: "rule" }
          ])}
        </div>
        <span class="pill">Ads stay gated</span>
      </div>
      <div class="foundation-table">
        <div class="foundation-row foundation-head">
          <strong>Area</strong>
          <strong>Current state</strong>
          <strong>Starter action</strong>
          <strong>Status</strong>
        </div>
        ${analysis.foundations.map((item) => `
          <div class="foundation-row">
            <strong>${item.area}</strong>
            <span>${item.currentState}</span>
            <span>${item.starterAction}</span>
            <span class="status">${item.status}</span>
          </div>
        `).join("")}
      </div>
    </section>

    ${renderContentAssetChecklist(analysis)}

    ${renderStarterTimeline(analysis)}

    <div class="two-column client-analysis-columns">
      <section class="panel">
        <div class="panel-header">
          <div>
            <p class="label">Agent outputs</p>
            <h2>What Each AI Agent Creates</h2>
            ${renderSectionPreview("A clear view of which AI agent owns each part of the research, audit and delivery prep.", [
              { value: analysis.agentOutputs.length, label: "agents" },
              { value: "Human review", label: "required" }
            ])}
          </div>
        </div>
        <div class="analysis-list">
          ${analysis.agentOutputs.map((item) => `
            <article class="analysis-card">
              <div class="card-title-row">
                <strong>${item.agent}</strong>
                <span class="mini-stat">Review</span>
              </div>
              <p>${item.output}</p>
              <span>${item.nextAction}</span>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div>
            <p class="label">Content</p>
            <h2>Starter Content Angles</h2>
            ${renderSectionPreview("Useful proof-led angles to film or collect before building campaigns.", [
              { value: analysis.contentAngles.length, label: "angles" },
              { value: "Proof first", label: "creative rule" }
            ])}
          </div>
        </div>
        <ol class="analysis-checklist">
          ${analysis.contentAngles.map((item) => `<li>${item}</li>`).join("")}
        </ol>
      </section>
    </div>

    <div class="two-column client-analysis-columns">
      <section class="panel">
        <div class="panel-header">
          <div>
            <p class="label">Discovery</p>
            <h2>Questions For The Owner</h2>
            ${renderSectionPreview("Only ask the questions that public research cannot answer confidently.", [
              { value: analysis.discoveryQuestions.length, label: "owner gaps" },
              { value: "Short ask", label: "format" }
            ])}
          </div>
        </div>
        <ol class="analysis-checklist">
          ${analysis.discoveryQuestions.map((item) => `<li>${item}</li>`).join("")}
        </ol>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div>
            <p class="label">Next actions</p>
            <h2>Starter Delivery Plan</h2>
            ${renderSectionPreview("The action plan for moving this trial client through starter foundations professionally.", [
              { value: analysis.nextActions.length, label: "moves" },
              { value: "Foundation first", label: "sequence" }
            ])}
          </div>
        </div>
        <ol class="analysis-checklist">
          ${analysis.nextActions.map((item) => `<li>${item}</li>`).join("")}
        </ol>
      </section>
    </div>
  `;
}

function getClientAnalysis(company) {
  state.clientAnalyses = state.clientAnalyses || structuredClone(defaultData.clientAnalyses);
  let analysis = state.clientAnalyses.find((item) => item.company === company);
  if (!analysis) {
    const defaultAnalysis = defaultData.clientAnalyses.find((item) => item.company === company);
    if (!defaultAnalysis) return null;
    analysis = structuredClone(defaultAnalysis);
    state.clientAnalyses.push(analysis);
  }
  const defaultAnalysis = defaultData.clientAnalyses.find((item) => item.company === company) || {};
  analysis.identityCheck = analysis.identityCheck || structuredClone(defaultAnalysis.identityCheck || {});
  return analysis;
}

function runIdentityResearch(company) {
  const analysis = getClientAnalysis(company);
  const draft = identityResearchDrafts[company];
  if (!analysis || !draft) return;

  analysis.identityCheck = {
    ...(analysis.identityCheck || {}),
    confidence: draft.confidence,
    humanStatus: draft.humanStatus,
    logoStatus: draft.logoStatus,
    reviewStatus: "Awaiting Sam review",
    candidate: structuredClone(draft),
    evidence: draft.fields.map((field) => ({
      signal: field.label,
      expected: field.label === "Logo check" ? "Known logo/profile image should match" : "Should match the real business",
      found: field.value,
      status: field.status
    }))
  };

  addAgentOutput({
    agent: "Company Research Agent",
    company,
    type: "Business identity candidate",
    result: draft.summary,
    nextAction: "Sam should confirm or deny the candidate before the agent uses it for deeper research.",
    status: "Needs Review"
  });
  addAgentLog("Company Research Agent", `Found a candidate identity for ${company}; waiting for Sam to confirm or deny it.`);
  saveState();
  renderAll();
  showView(analysis.viewId);
}

function reviewIdentityCandidate(company, verdict) {
  const analysis = getClientAnalysis(company);
  if (!analysis?.identityCheck?.candidate) return;

  const confirmed = verdict === "confirm";
  analysis.identityCheck.reviewStatus = confirmed ? "Confirmed match" : "Denied match";
  analysis.identityCheck.confidence = confirmed ? "Confirmed match" : "Denied - do not use";
  analysis.identityCheck.humanStatus = confirmed ? "Sam confirmed" : "Sam denied";
  analysis.identityCheck.evidence = (analysis.identityCheck.evidence || []).map((item) => ({
    ...item,
    status: confirmed && !String(item.status).toLowerCase().includes("mismatch") ? "Confirmed" : confirmed ? item.status : "Do not use"
  }));

  addAgentLog("Company Research Agent", `${company} identity candidate was ${confirmed ? "confirmed" : "denied"} by Sam.`);
  addAgentOutput({
    agent: "Company Research Agent",
    company,
    type: "Identity review",
    result: confirmed ? "Sam confirmed the candidate identity. Agent can use this business for research." : "Sam denied the candidate identity. Agent must not use this data.",
    nextAction: confirmed ? "Continue with company research, foundation audit and missing-info questions." : "Ask for exact website, logo or social links before continuing.",
    status: confirmed ? "Approved" : "Needs Review"
  });
  saveState();
  renderAll();
  showView(analysis.viewId);
}

function saveClientOwnerResponse(button) {
  const company = button.dataset.ownerResponseSave;
  const analysis = getClientAnalysis(company);
  const panel = button.closest(".owner-response-panel");
  const textarea = panel?.querySelector("[data-owner-response-input]");
  if (!analysis || !textarea) return;

  const raw = textarea.value.trim();
  state.clientOwnerResponses = state.clientOwnerResponses || {};
  if (!raw) {
    delete state.clientOwnerResponses[company];
    saveState();
    renderAll();
    showView(analysis.viewId);
    return;
  }

  state.clientOwnerResponses[company] = {
    raw,
    summary: analyseOwnerResponse(raw, analysis),
    updatedAt: displayDate()
  };

  addAgentOutput({
    agent: "Client Strategy Agent",
    company,
    type: "Owner response summary",
    result: raw ? `Captured owner answers and converted them into starter priorities for ${company}.` : `Created a placeholder owner response summary for ${company}.`,
    nextAction: "Use the summary to update service priorities, proof gaps and the starter delivery plan.",
    status: raw ? "Used" : "Needs Review"
  });
  addAgentLog("Client Strategy Agent", `Saved owner response notes for ${company}.`);
  saveState();
  renderAll();
  showView(analysis.viewId);
}

function renderSpend() {
  document.getElementById("spendList").innerHTML = state.spend
    .map((item) => `
      <article class="spend-card">
        <p>${item.item}</p>
        <strong>${money(item.cost)}</strong>
        <span>${item.limit}</span>
      </article>
    `)
    .join("");
}

function addAgentLog(agent, event) {
  state.agentLogs = state.agentLogs || [];
  state.agentLogs.unshift({
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    agent,
    event
  });
}

function addAgentOutput(output) {
  state.agentOutputs = state.agentOutputs || [];
  state.agentOutputs.unshift({
    createdAt: displayDate(),
    approval: "No",
    ...output
  });
}

function createLocalWebsiteAudit(companyInput, urlInput) {
  const safeUrl = String(urlInput || "").trim();
  if (!safeUrl) return;
  const domain = domainFromUrl(safeUrl);
  const company = String(companyInput || "").trim() || titleFromDomain(domain);
  const service = domain.includes("resort") || domain.includes("lodge") ? "holiday lodge / resort sales" : "local service business";
  const scores = getAuditScores(`${company}-${safeUrl}`);
  const score = averageAuditScore(scores);
  const audit = {
    company,
    url: safeUrl,
    score,
    scores,
    status: "Needs Review",
    summary: `The page has a clear ${service} offer, but could convert more visitors if the CTA, enquiry form and proof journey were tightened.`,
    wins: "Clear product/service positioning, useful visual proof potential and enough information to create a strong trust-led advert.",
    issues: "Main action is not focused enough, enquiry capture may appear too late, visitor types are not separated, and proof/urgency could be closer to the top.",
    improvements: "Use one primary CTA, add a short above-the-fold enquiry form, create a sticky mobile call/viewing button, split buyer intent, and repeat proof near the CTA.",
    outreachAngle: `Compliment ${company}'s offer, mention one conversion idea, then ask if they are trying to increase tracked enquiries from the website.`,
    createdAt: displayDate()
  };

  state.websiteAudits = [audit, ...(state.websiteAudits || []).filter((item) => item.url !== safeUrl)];
  upsertLocalResearch(company, {
    websiteNotes: audit.summary,
    hook: `${company} has a strong visible offer but could likely turn more website visitors into enquiries with a clearer journey.`,
    painPoint: "Website interest may be leaking because the next step is not focused enough.",
    opportunity: "Improve CTA clarity, form position, proof placement and mobile action buttons.",
    angle: audit.outreachAngle,
    status: "Website audit complete"
  });
  addAgentOutput({
    agent: "Website Audit Agent",
    company,
    type: "Website audit",
    result: `${audit.score}/100. ${audit.summary}`,
    nextAction: "Use this as outreach context or call preparation.",
    approval: "No",
    status: "Needs Review"
  });
  addAgentLog("Website Audit Agent", `Created website audit output for ${company}.`);
  saveState();
  renderAll();
  showView("website-audits");
}

function generateLocalSocialAudits() {
  const prospects = state.prospects.slice(0, 5);
  state.socialAudits = prospects.map((lead) => ({
    company: lead.company,
    platform: "Instagram",
    score: Math.max(62, Math.min(86, Number(lead.score || 70) - 10)),
    status: "Needs Review",
    strengths: `${lead.service || "Local service"} businesses usually have strong visual proof potential if project work is shown clearly.`,
    gaps: "Needs a clearer profile CTA, more recent proof, more before/after storytelling and more local homeowner-facing captions.",
    nextAction: "Create 3 Reel ideas: project reveal, problem/solution story and founder/team trust clip."
  }));
  addAgentOutput({
    agent: "Social Audit Agent",
    company: "Prospect batch",
    type: "Social audits",
    result: `Created ${state.socialAudits.length} practice social audit outputs.`,
    nextAction: "Use the gaps to improve DM context and content plans.",
    approval: "No",
    status: "Needs Review"
  });
  addAgentLog("Social Audit Agent", `Generated ${state.socialAudits.length} practice social audits.`);
  saveState();
  renderAll();
  showView("social-audits");
}

function getStarterClientAnalyses() {
  const analyses = state.clientAnalyses || defaultData.clientAnalyses || [];
  return analyses.filter((analysis) => isStarterFoundationClient(analysis.company));
}

function isStarterFoundationClient(company = "") {
  const safeCompany = String(company || "").trim();
  if (!safeCompany) return false;
  const analysis = (state.clientAnalyses || defaultData.clientAnalyses || []).find((item) => item.company === safeCompany);
  if (analysis && /starter foundations/i.test(`${analysis.offerStage || ""} ${analysis.status || ""}`)) return true;
  const client = (state.clients || defaultData.clients || []).find((item) => item.company === safeCompany);
  return /starter foundations/i.test(`${client?.retainer || ""} ${client?.status || ""} ${client?.note || ""}`);
}

function getStarterClientContentIdeas(analysis) {
  if (analysis.company === "First Touch Innovations") {
    return [
      { company: analysis.company, hook: "Planning a bigger renovation in Brighton or Hove?", filming: "Use a calm owner/talking clip, finished-detail shots and any larger-project walkthroughs once proof arrives.", adAngle: "Organic starter content first: position First Touch around lofts, extensions and full refurbs before any paid lead test.", talkingPoints: "Bigger projects, communication, 5-star reviews, local trust and clear next-step conversation." },
      { company: analysis.company, hook: "What homeowners should ask before starting an extension", filming: "Owner explains three useful questions, cut with project/process shots and finished work.", adAngle: "Education-led authority post for homeowners comparing builders.", talkingPoints: "Timeline, changes, hidden cost worries, quote process and reliability." },
      { company: analysis.company, hook: "Why architects need builders they can safely recommend", filming: "Use meeting/process visuals, project proof and review snippets in a polished referral-style Reel.", adAngle: "Architect referral proof content, not paid ads yet.", talkingPoints: "Trust, communication, protecting the architect relationship and larger renovation fit." },
      { company: analysis.company, hook: "From small job to future larger project", filming: "Explain how small profitable jobs can lead to referrals or future extensions/refurbs.", adAngle: "Shows commercial realism while keeping the public message focused on quality.", talkingPoints: "Referral value, homeowner trust, long-term relationships and good-fit work." },
      { company: analysis.company, hook: "What a good renovation enquiry should include", filming: "Direct-to-camera checklist with simple on-screen bullets.", adAngle: "Improves lead quality by teaching homeowners what to send before asking for a quote.", talkingPoints: "Project type, area, timeline, drawings, photos, access and best contact route." },
      { company: analysis.company, hook: "5-star local proof before paid ads", filming: "Use review screenshots or text overlays with finished work and owner context.", adAngle: "Trust-building starter content while proof assets are being organised.", talkingPoints: "Reviews, reliability, Brighton/Hove local proof and no rushed ad spend." }
    ];
  }

  return [
    { company: analysis.company, hook: "M8 Designs is built for proper projects, not handyman jobs", filming: "Owner/talking clip explaining project fit, mixed with website/project visuals once assets arrive.", adAngle: "Fit-filter content that attracts better enquiries and repels small odd jobs.", talkingPoints: "New builds, extensions, full-project delivery, site control and access fit." },
    { company: analysis.company, hook: "From start to finish: what M8 wants to be known for", filming: "Use staged project visuals: early site, work in progress, finish details and final reveal.", adAngle: "Premium positioning around full-project construction.", talkingPoints: "Control, quality, process, standards and project delivery." },
    { company: analysis.company, hook: "What makes a project easier to quote properly?", filming: "Direct-to-camera checklist: plans, scope, access, parking/materials and timeline.", adAngle: "Lead-quality content for homeowners before they enquire.", talkingPoints: "Access, parking, materials, proper scope and realistic conversations." },
    { company: analysis.company, hook: "Extensions and new builds are the main event", filming: "Use strongest extension/new-build proof first, with bathrooms/rendering as supporting finish-quality clips.", adAngle: "Move public attention away from broad trades into higher-value projects.", talkingPoints: "Extensions, new builds, finish quality, proper projects and Brighton/Hove homeowners." },
    { company: analysis.company, hook: "Why M8 prefers control over the whole site", filming: "Explain site control, standards and why subcontractor-style work is less ideal.", adAngle: "Differentiates M8 from general builders and contractors.", talkingPoints: "Methods, quality control, site standards and customer outcome." },
    { company: analysis.company, hook: "Summer rendering and finish-quality proof", filming: "Render/bathroom/detail shots with a short explanation of why finish work shows standards.", adAngle: "Seasonal supporting content while keeping the main offer focused on larger projects.", talkingPoints: "Rendering, bathrooms, finish detail, weather timing and portfolio proof." }
  ];
}

function getStarterClientContentBriefs(analysis) {
  if (analysis.company === "First Touch Innovations") {
    return [
      { company: analysis.company, title: "Bigger renovation projects positioning Reel", hook: "Planning a loft, extension or full refurb around Brighton/Hove?", format: "30-second Reel / profile proof video", scenes: "Owner hook, finished project details, review proof, simple explanation of ideal project fit, WhatsApp/text CTA.", cta: "Message First Touch to discuss the project type, timeline and next step.", source: "Starter Client Content Gate", status: "Needs Review" },
      { company: analysis.company, title: "Architect referral proof brief", hook: "A local build team architects can feel safe recommending.", format: "Referral PDF section / short Reel script", scenes: "Project proof, detailed review snippet, reliability/communication message, referral CTA for architects.", cta: "Architects can contact First Touch if they have a homeowner needing a trusted local contractor.", source: "Starter Client Content Gate", status: "Needs Review" },
      { company: analysis.company, title: "Renovation enquiry quality brief", hook: "What to send before asking for a renovation quote.", format: "Educational carousel or talking-head Reel", scenes: "Project type, area, drawings/photos, timeline, access and preferred contact route.", cta: "Send the project details by phone, text or WhatsApp.", source: "Starter Client Content Gate", status: "Needs Review" }
    ];
  }

  return [
    { company: analysis.company, title: "Full-project delivery positioning Reel", hook: "M8 Designs is for proper projects from start to finish.", format: "30-second Reel / website hero video concept", scenes: "Owner hook, project category proof, finish details, site-control explanation and phone/email CTA.", cta: "Call or email M8 to discuss project scope, access and timeline.", source: "Starter Client Content Gate", status: "Needs Review" },
    { company: analysis.company, title: "Project-fit filter brief", hook: "The kind of project that is right for M8.", format: "Educational carousel / talking-head Reel", scenes: "New builds, extensions, proper access, good scope, avoid handyman/small odd jobs, contact route.", cta: "Send project details through the website, phone or email.", source: "Starter Client Content Gate", status: "Needs Review" },
    { company: analysis.company, title: "Premium proof hierarchy brief", hook: "New builds and extensions first, finish-quality proof second.", format: "Website section / portfolio post", scenes: "New build proof, extension proof, bathroom/rendering finish details and enquiry CTA.", cta: "Use the contact page to discuss a proper project.", source: "Starter Client Content Gate", status: "Needs Review" }
    ];
}

function generateStarterClientContentIdeas() {
  const starterClients = getStarterClientAnalyses();
  const ideas = starterClients.flatMap(getStarterClientContentIdeas);
  state.contentIdeas = [
    ...ideas,
    ...(state.contentIdeas || []).filter((item) => !isStarterFoundationClient(item.company))
  ];
  addAgentOutput({
    agent: "Content Creation Agent",
    company: "Starter clients",
    type: "Content ideas",
    result: `Created ${ideas.length} content idea(s) for ${starterClients.length} starter-foundations client(s).`,
    nextAction: "Use these for organic starter content and proof planning before any paid lead test.",
    approval: "No",
    status: "Needs Review"
  });
  addAgentLog("Content Creation Agent", `Generated ${ideas.length} starter-client content ideas without using the prospect batch.`);
  saveState();
  renderAll();
  showView("content");
}

function generateStarterClientContentBriefs() {
  const starterClients = getStarterClientAnalyses();
  const briefs = starterClients.flatMap(getStarterClientContentBriefs);
  state.contentBriefs = [
    ...briefs,
    ...(state.contentBriefs || []).filter((item) => !isStarterFoundationClient(item.company))
  ];
  addAgentOutput({
    agent: "Content Creation Agent",
    company: "Starter clients",
    type: "Content briefs",
    result: `Created ${briefs.length} content brief(s) for ${starterClients.length} starter-foundations client(s).`,
    nextAction: "Use briefs for client calls, proof planning and organic content. Keep paid ads gated until readiness improves.",
    approval: "No",
    status: "Needs Review"
  });
  addAgentLog("Content Creation Agent", `Generated ${briefs.length} starter-client content briefs and skipped unaccepted prospects.`);
  saveState();
  renderAll();
  showView("content-briefs");
}

function upsertLocalResearch(company, updates) {
  state.companyResearch = state.companyResearch || [];
  const index = state.companyResearch.findIndex((item) => item.company === company);
  const base = {
    company,
    hook: "",
    painPoint: "",
    opportunity: "",
    angle: "",
    websiteNotes: "",
    instagramNotes: "",
    status: "Practice complete"
  };
  if (index === -1) {
    state.companyResearch.unshift({ ...base, ...updates });
  } else {
    state.companyResearch[index] = { ...base, ...state.companyResearch[index], ...updates };
  }
}

function addOrUpdateAgentTask(task) {
  state.agentTasks = state.agentTasks || [];
  const index = state.agentTasks.findIndex((item) => item.task === task.task && item.agent === task.agent);
  if (index === -1) {
    state.agentTasks.unshift(task);
  } else {
    state.agentTasks[index] = { ...state.agentTasks[index], ...task };
  }
}

function runAllAgentsPractice() {
  const practiceProspects = [
    { company: "Brighton Heritage Renovations", area: "Brighton", service: "Period renovations", score: 92, status: "New Prospect", nextAction: "Research and draft soft opener" },
    { company: "Hove Loft & Extension Co", area: "Hove", service: "Loft conversions", score: 88, status: "New Prospect", nextAction: "Research and plan filming angle" }
  ];

  practiceProspects.forEach((lead) => {
    if (!state.prospects.some((item) => item.company === lead.company)) {
      state.prospects.unshift(lead);
    }
  });

  const activeProspects = state.prospects.slice(0, 4);
  activeProspects.forEach((lead) => {
    upsertLocalResearch(lead.company, {
      hook: `Local ${lead.service || "renovation"} company around ${lead.area || "Brighton"} with work homeowners would want to see clearly online.`,
      painPoint: "Likely relies on referrals or scattered online attention rather than a tracked enquiry journey.",
      opportunity: "Use stronger online presence, clearer project proof and simple lead tracking to create better conversations.",
      angle: "Open with a compliment, one Xello context line and a question about where enquiries come from.",
      websiteNotes: "Practice website audit: check CTA clarity, mobile enquiry flow, trust proof, project examples and tracking.",
      instagramNotes: "Practice social audit: look for recent project proof, before/after posts, enquiry prompts and local trust signals.",
      status: "Practice research complete"
    });
  });

  state.contentIdeas = activeProspects.map((lead) => ({
    company: lead.company,
    hook: `From hidden project quality to local homeowner enquiries`,
    filming: `Film a short project walkthrough for ${lead.service || "renovation"} work: exterior/context shot, details, finished result and Sam explaining the homeowner problem.`,
    adAngle: `Local ${lead.area || "Brighton"} homeowners looking for trustworthy ${String(lead.service || "renovation").toLowerCase()} help.`,
    talkingPoints: "Show workmanship, local trust, simple enquiry CTA, and avoid any guaranteed results."
  }));

  state.drafts = refreshedOutreachDrafts();
  state.replies = practiceReplies();
  state.replyResponses = state.replies.map(createLocalReplyResponse);

  state.xelloSocial = [
    {
      platform: "Instagram Reels",
      pillar: "Marketing education",
      hook: "Why renovation companies should track every enquiry source",
      format: "Talking-head Reel with captions and CRM screen recording",
      script: "Open with the problem, show word of mouth vs website vs Instagram, explain why tracking matters before scaling ads.",
      cta: "Follow Xello Media for practical local marketing breakdowns",
      status: "Practice planned"
    },
    {
      platform: "TikTok",
      pillar: "Founder journey",
      hook: "Building a Brighton marketing agency from zero, one local company at a time",
      format: "Behind-the-scenes video",
      script: "Show research, CRM, camera kit and how Sam prepares a 14-day local lead test.",
      cta: "Comment a local business I should audit next",
      status: "Practice planned"
    },
    ...(state.xelloSocial || []).slice(0, 4)
  ];

  state.ceoBrief = [
    { title: "Practice run result", detail: "All core agents completed a safe local dry run: scanner, research, website/social audit, content, outreach, reply triage, Xello social and reporting." },
    { title: "Best next action", detail: "Paste and redeploy the latest Apps Script, then run the live cycle in small batches so API spend stays controlled." },
    { title: "Main risk", detail: "The system should still stay approval-first. No emails, DMs, posts or ads should go out automatically." }
  ];

  state.memory = [
    {
      insight: "Practice run confirmed the strongest workflow is research first, then outreach, then reply triage into a 10-minute call.",
      source: "Agent practice run",
      confidence: 85,
      action: "Keep first touch light and explain starter foundations after a reply."
    },
    ...(state.memory || []).slice(0, 6)
  ];

  [
    ["Prospect Scanner", "Complete", `Practice scanned ${practiceProspects.length} local prospects`, 100],
    ["Company Research Agent", "Complete", `Practice researched ${activeProspects.length} companies`, 100],
    ["Website Audit Agent", "Complete", `Practice audited ${activeProspects.length} website journeys`, 100],
    ["Social Audit Agent", "Complete", `Practice audited ${activeProspects.length} social profiles`, 100],
    ["Content Creation Agent", "Complete", `Practice generated ${state.contentIdeas.length} content idea(s)`, 100],
    ["Outreach Writer", "Waiting Approval", `Practice generated ${state.drafts.length} outreach draft(s)`, 100],
    ["Reply Triage Agent", "Waiting Approval", `Practice drafted ${state.replyResponses.length} response(s)`, 100],
    ["Xello Social Growth Agent", "Complete", "Practice planned Xello social posts", 100],
    ["Reporting Agent", "Complete", "Practice generated CEO brief", 100]
  ].forEach(([name, status, currentTask, progress]) => {
    state.agents = state.agents.map((agent) =>
      agent.name === name
        ? { ...agent, status, currentTask, progress, lastRun: "Just now", outputs: Math.max(Number(agent.outputs || 0), 1) }
        : agent
    );
  });

  [
    { task: "Practice scan local renovation prospects", agent: "Prospect Scanner", related: "Prospects", status: "Complete", priority: "High", progress: 100, cost: 0, approval: "No" },
    { task: "Practice research and audit handoff", agent: "Company Research Agent", related: "Company Research", status: "Complete", priority: "High", progress: 100, cost: 0, approval: "No" },
    { task: "Practice content creation from research", agent: "Content Creation Agent", related: "Content", status: "Complete", priority: "Medium", progress: 100, cost: 0, approval: "No" },
    { task: "Practice outreach approval flow", agent: "Outreach Writer", related: "Outreach Drafts", status: "Waiting Approval", priority: "High", progress: 100, cost: 0, approval: "Yes" },
    { task: "Practice reply triage into 10-minute call", agent: "Reply Triage Agent", related: "Reply Responses", status: "Waiting Approval", priority: "High", progress: 100, cost: 0, approval: "Yes" },
    { task: "Practice CEO reporting", agent: "Reporting Agent", related: "CEO Brief", status: "Complete", priority: "Medium", progress: 100, cost: 0, approval: "No" }
  ].forEach(addOrUpdateAgentTask);

  addAgentLog("System", "Practice ran every AI agent locally without sending messages, posting content or spending API credits.");
  saveState();
  renderAll();
}

function addLocalDemoReplies() {
  const replyProspects = state.prospects.filter((lead) => lead.status !== "Test Prospect").slice(0, 2);
  if (!replyProspects.length) return;

  state.replies = state.replies || [];
  state.calls = state.calls || [];

  replyProspects.forEach((lead, index) => {
    if (state.replies.some((reply) => reply.company === lead.company)) return;
    const isFirst = index === 0;
    state.replies.unshift({
      company: lead.company,
      channel: isFirst ? "Email" : "Instagram DM",
      type: isFirst ? "Warm question" : "Process question",
      summary: isFirst
        ? `Demo reply: ${lead.company} said most of their work comes from referrals, but they would like more consistent website or Instagram enquiries and asked what you had in mind.`
        : `Demo reply: ${lead.company} said Instagram brings in a few people but nothing consistent, and asked what the process would involve.`,
      nextAction: "Explain starter foundations and ask for 10-minute call",
      status: isFirst ? "Warm Reply" : "Follow Up",
      createdAt: "Demo"
    });
  });

  const callLead = replyProspects[0];
  if (callLead && !state.calls.some((call) => call.company === callLead.company)) {
    state.calls.unshift({
      company: callLead.company,
      contact: "Owner",
      date: "Next week",
      type: "10-minute intro call",
      outcome: "Demo booked call",
      nextStep: "Explain the starter foundations offer and decide whether a lead test comes later",
      value: 1500,
      status: "Call Booked"
    });
  }

  state.prospects = state.prospects.map((lead) => {
    if (callLead && lead.company === callLead.company) {
      return { ...lead, status: "Call Booked", nextAction: "Explain starter foundations on 10-minute call" };
    }
    if (replyProspects[1] && lead.company === replyProspects[1].company) {
      return { ...lead, status: "Warm Reply", nextAction: "Send starter foundations outline" };
    }
    return lead;
  });

  addAgentLog("Reply Triage Agent", "Added demo replies and moved prospects into warm/call stages.");
  saveState();
  renderAll();
}

function runLocalDemoJourney() {
  const company = "First Touch Innovations";

  if (!state.prospects.some((lead) => lead.company === company)) {
    state.prospects.unshift({
      company,
      area: "Brighton",
      service: "Home renovation",
      score: 95,
      status: "Call Booked",
      nextAction: "Prepare starter foundations call"
    });
  } else {
    state.prospects = state.prospects.map((lead) =>
      lead.company === company ? { ...lead, status: "Call Booked", nextAction: "Prepare starter foundations call" } : lead
    );
  }

  if (!state.companyResearch.some((row) => row.company === company)) {
    state.companyResearch.unshift({
      company,
      hook: "Local Brighton renovation company with strong before/after content potential.",
      painPoint: "Could turn more local interest into tracked quote enquiries once the online foundations, proof and enquiry route are stronger.",
      opportunity: "Use the starter project to audit socials, Google Business, website basics, tracking and the first content foundation.",
      angle: "Open with a friendly local 10-minute chat, then explain the starter foundations offer.",
      status: "Research complete"
    });
  }

  if (!state.drafts.some((draft) => draft.company === company)) {
    state.drafts.unshift({
      channel: "Email",
      company,
      subject: "Quick starter foundations idea for First Touch Innovations",
      status: "Approved",
      message: "Hi First Touch Innovations team, I’m Sam from Xello Media. I’m based around Brighton/Hove and I’m working with local renovation companies on the basics first: social setup, Google Business, website/enquiry route, tracking and starter content. I had a few ideas for tightening those foundations before any paid ads. Would you be open to a quick 10-minute chat?"
    });
  }

  if (!state.replies.some((reply) => reply.company === company)) {
    state.replies.unshift({
      company,
      channel: "Email",
      type: "Interested",
      summary: "Demo reply: they like the idea and are open to a short call to understand the starter foundations offer.",
      nextAction: "Book 10-minute call and explain the foundation setup process.",
      status: "Warm Reply",
      createdAt: "Demo"
    });
  }

  if (!state.calls.some((call) => call.company === company)) {
    state.calls.unshift({
      company,
      contact: "Owner",
      date: "This week",
      type: "10-minute intro call",
      outcome: "Demo booked",
      nextStep: "Pitch starter foundations and confirm what accounts/assets they already have.",
      value: 1500,
      status: "Call Booked"
    });
  }

  const existingDelivery = state.delivery.find((item) => item.client === company);
  if (existingDelivery) {
    Object.assign(existingDelivery, {
      stage: "Starter foundations",
      health: "Demo",
      adSpend: existingDelivery.adSpend || 100,
      siteVisit: existingDelivery.siteVisit || "To schedule",
      contentStatus: "Foundation plan ready",
      campaignStatus: "Not ready for ads",
      nextReview: "After starter setup",
      nextAction: "Confirm missing socials, Google Business gaps and website basics"
    });
  } else {
    state.delivery.unshift({
      client: company,
      stage: "Starter foundations",
      checklist: "Social/GMB/website basics, content foundation and tracking setup.",
      health: "Demo",
      adSpend: 0,
      leads: 0,
      cpl: 0,
      bookedCalls: 0,
      siteVisit: "Optional",
      contentStatus: "Foundation plan ready",
      campaignStatus: "Not ready for ads",
      nextReview: "After starter setup",
      nextAction: "Confirm missing socials, Google Business gaps and website basics"
    });
  }

  state.testJourney = defaultData.testJourney.map((item) => ({
    ...item,
    status: ["7. 14-day lead test", "8. Retainer follow-up"].includes(item.stage) ? item.status : "Complete"
  }));

  addAgentLog("System", "Ran a full safe demo journey for First Touch Innovations.");
  saveState();
  renderAll();
}

function renderAll() {
  renderMetrics();
  renderOverviewOperatingHub();
  renderHotLeads();
  renderProspects(document.getElementById("prospectSearch")?.value || "");
  renderProfiles();
  renderCompanyResearch();
  renderWebsiteAudits();
  renderSocialAudits();
  renderContentIdeas();
  renderFirstTouchLaunchPack();
  renderContentBriefs();
  renderXelloSocial();
  renderSocialCalendar();
  renderTodayActions();
  renderTasks();
  renderPipeline();
  renderDrafts();
  renderAgents();
  renderAgentTasks();
  renderAgentOutputs();
  renderApprovals();
  renderAgentLogs();
  renderReplies();
  renderReplyResponses();
  renderMasterApprovals();
  renderMemory();
  renderKnowledge();
  renderOutreachVoice();
  renderOutreachFeedback();
  renderPlaybooks();
  renderExperiments();
  renderAdExamples();
  renderBusinessStrategy();
  renderDelivery();
  renderTestJourney();
  renderFinance();
  renderRisks();
  renderCeoBrief();
  renderClients();
  renderClientAnalyses();
  setupClientSectionExpansion();
  renderSpend();
  updateConnectionBar();
  bindStatusButtons();
  applyClickedButtonStates();
}

function updateConnectionBar() {
  const url = getApiUrl();
  if (url && liveMode) {
    setConnectionStatus("Connected to Google Sheets. Dashboard is showing live sheet data when synced.", true);
  } else if (url) {
    setConnectionStatus("Google Sheet URL saved. Click Sync Sheet to load live data.", false);
  } else {
    setConnectionStatus("Using local demo data. Connect your Google Sheet to show live business data.", false);
  }
}

function loadLiveSheetData() {
  const url = getApiUrl();
  if (!url) {
    setConnectionStatus("Paste your Google Sheets Web App URL first, then save it.", false);
    openSheetDialog();
    return;
  }

  const callbackName = `xelloSheetCallback_${Date.now()}`;
  const script = document.createElement("script");
  const separator = url.includes("?") ? "&" : "?";
  script.src = `${url}${separator}callback=${callbackName}`;

  setConnectionStatus("Syncing live Google Sheets data...", false);

  window[callbackName] = (payload) => {
    try {
      applySheetPayload(payload);
      liveMode = true;
      saveState();
      renderAll();
      setConnectionStatus(`Connected to Google Sheets. Last synced ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}.`, true);
    } catch (error) {
      setConnectionStatus(`Sync failed: ${error.message}`, false);
    } finally {
      delete window[callbackName];
      script.remove();
    }
  };

  script.onerror = () => {
    setConnectionStatus("Sync failed. Check the Web App URL and deployment access.", false);
    delete window[callbackName];
    script.remove();
  };

  document.body.appendChild(script);
}

function applySheetPayload(payload) {
  const sheets = payload && payload.sheets;
  if (!sheets) throw new Error("No sheets data returned");

  state.prospects = mapProspects(sheets["Prospects"] || []);
  state.companyResearch = mapCompanyResearch(sheets["Company Research"] || []);
  state.websiteAudits = mapWebsiteAudits(sheets["Website Audits"] || []);
  state.socialAudits = mapSocialAudits(sheets["Social Audits"] || []);
  state.contentIdeas = mapContentIdeas(sheets["Content"] || [], state.companyResearch);
  state.contentBriefs = mapContentBriefs(sheets["Content Briefs"] || []);
  state.xelloSocial = mapXelloSocial(sheets["Xello Social Plan"] || []);
  state.outreachFeedback = mapOutreachFeedback(sheets["Outreach Feedback"] || []);
  state.socialCalendar = state.socialCalendar || defaultData.socialCalendar;
  state.contentPillars = state.contentPillars || defaultData.contentPillars;
  state.drafts = mapDrafts(sheets["Outreach Drafts"] || []);
  state.replies = mapReplies(sheets["Replies"] || []);
  state.replyResponses = mapReplyResponses(sheets["Reply Responses"] || []);
  state.calls = mapCalls(sheets["Calls"] || []);
  state.clients = mapClients(sheets["Clients"] || []);
  state.spend = mapSpend(sheets["Spend"] || []);
  state.agents = mapAgents(sheets["AI Agents"] || []);
  state.agentTasks = mapAgentTasks(sheets["Agent Tasks"] || []);
  state.agentLogs = mapAgentLogs(sheets["CEO Brief"] || [], sheets["Risks"] || []);
  state.agentOutputs = mapAgentOutputs(sheets["Agent Outputs"] || []);
  state.memory = mapMemory(sheets["Agent Memory"] || []);
  state.knowledge = state.knowledge || defaultData.knowledge;
  state.outreachTraining = mapOutreachTraining(sheets["Outreach Training"] || [], sheets["Settings"] || []);
  state.playbooks = state.playbooks || defaultData.playbooks;
  state.experiments = mapExperiments(sheets["Experiments"] || []);
  state.delivery = mapDelivery(sheets["Clients"] || []);
  state.testJourney = state.testJourney || defaultData.testJourney;
  state.demoProof = state.demoProof || defaultData.demoProof;
  state.risks = mapRisks(sheets["Risks"] || []);
  state.finance = mapFinance(sheets["Finances"] || []);
  state.ceoBrief = mapCeoBrief(sheets["CEO Brief"] || []);
}

function mapProspects(rows) {
  return rows.map((row) => ({
    prospectId: row.prospect_id || "",
    company: row.company_name || "Unnamed prospect",
    area: row.area || "",
    service: row.service || "",
    score: Number(row.lead_score || 50),
    status: row.status || "New Prospect",
    nextAction: row.next_action || "",
    website: row.website || "",
    instagram: row.instagram || "",
    email: row.email || "",
    phone: row.phone || "",
    source: row.source || "",
    notes: row.notes || ""
  }));
}

function mapCompanyResearch(rows) {
  if (!rows.length) return defaultData.companyResearch;
  return rows.map((row) => ({
    researchId: row.research_id || "",
    prospectId: row.prospect_id || "",
    company: row.company_name || "Unknown company",
    websiteNotes: row.website_notes || "",
    instagramNotes: row.instagram_notes || "",
    hook: row.personalised_hook || "",
    painPoint: row.pain_point || "",
    opportunity: row.opportunity || "",
    angle: row.outreach_angle || "",
    status: row.status || "Research complete"
  }));
}

function mapWebsiteAudits(rows) {
  if (!rows.length) return state.websiteAudits || defaultData.websiteAudits;
  return rows.slice(-80).reverse().map((row) => {
    const scores = {
      cta: Number(row.cta_score || 0),
      mobile: Number(row.mobile_score || 0),
      trust: Number(row.trust_score || 0),
      form: Number(row.form_score || 0),
      speed: Number(row.speed_score || 0),
      offer: Number(row.offer_score || 0)
    };
    const generatedScores = Object.values(scores).some(Boolean) ? scores : getAuditScores(`${row.company_name || ""}-${row.website || ""}`);
    return {
      auditId: row.audit_id || "",
      prospectId: row.prospect_id || "",
      company: row.company_name || "Website audit",
      url: row.website || "",
      score: Number(row.overall_score || averageAuditScore(generatedScores)),
      scores: generatedScores,
      status: normaliseStatus(row.status),
      summary: row.summary || "",
      wins: row.wins || "",
      issues: row.issues || "",
      improvements: row.improvements || "",
      outreachAngle: row.outreach_angle || "",
      createdAt: row.created_at || ""
    };
  });
}

function mapSocialAudits(rows) {
  if (!rows.length) return state.socialAudits || defaultData.socialAudits;
  return rows.slice(-80).reverse().map((row) => ({
    auditId: row.social_audit_id || "",
    prospectId: row.prospect_id || "",
    company: row.company_name || "Social audit",
    platform: row.platform || "Instagram",
    score: Number(row.score || 70),
    strengths: row.strengths || "",
    gaps: row.gaps || "",
    nextAction: row.next_action || "",
    status: normaliseStatus(row.status),
    createdAt: row.created_at || ""
  }));
}

function mapContentBriefs(rows) {
  if (!rows.length) return state.contentBriefs || defaultData.contentBriefs;
  return rows.slice(-80).reverse().map((row) => ({
    briefId: row.brief_id || "",
    prospectId: row.prospect_id || "",
    company: row.company_name || "Content brief",
    title: row.title || "Untitled brief",
    hook: row.hook || "",
    format: row.format || "",
    scenes: row.scenes || "",
    cta: row.cta || "",
    source: row.source || "Content Creation Agent",
    status: normaliseStatus(row.status),
    createdAt: row.created_at || ""
  }));
}

function mapAgentOutputs(rows) {
  if (!rows.length) return state.agentOutputs || defaultData.agentOutputs;
  return rows.slice(-80).reverse().map((row) => ({
    outputId: row.output_id || "",
    agent: row.agent_name || "AI Agent",
    company: row.company_name || "System",
    type: row.output_type || "Output",
    result: row.result || "",
    nextAction: row.next_action || "",
    approval: row.approval_required || "No",
    status: normaliseStatus(row.status),
    createdAt: row.created_at || ""
  }));
}

function mapContentIdeas(rows, researchRows = []) {
  if (rows.length) {
    return rows.map((row) => ({
      company: row.company_name || "Content item",
      hook: row.hook || row.title || "Content hook needed",
      filming: row.notes || row.caption || "Film a clear before/after or project walkthrough.",
      adAngle: row.platform ? `${row.platform} content idea` : "Meta ad test angle",
      talkingPoints: row.caption || row.performance || "Local proof, quality, process and clear enquiry CTA."
    }));
  }

  const researchIdeas = (researchRows || []).slice(0, 8).map((item) => ({
    company: item.company,
    hook: item.hook || `Show what makes ${item.company} stand out locally.`,
    filming: buildFilmingIdea(item),
    adAngle: item.angle || "Use a local homeowner problem/solution angle.",
    talkingPoints: [item.painPoint, item.opportunity].filter(Boolean).join(" ") || "Trust, local expertise, project quality and a simple quote CTA."
  }));

  return researchIdeas.length ? researchIdeas : defaultData.contentIdeas;
}

function buildFilmingIdea(item) {
  const service = String(item.angle || item.opportunity || "").toLowerCase();
  if (service.includes("loft")) return "Drone exterior, stairs reveal, natural light shots, storage/space transformation and owner voiceover.";
  if (service.includes("extension")) return "Drone exterior, before/after walkthrough, structure-to-finish shots and a simple homeowner problem/solution story.";
  if (service.includes("kitchen")) return "Close-ups of finishes, cabinet details, worktop reveal, family-use angle and short owner explanation.";
  if (service.includes("roof")) return "Drone roof inspection style, problem area, repair process, safety/trust angle and clear call-to-action.";
  return "Project walkthrough, team at work, finished details, local trust proof and a short direct-to-camera explanation.";
}

function mapXelloSocial(rows) {
  if (!rows.length) return defaultData.xelloSocial;
  return rows.map((row) => ({
    platform: row.platform || "Instagram Reels",
    pillar: row.content_pillar || row.pillar || "Marketing education",
    hook: row.hook || row.title || "Social content idea",
    format: row.format || "Short-form video",
    script: row.script || row.caption || "",
    cta: row.cta || "Follow Xello Media for local marketing ideas",
    status: row.status || "Planned"
  }));
}

function mapDrafts(rows) {
  return rows.map((row) => ({
    draftId: row.draft_id || "",
    prospectId: row.prospect_id || "",
    channel: row.channel || "Email",
    company: row.company_name || "Unknown company",
    subject: row.subject || "No subject",
    status: row.status || "Needs review",
    message: row.message || row.follow_up || ""
  }));
}

function mapOutreachFeedback(rows) {
  if (!rows.length) return state.outreachFeedback || defaultData.outreachFeedback;
  return rows.slice(-40).reverse().map((row) => ({
    feedbackId: row.feedback_id || "",
    draftId: row.draft_id || "",
    company: row.company_name || "Outreach draft",
    channel: row.channel || "Draft",
    feedback: row.feedback || "Feedback",
    lesson: row.lesson || row.notes || "",
    createdAt: row.created_at || ""
  }));
}

function mapReplies(rows) {
  if (!rows.length) return defaultData.replies;
  return rows.map((row) => ({
    replyId: row.reply_id || "",
    prospectId: row.prospect_id || "",
    company: row.company_name || "Unknown company",
    channel: row.channel || "Email",
    type: row.reply_type || "Reply",
    summary: row.summary || "",
    nextAction: row.next_action || "",
    status: row.status || "Logged",
    createdAt: row.created_at || ""
  }));
}

function mapReplyResponses(rows) {
  if (!rows.length) return state.replyResponses || defaultData.replyResponses;
  return rows.slice(-40).reverse().map((row) => ({
    responseId: row.response_id || "",
    replyId: row.reply_id || "",
    prospectId: row.prospect_id || "",
    company: row.company_name || "Unknown company",
    channel: row.channel || "Email",
    type: row.reply_type || "Suggested response",
    status: row.status || "Needs review",
    message: row.response_message || "",
    nextAction: row.call_cta || "Ask for 10-minute call",
    createdAt: row.created_at || ""
  }));
}

function mapCalls(rows) {
  if (!rows.length) return defaultData.calls;
  return rows.map((row) => ({
    callId: row.call_id || "",
    prospectId: row.prospect_id || "",
    company: row.company_name || "Unknown company",
    contact: row.contact_name || "Contact",
    date: row.call_date || "",
    type: row.call_type || "Call",
    outcome: row.outcome || "",
    nextStep: row.next_step || "",
    value: Number(row.estimated_value || 0),
    status: row.status || "Logged",
    createdAt: row.created_at || ""
  }));
}

function mapClients(rows) {
  if (!rows.length) return defaultData.clients;
  return rows.map((row) => ({
    company: row.company_name || "Unnamed client",
    retainer: row.monthly_retainer ? `£${Number(row.monthly_retainer).toLocaleString()}/mo` : "No retainer set",
    status: row.status || "Tracked",
    note: row.notes || `Meta: ${row.meta_access || "unknown"} · Website: ${row.website_access || "unknown"}`
  }));
}

function mapSpend(rows) {
  if (!rows.length) return defaultData.spend;
  return rows.map((row) => ({
    item: `${row.provider || "Tool"} - ${row.action || "usage"}`,
    cost: Number(row.cost_gbp || 0),
    limit: row.notes || row.model_or_api || ""
  }));
}

function mapAgents(rows) {
  if (!rows.length) return defaultData.agents;
  const mapped = rows.map((row) => ({
    name: row.agent_name || "Unnamed Agent",
    purpose: row.purpose || "",
    status: row.status || "Idle",
    currentTask: row.current_task || "",
    progress: Number(row.progress || 0),
    lastRun: row.last_run || "",
    nextRun: row.next_run || "",
    cost: Number(row.cost_gbp || 0),
    outputs: Number(row.outputs || 0)
  }));
  const existingNames = new Set(mapped.map((agent) => agent.name));
  defaultData.agents.forEach((agent) => {
    if (!existingNames.has(agent.name)) mapped.push(agent);
  });
  return mapped;
}

function mapAgentTasks(rows) {
  if (!rows.length) return defaultData.agentTasks;
  return rows.map((row) => ({
    taskId: row.task_id || "",
    task: row.task || "Untitled task",
    agent: row.agent_name || "Unknown agent",
    related: row.related_sheet || "",
    status: row.status || "Queued",
    priority: row.priority || "Medium",
    progress: Number(row.progress || 0),
    cost: Number(row.cost_gbp || 0),
    approval: row.approval_required || "No"
  }));
}

function mapMemory(rows) {
  if (!rows.length) return defaultData.memory;
  return rows.map((row) => ({
    insight: row.insight || "",
    source: row.source || "",
    confidence: Number(row.confidence || 50),
    action: row.recommended_action || ""
  }));
}

function mapOutreachTraining(rows, settingsRows = []) {
  if (rows.length) {
    return rows.map((row) => ({
      rule: row.rule || "Rule",
      detail: row.detail || "",
      owner: row.owner || "Xello"
    }));
  }
  const settings = settingsRows.map((row) => ({
    rule: row.key || "Setting",
    detail: row.value || row.notes || "",
    owner: "Settings"
  }));
  return settings.length ? settings : defaultData.outreachTraining;
}

function mapExperiments(rows) {
  if (!rows.length) return defaultData.experiments;
  return rows.map((row) => ({
    name: row.name || "Untitled experiment",
    hypothesis: row.hypothesis || "",
    status: row.status || "Planned",
    result: row.result || "No result yet",
    learning: row.learning || ""
  }));
}

function mapDelivery(rows) {
  if (!rows.length) return defaultData.delivery;
  return rows.map((row) => ({
    client: row.company_name || "Unnamed client",
    stage: row.status || "Client",
    checklist: `Meta: ${row.meta_access || "not set"}, Website: ${row.website_access || "not set"}, Tracking: ${row.lead_tracking || "not set"}, Report: ${row.weekly_report || "not set"}`,
    health: row.status || "Tracked",
    adSpend: Number(row.ad_spend || row.ad_budget || 0),
    leads: Number(row.leads || row.leads_generated || 0),
    cpl: Number(row.cpl || row.cost_per_lead || 0),
    bookedCalls: Number(row.booked_calls || row.calls_booked || 0),
    siteVisit: row.site_visit || row.site_visit_date || "Not set",
    contentStatus: row.content_status || row.content_filmed || "Not set",
    campaignStatus: row.campaign_status || row.meta_status || "Not set",
    nextReview: row.next_review || row.review_date || "Not set",
    nextAction: row.next_action || row.notes || "Add next action"
  }));
}

function mapRisks(rows) {
  if (!rows.length) return defaultData.risks;
  return rows.map((row) => ({
    issue: row.issue || "",
    severity: row.severity || "Medium",
    fix: row.fix || ""
  }));
}

function mapFinance(rows) {
  if (!rows.length) return defaultData.finance;
  return rows.slice(0, 8).map((row) => ({
    metric: row.type || row.description || "Finance item",
    value: row.amount_gbp ? `£${Number(row.amount_gbp).toLocaleString()}` : row.status || "",
    note: row.notes || row.company_name || ""
  }));
}

function mapCeoBrief(rows) {
  if (!rows.length) return defaultData.ceoBrief;
  return rows.slice(-6).map((row) => ({
    title: row.section || "Brief",
    detail: row.summary || row.recommended_action || ""
  }));
}

function mapAgentLogs(ceoRows, riskRows) {
  const ceoLogs = ceoRows.slice(-3).map((row) => ({
    time: row.date || "",
    agent: "Reporting Agent",
    event: `${row.section || "Brief"}: ${row.summary || ""}`
  }));
  const riskLogs = riskRows.slice(-3).map((row) => ({
    time: row.updated_at || row.created_at || "",
    agent: "Risk Monitor",
    event: `${row.severity || "Risk"}: ${row.issue || ""}`
  }));
  return [...ceoLogs, ...riskLogs].length ? [...ceoLogs, ...riskLogs] : defaultData.agentLogs;
}

function showView(viewId) {
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === viewId));
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  const activeButton = document.querySelector(`.nav-item[data-view="${viewId}"]`);
  activeButton?.closest("details")?.setAttribute("open", "");
}

document.addEventListener(
  "click",
  (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.analysisToggle) toggleClientAnalysisSection(button);
    if (button.dataset.progressStepToggle) toggleProgressStepDescription(button);
    if (button.dataset.currentActionToggle) toggleCurrentStageActionPlan(button);
    if (button.dataset.leaderRun) runLeaderAgent(button);
    if (button.dataset.leaderTaskToggle) toggleLeaderTask(button);
    if (button.dataset.leaderEvidenceSave) saveLeaderEvidenceNote(button);
    if (button.dataset.identityAction === "run") runIdentityResearch(button.dataset.identityCompany);
    if (button.dataset.identityAction === "confirm" || button.dataset.identityAction === "deny") {
      reviewIdentityCandidate(button.dataset.identityCompany, button.dataset.identityAction);
    }
    if (button.dataset.ownerResponseSave) saveClientOwnerResponse(button);
    if (button.dataset.viewJump) showView(button.dataset.viewJump);
    markButtonClicked(button);
  },
  true
);

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    showView(button.dataset.view);
  });
});

document.querySelectorAll("[data-view-jump]").forEach((button) => {
  button.addEventListener("click", () => {
    showView(button.dataset.viewJump);
  });
});

document.getElementById("prospectSearch").addEventListener("input", (event) => {
  renderProspects(event.target.value);
});

document.getElementById("websiteAuditForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.target);
  createLocalWebsiteAudit(form.get("company"), form.get("url"));
  event.target.reset();
});

document.getElementById("generateSocialAuditsLocalBtn").addEventListener("click", generateLocalSocialAudits);

document.getElementById("generateContentBriefsBtn").addEventListener("click", generateStarterClientContentBriefs);

const dialog = document.getElementById("leadDialog");
document.getElementById("addLeadBtn").addEventListener("click", () => dialog.showModal());
document.getElementById("closeDialog").addEventListener("click", () => dialog.close());

const sheetDialog = document.getElementById("sheetDialog");
const sheetForm = document.getElementById("sheetForm");
const sheetUrlInput = document.getElementById("sheetUrlInput");

function openSheetDialog() {
  sheetUrlInput.value = getApiUrl();
  sheetDialog.showModal();
  setTimeout(() => sheetUrlInput.focus(), 50);
}

document.getElementById("leadForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.target);
  state.prospects.unshift({
    company: form.get("company"),
    area: form.get("area"),
    service: form.get("service"),
    score: Number(form.get("score")),
    status: form.get("status"),
    nextAction: form.get("nextAction")
  });
  saveState();
  event.target.reset();
  dialog.close();
  renderAll();
});

document.getElementById("exportBtn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "xello-crm-data.json";
  link.click();
  URL.revokeObjectURL(url);
});

document.getElementById("connectSheetBtn").addEventListener("click", () => {
  openSheetDialog();
});

document.getElementById("closeSheetDialog").addEventListener("click", () => {
  sheetDialog.close();
});

document.getElementById("closeAgentDialog").addEventListener("click", () => {
  document.getElementById("agentDialog").close();
});

sheetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(sheetForm);
  const entered = String(form.get("sheetUrl") || "").trim();
  if (!entered) return;
  saveApiUrl(entered);
  sheetDialog.close();
  updateConnectionBar();
});

document.getElementById("syncBtn").addEventListener("click", loadLiveSheetData);

document.getElementById("todaySyncBtn").addEventListener("click", loadLiveSheetData);

document.getElementById("createTasksBtn").addEventListener("click", () => {
  callSheetAction("createDraftTasks", {}, "Creating outreach tasks for new prospects...");
});

document.getElementById("refreshOutreachExamplesBtn").addEventListener("click", refreshLocalOutreachExamples);

document.getElementById("generateDraftsBtn").addEventListener("click", () => {
  callSheetAction("generateDrafts", {}, "Generating approved outreach drafts...");
});

document.getElementById("demoRepliesBtn").addEventListener("click", () => {
  addLocalDemoReplies();
  callSheetAction("addDemoReplies", {}, "Adding demo replies and call data...");
});

document.getElementById("practiceReplyFlowBtn").addEventListener("click", runPracticeReplyFlow);

document.getElementById("triageRepliesBtn").addEventListener("click", () => {
  triageLocalReplies();
  callSheetAction("triageReplies", {}, "Reply Triage Agent is drafting suggested responses...");
});

document.getElementById("scanProspectsBtn").addEventListener("click", () => {
  callSheetAction("scanProspects", {}, "Scanning Google Places for new local prospects...");
});

document.getElementById("researchProspectsBtn").addEventListener("click", () => {
  callSheetAction("researchProspects", {}, "Researching prospects for more personal outreach...");
});

document.getElementById("auditWebsitesBtn").addEventListener("click", () => {
  callSheetAction("auditWebsites", {}, "Website Audit Agent is checking prospect websites...");
});

document.getElementById("auditSocialsBtn").addEventListener("click", () => {
  callSheetAction("auditSocials", {}, "Social Audit Agent is creating social profile notes...");
});

document.getElementById("todayResearchBtn").addEventListener("click", () => {
  callSheetAction("researchProspects", {}, "Researching prospects for more personal outreach...");
});

document.getElementById("researchProspectsAgentBtn").addEventListener("click", () => {
  callSheetAction("researchProspects", {}, "Researching prospects for more personal outreach...");
});

document.getElementById("auditWebsitesAgentBtn").addEventListener("click", () => {
  callSheetAction("auditWebsites", {}, "Website Audit Agent is checking prospect websites...");
});

document.getElementById("auditSocialsAgentBtn").addEventListener("click", () => {
  callSheetAction("auditSocials", {}, "Social Audit Agent is creating social profile notes...");
});

document.getElementById("generateContentAgentBtn").addEventListener("click", () => {
  generateStarterClientContentIdeas();
});

document.getElementById("generateContentIdeasBtn").addEventListener("click", () => {
  generateStarterClientContentIdeas();
});

document.getElementById("generateSocialPlanBtn").addEventListener("click", () => {
  callSheetAction("generateXelloSocialPlan", {}, "Generating Xello Instagram and TikTok content plan...");
});

document.getElementById("todayDraftBtn").addEventListener("click", () => {
  callSheetAction("generateDrafts", {}, "Generating approved outreach drafts...");
});

document.getElementById("todaySocialBtn").addEventListener("click", () => {
  callSheetAction("generateXelloSocialPlan", {}, "Generating Xello Instagram and TikTok content plan...");
});

document.getElementById("runDemoJourneyBtn").addEventListener("click", runLocalDemoJourney);

document.getElementById("runDailyCycleBtn").addEventListener("click", () => {
  callSheetAction("runDailyCycle", {}, "Running the daily AI agent cycle...");
});

document.getElementById("practiceAllAgentsBtn").addEventListener("click", runAllAgentsPractice);

document.getElementById("generateCeoBriefBtn").addEventListener("click", () => {
  callSheetAction("generateCeoBrief", {}, "Reporting Agent is generating the CEO brief...");
});

document.getElementById("installAutomationBtn").addEventListener("click", () => {
  callSheetAction("installAutomation", {}, "Installing daily automation trigger...");
});

document.getElementById("removeAutomationBtn").addEventListener("click", () => {
  callSheetAction("removeAutomation", {}, "Removing daily automation trigger...");
});

document.getElementById("simulateAgentRun").addEventListener("click", () => {
  state.agents = state.agents.map((agent) => {
    if (["Running", "Queued"].includes(agent.status)) {
      const progress = Math.min(100, agent.progress + 12);
      return { ...agent, progress, status: progress >= 100 ? "Complete" : "Running" };
    }
    return agent;
  });
  state.agentTasks = state.agentTasks.map((task) => {
    if (["Running", "Queued"].includes(task.status)) {
      const progress = Math.min(100, task.progress + 12);
      return { ...task, progress, status: progress >= 100 ? "Complete" : "Running" };
    }
    return task;
  });
  addAgentLog("System", "Simulated agent progress update across active tasks.");
  saveState();
  renderAll();
});

renderAll();
if (getApiUrl()) updateConnectionBar();
hydrateLeaderState();
