import * as React from "react";
import { CommentInterface } from "../model/Comment";
import { connect } from "react-redux";
import { addComment } from "../actions";

type ContainerProp = {
  comments: Array<CommentInterface>;
  onSubmit: Function;
};

type ContainerState = {
  username: string;
};

class CommentInputContainer extends React.Component<
  ContainerProp,
  ContainerState
> {
  constructor(props: ContainerProp) {
    super(props);
    this.state = { username: "" };
  }

  componentWillMount() {
    this._loadUsername();
  }

  _loadUsername() {
    const username = localStorage.getItem("username");
    if (username) {
      this.setState(Object.assign({}, this.state, { username }));
    }
  }

  _saveUsername(username: string) {
    localStorage.setItem("username", username);
  }

  handleSubmitComment(comment: CommentInterface) {
    if (!comment) return;
    if (!comment.username) return alert("input username, please");
    if (!comment.content) return alert("input content, please");
    let comments = [...this.props.comments, comment];
    localStorage.setItem("comments", JSON.stringify(comments));
    // this.props.onSubmit是connect传进来的，会dispatch一个action去新增评论
    if (this.props.onSubmit) {
      this.props.onSubmit(comment);
    }
  }

  render() {
    return (
      <CommentInput
        username={this.state.username}
        onUsernameInputBlur={this._saveUsername.bind(this)}
        onSubmit={this.handleSubmitComment.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    comments: state.comments
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSubmit: (comment: CommentInterface) => {
      dispatch(addComment(comment));
    }
  };
};

export const CommentInputConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentInputContainer);

type Props = {
  username: string;
  onSubmit: Function;
  onUsernameInputBlur: Function;
};

type State = {
  username: string;
  content: string;
};

export class CommentInput extends React.Component<Props, State> {
  textarea: React.RefObject<HTMLTextAreaElement>;

  public constructor(props: Props) {
    super(props);
    this.textarea = React.createRef();
    this.state = {
      username: props.username,
      content: ""
    };
  }

  componentDidMount() {
    if (!this.textarea.current) {
      return;
    }
    this.textarea.current.focus();
  }

  hangdleUsernameBlur(event: React.FocusEvent<HTMLInputElement>) {
    this.props.onUsernameInputBlur(event.target.value);
  }

  handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState(
      Object.assign({}, this.state, {
        username: event.target.value
      })
    );
  }

  handleContentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState(
      Object.assign({}, this.state, {
        content: event.target.value
      })
    );
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      this.props.onSubmit({ username, content, createdTime: +new Date() });
    }
    this.setState(
      Object.assign({}, this.state, {
        content: ""
      })
    );
  }

  public render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">username:</span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
              onBlur={this.hangdleUsernameBlur.bind(this)}
              onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">comment:</span>
          <div className="comment-field-input">
            <textarea
              ref={this.textarea}
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>send</button>
        </div>
      </div>
    );
  }
}
