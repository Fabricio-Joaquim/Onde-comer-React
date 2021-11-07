import styled from 'styled-components'

export const RestaurantCard = styled.div`
display: flex;
//justify-content: center;
cursor: pointer;
margin-top: 5px;
padding: 16px;
background-color: #fff;
border-left: px solid transparent;
:hover{
    border-left-color: ${props=>props.theme.color.primary};
    background-color: ${props=>props.theme.color.background};
}
`

export const REstaurentInfo = styled.div`
display: flex;
flex-direction: column;
`

export const Title = styled.span`
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
font-size:24px;
font-weight: bold;
color:${props=>props.theme.color.text};
line-height: 29px;
margin-bottom:10px;
`;

export const Add = styled.span`
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
font-size:16px;
color:${props=>props.theme.color.text};
line-height: 29px;
margin-bottom:10px
`;

export const ImgRest = styled.img`
height: 100px;
width: 100px;
object-fit: cover;
border-radius: 5px;

`
