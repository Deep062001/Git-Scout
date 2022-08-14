import React from 'react';
import { useSelector } from 'react-redux';
import RepoCard from '../RepoCard/RepoCard';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './RepoView.scss';

const RepoView = () => {
    const userRepos = useSelector((state) => state.githubRepos);
    console.log(userRepos);
    var settings = {
        customPaging: function (i) {
            return (
                <p className='page-no'>
                    {i + 1}
                </p>
            );
        },
        dots: true,
        rows: 6,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        responsive: [{
            breakpoint: 900,
            settings: {
                dots: true,
                arrows: false,
                infinite: true,
                rows: 4,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    };
    return (
        <div className='repoview-outer-div repoview-drk'>
            <Slider {...settings}>
                {userRepos.length === 0 ? <h2>Loading...</h2> :
                    userRepos.map((repo) => {
                        return <RepoCard repo={repo} key={repo.name} />
                    }
                    )
                }
            </Slider>

        </div>
    )
}

export default RepoView