import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Stephen 'tWitch' Boss, Former 'Ellen DeGeneres Show' DJ and 'SYTYCD' All-Star, Dead at 40 | PEOPLE - People",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dcgq5K5PD7I0",
      urlToImage: null,
      publishedAt: "2022-12-14T16:16:07Z",
      content:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Amy Woodyatt, Lauren Kent, Allegra Goodwin, Joseph Ataman",
      title: "At least four dead after boat capsizes in English Channel - CNN",
      description:
        "At least four people have died after a small boat likely to be carrying migrants capsized in the English Channel, authorities confirmed Wednesday after a major search and rescue operation was launched in the early hours of the morning.",
      url: "https://www.cnn.com/2022/12/14/uk/english-channel-migrant-boat-deaths-intl-gbr/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221214110937-03-uk-channel-crossing-121422.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-12-14T15:43:00Z",
      content:
        "At least four people have died after a small boat likely to be carrying migrants capsized in the English Channel, authorities confirmed Wednesday after a major search and rescue operation was launche… [+3591 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Tess Homan, Jamie Ross",
      title:
        "The 7 things you need to know for Wednesday, December 14 - The Washington Post",
      description: "Catch up in minutes with these 7 stories.",
      url: "https://www.washingtonpost.com/the-seven/2022/12/14/what-to-know-for-december-14/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/AKCYKOF565FL7M22KNZNISKYOM.png&w=1440",
      publishedAt: "2022-12-14T14:23:13Z",
      content:
        "Author narrated|\r\nListen0 min\r\nU.S. officials say the founder of FTX committed massive fraud.\r\n<ul><li>\r\nHow we got here: FTX was one of the worlds largest cryptocurrency exchanges before it collapse… [+2924 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Scream 6 - Official Teaser Trailer (2023) Jenna Ortega, Melissa Barrera - IGN",
      description:
        "In a city of millions, no one hears you scream. Check out the terrifying teaser trailer for Scream VI. Following the latest Ghostface killings, the four surv...",
      url: "https://www.youtube.com/watch?v=PesQLjkAEew",
      urlToImage: "https://i.ytimg.com/vi/PesQLjkAEew/maxresdefault.jpg",
      publishedAt: "2022-12-14T14:22:02Z",
      content: null,
    },
    {
      source: { id: null, name: "NBCSports.com" },
      author: "Michael David Smith",
      title:
        "Chiefs, Bills, Vikings, 49ers, Cowboys can all clinch playoff berths in Week 15 - NBC Sports",
      description:
        "The Eagles are currently the only team that has clinched a playoff berth. By Sunday evening, as many as five more teams may have joined Philadelphia in the postseason.The Chiefs, Bills, Vikings, 49ers and Cowboys can all clinch playoff berths in Week 15. Here…",
      url: "https://profootballtalk.nbcsports.com/2022/12/14/chiefs-bills-vikings-49ers-cowboys-can-all-clinch-playoff-berths-in-week-15/",
      urlToImage:
        "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/12/GettyImages-1443619424-e1671027532746.jpg",
      publishedAt: "2022-12-14T14:19:00Z",
      content:
        "The Eagles are currently the only team that has clinched a playoff berth. By Sunday evening, as many as five more teams may have joined Philadelphia in the postseason.\r\nThe Chiefs, Bills, Vikings, 49… [+503 chars]",
    },
    {
      source: { id: null, name: "CBS Sports" },
      author: "",
      title:
        "Carlos Correa signs with Giants: Star free agent lands in San Francisco on 13-year, $350 million contract - CBS Sports",
      description: "Correa inked the largest deal ever for a shortstop",
      url: "https://www.cbssports.com/mlb/news/carlos-correa-signs-with-giants-star-free-agent-lands-in-san-francisco-on-13-year-350-million-contract/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2022/12/14/bbac3d37-2425-4be6-9f1c-20b54dc4cd25/thumbnail/1200x675/699fe3c86dcfd34fdaf2606e2f165675/mj-getty-1.png",
      publishedAt: "2022-12-14T13:49:00Z",
      content:
        "The San Francisco Giants have landed the best shortstop on the free agent market. Carlos Correa and the Giants have agreed to a massive 13-year contract worth $350 million, CBS Sports HQ's Jim Bowden… [+2657 chars]",
    },
    {
      source: { id: null, name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title:
        "World Cup 2022: Morocco fans' heartbreak as Doha flights cancelled - BBC",
      description:
        "The last-minute cancellations sees many fans unable to travel to Wednesday's World Cup semi-final.",
      url: "https://www.bbc.com/news/world-africa-63973938",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/17E80/production/_128002979_mo.jpg",
      publishedAt: "2022-12-14T13:35:55Z",
      content:
        "Hundreds of Moroccan football fans have been left devastated as last-minute flight cancellations look set to stop them travelling to Qatar for Wednesday's World Cup semi-final.\r\nMorocco's national ai… [+2538 chars]",
    },
    {
      source: { id: "axios", name: "Axios" },
      author: "Erin Doherty",
      title:
        "New polls: Trump's 2024 bid has a growing DeSantis problem - Axios",
      description:
        "DeSantis has been viewed as a potential front-runner in the race, but has steered clear of a formal announcement.",
      url: "https://www.axios.com/2022/12/14/trump-desantis-polls-republican-primary-2024",
      urlToImage:
        "https://images.axios.com/DzF8B5jh-Zi2mDVr7VaUFUNNovM=/0x168:3000x1856/1366x768/2022/12/14/1671021194749.jpg",
      publishedAt: "2022-12-14T13:34:33Z",
      content:
        "Former President Trump is losing steam among Republican primary voters, while interest in potential foe Florida Gov. Ron DeSantis (R) is rising, two polls out this week found.\r\nDriving the news: DeSa… [+1310 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Cindy Boren, Ben Strauss",
      title:
        "Grant Wahl, journalist who died at World Cup, suffered aortic aneurysm, wife says - The Washington Post",
      description:
        "Grant Wahl, 48, collapsed in his seat during a match last week. His wife said Wednesday he died of a ruptured aortic aneurysm.",
      url: "https://www.washingtonpost.com/sports/2022/12/14/grant-wahl-cause-of-death/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VGI4DW72N5EULLM4O6R3GZQKZA.jpg&w=1440",
      publishedAt: "2022-12-14T13:23:45Z",
      content:
        "Comment on this story\r\nThe wife of prominent soccer journalist Grant Wahl said Wednesday that the writers death last week while covering the World Cup was caused by the sudden rupture of an aortic an… [+4536 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Elisabeth Buchwald, Medora Lee and Paul Davidson, USA TODAY",
      title:
        "Fed interest rate decision today: Live updates on expected rate hike - USA TODAY",
      description:
        "The Fed is expected to raise the interest rate by 0.50 percentage points but people will be looking for clues to when it plans to stop and pivot.",
      url: "https://www.usatoday.com/story/money/economy/2022/12/14/fed-interest-rate-federal-reserve-meeting-live-updates/10867165002/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/09/22/USAT/29e769d7-b78f-4a2e-8db5-91898de5e721-GTY_1243409120.jpeg?auto=webp&crop=6742,3792,x0,y364&format=pjpg&width=1200",
      publishedAt: "2022-12-14T13:07:30Z",
      content:
        "The Federal Reserve is expected to raise interest rates by half a percentage point at the end of its two-day policy meeting on Wednesday to continue its fight against inflation. \r\nInflation, as noted… [+4199 chars]",
    },
    {
      source: { id: null, name: "New York Post" },
      author: "Ben Kesslen",
      title:
        "Moscow police should hand over control of Idaho murder investigation: former FBI agent - New York Post ",
      description:
        "The tiny police department, which has around 60 staff and in 2019 boasted just 37 sworn-in police officers, has failed to produce a suspect, release a profile of the killer or give more than basic …",
      url: "https://nypost.com/2022/12/14/police-should-hand-idaho-murders-case-to-fbi-former-agent/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2022/12/fbi-agent-moscow-police-relinquish-idaho-murders-comp-2.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2022-12-14T13:00:53Z",
      content:
        "The Moscow Police Department should relinquish control of the University of Idaho murders investigation, a former FBI agent has told The Post as the one-month anniversary of the slaying passes with t… [+2512 chars]",
    },
    {
      source: { id: "polygon", name: "Polygon" },
      author: "Oli Welsh",
      title:
        "Wonder Woman 3 director Patty Jenkins ‘never walked away’, Rogue Squadron still alive - Polygon",
      description:
        "The director has denied reports she refused to rework the DC sequel starring Gal Gadot and quit the project, and said that her Star Wars movie Rogue Squadron is still in active development",
      url: "https://www.polygon.com/23508767/wonder-woman-3-patty-jenkins-cancellation-rogue-squadron-dc-studios",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/JMMBQbHstJXsvk5ZTpYuHVaAC58=/0x270:6000x3411/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21807892/rev_1_WW84_35004r_High_Res_JPEG.jpeg",
      publishedAt: "2022-12-14T12:35:47Z",
      content:
        "Patty Jenkins, the director of the two Wonder Woman movies starring Gal Gadot, has spoken out about the cancellation of Wonder Woman 3 by Warner Bros. which was reported by The Hollywood Reporter las… [+2697 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Diana Olick",
      title:
        "Mortgage demand inches higher as interest rates move lower - CNBC",
      description:
        "Borrowers are finally reacting to lower mortgage rates, boosting demand for both refinances and loans to purchase homes.",
      url: "https://www.cnbc.com/2022/12/14/mortgage-demand-inches-higher-as-interest-rates-move-lower-.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107158663-1669760807330-gettyimages-1437304137-bzrate22092473055.jpeg?v=1671019201&w=1920&h=1080",
      publishedAt: "2022-12-14T12:00:01Z",
      content:
        "After a month of declines, mortgage application volume is rising, as current homeowners and potential buyers move on lower mortgage rates.\r\nApplications rose 3.2% last week compared with the previous… [+2143 chars]",
    },
    {
      source: { id: "engadget", name: "Engadget" },
      author: "https://www.engadget.com/about/editors/steve-dent",
      title:
        "Sony and Nintendo's year in reviews reveal your top games of 2022 - Engadget",
      description:
        "Just ahead of the holidays, Nintendo and PlayStation have unveiled their 2022 year in review tools, letting you see a summary of your favorite games and more..",
      url: "https://www.engadget.com/playstation-nintendo-year-in-review-tools-top-games-hours-logged-115542018.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-12/70807440-7b9a-11ed-b3af-0b8477a82135",
      publishedAt: "2022-12-14T11:57:41Z",
      content:
        "Just ahead of the holidays, Nintendo and Sony have unveiled their 2022 year in review tools for PlayStation and Switch, letting you see stats, a summary of your favorite games and more. As in previou… [+1248 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Brad Smith",
      title:
        "Delta Air Lines raises Q4 earnings guidance, says 'momentum is building' - Yahoo Finance",
      description:
        "Delta Air Lines now expects adjusted earnings per share to reach a range of $1.35-$1.40 as compared to a previously forecasted range of $1.00 - $1.25.",
      url: "https://finance.yahoo.com/news/delta-air-lines-raises-q-4-earnings-guidance-says-momentum-is-building-114623939.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/FzMH1QvhxAXAwRqASMQtBQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-06/c53decb0-f981-11ec-bb6f-6937cd3f9ef4",
      publishedAt: "2022-12-14T11:46:32Z",
      content:
        "Boosted by operating margins that are anticipated to reach the top of the previously guided 9-11% range, Delta Air Lines now expects adjusted earnings per share to reach a range of $1.35-$1.40 as com… [+2332 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "U.S. lawmakers unveil bipartisan bid to ban China's TikTok - Reuters",
      description:
        "Republican Senator Marco Rubio on Tuesday announced bipartisan legislation to ban China's popular social media app TikTok, ratcheting up pressure on owner ByteDance Ltd amid U.S. fears the app could be used to spy on Americans and censor content.",
      url: "https://www.reuters.com/world/us/us-lawmakers-unveil-bipartisan-bid-ban-chinas-tiktok-2022-12-13/",
      urlToImage:
        "https://www.reuters.com/resizer/BsyB8hW_qIz6KSfehIBxJXcswUs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/S4Q2AHW4TFMIJLB32FXVIONPIM.jpg",
      publishedAt: "2022-12-14T11:07:00Z",
      content:
        "WASHINGTON, Dec 13 (Reuters) - Republican Senator Marco Rubio on Tuesday announced bipartisan legislation to ban China's popular social media app TikTok, ratcheting up pressure on owner ByteDance Ltd… [+2421 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Dan Heching",
      title:
        "Jay Leno details how his 'face caught on fire' in first interview since accident - CNN",
      description:
        "Jay Leno has opened up for the first time about the accident that left him with severe burns to his face and body.",
      url: "https://www.cnn.com/2022/12/13/entertainment/jay-leno-burn-accident-interview/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221213181231-jay-leno-interview-burn-injuries-screengrab.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-12-14T11:03:00Z",
      content:
        "Jay Leno has opened up for the first time about the accident that left him with severe burns to his face and body. \r\nIn an interview with Hoda Kotb from Today, his first since the November 12 inciden… [+1851 chars]",
    },
    {
      source: { id: "bloomberg", name: "Bloomberg" },
      author: null,
      title:
        "In 60 Seconds Before CPI Hit, Heavy Trading Drove Mystery Rally - Bloomberg",
      description: null,
      url: "https://www.bloomberg.com/tosv2.html?vid=&uuid=c50d4cca-7bbf-11ed-92d3-516f6d45654a&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0xMi0xNC9pbi02MC1zZWNvbmRzLWJlZm9yZS1jcGktaGl0LWhlYXZ5LXRyYWRpbmctZHJvdmUtbXlzdGVyeS1yYWxseQ==",
      urlToImage: null,
      publishedAt: "2022-12-14T11:00:00Z",
      content:
        "To continue, please click the box below to let us know you're not a robot.",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Jessie Yeung",
      title:
        "Indian and Chinese troops fight with sticks and bricks in video - CNN",
      description:
        "Video of what appears to be a previously unreported violent clash between Indian and Chinese troops at their disputed Himalayan border has emerged online, offering a rare window into the long-simmering territorial tensions between the two Asian powers.",
      url: "https://www.cnn.com/2022/12/14/asia/india-china-border-tensions-video-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221214144052-clash-between-indian-and-chinese-troops.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-12-14T10:27:00Z",
      content:
        "Video of what appears to be a previously unreported violent clash between Indian and Chinese troops at their disputed Himalayan border has emerged online, offering a rare window into the long-simmeri… [+6111 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Taylor Nicioli",
      title:
        "Mark your calendar for the strongest meteor shower of the year - CNN",
      description:
        "The Geminids meteor shower is the strongest meteor shower of the year, with a rate of up to 120 visible meteors per hour. It will peak the night of December 13 into early hours of December 14.",
      url: "https://www.cnn.com/2022/12/13/world/geminids-meteor-shower-december-scn/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221208102511-geminid-fireballs-meteor-shower-2020.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-12-14T10:25:00Z",
      content:
        "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nThe best chance to see the strongest meteor shower of … [+5307 chars]",
    },
  ];
  constructor() {
    super();

    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url =
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=2d10a3b1915b4d449f68348e7de25ee0&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      console.log("Next");
      console.log("cdm");
      let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=2d10a3b1915b4d449f68348e7de25ee0&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  handlePreviousClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=2d10a3b1915b4d449f68348e7de25ee0&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
            disabled={this.state.page <= 1}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            {" "}
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
