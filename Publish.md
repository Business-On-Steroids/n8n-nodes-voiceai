# Publish

Close the repository
```bash
git clone https://github.com/Business-On-Steroids/n8n-nodes-voiceai.git
```

Go into the folder
Open project folder <strong>n8n-nodes-voiceai</strong> in VScode
```bash
cd n8n-nodes-voiceai
```


Open the terminal

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

Test Node
```bash
pnpm run test:credentials
```

Publish Node
```bash
npm publish --access public
```