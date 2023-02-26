import DocumentationItemLayout from "../../layouts/documentation";
import React from 'react'

const medicaldepartments = () => {
    const content = (
        <>
            <h2 id="what-is-pharmacyxp">What is PharmacyXP?</h2>
            <p>
                Welcome to PharmacyXP, a powerful web app designed to help you manage
                your pharmacy business more efficiently. With its simple and intuitive
                interface, you can easily track inventory, streamline operations, and
                increase revenue. PharmacyXP offers a variety of features such as
                inventory management, automated billing and claims, stock refills, and
                real-time reporting and analytics. PharmacyXP also allows you to create
                billable medical departments and assign roles and permissions to users.
            </p>
            <img
                width={750}
                style={{ marginBottom: 16 }}
                src="/banner.png"
                alt="banner"
            />
            <p>
                You can also customize the web address for your PharmacyXP account and
                you can manage your pharmacy operations more efficiently, allowing you
                to focus on providing quality care to your patients. With PharmacyXP,
                you can forget about pen and paper, it's all digital now.
            </p>
            <h2 id="using-the-documentation">Using the Documentation</h2>
            <p>
                This documentation is designed to help you understand and navigate the
                features of PharmacyXP. It is divided into several sections, including:
            </p>
            <ul>
                <li>
                    Getting Started - This section will provide an overview of the basics
                    of PharmacyXP and guide you through the process of creating an account
                    and selecting a plan.
                </li>
                <li>
                    Dashboard - This section will provide a tour of the PharmacyXP
                    dashboard and explain how to navigate and use the different features.
                </li>
                <li>
                    Pricing - This section will explain the different plans available on
                    PharmacyXP and help you select the one that best suits your needs.
                </li>
                <li>
                    About - This section will provide information about the company behind
                    PharmacyXP, including its mission and values.
                </li>
            </ul>
            <p>
                Throughout the documentation, you'll find helpful tips and step-by-step
                instructions to guide you through the various features of PharmacyXP.
                Additionally, there are videos available in most of the sections to help
                you understand better. Please feel free to reach out to our support team
                if you have any questions or need assistance using PharmacyXP.
            </p>
            <h2 id="foreword">Foreword</h2>
            <p>
                We created PharmacyXP with the goal of making it easier for pharmacies
                to manage their operations and provide better care for their patients.
                We believe that by streamlining processes and automating tasks,
                pharmacies can save time and resources while also improving patient
                outcomes.
            </p>
            <p>
                We would like to thank you for choosing PharmacyXP and we look forward
                to helping you improve your pharmacy's operations. We believe that by
                working together, we can make a positive impact on the healthcare
                industry.
            </p>
        </>
    );
    return (
        <>
            <DocumentationItemLayout
                title="Get started with pharmacyxp"
                subtitle="Effortlessly Manage Your Pharmacy with PharmacyXP"
                tableOfContents={[
                    {
                        title: "What is PharmacyXP?",
                        id: "what-is-pharmacyxp",
                    },
                    {
                        title: "Using the Documentation",
                        id: "using-the-documentation",
                    },
                    {
                        title: "Foreword",
                        id: "foreword",
                    },
                ]}
                content={content}
            />
        </>
    );
}

export default medicaldepartments;