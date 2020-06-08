import Vue from 'vue';
import ActionSheet from 'vant/lib/action-sheet';
import AddressEdit from 'vant/lib/address-edit';
import AddressList from 'vant/lib/address-list';
import Area from 'vant/lib/area';
import Button from 'vant/lib/button';
import Calendar from 'vant/lib/calendar';
import Card from 'vant/lib/card';
import Cell from 'vant/lib/cell';
import CellGroup from 'vant/lib/cell-group';
import Checkbox from 'vant/lib/checkbox';
import CheckboxGroup from 'vant/lib/checkbox-group';
import Circle from 'vant/lib/circle';
import Col from 'vant/lib/col';
import Collapse from 'vant/lib/collapse';
import CollapseItem from 'vant/lib/collapse-item';
import ContactCard from 'vant/lib/contact-card';
import ContactEdit from 'vant/lib/contact-edit';
import ContactList from 'vant/lib/contact-list';
import CountDown from 'vant/lib/count-down';
import Coupon from 'vant/lib/coupon';
import CouponCell from 'vant/lib/coupon-cell';
import CouponList from 'vant/lib/coupon-list';
import DatetimePicker from 'vant/lib/datetime-picker';
import Dialog from 'vant/lib/dialog';
import Divider from 'vant/lib/divider';
import DropdownItem from 'vant/lib/dropdown-item';
import DropdownMenu from 'vant/lib/dropdown-menu';
import Field from 'vant/lib/field';
import Form from 'vant/lib/form';
import GoodsAction from 'vant/lib/goods-action';
import GoodsActionButton from 'vant/lib/goods-action-button';
import GoodsActionIcon from 'vant/lib/goods-action-icon';
import Grid from 'vant/lib/grid';
import GridItem from 'vant/lib/grid-item';
import Icon from 'vant/lib/icon';
import Image from 'vant/lib/image';
import ImagePreview from 'vant/lib/image-preview';
import IndexAnchor from 'vant/lib/index-anchor';
import IndexBar from 'vant/lib/index-bar';
import Info from 'vant/lib/info';
import Lazyload from 'vant/lib/lazyload';
import List from 'vant/lib/list';
import Loading from 'vant/lib/loading';
import Locale from 'vant/lib/locale';
import NavBar from 'vant/lib/nav-bar';
import NoticeBar from 'vant/lib/notice-bar';
import NumberKeyboard from 'vant/lib/number-keyboard';
import Overlay from 'vant/lib/overlay';
import Pagination from 'vant/lib/pagination';
import Panel from 'vant/lib/panel';
import PasswordInput from 'vant/lib/password-input';
import Picker from 'vant/lib/picker';
import Popup from 'vant/lib/popup';
import Progress from 'vant/lib/progress';
import PullRefresh from 'vant/lib/pull-refresh';
import Radio from 'vant/lib/radio';
import RadioGroup from 'vant/lib/radio-group';
import Rate from 'vant/lib/rate';
import Row from 'vant/lib/row';
import Search from 'vant/lib/search';
import Sidebar from 'vant/lib/sidebar';
import SidebarItem from 'vant/lib/sidebar-item';
import Skeleton from 'vant/lib/skeleton';
import Sku from 'vant/lib/sku';
import Slider from 'vant/lib/slider';
import Step from 'vant/lib/step';
import Stepper from 'vant/lib/stepper';
import Steps from 'vant/lib/steps';
import Sticky from 'vant/lib/sticky';
import SubmitBar from 'vant/lib/submit-bar';
import Swipe from 'vant/lib/swipe';
import SwipeCell from 'vant/lib/swipe-cell';
import SwipeItem from 'vant/lib/swipe-item';
import Switch from 'vant/lib/switch';
import SwitchCell from 'vant/lib/switch-cell';
import Tab from 'vant/lib/tab';
import Tabbar from 'vant/lib/tabbar';
import TabbarItem from 'vant/lib/tabbar-item';
import Tabs from 'vant/lib/tabs';
import Tag from 'vant/lib/tag';
import Toast from 'vant/lib/toast';
import TreeSelect from 'vant/lib/tree-select';
import Uploader from 'vant/lib/uploader';
import Notify from 'vant/lib/notify'

var components = [
    ActionSheet,
    AddressEdit,
    AddressList,
    Area,
    Button,
    Calendar,
    Card,
    Cell,
    CellGroup,
    Checkbox,
    CheckboxGroup,
    Circle,
    Col,
    Collapse,
    CollapseItem,
    ContactCard,
    ContactEdit,
    ContactList,
    CountDown,
    Coupon,
    CouponCell,
    CouponList,
    DatetimePicker,
    Dialog,
    Divider,
    DropdownItem,
    DropdownMenu,
    Field,
    Form,
    GoodsAction,
    GoodsActionButton,
    GoodsActionIcon,
    Grid,
    GridItem,
    Icon,
    Image,
    ImagePreview,
    IndexAnchor,
    IndexBar,
    Info,
    Lazyload,
    List,
    Loading,
    Locale,
    NavBar,
    NoticeBar,
    NumberKeyboard,
    Overlay,
    Pagination,
    Panel,
    PasswordInput,
    Picker,
    Popup,
    Progress,
    PullRefresh,
    Radio,
    RadioGroup,
    Rate,
    Row,
    Search,
    Sidebar,
    SidebarItem,
    Skeleton,
    Sku,
    Slider,
    Step,
    Stepper,
    Steps,
    Sticky,
    SubmitBar,
    Swipe,
    SwipeCell,
    SwipeItem,
    Switch,
    SwitchCell,
    Tab,
    Tabbar,
    TabbarItem,
    Tabs,
    Tag,
    Toast,
    TreeSelect,
    Uploader,
    Notify
]
components.forEach(function (item) {
    //console.dir(item)
    // if (item.install) {
    //     Vue.use(item);
    //
    // } else if (item.name) {
    //     Vue.component(item.name.replace('van','tm'), item);
    // }
    if(item.name) Vue.component(item.name.replace('van','tm'), item);
    if (item.install) Vue.use(item);
});

Vue.prototype.$TM={}
Vue.prototype.$TM.Toast = Toast
Vue.prototype.$TM.Notify = Notify
Vue.prototype.$TM.Dialog = Dialog



