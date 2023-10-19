
import { Storage } from "@plasmohq/storage";
import type { Repository } from "./common.interface";

const plasmoStorage = new Storage();

const repository: Repository = {
    get: function <T = string>(key: string): Promise<T> {
        return plasmoStorage.get(key);
    },
    set: function (key: string, rawValue: any): Promise<any> {
        return plasmoStorage.set(key, rawValue)
    }
}

export default repository;