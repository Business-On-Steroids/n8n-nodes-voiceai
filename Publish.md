# Publish

Open project in VScode

Open the terminal

Change from powershell to command prompt

```bash
cd n8n-nodes-voiceai-main
```

```bash
pnpm install
```

Install the Linter
```bash
pnpm add eslint --save-dev
```

Ensure there are not errors when you run
```bash
pnpm run prepublishOnly
```

```bash
Change the version in package.json file
````


Build the node
```bash
pnpm run build
```


Publish Node
```bash
npm publish
```

Go to n8n guide to publish the community node.
```bash
https://docs.n8n.io/integrations/creating-nodes/deploy/submit-community-nodes/#standards
```
