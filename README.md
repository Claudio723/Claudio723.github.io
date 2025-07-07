<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glassmorphism Landing Page</title>
    <style>
        :root {
            --glass-color: rgba(255, 255, 255, 0.7);
            --primary-color: #222222;
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

        /* Header with pill-shaped tabs */
        .glass-header {
            position: fixed;
            top: 30px;
            left: 50%;
            transform: translateX(-50%);
            width: 85%;
            max-width: 1000px;
            background-color: transparent;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 30px;
            padding: 15px 0;
            z-index: 1000;
            box-shadow: 0 5px 20px var(--shadow-color);
            border: 1px solid rgba(255, 255, 255, 0.18);
            display: flex;
            justify-content: center;
        }

        .tab-container {
            display: flex;
            width: 100%;
            max-width: 600px;
        }

        .tab {
            flex: 1;
            background-color: var(--glass-color);
            backdrop-filter: blur(10px);
            border-radius: 25px;
            padding: 10px 15px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            color: var(--text-color);
            transition: all 0.3s ease;
            text-align: center;
            border: none;
            margin: 0 5px;
        }

        .tab.active {
            background-color: var(--primary-color);
            color: white;
        }

        .tab:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px var(--shadow-color);
        }

        /* Main content area style adjustments */
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
            position: relative;
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

        /* Image Slider */
        .image-slider {
            margin-top: 30px;
            position: relative;
            height: 250px;
            overflow: hidden;
            border-radius: 15px;
        }

        .slide {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 0.5s ease;
            background-size: cover;
            background-position: center;
        }

        .slide.active {
            opacity: 1;
        }

        .slider-description {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.6);
            color: white;
            padding: 10px;
            text-align: center;
        }

        .slider-controls {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }

        .slider-dot {
            width: 12px;
            height: 12px;
            background-color: #bbb;
            border-radius: 50%;
            margin: 0 5px;
            cursor: pointer;
        }

        .slider-dot.active {
            background-color: var(--primary-color);
        }

        /* Wider service cards */
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

        /* Team members area */
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

        /* Contact form area */
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
            background-color: #111111;
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
    <!-- Fixed pill-shaped header -->
    <nav class="glass-header">
        <div class="tab-container">
            <div class="tab active" data-target="services">Dienstleistung</div>
            <div class="tab" data-target="team">Team</div>
            <div class="tab" data-target="contact">Kontakt</div>
        </div>
    </nav>

    <!-- Services section -->
    <section id="services" class="section">
        <div class="service-title-card">
            <h2>Unsere Dienstleistungen</h2>
            <p>Wir bieten moderne, benutzerfreundliche Lösungen für Ihre digitale Präsence. Unsere Dienstleistungen sind auf Ihre individuellen Bedürfnisse zugeschnitten.</p>
            
            <!-- Full-screen Image slider -->
            <div class="image-slider">
                <div class="slide active">
                    <img src="https://github.com/Claudio723/Claudio723.github.io/blob/main/steve-johnson-yaUls_oyvug-unsplash.jpg" alt="Slide 1" style="width:100%; height:100%; object-fit:cover;">
                    <div class="slider-description">Schritt 1: Laden Sie Ihre Bilder herunter und speichern Sie sie lokal</div>
                </div>
                <div class="slide">
                    <img src="https://via.placeholder.com/800x400?text=Bild+2" alt="Slide 2" style="width:100%; height:100%; object-fit:cover;">
                    <div class="slider-description">Schritt 2: Laden Sie die Bilder in Ihr GitHub-Repository hoch</div>
                </div>
                <div class="slide">
                    <img src="https://via.placeholder.com/800x400?text=Bild+3" alt="Slide 3" style="width:100%; height:100%; object-fit:cover;">
                    <div class="slider-description">Schritt 3: Aktualisieren Sie die Bild-URLs in Ihrem Code</div>
                </div>
            </div>
            <div class="slider-controls">
                <span class="slider-dot active" onclick="currentSlide(0)"></span>
                <span class="slider-dot" onclick="currentSlide(1)"></span>
                <span class="slider-dot" onclick="currentSlide(2)"></span>
            </div>
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

    <!-- Team section -->
    <section id="team" class="section">
        <h2 class="section-title">Unser Team</h2>
        <div class="team-grid">
            <div class="team-card">
                <img src="https://via.placeholder.com/150?text=Team+1" alt="Team Member">
                <h3>Max Mustermann</h3>
                <p>Chef-Designer</p>
            </div>
            <div class="team-card">
                <img src="https://via.placeholder.com/150?text=Team+2" alt="Team Member">
                <h3>Sarah Müller</h3>
                <p>Entwicklerin</p>
            </div>
            <div class="team-card">
                <img src="https://via.placeholder.com/150?text=Team+3" alt="Team Member">
                <h3>Andreas Schneider</h3>
                <p>Marketing</p>
            </div>
            <div class="team-card">
                <img src="https://via.placeholder.com/150?text=Team+4" alt="Team Member">
                <h3>Lisa Weber</h3>
                <p>Support</p>
            </div>
        </div>
    </section>

    <!-- Contact section -->
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
                // Remove all active classes
                tabs.forEach(t => t.classList.remove('active'));
                // Add active class to current tab
                tab.classList.add('active');
                
                // Scroll to corresponding section
                const targetId = tab.getAttribute('data-target');
                const targetElement = document.getElementById(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop - 90,
                    behavior: 'smooth'
                });
            });
        });

        // Image Slider Functionality
        let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slider-dot');

        function showSlide(n) {
            slideIndex = n;
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[slideIndex].classList.add('active');
            dots[slideIndex].classList.add('active');
        }

        function currentSlide(n) {
            showSlide(n);
        }

        // Automatically change slide every 5 seconds
        setInterval(() => {
            slideIndex = (slideIndex + 1) % slides.length;
            showSlide(slideIndex);
        }, 5000);
    </script>
</body>
</html>