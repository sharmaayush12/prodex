import ModalReducer from './ModalReducer'
import WebsiteStore from './WebsiteReducer';
import ActiveStore from './ActiveReducer';
import SettingStore from './SettingReducer';
import LockStore from './LockReducer';
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    ModalReducer,
    WebsiteStore,
    ActiveStore,
    SettingStore,
    LockStore
});

export default rootReducer;