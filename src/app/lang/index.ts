import Spanish from './es';
import English from './en';

const Modules = {
    es: Spanish,
    en: English
};
const currentLanguage = Modules[localStorage.getItem('lang') || 'en'];
const lang = DeepProxy(currentLanguage);

function resolve(path) {
    let m = currentLanguage;

    for(const i of path) m = m[i];

    return m && m.replace(/\{\{\s*(.+?)\s*\}\}/g, ($0, $1) => resolve($1.split('.')))
}

function DeepProxy(obj, route = []) {
    let proxy = new Proxy({}, {
        get(target, tar, receiver) {
            const o = obj[tar];
            
            if(typeof o === "object")
                return DeepProxy(o, [...route, tar]);
            else
                return resolve([...route, tar]);
        }
    });
    return proxy;
}

export default lang;