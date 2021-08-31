import styled, { css } from 'styled-components'

export const Button = styled.button`
  border-radius: 3px;
  font-weight:bold;
  margin-bottom: 1.5em;
  padding: 0.5em 1em;
  border:none;

    ${props =>
        props.primary &&
        css`
            background: black;
            color: white;
    `};

    ${props =>
        props.secondary &&
        css`
            background: none;
            border: 2px solid blue;
            color: blue;
        `};
`
export const EmpCard = styled.div`
    border: 1px solid;
    margin:5px;
    width: 20vw
  `
export const EmpList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    `
