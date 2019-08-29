import {DockitStorage} from "../storage/DockitStorage";

interface StorageFactory {
    getStorage():DockitStorage;
}