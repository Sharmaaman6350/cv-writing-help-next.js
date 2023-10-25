import { useState } from "react";
import styles from "./FAQ.module.css"

interface FAQdataType {
    id: number,
    question: string,
    answer: string
}

export const FAQs = (props: { data: Array<FAQdataType> }) => {

    const [activeId, setActiveId] = useState<number | null>(1);

    const handleToggle = (id: number) => {
        if (activeId === id) {
            setActiveId(null)
        }
        else setActiveId(id)
    }

    return (
        <div className="accordion" id="accordionExample">
            {
                props.data?.map((item) => {
                    return (

                        <div className="accordion-item" key={item?.id}>
                            <h2 className="accordion-header" id="headingOne">
                                <button className={`accordion-button`} onClick={() => handleToggle(item?.id)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    {item.question}
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                {activeId === item?.id && <div className="accordion-body">{item.answer}</div>}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}