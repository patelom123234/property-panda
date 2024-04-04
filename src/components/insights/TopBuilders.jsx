import { SellingHeader } from './TopSellingPlace';
import Ahemdabad from '../../assets/ahmedabad.png';
import styles from './TopBuilders.module.css';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Autoplay]);

const data = [ 
    {
        b_name:"Emerald 44",
        b_image: Ahemdabad,
        b_project: '9 project'
    },
    {
        b_name:"Emerald 44",
        b_image: Ahemdabad,
        b_project: '9 project'
    },
    {
        b_name:"Emerald 44",
        b_image: Ahemdabad,
        b_project: '9 project'
    },
    {
        b_name:"Emerald 44",
        b_image: Ahemdabad,
        b_project: '9 project'
    },
    {
        b_name:"Emerald 44",
        b_image: Ahemdabad,
        b_project: '9 project'
    },
    {
        b_name:"Emerald 44",
        b_image: Ahemdabad,
        b_project: '9 project'
    },
    {
        b_name:"Emerald 44",
        b_image: Ahemdabad,
        b_project: '9 project'
    },
    {
        b_name:"Emerald 44",
        b_image: Ahemdabad,
        b_project: '9 project'
    },
];

export default function TopBuilders() {
    return (
        <div className={styles.builders_full}>
            <div className={styles.builders}>
                <SellingHeader heading="Top Builders" subHeading="Unlocking Real Estate Potential in Every Neighborhood" />
                <BuildersContainer />
            </div>
        </div>
    );
}

function BuildersContainer() {
    return (
        <div className={styles.builderscontainer}>
            <Swiper
                spaceBetween={30}
                breakpoints={{
                  100: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    300: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },468: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 5.8,
                    },
                }}
                autoplay={{ delay: 3000 }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <BuilderDiv b_image={item.b_image} b_name={item.b_name} b_project={item.b_project} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

function BuilderDiv({ b_image, b_name, b_project }) {
    return (
        <div className={styles.builderdiv}>
            <img src={b_image} alt={b_name} className={styles.bimage} />
            <div className={styles.np_container}>
                <p className={styles.bname}>{b_name}</p>
                <p className={styles.bproject}>{b_project}</p>
            </div>
        </div>
    );
}

BuilderDiv.propTypes = {
    b_image: PropTypes.string.isRequired,
    b_name: PropTypes.string.isRequired,
    b_project: PropTypes.string.isRequired,
};
