from crewai import Task

class SEOTasks:
    def optimize_seo(self):
        """Оптимизация SEO для всего сайта"""
        return Task(
            description="""Проведите комплексную SEO оптимизацию сайта Legion:
            1. Проанализируйте текущие meta теги
            2. Проверьте структуру заголовков (H1, H2, H3)
            3. Оптимизируйте контент для ключевых слов
            4. Проверьте техническое SEO (скорость, мобильность)
            5. Создайте план улучшения видимости в поиске""",
            agent=self.seo_specialist,
            expected_output="Отчет по SEO оптимизации с рекомендациями"
        )
    
    def optimize_meta_tags(self):
        """Оптимизация meta тегов"""
        return Task(
            description="""Оптимизируйте meta теги для всех страниц:
            1. Title теги для каждой страницы
            2. Meta description с призывом к действию
            3. Open Graph теги для социальных сетей
            4. Twitter Card теги
            5. Структурированные данные (JSON-LD)""",
            agent=self.seo_specialist,
            expected_output="Оптимизированные meta теги для всех страниц"
        )
    
    def content_optimization(self):
        """Оптимизация контента"""
        return Task(
            description="""Оптимизируйте контент для поисковых систем:
            1. Анализ ключевых слов для каждой страницы
            2. Оптимизация текстового контента
            3. Улучшение внутренней перелинковки
            4. Создание контент-плана для развития
            5. Оптимизация изображений (alt теги, названия)""",
            agent=self.seo_specialist,
            expected_output="План оптимизации контента и рекомендации"
        )
    
    def technical_seo_audit(self):
        """Технический SEO аудит"""
        return Task(
            description="""Проведите технический SEO аудит:
            1. Проверка скорости загрузки страниц
            2. Анализ Core Web Vitals
            3. Проверка мобильной оптимизации
            4. Анализ структуры URL
            5. Проверка sitemap.xml и robots.txt""",
            agent=self.seo_specialist,
            expected_output="Отчет по техническому SEO с планом улучшений"
        )
