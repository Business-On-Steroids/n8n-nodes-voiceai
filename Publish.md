# Publish

Open porject in VScode

Open the terminal

Change from powershell to command prompt

```bash
cd n8n-nodes-voiceai
```

```bash
pnpm install
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