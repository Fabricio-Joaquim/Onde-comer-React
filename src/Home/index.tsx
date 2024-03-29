import React, { useState } from 'react'
import * as Component from './styles'
import logo from '../assents/Logo.png'
import Slider from 'react-slick'
import Img from '../assents/restaurante-fake.png'
import Modal from '../components/Modal'
interface Props {
    
}
import Card from '../components/ImageCard'
import RestaurantCard from '../components/RestaurantCard'
import Maps from '../components/Maps'
export const Home = (props: Props) => {
    
    const [Query, setQuery] = useState<string>('')
    const [ModalOpen, setModalOpen] = useState(false)
    const [Pesquisa, setPesquisa] = useState<string>('')
    
    function handle(event:any){
        event.key==='Enter'?setQuery(Pesquisa):null
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true

    }
    return (
        <Component.wrapper>
            <Component.Container>
                <img src={logo} alt="logotipo do site" width={345}/>
                <Component.Search/>
                {/* <Component.h2>Pesquisa</Component.h2> */} 
                <Component.Input
                    type='text'
                    placeholder='Digitar Restautante'
                    value={Pesquisa} 
                    onKeyPress={handle}
                    onChange={event=>setPesquisa(event.target.value)}
                />
                <Component.h2>Na sua Área</Component.h2> 
                <Component.Carousel {...settings}>
                <div>
                    <Card photo={Img} title="irir"/>
                </div>
                <div>
                    <Card photo={Img} title="irir"/>
                </div>
                <div>
                <Card photo={Img} title="irir"/>
                </div>
                <div>
                <Card photo={Img} title="irir"/>
                </div>
                <div>
                <Card photo={Img} title="irir"/>
                </div>
                <div>
                <Card photo={Img} title="irir"/>
                </div>
                <div>
                <Card photo={Img} title="irir"/>
                </div>
                <div>
                <Card photo={Img} title="irir"/>
                </div>
                <div>
                <Card photo={Img} title="irir"/>
                </div>
                </Component.Carousel>
                <RestaurantCard></RestaurantCard>
            </Component.Container>
            <Maps query={Query}/>
        <Modal open={ModalOpen} children={undefined} onClose={()=>{setModalOpen(!ModalOpen)}}></Modal>
        </Component.wrapper>
    )
}
