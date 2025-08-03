import { VavickyApi } from './VavickyApi.credentials';

describe('VavickyApi Credential', () => {
  const credential = new VavickyApi();

  it('should be defined', () => {
    expect(credential).toBeDefined();
  });

  it('should have correct metadata', () => {
    expect(credential.name).toBe('vavickyApi');
    expect(credential.displayName).toBe('VAVicky API');
    expect(credential.documentationUrl).toBeDefined();
  });

  it('should have required API Key property', () => {
    const apiKeyProp = credential.properties.find(p => p.name === 'apiKey');
    expect(apiKeyProp).toBeDefined();
    expect(apiKeyProp?.required).toBe(true);
    expect(apiKeyProp?.type).toBe('string');
    expect(apiKeyProp?.typeOptions?.password).toBe(true);
  });

  describe('Authentication', () => {
    it('should use Bearer token authentication', () => {
      expect(credential.authenticate).toBeDefined();
      expect(credential.authenticate.type).toBe('generic');
      expect(credential.authenticate.properties?.headers?.Authorization)
        .toBe('=Bearer {{$credentials.apiKey}}');
    });
  });

  describe('Credential Test', () => {
    it('should have test configuration', () => {
      expect(credential.test).toBeDefined();
      expect(credential.test?.request?.url).toBe('/vavicky/api/user');
      expect(credential.test?.request?.baseURL).toBe('https://backend.vavicky.com');
    });

    it('should have correct validation rules', () => {
      expect(credential.test?.rules?.length).toBe(1);
      
      const rule = credential.test?.rules?.[0];
      expect(rule).toBeDefined();
      
      if (rule && rule.type === 'responseSuccessBody') {
        expect(rule.properties?.message).toBe('API authentication failed');
        expect(rule.properties?.key).toBe('status');
        expect(rule.properties?.value).toBe('success');
      } else {
        fail('Expected responseSuccessBody rule type');
      }
    });
  });
});