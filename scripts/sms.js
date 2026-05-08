// 短信认证页面 - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('backBtn');
    const backToPrevious = document.getElementById('backToPrevious');

    // 返回上一步
    backToPrevious.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // 返回按钮
    backBtn.addEventListener('click', function() {
        window.history.back();
    });
});
