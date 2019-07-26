import * as React from "react";
import { CommentInterface } from "../model/Comment";


type Props = {
  comment: CommentInterface;
  onDeleteComment: Function;
  index: number;
};

type State = {
  timeString: string;
};

export class Comment extends React.Component<Props, State> {
  _timer: number;

  constructor(props: Props) {
    super(props);
    this.state = { timeString: "" };
    this._timer = 0;
  }

  componentWillMount() {
    this._updateTimeString();
    this._timer = setInterval(this._updateTimeString.bind(this), 5000);
  }

  componentWillUnmount() {
    if (this._timer) {
      clearInterval(this._timer);
    }
  }

  _updateTimeString() {
    const comment = this.props.comment;
    const duration = (+Date.now() - comment.createdTime) / 1000;
    this.setState(
      Object.assign({}, this.state, {
        timeString:
          duration > 60
            ? `${Math.round(duration / 60)}minutes ago`
            : `${Math.round(Math.max(duration, 1))}seconds ago`
      })
    );
  }

  _getProcessedContent(contetn: string) {
    return contetn
      .replace(/&/g, "&amp")
      .replace(/</g, "&lt")
      .replace(/>/g, "&gt")
      .replace(/"/g, "&quot")
      .replace(/'/g, "&#039")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>');
  }

  handleDeleteComment() {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index);
    }
  }

  public render() {
    return (
      <div className="comment">
        <div className="comment-user">
          <span className="comment-username">
            {this.props.comment.username}
          </span>
          ：
        </div>
        <p dangerouslySetInnerHTML={{
            __html: this._getProcessedContent(this.props.comment.content)
        }}/>
        <span className="comment-createdtime">{this.state.timeString}</span>
        <span
          onClick={this.handleDeleteComment.bind(this)}
          className="comment-delete"
        >
          删除
        </span>
      </div>
    );
  }
}
