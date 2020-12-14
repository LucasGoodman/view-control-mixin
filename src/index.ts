import { string2boolean } from './utils';

interface MixinOption {
    key: string,
    env_key?: string,
    storage?: string, // todo:引入cookie存储
}

// 可以通过viewControlMixin函数改变
const mixinOption: MixinOption = {
    key: 'menuAndNavShow',
    env_key: 'VUE_APP_MENU_SHOW',
    storage: 'storage',
};

const viewControlMixin = (option?: MixinOption): object => {
    Object.assign(mixinOption, option);
    return {
        watch: {
            $route: {
                immediate: true,
                handler(route: any) {
                    if (!route.query || !route.name) {
                        return;
                    }
                    let controlValue: string = route.query[mixinOption.key];
                    if (controlValue) {
                        setVal(controlValue);
                        let newQuery: any = {};
                        for (const key in route.query) {
                            if (route.query.hasOwnProperty(key) && key !== mixinOption.key) {
                                newQuery[key] = route.query[key];
                            }
                        }
                        (this as any).$router.push({ name: (this as any).$route.name, query: newQuery });
                        window.location.reload();
                    }
                },
            },
        },
    };
};

const viewControlGetter = (): boolean => {
    let { env_key } = mixinOption;
    if (!env_key) {
        console.warn(`viewControlGetter doesn't without env_key`);
        return false;
    }
    if (getVal() !== '') {
        return string2boolean(getVal());
    } else {
        return string2boolean(process.env[env_key]);
    }
};

const getVal = (): string => {
    let { key } = mixinOption;
    return localStorage.getItem(key) || '';
};
const setVal = (val: string): void => {
    let { key } = mixinOption;
    localStorage.setItem(key, val);
};

export { viewControlMixin, viewControlGetter };
