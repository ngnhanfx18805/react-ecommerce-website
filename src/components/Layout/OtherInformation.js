import COtherInfomation from "./COtherInfomation";
import classes from "./OtherInformation.module.css";

const OtherInformation = () => {
  const C_NAME_CONTACT_DETAIL = "Free shipping worlwide";
  return (
    <div>
      <div className={classes.information}>
        <COtherInfomation
          nameContact="FREE SHIPPING"
          nameContactDetail={`${C_NAME_CONTACT_DETAIL}`}
        />
        <COtherInfomation
          nameContact="24/7 SERVICE"
          nameContactDetail={`${C_NAME_CONTACT_DETAIL}`}
        />
        <COtherInfomation
          nameContact="FESTIVAL OFFER"
          nameContactDetail={`${C_NAME_CONTACT_DETAIL}`}
        />
      </div>
      <div className={classes.information3}>
        <COtherInfomation
          nameContact="LET'S BE FRIENDS!"
          nameContactDetail={`Nisi nisi tempor consequat laboris nisi`}
        />

        <div className={classes.information2}>
          <input placeholder="Enter your email address" size="35" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default OtherInformation;
