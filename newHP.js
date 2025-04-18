document.addEventListener('DOMContentLoaded', () => {
    // ハンバーガーメニューの制御
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });

    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ナビゲーションバーのスクロール制御
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });

    // フォーム送信の処理
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // ここにフォーム送信の処理を追加
            alert('お問い合わせありがとうございます。\n内容を確認次第、ご連絡させていただきます。');
            contactForm.reset();
        });
    }

    // アニメーション効果
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // アニメーション対象の要素を監視
    document.querySelectorAll('.research-card, .member-card').forEach(el => {
        observer.observe(el);
    });

    // 学会・講演ページのフィルター機能
    const filterButtons = document.querySelectorAll('.filter-btn');
    const conferenceItems = document.querySelectorAll('.conference-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // アクティブなボタンの更新
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 選択された年の発表のみを表示
            const selectedYear = button.getAttribute('data-year');
            conferenceItems.forEach(item => {
                if (item.getAttribute('data-year') === selectedYear) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
