import defaultSettings from '@/settings'

const title = defaultSettings.title || '启慧AI+能源系统运管平台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
