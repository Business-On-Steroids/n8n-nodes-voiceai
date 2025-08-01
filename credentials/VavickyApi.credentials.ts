import type { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class VavickyApi implements ICredentialType {
  name = 'vavickyApi';
  displayName = 'VA Vicky API';
  documentationUrl = "https://aiagency.now";
  properties: INodeProperties[] = [
    {
      displayName: 'VA Vicky API Key',
      hint: "You can find your key in the Settings & Integration tab",
      name: 'apiKey',
      type: 'string',
      default: '',
      typeOptions: {
        password: true,
      }
    },
  ];

  // This allows the credential to be used by other parts of n8n
  // stating how this credential is injected as part of the request
  // An example is the Http Request node that can make generic calls
  // reusing this credential
  authenticate: IAuthenticateGeneric = {
    type: 'generic',
    properties: {
      headers: {
        Authorization: '={{"Bearer " + $credentials.apiKey}}',
      },
    },
  };
}
