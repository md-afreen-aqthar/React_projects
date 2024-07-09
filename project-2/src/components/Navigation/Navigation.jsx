import styles from "./Navigation.module.css";
const Navigation = () => {
    console.log(styles);
    return(
    <nav classname={`${styles.navigation} container`}>
      <div classname="logo">
          <img src="/images/logo.png" alt="do some coding logo" />
      </div>
      <ul>
          <li>
              Home
          </li>
          <li>
             About
          </li>
          <li>
             Contact
          </li>
      </ul>
    </nav>
    );
    
  }
  export default Navigation;