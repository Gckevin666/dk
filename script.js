document.addEventListener('DOMContentLoaded', () => {
    // 初始化 particles.js
    if (document.getElementById('particles-js')) {
        particlesJS.load('particles-js', 'particles-config.json', function() {
            console.log('particles.js 已加载');
        });
    }

    // 导航菜单切换
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const menuIcon = document.querySelector('.menu-toggle i');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuIcon.classList.toggle('ri-menu-line');
        menuIcon.classList.toggle('ri-close-line');
    });

    // 导航链接点击关闭菜单
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuIcon.classList.add('ri-menu-line');
            menuIcon.classList.remove('ri-close-line');
        });
    });

    // Tab切换功能
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // 移除所有按钮的active类
                tabBtns.forEach(b => b.classList.remove('active'));
                // 给当前点击的按钮添加active类
                btn.classList.add('active');
                
                // 隐藏所有内容
                tabContents.forEach(content => content.classList.remove('active'));
                // 显示对应的内容
                const tabId = btn.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 滚动效果
    const scrollReveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', scrollReveal);
    scrollReveal(); // 初始化时执行一次

    // 返回顶部按钮
    const scrollToTopBtn = document.createElement('div');
    scrollToTopBtn.classList.add('scroll-to-top');
    scrollToTopBtn.innerHTML = '<i class="ri-arrow-up-line"></i>';
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 显示/隐藏返回顶部按钮
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('active');
        } else {
            scrollToTopBtn.classList.remove('active');
        }
    });

    // 为工具卡片添加悬停效果
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.tool-link i');
            if (icon) {
                icon.style.transform = 'translateX(5px)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.tool-link i');
            if (icon) {
                icon.style.transform = 'translateX(0)';
            }
        });
    });

    // 3D卡片效果
    const card = document.getElementById('hero-card');
    if (card) {
        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;  
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleY = (x - centerX) / 30;
            const angleX = (y - centerY) / -30;
            
            card.style.transform = `rotateY(${angleY}deg) rotateX(${angleX}deg)`;
        };
        
        card.addEventListener('mousemove', handleMouseMove);
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateY(0) rotateX(0)';
        });
    }

    // 标题词语动画
    const animateWords = () => {
        const words = document.querySelectorAll('.word-animation .word');
        if (words.length > 0) {
            let currentIndex = 0;
            words[currentIndex].classList.add('current');
            
            setInterval(() => {
                words[currentIndex].classList.remove('current');
                currentIndex = (currentIndex + 1) % words.length;
                words[currentIndex].classList.add('current');
            }, 3000);
        }
    };
    
    animateWords();

    // 切换暗色/亮色模式（如果需要可取消注释）
    /*
    const toggleTheme = document.createElement('div');
    toggleTheme.classList.add('theme-toggle');
    toggleTheme.innerHTML = '<i class="ri-sun-line"></i>';
    document.body.appendChild(toggleTheme);
    
    toggleTheme.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        if(document.body.classList.contains('light-theme')) {
            toggleTheme.innerHTML = '<i class="ri-moon-line"></i>';
        } else {
            toggleTheme.innerHTML = '<i class="ri-sun-line"></i>';
        }
    });
    */
}); 