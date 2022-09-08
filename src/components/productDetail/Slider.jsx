import React, { useState } from 'react'
import '../../css/slider.css'
const Slider = ({ imgs }) => {

    const [countSlide, setCountSlide] = useState(1)

    const percent = 100 / imgs?.length;

    const listStyles = {
        width: `${100 * imgs?.length}%`,
        transform: `translateX(-${(countSlide - 1) * percent}%)`
    }


    const handleLeft = () => {

        setCountSlide(countSlide - 1)
    }
    const handleRigth = () => {
        setCountSlide(countSlide + 1)
    }


    return (
        <div className="slider_cont">
            <div className='slider'>
                <div className="slider_btn l">
                    <button disabled={countSlide <= 1} onClick={handleLeft}>
                    &#60;
                    </button>
                </div>
                <div className="slider_btn r">
                    <button disabled={countSlide >= imgs?.length} onClick={handleRigth}>
                    &#62;
                    </button>
                </div>

                <ul className='slider_list' style={listStyles}>
                    {
                        imgs?.map(img => (
                            <li key={img}>
                                <img src={img} alt="" />
                            </li>
                        ))
                    }
                </ul>
            </div>
            <ul className='img_ul'>
                {
                    imgs?.map((img, i) => (
                        <li
                            key={img}
                            className={countSlide === i + 1 ? 'selected' : ''}

                        >
                            <div className="img_ul_contImg">
                                <img
                                    src={img}
                                    alt=""
                                    onClick={() => setCountSlide(i + 1)}
                                />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Slider