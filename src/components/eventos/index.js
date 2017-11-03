import styled from 'styled-components'
import React from 'react'

const EventsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    padding: 20px 0px;
    ${props => {
      if (props.isTablet) {
        return `@media screen and (max-width: 1030px) {
          width: 100%;
        }`
      }
    }}
`
const Event = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #D2D3D2;
    border-top: 1px solid #D2D3D2;
    margin-bottom: 30px;
    padding: 10px 0px;
    @media screen and (max-width:587px){
      flex-direction: column;
      align-items: left;
    }
`
const DateEvent = styled.div`
    background-color: red;
    width: 10%;
    display: flex;
    flex-direction: column;
    padding: 15px 10px;
    @media screen and (max-width: 587px){
      width: 20%;
      padding: 5px;
  
    }
`
const EventTitle = styled.div`
    width: 90%;
    padding-left: 20px;
    font-size: 28px;
    font-family: 'Druk Text Web';
    @media screen and (max-width: 587px){
      width: 100%;
      padding: 15px 0px 0px 0px;
      text-align: left;
      font-size: 1.5em;
    }
    @media screen and (max-width:380px){
      font-size: 20px;
    }

`
const TextDate = styled.p`
  text-align: center;
  font-size: ${props => props.isDay ? '28px' : '24px'};
  font-family: 'Druk Text Web';
  color: #FFF;
`
export const EventList = (props) => {
  const {data} = props
  return (
    <EventsContainer isTablet={props.isTablet}>
      {
        data.map((event, i) => {
          return (
            <Event>
              <DateEvent>
                <TextDate isDay>{event.day}</TextDate>
                <TextDate>{event.month}</TextDate>
              </DateEvent>
              <EventTitle>
                <p>{event.title}</p>
              </EventTitle>
            </Event>
          )
        })
      }
    </EventsContainer>
  )
}
