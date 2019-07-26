export interface CommentInterface {
    username: string; // 评论人
    content: string; // 评论内容
    createdTime: number; // 评论时间，记录的是getTime()的时间，存为number类型便于计算
  }