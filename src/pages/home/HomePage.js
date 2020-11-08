import React from 'react';
import './home-page.css';

import HomePageSection from '../../components/homepage-section/HomePage.Section';

class HomePage extends React.Component{

    constructor(){
        super();

        this.state = {
            sections: [
                {
                title: 'Womens',
                imageUrl: 'https://i.ibb.co/sJG8hWX/13.jpg',
                id: 1,
                linkUrl: 'womens'
                },
                {
                title: 'Local Pickup',
                imageUrl: 'https://i.ibb.co/ZByc3Cx/36.jpg',
                id: 2,
                linkUrl: 'local pickup'
                }
            ]
        }
    }

    render(){
        return(
            <div className="homePage">
                {
                    this.state.sections.map(({ id, ...otherProps}) => (
                        <HomePageSection key={id} {...otherProps} />
                    ))
                }

            </div>
        )
    }
}

export default HomePage;