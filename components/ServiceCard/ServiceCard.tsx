import { useState } from "react";
import styles from "./service.module.css";

interface ServiceDataType {
  id: number;
  title: string;
  content: string;
}

export const ServiceCard = (props: { data: Array<ServiceDataType> }) => {
  const [active, setactive] = useState<number>(1);

  return (
    <>
      <div className="d-flex tabgs">
        <div
          className="nav flex-column nav-pills vjCf bg-sept me-3"
          role="tablist"
          aria-orientation="vertical"
        >
          {props.data?.map((item: ServiceDataType, index) => (
            <button
              key={index}
              className={` nav-link ${
                active === item.id
                  ? "active bg-warning rounded-0 text-dark fw-bolder "
                  : ""
              }`}
              onClick={() => setactive(item?.id)}
            >
              {item?.title}
            </button>
          ))}
        </div>
        <div
          className="tab-content border border-3 w-100 p-4"
          id="v-pills-tabContent"
        >
          <div className="tab-pane fade show active" role="tabpanel">
            <p>{props.data.find((item) => item.id === active)?.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};
