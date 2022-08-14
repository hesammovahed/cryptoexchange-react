
import TopCoins from './TopCoins';
const Home = () => {
  return (
    <>
      <section className="title container" dir="ltr">
        <div className="title__image">
          <img src="/images/iphone-12-mini--black.png" alt="iphone 12 mini" />
        </div>
        <div className="title__text">
          <div className="title__wellcome">
            <h2>محلی برای اگاهی از تغیرات قیمت ها برای فارسی زبانان</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              hic optio eos corporis libero aspernatur voluptas. Eligendi nihil
              omnis debitis.
            </p>
          </div>
          <div className="title__install-banner-app">
            <img
              className="title__android"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
              alt="appdownload"
            />
            <img
              className="title__apple"
              src="https://www.pngmart.com/files/10/Download-On-The-App-Store-PNG-Transparent-Image.png"
              alt="appdownload"
            />
          </div>
        </div>
      </section>
      <TopCoins />
    </>
  );
};

export default Home;
