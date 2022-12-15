<script>
import { h } from 'vue';
function kmButton(props, context) {
    console.log(props, context, context.slots.default());
    return h("button", {
        class: {
            btn: true,
            'km-success': props.type == "success",
            'km-danger': props.type == "danger",
            'km-warning': props.type == "warning",
            'km-info': props.type == "info",
            'km-info': !props.type
        },
        // 添加事件
        onClick: () => {
            console.log("点击事件执行");
        },
        onMouseover: () => {
            // console.log("鼠标进入执行");
        },
        oncontextmenu: () => {
            // console.log("右键点击事件执行");
        },

    }, context.slots.default()[0].children);

}
export default kmButton;
</script>

<style scoped>
.btn {
    width: 100px;
    height: 50px;
    text-align: center;
    outline: 0;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 18px;
    border-radius: 4px;
}

.btn:hover {
    background: #66b1ff;
}

.km-success {
    background-color: #409EFF;
}

.km-danger {
    background-color: #F56C6C;
}

.km-warning {
    background-color: #E6A23C;
}

.km-info {
    background-color: #909399;
}
</style>
    