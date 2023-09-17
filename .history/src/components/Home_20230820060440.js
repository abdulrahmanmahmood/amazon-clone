import React from "react";
import homeImg1 from "../images/amazonHome.jpg";
import homeImg2 from "../images/amazonHome2.jpg";
import "./Home.css";

const Home = () => {
  
  
  
  return (
  
    <div className="home">
                    {/* <img class="d-block w-100" src={homeImg1} alt="First slide" /> */}

      <div className="home-container">
      <table role="presentation" align="center" bgcolor="#ececec" border="0" cellpadding="0" cellspacing="0" width="100%" class="container">
  <tr>
    <td align="center">

      <!--[if (gte mso 9)|(IE)]>
		<table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
		<tr>
		<td align="center" valign="top" width="600">
		<![endif]-->
      <table role="presentation" bgcolor="#ffffff" width="100%" style="max-width:600px;border: solid 1px #d0d0d0" align="center" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td style="font-family: Arial, sans-serif; font-size: 11px;color:#575756; padding: 10px 0" align="center">
            <a href="#" target="_blank" style="color:#575756; text-decoration:underline">View in browser</a>
          </td>
        </tr>
        <tr>
          <td valign="top" align="center">

            <!-- FALLBACK HERO - STATIC IMAGE -->
            <div class="fallback">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                <tr>
                  <td valign="top" align="center" style="font-size: 20px;font-family:Arial, Helvetica, sans-serif;">
                    <a href="#" target="_blank" style="color:#1a2b68">
                        <img src="https://source.unsplash.com/random/600x400" alt="Alt" style="display:block; border:none;" width="600" height="400" class="img">
                      </a>
                  </td>
                </tr>
              </table>
            </div>

            <!-- CAROUSEL -->
            <!--[if !mso]><!-- -->
            <div class="carousel-container" style="display:none">
              <input type="radio" name="slide" id="slide1"/>
              <input type="radio" name="slide" id="slide2"/>
              <input type="radio" name="slide" id="slide3"/>
              <input type="radio" name="slide" id="slide4">
              <input type="radio" name="slide" id="slide5" checked>
              <input type="radio" name="slide" id="slide6">
              <input type="radio" name="slide" id="slide7">
              <input type="radio" name="slide" id="slide8">
              <input type="radio" name="slide" id="slide9">
              <div class="carousel-viewport">
                <div class="slide slide-tl">
                  <label for="slide2" class="right">
                    </label>
                  <label for="slide4" class="down">
                    </label>
                </div>
                <div class="slide slide-tc">
                  <label for="slide1" class="left">
                      &rrarr;
                    </label>
                  <label for="slide5" class="down">
                      &rrarr;
                    </label>
                  <label for="slide3" class="right">
                      &rrarr;
                    </label>
                </div>
                <div class="slide slide-tr">
                  <label for="slide2" class="left">
                      &rrarr;
                    </label>
                  <label for="slide6" class="down">
                      &rrarr;
                    </label>
                </div>
                <div class="slide slide-ml">
                  <label for="slide1" class="up">
                      &rrarr;
                    </label>
                  <label for="slide5" class="right">
                      &rrarr;
                    </label>
                  <label for="slide7" class="down">
                      &rrarr;
                    </label>
                </div>
                <div class="slide slide-mid">
                  <label for="slide4" class="left">
                     &rrarr;
                    </label>
                  <label for="slide2" class="up">
                      &rrarr;
                    </label>
                  <label for="slide6" class="right">
                      &rrarr;
                    </label>
                  <label for="slide8" class="down">
                      &rrarr;
                    </label>
                </div>
                <div class="slide slide-mr">
                  <label for="slide3" class="up">
                      &rrarr;
                    </label>
                  <label for="slide5" class="left">
                      &rrarr;
                    </label>
                  <label for="slide9" class="down">
                      &rrarr;
                    </label>
                </div>
                <div class="slide slide-bl">
                  <label for="slide4" class="up">
                      &rrarr;
                    </label>
                  <label for="slide8" class="right">
                      &rrarr;
                    </label>
                </div>
                <div class="slide slide-bc">
                  <label for="slide7" class="left">
                      &rrarr;
                    </label>
                  <label for="slide5" class="up">
                      &rrarr;
                    </label>
                  <label for="slide9" class="right">
                      &rrarr;
                    </label>
                </div>
                <div class="slide slide-br">
                  <label for="slide8" class="left">
                      &rrarr;
                    </label>
                  <label for="slide6" class="up">
                      &rrarr;
                    </label>
                </div>
              </div>
            </div>

            <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
              <tr>
                <td align="center" style="padding-top:20px">
                  <h1 style="font-size: 23px;font-family:Arial, Helvetica, sans-serif;color: #1a2b68;line-height: 25px;font-weight: bold; text-transform: uppercase; margin: 0;" tabindex="0">Multidirectional carousel</h1>
                </td>
              </tr>
            </table>

            <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
              <tr>
                <td align="left" class="center" style="padding:30px 20px;">
                  <p style="color:#77787b; font-family:Arial, Helvetica, sans-serif; font-size:13px;line-height:19px; margin: 0" tabindex="0">
                    Use the arrows to scroll around the big image. 
                    <br><br>
                    Carousel type build that scrolls over large background image using directional arrows. Background is moved by changing the 'background-position' on relative input checked state. Checked state also controls which arrows will be visible on screen. Unsupported environments will display a fallback static image.
                    <br><br>
                    Background images provided by <a href="https://source.unsplash.com/" target="_blank">Unsplash Source</a>
                  </p>
                </td>
              </tr>
            </table>

          </td>
        </tr>
      </table>
      <!--[if (gte mso 9)|(IE)]>
		</td>
		</tr>
		</table>
		<![endif]-->

    </td>
  </tr>
</table>
      </div>
    </div>
  );
};

export default Home;
