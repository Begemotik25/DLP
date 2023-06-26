import loginImgV from "../assets/images/login-bg-v.jpg";
import loginImgH from "../assets/images/login-bg-h.jpg";

export const getLoginImageByWindowWidth = (windowWidth) => {
  if (windowWidth > 1000)
    return <img src={loginImgH} alt="Login img" height={720} width={1050} />;
  if (windowWidth > 800 && windowWidth <= 1000) {
    return <img src={loginImgV} alt="Login img" height={600} width={450} />;
  }
  return;
};
