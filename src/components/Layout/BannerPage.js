import "./BannerPage.css";
const BannerPage = (props) => {
  return (
    <div className="banner-page">
      <h2>{props.text}</h2>
      <p>{props.text}</p>
    </div>
  );
};
export default BannerPage;
