# AI Website Builder Landing Page

This is a modern, minimalistic landing page for the AI platform "Learn Better AI", built with React and modern web technologies.

## Instructions for AI Assistant

When working with this project, the AI assistant should:

1. **Modern Development Stack**

   - Use React with TypeScript for type safety
   - Implement modern React features (hooks, functional components)
   - Use Vite as the build tool for fast development
   - Include Tailwind CSS for styling
   - Use modern React libraries:
     - React Router for navigation
     - Framer Motion for animations
     - React Query for data fetching
     - React Hook Form for forms
   - Follow React best practices and patterns

2. **Browser Preview**

   - After ANY modification to the website files
   - Start the development server with:
     ```bash
     npm run dev
     ```
   - ALWAYS open the browser automatically using:
     - `open http://localhost:5173` (for macOS)
     - `start http://localhost:5173` (for Windows)
     - `xdg-open http://localhost:5173` (for Linux)

3. **Code Organization**

   - Follow React project structure:
     ```
     src/
     ├── components/     # Reusable components
     ├── pages/         # Page components
     ├── hooks/         # Custom hooks
     ├── utils/         # Utility functions
     ├── assets/        # Static assets
     ├── styles/        # Global styles
     └── types/         # TypeScript types
     ```
   - Use proper component naming (PascalCase)
   - Implement proper TypeScript types
   - Follow React component composition patterns

4. **Design Principles**

   - Use Tailwind CSS for responsive design
   - Implement dark mode support
   - Use CSS variables for theming
   - Follow modern design trends
   - Ensure accessibility (ARIA, semantic HTML)
   - Use modern animations with Framer Motion

5. **Performance**

   - Implement code splitting
   - Use React.lazy for route-based splitting
   - Optimize images with next/image
   - Implement proper caching strategies
   - Use React.memo when beneficial
   - Monitor and optimize bundle size

6. **Development Workflow**
   - Use ESLint and Prettier for code quality
   - Implement proper Git workflow
   - Use conventional commits
   - Include proper documentation
   - Write unit tests for components
   - Use Storybook for component documentation

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
.
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom hooks
│   ├── utils/         # Utility functions
│   ├── assets/        # Static assets
│   ├── styles/        # Global styles
│   └── types/         # TypeScript types
├── public/            # Static files
├── index.html         # Entry HTML file
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind configuration
└── README.md          # This file
```

## Dependencies

- React 18+
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- React Query
- React Hook Form
- ESLint
- Prettier
- Vitest (for testing)
