import { Layout1 } from "./1-version1";
import { Layout2 } from "./2-version2";
import { Layout3 } from "./3-version3";
import { TestDescendant } from "./7-test-descendant";

export function Main() {
    return (
        <main className="p-4">
            <TestDescendant />
            <Layout1 />
            <Layout2 />
            <Layout3 />
        </main>
    );
}
