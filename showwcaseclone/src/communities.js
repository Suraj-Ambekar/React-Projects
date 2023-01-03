const communites = [
    {
        id: 1,
        src: "https://profile-assets.showwcase.com/137x/11145/1637849670322-100.jpg?type=webp",
        alt: "100 days of code",
        name: "100 days of code"
    },
    {
        id: 2,
        src: "https://profile-assets.showwcase.com/137x/4187/1627374983886-showwcase-blogging.png?type=webp",
        alt: "Blogging",
        name: "Blogging"
    },
    {
        id: 3,
        src: "https://profile-assets.showwcase.com/137x/14445/1642318056445-tree_0.webp?type=webp",
        alt: "Data Structures and Algorithms",
        name: "Data Structures and Algorithms"
    },
    {
        id: 4,
        src: "https://profile-assets.showwcase.com/137x/7/1623038303211-Dev.jpg?type=webp",
        alt: "Dev resources",
        name: "Dev resources"
    },
    {
        id: 5,
        src: "https://profile-assets.showwcase.com/137x/5725/1629116985813-GitHub-Mark.png?type=webp",
        alt: "GitHub",
        name: "GitHub"
    },
    {
        id: 6,
        src: "https://profile-assets.showwcase.com/137x/4778/1640675907523-fd.png?type=webp",
        alt: "Hackathon & Opportunity",
        name: "Hackathon & Opportunity"
    },
    {
        id: 7,
        src: "https://profile-assets.showwcase.com/137x/7/1622778978025-Introductions.jpg?type=webp",
        alt: "Introductions",
        name: "Introductions"
    },
    {
        id: 8,
        src: "https://profile-assets.showwcase.com/137x/5393/1628622688237-41BE5801-5A3B-4C8A-832B-E5E036387887.png?type=webp",
        alt: "Learn Javascript 💛",
        name: "Learn Javascript 💛"
    },
    {
        id: 9,
        src: "https://profile-assets.showwcase.com/137x/49311/1672060212009-1102037.jpg?type=webp",
        alt: "Let's Connect Together !",
        name: "Let's Connect Together !"
    },
    {
        id: 10,
        src: "https://profile-assets.showwcase.com/137x/5393/1628612692170-ecology-globe-icon.png?type=webp",
        alt: "Open-Source 🤲",
        name: "Open-Source 🤲"
    },
    {
        id: 11,
        src: "https://profile-assets.showwcase.com/137x/4487/1631175998964-working_home_teleworking_jobs_coronavirus_icon_142126.png?type=webp",
        alt: "Remote Jobs",
        name: "Remote Jobs"
    },
    {
        id: 12,
        src: "https://profile-assets.showwcase.com/137x/7/1658136999138-Logo3x.jpg?type=webp",
        alt: "Showwcase Announcements",
        name: "Showwcase Announcements"
    },
    {
        id: 13,
        src: "https://profile-assets.showwcase.com/137x/5/1632805074712-Logo3x.jpg?type=webp",
        alt: "Showwcase Tips",
        name: "Showwcase Tips"
    },
    {
        id: 14,
        src: "https://profile-assets.showwcase.com/137x/7/1623041035789-Support.jpg?type=webp",
        alt: "Support",
        name: "Support"
    },
    {
        id: 15,
        src: "https://profile-assets.showwcase.com/137x/3858/1645550240106-nextjs.png?type=webp",
        alt: "Next.js",
        name: "Next.js"
    },
    {
        id: 16,
        src: "https://profile-assets.showwcase.com/137x/7934/1633353961775-flutter5786.jpg?type=webp",
        alt: "Flutter Community",
        name: "Flutter Community"
    },
    {
        id: 17,
        src: "https://profile-assets.showwcase.com/137x/4487/1630999122758-css_filetype_icon_150843.png?type=webp",
        alt: "HTML & CSS",
        name: "HTML & CSS"
    },
    {
        id: 18,
        src: "https://profile-assets.showwcase.com/137x/4700/1627226772601-Javascript.jpg?type=webp",
        alt: "Javascript",
        name: "Javascript"
    },
    {
        id: 19,
        src: "https://profile-assets.showwcase.com/137x/4487/1630992315972-javascript.png?type=webp",
        alt: "JavaScript For Beginners",
        name: "JavaScript For Beginners"
    },
    {
        id: 20,
        src: "https://profile-assets.showwcase.com/137x/3858/1645550367647-919832.png?type=webp",
        alt: "Typescript",
        name: "Typescript"
    },
    {
        id: 21,
        src: "https://profile-assets.showwcase.com/137x/7/1622782687769-download%20(21).jpeg?type=webp",
        alt: "India",
        name: "India"
    },
    {
        id: 22,
        src: "https://profile-assets.showwcase.com/137x/7/1622780290425-download%20(20).jpeg?type=webp",
        alt: "Indonesia",
        name: "Indonesia"
    },
    {
        id: 23,
        src: "https://profile-assets.showwcase.com/137x/7094/1642001800562-dev-work-life.png?type=webp",
        alt: "Dev Work Life",
        name: "Dev Work Life"
    },
    {
        id: 24,
        src: "https://profile-assets.showwcase.com/137x/4487/1631717747464-dev.png?type=webp",
        alt: "Developer Stories",
        name: "Developer Stories"
    },
    {
        id: 25,
        src: "https://profile-assets.showwcase.com/137x/4487/1631718047319-freelancing.png?type=webp",
        alt: "Freelancing",
        name: "Freelancing"
    },
    {
        id: 26,
        src: "https://profile-assets.showwcase.com/137x/8888/1640707738771-hackathonspng.png?type=webp",
        alt: "Hackathons",
        name: "Hackathons"
    },
    {
        id: 27,
        src: "https://profile-assets.showwcase.com/137x/13654/1638809691495-intern.png?type=webp",
        alt: "Internships",
        name: "Internships"
    },
    {
        id: 28,
        src: "https://profile-assets.showwcase.com/137x/7/1669014038277-coding%2520interview%2520preparation.jpeg?type=webp",
        alt: "Interview Preparation",
        name: "Interview Preparation"
    },
    {
        id: 29,
        src: "https://profile-assets.showwcase.com/137x/7094/1642615560113-portfolio-sized.png?type=webp",
        alt: "Portfolios",
        name: "Portfolios"
    },
    {
        id: 30,
        src: "https://profile-assets.showwcase.com/137x/4007/1644851815603-buildinpublic.jpg?type=webp",
        alt: "Build in public",
        name: "Build in public"
    },
    {
        id: 31,
        src: "https://profile-assets.showwcase.com/137x/26518/1655813854284-Git-Icon-1788C.png?type=webp",
        alt: "Git",
        name: "Git"
    },

]

export default communites