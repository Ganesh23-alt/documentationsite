import DocumentationItemLayout from "../../layouts/documentation";
import React from 'react'
import { stockist, addstockist, drugname, adddrug, alldrugs, groups, addgroups, drugexpiry, shipments, addshipment } from "../../assets/images/index.js";

const drugdepartments = () => {
  const content = (
    <>
      <h2 id="drug-department">Getting Started With Drug Department</h2>
      <p>
        To get started with Drug Department,move cursor to left side of screen to access menu, a dialog will appear in screen. Click on 'DRUGS'  you will see eight options:
      </p>
      <ol>
        <li id="stockist-introduction">
          Stockist - it is the description of dealer that will deliver your shipment , includes information like name, adddress, contact, product description and entry date.


          <img
            width={770}
            style={{ marginBottom: 40, marginTop: 40 }}
            src={stockist}
            alt="banner"
          />

          There is 'ADD NEW' button in the top left besides title. Click button and you will be redirected to next page where you can add details of dealer.

          <img
            width={770}
            style={{ marginBottom: 40, marginTop: 40 }}
            src={addstockist}
            alt="banner"
          />
        </li>
        <li id="add-drugs">
          Add Drugs - Here, you will be asked to provide information about drug
          <img
            width={770}
            style={{ marginBottom: 40, marginTop: 40 }}
            src={adddrug}
            alt="banner"
          />

          There is,'CREATE A DRUG NAME' button at the right side of drug name that allows you to add new drug name to group of drugs that is already available, if the desired drug group is not available go under section of 'Groups' in this guide to create drug group and follow steps

          <img
            width={770}
            style={{ marginBottom: 40, marginTop: 40 }}
            src={drugname}
            alt="banner"
          />

          You can also create shipment by clicking 'Create a Shipment' or follow guide in 'Shipment' section of this guide.

          Finally you save the drug detail and see it in 'All Drugs'
        </li>
        <li id="all-drugs">
          All Drugs - here you can get information about all the drugs available in stock, there quantity, buying and selling rate, rack number and box number, entry date and manufacturing date
          <img
            width={770}
            style={{ marginBottom: 40, marginTop: 40 }}
            src={alldrugs}
            alt="banner"
          />
        </li>

        You can also add drug by cicking 'Add New' button at the top or follow steps in 'Add Drug' in this guide
        <li id="drug-groups">
          Groups - Here, you can see all the group of drugs available
          <img
            width={770}
            style={{ marginBottom: 40, marginTop: 40 }}
            src={groups}
            alt="banner"
          />

          You can also add drug group by clicking 'Add New' button at the top that will redirect to a dialog box where you can enter drug group name and description

          <img
            width={770}
            style={{ marginBottom: 40, marginTop: 40 }}
            src={addgroups}
            alt="banner"
          />
        </li>
        <li id="drug-expiry">
          Drug Expiry - Here you will get information about drugs that has exceeded the expiry date and will appear in red highlight
          <img
            width={770}
            style={{ marginBottom: 40, marginTop: 40 }}
            src={drugexpiry}
            alt="banner"
          />
        </li>
        <li id="drug-shipments">
          Shipments - Here you can track records of your shipment. Name of your shipment, amount paid and details of stockist(delear) is provided here.
          <img
            width={770}
            style={{ marginBottom: 40, marginTop: 40 }}
            src={shipments}
            alt="banner"
          />
          You can also add shipment by clicking 'Add New' button at the top , a new page will appear where you will be asked to enter name, amount paid, total amount and stockist(dealer) name. You can also add stockist  by clicking 'Add Stockist'.
          <img
            width={770}
            style={{ marginBottom: 40, marginTop: 40 }}
            src={addshipment}
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
        title="Drug Department"
        subtitle="Keeping track of Drugs in PharmacyXP is very easy. In this section, we will provide you concept of stockist(dealer) that delivers shippments and we will also guide you with creating and viewing drug with its stock available and expiry date.We will also guide you to track your shipment with shipment module"
        tableOfContents={[
          {
            title: "Getting-Started with Drug Department",
            id: "drug-department",
            children: [
              {
                title: "Introduction to stockist",
                id: "stockist-introduction",
              },
              {
                title: "Add Drug",
                id: "add-drugs",
              },
              {
                title: "All Drugs",
                id: "all-drugs",
              },
              {
                title: "Groups",
                id: "drug-groups",
              },
              {
                title: "Drug Expiry",
                id: "drug-expiry",
              },
              {
                title: "Shipments",
                id: "drug-shipments",
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

export default drugdepartments;