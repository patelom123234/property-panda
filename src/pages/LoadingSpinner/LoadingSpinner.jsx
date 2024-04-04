import Styles from "./LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={Styles.spinner}>
       <div className={Styles.loader_container}>
        <span className={Styles.loader}></span>
       </div>
    </div>
  )
}
