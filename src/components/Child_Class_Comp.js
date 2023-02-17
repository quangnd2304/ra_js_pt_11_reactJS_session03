import React, { Component } from 'react';

class Child_Class_Comp extends Component {
    // KHởi tạo state --> khởi tạo trong hàm constructor
    constructor(props) {
        // Để sử dụng được từ khóa this trong constructor
        super(props);
        // Khởi tạo state với this.state
        this.state = {
            student: { studentId: "SV001", studentName: "Nguyễn Văn A" }
        }
    }
    handleChange = () => {
        // Cập nhật state ==> this.setState        
        this.setState({
            student: { studentId: "SV002", studentName: "Nguyễn Văn B" }
        })
    }
    render() {
        return (
            <div>
                <h2>Child Class Component</h2>
                <p>{this.props.academy} xin chào các bạn {this.props.children}</p>
                <p>Chúc bạn sinh viên {this.state.student.studentId}-{this.state.student.studentName} sớm thành công</p>
                <button onClick={this.handleChange}>Change student Name</button>
            </div>
        );
    }
}

export default Child_Class_Comp;