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
            title: "What services do you provide for London properties?",
            content: "We offer a complete end-to-end service, including architectural planning, interior design, and full project management. We handle everything from initial concepts and securing planning permissions to construction and final styling for both residential renovations and multi-unit commercial developments.",
        },
        {
            title: "How do you work with property developers?",
            content: "We act as strategic partners for developers, focusing on designs that maximise your return on investment (ROI) and market appeal. We understand the commercial needs of a project, from optimising layouts to creating high-end finishes that attract premium buyers and tenants, ensuring your project is both beautiful and profitable.",
        },
        {
            title: "Do you handle planning permissions and council approvals?",
            content: "Yes, absolutely. Navigating London's complex planning regulations is one of our core strengths. We manage the entire process on your behalf, liaising with local councils to ensure your project is fully compliant, which helps avoid the costly delays and stress common in London builds.",
        },
        {
            title: "What happens during the free consultation?",
            content: "Our free consultation is a no-obligation discovery call. We'll discuss your vision, project goals, potential budget, and timelines. It’s the perfect opportunity for you to ask questions and for us to explain precisely how we can bring your specific London-based project to life.",
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
