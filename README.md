<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modernes, adaptive Pillenheader Design</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #f0f2f5;
            min-height: 100vh;
            padding-top: 120px;
        }

        .pill-header {
            position: fixed;
            top: 40px;
            left: 50%;
            transform: translateX(-50%);
            width: 25%;
            max-width: 400px;
            background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.1) 0%,
                rgba(255, 255, 255, 0.3) 100%
            );
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border-radius: 50px;
            padding: 25px 30px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            display: flex;
            align-items: center;
            border: 1px solid rgba(255, 255, 255, 0.3);
            transition: all 0.3s ease;
        }

        .nav-tabs {
            display: flex;
            gap: 20px;
            position: relative;
            justify-content: center;
            width: 100%;
            overflow-x: auto;
            scrollbar-width: none; /* Hide scrollbar for Firefox */
            -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
        }

        /* Custom scroll styling */
        .nav-tabs::-webkit-scrollbar {
            display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
        }

        .nav-tab {
            padding: 12px 24px;
            font-size: 18px;
            font-weight: 600;
            color: #333;
            text-decoration: none;
            background: transparent;
            border: none;
            cursor: pointer;
            position: relative;
            transition: all 0.3s ease;
            white-space: nowrap;
        }

        .nav-tab:hover {
            color: #6366f1;
        }

        .nav-tab.active {
            color: #6366f1;
        }

        .nav-tab.active::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 3px;
            background: #6366f1;
            border-radius: 3px;
        }

        .content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        @media (max-width: 992px) {
            .pill-header {
                width: 40%;
            }
        }

        @media (max-width: 768px) {
            .pill-header {
                width: 95%;
                top: 20px;
                left: 0;
                transform: translateX(0);
                padding: 15px 20px;
                border-radius: 0 50px 50px 0;
                overflow: hidden;
            }
            
            .pill-header::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 10px;
                height: 100%;
                background: linear-gradient(to right, #f0f2f5, transparent);
                z-index: -1;
            }
            
            .pill-header::after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                width: 20px;
                height: 100%;
                background: radial-gradient(circle at 0 50%, transparent 30%, #f0f2f5 70%);
                z-index: -1;
            }
            
            .nav-tab {
                padding: 10px 15px;
                font-size: 16px;
            }
            
            .nav-tabs {
                padding-bottom: 10px;
            }
        }

        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
        }
    </style>
</head>
<body>
    <header class="pill-header">
        <nav class="nav-tabs">
            <button class="nav-tab active" onclick="switchTab(this, 'team')">Team</button>
            <button class="nav-tab" onclick="switchTab(this, 'contact')">Kontakt</button>
            <button class="nav-tab" onclick="switchTab(this, 'services')">Services</button>
            <button class="nav-tab" onclick="switchTab(this, 'about')">Über uns</button>
            <button class="nav-tab" onclick="switchTab(this, 'careers')">Karriere</button>
            <button class="nav-tab" onclick="switchTab(this, 'blog')">Blog</button>
            <button class="nav-tab" onclick="switchTab(this, 'faq')">Häufig gestellte Fragen</button>
        </nav>
    </header>

    <div class="content">
        <div id="team" class="tab-content active">
            <h1>Unser Team</h1>
            <p>Informationen über unser Team...</p>
        </div>
        <div id="contact" class="tab-content">
            <h1>Kontaktieren Sie uns</h1>
            <p>Informationen über unseren Kontakt...</p>
        </div>
        <!-- Additional tab contents -->
    </div>

    <script>
        function switchTab(button, tabId) {
            // Remove active class from all tabs
            document.querySelectorAll('.nav-tab').forEach(tab => {
                tab.classList.remove('active');
            });

            // Add active class to selected tab
            button.classList.add('active');

            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // Show selected tab content
            document.getElementById(tabId).classList.add('active');
        }
    </script>
</body>
</html>