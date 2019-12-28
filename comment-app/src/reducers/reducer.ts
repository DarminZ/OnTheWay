import * as ActionType from "../constants/ActionType";
import { CommentInterface } from "../model/Comment";

interface State {
  comments?: Array<CommentInterface>;
  comment?: CommentInterface;
}

export function reducer(state: State, action: any) {
  if (!state) {
    state = { comments: [] };
  }
  switch (action.type) {
    case ActionType.INIT_COMMENTS:
      return { comments: action.comments };
    case ActionType.ADD_COMMENTS:
      return { comments: [...state.comments, action.comment] };
    case ActionType.DELETE_COMMENTS:
      return {
        comments: [
          ...state.comments.slice(0, action.commentIndex),
          ...state.comments.slice(action.commentIndex + 1)
        ]
      };
    default:
      return state;
  }
}
