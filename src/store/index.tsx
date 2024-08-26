import { debounce, mergeConfigRecursively, themeApplyMode, ThemeMode } from "@/utils";
import { proxy, subscribe } from "valtio";

export type AppDemos = "simple" | "accordion";

const STORE_KEY = "fm-tv";

type AppSettings = {
    theme: ThemeMode;
    demo: AppDemos;
};

const defaultSettings: AppSettings = {
    theme: "dark",
    demo: "simple",
};

export const appSettings = proxy<AppSettings>(initialSettings());

function initialSettings(): AppSettings {
    const savedSettings = localStorage.getItem(STORE_KEY);
    let rv = defaultSettings;
    if (savedSettings) {
        try {
            rv = JSON.parse(savedSettings);
        } catch (error) {
        }
    }
    const merged = mergeConfigRecursively(defaultSettings, rv);
    return merged;
}

themeApplyMode(appSettings.theme);
subscribe(appSettings, () => {
    themeApplyMode(appSettings.theme);
});

const saveDebounced = debounce(() => localStorage.setItem(STORE_KEY, JSON.stringify(appSettings)), 400);
subscribe(appSettings, saveDebounced);
