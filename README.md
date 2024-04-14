# Fuzzy Search Widget

This repository contains the code for a search widget. The Widget can be activated by clicking the the "Click to search" button as well as press the key combination Cmd/Ctrl + K. The widget will then open and the user can start typing to search for a specific item. The widget will then show the search results in a list below the search input. The user can then click on the item to navigate to the specific page.

## Features

- **Fuzzy Search**: The search widget uses [ChatBotKit Datasets](https://chatbotkit.com/docs/datasets) to perform fuzzy search on the provided data.
- **ChatBotKit Solution**: All ChatBotKit resources are setup with a solution file. The file contains the necessary resources to run the search widget and it is bootstraped upon deployment.

## Technology Stack

- **ChatBotKit CLI**: For creating and managing ChatBotKit resources.
- **ChatBotKit SDK**: For building the search widget and interacting with ChatBotKit resources.
- **React**: For UI components that interact with the user.

## Setup

1. Ensure you have Node.js installed.
2. Clone this repository.
3. Install dependencies by running npm install.
4. Set the `CHATBOTKIT_API_SECRET` environment variable with your ChatBotKit API secret.

## Usage

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about ChatBotKit and relevent SDKs look at the following resources:

- [ChatBotKit Documentation](https://chatbotkit.com/docs) - learn about ChatBotKit
- [ChatBotKit JavaScript SDKs](https://github.com/chatbotkit/node-sdk) - learn about used SDKs

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com).

## Contributing

Contributions to enhance the chatbot's functionality or address issues are welcome. Please follow the standard pull request process for contributions.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
