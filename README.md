# Progressive Pixel Animation Menu

This mini-project showcases a responsive grid with a 2D progressive pixel animation. The grid is initially hidden and becomes visible when the "Open Menu" button is clicked, revealing a pixelated animation effect. This project includes two HTML files, a JavaScript file, and a CSS file to demonstrate the integration of pixel animations in a menu system.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Screen Recording](#screen-recording)
- [How the Grid System Works](#how-the-grid-system-works)
  - [Grid Layout](#grid-layout)
  - [Column and Row Division](#column-and-row-division)
  - [Animation Process](#animation-process)
- [How to Use](#how-to-use)
- [File Descriptions](#file-descriptions)
  - [`pixel-concept.html`](#pixel-concepthtml)
  - [`pixelated-menu-reveal.html`](#pixelated-menu-revealhtml)
  - [`script.js`](#scriptjs)
  - [`styles.css`](#stylescss)
- [Installation](#installation)


## Project Structure

The project consists of the following files:

1. **`pixel-concept.html`**: Demonstrates the basic concept of a responsive grid with 2D progressive pixel animation.
2. **`pixelated-menu-reveal.html`**: Integrates the grid animation with a menu system, featuring open and close buttons.
3. **`script.js`**: Contains the JavaScript code for grid creation and animation logic.
4. **`styles.css`**: Provides the styling for the grid, buttons, and menu items.

## Features

- **Responsive Grid**: The grid adapts to the viewport size, maintaining a pixelated layout.
- **Progressive Pixel Animation**: The grid items transition from dark green to light green in a progressive manner.
- **Menu Integration**: A menu is revealed when the grid is opened, and hidden when closed.

## Screen Recording

A screen recording demonstrating the progressive pixel animation and menu integration can be viewed here:

- [Screen Recording](assets/screenrecording.mov)

## How the Grid System Works

### Grid Layout

The grid is designed to cover the entire viewport, with the following characteristics:

- **Dynamic Size**: The grid items are sized based on the viewport height to ensure they fit proportionally.
- **Grid Creation**: The grid is created dynamically based on the viewport dimensions, with each item having a size that ensures no fractional pixels.

### Column and Row Division

To control the progressive animation effect, the grid system divides the columns and rows into distinct sections:

1. **Columns Divided into Quarters**:
   - The total number of columns is divided into four quarters.
   - Each quarter is animated at a different speed to create a staggered effect.
   - This division allows for varying speeds of the color transition from dark green to light green.

2. **Rows Divided into Thirds**:
   - The total number of rows is divided into three sections.
   - Each section of rows is animated progressively.
   - This division ensures that the animation transitions smoothly across the grid.

### Animation Process

- **Initial State**: By default, certain columns and rows are set to light green to create an initial visual effect and allow the menu items to be vissible without pixel interference.
- **Progressive Animation**: The grid items in each section (quarters and thirds) change color from dark green to light green in a progressive manner. The speed of this transition varies by section, creating a visually appealing effect. The grid divides the columns into equal quarters, and rows into three (top section of rows represents 25% of rows, middle section represent 50%, and bottom section represents 25%). This allows for sections to be controlled differently and allow for responsivness since there is no constant number of col/rows.

## How to Use

1. **Open `pixelated-menu-reveal.html`**: This file integrates the pixelated grid with a menu system. The grid is hidden by default and is shown when the "OPEN MENU" button is clicked.

2. **JavaScript Functionality**: The `script.js` file contains functions to create the grid, handle button clicks, and manage the pixel animation. The grid's appearance changes progressively as per the defined intervals.

3. **Styling**: The `styles.css` file handles the layout and visual aspects of the grid, buttons, and menu items. It includes responsive design to ensure proper display on various screen sizes.

## File Descriptions

### `pixel-concept.html`

This file demonstrates the grid concept with a basic implementation. It includes:

- **Grid Container**: Initially hidden, becomes visible when the button is clicked.
- **JavaScript**: Creates and animates the grid based on viewport dimensions.

### `pixelated-menu-reveal.html`

An enhanced version that integrates the grid with a menu system. Features:

- **Open/Close Buttons**: Toggle the visibility of the grid and menu.
- **Menu Items**: Appears alongside the grid when opened.

### `script.js`

Contains the JavaScript code to:

- Create the grid layout.
- Handle button clicks to show/hide elements.
- Apply the pixel animation effect to the grid items.

### `styles.css`

Provides the styling for:

- **Grid Items**: Dark green by default, light green during animation.
- **Buttons**: Styled for visibility and interaction.
- **Menu Items**: Positioned and styled for display.

## Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/your-repository-name.git

2. Open pixelated-menu-reveal.html in your browser to view the interactive grid and menu.



