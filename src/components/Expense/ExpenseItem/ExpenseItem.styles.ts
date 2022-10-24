import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const ExItem = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 12px;
  background-color: #4b4b4b;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    transform: translateX(0.2rem) translateY(-0.2rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.9);
  }

  .expense__item--date {
    display: flex;
    flex-direction: column;
    width: 5.5rem;
    height: 5.5rem;
    border: 1px solid #ececec;
    background-color: #2a2a2a;
    color: white;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
  }

  .expense__item--day {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .expense__item--month {
    font-size: 1rem;
    font-weight: bold;
  }

  .expense__item--year {
    font-size: 1rem;
  }

  .expense__item--description {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;

    h2 {
      color: #3a3a3a;
      font-size: 1.5rem;
      flex: 1;
      margin: 0 1rem;
      color: white;
    }
  }

  .expense__item--price {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    background-color: var(--secondary-color);
    border: 1px solid white;
    padding: 0.5rem 1rem;
    border-radius: 12px;
    text-align: center;
  }

  @media (min-width: 580px) {
    .expense-item__description {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      flex: 1;
    }

    .expense-item__description h2 {
      font-size: 1.25rem;
    }

    .expense-item__price {
      font-size: 1.25rem;
      padding: 0.5rem 1.5rem;
    }
  }
`;
