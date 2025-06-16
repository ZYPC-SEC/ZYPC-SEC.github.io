// 打字机效果
document.addEventListener('DOMContentLoaded', function() {
    // 首页打字机效果
    if (document.getElementById('typewriter')) {
        const typewriterElement = document.getElementById('typewriter');
        const text = "天启战队";
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                typewriterElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            } else {
                // 打字完成后添加闪烁光标
                typewriterElement.innerHTML += '<span class="blinking-cursor">|</span>';
            }
        }
        
        typeWriter();
    }

    // 移动端菜单切换
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // 关闭移动菜单
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // 滚动时导航栏效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    });

    // 团队成员页面筛选功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    const teamCards = document.querySelectorAll('.team-card');
    
    if (filterButtons.length > 0 && teamCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 更新按钮状态
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.textContent;
                
                // 筛选团队成员
                teamCards.forEach(card => {
                    if (filter === '全部成员' || card.querySelector('.skills').textContent.includes(filter)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // 粒子背景效果
    function createParticles() {
        const particlesContainer = document.querySelector('.particles');
        if (!particlesContainer) return;
        
        // 清除现有粒子
        particlesContainer.innerHTML = '';
        
        // 创建新粒子
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // 随机位置
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // 随机大小
            const size = Math.random() * 8 + 4;
            
            // 随机动画延迟
            const delay = Math.random() * 10;
            
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.animationDelay = `${delay}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // 初始创建粒子
    createParticles();
    
    // 每30秒重新生成粒子
    setInterval(createParticles, 30000);
});