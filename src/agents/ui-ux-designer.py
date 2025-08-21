from crewai import Agent
from langchain.tools import Tool
from typing import List

class UIUXDesignerAgent:
    def __init__(self):
        self.agent = Agent(
            role='UI/UX Дизайнер',
            goal='Создание интуитивного и привлекательного пользовательского интерфейса для сайта Legion',
            backstory="""Вы креативный UI/UX дизайнер с 6+ годами опыта в веб-дизайне. 
            Специализируетесь на создании современных интерфейсов, улучшении пользовательского опыта 
            и адаптивном дизайне. Работали с проектами в сфере B2B и корпоративными сайтами.""",
            verbose=True,
            allow_delegation=True,
            tools=self._get_tools()
        )
    
    def _get_tools(self) -> List[Tool]:
        return [
            Tool(
                name="layout_analysis",
                func=self._analyze_layout,
                description="Анализ текущего макета и предложения по улучшению"
            ),
            Tool(
                name="hero_block_optimization",
                func=self._optimize_hero_block,
                description="Оптимизация hero блока для лучшего UX"
            ),
            Tool(
                name="responsive_design_check",
                func=self._check_responsive_design,
                description="Проверка адаптивности дизайна"
            ),
            Tool(
                name="user_flow_optimization",
                func=self._optimize_user_flow,
                description="Оптимизация пользовательских сценариев"
            )
        ]
    
    def _analyze_layout(self, current_layout: str) -> str:
        return "Макет проанализирован. Рекомендации по улучшению: ..."
    
    def _optimize_hero_block(self, hero_content: str) -> str:
        return "Hero блок оптимизирован. Фото размещено выше текста и форм: ..."
    
    def _check_responsive_design(self, page_url: str) -> str:
        return "Адаптивность проверена. Проблемы и решения: ..."
    
    def _optimize_user_flow(self, user_journey: str) -> str:
        return "Пользовательские сценарии оптимизированы: ..."
    
    def get_agent(self):
        return self.agent
