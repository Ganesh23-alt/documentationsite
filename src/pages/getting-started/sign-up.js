import React from "react";
import DocumentationItemLayout from "../../layouts/documentation";
import { welcomepage, basicdetails, organizationdetails, organizationaddress, choosedepts, chooseplans, emailconfirmation } from "../../assets/images/index.js";


export default function Signup() {
  const content = (
    <>
      <h2 id="the-sign-up-process">The Sign Up Process</h2>
      <p>
        To get started with PharmacyXP, click on the "Get Started" link on the
        homepage and you will be directed to the Sign Up page. The signup
        process is divided into 7 steps:
      </p>
      <ol>
        <li id="welcome-page">
          Welcome Page
          <img
            width={750}
            style={{ marginBottom: 16, marginTop: 16 }}
            src={welcomepage}
            alt="banner"
          />
        </li>
        <li id="basic-details">
          Basic Details - Here, you will be asked to provide your admin email,
          name, and contact information.
          <img
            width={750}
            style={{ marginBottom: 16, marginTop: 16 }}
            src={basicdetails}
            alt="banner"
          />
        </li>
        <li id="organization-details">
          Organization Details - You will be asked to provide your organization
          name, logo, contact information, PAN number, and any other relevant
          details.
          <img
            width={750}
            style={{ marginBottom: 16, marginTop: 16 }}
            src={organizationdetails}
            alt="banner"
          />
        </li>
        <li id="organization-address">
          Organization Address - You will be asked to provide your
          organization's address.
          <img
            width={750}
            style={{ marginBottom: 16, marginTop: 16 }}
            src={organizationaddress}
            alt="banner"
          />
        </li>
        <li id="choose-plan">
          Choose Plan - You will be asked to choose a plan that best suits your
          needs.
          <img
            width={750}
            style={{ marginBottom: 16, marginTop: 16 }}
            src={chooseplans}
            alt="banner"
          />
        </li>
        <li id="choose-medical-depts">
          Choose Medical Departments - You will be asked to choose the medical
          departments you want to create.
          <img
            width={750}
            style={{ marginBottom: 16, marginTop: 16 }}
            src={choosedepts}
            alt="banner"
          />
        </li>
        <li id="email-confirmation">
          Email Confirmation Page - You will be sent a verification email to the
          admin email address provided in the Basic Details page, please follow
          the instructions in the email to verify your email address.
          <img
            width={750}
            style={{ marginBottom: 16, marginTop: 16 }}
            src={emailconfirmation}
            alt="banner"
          />
        </li>
      </ol>
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
    </>
  );
  return (
    <>
      <DocumentationItemLayout
        title="Signing Up"
        subtitle="Creating an account on PharmacyXP is easy and straightforward. In this section, we will guide you through the process of signing up and explain what information is required."
        tableOfContents={[
          {
            title: "The Sign Up Process",
            id: "the-sign-up-process",
            children: [
              {
                title: "Welcome Page",
                id: "welcome-page",
              },
              {
                title: "Basic Details",
                id: "basic-details",
              },
              {
                title: "Organization Details",
                id: "organization-details",
              },
              {
                title: "Organization Address",
                id: "organization-address",
              },
              {
                title: "Choose Plan",
                id: "choose-plan",
              },
              {
                title: "Choose Medical Departments",
                id: "choose-medical-depts",
              },
              {
                title: "Email Confirmation",
                id: "email-confirmation",
              },
            ],
          },
          {
            title: "Using the Documentation",
            id: "using-the-documentation",
          },
        ]}
        content={content}
      />
    </>
  );
}
