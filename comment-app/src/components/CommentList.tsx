import * as React from "react";
import { Comment } from "./Comment";
import { CommentInterface } from '../model/Comment'
import { initComments, deleteComment } from "../actions";
import { connect } from "react-redux"

type ContainerProps = {
  comments: Array<CommentInterface>;
  initComments: Function;
  onDeleteComment: Function;
};

export class CommentListContainer extends React.Component<ContainerProps, any> {
  componentWillMount() {
    this._loadComments();
  }

  _loadComments() {
    let comments = localStorage.getItem("comments");
    comments = comments ? JSON.parse(comments) : [];
    this.props.initComments(comments);
  }

  handleDeleteComment(index: number) {
    const { comments } = this.props;
    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ];
    localStorage.setItem("comments", JSON.stringify(newComments));
    if (this.props.onDeleteComment) {
      // this.props.onDeleteComment 是connect传进来的，会dispatch一个action
      this.props.onDeleteComment(index);
    }
  }

  render() {
    return (
      <CommentList
        comments={this.props.comments}
        onDeleteComment={this.handleDeleteComment.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    comments: state.comments
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    initComments: (comments: Array<CommentInterface>) => {
      dispatch(initComments(comments))
    },
    onDeleteComment: (commentIndex: number) => {
      dispatch(deleteComment(commentIndex))
    }
  };
};

export const CommentListConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListContainer)

type Props = {
  comments: Array<CommentInterface>;
  onDeleteComment?: Function;
};

export class CommentList extends React.Component<Props, {}> {
  static defaultProps: Props = {
    comments: []
  };

  handleDeleteComment(index: number) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }
  }

  public render() {
    return (
      <div>
        {this.props.comments.map((comment, i) => (
          <Comment
            comment={comment}
            key={i}
            index={i}
            onDeleteComment={this.handleDeleteComment.bind(this)}
          />
        ))}
      </div>
    );
  }
}
