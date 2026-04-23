// 认证方式选择页面 - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const radioInputs = document.querySelectorAll('.auth-radio');
    const nextBtn = document.getElementById('nextBtn');
    const backBtn = document.getElementById('backBtn');

    // 检查是否有选中的选项，更新按钮状态
    function updateNextButtonState() {
        const checked = document.querySelector('.auth-radio:checked');
        if (checked) {
            nextBtn.classList.remove('disabled');
            nextBtn.disabled = false;
        } else {
            nextBtn.classList.add('disabled');
            nextBtn.disabled = true;
        }
    }

    // 监听单选框变化
    radioInputs.forEach(input => {
        input.addEventListener('change', updateNextButtonState);
    });

    // 下一步按钮点击
    nextBtn.addEventListener('click', function() {
        if (!nextBtn.disabled) {
            const selected = document.querySelector('.auth-radio:checked').value;
            if (selected === 'sms') {
                window.location.href = 'sms.html';
            } else if (selected === 'qrcode') {
                // 二维码扫码认证页面，已有实现，这里可以跳转
                // window.location.href = 'qrcode.html';
                alert('当前仅展示短信认证流程，二维码认证保持原有实现');
            }
        }
    });

    // 返回按钮
    backBtn.addEventListener('click', function() {
        window.history.back();
    });

    // 初始化状态
    updateNextButtonState();
});
