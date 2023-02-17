import React from "react";
function Child_Func_Comp(props) {
    return (
        <>
            <h2>Child Func Component</h2>
            <p>{props.academy} chào đón các bạn lớp {props.className}, {props.children}</p>
        </>
    );
}
export default Child_Func_Comp;