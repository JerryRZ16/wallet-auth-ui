// 认证过期页面 - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('backBtn');
    const resendBtn = document.getElementById('resendBtn');

    // 重新发送验证码
    resendBtn.addEventListener('click', function() {
        // 跳转回短信认证页面重新发送
        window.location.href = 'sms.html';
    });

    // 返回按钮
    backBtn.addEventListener('click', function() {
        window.history.back();
    });
});
