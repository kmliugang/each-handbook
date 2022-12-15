
const directives = {
    mounted(el) {
        const waterBg = document.createElement('div');
        // 创建 waterBg 背景元素
        waterBg.className = `water_mark`;// 方便自定义展示结果
        el.appendChild(waterBg)
    }
}



export default {
    name: 'watermark',
    directives
}