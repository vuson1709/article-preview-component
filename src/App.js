/*
Your challenge is to build out this article preview component and get it looking as close to the design as possible.

The only JavaScript you'll need for this challenge is to initiate the share options when someone clicks the share icon.

Your users should be able to: 
- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

    Share 
    Create thingking bubble in CSS https://codingislove.com/css-speech-bubbles/
*/

import AvatarMichelle from "./images/avatar-michelle.jpg";
import Drawers from "./images/drawers.jpg";
import IconShare from "./images/icon-share.svg";
import IconFacebook from "./images/icon-facebook.svg";
import IconPinterest from "./images/icon-pinterest.svg";
import IconTwitter from "./images/icon-twitter.svg";
import { useEffect, useState } from "react";

export default function Article() {
  const [isClick, setIsClick] = useState(false);
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  useEffect(() => {
    const callback = () => setWidthScreen(window.innerWidth);

    window.addEventListener("resize", callback);

    return () => window.removeEventListener("resize", callback);
  }, []);

  function handleIsClick() {
    if (widthScreen > 375) setIsClick((is) => !is);
  }

  return (
    <article className="article">
      <div className="drawers">
        <img src={Drawers} alt="Drawers" />
      </div>

      <div className="text-content">
        <h2>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h2>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="flex-container">
          <img
            src={AvatarMichelle}
            alt="Avatar of Michelle"
            className="avatar"
          />
          <div className="author">
            <p className="author-name">Michelle Appleton</p>
            <p className="article-date">28 Jun 2020</p>
          </div>
          <button className="btn-share" onClick={handleIsClick}>
            {isClick && widthScreen > 375 && (
              <div className="box">
                <span>Share</span>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={IconFacebook} alt="Icon Facebook" />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={IconTwitter} alt="Icon Twitter" />
                </a>
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={IconPinterest} alt="Icon Pinterest" />
                </a>
              </div>
            )}
            <img src={IconShare} alt="Icon Share" className="icon-share" />
          </button>
        </div>
      </div>
    </article>
  );
}
