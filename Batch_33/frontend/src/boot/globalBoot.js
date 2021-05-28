// import something here
import VueChartkick from 'vue-chartkick'
import Highchart from 'highcharts'
import wings from 'wings4'
import editDialog from 'components/editDialog'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfMake.vfs = pdfFonts.pdfMake.vfs
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ app, router, Vue }) => {
  // something to do
  Vue.prototype.$dbCon = wings('http://localhost:3030')
  Vue.component('edit-dialog', editDialog)
  Vue.use(VueChartkick.use(Highchart))
  Vue.prototype.$pdfMake = pdfMake
}
