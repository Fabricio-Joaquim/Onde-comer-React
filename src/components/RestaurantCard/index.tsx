import React from 'react';
import * as Component from './style'
import { Rating, RatingView } from 'react-simple-star-rating'
import Img from '../../assents/restaurante-fake.png'
const RestaurantCard: React.FC = () => {
  return (
      <Component.RestaurantCard>
          <Component.REstaurentInfo>
              <Component.Title>Nomes do</Component.Title>
              <Component.REstaurentInfo>Nomes do</Component.REstaurentInfo>
              <Rating  ratingValue={4} /* Rating Props */ onClick={function (index: number): void {} }/>
              </Component.REstaurentInfo>
        <Component.ImgRest src={Img}/>
      </Component.RestaurantCard>
  )
}

export default RestaurantCard;