
// Global type declarations for window object extensions
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    ym?: (id: number, method: string, ...args: any[]) => void
  }
}

// Form types
export interface LeadFormData {
  name: string
  email?: string
  phone: string
  company?: string
  message?: string
  formType: string
  quizAnswers?: Record<string, string>
  source?: string
}

export interface TenderRequestData {
  name: string
  email: string
  phone: string
  company: string
  position?: string
  tenderInfo?: string
  documentType: string
  urgency: string
  message?: string
  formType: string
  source?: string
}

// Quiz types
export interface QuizQuestion {
  id: string
  title: string
  options: QuizOption[]
}

export interface QuizOption {
  value: string
  label: string
}

// Service types
export interface ServiceType {
  id: string
  icon: any
  title: string
  description: string
  price: string
  features: string[]
  popular?: boolean
}

// Statistics and data types
export interface StatItem {
  number: number
  suffix: string
  label: string
}

// Database model types (matching Prisma schema)
export interface Lead {
  id: string
  name: string
  email?: string
  phone: string
  company?: string
  message?: string
  formType: string
  quizAnswers?: string
  source: string
  status: string
  createdAt: Date
  updatedAt: Date
}

export interface TenderRequest {
  id: string
  name: string
  email: string
  phone: string
  company: string
  position?: string
  tenderInfo?: string
  documentType: string
  urgency: string
  message?: string
  formType: string
  source: string
  status: string
  createdAt: Date
  updatedAt: Date
}

export interface TenderDocument {
  id: string
  title: string
  description?: string
  fileName: string
  filePath: string
  fileSize: number
  category: string
  isPublic: boolean
  createdAt: Date
  updatedAt: Date
}

// Export the file as a module
export {}
