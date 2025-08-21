from crewai import Agent
from langchain.tools import Tool
from typing import List

class TechLeadAgent:
    def __init__(self):
        self.agent = Agent(
            role='Tech Lead',
            goal='Управление технической инфраструктурой проекта Legion, обеспечение качества кода и архитектуры',
            backstory="""Вы опытный Tech Lead с 8+ годами опыта в разработке веб-приложений. 
            Специализируетесь на Next.js, TypeScript, и современных веб-технологиях. 
            Отвечаете за архитектуру, качество кода и технические решения.""",
            verbose=True,
            allow_delegation=True,
            tools=self._get_tools()
        )
    
    def _get_tools(self) -> List[Tool]:
        return [
            Tool(
                name="code_review",
                func=self._review_code,
                description="Проверка качества кода и архитектурных решений"
            ),
            Tool(
                name="architecture_planning",
                func=self._plan_architecture,
                description="Планирование архитектурных решений"
            ),
            Tool(
                name="performance_optimization",
                func=self._optimize_performance,
                description="Оптимизация производительности приложения"
            )
        ]
    
    def _review_code(self, code: str) -> str:
        # Логика проверки кода
        return "Код проверен. Рекомендации по улучшению: ..."
    
    def _plan_architecture(self, requirements: str) -> str:
        # Логика планирования архитектуры
        return "Архитектурный план создан: ..."
    
    def _optimize_performance(self, metrics: str) -> str:
        # Логика оптимизации
        return "План оптимизации: ..."
    
    def get_agent(self):
        return self.agent
