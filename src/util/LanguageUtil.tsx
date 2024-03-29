import i18n from '../../i18n'

import { useTranslation } from "react-i18next"

export function getCurrentLocale(): string {
  return i18n.language
}

export function changeLocale() {
  const targetLocale = getCurrentLocale() == 'en' ? 'zh_HK' : 'en'
  return i18n.changeLanguage(targetLocale)
}

export const t = (key: string) => { 
  const { t } = useTranslation() 
  return t(key)
}