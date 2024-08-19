import React, { useState } from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import fb from "../../../public/img/Facebook_Logo_(2019).png.webp";
import ins from "../../../public/img/Instagram_icon.png.webp";
import link from "../../../public/img/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.webp";
import pin from "../../../public/img/Pinterest-logo.png";
import Image from "next/image";
import { IoIosMail } from "react-icons/io";

const logosData = [
  {
    img: fb,
  },
  {
    img: ins,
  },
  {
    img: link,
  },
  {
    img: pin,
  },
];
const Footer = () => {
  const [users, setUsers] = useState(false);
  console.log(users);
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className={styles.FooterMain}>
      <div className={styles.SubFooterMain}>
        <div style={{ display: "flex", flexDirection: "column", gap: "23px" }}>
          <Link style={{ fontSize: "40px" }} href="/">
            TECH WORLD
          </Link>
          <div className={styles.footerLogoMain}>
            {logosData.map((logoData, index) => (
              <div key={index + 1}>
                <Link href="#">
                  <Image
                    className={styles.footerLogo}
                    src={logoData.img}
                    alt={`logo${index + 1}`}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.NavSection}>
          <div>
            <ul>
              <p>section</p>
              <Link href="#">
                <li>Home</li>
              </Link>
              <Link href="#">
                <li>About</li>
              </Link>
              <Link href="#">
                <li>Blog</li>
              </Link>
              <Link href="#">
                <li>Order</li>
              </Link>
              <Link href="#">
                <li>selection</li>
              </Link>
            </ul>
          </div>
          <div>
            <ul>
              <p>section</p>
              <Link href="#">
                <li>Home</li>
              </Link>
              <Link href="#">
                <li>About</li>
              </Link>
              <Link href="#">
                <li>Blog</li>
              </Link>
              <Link href="#">
                <li>Order</li>
              </Link>
              <Link href="#">
                <li>selection</li>
              </Link>
            </ul>
          </div>
          <div>
            <ul>
              <p>section</p>
              <Link href="#">
                <li>Home</li>
              </Link>
              <Link href="#">
                <li>About</li>
              </Link>
              <Link href="#">
                <li>Blog</li>
              </Link>
              <Link href="#">
                <li>Order</li>
              </Link>
              <Link href="#">
                <li>selection</li>
              </Link>
            </ul>
          </div>
          <div>
            <ul>
              <p>section</p>
              <Link href="#">
                <li>Home</li>
              </Link>
              <Link href="#">
                <li>About</li>
              </Link>
              <Link href="#">
                <li>Blog</li>
              </Link>
              <Link href="#">
                <li>Order</li>
              </Link>
              <Link href="#">
                <li>selection</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          <p style={{justifyContent:'center', display:'flex', gap:'10px'}}>
            <IoIosMail style={{ color: "white" , fontSize:'20px'}} /> Mail for any kind of
            problem and any query
          </p>
          {users ? (
            <div>
              <input style={{outline:'none', border:'none', padding:'15px'}} type="email" name="email" id="" />
              <input type="submit" className={styles.sendButt} value="Send" />
            </div>
          ) : (
            <div>
              <p
                onClick={() => setUsers(!users)}
                style={{
                  backgroundColor: "#72c5c9",
                  width: "50%",
                  margin: "auto",
                  textAlign: "center",
                  padding: "12px",
                }}
              >
                <Link href="#">SignUp or SignIn</Link>
              </p>
            </div>
          )}
        </div>
      </div>
      <hr style={{ width: "80%", justifyContent: "center" }} />
      <div style={{display:'flex', justifyContent:'space-between',alignItems:'center', width:'95%', margin:'auto'}}>
        <div>TECH WORLD</div>
        <div style={{display:'flex', gap:'100px'}}>
          <p className="copyRight"><Link href='#' style={{fontSize:'12px'}}>Terms and Conditions</Link></p>
          <p className="copyRight"><Link href='#' style={{fontSize:'12px'}}>Shipping, Returns & Warranty</Link></p>
          <p className="copyRight"><Link href='#' style={{fontSize:'12px'}}>Trademark and Copyright Guidelines</Link></p>
          <p className="copyRight"><Link href='#' style={{fontSize:'12px'}}>Business Partner Code of Conduct</Link></p>
        </div>
        <p style={{ textAlign: "center" }}>@ {year} Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
