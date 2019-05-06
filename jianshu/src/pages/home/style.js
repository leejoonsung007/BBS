import styled from "styled-components";

export const HomeWraper = styled.div`
  width: 960px;
  margin 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 635px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-lef: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  line-height: 32px;
  padding-right: 10px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    height: 32px;
    width: 40px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-img {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .list-title {
    line-height: 27px;
    font-size: 18ps;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 18px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radis: 3px;
  height: 300px;
  line-height: 300px;
`;

export const WriterItem = styled.li`
  line-height: 20px;
  list-style: none;
  font-size: 13px;
  color: #333;
  .writer-avatar {
    width: 50px;
    height: 50px;
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 50px;
  }
  .writer-info {
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
    text-decoration: none;
  }
`;
