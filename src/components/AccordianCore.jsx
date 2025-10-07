import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Accordion = ({ children }) => {
    return <div className="space-y-2">{children}</div>;
};

export const AccordionItem = ({ children, index, defaultOpen = false }) => {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div className="max-w-4xl mx-auto border border-gray-300 rounded-lg overflow-hidden">
            {React.Children.map(children, (child) => {
                if (child.type.displayName === "AccordionTrigger") {
                    return React.cloneElement(child, {
                        open,
                        setOpen,
                    });
                }
                if (child.type.displayName === "AccordionContent") {
                    return React.cloneElement(child, { open });
                }
                return child;
            })}
        </div>
    );
};

export const AccordionTrigger = ({ children, open, setOpen, showArrow = true }) => {
    return (
        <div
            onClick={() => setOpen(!open)}
            className="flex max-w-4xl mx-auto justify-between cursor-pointer px-4 py-3 bg-gray-100 rounded hover:bg-gray-200 select-none"
        >
            <span>{children}</span>
            {showArrow && (
                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    ▼
                </motion.span>
            )}
        </div>
    );
};
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = ({ children, open }) => {
    return (
        <AnimatePresence initial={false}>
            {open && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-4 py-2 bg-white text-gray-800"
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
AccordionContent.displayName = "AccordionContent";
