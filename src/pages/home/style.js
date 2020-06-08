import styled from 'styled-components';


export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const HomeLeft = styled.div`
  width: 625px;
  margin-right: 15px;
	padding-top: 30px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`
export const HomeRight = styled.div`
  
`
export const TopicWrapper = styled.div`
  .more-topic {
    font-size: 12px;
    color: #d8d8d8;
  }
`
export const TopicItem = styled.div`
  display: inline-flex;
  align-items: center;
  margin:0 10px 10px 0;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  .topic-pic {
    width: 32px;
    height: 32px;
  }
  .title {
    display: block;
    padding: 9px;
    font-size: 14px;
    color: #000;
  }
`
export const ListItem = styled.div`
  display: flex;
  padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
  .pic {
    width: 125px;
		height: 100px;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div`
  padding-right: 20px;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`
export const RecommendWrapper = styled.div`
  margin: 30px 0;
	width: 280px;
`
export const RecommendItem = styled.div`
  width: 280px;
	height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`
export const LoadMore = styled.div`
  color: red;
`

export const Uploader = styled.div`
display: flex;
align-items: center;
margin-bottom: 30px;
padding: 10px 22px;
border: 1px solid #f0f0f0;
border-radius: 6px;
img{
  width: 50px;
  height: 50px;
  padding-right: 10px;
}
.title {
  font-size: 14px;
  color: #333;
}
.desc {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
`
export const WriterWapper = styled.div`

`
export const SearchInfoSwitch = styled.div`
  font-size: 14px;
  color: #969696;
`
export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  .title{
    font-size: 14px;
    color: #969696;
  }
`
export const SearchInfoItem = styled.div`
`