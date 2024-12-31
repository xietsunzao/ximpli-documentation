import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    'concepts',
    'authentication',
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Organizations',
          collapsed: false,
          link: {type: 'doc', id: 'api/organizations'},
          items: [
            {
              type: 'doc',
              id: 'api/organizations/get-all-organizations',
              label: 'Get All Organizations',
              className: 'api-method get',
            },
            {
              type: 'doc',
              id: 'api/organizations/get-organization',
              label: 'Get Organization',
              className: 'api-method get',
            },
            {
              type: 'doc',
              id: 'api/organizations/create-organization',
              label: 'Create Organization',
              className: 'api-method post',
            },
            {
              type: 'doc',
              id: 'api/organizations/update-organization',
              label: 'Update Organization',
              className: 'api-method put',
            },
            {
              type: 'doc',
              id: 'api/organizations/delete-organization',
              label: 'Delete Organization',
              className: 'api-method delete',
            },
            {
              type: 'doc',
              id: 'api/organizations/update-status',
              label: 'Update Organization Status',
              className: 'api-method patch',
            },
          ],
        },
        {
          type: 'category',
          label: 'Workflows',
          collapsed: false,
          link: {type: 'doc', id: 'api/workflows'},
          items: [
            {
              type: 'doc',
              id: 'api/workflows/get-all-workflows',
              label: 'Get All Workflows',
              className: 'api-method get',
            },
            {
              type: 'doc',
              id: 'api/workflows/get-workflow',
              label: 'Get Workflow',
              className: 'api-method get',
            },
            {
              type: 'doc',
              id: 'api/workflows/create-workflow',
              label: 'Create Workflow',
              className: 'api-method post',
            }
          ],
        },
        {
          type: 'category',
          label: 'Eforms',
          collapsed: false,
          link: {type: 'doc', id: 'api/eforms'},
          items: [
            {
              type: 'doc',
              id: 'api/eforms/get-all-eforms',
              label: 'Get All Eforms',
              className: 'api-method get',
            },
            {
              type: 'doc',
              id: 'api/eforms/get-eform',
              label: 'Get Eform',
              className: 'api-method get',
            },
            {
              type: 'doc',
              id: 'api/eforms/create-eform',
              label: 'Create Eform',
              className: 'api-method post',
            },
            {
              type: 'doc',
              id: 'api/eforms/update-eform',
              label: 'Update Eform',
              className: 'api-method put',
            },
            {
              type: 'doc',
              id: 'api/eforms/delete-eform',
              label: 'Delete Eform',
              className: 'api-method delete',
            },
            {
              type: 'doc',
              id: 'api/eforms/get-eform-status',
              label: 'Get Eform Status',
              className: 'api-method get',
            },
            {
              type: 'doc',
              id: 'api/eforms/submit-eform',
              label: 'Submit Eform',
              className: 'api-method post',
            },
            {
              type: 'doc',
              id: 'api/eforms/duplicate-eform',
              label: 'Duplicate Eform',
              className: 'api-method post',
            },
            {
              type: 'doc',
              id: 'api/eforms/update-eform-status',
              label: 'Update Eform Status',
              className: 'api-method patch',
            },
          ],
        },
        // answers
        {
          type: 'category',
          label: 'Answers',
          link: {type: 'doc', id: 'api/answers'},
          items: [
            {
              type: 'doc',
              id: 'api/answers/get-all-answers',
              label: 'Get All Answers',
              className: 'api-method get',
            },
            {
              type: 'doc',
              id: 'api/answers/get-answers-by-eformid',
              label: 'Get Answers by Eform ID',
              className: 'api-method get',
            },
            {
              type: 'doc',
              id: 'api/answers/get-answer',
              label: 'Get Answer',
              className: 'api-method get',
            },
            {
              type: 'doc',
              id: 'api/answers/update-answer',
              label: 'Update Answer',
              className: 'api-method put',
            },
            {
              type: 'doc',
              id: 'api/answers/delete-answer',
              label: 'Delete Answer',
              className: 'api-method delete',
            },
          ],
        },
        {
          type: 'category',
          label: 'Documents',
          link: {type: 'doc', id: 'api/documents'},
          items: [
            {
              type: 'doc',
              id: 'api/documents/get-all-documents',
              label: 'Get All Documents',
              className: 'api-method get',
            },
            {
              type: 'doc',
              id: 'api/documents/get-documents-by-workflow',
              label: 'Get Documents by Workflow',
              className: 'api-method get',
            },
            {
              type: 'doc',
              id: 'api/documents/get-documents-by-eformid',
              label: 'Get Documents by Eform ID',
              className: 'api-method get',
            },
            {
              type: 'doc',
              id: 'api/documents/get-document',
              label: 'Get Document',
              className: 'api-method get',
            },
            {
              type: 'doc',
              id: 'api/documents/get-document-file',
              label: 'Get Document File',
              className: 'api-method get',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
