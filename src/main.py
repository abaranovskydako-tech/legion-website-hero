#!/usr/bin/env python3
"""
Legion Project - CrewAI Setup
Основной файл для запуска системы автоматизированной разработки
"""

import os
import sys
from pathlib import Path

# Добавляем текущую директорию в Python path
current_dir = Path(__file__).parent
sys.path.append(str(current_dir))

from crew.legion_crew import LegionCrew

def main():
    """Основная функция запуска"""
    print("🚀 Запуск Legion CrewAI системы...")
    
    try:
        # Создаем и настраиваем команду
        crew = LegionCrew()
        
        print("📋 Настройка команды...")
        crew.setup_crew()
        
        print("🔧 Запуск настройки проекта...")
        result = crew.run_project_setup()
        
        print("✅ Настройка проекта завершена!")
        print(f"📊 Результат: {result}")
        
        # Запускаем оптимизацию hero блока
        print("\n🎨 Запуск оптимизации hero блока...")
        hero_result = crew.run_hero_optimization()
        
        print("✅ Оптимизация hero блока завершена!")
        print(f"📊 Результат: {hero_result}")
        
        return True
        
    except Exception as e:
        print(f"❌ Ошибка при запуске: {e}")
        return False

if __name__ == "__main__":
    success = main()
    if success:
        print("\n🎉 Legion CrewAI система успешно запущена!")
    else:
        print("\n💥 Произошла ошибка при запуске системы")
        sys.exit(1)
