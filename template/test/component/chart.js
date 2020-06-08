import Vue from 'vue';
import {
    TArea,TAxis,TBar,TChart,TGuide,TLegend,TLine,TPie,TPoint,TScale,TTooltip
} from './chart/index'


// components.forEach(function (item) {
//     console.dir(item.name)
//     if(item.name) Vue.component(item.name, item);
//     if (item.install) Vue.use(item);
// });

Vue.component('t-area', TArea);
Vue.component('t-axis', TAxis);
Vue.component('t-bar', TBar);
Vue.component('t-chart', TChart);
Vue.component('t-guide', TGuide);
Vue.component('t-legend', TLegend);
Vue.component('t-pie', TPie);
Vue.component('t-point', TPoint);
Vue.component('t-scale', TScale);
Vue.component('t-tooltip', TTooltip);
Vue.component('t-line', TLine);