let userInfos = [
  { uid: 0, name: "郑十", age: 78, stage: "elder", marrage: 4 },
  { uid: 1, name: "张三", age: 8, stage: "teenager", marrage: 0 },
  { uid: 2, name: "李四", age: 18, stage: "youth", marrage: 0 },
  { uid: 3, name: "王五", age: 28, stage: "youth", marrage: 1 },
  { uid: 4, name: "赵六", age: 38, stage: "youth", marrage: 0 },
  { uid: 5, name: "孙七", age: 48, stage: "middle-aged", marrage: 2 },
  { uid: 6, name: "周八", age: 58, stage: "middle-aged", marrage: 1 },
  { uid: 7, name: "吴九", age: 68, stage: "elder", marrage: 3 }
];

let resInfo = {
  resId: 1,
  resName: "222",
  createTime: "0001-01-01T00:00:00Z",
  updateTime: "0001-01-01T00:00:00Z",
  creatorUid: "",
  updateUid: "",
  relevantUsers: "",
  isPublished: 0,
  count: 0,
  resTitle: "",
  linkType: 0,
  buttonName: "",
  link: "",
  url: "",
  bgType: 0,
  bgColor: "",
  bgPicUrl: "",
  msg: "",
  remark: "",
  isUrgency: 0,
  urgencyMsg: "",
  isUrgencyLink: 0,
  urgencyUrl: ""
};

const mockModel = {
  userInfos,
  resInfo
};

exports = module.exports = mockModel;
