import get from 'lodash/get'

import dxpLightalertsIcon from './../images/dxp-light/alerts.svg'
import dxpLightcalendarIcon from './../images/dxp-light/calendar.svg'
import dxpLightcrewIcon from './../images/dxp-light/crew.svg'
import dxpLightdashboardIcon from './../images/dxp-light/dashboard.svg'
import dxpLightdropdownIcon from './../images/dxp-light/dropdown.svg'
import dxpLightdownloadIcon from './../images/dxp-light/download.svg'
import dxpLightfilterIcon from './../images/dxp-light/filter.svg'
import dxpLightguestIcon from './../images/dxp-light/guest.svg'
import dxpLighthamburgerIcon from './../images/dxp-light/hamburger.svg'
import dxpLightmessagesIcon from './../images/dxp-light/messages.svg'
import dxpLightmoreIcon from './../images/dxp-light/more.svg'
import dxpLightpdfIcon from './../images/dxp-light/pdf.svg'
import dxpLightprintIcon from './../images/dxp-light/print.svg'
import dxpLightreportsIcon from './../images/dxp-light/reports.svg'
import dxpLightsearchIcon from './../images/dxp-light/search.svg'
import dxpLighttxtIcon from './../images/dxp-light/txt.svg'
import dxpLightvisitorsIcon from './../images/dxp-light/visitors.svg'
import dxpLightchevronIcon from './../images/dxp-light/chevron.svg'
import dxpLightsortIcon from './../images/dxp-light/sort.svg'
import dxpLightsortedIcon from './../images/dxp-light/sorted.svg'
import dxpLighttickIcon from './../images/dxp-light/tick.svg'
import dxpLighthandicapIcon from './../images/dxp-light/handicap.svg'
import dxpLightcommonIcon from './../images/dxp-light/common.svg'
import dxpLightopenFiltersIcon from './../images/dxp-light/open-filters.svg'
import dxpLightAddIcon from './../images/dxp-light/add.svg'
import dxpLightInformationIcon from './../images/dxp-light/information.svg'
import dxpLightrefreshIcon from './../images/dxp-light/refresh.svg'
import dxpLightCabinIcon from './../images/dxp-light/cabin.svg'
import dxpLightSettingsIcon from './../images/dxp-light/settings.svg'
import dxpLightIpmIcon from './../images/dxp-light/ipm.svg'
import dxpLightApprovedItemIcon from './../images/dxp-light/approved-item.svg'
import dxpLightPendingItemIcon from './../images/dxp-light/pending-item.svg'
import dxpLightRejectedItemIcon from './../images/dxp-light/rejected-item.svg'
import dxpLightRemoveItemIcon from './../images/dxp-light/remove.svg'
import dxpLighteditItemIcon from './../images/dxp-light/edit.svg'
import dxpLightLoaderItemIcon from './../images/dxp-light/loader.svg'
import dxpLighttransitionItemIcon from './../images/dxp-light/transition.svg'
import dxpLightPlaceholderItemIcon from './../images/dxp-light/placeholder.png'

import dxpDarkalertsIcon from './../images/dxp-dark/alerts.svg'
import dxpDarkcalendarIcon from './../images/dxp-dark/calendar.svg'
import dxpDarkcrewIcon from './../images/dxp-dark/crew.svg'
import dxpDarkdashboardIcon from './../images/dxp-dark/dashboard.svg'
import dxpDarkdropdownIcon from './../images/dxp-dark/dropdown.svg'
import dxpDarkdownloadIcon from './../images/dxp-dark/download.svg'
import dxpDarkfilterIcon from './../images/dxp-dark/filter.svg'
import dxpDarkguestIcon from './../images/dxp-dark/guest.svg'
import dxpDarkhamburgerIcon from './../images/dxp-dark/hamburger.svg'
import dxpDarkmessagesIcon from './../images/dxp-dark/messages.svg'
import dxpDarkmoreIcon from './../images/dxp-dark/more.svg'
import dxpDarkpdfIcon from './../images/dxp-dark/pdf.svg'
import dxpDarkprintIcon from './../images/dxp-dark/print.svg'
import dxpDarkreportsIcon from './../images/dxp-dark/reports.svg'
import dxpDarksearchIcon from './../images/dxp-dark/search.svg'
import dxpDarktxtIcon from './../images/dxp-dark/txt.svg'
import dxpDarkvisitorsIcon from './../images/dxp-dark/visitors.svg'
import dxpDarkchevronIcon from './../images/dxp-dark/chevron.svg'
import dxpDarksortIcon from './../images/dxp-dark/sort.svg'
import dxpDarksortedIcon from './../images/dxp-dark/sorted.svg'
import dxpDarktickIcon from './../images/dxp-dark/tick.svg'
import dxpDarkhandicapIcon from './../images/dxp-dark/handicap.svg'
import dxpDarkcommonIcon from './../images/dxp-dark/common.svg'
import dxpDarkopenFiltersIcon from './../images/dxp-dark/open-filters.svg'
import dxpDarkAddIcon from './../images/dxp-dark/add.svg'
import dxpDarkInformationIcon from './../images/dxp-dark/information.svg'
import dxpDarkrefreshIcon from './../images/dxp-dark/refresh.svg'
import dxpDarkCabinIcon from './../images/dxp-dark/cabin.svg'
import dxpDarkSettingsIcon from './../images/dxp-dark/settings.svg'
import dxpDarkIpmIcon from './../images/dxp-dark/ipm.svg'
import dxpDarkApprovedItemIcon from './../images/dxp-dark/approved-item.svg'
import dxpDarkPendingItemIcon from './../images/dxp-dark/pending-item.svg'
import dxpDarkRejectedItemIcon from './../images/dxp-dark/rejected-item.svg'
import dxpDarkRemoveItemIcon from './../images/dxp-dark/remove.svg'
import dxpDarkeditItemIcon from './../images/dxp-dark/edit.svg'
import dxpDarkLoaderItemIcon from './../images/dxp-dark/loader.svg'
import dxpDarktransitionItemIcon from './../images/dxp-dark/transition.svg'
import dxpDarkPlaceholderItemIcon from './../images/dxp-dark/placeholder.png'


import vvLightalertsIcon from './../images/vv-light/alerts.svg'
import vvLightcalendarIcon from './../images/vv-light/calendar.svg'
import vvLightcrewIcon from './../images/vv-light/crew.svg'
import vvLightdashboardIcon from './../images/vv-light/dashboard.svg'
import vvLightdropdownIcon from './../images/vv-light/dropdown.svg'
import vvLightdownloadIcon from './../images/vv-light/download.svg'
import vvLightfilterIcon from './../images/vv-light/filter.svg'
import vvLightguestIcon from './../images/vv-light/guest.svg'
import vvLighthamburgerIcon from './../images/vv-light/hamburger.svg'
import vvLightmessagesIcon from './../images/vv-light/messages.svg'
import vvLightmoreIcon from './../images/vv-light/more.svg'
import vvLightpdfIcon from './../images/vv-light/pdf.svg'
import vvLightprintIcon from './../images/vv-light/print.svg'
import vvLightreportsIcon from './../images/vv-light/reports.svg'
import vvLightsearchIcon from './../images/vv-light/search.svg'
import vvLighttxtIcon from './../images/vv-light/txt.svg'
import vvLightvisitorsIcon from './../images/vv-light/visitors.svg'
import vvLightchevronIcon from './../images/vv-light/chevron.svg'
import vvLightsortIcon from './../images/vv-light/sort.svg'
import vvLightsortedIcon from './../images/vv-light/sorted.svg'
import vvLighttickIcon from './../images/vv-light/tick.svg'
import vvLighthandicapIcon from './../images/vv-light/handicap.svg'
import vvLightcommonIcon from './../images/vv-light/common.svg'
import vvLightopenFiltersIcon from './../images/vv-light/open-filters.svg'
import vvLightAddIcon from './../images/vv-light/add.svg'
import vvLightInformationIcon from './../images/vv-light/information.svg'
import vvLightrefreshIcon from './../images/vv-light/refresh.svg'
import vvLightCabinIcon from './../images/vv-light/cabin.svg'
import vvLightSettingsIcon from './../images/vv-light/settings.svg'
import vvLightIpmIcon from './../images/vv-light/ipm.svg'
import vvLightApprovedItemIcon from './../images/vv-light/approved-item.svg'
import vvLightPendingItemIcon from './../images/vv-light/pending-item.svg'
import vvLightRejectedItemIcon from './../images/vv-light/rejected-item.svg'
import vvLightRemoveItemIcon from './../images/vv-light/remove.svg'
import vvLighteditItemIcon from './../images/vv-light/edit.svg'
import vvLightLoaderItemIcon from './../images/vv-light/loader.gif'
import vvLighttransitionItemIcon from './../images/vv-light/transition.svg'
import vvLightPlaceholderItemIcon from './../images/vv-light/placeholder.png'


import vvDarkalertsIcon from './../images/vv-dark/alerts.svg'
import vvDarkcalendarIcon from './../images/vv-dark/calendar.svg'
import vvDarkcrewIcon from './../images/vv-dark/crew.svg'
import vvDarkdashboardIcon from './../images/vv-dark/dashboard.svg'
import vvDarkdropdownIcon from './../images/vv-dark/dropdown.svg'
import vvDarkdownloadIcon from './../images/vv-dark/download.svg'
import vvDarkfilterIcon from './../images/vv-dark/filter.svg'
import vvDarkguestIcon from './../images/vv-dark/guest.svg'
import vvDarkhamburgerIcon from './../images/vv-dark/hamburger.svg'
import vvDarkmessagesIcon from './../images/vv-dark/messages.svg'
import vvDarkmoreIcon from './../images/vv-dark/more.svg'
import vvDarkpdfIcon from './../images/vv-dark/pdf.svg'
import vvDarkprintIcon from './../images/vv-dark/print.svg'
import vvDarkreportsIcon from './../images/vv-dark/reports.svg'
import vvDarksearchIcon from './../images/vv-dark/search.svg'
import vvDarktxtIcon from './../images/vv-dark/txt.svg'
import vvDarkvisitorsIcon from './../images/vv-dark/visitors.svg'
import vvDarkchevronIcon from './../images/vv-dark/chevron.svg'
import vvDarksortIcon from './../images/vv-dark/sort.svg'
import vvDarksortedIcon from './../images/vv-dark/sorted.svg'
import vvDarktickIcon from './../images/vv-dark/tick.svg'
import vvDarkhandicapIcon from './../images/vv-dark/handicap.svg'
import vvDarkcommonIcon from './../images/vv-dark/common.svg'
import vvDarkopenFiltersIcon from './../images/vv-dark/open-filters.svg'
import vvDarkAddIcon from './../images/vv-dark/add.svg'
import vvDarkInformationIcon from './../images/vv-dark/information.svg'
import vvDarkrefreshIcon from './../images/vv-dark/refresh.svg'
import vvDarkCabinIcon from './../images/vv-dark/cabin.svg'
import vvDarkSettingsIcon from './../images/vv-dark/settings.svg'
import vvDarkIpmIcon from './../images/vv-dark/ipm.svg'
import vvDarkApprovedItemIcon from './../images/vv-dark/approved-item.svg'
import vvDarkPendingItemIcon from './../images/vv-dark/pending-item.svg'
import vvDarkRejectedItemIcon from './../images/vv-dark/rejected-item.svg'
import vvDarkRemoveItemIcon from './../images/vv-dark/remove.svg'
import vvDarkeditItemIcon from './../images/vv-dark/edit.svg'
import vvDarkLoaderItemIcon from './../images/vv-dark/loader.gif'
import vvDarktransitionItemIcon from './../images/vv-dark/transition.svg'
import vvDarkPlaceholderItemIcon from './../images/vv-dark/placeholder.png'


import nclLightalertsIcon from './../images/ncl-light/alerts.svg'
import nclLightcalendarIcon from './../images/ncl-light/calendar.svg'
import nclLightcrewIcon from './../images/ncl-light/crew.svg'
import nclLightdashboardIcon from './../images/ncl-light/dashboard.svg'
import nclLightdropdownIcon from './../images/ncl-light/dropdown.svg'
import nclLightdownloadIcon from './../images/ncl-light/download.svg'
import nclLightfilterIcon from './../images/ncl-light/filter.svg'
import nclLightguestIcon from './../images/ncl-light/guest.svg'
import nclLighthamburgerIcon from './../images/ncl-light/hamburger.svg'
import nclLightmessagesIcon from './../images/ncl-light/messages.svg'
import nclLightmoreIcon from './../images/ncl-light/more.svg'
import nclLightpdfIcon from './../images/ncl-light/pdf.svg'
import nclLightprintIcon from './../images/ncl-light/print.svg'
import nclLightreportsIcon from './../images/ncl-light/reports.svg'
import nclLightsearchIcon from './../images/ncl-light/search.svg'
import nclLighttxtIcon from './../images/ncl-light/txt.svg'
import nclLightvisitorsIcon from './../images/ncl-light/visitors.svg'
import nclLightchevronIcon from './../images/ncl-light/chevron.svg'
import nclLightsortIcon from './../images/ncl-light/sort.svg'
import nclLightsortedIcon from './../images/ncl-light/sorted.svg'
import nclLighttickIcon from './../images/ncl-light/tick.svg'
import nclLighthandicapIcon from './../images/ncl-light/handicap.svg'
import nclLightcommonIcon from './../images/ncl-light/common.svg'
import nclLightopenFiltersIcon from './../images/ncl-light/open-filters.svg'
import nclLightAddIcon from './../images/ncl-light/add.svg'
import nclLightInformationIcon from './../images/ncl-light/information.svg'
import nclLightrefreshIcon from './../images/ncl-light/refresh.svg'
import nclLightCabinIcon from './../images/ncl-light/cabin.svg'
import nclLightSettingsIcon from './../images/ncl-light/settings.svg'
import nclLightIpmIcon from './../images/ncl-light/ipm.svg'
import nclLightApprovedItemIcon from './../images/ncl-light/approved-item.svg'
import nclLightPendingItemIcon from './../images/vv-light/pending-item.svg'
import nclLightRejectedItemIcon from './../images/vv-light/rejected-item.svg'
import nclLightRemoveItemIcon from './../images/ncl-light/remove.svg'
import nclLighteditItemIcon from './../images/ncl-light/edit.svg'
import nclLightLoaderItemIcon from './../images/ncl-light/loader.svg'
import nclLighttransitionItemIcon from './../images/ncl-light/transition.svg'
import nclLightPlaceholderItemIcon from './../images/ncl-light/placeholder.png'


import nclDarkalertsIcon from './../images/ncl-dark/alerts.svg'
import nclDarkcalendarIcon from './../images/ncl-dark/calendar.svg'
import nclDarkcrewIcon from './../images/ncl-dark/crew.svg'
import nclDarkdashboardIcon from './../images/ncl-dark/dashboard.svg'
import nclDarkdropdownIcon from './../images/ncl-dark/dropdown.svg'
import nclDarkdownloadIcon from './../images/ncl-dark/download.svg'
import nclDarkfilterIcon from './../images/ncl-dark/filter.svg'
import nclDarkguestIcon from './../images/ncl-dark/guest.svg'
import nclDarkhamburgerIcon from './../images/ncl-dark/hamburger.svg'
import nclDarkmessagesIcon from './../images/ncl-dark/messages.svg'
import nclDarkmoreIcon from './../images/ncl-dark/more.svg'
import nclDarkpdfIcon from './../images/ncl-dark/pdf.svg'
import nclDarkprintIcon from './../images/ncl-dark/print.svg'
import nclDarkreportsIcon from './../images/ncl-dark/reports.svg'
import nclDarksearchIcon from './../images/ncl-dark/search.svg'
import nclDarktxtIcon from './../images/ncl-dark/txt.svg'
import nclDarkvisitorsIcon from './../images/ncl-dark/visitors.svg'
import nclDarkchevronIcon from './../images/ncl-dark/chevron.svg'
import nclDarksortIcon from './../images/ncl-dark/sort.svg'
import nclDarksortedIcon from './../images/ncl-dark/sorted.svg'
import nclDarktickIcon from './../images/ncl-dark/tick.svg'
import nclDarkhandicapIcon from './../images/ncl-dark/handicap.svg'
import nclDarkcommonIcon from './../images/ncl-dark/common.svg'
import nclDarkopenFiltersIcon from './../images/ncl-dark/open-filters.svg'
import nclDarkAddIcon from './../images/ncl-dark/add.svg'
import nclDarkInformationIcon from './../images/ncl-dark/information.svg'
import nclDarkrefreshIcon from './../images/ncl-dark/refresh.svg'
import nclDarkCabinIcon from './../images/ncl-dark/cabin.svg'
import nclDarkSettingsIcon from './../images/ncl-dark/settings.svg'
import nclDarkIpmIcon from './../images/ncl-dark/ipm.svg'
import nclDarkApprovedItemIcon from './../images/ncl-dark/approved-item.svg'
import nclDarkPendingItemIcon from './../images/ncl-dark/pending-item.svg'
import nclDarkRejectedItemIcon from './../images/ncl-dark/rejected-item.svg'
import nclDarkeditItemIcon from './../images/ncl-dark/edit.svg'
import nclDarkRemoveItemIcon from './../images/ncl-dark/remove.svg'
import nclDarkLoaderItemIcon from './../images/ncl-dark/loader.svg'
import nclDarktransitionItemIcon from './../images/ncl-dark/transition.svg'
import nclDarkPlaceholderItemIcon from './../images/ncl-dark/placeholder.png'


const icons = {}


icons['dxp-light'] = {
  alerts: dxpLightalertsIcon,
  calendar: dxpLightcalendarIcon,
  crew: dxpLightcrewIcon,
  dashboard: dxpLightdashboardIcon,
  dropdown: dxpLightdropdownIcon,
  download: dxpLightdownloadIcon,
  filter: dxpLightfilterIcon,
  guest: dxpLightguestIcon,
  hamburger: dxpLighthamburgerIcon,
  messages: dxpLightmessagesIcon,
  more: dxpLightmoreIcon,
  pdf: dxpLightpdfIcon,
  print: dxpLightprintIcon,
  reports: dxpLightreportsIcon,
  search: dxpLightsearchIcon,
  txt: dxpLighttxtIcon,
  visitors: dxpLightvisitorsIcon,
  chevron: dxpLightchevronIcon,
  sort: dxpLightsortIcon,
  sorted: dxpLightsortedIcon,
  tick: dxpLighttickIcon,
  handicap: dxpLighthandicapIcon,
  common: dxpLightcommonIcon,
  openFilters: dxpLightopenFiltersIcon,
  add: dxpLightAddIcon,
  information: dxpLightInformationIcon,
  refresh: dxpLightrefreshIcon,
  cabin: dxpLightCabinIcon,
  settings: dxpLightSettingsIcon,
  ipm: dxpLightIpmIcon,
  approvedItem: dxpLightApprovedItemIcon,
  pendingItem: dxpLightPendingItemIcon,
  rejectedItem: dxpLightRejectedItemIcon,
  remove: dxpLightRemoveItemIcon,
  edit: dxpLighteditItemIcon,
  loader: dxpLightLoaderItemIcon,
  transition: dxpLighttransitionItemIcon,
  placeholder: dxpLightPlaceholderItemIcon,
}

icons['dxp-dark'] = {
  alerts: dxpDarkalertsIcon,
  calendar: dxpDarkcalendarIcon,
  crew: dxpDarkcrewIcon,
  dashboard: dxpDarkdashboardIcon,
  dropdown: dxpDarkdropdownIcon,
  download: dxpDarkdownloadIcon,
  filter: dxpDarkfilterIcon,
  guest: dxpDarkguestIcon,
  hamburger: dxpDarkhamburgerIcon,
  messages: dxpDarkmessagesIcon,
  more: dxpDarkmoreIcon,
  pdf: dxpDarkpdfIcon,
  print: dxpDarkprintIcon,
  reports: dxpDarkreportsIcon,
  search: dxpDarksearchIcon,
  txt: dxpDarktxtIcon,
  visitors: dxpDarkvisitorsIcon,
  chevron: dxpDarkchevronIcon,
  sort: dxpDarksortIcon,
  sorted: dxpDarksortedIcon,
  tick: dxpDarktickIcon,
  handicap: dxpDarkhandicapIcon,
  common: dxpDarkcommonIcon,
  openFilters: dxpDarkopenFiltersIcon,
  add: dxpDarkAddIcon,
  information: dxpDarkInformationIcon,
  refresh: dxpDarkrefreshIcon,
  cabin: dxpDarkCabinIcon,
  settings: dxpDarkSettingsIcon,
  ipm: dxpDarkIpmIcon,
  approvedItem: dxpDarkApprovedItemIcon,
  pendingItem: dxpDarkPendingItemIcon,
  rejectedItem: dxpDarkRejectedItemIcon,
  remove: dxpDarkRemoveItemIcon,
  edit: dxpDarkeditItemIcon,
  loader: dxpDarkLoaderItemIcon,
  transition: dxpDarktransitionItemIcon,
  placeholder: dxpDarkPlaceholderItemIcon

}

icons['vv-light'] = {
  alerts: vvLightalertsIcon,
  calendar: vvLightcalendarIcon,
  crew: vvLightcrewIcon,
  dashboard: vvLightdashboardIcon,
  dropdown: vvLightdropdownIcon,
  download: vvLightdownloadIcon,
  filter: vvLightfilterIcon,
  guest: vvLightguestIcon,
  hamburger: vvLighthamburgerIcon,
  messages: vvLightmessagesIcon,
  more: vvLightmoreIcon,
  pdf: vvLightpdfIcon,
  print: vvLightprintIcon,
  reports: vvLightreportsIcon,
  search: vvLightsearchIcon,
  txt: vvLighttxtIcon,
  visitors: vvLightvisitorsIcon,
  chevron: vvLightchevronIcon,
  sort: vvLightsortIcon,
  sorted: vvLightsortedIcon,
  tick: vvLighttickIcon,
  handicap: vvLighthandicapIcon,
  common: vvLightcommonIcon,
  openFilters: vvLightopenFiltersIcon,
  add: vvLightAddIcon,
  information: vvLightInformationIcon,
  refresh: vvLightrefreshIcon,
  cabin: vvLightCabinIcon,
  settings: vvLightSettingsIcon,
  ipm: vvLightIpmIcon,
  approvedItem: vvLightApprovedItemIcon,
  pendingItem: vvLightPendingItemIcon,
  rejectedItem: vvLightRejectedItemIcon,
  remove: vvLightRemoveItemIcon,
  edit: vvLighteditItemIcon,
  loader: vvLightLoaderItemIcon,
  transition: vvLighttransitionItemIcon,
  placeholder: vvLightPlaceholderItemIcon,

}


icons['vv-dark'] = {
  alerts: vvDarkalertsIcon,
  calendar: vvDarkcalendarIcon,
  crew: vvDarkcrewIcon,
  dashboard: vvDarkdashboardIcon,
  dropdown: vvDarkdropdownIcon,
  download: vvDarkdownloadIcon,
  filter: vvDarkfilterIcon,
  guest: vvDarkguestIcon,
  hamburger: vvDarkhamburgerIcon,
  messages: vvDarkmessagesIcon,
  more: vvDarkmoreIcon,
  pdf: vvDarkpdfIcon,
  print: vvDarkprintIcon,
  reports: vvDarkreportsIcon,
  search: vvDarksearchIcon,
  txt: vvDarktxtIcon,
  visitors: vvDarkvisitorsIcon,
  chevron: vvDarkchevronIcon,
  sort: vvDarksortIcon,
  sorted: vvDarksortedIcon,
  tick: vvDarktickIcon,
  handicap: vvDarkhandicapIcon,
  common: vvDarkcommonIcon,
  openFilters: vvDarkopenFiltersIcon,
  add: vvDarkAddIcon,
  information: vvDarkInformationIcon,
  refresh: vvDarkrefreshIcon,
  cabin: vvDarkCabinIcon,
  settings: vvDarkSettingsIcon,
  ipm: vvDarkIpmIcon,
  approvedItem: vvDarkApprovedItemIcon,
  pendingItem: vvDarkPendingItemIcon,
  rejectedItem: vvDarkRejectedItemIcon,
  remove: vvDarkRemoveItemIcon,
  edit: vvDarkeditItemIcon,
  loader: vvDarkLoaderItemIcon,
  transition: vvDarktransitionItemIcon,
  placeholder: vvDarkPlaceholderItemIcon

}


icons['ncl-light'] = {
  alerts: nclLightalertsIcon,
  calendar: nclLightcalendarIcon,
  crew: nclLightcrewIcon,
  dashboard: nclLightdashboardIcon,
  dropdown: nclLightdropdownIcon,
  download: nclLightdownloadIcon,
  filter: nclLightfilterIcon,
  guest: nclLightguestIcon,
  hamburger: nclLighthamburgerIcon,
  messages: nclLightmessagesIcon,
  more: nclLightmoreIcon,
  pdf: nclLightpdfIcon,
  print: nclLightprintIcon,
  reports: nclLightreportsIcon,
  search: nclLightsearchIcon,
  txt: nclLighttxtIcon,
  visitors: nclLightvisitorsIcon,
  chevron: nclLightchevronIcon,
  sort: nclLightsortIcon,
  sorted: nclLightsortedIcon,
  tick: nclLighttickIcon,
  handicap: nclLighthandicapIcon,
  common: nclLightcommonIcon,
  openFilters: nclLightopenFiltersIcon,
  add: nclLightAddIcon,
  information: nclLightInformationIcon,
  refresh: nclLightrefreshIcon,
  cabin: nclLightCabinIcon,
  settings: nclLightSettingsIcon,
  ipm: nclLightIpmIcon,
  approvedItem: nclLightApprovedItemIcon,
  pendingItem: nclLightPendingItemIcon,
  rejectedItem: nclLightRejectedItemIcon,
  remove: nclLightRemoveItemIcon,
  edit: nclLighteditItemIcon,
  loader: nclLightLoaderItemIcon,
  transition: nclLighttransitionItemIcon,
  placeholder: nclLightPlaceholderItemIcon

}

icons['ncl-dark'] = {
  alerts: nclDarkalertsIcon,
  calendar: nclDarkcalendarIcon,
  crew: nclDarkcrewIcon,
  dashboard: nclDarkdashboardIcon,
  dropdown: nclDarkdropdownIcon,
  download: nclDarkdownloadIcon,
  filter: nclDarkfilterIcon,
  guest: nclDarkguestIcon,
  hamburger: nclDarkhamburgerIcon,
  messages: nclDarkmessagesIcon,
  more: nclDarkmoreIcon,
  pdf: nclDarkpdfIcon,
  print: nclDarkprintIcon,
  reports: nclDarkreportsIcon,
  search: nclDarksearchIcon,
  txt: nclDarktxtIcon,
  visitors: nclDarkvisitorsIcon,
  chevron: nclDarkchevronIcon,
  sort: nclDarksortIcon,
  sorted: nclDarksortedIcon,
  tick: nclDarktickIcon,
  handicap: nclDarkhandicapIcon,
  common: nclDarkcommonIcon,
  openFilters: nclDarkopenFiltersIcon,
  add: nclDarkAddIcon,
  information: nclDarkInformationIcon,
  refresh: nclDarkrefreshIcon,
  cabin: nclDarkCabinIcon,
  settings: nclDarkSettingsIcon,
  ipm: nclDarkIpmIcon,
  approvedItem: nclDarkApprovedItemIcon,
  pendingItem: nclDarkPendingItemIcon,
  rejectedItem: nclDarkRejectedItemIcon,
  remove: nclDarkRemoveItemIcon,
  edit: nclDarkeditItemIcon,
  loader: nclDarkLoaderItemIcon,
  transition: nclDarktransitionItemIcon,
  placeholder: nclDarkPlaceholderItemIcon


}

export const getMobileOperatingSystem = () => {
  let userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return "IOS";

  if (/android/i.test(userAgent)) return "android";

  return null;
};

export const isDescendant = (parent, child) => {
  var node = child.parentNode;
  while (node != null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

export const getSVG = (brandedTheme, svg) => {
  const list = icons[brandedTheme];
  const item = list[svg]
  return item ? item : "";
}

