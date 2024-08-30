import { AnimatePresence, motion } from "framer-motion";

/**
 * The component being removed must be a direct descendant of AnimatePresence due to limitations with React.
 * https://www.framer.com/motion/animate-presence
 */
const MyComponent = ({ items }: { items: string[]; }) => (
    <AnimatePresence>
        {items.map(
            (item) => (
                <Item key={item} id={item} />
            ))
        }
    </AnimatePresence>
);

function Item({ id }: { id: string; }) {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 5 }}
            >
                {id}
            </motion.div>
        </div>
    );
}

export function TestDescendant() {
    const items = ["one", "two", "three"];
    return (
        <div className="flex gap-2">
            <MyComponent items={items} />
        </div>
    );
}
