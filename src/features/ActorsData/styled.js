import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1400px;
  width: 90%;
  margin: 42px auto;
  `;

export const Description = styled.article`
  background: rgba(255, 255, 255, 1);
  min-height: 644px;
  padding: 40px;
  margin: auto;
  width: 100%;
`;

export const Photo = styled.img`
  width: 399px;
  height: 564px;
  border-radius: 5px;
  float: left;
  margin: 0 40px 30px 0;
`;

export const Name = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;
  margin: 0 0 24px 0;
`;

export const Birth = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  margin-bottom: 24px;
`;

export const Date = styled.p`
  margin: 0;
`;

export const Place = styled.p`
  margin: 0;
`;

export const Text = styled.span`
  color: rgba(116, 120, 139, 1);
  margin-right: 6px;
`;

export const Biographi = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  margin: 0;
`;