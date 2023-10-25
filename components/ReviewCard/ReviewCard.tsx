import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



export const ReviewCard = ({ item }: any) => {
    return (
        <div className="p-4 bg-sept rounded">
            <h4 className="h5 text-primary fw-bold">{item.title}</h4>
            <div className="rating mb-3 d-flex justify-content-between align-items-center">
                <div className="d-flex text-warning">
                    <FontAwesomeIcon icon={faStar} width={20} height={24}/>
                    <FontAwesomeIcon icon={faStar} width={20} height={24}/>
                    <FontAwesomeIcon icon={faStar} width={20} height={24}/>
                    <FontAwesomeIcon icon={faStar} width={20} height={24}/>
                    <FontAwesomeIcon icon={faStar} width={20} height={24}/>
                </div>
                <p className="mb-0 fs-12 fw-bold text-muted">{item.date}</p>
            </div>
            <p>{item.desc}</p>

            <h6 className="text-muted fw-bold">- {item.name}</h6>
            <h6 className="text-muted fw-bold">- {item.institute} | {item.location} </h6>

        </div>
    )
}