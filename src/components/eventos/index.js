import styled from 'styled-components'
import React from 'react'

const EventsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    padding: 20px 0px;
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
`
const DateEvent = styled.div`
    background-color: red;
    width: 10%;
    display: flex;
    flex-direction: column;
    padding: 15px 10px;
`
const EventTitle = styled.div`
    width: 90%;
    padding-left: 20px;
    font-size: 28px;
    font-family: 'Druk Text Web';

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
    <EventsContainer>
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
