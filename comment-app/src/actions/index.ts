import * as ActionType from "../constants/ActionType";
import { CommentInterface } from "../model/Comment";

export const initComments = (comments: Array<CommentInterface>) => {
  return {
    type: ActionType.INIT_COMMENTS,
    comments
  };
};

export const addComment = (comment: CommentInterface) => {
  return {
    type: ActionType.ADD_COMMENTS,
    comment
  };
};

export const deleteComment = (commentIndex: number) => {
  return {
    type: ActionType.DELETE_COMMENTS,
    commentIndex
  };
};
