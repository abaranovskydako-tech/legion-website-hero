from crewai import Agent
from langchain.tools import Tool
from typing import List

class SEOSpecialistAgent:
    def __init__(self):
        self.agent = Agent(
            role='SEO Специалист',
            goal='Оптимизация сайта Legion для поисковых систем, улучшение видимости и конверсии',
            backstory="""Вы опытный SEO специалист с 5+ годами опыта в digital marketing. 
            Специализируетесь на техническом SEO, контент-маркетинге и аналитике. 
            Работали с крупными проектами в сфере B2B услуг.""",
            verbose=True,
            allow_delegation=True,
            tools=self._get_tools()
        )
    
    def _get_tools(self) -> List[Tool]:
        return [
            Tool(
                name="meta_analysis",
                func=self._analyze_meta_tags,
                description="Анализ и оптимизация meta тегов"
            ),
            Tool(
                name="content_optimization",
                func=self._optimize_content,
                description="Оптимизация контента для SEO"
            ),
            Tool(
                name="technical_seo_audit",
                func=self._audit_technical_seo,
                description="Технический SEO аудит"
            ),
            Tool(
                name="keyword_research",
                func=self._research_keywords,
                description="Исследование ключевых слов"
            )
        ]
    
    def _analyze_meta_tags(self, page_content: str) -> str:
        return "Meta теги проанализированы. Рекомендации: ..."
    
    def _optimize_content(self, content: str) -> str:
        return "Контент оптимизирован для SEO: ..."
    
    def _audit_technical_seo(self, url: str) -> str:
        return "Технический SEO аудит завершен: ..."
    
    def _research_keywords(self, topic: str) -> str:
        return "Ключевые слова для темы '{topic}': ..."
    
    def get_agent(self):
        return self.agent
