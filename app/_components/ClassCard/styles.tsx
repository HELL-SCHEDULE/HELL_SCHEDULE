import styled from 'styled-components';

export const ClassCardStyle = styled.div`
  width: 100%;
  height: 100%;
  .class-date {
    height: 27%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 600;
    letter-spacing: 1px;
    ::before {
      content: '';
      display: block;
      width: 2px;
      background: #041f86;
      height: 61%;
      margin-right: 3%;
      transform: translateY(7%);
    }
  }

  .class-info-wrapper {
    background: #f4f4f4;
    border-radius: 12px;
    margin-top: 1%;
    padding: 2% 5%;
    height: 65%;
    display: flex;
    gap: 5%;
  }
  .profile-wrapper {
    // width: 17%;
    aspect-ratio: 1/1;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .class-info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .class-name {
      color: #464444;
      font-weight: 600;
    }
    .class-instructor {
      color: #615e5e;
      font-size: 12px;
    }
  }
`;
