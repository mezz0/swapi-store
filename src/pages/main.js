import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import * as vars from '../export'
import { useStoreState, useStoreActions } from 'easy-peasy'

const Wrapper = styled.div`
  padding: 20px;
  color: ${vars.colors.white};
`

const StyledButton = styled.button`
  display: block;
  margin: auto;
`

const StyledImg = styled.img`
  display: block;
  margin: auto;
  max-width: ${props => props.fetching ? 300 : 0}px;
  opacity: ${props => props.fetching ? 1 : 0};
  transition: opacity .5s ease, max-width .5s ease;
`

const StarshipWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  opacity: ${props => props.data ? 1 : 0};
  max-height: ${props => !props.fetching ? 400 : 0}px;
  overflow: hidden;
  transition: max-height .5s ease;
`

const PlayerCard = styled.div`
  width: calc(50% - 20px);
  border: 2px solid ${vars.colors.white}50;
  border-radius: 10px;
  color: ${vars.colors.white};
  text-align: center;

  h1 {
    font-size: 20px;
  }
`

const Attributes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  p {
    font-size: 16px;
    width: 100%;
    margin: 10px; padding: 5px;
    background-color: ${vars.colors.white}70;
    border-radius: 10px;

    span {
      display: block;
      font-weight: 600;
    }
  }
`

function Main() {
  const store = useStoreState(state => state)
  const data = store.fetchData.data
  const getData = useStoreActions(actions => actions.fetchData.fetchData)
  const isFetching = store.fetchData.isFetching
  const handleClick = url => getData(url)

  const [starShipOne , setStarShipOne] = useState(null)
  const [starShipTwo , setStarShipTwo] = useState(null)
  const [compareAttr , setCompareAttr] = useState(null)

  useEffect(() => {
    if (data) {
      let randomnumOne = +(Math.random() * data.length - 1).toFixed()
      let randomnumTwo = +(Math.random() * data.length - 1).toFixed()
      let shipOne = data[randomnumOne]
      let shipTwo = data[randomnumTwo !== randomnumOne ? randomnumTwo : +(Math.random() * data.length - 1).toFixed()]
      setStarShipOne(shipOne)
      setStarShipTwo(shipTwo)
    }
  }, [data])

  return (
    <Wrapper>
      {isFetching === null && <StyledButton onClick={() => handleClick(`https://swapi.co/api/starships/?format=json`)}>fetch data</StyledButton>}
      {isFetching && <p>{isFetching ? <StyledImg src={vars.images.loading} alt={vars.config.altText} fetching={isFetching} /> : 'done fetching'}</p>}
      {data &&
        <>
          <StarshipWrapper data={data} fetching={isFetching}>
            {starShipOne ? 
              <PlayerCard>
                <h1>{starShipOne.name}</h1>
                <Attributes>
                  <p onClick={() => setCompareAttr('starship_class')}>
                    <span>Class:</span>
                    {starShipOne.starship_class}
                  </p>
                  <p onClick={() => setCompareAttr('max_atmosphering_speed')}>
                    <span>Speed:</span>
                    {starShipOne.max_atmosphering_speed}
                  </p>
                  <p onClick={() => setCompareAttr('cost_in_credits')}>
                    <span>Cost:</span>
                    {starShipOne.cost_in_credits}
                  </p>
                  <p onClick={() => setCompareAttr('passengers')}>
                    <span>Passengers:</span>
                    {starShipOne.passengers}
                  </p>
                  {starShipOne.number_of_films ? 
                    <p onClick={() => setCompareAttr('number_of_films')}>
                      <span>No. Films:</span>
                      {starShipOne.number_of_films.length}
                    </p>
                  : ''}
                </Attributes>
              </PlayerCard>
              : <p>nothing</p>
            }
            {starShipTwo ? 
              <PlayerCard>
                <h1>{starShipTwo.name}</h1>
                <Attributes>
                  <p onClick={() => setCompareAttr('starship_class')}>
                    <span>Class:</span>
                    {starShipTwo.starship_class}
                  </p>
                  <p onClick={() => setCompareAttr('max_atmosphering_speed')}>
                    <span>Speed:</span>
                    {starShipTwo.max_atmosphering_speed}
                  </p>
                  <p onClick={() => setCompareAttr('cost_in_credits')}>
                    <span>Cost:</span>
                    {starShipTwo.cost_in_credits}
                  </p>
                  <p onClick={() => setCompareAttr('passengers')}>
                    <span>Passengers:</span>
                    {starShipTwo.passengers}
                  </p>
                  {starShipTwo.number_of_films ? 
                    <p onClick={() => setCompareAttr('number_of_films')}>
                      <span>No. Films:</span>
                      {starShipTwo.number_of_films.length}
                    </p>
                  : ''}
                </Attributes>
              </PlayerCard>
              : <p>nothing</p>
            }
          </StarshipWrapper>
          <StarshipWrapper data={data} fetching={isFetching}>
            <p>
            {compareAttr ? 
              (
                +starShipOne[compareAttr] > +starShipTwo[compareAttr] ?
                  `${starShipOne.name} is the winner`
                : `${starShipTwo.name} is the winner`
              )
              : 'No attributes selected'
            }
            </p>
          </StarshipWrapper>
        </>
      }
    </Wrapper>
  )
}

export default Main





















