import type { 
  IAuthenticateGeneric, 
  ICredentialType, 
  INodeProperties,
  ICredentialTestRequest 
} from 'n8n-workflow';

export class VavickyApi implements ICredentialType {
  name = 'vavickyApi';
  displayName = 'VAVicky API';
  documentationUrl = 'https://github.com/Business-On-Steroids/n8n-nodes-voiceai/blob/main/README.md';
  
  properties: INodeProperties[] = [
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      description: 'Found in the Settings & Integration tab of your VAVicky account',
      hint: 'You can find your key in the Settings & Integration tab',
      typeOptions: {
        password: true,
      },
      default: '',
      required: true,
    },
  ];

  authenticate: IAuthenticateGeneric = {
    type: 'generic',
    properties: {
      headers: {
        Authorization: '=Bearer {{$credentials.apiKey}}',
      },
    },
  };

  test: ICredentialTestRequest = {
    request: {
      baseURL: 'https://backend.vavicky.com',
      url: '/vavicky/api/user',
      method: 'GET',
    },
    rules: [
      {
        type: 'responseSuccessBody',
        properties: {
          message: 'API authentication failed',
          key: 'status',
          value: 'success',
        },
      },
    ],
  };
}