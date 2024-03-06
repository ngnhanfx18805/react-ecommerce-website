import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>
        <h3>CUSTOMER SERVICES</h3>
        <ul>
          <li>
            <a href="#">Help & Contact Us</a>
          </li>
          <li>
            <a href="#">Return & Refunds</a>
          </li>
          <li>
            <a href="#">Online Stores</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>COMPANY</h3>
        <ul>
          <li>
            <a href="#">What We Do</a>
          </li>
          <li>
            <a href="#">Available Services</a>
          </li>
          <li>
            <a href="#">Latest Post</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>SOCIAL MEDIA</h3>
        <ul>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Pinterest</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
