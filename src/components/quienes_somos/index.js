import styled from 'styled-components'
import React from 'react'

export const MainSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    padding: ${props => props.isBig ? '90px 100px' : '0px'};
`
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    background-color: ${props => props.isGrey ? 'lightgrey' : '#FFF'};
    align-items: ${props => props.center ? 'center' : 'flex-start'};
    text-align: center;
`
export const BackBannerContent = styled.div`
    background-image: url(${props => props.image ? props.image : 'assets/img/soyparte_background.jpg'});
    width: 100%;
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    align-items: ${props => props.center ? 'center' : 'flex-start'};
    text-align: center;
`
export const ContentText = styled.p`
    font-size: ${props => props.isBig ? '30px' : '22px'};
    color: ${props => props.isBig ? 'darkred' : 'black'};
    padding: ${props => props.isBig ? '15px 0px' : '0px'};
    font-weight: 200;
    font-family: 'Druk Text Web';
`
export const BottomBanner = styled.div`
    flex: 1;
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    padding: ${props => props.isBig ? '90px 0px' : '0px'};
`
