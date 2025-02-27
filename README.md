# Know-your-Macros

## Overview

Know Your Macros is a simple Chrome extension that allows users to quickly look up the macronutrient composition of various foods. Users can input a food item and select a macronutrient (Calories, Total Fat, Protein, or Carbohydrates) to retrieve relevant nutritional information.

## Features
- Search for any food item and get its macronutrient breakdown.
- Choose a specific macronutrient to focus on (Calories, Fat, Protein, Carbohydrates).
- Fetches real-time nutritional data using the [API-Ninjas Nutrition API](https://www.api-ninjas.com/api/nutrition).
- Easy-to-use interface within a Chrome extension popup.

## Installation
1. Clone or download the repository.
2. Open Google Chrome and navigate to chrome://extensions/.
3. Enable Developer mode (toggle in the top-right corner).
4. Click Load unpacked and select the project folder.
5. The "Know Your Macros" extension will now be available in your Chrome toolbar.

## Usage
1. Click the "Know Your Macros" Chrome extension icon.
2. Enter a food item (e.g., "1lb brisket and fries").
3. Select a macronutrient from the dropdown menu.
4. Click the Search button to retrieve the nutritional data.
5. View the results displayed in the popup.

## KnowYourMacros Directory Structure
### File Descriptions:
- **index.html**: The main user interface of the Chrome extension.
- **macros.js**: Contains the JavaScript logic for handling API requests and updating the UI.
- **manifest.json**: The manifest file required for Chrome extensions to define metadata and permissions.
- **icon.jpg**: The icon used for the extension.

## API Key Configuration
This extension uses the [API-Ninjas Nutrition API](https://www.api-ninjas.com/api/nutrition). The API key is embedded in macros.js. If you need to replace it:
1. Sign up on API-Ninjas and obtain an API key.
2. Open macros.js and update the following line:
```
const apiKey = 'YOUR_NEW_API_KEY_HERE';
```
3. Save the file and reload the extension in Chrome.

## Dependencies
- [jQuery](https://code.jquery.com/jquery-3.6.4.min.js)

## Potential Improvements
- Enhance UI/UX for a better user experience.
- Allow users to view all macronutrients at once.
- Improve error handling and display more informative messages.
- Add local storage to save past searches.

## Acknowledgements:
- [API-Ninjas](https://api-ninjas.com/) for providing the Nutrition API.
- jQuery for simplifying JavaScript interactions.
