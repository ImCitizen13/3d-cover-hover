import "./App.css";
import StarAnimation from "./StarAnimation";

type HoverCard = {
  bgImgSrc: string;
  logoImgSrc: string;
  fgImgSrc: string;
};

function HoverCardView({ bgImgSrc, logoImgSrc, fgImgSrc }: HoverCard) {
  return (
    <div className="card">
      <div className="pop-out">
        <img className="logo-image" src={logoImgSrc} alt="logo" />
        <img className="front-image" src={fgImgSrc} alt="fg" />

        <img className="bg-image" src={bgImgSrc} alt="fg" />
      </div>
    </div>
  );
}

function App() {
  const hoverCards: HoverCard[] = [
    {
      bgImgSrc:
        "https://github.com/ImCitizen13/3d-cover-hover/blob/main/src/assets/tyrion_bg.jpeg?raw=true",
      logoImgSrc:
        "https://github.com/ImCitizen13/3d-cover-hover/blob/main/src/assets/tyrion_logo.png?raw=true",
      fgImgSrc:
        "https://github.com/ImCitizen13/3d-cover-hover/blob/main/src/assets/tyrion_fg.png?raw=true",
    },
    // {
    //   bgImgSrc:
    //   "https://assets.codepen.io/308367/yoda-on-dagobah.jpg",
    //   logoImgSrc:
    //   "https://assets.codepen.io/308367/yoda-logo.webp",
    //   fgImgSrc:
    //   "https://assets.codepen.io/308367/yoda-front.png",
    // },
    {
      bgImgSrc:
        "https://github.com/ImCitizen13/3d-cover-hover/blob/main/src/assets/op_bg.jpg?raw=true",
      logoImgSrc:
        "https://github.com/ImCitizen13/3d-cover-hover/blob/main/src/assets/onepiece_logo.png?raw=true",
      fgImgSrc:
        "https://github.com/ImCitizen13/3d-cover-hover/blob/main/src/assets/op_fg.png?raw=true",
    },
  ];
  return (
    <>
      <div className="title-header">
        <h1 className="rs-shop-header">3D Hover Cards. </h1>
        <div className="rs-shop-subheader">Take a look.</div>
      </div>
      <div className="hover-cards">
        {hoverCards.map((hCard) => {
          return (
            <HoverCardView
              bgImgSrc={hCard.bgImgSrc}
              logoImgSrc={hCard.logoImgSrc}
              fgImgSrc={hCard.fgImgSrc}
            ></HoverCardView>
          );
        })}
        {/* <div className="card--content"></div>
        <div className="card--content"></div>
        <div className="card--content"></div>
        <div className="card--content"></div>
        <div className="card--content"></div>
        <div className="card--content"></div>
        <div class="card--content"></div>
        <div className="card--content"></div>
        <div className="card--content"></div>
        <div className="card--content"></div> */}
      </div>
      {/* <StarAnimation/> */}
    </>
  );
}

export default App;
