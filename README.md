# Animated Icons with React and Framer Motion

This project demonstrates the use of **React** and **Framer Motion** to create animated success and error icons. The icons come in both **filled** and **outlined** variants, with smooth animation transitions that indicate success or failure. Each icon's paths have customizable delays for more dynamic visual effects.

## Features

- Animated success and error icons
- Filled and outlined icon variants
- Customizable animation delays for each icon
- Built with React and Framer Motion

## Setup

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/animated-icons.git
   ```

2. **\*Navigate to the project directory && Install dependencies**:

   ```bash
   cd animated-icons && npm install
   ```

3. **Run the development server**:

   ```bash
   npm run start
   ```

## How It Works

The project consists of a simple AnimatedIcon component that accepts the following props:

- paths: An array of path objects that define the shapes of the success or error icon.
- color: The color of the icon (default is #4CAF50 for success).
- outline: A boolean that determines whether the icon is filled or outlined.
- iconDelay: A custom delay for the animation of each icon's paths.

You can use the component in your React app as shown in the example below:

```jsx
<AnimatedIcon paths={SuccessPaths} color="#4CAF50" />
<AnimatedIcon paths={ErrorPaths} color="#F44336" iconDelay={1} />
```

## Dependencies

- React: A JavaScript library for building user interfaces.
- Framer Motion: A library for creating animations in React.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
