/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-case-declarations */
import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
} from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';
import timezones from './timzone.json';




export class Vavicky implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Voice AI VAVicky AiAgency.Now White Label',
		name: 'vavicky',
		group: ['transform'],
		version: 1,
		icon: { light: 'file:icon.svg', dark: 'file:icon.svg' },
		description: 'Complete user friendly VoiceAI platform that sends and receives phone calls, SMS text messages, automates messages across social media platforms, and seamlessly integrates into any website and business CRM for the world\'s best professional fully integrated VoiceAI platform with any businesses internal CRM, Calendars and Booking systems. Full White Label Agency accounts available, you keep 100% of all profits and full branding and domain control.',
		defaults: {
			name: 'VoiceAI VAVicky',
		},
		documentationUrl: "https://github.com/Business-On-Steroids/n8n-nodes-voiceai/blob/main/README.md",
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],

		credentials: [
			{
				name: 'vavickyApi',
				required: true,
			},
		],


		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: "getAssistants",
				options: [
					{
						"name": "Buy Twilio number",
						"value": "buyTwilioNumber",
						"description": "Purchase a new Twilio phone number"
					},
					{
						"name": "Cancel call",
						"value": "cancelCall",
						"description": "Cancel an active phone call"
					},
					{
						"name": "Chat with assistant",
						"value": "chatWithAssistant",
						"description": "Chat with a specific assistant"
					},
					{
						"name": "Connect Twilio",
						"value": "connectTwilio",
						"description": "Connect Twilio account credentials"
					},
					{
						"name": "Create assistant",
						"value": "createAssistant",
						"description": "Create a new assistant"
					},
					{
						"name": "Delete assistant",
						"value": "deleteAssistant",
						"description": "Delete an assistant"
					},
					{
						"name": "Delete assistant file",
						"value": "deleteAssistantFile",
						"description": "Delete a specific file from an assistant"
					},
					{
						"name": "Disconnect Twilio",
						"value": "disconnectTwilio",
						"description": "Disconnect Twilio account"
					},
					{
						"name": "Get assistant",
						"value": "getAssistant",
						"description": "Get basic information about a specific assistant"
					},
					{
						"name": "Get assistant files",
						"value": "getAssistantFiles",
						"description": "Get files associated with an assistant"
					},
					{
						"name": "Get assistant usage",
						"value": "getAssistantUsage",
						"description": "Get usage statistics for an assistant"
					},
					{
						"name": "Get assistants",
						"value": "getAssistants",
						"description": "Get all assistants for the authenticated user"
					},
					{
						"name": "Get assistants token usage",
						"value": "getAssistantsTokenUsage",
						"description": "Get token usage across all assistants"
					},
					{
						"name": "Get available numbers",
						"value": "getAvailableNumbers",
						"description": "Get available phone numbers for purchase"
					},
					{
						"name": "Get calls in progress",
						"value": "getCallsInProgress",
						"description": "Get all calls currently in progress"
					},
					{
						"name": "Get dashboard assistant",
						"value": "getDashboardAssistant",
						"description": "Get the dashboard assistant for the authenticated user"
					},
					{
						"name": "Get one assistant",
						"value": "getOneAssistant",
						"description": "Get complete information about a specific assistant"
					},
					{
						"name": "Get Twilio numbers",
						"value": "getTwilioNumbers",
						"description": "Get all Twilio phone numbers"
					},
					{
						"name": "Get Twilio usage",
						"value": "getTwilioUsage",
						"description": "Get Twilio usage statistics"
					},
					{
						"name": "Get user details",
						"value": "getUser",
						"description": "Get user data this includes tokens and settings"
					},
					{
						"name": "Make bulk call",
						"value": "makeBulkCall",
						"description": "Make bulk phone calls"
					},
					{
						"name": "Make call",
						"value": "makeCall",
						"description": "Make a phone call through assistant"
					},
					{
						"name": "Send SMS",
						"value": "sendSMS",
						"description": "Send SMS message through assistant"
					},
					{
						"name": "Update assistant",
						"value": "updateAssistant",
						"description": "Update an existing assistant"
					},
					{
						"name": "Update assistant files",
						"value": "updateAssistantFiles",
						"description": "Upload files to an assistant"
					},
					{
						"name": "Update Deepseek API Key",
						"value": "updateTokenDeepSeek",
						"description": "Update your Deepseek API Key"
					},
					{
						"name": "Update Elevenlabs token",
						"value": "updateTokenElevenlabs",
						"description": "Update your Elevenlabs API Key"
					},
					{
						"name": "Update Google Gemini API Key",
						"value": "updateTokenGemini",
						"description": "Update your Google Gemini API Key"
					},
					{
						"name": "Update Open Router API Key",
						"value": "updateTokenOpenRouter",
						"description": "Update your Open Router API Key"
					},
					{
						"name": "Update OpenAI token",
						"value": "updateTokenOpenai",
						"description": "Update your OpenAI API Key"
					},
					{
						"name": "Update SMTP",
						"value": "updateSMTP",
						"description": "Update your smtp settings for your custom email notifications"
					},
					{
						"name": "Update Twilio number",
						"value": "updateTwilioNumber",
						"description": "Update Twilio number configuration"
					},
					{
						"name": "Update White Label details",
						"value": "updateWhiteLabel",
						"description": "Update White Label details; name, description and color"
					}
				],
				description: 'Choose an operation',
			},

			{
				displayName: "Whitelabel Domain",
				type: "string",
				default: '',
				displayOptions: {
					show: {
						operation: ['updateWhiteLabel']
					}
				},
				name: "whitelabel_domain"
			},
			{
				displayName: "Whitelabel Name",
				type: "string",
				default: '',
				displayOptions: {
					show: {
						operation: ['updateWhiteLabel']
					}
				},
				name: "whitelabel_name"
			},
			{
				displayName: "Whitelabel Color",
				type: "color",
				default: '',
				displayOptions: {
					show: {
						operation: ['updateWhiteLabel']
					}
				},
				name: "whitelabel_color"
			},
			{
				displayName: "Whitelabel Description",
				type: "string",
				default: '',
				displayOptions: {
					show: {
						operation: ['updateWhiteLabel']
					}
				},
				name: "whitelabel_description"
			},

			{
				displayName: "OpenAI API Key",
				type: "string",
				default: '',
				displayOptions: {
					show: {
						operation: ['updateTokenOpenai']
					}
				},
				typeOptions: {
					password: true,
				},
				name: "openai_token"
			},
			{
				displayName: "Elevenlabs Token",
				type: "string",
				default: '',
				displayOptions: {
					show: {
						operation: ['updateTokenElevenlabs']
					}
				},
				typeOptions: {
					password: true,
				},
				name: "elevenlabs_token"
			},
			{
				displayName: "Deep Seek API Key",
				type: "string",
				default: '',
				displayOptions: {
					show: {
						operation: ['updateTokenDeepSeek']
					}
				},
				typeOptions: {
					password: true,
				},
				name: "deepseek_token"
			},
			{
				displayName: "Google Gemini API Key",
				type: "string",
				default: '',
				displayOptions: {
					show: {
						operation: ['updateTokenGemini']
					}
				},
				typeOptions: {
					password: true,
				},
				name: "gemini_token"
			},
			{
				displayName: "Open Router API Key",
				type: "string",
				default: '',
				displayOptions: {
					show: {
						operation: ['updateTokenOpenRouter']
					}
				},
				typeOptions: {
					password: true,
				},
				name: "openrouter_token"
			},



			{
				displayName: "SMTP Email",
				type: "string",
				default: '',
				displayOptions: {
					show: {
						operation: ['updateSMTP']
					}
				},
				name: "smtp_email"
			},
			{
				displayName: "SMTP Password",
				type: "string",
				default: '',
				displayOptions: {
					show: {
						operation: ['updateSMTP']
					}
				},
				typeOptions: {
					password: true,
				},
				name: "smtp_password"
			},
			{
				displayName: "SMTP Host",
				type: "string",
				default: '',
				displayOptions: {
					show: {
						operation: ['updateSMTP']
					}
				},
				name: "smtp_host"
			},
			{
				displayName: "SMTP Port",
				type: "string",
				default: '',
				displayOptions: {
					show: {
						operation: ['updateSMTP']
					}
				},
				name: "smtp_post"
			},

			// Parameters for all operations
			{
				displayName: 'Assistant ID',
				name: 'assistantId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						operation: [
							'getAssistant',
							'getOneAssistant',
							'updateAssistant',
							'deleteAssistant',
							'getAssistantFiles',
							'updateAssistantFiles',
							'deleteAssistantFile',
							'getAssistantUsage',
							'chatWithAssistant',
							'sendSMS',
							'makeCall',
						],
					},
				},
			},
			{
				displayName: 'File ID',
				name: 'fileId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						operation: ['deleteAssistantFile'],
					},
				},
			},

			// Twilio specific parameters
			{
				displayName: 'Call ID',
				name: 'callId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						operation: ['cancelCall'],
					},
				},
			},
			{
				displayName: 'Number SID',
				name: 'numberSid',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						operation: ['updateTwilioNumber'],
					},
				},
			},
			{
				displayName: 'Phone Number',
				name: 'phoneNumber',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						operation: ['buyTwilioNumber', 'sendSMS', 'makeCall'],
					},
				},
			},
			{
				displayName: 'Contact Bulk ID',
				name: 'contactBulkId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						operation: ['makeBulkCall'],
					},
				},
			},
			{
				displayName: 'SMS Message',
				name: 'smsMessage',
				type: 'string',
				typeOptions: {
					rows: 3,
				},
				default: '',
				required: true,
				displayOptions: {
					show: {
						operation: ['sendSMS'],
					},
				},
			},
			{
				displayName: 'Contact ID',
				name: 'contactId',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['sendSMS', 'makeCall'],
					},
				},
			},

			// Twilio Usage parameters
			{
				displayName: 'Start Date',
				name: 'startDate',
				type: 'dateTime',
				default: '',
				displayOptions: {
					show: {
						operation: ['getTwilioUsage'],
					},
				},
				description: 'Start date for usage query',
			},
			{
				displayName: 'End Date',
				name: 'endDate',
				type: 'dateTime',
				default: '',
				displayOptions: {
					show: {
						operation: ['getTwilioUsage'],
					},
				},
				description: 'End date for usage query',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				typeOptions: {
					minValue: 1,
					// maxValue: 1000,
				},
				displayOptions: {
					show: {
						operation: ['getTwilioUsage'],
					},
				},
				description: 'Max number of results to return',
			},

			// Available Numbers parameters
			{
				displayName: 'Country Code',
				name: 'countryCode',
				type: 'string',
				default: 'US',
				displayOptions: {
					show: {
						operation: ['getAvailableNumbers'],
					},
				},
				description: 'Country code for available numbers',
			},
			{
				displayName: 'Number Type',
				name: 'numberType',
				type: 'options',
				options: [
					{ name: 'Local', value: 'local' },
					{ name: 'Toll Free', value: 'tollfree' },
					{ name: 'Mobile', value: 'mobile' },
				],
				default: 'local',
				displayOptions: {
					show: {
						operation: ['getAvailableNumbers'],
					},
				},
			},
			{
				displayName: 'Search Pattern',
				name: 'searchPattern',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['getAvailableNumbers'],
					},
				},
				description: 'Search for numbers containing this pattern',
			},
			{
				displayName: 'Locality',
				name: 'locality',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['getAvailableNumbers'],
					},
				},
				description: 'Locality/city for local numbers',
			},

			// Twilio Connection parameters
			{
				displayName: 'Twilio Account SID',
				name: 'twilioSid',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						operation: ['connectTwilio'],
					},
				},
			},
			{
				displayName: 'Twilio Auth Token',
				name: 'twilioToken',
				type: 'string',
				typeOptions: {
					password: true,
				},
				default: '',
				required: true,
				displayOptions: {
					show: {
						operation: ['connectTwilio'],
					},
				},
			},

			// Update Number parameters
			{
				displayName: 'Friendly Name',
				name: 'friendlyName',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['updateTwilioNumber'],
					},
				},
			},
			{
				displayName: 'Voice Webhook URL',
				name: 'voiceWebhook',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['updateTwilioNumber'],
					},
				},
			},
			{
				displayName: 'SMS Webhook URL',
				name: 'smsWebhook',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['updateTwilioNumber'],
					},
				},
			},

			// Basic Assistant Parameters (keeping existing ones)
			{
				displayName: 'Assistant Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},
			{
				displayName: 'OpenAI API Key',
				name: 'apiKey',
				type: 'string',
				typeOptions: {
					password: true,
				},
				default: '',
				required: true,
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},
			{
				displayName: 'Welcome Message',
				name: 'welcome_message',
				type: 'string',
				default: 'Hello how can I help you today?',
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},
			{
				displayName: 'Instructions/Prompt',
				name: 'prompt',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},
			{
				displayName: 'Active',
				name: 'active',
				type: 'boolean',
				default: true,
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},
			// {
			// 	displayName: 'Voice Enabled',
			// 	name: 'voice',
			// 	type: 'boolean',
			// 	default: false,
			// 	displayOptions: {
			// 		show: {
			// 			operation: ['createAssistant', 'updateAssistant'],
			// 		},
			// 	},
			// },

			// GoHighLevel Integration
			{
				displayName: 'Location (GoHighLevel)',
				name: 'location',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},

			{
				displayName: 'Calendar ID',
				name: 'calendar',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},

			{
				displayName: 'Timezone',
				name: 'timezone',
				type: 'options',
				default: "",
				options: timezones.map(s => {
					return { name: s, value: s }
				}),
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},

			{
				displayName: 'Custom Field',
				name: 'customField',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},

			// AI Configuration
			{
				displayName: 'AI Provider',
				name: 'aiPlatform',
				type: 'options',
				options: [
					{ name: 'OpenAI', value: 'openai' },
					{ name: 'Gemini', value: 'gemini' },
					{ name: 'Open Router', value: 'openrouter' },
					{ name: 'DeepSeek', value: 'deepseek' },
				],
				default: 'openai',
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},

			{
				displayName: 'AI Type',
				name: 'assistantType',
				type: 'options',
				options: [
					{ name: 'Text Only', value: 'Text Only' },
					{ name: 'Voice Only', value: 'Voice Only' },
					{ name: 'Text & Voice', value: 'Text & Voice' },
					{ name: 'Voice & Text', value: 'Voice & Text' },
				],
				default: 'Text Only',
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},

			{
				displayName: 'AI Model',
				name: 'openai_model',
				type: 'string',
				default: 'gpt-3.5-turbo',
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},
			{
				displayName: 'AI Temperature',
				name: 'openai_temperature',
				type: 'number',
				default: 0.8,
				typeOptions: {
					minValue: 0,
					maxValue: 2,
					numberStepSize: 0.1,
				},
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},
			{
				displayName: 'Is Booking Bot',
				name: 'booking_bot',
				type: 'boolean',
				default: false,
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},

			// OpenAI Specific Configuration
			{
				displayName: 'OpenAI Realtime',
				name: 'openai_realtime',
				type: 'boolean',
				default: false,
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
						aiPlatform: ['openai'],
					},
				},
			},
			{
				displayName: 'OpenAI Realtime Voice',
				name: 'openai_realtime_voice',
				type: 'options',
				options: [
					{ name: 'Alloy', value: 'alloy' },
					{ name: 'Echo', value: 'echo' },
					{ name: 'Fable', value: 'fable' },
					{ name: 'Nova', value: 'nova' },
					{ name: 'Onyx', value: 'onyx' },
					{ name: 'Shimmer', value: 'shimmer' },
				],
				default: 'alloy',
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
						aiPlatform: ['openai'],
						openai_realtime: [true],
					},
				},
			},
			{
				displayName: 'OpenAI Websites',
				name: 'openai_websites',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
						aiPlatform: ['openai'],
					},
				},
			},

			// Call Limits Configuration
			{
				displayName: 'Limit Call Time (Seconds)',
				name: 'limit_call_time',
				type: 'number',
				default: 240,
				typeOptions: {
					minValue: 10,
				},
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},
			{
				displayName: 'Limit Call Tokens',
				name: 'limit_call_tokens',
				type: 'number',
				default: 2000,
				typeOptions: {
					minValue: 1,
				},
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},
			{
				displayName: 'Max Call Tokens',
				name: 'max_call_tokens',
				type: 'number',
				default: 18000,
				typeOptions: {
					minValue: 1,
				},
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},

			// Voice Configuration
			{
				displayName: 'ElevenLabs Voice ID',
				name: 'elevenlabs_voice_id',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},

			// Twilio Configuration
			{
				displayName: 'Twilio SID',
				name: 'twilio_sid',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},
			{
				displayName: 'Twilio Token',
				name: 'twilio_token',
				type: 'string',
				typeOptions: {
					password: true,
				},
				default: '',
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},
			{
				displayName: 'Twilio Phone',
				name: 'twilio_phone',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},
			{
				displayName: 'Twilio Welcome Message',
				name: 'twilio_welcome',
				type: 'string',
				default: 'Hello how can I help you today?',
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},
			{
				displayName: 'Twilio Speech Timeout (Seconds)',
				name: 'twilio_speech_timeout',
				type: 'number',
				default: 3,
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},
			{
				displayName: 'Twilio Initial Delay (Seconds)',
				name: 'twilio_initial_delay',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 0.1,
					numberStepSize: 0.1,
				},
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},

			// Integration Configuration
			{
				displayName: 'Google Calendar Integration',
				name: 'google_calendar',
				type: 'boolean',
				default: false,
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},
			{
				displayName: 'Webhook URL',
				name: 'webhook_to_send',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['createAssistant', 'updateAssistant'],
					},
				},
			},

			// Parameters for updateAssistantFiles
			{
				displayName: 'Binary Property',
				name: 'binaryPropertyName',
				type: 'string',
				default: 'data',
				required: true,
				displayOptions: {
					show: {
						operation: ['updateAssistantFiles'],
					},
				},
				description: 'Name of the binary property which contains the file data for the file to be uploaded',
			},

			// Parameters for chatWithAssistant
			{
				displayName: 'Message',
				name: 'message',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						operation: ['chatWithAssistant'],
					},
				},
			},
			{
				displayName: 'Chat ID',
				name: 'thread_id',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						operation: ['chatWithAssistant'],
					},
				},
			},
			{
				displayName: 'Audio',
				name: 'audio',
				type: 'boolean',
				default: false,
				displayOptions: {
					show: {
						operation: ['chatWithAssistant'],
					},
				},
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		const credentials = await this.getCredentials('vavickyApi');

		for (let i = 0; i < items.length; i++) {
			try {
				const operation = this.getNodeParameter('operation', i) as string;
				const options: any = {
					headers: {
						'Authorization': `Bearer ${credentials.apiKey}`,
						'Content-Type': 'application/json',
					},
					method: "",
					uri: ""
				};

				switch (operation) {

					// Existing Assistant Operations
					case 'getUser':
						options.method = 'GET';
						options.uri = 'https://backend.vavicky.com/vavicky/api/user';
						break;


					case 'updateWhiteLabel':
						options.method = 'PATCH';
						options.uri = 'https://backend.vavicky.com/vavicky/api/user';
						options.body = {
							whitelabel_name: this.getNodeParameter('whitelabel_name', i) as string,
							whitelabel_description: this.getNodeParameter('whitelabel_description', i) as string,
							whitelabel_domain: this.getNodeParameter('whitelabel_domain', i) as string,
						};
						break;

					case 'updateSMTP':
						options.method = 'PATCH';
						options.uri = 'https://backend.vavicky.com/vavicky/api/user/smtp';
						options.body = {
							smtp_email: this.getNodeParameter('smtp_email', i) as string,
							smtp_password: this.getNodeParameter('smtp_password', i) as string,
							smtp_host: this.getNodeParameter('smtp_host', i) as string,
							smtp_post: this.getNodeParameter('smtp_post', i) as string,
							smtp_port: this.getNodeParameter('smtp_post', i) as string,
						};
						break;


					case 'updateTokenElevenlabs':
						options.method = 'POST';
						options.uri = 'https://backend.vavicky.com/vavicky/api/elevenlabs/oauth';
						options.body = {
							elevenlabs_token: this.getNodeParameter('elevenlabs_token', i) as string,
						};
						break;

					case 'updateTokenOpenai':
						options.method = 'POST';
						options.uri = 'https://backend.vavicky.com/vavicky/api/openai/oauth';
						options.body = {
							openai_token: this.getNodeParameter('openai_token', i) as string,
						};
						break;

					case 'updateTokenOpenRouter':
						options.method = 'POST';
						options.uri = 'https://backend.vavicky.com/vavicky/api/openrouter/oauth';
						options.body = {
							openrouter_token: this.getNodeParameter('openrouter_token', i) as string,
						};
						break;

					case 'updateTokenDeepSeek':
						options.method = 'POST';
						options.uri = 'https://backend.vavicky.com/vavicky/api/deepseek/oauth';
						options.body = {
							deepseek_token: this.getNodeParameter('deepseek_token', i) as string,
						};
						break;

					case 'updateTokenGemini':
						options.method = 'POST';
						options.uri = 'https://backend.vavicky.com/vavicky/api/gemini/oauth';
						options.body = {
							gemini_token: this.getNodeParameter('gemini_token', i) as string,
						};
						break;

					case 'updateTwilio':
						options.method = 'POST';
						options.uri = 'https://backend.vavicky.com/vavicky/api/gemini/oauth';
						break;

					case 'getAssistants':
						options.method = 'GET';
						options.uri = 'https://backend.vavicky.com/vavicky/api/assistants';
						break;

					case 'getAssistant':
						const assistantId = this.getNodeParameter('assistantId', i) as string;
						options.method = 'GET';
						options.uri = `https://backend.vavicky.com/vavicky/api/assistants/${assistantId}`;
						break;

					case 'getOneAssistant':
						const oneAssistantId = this.getNodeParameter('assistantId', i) as string;
						options.method = 'GET';
						options.uri = `https://backend.vavicky.com/vavicky/api/assistants/one/${oneAssistantId}`;
						break;

					case 'createAssistant': {
						const body: any = {
							name: this.getNodeParameter('name', i) as string,
							apiKey: this.getNodeParameter('apiKey', i) as string,
							welcome_message: this.getNodeParameter('welcome_message', i) as string,
							prompt: this.getNodeParameter('prompt', i) as string,
							active: this.getNodeParameter('active', i) as boolean,
							voice: this.getNodeParameter('voice', i) as boolean,

							// GoHighLevel Integration
							location: this.getNodeParameter('location', i) as string,
							source: this.getNodeParameter('source', i) as string,
							calendar: this.getNodeParameter('calendar', i) as string,
							humanTakeOver: this.getNodeParameter('humanTakeOver', i) as string,
							timezone: this.getNodeParameter('timezone', i) as string,
							customField: this.getNodeParameter('customField', i) as string,

							// AI Configuration
							aiPlatform: this.getNodeParameter('aiPlatform', i) as string,
							openai_model: this.getNodeParameter('openai_model', i) as string,
							openai_temperature: this.getNodeParameter('openai_temperature', i) as number,
							booking_bot: this.getNodeParameter('booking_bot', i) as boolean,

							// OpenAI Specific
							openai_realtime: this.getNodeParameter('openai_realtime', i) as boolean,
							openai_realtime_voice: this.getNodeParameter('openai_realtime_voice', i) as string,
							openai_websites: this.getNodeParameter('openai_websites', i) as string[],

							// Call Limits
							limit_call_time: this.getNodeParameter('limit_call_time', i) as number,
							limit_call_tokens: this.getNodeParameter('limit_call_tokens', i) as number,
							max_call_tokens: this.getNodeParameter('max_call_tokens', i) as number,

							// Voice
							elevenlabs_voice_id: this.getNodeParameter('elevenlabs_voice_id', i) as string,

							// Twilio
							twilio_sid: this.getNodeParameter('twilio_sid', i) as string,
							twilio_token: this.getNodeParameter('twilio_token', i) as string,
							twilio_phone: this.getNodeParameter('twilio_phone', i) as string,
							twilio_welcome: this.getNodeParameter('twilio_welcome', i) as string,
							twilio_speech_timeout: this.getNodeParameter('twilio_speech_timeout', i) as number,
							twilio_initial_delay: this.getNodeParameter('twilio_initial_delay', i) as number,

							// Integrations
							google_calendar: this.getNodeParameter('google_calendar', i) as boolean,
							webhook_to_send: this.getNodeParameter('webhook_to_send', i) as string,
						};

						// Remove empty/undefined values
						Object.keys(body).forEach(key => {
							if (body[key] === '' || body[key] === undefined || body[key] === null) {
								delete body[key];
							}
						});

						options.method = 'POST';
						options.uri = 'https://backend.vavicky.com/vavicky/api/assistants';
						options.body = body;
						options.json = true;
						break;
					}

					case 'updateAssistant': {
						const assistantId = this.getNodeParameter('assistantId', i) as string;
						const body: any = {
							name: this.getNodeParameter('name', i) as string,
						};

						// Only include fields that are provided (not empty)
						const optionalFields = [
							'apiKey', 'welcome_message', 'prompt', 'active', 'voice',
							'location', 'source', 'calendar', 'humanTakeOver', 'timezone', 'customField',
							'aiPlatform', 'openai_model', 'openai_temperature', 'booking_bot',
							'openai_realtime', 'openai_realtime_voice', 'openai_websites',
							'limit_call_time', 'limit_call_tokens', 'max_call_tokens',
							'elevenlabs_voice_id',
							'twilio_sid', 'twilio_token', 'twilio_phone', 'twilio_welcome',
							'twilio_speech_timeout', 'twilio_initial_delay',
							'google_calendar', 'webhook_to_send'
						];

						optionalFields.forEach(field => {
							const value = this.getNodeParameter(field, i, undefined);
							if (value !== undefined && value !== '' && value !== null) {
								body[field] = value;
							}
						});

						options.method = 'PATCH';
						options.uri = `https://backend.vavicky.com/vavicky/api/assistants/${assistantId}`;
						options.body = body;
						options.json = true;
						break;
					}

					case 'deleteAssistant': {
						const assistantId = this.getNodeParameter('assistantId', i) as string;
						options.method = 'DELETE';
						options.uri = `https://backend.vavicky.com/vavicky/api/assistants/${assistantId}`;
						break;
					}

					case 'getAssistantFiles': {
						const assistantId = this.getNodeParameter('assistantId', i) as string;
						options.method = 'GET';
						options.uri = `https://backend.vavicky.com/vavicky/api/assistants/${assistantId}/files`;
						break;
					}

					case 'updateAssistantFiles': {
						const assistantId = this.getNodeParameter('assistantId', i) as string;
						const binaryPropertyName = this.getNodeParameter('binaryPropertyName', i) as string;

						// Handle file upload
						const item = items[i];
						if (item.binary === undefined) {
							throw new NodeOperationError(this.getNode(), 'No binary data exists on item!');
						}

						const binaryData = item.binary[binaryPropertyName];
						if (binaryData === undefined) {
							throw new NodeOperationError(
								this.getNode(),
								`No binary data property "${binaryPropertyName}" does not exists on item!`,
							);
						}

						options.method = 'PATCH';
						options.uri = `https://backend.vavicky.com/vavicky/api/assistants/${assistantId}/files`;
						options.formData = {
							files: {
								value: Buffer.from(binaryData.data, 'binary'),
								options: {
									filename: binaryData.fileName,
									contentType: binaryData.mimeType,
								},
							},
						};
						break;
					}

					case 'deleteAssistantFile': {
						const assistantId = this.getNodeParameter('assistantId', i) as string;
						const fileId = this.getNodeParameter('fileId', i) as string;
						options.method = 'DELETE';
						options.uri = `https://backend.vavicky.com/vavicky/api/assistants/${assistantId}/files/${fileId}`;
						break;
					}

					case 'getAssistantUsage': {
						const assistantId = this.getNodeParameter('assistantId', i) as string;
						options.method = 'GET';
						options.uri = `https://backend.vavicky.com/vavicky/api/assistants/${assistantId}/usage`;
						break;
					}

					case 'getAssistantsTokenUsage': {
						options.method = 'GET';
						options.uri = 'https://backend.vavicky.com/vavicky/api/assistants/all/token/usage';
						break;
					}

					case 'getDashboardAssistant': {
						options.method = 'GET';
						options.uri = 'https://backend.vavicky.com/vavicky/api/assistants/gohighlevel/dashboard';
						break;
					}

					case 'chatWithAssistant': {
						const assistantId = this.getNodeParameter('assistantId', i) as string;
						const message = this.getNodeParameter('message', i) as string;
						const audio = this.getNodeParameter('audio', i) as boolean;

						options.method = 'POST';
						options.uri = `https://backend.vavicky.com/vavicky/api/assistants/${assistantId}/chat?audio=${audio}`;
						options.body = { message };
						options.json = true;
						break;
					}

					// Twilio Operations
					case 'getTwilioUsage': {
						const queryParams = new URLSearchParams();

						const startDate = this.getNodeParameter('startDate', i, '') as string;
						const endDate = this.getNodeParameter('endDate', i, '') as string;
						const limit = this.getNodeParameter('limit', i, 20) as number;

						if (startDate) queryParams.append('start', startDate);
						if (endDate) queryParams.append('end', endDate);
						if (limit) queryParams.append('limit', limit.toString());

						options.method = 'GET';
						options.uri = `https://backend.vavicky.com/vavicky/api/twilio/usage?${queryParams.toString()}`;
						break;
					}

					case 'getTwilioNumbers': {
						options.method = 'GET';
						options.uri = 'https://backend.vavicky.com/vavicky/api/twilio/numbers';
						break;
					}

					case 'getAvailableNumbers': {
						const queryParams = new URLSearchParams();

						const countryCode = this.getNodeParameter('countryCode', i, 'US') as string;
						const numberType = this.getNodeParameter('numberType', i, 'local') as string;
						const searchPattern = this.getNodeParameter('searchPattern', i, '') as string;
						const locality = this.getNodeParameter('locality', i, '') as string;

						if (countryCode) queryParams.append('code', countryCode);
						if (numberType) queryParams.append('type', numberType);
						if (searchPattern) queryParams.append('search', searchPattern);
						if (locality) queryParams.append('locality', locality);

						options.method = 'GET';
						options.uri = `https://backend.vavicky.com/vavicky/api/twilio/numbers/available?${queryParams.toString()}`;
						break;
					}

					case 'getCallsInProgress': {
						options.method = 'GET';
						options.uri = 'https://backend.vavicky.com/vavicky/api/twilio/calls';
						break;
					}

					case 'buyTwilioNumber': {
						const phoneNumber = this.getNodeParameter('phoneNumber', i) as string;

						options.method = 'POST';
						options.uri = 'https://backend.vavicky.com/vavicky/api/twilio/number/buy';
						options.body = { phoneNumber };
						options.json = true;
						break;
					}

					case 'updateTwilioNumber': {
						const numberSid = this.getNodeParameter('numberSid', i) as string;
						const body: any = {};

						const friendlyName = this.getNodeParameter('friendlyName', i, '') as string;
						const voiceWebhook = this.getNodeParameter('voiceWebhook', i, '') as string;
						const smsWebhook = this.getNodeParameter('smsWebhook', i, '') as string;

						if (friendlyName) body.name = friendlyName;
						if (voiceWebhook) body.webhook = voiceWebhook;
						if (smsWebhook) body.smsWebhook = smsWebhook;

						options.method = 'PATCH';
						options.uri = `https://backend.vavicky.com/vavicky/api/twilio/numbers/${numberSid}`;
						options.body = body;
						options.json = true;
						break;
					}

					case 'connectTwilio': {
						const twilioSid = this.getNodeParameter('twilioSid', i) as string;
						const twilioToken = this.getNodeParameter('twilioToken', i) as string;

						options.method = 'POST';
						options.uri = 'https://backend.vavicky.com/vavicky/api/twilio/oauth';
						options.body = {
							sid: twilioSid,
							token: twilioToken
						};
						options.json = true;
						break;
					}

					case 'sendSMS': {
						const assistantId = this.getNodeParameter('assistantId', i) as string;
						const phoneNumber = this.getNodeParameter('phoneNumber', i) as string;
						const smsMessage = this.getNodeParameter('smsMessage', i) as string;
						const contactId = this.getNodeParameter('contactId', i, '') as string;

						const body: any = {
							phonenumber: phoneNumber,
							message: smsMessage
						};

						if (contactId) {
							body.contact_id = contactId;
							body.customData = {
								phonenumber: phoneNumber,
								message: smsMessage
							};
						}

						options.method = 'POST';
						options.uri = `https://backend.vavicky.com/vavicky/api/twilio/${assistantId}/sms`;
						options.body = body;
						options.json = true;
						break;
					}

					case 'makeCall': {
						const assistantId = this.getNodeParameter('assistantId', i) as string;
						const phoneNumber = this.getNodeParameter('phoneNumber', i) as string;
						const contactId = this.getNodeParameter('contactId', i, '') as string;

						const body: any = {
							phonenumber: phoneNumber
						};

						if (contactId) {
							body.contact_id = contactId;
							body.customData = {
								phonenumber: phoneNumber
							};
						}

						options.method = 'POST';
						options.uri = `https://backend.vavicky.com/vavicky/api/twilio/${assistantId}/call`;
						options.body = body;
						options.json = true;
						break;
					}

					case 'makeBulkCall': {
						const assistantId = this.getNodeParameter('assistantId', i) as string;
						const contactBulkId = this.getNodeParameter('contactBulkId', i) as string;

						options.method = 'POST';
						options.uri = `https://backend.vavicky.com/vavicky/api/twilio/${assistantId}/callbulk/${contactBulkId}`;
						options.body = {};
						options.json = true;
						break;
					}

					case 'cancelCall': {
						const callId = this.getNodeParameter('callId', i) as string;

						options.method = 'DELETE';
						options.uri = `https://backend.vavicky.com/vavicky/api/twilio/calls/${callId}`;
						break;
					}

					case 'disconnectTwilio': {
						options.method = 'DELETE';
						options.uri = 'https://backend.vavicky.com/vavicky/api/twilio/';
						break;
					}

					default:
						throw new NodeOperationError(this.getNode(), `Operation '${operation}' not supported`);
				}

				const responseData = await this.helpers.httpRequest(options);
				returnData.push({ json: responseData });
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ json: { error: error.message }, pairedItem: i });
					continue;
				}
				throw new NodeOperationError(this.getNode(), error, { itemIndex: i });
			}
		}

		return [returnData];
	}
}