<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glassmorphism Landing Page</title>
    <style>
        :root {
            --glass-color: rgba(255, 255, 255, 0.7);
            --primary-color: #6c63ff;
            --text-color: #333;
            --shadow-color: rgba(0, 0, 0, 0.1);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: #f5f5f7;
            min-height: 100vh;
        }

        /* 固定的藥丸形標題區域 */
        .glass-header {
            position: fixed;
            top: 30px;
            left: 50%;
            transform: translateX(-50%);
            width: 85%;
            max-width: 1000px;
            background-color: var(--glass-color);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 30px;
            padding: 15px 0;
            z-index: 1000;
            box-shadow: 0 5px 20px var(--shadow-color);
            border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .tab-container {
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        .tab {
            background-color: transparent;
            border-radius: 25px;
            padding: 10px 25px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            color: var(--text-color);
            transition: all 0.3s ease;
            border: none;
        }

        .tab.active {
            background-color: var(--primary-color);
            color: white;
        }

        .tab:hover {
            transform: translateY(-3px);
        }

        /* 主要內容區域样式調整 */
        .section {
            padding: 100px 5% 80px;
            scroll-margin-top: 100px;
            max-width: 1000px;
            margin: 0 auto;
        }

        .section-title {
            text-align: center;
            margin-bottom: 60px;
            font-size: 2.5rem;
            color: var(--text-color);
        }

        /* Services Title Card */
        .service-title-card {
            background-color: var(--glass-color);
            backdrop-filter: blur(10px);
            border-radius: 25px;
            padding: 30px;
            margin-bottom: 50px;
            box-shadow: 0 10px 30px var(--shadow-color);
            border: 1px solid rgba(255, 255, 255, 0.18);
            overflow: hidden;
        }

        .service-title-card h2 {
            font-size: 2.5rem;
            margin-bottom: 15px;
            color: var(--text-color);
        }

        .service-title-card p {
            font-size: 1.1rem;
            color: #666;
            max-width: 800px;
        }

        /* 更寬的服務卡片 */
        .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }

        .service-card {
            background-color: var(--glass-color);
            backdrop-filter: blur(10px);
            border-radius: 25px;
            padding: 40px 30px;
            min-height: 350px;
            box-shadow: 0 15px 35px var(--shadow-color);
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.18);
            position: relative;
            overflow: hidden;
        }

        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px var(--shadow-color);
        }

        .service-icon {
            font-size: 3rem;
            margin-bottom: 20px;
            color: var(--primary-color);
        }

        .service-content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;
        }

        .service-description {
            margin-bottom: 20px;
        }

        .service-features {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .feature-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .feature-icon {
            color: var(--primary-color);
        }

        /* 團隊成員區域 */
        .team-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }

        .team-card {
            background-color: var(--glass-color);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 20px;
            text-align: center;
            box-shadow: 0 10px 30px var(--shadow-color);
            height: 200px;
            border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .team-card img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 15px;
        }

        /* 聯絡表單區域 */
        .contact-form {
            max-width: 600px;
            margin: 0 auto;
            background-color: var(--glass-color);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 15px 35px var(--shadow-color);
            border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .form-group {
            margin-bottom: 25px;
        }

        input, textarea {
            width: 100%;
            padding: 15px;
            border: none;
            border-radius: 10px;
            background-color: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(5px);
            font-size: 16px;
        }

        button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 30px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            transition: all 0.3s ease;
            margin-top: 10px;
        }

        button:hover {
            background-color: #f72585;
            transform: scale(1.05);
        }

        @media (max-width: 768px) {
            .services-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            .team-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            .section {
                padding: 140px 5% 80px;
            }
        }
    </style>
</head>
<body>
    <!-- 固定的藥丸形標題區域 -->
    <nav class="glass-header">
        <div class="tab-container">
            <div class="tab active" data-target="services">Dienstleistung</div>
            <div class="tab" data-target="team">Team</div>
            <div class="tab" data-target="contact">Kontakt</div>
        </div>
    </nav>

    <!-- 服務區塊 -->
    <section id="services" class="section">
        <div class="service-title-card">
            <h2>Unsere Dienstleistungen</h2>
            <p>Wir bieten moderne, benutzerfreundliche Lösungen für Ihre digitale Präsence. Unsere Dienstleistungen sind auf Ihre individuellen Bedürfnisse zugeschnitten.</p>
        </div>
        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon">🎨</div>
                <div class="service-content">
                    <h3>Design</h3>
                    <p class="service-description">Modernes und benutzerfreundliches Design für Ihre Website</p>
                    <div class="service-features">
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span>Responsive Design</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span>Benutzerzentrierte UI</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span>Kreatives Konzept</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="service-card">
                <div class="service-icon">💻</div>
                <div class="service-content">
                    <h3>Entwicklung</h3>
                    <p class="service-description">Professionelle Webanwendungen mit modernen Technologien</p>
                    <div class="service-features">
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span>Frontend & Backend</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span>Frameworks & Libraries</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span>Optimierung</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="service-card">
                <div class="service-icon">📈</div>
                <div class="service-content">
                    <h3>Marketing</h3>
                    <p class="service-description">Digitaler Marketing um Ihre Marke sichtbarer zu machen</p>
                    <div class="service-features">
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span>SEO & SEM</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span>Social Media</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span>Content Creation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 團隊區域 -->
    <section id="team" class="section">
        <h2 class="section-title">Unser Team</h2>
        <div class="team-grid">
            <div class="team-card">
                <img src="team1.jpg" alt="Team Member">
                <h3>Max Mustermann</h3>
                <p>Chef-Designer</p>
            </div>
            <div class="team-card">
                <img src="team2.jpg" alt="Team Member">
                <h3>Sarah Müller</h3>
                <p>Entwicklerin</p>
            </div>
            <div class="team-card">
                <img src="team3.jpg" alt="Team Member">
                <h3>Andreas Schneider</h3>
                <p>Marketing</p>
            </div>
            <div class="team-card">
                <img src="team4.jpg" alt="Team Member">
                <h3>Lisa Weber</h3>
                <p>Support</p>
            </div>
        </div>
    </section>

    <!-- 聯絡區域 -->
    <section id="contact" class="section">
        <h2 class="section-title">Kontaktieren Sie uns</h2>
        <form class="contact-form">
            <div class="form-group">
                <input type="text" placeholder="Name" required>
            </div>
            <div class="form-group">
                <input type="email" placeholder="E-Mail" required>
            </div>
            <div class="form-group">
                <textarea rows="5" placeholder="Nachricht" required></textarea>
            </div>
            <button type="submit">Absenden</button>
        </form>
    </section>

    <script>
        // Tab Navigation
        const tabs = document.querySelectorAll('.tab');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // 移除所有active class
                tabs.forEach(t => t.classList.remove('active'));
                // 添加active class到當前tab
                tab.classList.add('active');
                
                // 滾動到對應區塊
                const targetId = tab.getAttribute('data-target');
                const targetElement = document.getElementById(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop - 90,
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>