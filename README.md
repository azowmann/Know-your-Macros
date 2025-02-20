# Know-your-Macros

## Overview

Know Your Macros is a simple Chrome extension that allows users to quickly look up the macronutrient composition of various foods. Users can input a food item and select a macronutrient (Calories, Total Fat, Protein, or Carbohydrates) to retrieve relevant nutritional information.

## Features
- Search for any food item and get its macronutrient breakdown.
- Choose a specific macronutrient to focus on (Calories, Fat, Protein, Carbohydrates).
- Fetches real-time nutritional data using the API-Ninjas Nutrition API.
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


### File Descriptions:
- **index.html**: The main user interface of the Chrome extension.
- **macros.js**: Contains the JavaScript logic for handling API requests and updating the UI.
- **manifest.json**: The manifest file required for Chrome extensions to define metadata and permissions.
- **icon.jpg**: The icon used for the extension.
