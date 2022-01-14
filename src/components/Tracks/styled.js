import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: #13192c;
  color: #fff;
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;

  img {
    border-radius: 1rem;
  }
`

export const Title = styled.h2`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 3rem;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 2rem;
`

export const ListItem = styled.li`
  a {
    transition: filter 0.3s;

    &:hover {
      filter: brightness(60%);
    }
  }
`

export const Player = styled.audio`
  width: 9rem;
  height: 4rem;

  &::-webkit-media-controls-panel {
    background-color: #1eb955;
    color: #fff;
  }

  &::-webkit-media-controls-play-button {
    background-color: #20954a;
    border-radius: 50%;
  }

  &::-webkit-media-controls-mute-button,
  &::-webkit-media-controls-timeline-container,
  &::-webkit-media-controls-current-time-display,
  &::-webkit-media-controls-time-remaining-display,
  &::-webkit-media-controls-timeline,
  &::-webkit-media-controls-volume-slider-container,
  &::-webkit-media-controls-volume-slider,
  &::-webkit-media-controls-seek-back-button,
  &::-webkit-media-controls-seek-forward-button,
  &::-webkit-media-controls-fullscreen-button,
  &::-webkit-media-controls-rewind-button,
  &::-webkit-media-controls-return-to-realtime-button,
  &::-webkit-media-controls-toggle-closed-captions-button {
    display: none;
  }
`

export const Name = styled.p`
  font-size: 1.6rem;
  margin: 1rem 0;
`
// &::-webkit-media-controls-panel
// &::-webkit-media-controls-play-button
// &::-webkit-media-controls-current-time-display
// &::-webkit-media-controls-time-remaining-display

//
// &::-webkit-media-controls-rewind-button
// &::-webkit-media-controls-return-to-realtime-button
// &::-webkit-media-controls-toggle-closed-captions-button
