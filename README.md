# Carousel Component

This repository contains a custom React component that displays a dynamic carousel using the `@splidejs/react-splide` library. The carousel features two main sliders: one for selecting categories and another for displaying content slides based on the selected category.

## Previews

### Video Preview

[![Click on the Image to Download the video](https://github.com/AroshaRavishan/Tab-Slider-with-Tab-contents-and-slider-progress-bar-NextJS-React/blob/main/sample%20Preview.png)](https://github.com/AroshaRavishan/Tab-Slider-with-Tab-contents-and-slider-progress-bar-NextJS-React/raw/main/Preview%20Video.mp4)

### Image Preview

![Sample Preview](https://github.com/AroshaRavishan/Tab-Slider-with-Tab-contents-and-slider-progress-bar-NextJS-React/blob/main/sample%20Preview.png)


## Features

- **Category Slider**: Displays various categories such as Information Technology, Business, Management, Administration, Project Management, HR & Leadership, and Sales & Marketing.
- **Content Slider**: Displays content slides corresponding to the selected category.
- **Navigation Controls**: Includes navigation buttons to move between slides.
- **Responsive Design**: Adjusts the number of visible slides based on the screen size.
- **Autoplay**: Both sliders have autoplay functionality with adjustable intervals and settings.
- **Progress Bar**: Shows the progress of the content slider.

## Key Functionalities

### State Management

- `hasStarted`: Tracks if the sliders have started moving.
- `isAtEnd`: Tracks if the category slider is at the end.
- `activeCategory`: Stores the currently selected category.
- `progress`: Tracks the progress of the content slider.

### Refs

- `categorySplideRef`: Reference to the category slider instance.
- `contentSplideRef`: Reference to the content slider instance.

### Handlers

- **Navigation Handlers**: Functions to move the sliders backward and forward.
- **Category Selection**: Function to handle category clicks and update the active category.

### Splide Options

- **Category Slider Options**: Configuration for the category slider, including slide type, per page slides, autoplay settings, and breakpoints.
- **Content Slider Options**: Configuration for the content slider, including slide type, per page slides, rewind settings, and breakpoints.

### Effects

- **Update Navigation Buttons State**: An effect to update the state of the navigation buttons based on the slider’s current position.

## Assets

- **Images**: Placeholder images for banner and category icons.
- **Icons**: Chevron icons for navigation buttons.

## Dependencies

- `react`
- `@splidejs/react-splide`
- `@splidejs/splide`
- `@splidejs/splide/dist/css/themes/splide-default.min.css`

## Future Enhancements

- Add more categories and slides as needed.
- Improve the styling and responsiveness.
- Add more interactive features and animations.
