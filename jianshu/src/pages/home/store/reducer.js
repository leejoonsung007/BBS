import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/27C9/production/_103158101_tha.jpg"
    },
    {
      id: 2,
      title: "手绘",
      imgUrl:
        "https://ichef.bbci.co.uk/news/936/cpsprodpb/15EB6/production/_106628798_mediaitem106628795.jpg"
    }
  ],
  articleList: [
    {
      id: 1,
      title: "旅游拍照10个通用姿势，拒绝游客照，拍照简单又自然",
      desc:
        "旅行拍照，不知道大家有没什么经验，但是，据小编所知，很多人出去旅游一趟，拍回来的照片往往都是游客照，所以，今天小编才就给大家提供,一些旅行的通用拍",
      imgUrl:
        "https://ichef.bbci.co.uk/news/660/cpsprodpb/1691A/production/_106624429_mediaitem106624428.jpg"
    },
    {
      id: 2,
      title: "我娶了一个贪财的老婆(二)",
      desc:
        "有一天，我下班回来，吃了饭，就在院里洗衣服，我的，以及她的。 不一会，看到有个人满头大汗的跑过来，问我老婆道:“阿姨，你看到我手机了吧...",
      imgUrl:
        "https://ichef.bbci.co.uk/news/736/cpsprodpb/3482/production/_106624431_mediaitem106624430.jpg"
    },
    {
      id: 3,
      title: "表哥的奇葩事",
      desc:
        "1 提起这个表哥，是门远亲。因为他的人生有点故事，我今天写写他。 表哥叫文亮，兄弟姐妹五个，大行排三，小行二。平常都叫他二哥。因为孩子多，家里比...",
      imgUrl:
        "https://ichef.bbci.co.uk/news/872/cpsprodpb/7CE4/production/_106627913_darkeford.jpg"
    }
  ],
  recommendList: [
    {
      id: 1,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    },
    {
      id: 2,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    },
    {
      id: 3,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
    },
    {
      id: 4,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
    }
  ],
  writerList: [
    {
      id: 1,
      imgUrl:
        "https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png",
      name: "三儿王屿"
    },
    {
      id: 2,
      imgUrl:
        "https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png",
      name: "无限猴子"
    },
    {
      id: 3,
      imgUrl:
        "https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png",
      name: "徐林Grace"
    },
    {
      id: 4,
      imgUrl:
        "https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png",
      name: "念远怀人"
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
