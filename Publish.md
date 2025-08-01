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

Build the node
```bash
pnpm run build
```


Publish Node
```bash
npm publish
```