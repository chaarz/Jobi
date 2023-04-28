import React from 'react'
import AboutAccordion from '../../utils/AboutAccordion';
import { Link } from 'react-router-dom';
import images from '../../utils/images';

const About = () => {

    const accordionData = [
        {
            title: 'Seamless Search',
            content: `It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.`
        },
        {
            title: 'Hire top talents',
            content: `It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.`
        },
        {
            title: 'Protected Payments, every time',
            content: `It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.`
        }
    ];

    return (
        <section className='about wrapper' id='about'>
            <div className='aboutTextContainer'>
                <div>
                    <p>Why choose us ?</p>
                    <h2>World of talent at your fingertips</h2>
                </div>
                <ul>
                    {
                        accordionData.map(({ title, content }) => (
                            < AboutAccordion title={title} content={content} key={title} />
                        ))
                    }
                </ul>
                <Link to='/' className='button'>Learn more</Link>
            </div>
            <div className='aboutImgContainer'>
                <img src={images.about} alt="" />
            </div>
        </section>
    )
}

export default About