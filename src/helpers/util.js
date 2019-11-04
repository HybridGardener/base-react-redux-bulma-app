import get from 'lodash/get'

import dxpalertsIcon from './../images/dxp/alerts.svg'
import dxpcalendarIcon from './../images/dxp/calendar.svg'
import dxpcrewIcon from './../images/dxp/crew.svg'
import dxpdashboardIcon from './../images/dxp/dashboard.svg'
import dxpdropdownIcon from './../images/dxp/dropdown.svg'
import dxpdownloadIcon from './../images/dxp/download.svg'
import dxpfilterIcon from './../images/dxp/filter.svg'
import dxpguestIcon from './../images/dxp/guest.svg'
import dxphamburgerIcon from './../images/dxp/hamburger.svg'
import dxpmessagesIcon from './../images/dxp/messages.svg'
import dxpmoreIcon from './../images/dxp/more.svg'
import dxppdfIcon from './../images/dxp/pdf.svg'
import dxpprintIcon from './../images/dxp/print.svg'
import dxpreportsIcon from './../images/dxp/reports.svg'
import dxpsearchIcon from './../images/dxp/search.svg'
import dxptxtIcon from './../images/dxp/txt.svg'
import dxpvisitorsIcon from './../images/dxp/visitors.svg'
import dxpchevronIcon from './../images/dxp/chevron.svg'
import dxpsortIcon from './../images/dxp/sort.svg'
import dxpsortedIcon from './../images/dxp/sorted.svg'
import dxptickIcon from './../images/dxp/tick.svg'
import dxphandicapIcon from './../images/dxp/handicap.svg'
import dxpcommonIcon from './../images/dxp/common.svg'
import dxpopenFiltersIcon from './../images/dxp/open-filters.svg'
import dxpAddIcon from './../images/dxp/add.svg'
import dxpInformationIcon from './../images/dxp/information.svg'
import dxprefreshIcon from './../images/dxp/refresh.svg'
import dxpCabinIcon from './../images/dxp/cabin.svg'
import dxpSettingsIcon from './../images/dxp/settings.svg'
import dxpIpmIcon from './../images/dxp/ipm.svg'
import dxpApprovedItemIcon from './../images/dxp/approved-item.svg'
import dxpPendingItemIcon from './../images/dxp/pending-item.svg'
import dxpRejectedItemIcon from './../images/dxp/rejected-item.svg'
import dxpRemoveItemIcon from './../images/dxp/remove.svg'
import dxpeditItemIcon from './../images/dxp/edit.svg'
import dxpLoaderItemIcon from './../images/dxp/loader.svg'
import dxptransitionItemIcon from './../images/dxp/transition.svg'
import dxpPlaceholderItemIcon from './../images/dxp/placeholder.png'

import vvalertsIcon from './../images/vv/alerts.svg'
import vvcalendarIcon from './../images/vv/calendar.svg'
import vvcrewIcon from './../images/vv/crew.svg'
import vvdashboardIcon from './../images/vv/dashboard.svg'
import vvdropdownIcon from './../images/vv/dropdown.svg'
import vvdownloadIcon from './../images/vv/download.svg'
import vvfilterIcon from './../images/vv/filter.svg'
import vvguestIcon from './../images/vv/guest.svg'
import vvhamburgerIcon from './../images/vv/hamburger.svg'
import vvmessagesIcon from './../images/vv/messages.svg'
import vvmoreIcon from './../images/vv/more.svg'
import vvpdfIcon from './../images/vv/pdf.svg'
import vvprintIcon from './../images/vv/print.svg'
import vvreportsIcon from './../images/vv/reports.svg'
import vvsearchIcon from './../images/vv/search.svg'
import vvtxtIcon from './../images/vv/txt.svg'
import vvvisitorsIcon from './../images/vv/visitors.svg'
import vvchevronIcon from './../images/vv/chevron.svg'
import vvsortIcon from './../images/vv/sort.svg'
import vvsortedIcon from './../images/vv/sorted.svg'
import vvtickIcon from './../images/vv/tick.svg'
import vvhandicapIcon from './../images/vv/handicap.svg'
import vvcommonIcon from './../images/vv/common.svg'
import vvopenFiltersIcon from './../images/vv/open-filters.svg'
import vvAddIcon from './../images/vv/add.svg'
import vvInformationIcon from './../images/vv/information.svg'
import vvrefreshIcon from './../images/vv/refresh.svg'
import vvCabinIcon from './../images/vv/cabin.svg'
import vvSettingsIcon from './../images/vv/settings.svg'
import vvIpmIcon from './../images/vv/ipm.svg'
import vvApprovedItemIcon from './../images/vv/approved-item.svg'
import vvPendingItemIcon from './../images/vv/pending-item.svg'
import vvRejectedItemIcon from './../images/vv/rejected-item.svg'
import vvRemoveItemIcon from './../images/vv/remove.svg'
import vveditItemIcon from './../images/vv/edit.svg'
import vvLoaderItemIcon from './../images/vv/loader.gif'
import vvtransitionItemIcon from './../images/vv/transition.svg'
import vvPlaceholderItemIcon from './../images/vv/placeholder.png'


import nclalertsIcon from './../images/ncl/alerts.svg'
import nclcalendarIcon from './../images/ncl/calendar.svg'
import nclcrewIcon from './../images/ncl/crew.svg'
import ncldashboardIcon from './../images/ncl/dashboard.svg'
import ncldropdownIcon from './../images/ncl/dropdown.svg'
import ncldownloadIcon from './../images/ncl/download.svg'
import nclfilterIcon from './../images/ncl/filter.svg'
import nclguestIcon from './../images/ncl/guest.svg'
import nclhamburgerIcon from './../images/ncl/hamburger.svg'
import nclmessagesIcon from './../images/ncl/messages.svg'
import nclmoreIcon from './../images/ncl/more.svg'
import nclpdfIcon from './../images/ncl/pdf.svg'
import nclprintIcon from './../images/ncl/print.svg'
import nclreportsIcon from './../images/ncl/reports.svg'
import nclsearchIcon from './../images/ncl/search.svg'
import ncltxtIcon from './../images/ncl/txt.svg'
import nclvisitorsIcon from './../images/ncl/visitors.svg'
import nclchevronIcon from './../images/ncl/chevron.svg'
import nclsortIcon from './../images/ncl/sort.svg'
import nclsortedIcon from './../images/ncl/sorted.svg'
import ncltickIcon from './../images/ncl/tick.svg'
import nclhandicapIcon from './../images/ncl/handicap.svg'
import nclcommonIcon from './../images/ncl/common.svg'
import nclopenFiltersIcon from './../images/ncl/open-filters.svg'
import nclAddIcon from './../images/ncl/add.svg'
import nclInformationIcon from './../images/ncl/information.svg'
import nclrefreshIcon from './../images/ncl/refresh.svg'
import nclCabinIcon from './../images/ncl/cabin.svg'
import nclSettingsIcon from './../images/ncl/settings.svg'
import nclIpmIcon from './../images/ncl/ipm.svg'
import nclApprovedItemIcon from './../images/ncl/approved-item.svg'
import nclPendingItemIcon from './../images/vv/pending-item.svg'
import nclRejectedItemIcon from './../images/vv/rejected-item.svg'
import nclRemoveItemIcon from './../images/ncl/remove.svg'
import ncleditItemIcon from './../images/ncl/edit.svg'
import nclLoaderItemIcon from './../images/ncl/loader.svg'
import ncltransitionItemIcon from './../images/ncl/transition.svg'
import nclPlaceholderItemIcon from './../images/ncl/placeholder.png'




const icons = {}


icons['dxp'] = {
  alerts: dxpalertsIcon,
  calendar: dxpcalendarIcon,
  crew: dxpcrewIcon,
  dashboard: dxpdashboardIcon,
  dropdown: dxpdropdownIcon,
  download: dxpdownloadIcon,
  filter: dxpfilterIcon,
  guest: dxpguestIcon,
  hamburger: dxphamburgerIcon,
  messages: dxpmessagesIcon,
  more: dxpmoreIcon,
  pdf: dxppdfIcon,
  print: dxpprintIcon,
  reports: dxpreportsIcon,
  search: dxpsearchIcon,
  txt: dxptxtIcon,
  visitors: dxpvisitorsIcon,
  chevron: dxpchevronIcon,
  sort: dxpsortIcon,
  sorted: dxpsortedIcon,
  tick: dxptickIcon,
  handicap: dxphandicapIcon,
  common: dxpcommonIcon,
  openFilters: dxpopenFiltersIcon,
  add: dxpAddIcon,
  information: dxpInformationIcon,
  refresh: dxprefreshIcon,
  cabin: dxpCabinIcon,
  settings: dxpSettingsIcon,
  ipm: dxpIpmIcon,
  approvedItem: dxpApprovedItemIcon,
  pendingItem: dxpPendingItemIcon,
  rejectedItem: dxpRejectedItemIcon,
  remove: dxpRemoveItemIcon,
  edit: dxpeditItemIcon,
  loader: dxpLoaderItemIcon,
  transition: dxptransitionItemIcon,
  placeholder: dxpPlaceholderItemIcon,
}


icons['vv'] = {
  alerts: vvalertsIcon,
  calendar: vvcalendarIcon,
  crew: vvcrewIcon,
  dashboard: vvdashboardIcon,
  dropdown: vvdropdownIcon,
  download: vvdownloadIcon,
  filter: vvfilterIcon,
  guest: vvguestIcon,
  hamburger: vvhamburgerIcon,
  messages: vvmessagesIcon,
  more: vvmoreIcon,
  pdf: vvpdfIcon,
  print: vvprintIcon,
  reports: vvreportsIcon,
  search: vvsearchIcon,
  txt: vvtxtIcon,
  visitors: vvvisitorsIcon,
  chevron: vvchevronIcon,
  sort: vvsortIcon,
  sorted: vvsortedIcon,
  tick: vvtickIcon,
  handicap: vvhandicapIcon,
  common: vvcommonIcon,
  openFilters: vvopenFiltersIcon,
  add: vvAddIcon,
  information: vvInformationIcon,
  refresh: vvrefreshIcon,
  cabin: vvCabinIcon,
  settings: vvSettingsIcon,
  ipm: vvIpmIcon,
  approvedItem: vvApprovedItemIcon,
  pendingItem: vvPendingItemIcon,
  rejectedItem: vvRejectedItemIcon,
  remove: vvRemoveItemIcon,
  edit: vveditItemIcon,
  loader: vvLoaderItemIcon,
  transition: vvtransitionItemIcon,
  placeholder: vvPlaceholderItemIcon,

}


icons['ncl'] = {
  alerts: nclalertsIcon,
  calendar: nclcalendarIcon,
  crew: nclcrewIcon,
  dashboard: ncldashboardIcon,
  dropdown: ncldropdownIcon,
  download: ncldownloadIcon,
  filter: nclfilterIcon,
  guest: nclguestIcon,
  hamburger: nclhamburgerIcon,
  messages: nclmessagesIcon,
  more: nclmoreIcon,
  pdf: nclpdfIcon,
  print: nclprintIcon,
  reports: nclreportsIcon,
  search: nclsearchIcon,
  txt: ncltxtIcon,
  visitors: nclvisitorsIcon,
  chevron: nclchevronIcon,
  sort: nclsortIcon,
  sorted: nclsortedIcon,
  tick: ncltickIcon,
  handicap: nclhandicapIcon,
  common: nclcommonIcon,
  openFilters: nclopenFiltersIcon,
  add: nclAddIcon,
  information: nclInformationIcon,
  refresh: nclrefreshIcon,
  cabin: nclCabinIcon,
  settings: nclSettingsIcon,
  ipm: nclIpmIcon,
  approvedItem: nclApprovedItemIcon,
  pendingItem: nclPendingItemIcon,
  rejectedItem: nclRejectedItemIcon,
  remove: nclRemoveItemIcon,
  edit: ncleditItemIcon,
  loader: nclLoaderItemIcon,
  transition: ncltransitionItemIcon,
  placeholder: nclPlaceholderItemIcon

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

