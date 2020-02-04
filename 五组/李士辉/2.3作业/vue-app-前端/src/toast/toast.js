import ToastComponent from './Toast.vue'

const Toast = {
    install(Vue){
        // console.log(install)

        // 创建一个子类
        const ToastControuctor = Vue.extend(ToastComponent);

        // 创建实例
        const instance = new ToastControuctor();

        // 把实例挂载到一个元素上面
        instance.$mount(document.createElement('div'));

        // 把这个元素插入到body里面
        document.body.appendChild(instance.$el);

        Vue.prototype.$Toast = (msg,time = 1000)=>{
            // 让toast显示
            // 更改msg信息
            instance.show = true;
            instance.msg = msg;

            //n秒后默认自动消失
            setTimeout(()=>{
                instance.show = false;
            },time);
        }
    }
}

export default Toast;