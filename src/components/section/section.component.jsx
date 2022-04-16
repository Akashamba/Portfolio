import { useEffect } from 'react';
import './section.styles.css'
import Aos from 'aos';
import "aos/dist/aos.css";

const Section = ({ data }) => {
  const sectionStyle = {
    backgroundImage: data.options.backgroundImage,
    backgroundColor: data.options.backgroundColor,
    overflowX: "hidden" // Fixes bug from AOS
  }

  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])
  
  return (
    <div id={data.sectionHeader.toLowerCase()} className="section" style={sectionStyle}>
      <div className="section-overlay-bg">
        <h2 className="section-header" data-aos="fade-up">{data.sectionHeader}</h2>
        <div className="section-content">
          {data.items.map((item, i) => {
            const fadeDir = i % 2 === 0 ? 'fade-right' : 'fade-left'

            return (
              <div className="section-item" key={i} data-aos={fadeDir}>
                <h3 className="section-item-main-heading">{item.mainHeading}</h3>
                <h4 className="section-item-sub-heading">{item.subHeading}</h4>
                <h5 className="section-item-sub-sub-heading">{item.subSubHeading}</h5>

                <p className="section-item-description">{item.description}</p>
                {item.link && <a href={item.link[1]} className="section-item-link">{item.link[0]}</a>}
                {i !== data.items.length - 1 && <div className="section-item-divider" />}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Section