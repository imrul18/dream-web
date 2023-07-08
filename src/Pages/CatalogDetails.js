import React from "react";
import { useSelector } from "react-redux";
import CatalogsInfoDetails from "../Component/CatalogsInfo/CatalogsInfoDetails";
import CallerTunePopup from "../Component/Modal/CallerTunePopup";
import Approve from "../Component/assets/icons/S.svg";
import RingtoneImg from "../Component/assets/icons/ringtone.svg";

function CatalogDetails() {
  const { cardDetails } = useSelector((state) => state?.data);
  return (
    <>
      <div className="catalog_details">
        <div className="card">
          <img src={cardDetails?.images?.image_download_url} alt="" />
          <div className="c_top_info">
            <div className="icon-list">
              <img src={Approve} className="ringtone" alt="" />
              <img src={RingtoneImg} className="ringtone" alt="" />
            </div>
            <h2 className="mt-3">{cardDetails?.title} </h2>
            <p className="mt-2">By {cardDetails?.artists[0]?.artist?.title}</p>
            <br />
            {cardDetails?.files && cardDetails?.files?.file_download_url && (
                    <video controls name="media" width="200%" height={60}>
                      <source
                        src={cardDetails?.files?.file_download_url}
                        type="audio/mpeg"
                      />
                    </video>
                  )}
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <CatalogsInfoDetails data={cardDetails} />
        <div className="btn_group mt-4">
          <CallerTunePopup />
          {/* <button className="btn_s">Edit</button> */}
        </div>
      </div>
    </>
  );
}

export default CatalogDetails;
