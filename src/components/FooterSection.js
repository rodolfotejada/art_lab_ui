import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import Logo from './Logo';
import ParagraphText from './paragraphText/ParagraphText';

const FooterStyles = styled.footer`
  background-color: var(--darkBlue_4);
  padding: 10rem 0;
  .footer__wrapper {
    text-align: center;
  }
  .footer__logo {
    max-width: 120px;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  .footer__desc {
    color: var(--white);
    max-width: 350px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .footer__links {
    margin-bottom: 2rem;
    li {
      display: inline-block;
      margin: 0 1rem;
    }
    a {
      font-size: 1.6rem;
      color: var(--lightBlue_1);
      line-height: 1.5eem;
    }
    li:hover {
      a {
        color: var(--mediumSlateBlue);
        text-decoration: underline;
      }
    }
  }
  .footer__copyright {
    font-size: 1.2rem;
    color: var(--lightBlue_1);
  }
  @media only screen and (max-width: 768px) {
    .footer__links {
      a {
        font-size: 1.4rem;
      }
    }
  }
`;

function FooterSection() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__wrapper">
          <Link to="home" smooth>
            <Logo className="footer__logo" />
          </Link>

          <ParagraphText className="footer__desc">
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            veniam sed id maxime, veritatis vitae!'
          </ParagraphText>
          <div className="footer__links">
            <ul>
              <li>
                <Link to="home" smooth>
                  Home
                </Link>
              </li>
              <li>
                <Link to="services" smooth>
                  Services
                </Link>
              </li>
              <li>
                <Link to="about" smooth>
                  About
                </Link>
              </li>
              <li>
                <Link to="contact" smooth>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ParagraphText className="footer__copyright">
            Art_Lab 2022. All Rights Reserved
          </ParagraphText>
        </div>
      </div>
    </FooterStyles>
  );
}

export default FooterSection;
