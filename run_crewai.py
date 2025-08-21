#!/usr/bin/env python3
"""
Legion Project - CrewAI Runner
Простой скрипт для запуска системы автоматизированной разработки
"""

import sys
import os
from pathlib import Path

# Добавляем src директорию в Python path
src_dir = Path(__file__).parent / "src"
sys.path.append(str(src_dir))

def main():
    """Основная функция запуска"""
    print("🚀 Запуск Legion CrewAI системы...")
    
    try:
        # Импортируем после добавления пути
        from crew.legion_crew import LegionCrew
        
        print("📋 Создание команды...")
        crew = LegionCrew()
        
        print("🔧 Запуск настройки проекта...")
        result = crew.run_project_setup()
        
        print("✅ Настройка проекта завершена!")
        print(f"📊 Результат: {result}")
        
        return True
        
    except ImportError as e:
        print(f"❌ Ошибка импорта: {e}")
        print("Убедитесь, что все зависимости установлены:")
        print("pip3 install -r requirements.txt")
        return False
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
