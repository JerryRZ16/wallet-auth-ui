// 短信认证页面 - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('backBtn');
    const backToPrevious = document.getElementById('backToPrevious');
    const resendLink = document.getElementById('resendLink');
    const expireInfo = document.getElementById('expireInfo');
    const infoTip = document.getElementById('infoTip');

    // 模拟链接过期（5秒后自动跳转到过期页面）
    setTimeout(function() {
        // 跳转到链接过期页面
        window.location.href = 'expired.html';
    }, 5000);

    // 重发短信链接点击
    resendLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('短信已重新发送，请查收');
        // 重置倒计时
        window.location.reload();
    });

    // 返回上一步
    backToPrevious.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // 返回按钮
    backBtn.addEventListener('click', function() {
        window.history.back();
    });
});
