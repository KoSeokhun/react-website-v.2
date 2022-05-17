import React from 'react'
import CardItem from '../CardItem/CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    {/* 추가 */}
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/img-5.jpg')}
                            text='취준생들과 함께 정보를 공유해보세요.'
                            label='취준 커뮤니티'
                            path='/community'
                        />
                        <CardItem
                            src={require('../images/img-6.jpg')}
                            text='내 주변 착한가게들을 검색해보세요.'
                            label='착한가게'
                            path='/store2'
                        />
                        <CardItem
                            src={require('../images/img-7.jpg')}
                            text='와이파이/따릉이/공간을 빌려보세요.'
                            label='와따공'
                            path='/wtg'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards