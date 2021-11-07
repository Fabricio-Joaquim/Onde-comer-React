import { ImageListProps } from '@material-ui/core';
import React from 'react';
import {Card, Title} from './style'
interface props{photo:string, title:string}
const ImageCard = ({photo,title}:props) => {
    return (
      <Card photo={photo}>
        <Title>{title}</Title>
      </Card>

  )
}

export default ImageCard;