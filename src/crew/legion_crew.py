from crewai import Crew, Process
from src.agents.tech_lead import TechLeadAgent
from src.agents.seo_specialist import SEOSpecialistAgent
from src.agents.ui_ux_designer import UIUXDesignerAgent
from src.tasks.tech_tasks import TechTasks
from src.tasks.seo_tasks import SEOTasks
from src.tasks.design_tasks import DesignTasks

class LegionCrew:
    def __init__(self):
        self.tech_lead = TechLeadAgent().get_agent()
        self.seo_specialist = SEOSpecialistAgent().get_agent()
        self.ui_ux_designer = UIUXDesignerAgent().get_agent()
        
        self.tech_tasks = TechTasks()
        self.seo_tasks = SEOTasks()
        self.design_tasks = DesignTasks()
        
        self.crew = None
    
    def setup_crew(self):
        """Настройка команды для проекта Legion"""
        self.crew = Crew(
            agents=[self.tech_lead, self.seo_specialist, self.ui_ux_designer],
            tasks=[
                self.tech_tasks.setup_infrastructure(),
                self.seo_tasks.optimize_seo(),
                self.design_tasks.optimize_hero_block()
            ],
            process=Process.sequential,
            verbose=True
        )
    
    def run_project_setup(self):
        """Запуск настройки проекта"""
        if not self.crew:
            self.setup_crew()
        
        result = self.crew.kickoff()
        return result
    
    def run_hero_optimization(self):
        """Запуск оптимизации hero блока"""
        hero_crew = Crew(
            agents=[self.ui_ux_designer, self.tech_lead],
            tasks=[
                self.design_tasks.analyze_current_hero(),
                self.design_tasks.optimize_hero_layout(),
                self.tech_tasks.implement_hero_changes()
            ],
            process=Process.sequential,
            verbose=True
        )
        
        result = hero_crew.kickoff()
        return result

if __name__ == "__main__":
    crew = LegionCrew()
    result = crew.run_project_setup()
    print("Результат настройки проекта:", result)
