import React from "react";
import NewsItem from "./NewsItem";

const News = () => {
  const articles = [
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Naomi Schanen",
      title:
        "Philippines evacuates thousands as Mayon volcano spews lava - The Washington Post",
      description:
        "Mount Mayon in the Philippines’ Albay province is spouting lava and sulfuric gas. Authorities told tens of thousands of people to prepare to evacuate.",
      url: "https://www.washingtonpost.com/world/2023/06/12/philippines-mount-mayon-volcano-evacuation/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/06-12-2023/t_520c63c6851b4cd48ed87485fdd5d3d4_name_VIXDDNN2EYRBE5F3POKNHUXEIM.jpg&w=1440",
      publishedAt: "2023-06-12T14:08:50Z",
      content:
        "Comment on this story\r\nComment\r\nThe most active volcano in the Philippines, Mount Mayon, is spewing lava and sulfuric gas, raising fears of an explosion and prompting thousands of residents to flee.\r… [+1441 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: ", USA TODAY",
      title:
        "Colombian children found after being lost for 40 days in Amazon jungle - USA TODAY",
      description:
        "Four Indigenous children who survived a plane crash that killed three adults and then wandered on their own in the jungle for 40 days were found.",
      url: "https://www.usatoday.com/story/news/world/2023/06/10/missing-colombian-children-found-40-days-jungle/70308986007/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2023/06/10/USAT/74359284-101f-447f-8cf1-eb107491197f-AP_Colombia_Plane_Crash_Children.jpg?auto=webp&crop=883,497,x0,y82&format=pjpg&width=1200",
      publishedAt: "2023-06-12T13:34:38Z",
      content:
        "After 40 days of being lost in the Amazon jungle, four Indigenous children were found alive by Colombian soldiers after the children, one as young as 11 months old, survived a plane crash that killed… [+6041 chars]",
    },
    {
      source: {
        id: "ign",
        name: "IGN",
      },
      author: "Ryan Dinsdale",
      title:
        "Cyberpunk 2077 Adds a Key Part of the Edgerunners Anime With Its Phantom Liberty Expansion - IGN",
      description:
        "The Cyberpunk 2077 Phantom Liberty expansion adds the cyberpsychosis effect seen in the Edgerunners Anime.",
      url: "https://www.ign.com/articles/cyberpunk-2077-adds-a-key-part-of-the-edgerunners-anime-with-its-phantom-liberty-expansion",
      urlToImage:
        "https://assets-prd.ignimgs.com/2022/08/30/cyberpunkedgerunnersofficialredbandtrailer-ign-blogroll1-1661888029335.jpg?width=1280",
      publishedAt: "2023-06-12T13:30:19Z",
      content:
        "CD Projekt Red has added a key part of the Edgerunners anime to Cyberpunk 2077 with the Phantom Liberty update.\r\nAs reported by VGC, an overhaul to the capacity system forces players to consider the … [+1216 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Kif Leswing",
      title:
        "The 15-inch MacBook Air offers superb battery life and portability at an aggressive price - CNBC",
      description:
        "It's probably the best laptop for most people if you like the MacOS operating system and plan to use it for everyday tasks.",
      url: "https://www.cnbc.com/2023/06/12/apple-macbook-air-15-inch-wins-on-battery-life-portability-price.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107254736-1686521510454-MacBookAir15-0508.jpeg?v=1686574801&w=1920&h=1080",
      publishedAt: "2023-06-12T13:00:01Z",
      content:
        "Apple announced a 15-inch MacBook Air last week. It hits store shelves on Tuesday and costs $1,299 for the base model or as much as $,2499 with upgraded RAM and storage.\r\nThe MacBook Air has come in … [+4872 chars]",
    },
    {
      source: {
        id: null,
        name: "Rolling Stone",
      },
      author: "Alan Sepinwall",
      title:
        "The Best TV Shows of 2023 So Far, From 'Dave' to 'Succession' - Rolling Stone",
      description:
        "It’s been a fantastic year of television so far, and here are our picks for the best shows, from Abbott Elementary to the end of Succession",
      url: "https://www.rollingstone.com/tv-movies/tv-movie-lists/best-tv-shows-2023-so-far-succession-dave-abbott-elementary-1234765977/",
      urlToImage:
        "https://www.rollingstone.com/wp-content/uploads/2023/06/YSF_TV.jpg?w=1600&h=900&crop=1",
      publishedAt: "2023-06-12T13:00:00Z",
      content:
        "Image Credit: Sophie Kohler/PEACOCK\r\nEven with the combined pedigrees of co-creators Tara Hernandez (The Big Bang Theory, Young Sheldon) and Damon Lindelof (Lost, The Leftovers, Watchmen), it’s still… [+500 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Jason Horowitz",
      title: "Silvio Berlusconi dies at 86 - The Washington Post",
      description:
        "He dominated and divided his country for decades through a combination of showman charm, scofflaw bombast and ruthless application of financial and political power.",
      url: "https://www.washingtonpost.com/obituaries/2023/06/12/silvio-berlusconi-italian-prime-minister-dead/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/06-12-2023/t_0d0bc65ceedf46fa8d80fa080ac715ff_name_20230606_IAEAChief_00_01_03_20_Still038.jpg&w=1440",
      publishedAt: "2023-06-12T12:24:00Z",
      content:
        "Former prime minister Silvio Berlusconi of Italy, a media mogul who dominated and divided his country for decades through a combination of showman charm, scofflaw bombast and ruthless application of … [+15953 chars]",
    },
    {
      source: {
        id: null,
        name: "Military Times",
      },
      author: "AP Staff",
      title:
        "Russia's improved weaponry and tactics challenge Ukraine offensive - Military Times",
      description:
        "Military analysts say Moscow has learned from its blunders and improved its weapons and skills.",
      url: "https://www.militarytimes.com/news/your-military/2023/06/12/russias-improved-weaponry-and-tactics-challenge-ukraine-offensive/",
      urlToImage:
        "https://www.militarytimes.com/resizer/UbuNJwLVhJt4cF7jpCSxZd4Nsus=/1024x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/archetype/DLW64HD5EVAOFLULPSZSL6NUZA.jpg",
      publishedAt: "2023-06-12T12:15:00Z",
      content:
        "Ukrainian troops are probing Russian defenses as spring gives way to a second summer of fighting, and Kyivs forces are facing an enemy that has made mistakes and suffered setbacks in the 15-month-old… [+8454 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Kanye West's Daughter And Wife Bianca Censori Hold Hands At Rapper's Birthday Bash - NDTV",
      description:
        "There was no sign of Kanye's ex-wife Kim Kardashian or any of their other children at the event.",
      url: "https://www.ndtv.com/feature/kanye-wests-daughter-north-wife-bianca-censori-hold-hands-at-rappers-birthday-bash-4114769",
      urlToImage:
        "https://c.ndtvimg.com/2023-06/8n4okbj8_kanye-wests-daughter-and-wife-bianca-censori-_625x300_12_June_23.jpg",
      publishedAt: "2023-06-12T12:03:04Z",
      content:
        "The duo was seen smiling, chatting, and walking hand in hand while arriving for the party\r\nKanye West's wife, Bianca Censori, and his eldest daughter North West were seen holding hands as the duo att… [+2440 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Andy Boxall",
      title:
        "Motorola has killed the Razr’s most iconic feature — and I’m glad - Digital Trends",
      description:
        "Motorola has struck gold with the new Razr Plus design, and it's all due to finally forgetting the past. Here's why this is an essential move for the brand.",
      url: "https://www.digitaltrends.com/mobile/motorola-has-killed-the-razr-most-iconic-feature-and-im-glad/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2023/05/motorola-razr-plus-2023-hands-on-12.jpg?resize=1200%2C630&p=1",
      publishedAt: "2023-06-12T12:00:25Z",
      content:
        "Joe Maring/Digital Trends\r\nMotorola has finally admitted to itself that trading on the past for its Razr designs hasn’t been working. After Motorola took the sensible step of minimizing the once-icon… [+4964 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Jack Bantock",
      title:
        "Golfer Adam Hadwin mistakenly leveled by security when celebrating Nick Taylor’s fairytale Canadian Open win - CNN",
      description:
        "As Nick Taylor’s winding 72-foot eagle putt dropped into the cup, bedlam ensued.",
      url: "https://www.cnn.com/2023/06/12/golf/hadwin-security-tackle-taylor-canadian-open-spt-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230612112042-03-nick-taylor-canadian-open-win.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-06-12T12:00:00Z",
      content:
        "As Nick Taylors winding 72-foot eagle putt dropped into the cup, bedlam ensued.\r\nSinking the longest putt of his PGA Tour career on the fourth hole of a nail-biting playoff, the 35-year-old had just … [+4855 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "UBS completes Credit Suisse takeover to become wealth management behemoth - Reuters",
      description:
        'UBS <a href="https://www.reuters.com/companies/UBSG.S/"target="_blank">(UBSG.S)</a> on Monday said it had completed its emergency takeover of embattled local rival Credit Suisse <a href="https://www.reuters.com/companies/CSGN.S/"target="_blank">(CSGN.S)</a>, …',
      url: "https://www.reuters.com/markets/europe/ubs-completes-swiss-mega-merger-gains-clout-global-wealth-player-2023-06-12/",
      urlToImage:
        "https://www.reuters.com/resizer/mMHMPjfJg-xhGLIYQJpK6RLcQdc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KCD6LAZ56FP73CBXB7IDBX4BMI.jpg",
      publishedAt: "2023-06-12T11:26:00Z",
      content:
        "ZURICH, June 12 (Reuters) - UBS (UBSG.S) on Monday said it had completed its emergency takeover of embattled local rival Credit Suisse (CSGN.S), creating a giant Swiss bank with a balance sheet of $1… [+5234 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Ukraine counter-offensive: Kyiv says it has liberated villages in Donetsk region - BBC",
      description:
        "The four small villages are the first officially publicised gains in Kyiv's counter-offensive.",
      url: "https://www.bbc.com/news/world-europe-65873831",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/16964/production/_130061529_ukraine.jpg",
      publishedAt: "2023-06-12T11:08:10Z",
      content:
        'Ukraine says it has liberated four villages in the south-east of the country in the first victories of its much-anticipated counter-offensive.\r\nOfficials reported on Monday that "the national flag is… [+4438 chars]',
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Hyung-jin Kim",
      title:
        "British man detained after climbing 72nd floor of Seoul skyscraper - The Associated Press",
      description:
        "SEOUL, South Korea (AP) — A British man was detained after climbing more than half way up the world’s fifth-tallest skyscraper in Seoul with only his bare hands on Monday, authorities said. More than 90 emergency, police and other personnel were dispatched to…",
      url: "https://apnews.com/article/south-korea-skyscraper-climbing-british-27e5e133633521218539efbf8a71e861",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/8fe8411fc83f4c4fb04ec2408b105dbf/1920.webp",
      publishedAt: "2023-06-12T10:57:20Z",
      content:
        "SEOUL, South Korea (AP) A British man was detained after climbing more than half way up the worlds fifth-tallest skyscraper in Seoul with only his bare hands on Monday, authorities said.\r\nMore than 9… [+2007 chars]",
    },
    {
      source: {
        id: null,
        name: "The Athletic",
      },
      author: "Dan Duggan",
      title:
        "Giants RB Saquon Barkley frustrated by ‘misleading’ reports on contract stalemate - The Athletic",
      description:
        "Barkley had remained quiet while taking a public relations beating from fans in disbelief that he turned down the reported offers.",
      url: "https://theathletic.com/4602040/2023/06/11/saquon-barkley-misleading-reports-contract-stalemate/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2023/06/11221403/USATSI_19588073-1024x683.jpg",
      publishedAt: "2023-06-12T10:56:17Z",
      content:
        "JERSEY CITY, N.J. Saquon Barkley reiterated Sunday that he wants to be a Giant for life. The issue is Barkley isnt a Giant at all right now.\r\nBarkley still hasnt signed the franchise tag that was app… [+5044 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: null,
      title:
        "Bus carrying wedding guests rolls over in Australia's wine country, killing 10 and injuring dozens - CBS News",
      description: "It was Australia's most deadly road accident since 1994.",
      url: "https://www.cbsnews.com/news/australia-bus-crash-deaths-injuries-wedding-guests-wine-country/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2023/06/12/7b7bb93f-8fff-455c-95e8-b12289aa7e43/thumbnail/1200x630/5df36765a73eb4642694621ed4881cd2/2023-06-12t012330z-916632824-rc2dh1aek05k-rtrmadp-3-australia-accident.jpg",
      publishedAt: "2023-06-12T10:51:53Z",
      content:
        "The driver of a bus was charged Monday after the vehicle carrying wedding guests rolled over on a foggy night in Australia's wine country, killing 10 people and injuring 25 in the nation's most deadl… [+4326 chars]",
    },
    {
      source: {
        id: null,
        name: "ScienceAlert",
      },
      author: "Rebecca Dyer",
      title:
        "Boosting This Amino Acid – Not Telomeres – Might Be The Secret to Longer Lifespan - ScienceAlert",
      description:
        "Scientists have discovered not only that animals age more quickly when they don't have enough of the amino acid taurine in the body, but that oral taurine supplements can delay aging and increase a healthy lifespan.",
      url: "https://www.sciencealert.com/boosting-one-amino-acid-might-be-the-secret-to-longer-lifespans",
      urlToImage:
        "https://www.sciencealert.com/images/2022-07/processed/ChromosomesWithRedTelomeres_1024.jpg",
      publishedAt: "2023-06-12T10:41:20Z",
      content:
        "Scientists have discovered not only that animals age more quickly when they don't have enough of the amino acid taurine in the body, but that oral taurine supplements can delay aging and increase a h… [+4411 chars]",
    },
    {
      source: {
        id: null,
        name: "Space.com",
      },
      author: "Mike Wall",
      title:
        "Watch SpaceX launch its 2nd mission of the day this afternoon - Space.com",
      description:
        "SpaceX is scheduled to launch 72 satellites to orbit today (June 12) at 5:19 p.m. ET.",
      url: "https://www.space.com/spacex-transporter-8-launch-72-satellites",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/PrThBKkMSXc8NLqbERtHZ-1200-80.jpeg",
      publishedAt: "2023-06-12T10:00:43Z",
      content:
        "SpaceX plans to launch its second mission of the day today (June 12), and you can watch the action live.\r\nA Falcon 9 rocket topped with 72 small satellites is scheduled to lift off from California's … [+1980 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: null,
      title:
        "Microsoft's PC Game Pass is coming to NVIDIA's rival GeForce Now service | Engadget - Engadget",
      description:
        "Microsoft Game Pass members will soon be able to stream select PC games on NVIDIA's GeForce Now..",
      url: "https://www.engadget.com/microsofts-pc-game-pass-is-coming-to-nvidias-rival-geforce-now-service-091754446.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/AIr6MA3AqaDLDfUA9pLgoA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-06/a0fa7f20-090d-11ee-befd-238dfee50564.cf.jpg",
      publishedAt: "2023-06-12T09:18:38Z",
      content:
        "Microsoft Game Pass members will soon be able to stream PC games on NVIDIA's GeForce Now, following the announcement of a pact between the companies earlier this year. \"This will enable the PC Game P… [+1724 chars]",
    },
    {
      source: {
        id: "bloomberg",
        name: "Bloomberg",
      },
      author: "Jonnelle Marte, Augusta Saraiva",
      title:
        "Fed Backs Away From Wages Focus, Bolstering Case for Rate Pause - Bloomberg",
      description:
        "Federal Reserve officials are rethinking their view that wage gains are fueling inflation, a key intellectual shift that bolsters the case for a pause in their tightening campaign this week.",
      url: "https://www.bloomberg.com/news/articles/2023-06-12/fed-backs-away-from-wages-focus-bolstering-case-for-rate-pause",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ig0sU6K_x8HY/v1/1200x800.jpg",
      publishedAt: "2023-06-12T09:00:00Z",
      content:
        "Federal Reserve officials are rethinking their view that wage gains are fueling inflation, a key intellectual shift that bolsters the case for a pause in their tightening campaign this week.\r\nUntil r… [+413 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Camila Bernal,Cheri Mossburg",
      title:
        "New details emerge about the alleged search history of the Utah mom charged with her husband’s murder - CNN",
      description:
        "“What is a lethal dose of fentanyl” is one of many phone searches that investigators say were made by Kouri Richins, a Utah widow accused of killing her husband before she authored a children’s book about grief.",
      url: "https://www.cnn.com/2023/06/12/us/utah-mom-husband-killing-court-documents/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230509175813-02-richins-charged-death.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-06-12T08:44:00Z",
      content:
        "What is a lethal dose of fentanyl is one of many phone searches that investigators say were made by Kouri Richins, a Utah widow accused of killing her husband before she authored a childrens book abo… [+5907 chars]",
    },
  ];
  return (
    <div className="container">
      <p className="text-center newsPageHeading">Nexus News</p>
      <p className="text-center newsPageSubHeading">
        Latest Headlines Of Specific categories
      </p>
      <div className="row">
        {articles.map((article, i) => {
          return (
            <div className="col" key={i}>
              <NewsItem
                name={article.source.name}
                author={article.author}
                title={article.title}
                description={article.description}
                URL={article.url}
                URLToImage={article.urlToImage}
                publishedAt={article.publishedAt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
