import Button from './components/base/button/Button'
import FormInput from './components/base/form/FormInput'
import FormPassword from './components/base/form/FormPassword'
import FormSection from './components/base/form/FormSection'
import Icon from './components/base/icon/Icon'
// import ImgAvatar from './components/base/image/Avatar'

// Table
import TablePagination from './components/base/table/TablePagination'
import TableCrud from './components/base/table/TableCrud.vue'

// Sidebar
import Sidebar from './components/base/sidebar/Sidebar'
import SidebarNav from './components/base/sidebar/SidebarNav'
import SidebarItem from './components/base/sidebar/SidebarItem'
import SidebarButton from './components/base/sidebar/SidebarButton'

// Submenu
import Submenu from './components/base/submenu/Submenu'
import SubmenuItem from './components/base/submenu/SubmenuItem'

function install (Vue) {
  Vue.component('d-btn', Button)
  Vue.component('d-button', Button)
  Vue.component('d-input', FormInput)
  Vue.component('d-form-input', FormInput)
  Vue.component('d-password', FormPassword)
  Vue.component('d-form-password', FormPassword)
  Vue.component('d-form-section', FormSection)
  Vue.component('d-icon', Icon)
  // Vue.component('d-avatar', ImgAvatar)

  // Table
  Vue.component('d-table-pagination', TablePagination)
  Vue.component('d-table-crud', TableCrud)

  // Sidebar
  Vue.component('d-sidebar', Sidebar)
  Vue.component('d-sidebar-nav', SidebarNav)
  Vue.component('d-sidebar-item', SidebarItem)
  Vue.component('d-sidebar-btn', SidebarButton)
  Vue.component('d-sidebar-button', SidebarButton)

  // Submenu
  Vue.component('d-submenu', Submenu)
  Vue.component('d-submenu-item', SubmenuItem)
}

export default {
  Button,
  FormInput,
  FormPassword,
  FormSection,
  Icon,
  // ImgAvatar,
  TablePagination,
  TableCrud,
  Sidebar,
  SidebarNav,
  SidebarItem,
  SidebarButton,
  Submenu,
  SubmenuItem,
  install,
}
