import * as React from "react";
import "./App.css";
import { CommentInputConnect } from "./components/CommentInput";
import { CommentListConnect } from "./components/CommentList";

export class App extends React.Component<any, any> {  
  public render() {
    return (
      <div className="wrapper">
        <CommentInputConnect />
        <CommentListConnect />
      </div>
    );
  }
}
