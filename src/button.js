import { Component } from "react";
// 使用prop-types 进行类型限制
import PropTypes from 'prop-types';

export const small = "small";
export const middle = "middle";
export const large = "large";
const SIZE = {
  small: { width: "150px", height: "100%" },
  middle: { width: "210px", height: "32px" },
  large: { width: "320px", height: "64px" },
};

export default class DzxBtn extends Component {
  render() {
    return (
      <button style={SIZE[this.props.size] || SIZE[small]}>
        { this.props.text || this.props.children }
      </button>
    );
  }
}

DzxBtn.propTypes = {
  /** 按钮文本 
   *  限制类型为string
  */
	text: PropTypes.string,
 
	/** 按钮大小 
   *  PropTypes.oneOf 参数为一个只读字符串数组 设置后 size入参只能为数组内容之一
  */
	size: PropTypes.oneOf([small, middle, large]),
}