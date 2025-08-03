# Publish

Close the repository
```bash
git clone https://github.com/Business-On-Steroids/n8n-nodes-voiceai.git
```

Open project folder <strong>n8n-nodes-voiceai</strong> in VScode

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


Publish Node
```bash
npm publish
```