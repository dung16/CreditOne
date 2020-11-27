import React, { Component } from "react";
class NotFound extends Component {
  onBack=()=>{
    window.location='http://localhost:3000/';
  }
render() {
    return (
      <div className="container">
        <div className="alert alert-warning">
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-hidden="true"
          >
            &times;
          </button>
          <strong>Không tìm thấy trang</strong>
          <button type="button" onClick={this.onBack}>Quay lại</button>
        </div>
      </div>
    );
}
}

export default NotFound;
