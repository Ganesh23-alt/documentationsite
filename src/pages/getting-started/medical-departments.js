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

        </>
    );
    return (
        <>
            <DocumentationItemLayout
                title="Medical Department"
                subtitle="Manage services in admin panel"
                tableOfContents={[
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