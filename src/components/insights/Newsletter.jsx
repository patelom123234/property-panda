import Styles from "./Newsletter.module.css";
function Newslatter() {
  return (
   <div className={Styles.newletter_container_full}>
    <div className={Styles.newletter_container}>
      <div>
        <h2>NEWSLETTER</h2>
        <br/>
        <h3>Sign Up for Newletter and get latest news and update</h3>
        <p>Don't miss out on fantastic real estate deals. Sign up at propertypanda.comand embark
on your property journey with us today!</p>
      </div>
      <div className={Styles.subscribe_container}>
        {/* <input type="text" placeholder="Enter your email" /> */}
        <input type="text" placeholder="Enter your email"/>
        <button type="submit">Subscribe</button>
      </div>
    </div>
    </div>
  );
}

export default Newslatter;
