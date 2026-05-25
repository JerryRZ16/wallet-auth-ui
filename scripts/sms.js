// 短信认证页面 - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('backBtn');
    const refreshBtn = document.getElementById('refreshBtn');
    const resendBtn = document.getElementById('resendBtn');
    const expireInfo = document.getElementById('expireInfo');

    let linkExpired = false;
    let refreshCount = 0;

    // 刷新状态 - 模拟轮询
    refreshBtn.addEventListener('click', function() {
        refreshBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin">
                <polyline points="23 4" 23 10" 17 10"/>
                <polyline points="1 20" 1 14" 7 14"/>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
            </svg>
            刷新中...
        `;
        
        setTimeout(() => {
            refreshCount++;
            
            // 第3次刷新模拟认证成功，第5次模拟链接过期
            if (refreshCount === 3) {
                // 认证成功，跳转到成功页面
                window.location.href = 'success.html';
            } else if (refreshCount >= 5 && !linkExpired) {
                // 模拟链接过期
                linkExpired = true;
                expireInfo.innerHTML = '<span style="color: #F53F3F;">验证链接已过期</span>';
                resendBtn.style.display = 'block';
                
                // 更新提示信息
                const infoTip = document.querySelector('.info-tip');
                infoTip.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F53F3F" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="16" x2="12" y2="12"/>
                        <line x1="12" y1="8" x2="12.01" y2="8"/>
                    </svg>
                    <p style="color: #F53F3F;">验证链接已过期，请重新发送短信</p>
                `;
                infoTip.style.backgroundColor = '#FFF1F0';
                infoTip.style.borderColor = '#FFCDC9';
            } else {
                alert('当前认证仍在处理中，请稍后再试。（点击刷新5次模拟链接过期，3次模拟认证成功）');
            }
            
            refreshBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="23 4" 23 10" 17 10"/>
                    <polyline points="1 20" 1 14" 7 14"/>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                </svg>
                刷新状态
            `;
        }, 1500);
    });

    // 重发短信
    resendBtn.addEventListener('click', function() {
        // 模拟调用重发接口
        alert('短信已重新发送，新的验证链接有效期3天');
        linkExpired = false;
        refreshCount = 0;
        expireInfo.innerHTML = '验证链接有效期：3天';
        resendBtn.style.display = 'none';
        
        // 恢复提示信息
        const infoTip = document.querySelector('.info-tip');
        infoTip.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            <p>请负责人查收短信并完成认证，认证完成后可点击"刷新状态"更新页面</p>
        `;
        infoTip.style.backgroundColor = '';
        infoTip.style.borderColor = '';
    });

    // 返回按钮
    backBtn.addEventListener('click', function() {
        window.history.back();
    });
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
