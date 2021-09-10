import React from "react";
import AlbumList from "./components/AlbumList";
import "./style.scss";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Mixtape Mỹ Nhân",
      thumbnaiUrl:
        "https://photo-playlist-zmp3.zadn.vn/s3/v3/radio?src=HavwqN7EYmrDGr6VBegSG044G8DtZC5I0GGErM6Cn5KD0WY7Dzl2Kbm5NzGssSK0N5DSWJNSb0bPQ0kADRMG3Ljl38qixj9QLobUXcUicsbT8bkjORlN9nep5k4cgfSoK7GMjIQgbsPATWpZ8wcJDKXt2B5t-PLb7o49it-lbs4I9GdfVgt6Tqqs3-Ku_yqy3tyy_Z_p-Zf48dRfSh-zArXx9hGulxqz0p1njMkvvcS6PYhZExIoO0PcUk8-lUSq0pTyvMA-ZMGFP17aORoBPWjvJwOriCqq63uRy6FlbmtRlu2Tp3pjZ_lrRntMPx78hROj1G&cv=1&size=thumb/240_240",
    },
    {
      id: 2,
      name: "Mixtape Mỹ Nhân",
      thumbnaiUrl:
        "https://photo-playlist-zmp3.zadn.vn/s3/v3/radio?src=HavwqN7EYmrDGr6VBegSG044G8DtZC5I0GGErM6Cn5KD0WY7Dzl2Kbm5NzGssSK0N5DSWJNSb0bPQ0kADRMG3Ljl38qixj9QLobUXcUicsbT8bkjORlN9nep5k4cgfSoK7GMjIQgbsPATWpZ8wcJDKXt2B5t-PLb7o49it-lbs4I9GdfVgt6Tqqs3-Ku_yqy3tyy_Z_p-Zf48dRfSh-zArXx9hGulxqz0p1njMkvvcS6PYhZExIoO0PcUk8-lUSq0pTyvMA-ZMGFP17aORoBPWjvJwOriCqq63uRy6FlbmtRlu2Tp3pjZ_lrRntMPx78hROj1G&cv=1&size=thumb/240_240",
    },
    {
      id: 3,
      name: "Mixtape Mỹ Nhân",
      thumbnaiUrl:
        "https://photo-playlist-zmp3.zadn.vn/s3/v3/radio?src=HavwqN7EYmrDGr6VBegSG044G8DtZC5I0GGErM6Cn5KD0WY7Dzl2Kbm5NzGssSK0N5DSWJNSb0bPQ0kADRMG3Ljl38qixj9QLobUXcUicsbT8bkjORlN9nep5k4cgfSoK7GMjIQgbsPATWpZ8wcJDKXt2B5t-PLb7o49it-lbs4I9GdfVgt6Tqqs3-Ku_yqy3tyy_Z_p-Zf48dRfSh-zArXx9hGulxqz0p1njMkvvcS6PYhZExIoO0PcUk8-lUSq0pTyvMA-ZMGFP17aORoBPWjvJwOriCqq63uRy6FlbmtRlu2Tp3pjZ_lrRntMPx78hROj1G&cv=1&size=thumb/240_240",
    },
  ];

  return (
    <div className="header">
      <h2 className="header__title">Bạn có thể thích </h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
