// 短信认证页面 - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('backBtn');
    const refreshBtn = document.getElementById('refreshBtn');
    const resendBtn = document.getElementById('resendBtn');
    const backToPrevious = document.getElementById('backToPrevious');
    const countdownEl = document.getElementById('countdown');

    let countdown = 60;
    let countdownTimer = null;

    // 开始倒计时
    function startCountdown() {
        resendBtn.disabled = true;
        countdown = 60;
        
        if (countdownTimer) {
            clearInterval(countdownTimer);
        }

        countdownTimer = setInterval(() => {
            countdown--;
            countdownEl.textContent = `(${countdown}s)`;
            
            if (countdown <= 0) {
                clearInterval(countdownTimer);
                resendBtn.disabled = false;
                countdownEl.textContent = '';
                resendBtn.textContent = '重发短信';
            }
        }, 1000);
    }

    // 刷新状态 - 模拟轮询
    refreshBtn.addEventListener('click', function() {
        // 这里模拟轮询认证结果，实际项目中会调用接口查询
        refreshBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin">
                <polyline points="23 4 23 10 17 10"/>
                <polyline points="1 20 1 14 7 14"/>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
            </svg>
            刷新中...
        `;
        
        setTimeout(() => {
            alert('当前认证仍在处理中，请稍后再试。实际环境中会根据接口返回结果跳转');
            refreshBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="23 4 23 10 17 10"/>
                    <polyline points="1 20 1 14 7 14"/>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                </svg>
                刷新状态
            `;
        }, 1500);
    });

    // 重发短信
    resendBtn.addEventListener('click', function() {
        if (!resendBtn.disabled) {
            // 模拟调用重发接口
            alert('短信已重新发送');
            startCountdown();
        }
    });

    // 返回上一步
    backToPrevious.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // 返回按钮
    backBtn.addEventListener('click', function() {
        window.history.back();
    });

    // 页面加载完成后开始倒计时
    startCountdown();
});

// 添加旋转动画
const style = document.createElement('style');
style.textContent = `
.animate-spin {
    animation: spin 1s linear infinite;
}
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);
