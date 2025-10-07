import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "./AccordianCore";

const AccordianExample = () => {
    const ITEMS = [
        {
            title: "What services does our interior design company offer?",
            content: "We provide residential, commercial, and workspace interior design services, including furniture layout, color schemes, lighting, and decor solutions tailored to your taste.",
        },
        {
            title: "How do we approach a new project?",
            content: "We begin with a detailed consultation to understand your requirements, budget, and style preferences, then create a customized design plan with 3D renderings and material suggestions.",
        },
        {
            title: "Why choose us over other interior designers?",
            content: "Our team combines creativity with functionality, offering personalized design solutions, on-time delivery, and attention to every detail to bring your vision to life.",
        },
        {
            title: "Is consultation free?",
            content: "Yes! Our initial consultation is completely free, helping you understand the design possibilities before committing.",
        },
    ];

    return (
        <Accordion>
            {ITEMS.map((item, idx) => (
                <AccordionItem key={idx} defaultOpen={idx === 0}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default AccordianExample;
