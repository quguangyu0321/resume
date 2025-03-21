document.addEventListener('DOMContentLoaded', function() {
  // 获取当前语言
  const currentLang = localStorage.getItem('language') || 'en';
  
  // 设置默认语言
  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'en');
  }
  
  // 更新语言选择器显示
  updateLanguageSelector(currentLang);
  
  // 添加语言切换事件监听器
  document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });
});

// 更新语言选择器显示
function updateLanguageSelector(lang) {
  document.querySelectorAll('.language-option').forEach(option => {
    if (option.getAttribute('data-lang') === lang) {
      option.classList.add('active');
    } else {
      option.classList.remove('active');
    }
  });
}

// 切换语言
function switchLanguage(lang) {
  localStorage.setItem('language', lang);
  
  // 根据语言重定向到相应页面
  if (lang === 'en') {
    window.location.href = '/';
  } else {
    window.location.href = '/resume/' + lang + '/';
  }
} 