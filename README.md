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
            --accent-color: #f72585;
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
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            min-height: 100vh;
        }

        /*玻璃質感標題區域*/
        .glass-header {
            background-color: var(--glass-color);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 30px;
            padding: 20px 40px;
            margin: 20px 5%;
            box-shadow: 0 8px 32px var(--shadow-color);
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .tabs {
            display: flex;
            justify-content: space-around;
            list-style: none;
        }

        .tab {
            padding: 15px 30px;
            cursor: pointer;
            font-size: 18px;
            font-weight: 500;
            color: var(--text-color);
            border-bottom: 3px solid transparent;
            transition: all 0.3s ease;
        }

        .tab.active {
            border-color: var(--primary-color);
            color: var(--primary-color);
        }

        .tab:hover {
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 20px;
        }

        /*服務卡片區域*/
        .section {
            padding: 60px 5%;
            scroll-margin-top: 100px;
        }

        .section-title {
            text-align: center;
            margin-bottom: 40px;
            font-size: 2.5rem;
            color: var(--text-color);
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }

        .service-card {
            background-color: var(--glass-color);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 30px;
            height: 250px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 10px 30px var(--shadow-color);
            transition: transform 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .service-card:hover {
            transform: translateY(-10px);
        }

        /*團隊成員區域*/
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

        /*聯絡表單區域*/
        .contact-form {
            max-width: 600px;
            margin: 0 auto;
            background-color: var(--glass-color);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 10px 30px var(--shadow-color);
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
            background-color: var(--accent-color);
            transform: scale(1.05);
        }

        @media (max-width: 768px) {
            .services-grid, .team-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>
</head>
<body>
    <!-- 帶有玻璃質感的標題區域 -->
    <nav class="glass-header">
        <ul class="tabs">
            <li class="tab active" data-target="services">Dienstleistung</li>
            <li class="tab" data-target="team">Team</li>
            <li class="tab" data-target="contact">Kontakt</li>
        </ul>
    </nav>

    <!-- 服務區塊 -->
    <section id="services" class="section">
        <h2 class="section-title">Unsere Dienstleistungen</h2>
        <div class="services-grid">
            <div class="service-card">
                <h3>Design</h3>
                <p>Modernes und benutzerfreundliches Design für Ihre Website</p>
            </div>
            <div class="service-card">
                <h3>Entwicklung</h3>
                <p>Professionelle Webanwendungen mit modernen Technologien</p>
            </div>
            <div class="service-card">
                <h3>Marketing</h3>
                <p>Digitaler Marketing um Ihre Marke sichtbarer zu machen</p>
            </div>
            <div class="service-card">
                <h3>Support</h3>
                <p>24/7 Kundenbetreuung und technischer Support</p>
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
                    top: targetElement.offsetTop - 120,
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>