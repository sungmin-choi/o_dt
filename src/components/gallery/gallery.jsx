import style from './gallery.module.css';
import React from 'react';

const Gallery = (props) => {
    return(
        <div className={[`${style.sliderShow} ${style.middle}`]}>
            <div className={style.slides}>
                <input type="radio" name="r" className={[`${style.r1} ${style.r}`]} id="r1"/>
                <input type="radio" name="r" className={[`${style.r2} ${style.r}`]} id="r2"/>
                <input type="radio" name="r" className={[`${style.r3} ${style.r}`]} id="r3" />
                <input type="radio" name="r" className={[`${style.r4} ${style.r}`]} id="r4"/>
                <input type="radio" name="r" className={[`${style.r5} ${style.r}`]} id="r5" />
                <div className={[`${style.slide} ${style.s1}`]}>
                <img src="/image/3.jpg" alt="" />
                </div>
                <div className={style.slide}>
                <img src="/image/2.jpg" alt="" />
                </div>
                <div className={style.slide}>
                <img src="/image/4.jpg" alt="" />
                </div>
                <div className={style.slide}>
                <img src="/image/5.jpg" alt="" />
                </div>
                <div className={style.slide}>
                <img src="/image/7.jpg" alt="" />
                </div>
            <div className={style.navigation}>
                <label for="r1" className={style.bar}></label>
                <label for="r2" className={style.bar}></label>
                <label for="r3" className={style.bar}></label>
                <label for="r4" className={style.bar}></label>
                <label for="r5" className={style.bar}></label>
            </div>
                
            </div>

        </div>
    )
}

export default Gallery;