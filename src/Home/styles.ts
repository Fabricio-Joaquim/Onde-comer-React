import Slider from 'react-slick';
import styled from 'styled-components'

export const Container = styled.aside`
background-color: ${(props)=> props.theme.color.background};
width: 360px;
height: 100vh;
overflow-y:scroll;
`;

export const Search = styled.section`
display:flex;
background-color:'#fff';
flex-direction: column;
justify-content: center;
`;

export const Input = styled.input`
width: 330px;
height: 50px;
margin-top: 20px;
`;

export const h2 = styled.h2`
font-Size:30px;
font-family:${props=>props.theme.fonts.regular};
text-align: center;
`

export const wrapper = styled.div`
flex: 1;
`
export const Carousel = styled(Slider)`
.slick-Slider{
    margin-right: 15px;
}
`
export const Title = styled.h1`
color: ${props=>props.theme.color.text};
font-family:${props=>props.theme.fonts.regular};
font-size: 24px;
margin: 16px 0;
line-height:29px;


`
