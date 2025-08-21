#!/usr/bin/env python3
"""
Legion Project - QA Testing Script
Автоматизированное тестирование качества проекта
"""

import os
import sys
import subprocess
import json
from pathlib import Path
from datetime import datetime

class QATester:
    def __init__(self):
        self.project_root = Path(__file__).parent.parent
        self.report = {
            "timestamp": datetime.now().isoformat(),
            "project": "Legion Website",
            "tests": [],
            "summary": {
                "total": 0,
                "passed": 0,
                "failed": 0,
                "skipped": 0
            }
        }
    
    def run_test(self, name, test_func, *args, **kwargs):
        """Запуск теста с логированием"""
        print(f"🧪 Запуск теста: {name}")
        
        try:
            result = test_func(*args, **kwargs)
            self.report["tests"].append({
                "name": name,
                "status": "PASSED" if result else "FAILED",
                "result": result
            })
            
            if result:
                self.report["summary"]["passed"] += 1
                print(f"✅ {name}: ПРОЙДЕН")
            else:
                self.report["summary"]["failed"] += 1
                print(f"❌ {name}: ПРОВАЛЕН")
                
        except Exception as e:
            self.report["tests"].append({
                "name": name,
                "status": "ERROR",
                "error": str(e)
            })
            self.report["summary"]["failed"] += 1
            print(f"💥 {name}: ОШИБКА - {e}")
        
        self.report["summary"]["total"] += 1
    
    def test_build(self):
        """Тест сборки проекта"""
        try:
            result = subprocess.run(
                ["npm", "run", "build"],
                cwd=self.project_root,
                capture_output=True,
                text=True,
                timeout=300
            )
            return result.returncode == 0
        except subprocess.TimeoutExpired:
            return False
    
    def test_dependencies(self):
        """Тест зависимостей"""
        try:
            result = subprocess.run(
                ["npm", "list", "--depth=0"],
                cwd=self.project_root,
                capture_output=True,
                text=True
            )
            return result.returncode == 0
        except Exception:
            return False
    
    def test_file_structure(self):
        """Тест структуры файлов"""
        required_files = [
            "package.json",
            "next.config.js",
            "tsconfig.json",
            "tailwind.config.ts",
            "app/layout.tsx",
            "app/page.tsx",
            "app/components/hero.tsx"
        ]
        
        missing_files = []
        for file_path in required_files:
            if not (self.project_root / file_path).exists():
                missing_files.append(file_path)
        
        return len(missing_files) == 0
    
    def test_hero_image(self):
        """Тест наличия hero изображения"""
        hero_image = self.project_root / "public" / "hero_team_adapted.jpg"
        return hero_image.exists()
    
    def test_crewai_setup(self):
        """Тест настройки CrewAI"""
        crewai_files = [
            "src/crew/legion_crew.py",
            "src/agents/tech_lead.py",
            "src/agents/seo_specialist.py",
            "src/agents/ui_ux_designer.py",
            "src/tasks/tech_tasks.py",
            "src/tasks/seo_tasks.py",
            "src/tasks/design_tasks.py"
        ]
        
        missing_files = []
        for file_path in crewai_files:
            if not (self.project_root / file_path).exists():
                missing_files.append(file_path)
        
        return len(missing_files) == 0
    
    def run_all_tests(self):
        """Запуск всех тестов"""
        print("🚀 Запуск QA тестирования проекта Legion...")
        
        self.run_test("Сборка проекта", self.test_build)
        self.run_test("Зависимости", self.test_dependencies)
        self.run_test("Структура файлов", self.test_file_structure)
        self.run_test("Hero изображение", self.test_hero_image)
        self.run_test("CrewAI настройка", self.test_crewai_setup)
        
        self.generate_report()
    
    def generate_report(self):
        """Генерация отчета по тестированию"""
        report_file = self.project_root / "QA_REPORT.json"
        
        with open(report_file, 'w', encoding='utf-8') as f:
            json.dump(self.report, f, ensure_ascii=False, indent=2)
        
        print(f"\n📊 Отчет сохранен в: {report_file}")
        print(f"📈 Итого тестов: {self.report['summary']['total']}")
        print(f"✅ Пройдено: {self.report['summary']['passed']}")
        print(f"❌ Провалено: {self.report['summary']['failed']}")
        print(f"⏭️ Пропущено: {self.report['summary']['skipped']}")

if __name__ == "__main__":
    tester = QATester()
    tester.run_all_tests()
