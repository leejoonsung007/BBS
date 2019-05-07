import React, { PureComponent } from "react";
import { WriterWrapper, WriterItem } from "../style";
import { connect } from "react-redux";

class Writer extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <WriterWrapper>
        {list.map(item => {
          return (
            <WriterItem key={item.get("id")}>
              <a className="writer-info" href={item.get("imgUrl")}>
                <img
                  className="writer-avatar"
                  alt=""
                  src={item.get("imgUrl")}
                />
                {item.get("name")}
              </a>
            </WriterItem>
          );
        })}
      </WriterWrapper>
    );
  }
}

const mapState = state => ({
  list: state.getIn(["home", "writerList"])
});
export default connect(
  mapState,
  null
)(Writer);
