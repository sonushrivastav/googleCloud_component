import {  useState } from "react";
import "./App.css";
import img1 from "./images/image1.webp";
import img2 from "./images/image2.webp";
import img3 from "./images/image3.webp";
import img4 from "./images/image4.webp";
import img5 from "./images/image5.webp";
import img6 from "./images/image6.webp";
import img7 from "./images/image7.webp";
import img8 from "./images/image8.webp";
import img9 from "./images/image9.webp";
import img10 from "./images/image10.webp";
import img11 from "./images/image11.webp";

function App() {
  const [hover, setHover] = useState({
    retail: true,
    consumer: false,
    financial: false,
    healthcare: false,
    media: false,
    telecommunication: false,
    gaming: false,
    manugacturing: false,
    supply: false,
    government: false,
    education: false,
  });

  return (
    <>
      <div className="container">
        <div className="left">
          {/* <div className="straight_line"></div> */}
          <div className="headings">
            <li>
              <span
                className="title"
                onMouseOver={() =>
                  setHover({
                    hover: false,
                    retail: true,
                  })
                }
              >
                Retail
              </span>
            </li>
            <li>
              <span
                className="title "
                onMouseOver={() => setHover({ hover: false, consumer: true })}
              >
                Consumer packaged goods
              </span>
            </li>
            <li>
              <span
                className="title "
                onMouseOver={() => setHover({ hover: false, financial: true })}
              >
                Financial services
              </span>
            </li>
            <li>
              <span
                className="title "
                onMouseOver={() => setHover({ hover: false, healthcare: true })}
              >
                Healthcare and life sciences
              </span>
            </li>
            <li>
              <span
                className="title "
                onMouseOver={() => setHover({ hover: false, media: true })}
              >
                Media and entertainment
              </span>
            </li>
            <li>
              <span
                className="title "
                onMouseOver={() =>
                  setHover({ hover: false, telecommunication: true })
                }
              >
                Telecommunications
              </span>
            </li>
            <li>
              <span
                className="title "
                onMouseOver={() => setHover({ hover: false, gaming: true })}
              >
                Gaming
              </span>
            </li>
            <li>
              <span
                className="title "
                onMouseOver={() =>
                  setHover({ hover: false, manugacturing: true })
                }
              >
                Manufacturing
              </span>
            </li>
            <li>
              <span
                className="title "
                onMouseOver={() => setHover({ hover: false, supply: true })}
              >
                Supply chain and logistics
              </span>
            </li>
            <li>
              <span
                className="title "
                onMouseOver={() => setHover({ hover: false, government: true })}
              >
                Government
              </span>
            </li>
            <li>
              <span
                className="title "
                onMouseOver={() => setHover({ hover: false, education: true })}
              >
                Education
              </span>
            </li>
          </div>
        </div>

        {/* first  */}
        <div className={hover?.retail ? "right" : "hidden"}>
          <div className="topCard">
            <img src={img1} alt="" />
          </div>

          <div className="bottomCard">
            <div className="bottomLeftCard">
              <p >Altaf</p>
            </div>
            <div className="bottomRightCard">
              <p
                
              >
                altaf bhai
              </p>
            </div>
          </div>
        </div>

        {/* second */}
        <div className={hover.consumer ? "right" : "hidden"}>
          <div className="topCard">
            <img
              src={img2}
              alt=""
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="bottomCard">
            <div className="bottomLeftCard">
              <p >Ajay</p>
            </div>
            <div className="bottomRightCard">
              <p
                
              >
                Ajay bhai
              </p>
            </div>
          </div>
        </div>

        {/* third */}
        <div className={hover?.financial ? "right" : "hidden"}>
          <div className="topCard">
            <img
              src={img3}
              alt=""
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="bottomCard">
            <div className="bottomLeftCard">
              <p >
                Brock Lesnar
              </p>
            </div>
            <div className="bottomRightCard">
              <p
                
              >
                F5 and Block move
              </p>
            </div>
          </div>
        </div>

        {/* fourth */}
        <div className={hover?.healthcare ? "right" : "hidden"}>
          <div className="topCard">
            <img
              src={img4}
              alt=""
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="bottomCard">
            <div className="bottomLeftCard">
              <p >
                Ray Mysterio
              </p>
            </div>
            <div className="bottomRightCard">
              <p
                
              >
                The 619 move
              </p>
            </div>
          </div>
        </div>

        {/* fifth */}
        <div className={hover?.media ? "right" : "hidden"}>
          <div className="topCard">
            <img
              src={img5}
              alt=""
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="bottomCard">
            <div className="bottomLeftCard">
              <p >Shubham</p>
            </div>
            <div className="bottomRightCard">
              <p
                
              >
                Shubham bhai
              </p>
            </div>
          </div>
        </div>

        {/* sixth */}
        <div className={hover?.telecommunication ? "right" : "hidden"}>
          <div className="topCard">
            <img
              src={img6}
              alt=""
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="bottomCard">
            <div className="bottomLeftCard">
              <p >
                Undertaker
              </p>
            </div>
            <div className="bottomRightCard">
              <p
                
              >
                Tombstone pile Driver
              </p>
            </div>
          </div>
        </div>

        {/* seventh */}
        <div className={hover?.gaming ? "right" : "hidden"}>
          <div className="topCard">
            <img
              src={img7}
              alt=""
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="bottomCard">
            <div className="bottomLeftCard">
              <p >
                Nia Jacks
              </p>
            </div>
            <div className="bottomRightCard">
              <p
                
              >
                Super Moves block
              </p>
            </div>
          </div>
        </div>

        {/* eighth */}
        <div className={hover?.manugacturing ? "right" : "hidden"}>
          <div className="topCard">
            <img
              src={img8}
              alt=""
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="bottomCard">
            <div className="bottomLeftCard">
              <p >
                becky Lynch
              </p>
            </div>
            <div className="bottomRightCard">
              <p
                
              >
                powerful moves
              </p>
            </div>
          </div>
        </div>

        {/* nineth */}
        <div className={hover?.supply ? "right" : "hidden"}>
          <div className="topCard">
            <img
              src={img9}
              alt=""
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="bottomCard">
            <div className="bottomLeftCard">
              <p >Rey mesterio</p>
            </div>
            <div className="bottomRightCard">
              <p
            
              >
                619
              </p>
            </div>
          </div>
        </div>

        {/* tenth */}
        <div className={hover?.government ? "right" : "hidden"}>
          <div className="topCard">
            <img
              src={img10}
              alt=""
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="bottomCard">
            <div className="bottomLeftCard">
              <p > Shaun Michael </p>
            </div>
            <div className="bottomRightCard">
              <p
                
              >
                Super Kick
              </p>
            </div>
          </div>
        </div>

        {/* eleventh */}
        <div className={hover?.education ? "right" : "hidden"}>
          <div className="topCard">
            <img
              src={img11}
              alt=""
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="bottomCard">
            <div className="bottomLeftCard">
              <p >John</p>
            </div>
            <div className="bottomRightCard">
              <p
                
              >
                John Doe
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
