import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const AboutAccordion = ( { title, content } ) => {

    const [isActive, setIsActive] = useState(false);
    return (
        <li>
            <button className="aboutBtn" onClick={() => setIsActive(!isActive)}>
                <p>{title}</p>
                {
                    isActive
                        ? <FontAwesomeIcon icon={faChevronUp} />
                        : <FontAwesomeIcon icon={faChevronDown} />

                }
            </button>
            {
                isActive && <p>{content}</p>
            }
        </li>
    )
}

export default AboutAccordion;