import React, { PureComponent } from "react";
import { DetailWrapper, Header, Content } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Detail extends PureComponent {
  render() {
    const { title, content } = this.props;

    return (
      <DetailWrapper>
        <Header>{title} </Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    );
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapStateToProps = state => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
});

const mapDispatch = disptch => ({
  getDetail(id) {
    disptch(actionCreators.getDetail(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatch
)(Detail);
