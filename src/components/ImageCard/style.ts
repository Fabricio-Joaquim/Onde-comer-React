
import styled, { AnyStyledComponent } from "styled-components"

interface props {photo:string
}
export const Card = styled.div`
display: flex;
padding: 5px;
justify-content: center;
width:90px;
height:90px;
border-radius:6px;
background-image: url(${(props:props) => props.photo});
`;

export const Title = styled.span`
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
color:#ffffff;
font-size:15px;
`