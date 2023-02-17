import React from 'react';
import { Component } from 'react';
import Child_Func_Comp from './Child_Func_Comp';
import Child_Class_Comp from './Child_Class_Comp';
class ParentComp extends Component {
    // return a element
    render() {
        return (
            <div>
                <h2>Parent Component</h2>
                {/* Truyền props từ ParentComp xuống Child_Func_Comp */}
                {/* chidren: props đặc biệt = giá trị nội dung giữa thẻ mở và thẻ đóng */}
                <Child_Func_Comp academy="Rikkei Academy" className="JS-PT-11">Chúc các bạn học tốt</Child_Func_Comp>
                <Child_Class_Comp academy="Rikkei Academy">JS-PT-11</Child_Class_Comp>
            </div>
        );
    }
}
export default ParentComp;