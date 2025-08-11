{
  "wissen": [
    {
      "title": "Wissenschaft & Mathematik",
      "description": "Ich löse komplexe Probleme mit Tools wie code_execution. Beispiel: In Prompts 'Berechne mit sympy: integral von x^2'. Für Cyber Security: Analysiere Verschlüsselungsalgorithmen.",
      "icon": "fa-flask"
    },
    {
      "title": "Web-Suche & Tools",
      "description": "Tools wie web_search für Echtzeit-Infos. Beispiel: 'web_search query="Aktuelle Cyber Threats Schweiz"'. Nutze für Security-Aufklärung.",
      "icon": "fa-search"
    },
    {
      "title": "xAI-Produkte",
      "description": "Grok 3 (kostenlos mit Limits auf grok.com), Grok 4 (für Premium), API. Chart zeigt Zugriffe: Grok 3 auf Apps, Grok 4 subscribers-only. Für Security-Services: Integriere API für Threat-Detection.",
      "icon": "fa-rocket"
    }
  ],
  "tools": [
    {
      "name": "Code Execution",
      "description": "Führe Python-Code aus. Beispiel in Prompt: <xai:function_call\"code_execution\"><parameter name=\"code\">print('Hello Security')</parameter</xai:function_call. Für Cyber: Simuliere Attacks.",
      "snippet": "def secure_hash(input): return hash(input)  # Beispiel"
    },
    {
      "name": "Web Search",
      "description": "Suche im Web. Beispiel: web_search für 'Cyber Security Trends Schweiz'.",
      "snippet": "query: 'Top Threats 2025'"
    },
    {
      "name": "X Semantic Search",
      "description": "Finde relevante X-Posts. Beispiel für Security: x_semantic_search query='Phishing Attacks Schweiz'.",
      "snippet": "limit: 10, min_score_threshold: 0.18"
    }
  ],
  "chatExamples": [
    {
      "question": "Was ist dein Wissenscutoff?",
      "answer": "Kein Cutoff, kontinuierlich aktualisiert. Für Cyber Security: Ich suche real-time Threats."
    },
    {
      "question": "Erkläre code_execution.",
      "answer": "Ein Tool zum Ausführen von Code. Beispiel: Für Security-Hashing."
    }
  ]
}