import Image from "next/image";

export const OfferCard = ({ item }: any) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="fetBox p-4 h-100 text-justify">
        <div className="row">
          <div className="col-12">
            <h3 className="h4 fw-bolder text-warning mb-3">{item?.title}:</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            {item?.icon?.location ? (
              <Image
                src={item?.icon?.location}
                width={100}
                height={100}
                className="img-fluid"
                alt=""
              />
            ) : item?.icon === null ? "" : (
              <Image
                src={item?.icon}
                width={100}
                height={100}
                className="img-fluid"
                alt=""
              />
            )}
          </div>
          <div className="col-10">
            <div dangerouslySetInnerHTML={{__html : item.content}} className="mb-0"/>
          </div>
        </div>
      </div>
    </div>
  );
};
