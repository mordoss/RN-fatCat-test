import styled from 'styled-components/native';

const RocketCard = styled.View`
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 20px;
  overflow: hidden;
  align-items: center;
`;

const RocketCardInfo = styled.View`
  background-color: white;
  margin-top: -24px;
  padding: 24px;
  align-items: stretch;
  border-radius: 20px;
`;

const MembersCard = styled.View`
  border: 1px solid black;
`;

const CardItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  padding-bottom: 8px;
  border-bottom-color: gray;
  border-bottom-width: 1px;
`;

const ButtonLink = styled.Pressable`
  background-color: hotpink;
  padding: 8px;
  margin-top: 24px;
  border-radius: 10px;
`;

export { RocketCard, MembersCard, RocketCardInfo, CardItem, ButtonLink };
