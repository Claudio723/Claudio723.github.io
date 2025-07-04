<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modernes, adaptive Website-Design</title>
    <style>
        /* Allgemeine Einstellungen */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #f0f2f5;
            min-height: 100vh;
            display: grid;
            grid-template-rows: auto 1fr auto;
            padding: 0 20px;
        }

        /* Header-Design */
               .pill-header {
            position: fixed;
            top: 30px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            max-width: 1200px;
            background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.1) 0%,
                rgba(255, 255, 255, 0.3) 100%
            );
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border-radius: 30px;
            padding: 15px 30px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
            z-index: 1000;
            display: flex;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .nav-tabs {
            display: flex;
            gap: 20px;
            position: relative;
            justify-content: center;
            width: 100%;
        }

        .nav-tab {
            padding: 10px 20px;
            font-size: 15px;
            font-weight: 500;
            color: #333;
            text-decoration: none;
            background: transparent;
            border: none;
            cursor: pointer;
            position: relative;
            transition: all 0.3s ease;
            z-index: 2;
        }

        .nav-tab.active {
            color: #333;
        }

        .active-pill {
            position: absolute;
            height: 30px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 15px;
            transition: all 0.3s ease;
            z-index: 1;
        }



        /* Inhalt-Design */
        .content {
            max-width: 1200px;
            margin: 150px auto 50px;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 30px;
        }

        .rounded-block {
            background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.1) 0%,
                rgba(255, 255, 255, 0.3) 100%
            );
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.3);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .rounded-block:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }

        .block-graphic {
            height: 180px;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 15px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(0, 0, 0, 0.3);
            font-size: 24px;
        }

        .block-content h2 {
            margin-bottom: 15px;
            font-size: 22px;
            color: #333;
        }

        .block-content p {
            color: #666;
            line-height: 1.6;
            margin-bottom: 20px;
        }

        .block-link {
            color: #6366f1;
            text-decoration: none;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
        }

        .block-link:hover {
            text-decoration: underline;
        }

        /* Fußzeile-Design */
        .footer {
            background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.1) 0%,
                rgba(255, 255, 255, 0.3) 100%
            );
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border-radius: 20px;
            padding: 30px;
            margin-top: 50px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.3);
            text-align: center;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
        }

        .footer-logo {
            margin-bottom: 20px;
            font-size: 24px;
            font-weight: bold;
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-bottom: 20px;
        }

        .footer-link {
            color: #666;
            text-decoration: none;
        }

        .footer-link:hover {
            color: #6366f1;
        }

        .footer-copyright {
            color: #999;
            font-size: 14px;
        }

        /* Mobile-Optimierung */
        @media (max-width: 768px) {
            .pill-header {
                width: 95%;
                padding: 12px 20px;
                border-radius: 0 30px 30px 0;
            }

            .nav-tab {
                padding: 8px 15px;
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
   <header class="pill-header">
        <nav class="nav-tabs">
            <button class="nav-tab active" data-target="team">Team</button>
            <button class="nav-tab" data-target="contact">Kontakt</button>
            <button class="nav-tab" data-target="services">Services</button>
            <button class="nav-tab" data-target="about">Über uns</button>
            <div class="active-pill" style="width: 70px; left: 30px;"></div>
        </nav>
    </header>

    <!-- Inhalt -->
    <div class="content">
        <div class="rounded-block">
            <div class="block-graphic">[Graphic Placeholder]</div>
            <div class="block-content">
                <h2>Unser Team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl sit amet nisl.</p>
                <a href="#" class="block-link">Mehr erfahren →</a>
            </div>
        </div>

        <div class="rounded-block">
            <div class="block-graphic">[Graphic Placeholder]</div>
            <div class="block-content">
                <h2>Kontaktieren Sie uns</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl sit amet nisl.</p>
                <a href="#" class="block-link">Jetzt kontaktieren →</a>
            </div>
        </div>

        <div class="rounded-block">
            <div class="block-graphic">[Graphic Placeholder]</div>
            <div class="block-content">
                <h2>Unsere Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl sit amet nisl.</p>
                <a href="#" class="block-link">Services anzeigen →</a>
            </div>
        </div>
    </div>

    <!-- Fußzeile -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-logo">Logo</div>
            <div class="footer-links">
                <a href="#" class="footer-link">Impressum</a>
                <a href="#" class="footer-link">Datenschutz</a>
                <a href="#" class="footer-link">AGB</a>
            </div>
            <div class="footer-copyright">© 2023 Ihre Firma. Alle Rechte vorbehalten.</div>
        </div>
    </footer>

   <script>
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                // Entferne active-Klasse von allen Tabs
                document.querySelectorAll('.nav-tab').forEach(t => {
                    t.classList.remove('active');
                });

                // Füge active-Klasse zum ausgewählten Tab hinzu
                this.classList.add('active');

                // Aktualisiere die Position der aktivierten Pille
                const pill = document.querySelector('.active-pill');
                pill.style.width = `${this.offsetWidth + 10}px`;
                pill.style.left = `${this.offsetLeft - 5}px`;
            });
        });
    </script>
</body>
</html>
